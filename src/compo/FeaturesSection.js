// components/FeaturesSection.js
import React from 'react';
import './FeaturesSection.css';

import UnlimitedIcon from '../assets/unlimited-test.svg';
import RecordingsIcon from '../assets/recording-icon.svg';
import HeatmapsIcon from '../assets/heatmaps.svg';
import DownloadIcon from '../assets/downloads.svg';
import CollaborationIcon from '../assets/collaboration.svg';
import WorkspacesIcon from '../assets/workspace.svg';

const FEATURES = [
  {
    title: 'Unlimited tests',
    desc: 'Create as many tests as you need',
    icon: UnlimitedIcon,
  },
  {
    title: '200 recordings',
    desc: 'Capture user sessions',
    icon: RecordingsIcon,
  },
  {
    title: 'Click heatmaps',
    desc: 'Visualize user interactions',
    icon: HeatmapsIcon,
  },
  {
    title: 'Download recordings',
    desc: 'Download user sessions',
    icon: DownloadIcon,
  },
  {
    title: 'Collaboration',
    desc: 'Invite up to 5 team members',
    icon: CollaborationIcon,
  },
  {
    title: 'Workspaces',
    desc: 'Organize tests and manage team',
    icon: WorkspacesIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Header */}
      <div className="features-header">
        <h2 className="features-title">Features</h2>
        <p className="features-subtitle">
          Go from prototype to actionable insights in three simple steps with
          Usertest.
        </p>
      </div>

      {/* Grid */}
      <div className="features-grid">
        {FEATURES.map((item, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
