import { Router } from 'express';
import { getAll, getById, createOne, updateById, removeById, removeAll } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = Router();

router.get('/', protect, getAll);
router.get('/:id', protect, getById);
router.post('/', createOne);
router.put('/:id', protect, updateById);
router.delete('/:id', protect, removeById);
router.delete('/', protect, removeAll);

export default router;
