import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    "How do I create a usability test?",
    "Can I use any Figma prototype?",
    "How do users interact with my prototype?",
    "What kind of feedback do I get?",
    "How many participants can I invite?",
    "Can I customize the test instructions?",
    "Is there a time limit for the screen recordings?",
    "Can I download the recordings?"
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="frame-1116600976 faq-section">
      <h2 className="faq-title">Have questions?</h2>
      
      <div className="frame-80 faq-container">
        {faqItems.map((question, index) => (
          <div 
            key={index} 
            className={`faq-item frame-${21 + index}`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-question">{question}</span>
            <div className={`chevron-right chevron ${openIndex === index ? 'open' : ''}`}>
              <div className="vector"></div>
            </div>
            
            {/* Answer (can be added later) */}
            {openIndex === index && (
              <div className="faq-answer">
                <p>Answer for {question}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;