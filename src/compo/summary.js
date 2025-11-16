import React from 'react';
import './summary.css';

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="summary-icon">
          <g clipPath="url(#clip0_571_166)">
            <path d="M8.2794 12.9167C8.205 12.6283 8.05468 12.3651 7.84408 12.1545C7.63348 11.9439 7.37029 11.7936 7.0819 11.7192L1.9694 10.4009C1.88218 10.3761 1.80541 10.3236 1.75074 10.2512C1.69608 10.1789 1.6665 10.0907 1.6665 10C1.6665 9.90938 1.69608 9.82118 1.75074 9.74884C1.80541 9.6765 1.88218 9.62397 1.9694 9.59921L7.0819 8.28005C7.37019 8.20572 7.63331 8.05552 7.8439 7.84508C8.05449 7.63463 8.20487 7.37162 8.2794 7.08338L9.59773 1.97088C9.62224 1.88331 9.67472 1.80616 9.74717 1.75121C9.81961 1.69625 9.90805 1.6665 9.99898 1.6665C10.0899 1.6665 10.1784 1.69625 10.2508 1.75121C10.3232 1.80616 10.3757 1.88331 10.4002 1.97088L11.7177 7.08338C11.7921 7.37177 11.9425 7.63496 12.1531 7.84556C12.3637 8.05616 12.6268 8.20648 12.9152 8.28088L18.0277 9.59838C18.1156 9.62263 18.1932 9.67505 18.2484 9.74761C18.3037 9.82017 18.3336 9.90885 18.3336 10C18.3336 10.0912 18.3037 10.1799 18.2484 10.2525C18.1932 10.325 18.1156 10.3775 18.0277 10.4017L12.9152 11.7192C12.6268 11.7936 12.3637 11.9439 12.1531 12.1545C11.9425 12.3651 11.7921 12.6283 11.7177 12.9167L10.3994 18.0292C10.3749 18.1168 10.3224 18.1939 10.25 18.2489C10.1775 18.3038 10.0891 18.3336 9.99815 18.3336C9.90722 18.3336 9.81878 18.3038 9.74633 18.2489C9.67389 18.1939 9.62141 18.1168 9.5969 18.0292L8.2794 12.9167Z" stroke="#FF7262" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6665 2.5V5.83333" stroke="#FF7262" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 4.1665H15" stroke="#FF7262" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.3335 14.1665V15.8332" stroke="#FF7262" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.16667 15H2.5" stroke="#FF7262" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_571_166">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <h3 className="summary-title">AI Summary</h3>
      </div>
      
      <div className="summary-content">
        <div className="observation-section">
          <p className="observation-text">
            John hesitated on the "Skip Tutorial" button — seemed unsure if it was safe to skip.
          </p>
        </div>

        <div className="friction-section">
          <h4 className="section-title">Friction Points:</h4>
          <ul className="friction-list">
            <li className="friction-item">
              <span className="friction-point">Skip Tutorial:</span> 6s pause before clicking.
            </li>
            <li className="friction-item">
              <span className="friction-point">Pricing Page:</span> User confused about what's included.
            </li>
            <li className="friction-item">
              <span className="friction-point">Onboarding Steps:</span> Asked how many steps are left.
            </li>
          </ul>
        </div>

        <div className="suggestions-section">
          <h4 className="section-title">Suggestions:</h4>
          <ul className="suggestions-list">
            <li className="suggestion-item">
              Add confirmation for "Skip Tutorial".
            </li>
            <li className="suggestion-item">
              Clarify pricing with bullets.
            </li>
            <li className="suggestion-item">
              Show progress bar during onboarding.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;