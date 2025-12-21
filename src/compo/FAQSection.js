import React, { useState } from 'react';
import ArrowDown from '../assets/arrow-down.svg';
import './FAQSection.css';

const FAQS = [
  "How do I create a usability test?",
  "Can I use any Figma prototype?",
  "How do users interact with my prototype?",
  "What kind of feedback do I get?",
  "How many participants can I invite?",
  "Can I customize the test instructions?",
  "Is there a time limit for the screen recordings?",
  "Can I download the recordings?",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Have Questions?</h2>

      <div className="faq-container">
        {FAQS.map((question, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-row">
              <span className="faq-question">{question}</span>
              <img
                src={ArrowDown}
                alt="toggle"
                className={`faq-arrow ${openIndex === index ? 'rotate' : ''}`}
              />
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                This is a placeholder answer. Replace it with actual FAQ content.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
