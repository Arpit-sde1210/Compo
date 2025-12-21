// pages/Privacy.js
import React from 'react';
import './LegalPages.css';

const Privacy = () => {
  return (
    <>

      <main className="legal-page">
        <h1>Privacy</h1>
        <p className="effective-date">Effective Date: 5 Aug, 2025</p>

        <p>
          We respect your privacy and are committed to protecting your personal
          data.
        </p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li>Personal info like name and email</li>
          <li>Usability test recordings</li>
          <li>Device and usage data</li>
        </ul>

        <h3>2. How We Use Information</h3>
        <ul>
          <li>Provide and improve services</li>
          <li>Communicate with users</li>
          <li>Analyze platform performance</li>
        </ul>

        <h3>3. Data Sharing</h3>
        <p>
          We do not sell your data. We only share with trusted partners.
        </p>

        <h3>4. Your Rights</h3>
        <p>
          You may request access or deletion of your data anytime.
        </p>

        <h3>5. Security</h3>
        <p>
          We follow industry standards, but no system is 100% secure.
        </p>
      </main>

    </>
  );
};

export default Privacy;
