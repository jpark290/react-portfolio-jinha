import { Navigate } from 'react-router-dom';

// Redirects to /signin if no JWT exists
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('jwt');
  if (!token) return <Navigate to="/signin" replace />;
  return children;
}