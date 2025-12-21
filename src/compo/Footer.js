// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer frame-29">
      <Link to="/terms" className="footer-link">Terms of Use</Link>
      <Link to="/privacy" className="footer-link">Privacy</Link>
      <Link to="/contact" className="footer-link">Contact</Link>
    </footer>
  );
};

export default Footer;
