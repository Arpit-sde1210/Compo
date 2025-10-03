import React from 'react';
import './dropdown-btn.css';

const DropdownButton = ({ onClick, type = "button" }) => {
  return (
    <button 
      className="dropdown-btn"
      onClick={onClick}
      type={type}
    >
      Facetime HD Camera
    </button>
  );
};

export default DropdownButton;