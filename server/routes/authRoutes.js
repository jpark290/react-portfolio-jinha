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
