import React, { useState } from 'react';
import './icon-only.css';

const IconOnlyButton = ({ 
  onClick, 
  type = "button",
  iconType = "copy",
  tooltip = "",
  className = ""
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = (e) => {
    if (iconType === "copy") {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  // Copy Icon SVG - FIXED
  const CopyIcon = () => (
    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_246_1369)">
        <path d="M12.7115 14.6439C12.9882 15.0138 13.3412 15.3199 13.7466 15.5413C14.152 15.7628 14.6002 15.8945 15.061 15.9275C15.5217 15.9605 15.9842 15.894 16.417 15.7326C16.8498 15.5711 17.2428 15.3185 17.5694 14.9918L19.5022 13.059C20.089 12.4514 20.4137 11.6377 20.4064 10.793C20.3991 9.94838 20.0603 9.14041 19.463 8.54314C18.8657 7.94586 18.0577 7.60707 17.2131 7.59973C16.3685 7.59239 15.5547 7.91709 14.9472 8.5039L13.839 9.60562M15.2886 13.3553C15.0119 12.9854 14.6589 12.6794 14.2536 12.4579C13.8482 12.2364 13.3999 12.1047 12.9392 12.0717C12.4784 12.0387 12.016 12.1052 11.5832 12.2666C11.1504 12.4281 10.7573 12.6807 10.4308 13.0074L8.49791 14.9403C7.91111 15.5478 7.58641 16.3616 7.59375 17.2062C7.60109 18.0508 7.93988 18.8588 8.53716 19.4561C9.13443 20.0534 9.9424 20.3921 10.787 20.3995C11.6317 20.4068 12.4454 20.0821 13.053 19.4953L14.1547 18.3936" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_246_1369">
          <rect width="16" height="16" fill="white" transform="translate(6 6)"/>
        </clipPath>
      </defs>
    </svg>
  );

  // Tick Mark SVG - FIXED
  const TickIcon = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Edit Icon SVG - FIXED
  const EditIcon = () => (
    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0001 19.3332H20.0001M16.9174 8.41449C17.1828 8.1491 17.5427 8 17.9181 8C18.2934 8 18.6533 8.1491 18.9187 8.41449C19.1841 8.67988 19.3332 9.03983 19.3332 9.41516C19.3332 9.79048 19.1841 10.1504 18.9187 10.4158L10.9121 18.4232C10.7535 18.5818 10.5574 18.6978 10.3421 18.7605L8.4274 19.3192C8.37003 19.3359 8.30923 19.3369 8.25134 19.3221C8.19345 19.3072 8.14062 19.2771 8.09836 19.2349C8.05611 19.1926 8.02599 19.1398 8.01116 19.0819C7.99633 19.024 7.99733 18.9632 8.01407 18.9058L8.57273 16.9912C8.63555 16.776 8.75156 16.5802 8.91007 16.4218L16.9174 8.41449Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Delete Icon SVG - FIXED
  const DeleteIcon = () => (
    <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9.99991H20M18.6667 9.99991V19.3332C18.6667 19.9999 18 20.6666 17.3334 20.6666H10.6667C10 20.6666 9.33337 19.9999 9.33337 19.3332V9.99991M11.3334 9.99992V8.66659C11.3334 7.99992 12 7.33325 12.6667 7.33325H15.3334C16 7.33325 16.6667 7.99992 16.6667 8.66659V9.99992M12.6666 13.3333V17.3333M15.3334 13.3333V17.3333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Get the appropriate icon based on iconType and state
  const getIcon = () => {
    if (iconType === "copy" && isCopied) {
      return <TickIcon />;
    }
    
    switch (iconType) {
      case "copy":
        return <CopyIcon />;
      case "edit":
        return <EditIcon />;
      case "delete":
        return <DeleteIcon />;
      default:
        return <CopyIcon />;
    }
  };

  // Get tooltip text based on state
  const getTooltipText = () => {
    if (iconType === "copy" && isCopied) {
      return "Copied";
    }
    return tooltip;
  };

  return (
    <button 
      className={`icon-only-btn ${className}`}
      onClick={handleClick}
      type={type}
      aria-label={getTooltipText()}
      data-tooltip={getTooltipText()}
    >
      {getIcon()}
    </button>
  );
};

export default IconOnlyButton;