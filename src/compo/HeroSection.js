import React from 'react';
import BlueDot from '../assets/BlueDot';
import FigmaLogo from '../assets/FigmaLogo';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container">
      <div className="highlight-bg" />

      <h1 className="hero-title">
        Fastest way to get{' '}
        <span className="inline-icon blue-dot">
          <BlueDot size={20} />
        </span>{' '}
        Feedback
        <br />
        on your{' '}
        <span className="inline-icon figma-icon">
          <FigmaLogo size={24} />
        </span>{' '}
        Designs
      </h1>

      <p className="hero-description">
        Share your Figma prototype with your users. We record their screen,
        face, and voice so you see exactly how they experience it.
      </p>
    </section>
  );
};

export default HeroSection;
