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

import Qualification from '../models/qualification.js';

export const getQualifications = async (_req, res) => res.json(await Qualification.find().lean());

export const getQualificationById = async (req, res) => {
  const doc = await Qualification.findById(req.params.id).lean();
  if (!doc) return res.status(404).json({ message: 'Qualification not found' });
  res.json(doc);
};

export const createQualification = async (req, res) => {
  const { title, firstname, lastname, email, completion, description } = req.body;
  if (!title || !firstname || !lastname || !email || !completion || !description)
    return res.status(400).json({ message: 'All fields are required' });
  const created = await Qualification.create({
    title, firstname, lastname, email,
    completion: new Date(completion),
    description
  });
  res.status(201).json(created);
};

export const updateQualification = async (req, res) => {
  const payload = { ...req.body };
  if (payload.completion) payload.completion = new Date(payload.completion);
  const updated = await Qualification.findByIdAndUpdate(req.params.id, payload, { new: true }).lean();
  if (!updated) return res.status(404).json({ message: 'Qualification not found' });
  res.json(updated);
};

export const deleteQualification = async (req, res) => {
  const deleted = await Qualification.findByIdAndDelete(req.params.id).lean();
  if (!deleted) return res.status(404).json({ message: 'Qualification not found' });
  res.json({ message: 'Qualification removed', id: deleted._id });
};

export const deleteAllQualifications = async (_req, res) => {
  const r = await Qualification.deleteMany({});
  res.json({ message: 'All qualifications removed', deletedCount: r.deletedCount });
};
