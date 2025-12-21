import React, { useState } from 'react';

import HeroSection from './compo/HeroSection';
import CreateTestCard from './compo/CreateTestCard';
import ProblemSection from './compo/ProblemSection';
import ProcessSection from './compo/ProcessSection';
import FeaturesSection from './compo/FeaturesSection';
import PricingSection from './compo/PricingSection';
import FAQSection from './compo/FAQSection';
import FinalCTASection from './compo/FinalCTASection';

const Home = () => {
  const [testName, setTestName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prototypeLink, setPrototypeLink] = useState('');
  const [isYearly, setIsYearly] = useState(true);

  const handleCreateTest = () => {
    console.log({ testName, instructions, prototypeLink });
  };

  return (
    <>
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

      <div id="pricing">
        <PricingSection
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          onCreateTest={handleCreateTest}
        />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <FinalCTASection onCreateTest={handleCreateTest} />
    </>
  );
};

export default Home;
