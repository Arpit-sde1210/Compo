// App.js
import React, { useState } from 'react';
import './index.css';

import Navbar from './compo/Navbar';
import HeroSection from './compo/HeroSection';
import CreateTestCard from './compo/CreateTestCard';
import ProblemSection from './compo/ProblemSection';
import ProcessSection from './compo/ProcessSection';
import FeaturesSection from './compo/FeaturesSection';
import PricingSection from './compo/PricingSection';
import FAQSection from './compo/FAQSection';
import FinalCTASection from './compo/FinalCTASection';
import Footer from './compo/Footer';

function App() {
  const [testName, setTestName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prototypeLink, setPrototypeLink] = useState('');
  const [isYearly, setIsYearly] = useState(true);

  const handleCreateTest = () => {
    console.log({ testName, instructions, prototypeLink });
  };

  return (
    <div className="dashboard">
      <Navbar />

      {/* HERO + FORM */}
      <section className="hero-wrapper">
        <HeroSection />
        <CreateTestCard
          testName={testName}
          setTestName={setTestName}
          instructions={instructions}
          setInstructions={setInstructions}
          prototypeLink={prototypeLink}
          setPrototypeLink={setPrototypeLink}
          onCreateTest={handleCreateTest}
        />
      </section>

      <ProblemSection />
      <ProcessSection />
      <FeaturesSection />
      <PricingSection
        isYearly={isYearly}
        setIsYearly={setIsYearly}
        onCreateTest={handleCreateTest}
      />
      <FAQSection />
      <FinalCTASection onCreateTest={handleCreateTest} />
      <Footer />
    </div>
  );
}

export default App;
