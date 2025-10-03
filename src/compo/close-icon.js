import React from 'react';
import './close-icon.css';

const CloseIconButton = ({ onClick, type = "button" }) => {
  return (
    <button 
      className="close-icon-btn"
      onClick={onClick}
      type={type}
    >
      <svg className="close-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4.99994L5 14.9999" stroke="#37352F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 4.99994L15 14.9999" stroke="#37352F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default CloseIconButton;