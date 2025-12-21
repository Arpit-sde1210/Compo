import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorButton from '../compo/error-btn';
import UserTestIcon from '../assets/UserTestIcon';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToHomeTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="logo-container" onClick={goToHomeTop} style={{ cursor: 'pointer' }}>
          <UserTestIcon size={40} />
          <span className="logo-text">UserTest</span>
        </div>

        {/* Links */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button onClick={() => scrollToSection('faq')}>FAQs</button>
        </nav>

        {/* CTA */}
        <ErrorButton onClick={goToHomeTop}>
          Get Started
        </ErrorButton>
      </div>
    </header>
  );
};

export default Navbar;
