import React from 'react';
import './recordingcard.css';

const RecordingCard = () => {
  return (
    <div className="recording-card">
      {/* Video/Image Section */}
      <div className="video-section">
        <div className="video-overlay">
          {/* Video duration badge */}
          <div className="duration-badge">
            <span className="duration-text">3:12 min</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Video Title */}
        <div className="video-title">
          John Doe
        </div>

        {/* Video Info - Date and Time */}
        <div className="video-info-container">
          <div className="video-date-time">12:44 PM · 12 Oct 2024</div>
        </div>
      </div>
    </div>
  );
};

export default RecordingCard;