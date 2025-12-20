import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Create a test",
      description: "Paste your Figma prototype link and add instructions for the user.",
      icon: "figma"
    },
    {
      id: 2,
      title: "Share the link",
      description: "Share the link to your participants and have them interact with the prototype.",
      icon: "link"
    },
    {
      id: 3,
      title: "Analyze feedback",
      description: "View the screen recording of user interactions and click maps.",
      icon: "play"
    }
  ];

  return (
    <section className="frame-1116600979 process-section">
      {/* Section Header */}
      <div className="frame-1116601112 process-header">
        <h2 className="process-title">The faster way to test your designs</h2>
        <p className="process-subtitle">
          Go from prototype to actionable insights in three simple steps with Usertest.
        </p>
      </div>
      
      {/* Steps Container */}
      <div className="frame-77 steps-container">
        {steps.map((step) => (
          <div key={step.id} className={`frame-${73 + step.id} step-item`}>
            {/* Icon Circle */}
            <div className="frame-1116600962 icon-circle">
              <div className={`icon-container ${step.icon}-icon`}>
                {/* Icons will be added via CSS or SVG */}
              </div>
            </div>
            
            {/* Step Content */}
            <div className="frame-75 step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
        
        {/* Decorative Arrows */}
        <div className="vector-6 arrow-1"></div>
        <div className="vector-7 arrow-2"></div>
      </div>
    </section>
  );
};

export default ProcessSection;