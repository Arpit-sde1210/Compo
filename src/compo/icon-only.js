import React from 'react';
import './icon-only.css';

const IconOnlyButton = ({ 
  onClick, 
  type = "button",
  iconType = "copy",
  tooltip = "",
  className = ""
}) => {
  console.log('IconOnlyButton rendering:', iconType); // Debug line

  const handleClick = (e) => {
    console.log('Button clicked:', iconType); // Debug line
    if (onClick) {
      onClick(e);
    }
  };

  // Simple text icons - no SVG
  const getIcon = () => {
    switch (iconType) {
      case "copy":
        return "📋";
      case "edit":
        return "✏️";  
      case "delete":
        return "🗑️";
      default:
        return "❓";
    }
  };

  return (
    <button 
      className={`icon-only-btn ${className}`}
      onClick={handleClick}
      type={type}
      aria-label={tooltip}
      data-tooltip={tooltip}
    >
      {getIcon()}
    </button>
  );
};

export default IconOnlyButton;