import React from 'react';
import './error-btn.css';

const ErrorButton = ({ children, onClick, type = "button" }) => {
  return (
    <button 
      className="error-btn"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ErrorButton;