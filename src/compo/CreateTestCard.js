// components/CreateTestCard.js (Updated)
import React from 'react';
import InputText from '../compo/input-text';
import InputLink from '../compo/input-link';
import TextBox from '../compo/text-box';
import PrimaryButton from '../compo/primary-btn';
import './CreateTestCard.css';

const CreateTestCard = ({
  testName,
  setTestName,
  instructions,
  setInstructions,
  prototypeLink,
  setPrototypeLink,
  onCreateTest
}) => {
  const charCount = instructions.length;
  
  return (
    <div className="frame-1116600671 create-test-card">
      <div className="frame-1116600961 card-content">
        {/* Test Name Input */}
        <div className="input-field">
          <label className="name">Name</label>
          <div className="field">
            <InputText
              placeholder="Type test name"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              className="test-name-input"
            />
          </div>
        </div>

        {/* Instructions Textbox */}
        <div className="textbox">
          <label className="instructions">Instructions</label>
          <div className="frame-1116600646 textarea-wrapper">
            <TextBox
              placeholder="Type instructions for the user..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              maxLength={400}
              rows={5}
              className="instructions-textarea"
            />
            <div className="char-counter">{charCount}/400</div>
          </div>
        </div>

        {/* Figma Link Input */}
        <div className="input-field">
          <label className="link">Link</label>
          <div className="field link-field">
            <div className="frame-1116601012 figma-icon">
              {/* Figma icon SVG would go here */}
            </div>
            <InputLink
              placeholder="Paste your Figma prototype link"
              value={prototypeLink}
              onChange={(e) => setPrototypeLink(e.target.value)}
              className="prototype-link-input"
            />
          </div>
        </div>
      </div>

      {/* Create Test Button */}
      <PrimaryButton 
        onClick={onCreateTest} 
        fullWidth={true}
        className="create-test-btn"
      >
        Create test
      </PrimaryButton>
    </div>
  );
};

export default CreateTestCard;