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

// server/controllers/authController.js
// Loads env from the project root regardless of working directory
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT_DIR   = path.resolve(__dirname, '../..'); // -> project root
dotenv.config({ path: path.join(ROOT_DIR, '.env') });

import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';

/** POST /api/auth/signin
 *  Authenticates user by email+password and returns a JWT token.
 */
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: 'email and password are required' });

    const user = await User.findOne({ email }).exec();
    if (!user || !user.authenticate(password))
      return res.status(401).json({ message: 'Email and password do not match' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

  return res.json({
    token,
    user: { _id: user._id, name: user.name, email: user.email, role: user.role }
  });
  } catch (err) {
    return res.status(401).json({ error: 'Could not sign in' });
  }
};

/** GET /api/auth/signout
 *  Simple signout endpoint (no server state kept).
 */
export const signout = (_req, res) => {
  return res.status(200).json({ message: 'signed out' });
};

/** Middleware: requireSignin
 *  Protects routes using JWT in Authorization: Bearer <token>.
 */
export const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'auth',
});

/** Middleware: hasAuthorization
 *  Ensures the authenticated user matches the target resource owner.
 */
export const hasAuthorization = (req, _res, next) => {
  const authorized = req.profile && req.auth && String(req.profile._id) === String(req.auth._id);
  if (!authorized) return next({ status: 403, message: 'User is not authorized' });
  next();
};

/** Middleware: isAdmin
 *  Allows only users with role 'admin' (use after requireSignin).
 */
export const isAdmin = async (req, _res, next) => { // ADDED
  try {
    const user = await User.findById(req.auth?._id).lean();
    if (!user || user.role !== 'admin') {
      return next({ status: 403, message: 'Admin only' });
    }
    next();
  } catch {
    return next({ status: 403, message: 'Admin only' });
  }
};