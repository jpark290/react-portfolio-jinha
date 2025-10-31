import express from 'express';
import {
  getProjects, getProjectById, createProject, updateProject, deleteProject, deleteAllProjects
} from '../controllers/projectController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

router.post('/', requireAuth, createProject);
router.put('/:id', requireAuth, updateProject);
router.delete('/:id', requireAuth, deleteProject);
router.delete('/', requireAuth, deleteAllProjects);

export default router;
