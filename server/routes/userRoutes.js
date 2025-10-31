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
