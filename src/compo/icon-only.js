import React from 'react';
import './icon-only.css';

const IconOnlyButton = ({ onClick, type = "button" }) => {
  return (
    <button 
      className="icon-only-btn"
      onClick={onClick}
      type={type}
    >
      <svg className="link-icon" width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_246_1127)">
          <path d="M12.7115 14.644C12.9882 15.0139 13.3412 15.3199 13.7466 15.5414C14.152 15.7629 14.6002 15.8946 15.061 15.9276C15.5217 15.9606 15.9842 15.8941 16.417 15.7326C16.8498 15.5712 17.2428 15.3186 17.5694 14.9919L19.5022 13.059C20.089 12.4515 20.4137 11.6377 20.4064 10.7931C20.3991 9.94844 20.0603 9.14047 19.463 8.5432C18.8657 7.94592 18.0577 7.60713 17.2131 7.59979C16.3685 7.59245 15.5547 7.91715 14.9472 8.50396L13.839 9.60568M15.2886 13.3554C15.0119 12.9855 14.6589 12.6794 14.2536 12.4579C13.8482 12.2365 13.3999 12.1048 12.9392 12.0718C12.4784 12.0388 12.016 12.1052 11.5832 12.2667C11.1504 12.4281 10.7573 12.6808 10.4308 13.0075L8.49791 14.9403C7.91111 15.5479 7.58641 16.3616 7.59375 17.2063C7.60109 18.0509 7.93988 18.8589 8.53716 19.4561C9.13443 20.0534 9.9424 20.3922 10.787 20.3995C11.6317 20.4069 12.4454 20.0822 13.053 19.4954L14.1547 18.3937" stroke="#78716C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_246_1127">
            <rect width="16" height="16" fill="white" transform="translate(6 6)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default IconOnlyButton;