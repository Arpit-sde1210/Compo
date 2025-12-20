import React from 'react';
import PrimaryButton from '../compo/primary-btn';
import UserTestIcon from '../assets/UserTestIcon';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="logo-container">
          <UserTestIcon size={40} />
          <span className="logo-text">UserTest</span>
        </div>

        {/* Links */}
        <nav className="nav-links">
          <a href="#pricing">Pricing</a>
          <a href="#faqs">FAQs</a>
        </nav>

        {/* CTA */}
        <PrimaryButton>Create test</PrimaryButton>
      </div>
    </header>
  );
};

export default Navbar;
