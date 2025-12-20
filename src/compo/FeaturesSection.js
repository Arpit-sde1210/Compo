// components/FeaturesSection.js
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = ({ features = [] }) => {
  // 🛡️ Guard: agar empty ya undefined ho
  if (!Array.isArray(features) || features.length === 0) {
    return null; // ya skeleton / loader dikha sakta hai
  }

  return (
    <section className="frame-1116601163 features-section">
      {/* ===== SECTION HEADER ===== */}
      <div className="features-header container">
        <h2 className="features-title">Features</h2>
        <p className="features-subtitle">
          Go from prototype to actionable insights in three simple steps with UserTest.
        </p>
      </div>

      {/* ===== FEATURES GRID ===== */}
      <div className="features-grid container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className={`feature-icon ${feature.iconType}`} />
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
