import React from 'react';
import './ProcessSection.css';

import FigmaLogo from '../assets/FigmaLogo';        
import CopyIcon from '../assets/copy-icon.svg';    
import PlayIcon from '../assets/play-video.svg';   
import Arrow from '../assets/process-arrow.svg';   

const ProcessSection = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">The faster way to test your designs</h2>
      <p className="process-subtitle">
        Go from prototype to actionable insights in three simple steps with Usertest.
      </p>

      <div className="process-steps">
        {/* STEP 1 */}
        <div className="step">
          <div className="icon-circle">
            <FigmaLogo className="step-icon" /> {/* ✅ JSX component */}
          </div>
          <h4>Create a test</h4>
          <p>Paste your Figma prototype link and add instructions for the user.</p>
        </div>

        <img src={Arrow} className="arrow" alt="" />

        {/* STEP 2 */}
        <div className="step">
          <div className="icon-circle">
            <img src={CopyIcon} alt="Copy link" className="step-icon" />
          </div>
          <h4>Share the link</h4>
          <p>Share the link to your participants and have them interact.</p>
        </div>

        <img src={Arrow} className="arrow" alt="" />

        {/* STEP 3 */}
        <div className="step">
          <div className="icon-circle">
            <img src={PlayIcon} alt="Analyze feedback" className="step-icon" />
          </div>
          <h4>Analyze feedback</h4>
          <p>View the screen recording of user interactions and click maps.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
