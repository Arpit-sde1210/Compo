// compo/recorder.js
import React, { useState, useRef, useEffect } from 'react';
import './recorder.css';

const Recorder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  // Camera access
  useEffect(() => {
    let stream = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: 120, 
            height: 120,
            facingMode: 'user'
          } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Camera access denied:', error);
      }
    };

    startCamera();

    // Cleanup function
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleStop = () => {
    setIsLoading(true);
    
    // Stop camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      console.log('Recording stopped and processed');
    }, 2000);
  };

  return (
    <div className="recorder-card">
      {/* Circular Video Preview - 120px diameter with camera feed */}
      <div className="video-preview">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          className="video-feed"
        />
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