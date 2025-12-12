/*
 * Jinha Park
 * File: components/Layout.jsx
 * Purpose: Renders top brand (logo + title) and navigation bar.
 */

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Layout() {
  const token = localStorage.getItem('jwt');

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.href = '/';
  };

  return (
    <>
      <header className="site-header">
        <div className="brand">
          <img src={logo} alt="Logo" />
          <h1>My Portfolio</h1>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>

          {!token ? (
            <>
              <Link to="/signin">Sign in</Link>
              <Link to="/signup">Sign up</Link>
            </>
          ) : (
            <>
              <Link to="/users">Users</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </header>

      <hr className="divider" />
    </>
  );
}
