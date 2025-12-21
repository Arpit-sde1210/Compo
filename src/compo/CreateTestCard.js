import React from 'react';
import InputText from '../compo/input-text';
import InputLink from '../compo/input-link';
import TextBox from '../compo/text-box';
import ErrorButton from '../compo/error-btn';
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
  return (
    <div className="create-test-card">
      <div className="create-test-body">

        {/* Name */}
        <div className="ct-field">
          <label>Name</label>
          <InputText
            placeholder="Type test name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>

        {/* Instructions */}
        <div className="ct-field">
          <label>Instructions</label>
          <TextBox
            placeholder="Type instructions for the user..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            maxLength={400}
            rows={5}
          />
        </div>

        {/* Link */}
        <div className="ct-field">
          <label>Link</label>
          <InputLink
            placeholder="Paste your Figma prototype link"
            value={prototypeLink}
            onChange={(e) => setPrototypeLink(e.target.value)}
          />
        </div>
      </div>

      {/* CTA */}
      <ErrorButton onClick={onCreateTest}>
        Create test
      </ErrorButton>
    </div>
  );
};

export default CreateTestCard;
