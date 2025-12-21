import React, { useState } from 'react';
import ErrorButton from '../compo/error-btn';
import './PricingSection.css';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const features = [
    'Unlimited tests',
    '100 monthly recordings',
    'Click heatmaps',
    'Download recordings',
    'Upto 5 team members',
  ];

  return (
    <section className="pricing-section">
      {/* HEADER */}
      <div className="pricing-header">
        <span className="pricing-badge">Pricing</span>
        <h2 className="pricing-title">Testing made too easy to ignore</h2>
      </div>

      {/* CARD */}
      <div className="pricing-card">
        {/* TOGGLE */}
        <div className="pricing-toggle">
          <button
            className={`toggle-option ${!isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>

          <button
            className={`toggle-option ${isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>

          <span className="discount-badge">2 months free</span>
        </div>

        {/* PRICE */}
        <div className="price-container">
          <span className="price">$49</span>
          <span className="price-period">/month</span>
        </div>

        {/* FEATURES */}
        <div className="features-list">
          {features.map((item, i) => (
            <div key={i} className="feature-item">
              <span className="check-icon">✓</span>
              <span className="feature-text">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <ErrorButton className="pricing-cta">Get started</ErrorButton>
      </div>
    </section>
  );
};

export default PricingSection;
