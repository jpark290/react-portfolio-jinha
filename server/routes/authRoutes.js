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

// server/routes/authRoutes.js
import express from 'express';
import {
  signin,
  signout
} from '../controllers/authController.js';

const router = express.Router();

// === Authentication Routes ===
// POST /api/auth/signin -> login and return token
// GET /api/auth/signout -> logout (clear cookie)
router.route('/signin').post(signin);
router.route('/signout').get(signout);

export default router;
