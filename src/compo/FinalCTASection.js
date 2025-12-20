import React from 'react';
import PrimaryButton from '../compo/primary-btn';
import './FinalCTASection.css';

const FinalCTASection = () => {
  const handleCreateTest = () => {
    console.log('Final CTA - Create test');
  };

  return (
    <section className="frame-15 final-cta-section">
      <div className="frame-4 cta-content">
        <h2 className="cta-title">Start optimizing your designs</h2>
        <p className="cta-description">
          Begin testing your prototypes today and gather valuable insights to enhance your user experience.
        </p>
      </div>
      
      <PrimaryButton onClick={handleCreateTest} className="cta-button">
        Create test
      </PrimaryButton>
    </section>
  );
};

export default FinalCTASection;