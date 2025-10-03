import React, { useState } from 'react';
import './copy-btn.css';

const CopyButton = ({ onClick, type = "button" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    if (onClick) onClick();
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button 
      className={`copy-btn ${isCopied ? 'copied' : ''}`}
      onClick={handleClick}
      type={type}
    >
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyButton;