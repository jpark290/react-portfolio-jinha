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

import { Router } from 'express';
import {
  getQualifications, getQualificationById, createQualification,
  updateQualification, deleteQualification, deleteAllQualifications
} from '../controllers/qualificationController.js';

const router = Router();

router.get('/', getQualifications);
router.get('/:id', getQualificationById);
router.post('/', createQualification);
router.put('/:id', updateQualification);
router.delete('/:id', deleteQualification);
router.delete('/', deleteAllQualifications);

export default router;
