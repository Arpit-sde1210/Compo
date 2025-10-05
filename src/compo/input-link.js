import React from 'react';
import './input-link.css';

const InputLink = ({ placeholder, value, onChange }) => {
  return (
    <div className={`input-link ${value ? 'filled' : ''}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_246_1283)">
          <path d="M8 7.99994C8 6.63331 9.10788 5.52539 10.4745 5.52539C11.8412 5.52539 12.9491 6.63331 12.9491 7.99994C12.9491 9.36661 11.8412 10.4745 10.4745 10.4745C9.10788 10.4745 8 9.36661 8 7.99994Z" fill="#1ABCFE"/>
          <path d="M3.0509 12.9492C3.0509 11.5825 4.15879 10.4746 5.52545 10.4746H8V12.9492C8 14.3158 6.89212 15.4237 5.52545 15.4237C4.15879 15.4237 3.0509 14.3158 3.0509 12.9492Z" fill="#0ACF83"/>
          <path d="M8 0.576416V5.5255H10.4745C11.8412 5.5255 12.9491 4.41762 12.9491 3.05096C12.9491 1.68431 11.8412 0.576416 10.4745 0.576416H8Z" fill="#FF7262"/>
          <path d="M3.0509 3.05096C3.0509 4.41762 4.15879 5.5255 5.52545 5.5255H8V0.576416H5.52545C4.15879 0.576416 3.0509 1.68431 3.0509 3.05096Z" fill="#F24E1E"/>
          <path d="M3.0509 7.99994C3.0509 9.36661 4.15879 10.4745 5.52545 10.4745H8V5.52539H5.52545C4.15879 5.52539 3.0509 6.63331 3.0509 7.99994Z" fill="#A259FF"/>
        </g>
        <defs>
          <clipPath id="clip0_246_1283">
            <rect width="10" height="15" fill="white" transform="translate(3 0.5)"/>
          </clipPath>
        </defs>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputLink;