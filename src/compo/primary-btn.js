import React from 'react';
import './primary-btn.css';

const PrimaryButton = ({ children, onClick, type = "button" }) => {
  return (
    <button 
      className="primary-btn"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;