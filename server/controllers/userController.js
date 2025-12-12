/*
Author: Jinha Park
Student ID: 301475372
Course: COMP229 – Web Application Development
Assignment: 2 – Portfolio Application (Node.js + Express + MongoDB)
Date: October 30, 2025
Description:
This file is part of the backend implementation for the portfolio application.
It contributes to Express server configuration, MongoDB integration,
RESTful API endpoints, or authentication logic as required.
*/

// server/controllers/userController.js
import User from '../models/user.js';

/** 
 - Middleware: userById
 - Finds user by ID param and attaches it to req.profile.
 */
export const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).select('_id name email created updated');
    if (!user) return res.status(404).json({ message: 'User not found' });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Could not retrieve user' });
  }
};

// GET /api/users
// Return a list of all users (excluding sensitive fields)
export const getUsers = async (_req, res) => {
  const users = await User.find()
    .select('_id name email created updated')
    .lean();
  res.json(users);
};

// GET /api/users/:id
// Return a single user by ID (excluding sensitive fields)
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
    .select('_id name email created updated')
    .lean();
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// POST /api/users
// Create a new user (signup) using virtual password field
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'name, email, and password are required' });

  try {
    const user = new User({ name, email, password });
    await user.save();
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      created: user.created,
    });
  } catch {
    return res.status(400).json({ message: 'User creation failed' });
  }
};

// PUT /api/users/:id
// Update user info (name/email/password). Password rehashed if changed.
export const updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (password) user.password = password;
  user.updated = new Date();

  await user.save();
  return res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    created: user.created,
    updated: user.updated,
  });
};

// DELETE /api/users/:id
// Delete a single user by ID
export const deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id).lean();
  if (!deleted) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User removed', id: deleted._id });
};

// DELETE /api/users 
// Remove all users (for testing/demo purposes)
export const deleteAllUsers = async (_req, res) => {
  const r = await User.deleteMany({});
  res.json({ message: 'All users removed', deletedCount: r.deletedCount });
};