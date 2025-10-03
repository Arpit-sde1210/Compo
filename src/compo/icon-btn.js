import React from 'react';
import './icon-btn.css';

const IconButton = ({ children, onClick, type = "button", icon: Icon }) => {
  return (
    <button 
      className="icon-btn"
      onClick={onClick}
      type={type}
    >
      {Icon && <span className="btn-icon"><Icon /></span>}
      {children}
    </button>
  );
};

export default IconButton;