// pages/TermsOfUse.js
import React from 'react';
import './LegalPages.css';

const TermsOfUse = () => {
  return (
    <>
      <main className="legal-page">
        <h1>Terms of Use</h1>
        <p className="effective-date">Effective Date: 5 Aug, 2025</p>

        <p>
          Welcome to UserTest! By accessing or using our website and services,
          you agree to be bound by these Terms of Use.
        </p>

        <h3>1. Use of Service</h3>
        <p>
          UserTest is a platform for running usability tests. You agree to use
          the service only for lawful purposes.
        </p>

        <h3>2. Account Responsibility</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and activities under it.
        </p>

        <h3>3. Intellectual Property</h3>
        <p>
          All content and branding belong to UserTest Technologies Pvt. Ltd.
        </p>

        <h3>4. Limitation of Liability</h3>
        <p>
          UserTest is provided "as is". We are not liable for any indirect or
          incidental damages.
        </p>

        <h3>5. Changes to Terms</h3>
        <p>
          We may update these terms anytime. Continued use means acceptance.
        </p>

        <p className="contact-line">
          For questions, contact us at <strong>support@usertest.com</strong>
        </p>
      </main>

    </>
  );
};

export default TermsOfUse;
