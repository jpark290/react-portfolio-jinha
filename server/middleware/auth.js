// server/middleware/auth.js
import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  // Expect header: Authorization: Bearer <token>
  const auth = req.headers.authorization || '';
  const [, token] = auth.split(' '); // ["Bearer", "<token>"]

  if (!token) return res.status(401).json({ message: 'Unauthorized: token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { _id, email, name, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: invalid or expired token' });
  }
};
