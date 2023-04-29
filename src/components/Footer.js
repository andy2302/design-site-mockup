import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/services" className="footer-link">Services</Link>
        <a href="/terms" className="footer-link">Terms & Conditions</a>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="social-link">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
