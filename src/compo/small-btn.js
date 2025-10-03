import React from 'react';
import './small-btn.css';

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button 
      className="small-btn"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;