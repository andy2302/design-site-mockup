import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Creative Compass Studio
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        {user && (
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
        )}
        {user ? (
          <li className="navbar-item dropdown">
            <span className="navbar-link dropdown-toggle">{user.firstName}</span>
            <div className="dropdown-content">
              <button onClick={logout}>Logout</button>
            </div>
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
