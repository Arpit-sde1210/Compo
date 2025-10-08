import React, { useState } from 'react';
import Button from './compo/small-btn';
import IconButton from './compo/icon-btn';
import PrimaryButton from './compo/primary-btn';
import ErrorButton from './compo/error-btn';
import CopyButton from './compo/copy-btn';
import DropdownButton from './compo/dropdown-btn';
import IconOnlyButton from './compo/icon-only';
import CloseIconButton from './compo/close-icon';
import ToggleSwitch from './compo/toggle-icon';
import InputText from './compo/input-text';
import InputLink from './compo/input-link';
import TextBox from './compo/text-box';
import TestCard from './compo/test-card';
import './index.css';

function App() {
  // Input states
  const [inputValue, setInputValue] = useState('');
  const [linkValue, setLinkValue] = useState('');
  const [textValue, setTextValue] = useState('');

  // Button handlers
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleSettingsClick = () => {
    console.log('Settings button clicked!');
  };

  const handleEditClick = () => {
    console.log('Edit button clicked!');
  };

  const handleErrorClick = () => {
    console.log('Error button clicked!');
  };

  const handleCopyClick = () => {
    console.log('Copy button clicked!');
  };

  const handleDropdownClick = () => {
    console.log('Dropdown clicked!');
  };

  const handleIconOnlyClick = () => {
    console.log('Icon only button clicked!');
  };

  const handleCloseClick = () => {
    console.log('Close icon clicked!');
  };

  const handleToggle = (isOn) => {
    console.log('Toggle switched:', isOn ? 'ON' : 'OFF');
  };

  // Test Card handlers
  const handlePreview = () => console.log('Preview clicked');
  const handleCardCopy = () => console.log('Card copy clicked');
  const handleCardEdit = () => console.log('Card edit clicked');
  const handleCardDelete = () => console.log('Card delete clicked');

  return (
    <div className="app-container">
      {/* Master Container for Buttons */}
      <div className="master-container">
        <h1 className="master-heading">Buttons</h1>
        
        {/* Container 1 - Small buttons */}
        <div className="button-container">
          <Button onClick={handleClick}>
            Home
          </Button>
          
          <IconButton onClick={handleSettingsClick}>
            Settings
          </IconButton>
        </div>

        {/* Container 2 - Primary and Error buttons */}
        <div className="primary-button-container">
          <PrimaryButton onClick={handleEditClick}>
            Edit
          </PrimaryButton>
          <ErrorButton onClick={handleErrorClick}>
            Delete
          </ErrorButton>
        </div>

        {/* Container 3 - Copy button */}
        <div className="primary-button-container">
          <CopyButton onClick={handleCopyClick} />
        </div>

        {/* Container 4 - Dropdown button */}
        <div className="dropdown-container">
          <DropdownButton onClick={handleDropdownClick} />
        </div>
      </div>

      {/* Separate Master Container for Icons */}
      <div className="master-container">
        <h1 className="master-heading">Icons</h1>
        
        {/* Container 5 - Icons Only */}
        <div className="icons-container">
          <IconOnlyButton onClick={handleIconOnlyClick} />
          <CloseIconButton onClick={handleCloseClick} />
          <ToggleSwitch onToggle={handleToggle} defaultOn={true} />
        </div>
      </div>

      {/* Separate Master Container for Input Fields */}
      <div className="input-container">
        <h1 className="master-heading">Input Fields</h1>
        
        <div className="inputs-wrapper">
          <div className="input-group">
            <h4>Label</h4>
            <InputText 
              placeholder="Enter text here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="input-group">
            <h4>Label</h4>
            <InputLink 
              placeholder="https://example.com"
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
            />
          </div>

          <div className="input-group">
            <h4>Task</h4>
            <TextBox 
              placeholder="Enter your message here..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Separate Master Container for Main Components */}
      <div className="main-components-container">
        <h1 className="master-heading">Main Components</h1>
        
        <div className="components-wrapper">
          <TestCard 
            title="Test Card Component"
            description="This is a test card with action buttons"
            onPreview={handlePreview}
            onCopy={handleCardCopy}
            onEdit={handleCardEdit}
            onDelete={handleCardDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;