import React from 'react';
import './icon-only.css';

const IconOnlyButton = ({ onClick, type = "button" }) => {
  return (
    <button 
      className="icon-only-btn"
      onClick={onClick}
      type={type}
      aria-label="Copy link"
    >
      <svg 
        className="link-icon" 
        width="28" 
        height="28" 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_275_1882)">
          <path d="M12.7116 14.6439C12.9883 15.0138 13.3413 15.3199 13.7467 15.5414C14.1521 15.7628 14.6003 15.8945 15.0611 15.9275C15.5219 15.9605 15.9843 15.8941 16.4171 15.7326C16.8499 15.5712 17.2429 15.3185 17.5695 14.9918L19.5024 13.059C20.0892 12.4514 20.4139 11.6377 20.4065 10.7931C20.3992 9.94841 20.0604 9.14044 19.4631 8.54317C18.8658 7.94589 18.0579 7.6071 17.2132 7.59976C16.3686 7.59242 15.5549 7.91712 14.9473 8.50393L13.8391 9.60565M15.2888 13.3554C15.0121 12.9855 14.6591 12.6794 14.2537 12.4579C13.8483 12.2364 13.4 12.1047 12.9393 12.0717C12.4785 12.0387 12.0161 12.1052 11.5833 12.2667C11.1505 12.4281 10.7575 12.6808 10.4309 13.0074L8.49804 14.9403C7.91123 15.5479 7.58653 16.3616 7.59387 17.2062C7.60121 18.0509 7.94 18.8588 8.53728 19.4561C9.13455 20.0534 9.94252 20.3922 10.7872 20.3995C11.6318 20.4069 12.4455 20.0822 13.0531 19.4954L14.1548 18.3936" stroke="#78716C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_275_1882">
            <rect width="16" height="16" fill="white" transform="translate(6 6)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default IconOnlyButton;