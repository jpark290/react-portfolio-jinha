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
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from '../controllers/userController.js';
import { requireSignin } from '../controllers/authController.js';

const router = express.Router();

router.post('/', createUser);

router.get('/', requireSignin, getUsers);
router.get('/:id', requireSignin, getUserById);
router.put('/:id', requireSignin, updateUser);
router.delete('/:id', requireSignin, deleteUser);
router.delete('/', requireSignin, deleteAllUsers);

export default router;
