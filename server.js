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

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './server/config/db.js';

import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import qualificationRoutes from './server/routes/qualificationRoutes.js';
import userRoutes from './server/routes/userRoutes.js';
import authRoutes from './server/routes/authRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Portfolio Backend OK @ ' + new Date().toISOString());
});

app.get('/', (_req, res) => {
  res.send('Portfolio Application Backend is running...');
});

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

