import { Router } from 'express';
import { signup, signin, signout } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', protect, signout);

export default router;
