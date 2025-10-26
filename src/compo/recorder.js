// compo/recorder.js
import React, { useState } from 'react';
import './recorder.css';

const Recorder = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleStop = () => {
    setIsLoading(true);
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      console.log('Recording stopped and processed');
    }, 2000);
  };

  return (
    <div className="recorder-card">
      {/* Circular Video Preview */}
      <div className="video-preview">
        <div className="video-visual"></div>
      </div>
      
      {/* Control Card - Black with curved sides */}
      <div className="control-card">
        {/* Stop Button - Left side */}
        <button 
          className={`stop-button ${isLoading ? 'loading' : ''}`}
          onClick={handleStop}
          disabled={isLoading}
        >
          {/* White square is created via CSS ::after */}
        </button>
        
        {/* Timer Display - Right side */}
        <div className="timer-display">
          04:38
        </div>
      </div>
    </div>
  );
};

export default Recorder;