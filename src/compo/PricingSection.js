import React, { useState } from 'react';
import Button from '../compo/small-btn';
import PrimaryButton from '../compo/primary-btn';
import './PricingSection.css';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const features = [
    "Unlimited tests",
    "100 monthly recordings",
    "Click heatmaps",
    "Download recordings",
    "Upto 5 team members"
  ];

  const handleCreateTest = () => {
    console.log('Create test from pricing section');
  };

  return (
    <section className="frame-1116600981 pricing-section">
      {/* Header */}
      <div className="frame-1116601158 pricing-header">
        <span className="pricing-badge">Pricing</span>
        <h2 className="pricing-title">Testing made too easy to ignore</h2>
      </div>
      
      {/* Pricing Card */}
      <div className="frame-1116601035 pricing-card">
        {/* Toggle Switch */}
        <div className="frame-1116601155 pricing-toggle">
          <Button 
            onClick={() => setIsYearly(false)}
            active={!isYearly}
            className="toggle-option"
          >
            Monthly
          </Button>
          <Button 
            onClick={() => setIsYearly(true)}
            active={isYearly}
            className="toggle-option"
          >
            Yearly
          </Button>
          <div className="frame-1116601156 discount-badge">
            <span>2 months free</span>
          </div>
        </div>
        
        {/* Price Display */}
        <div className="frame-1116601164 price-display">
          <div className="frame-1116601157 price-container">
            <h3 className="price">$49</h3>
            <span className="price-period">/month</span>
          </div>
          
          {/* Features List */}
          <div className="frame-1116601124 features-list">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item frame-11166010${35 + index}`}>
                <div className="check-icon">
                  <span>✓</span>
                </div>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <PrimaryButton onClick={handleCreateTest} fullWidth className="pricing-cta">
          Create test
        </PrimaryButton>
      </div>
    </section>
  );
};

export default PricingSection;