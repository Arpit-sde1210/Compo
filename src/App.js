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
import RecordingCard from './compo/recordingcard';
import Menu from './compo/menu';
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

  // Recording Card data
  const recordingData = {
    username: "John Doe",
    stats: "284 Fill x 160",
    timestamp: "12:44 PM · 12 Oct 2024",
    question: "What do you want to know?",
    duration: "3:12 min"
  };

  return (
    <div className="app-container">
      {/* Single Main Section */}
      <div className="section">
        <h1 className="master-heading">UI Components</h1>

        {/* Buttons Section */}
        <h2 className="section-heading">Buttons</h2>
        <div className="button-row">
          <Button onClick={handleClick}>
            Home
          </Button>

          <IconButton onClick={handleSettingsClick}>
            Settings
          </IconButton>
        </div>

        <div className="button-row">
          <PrimaryButton onClick={handleEditClick}>
            Edit
          </PrimaryButton>
          <ErrorButton onClick={handleErrorClick}>
            Delete
          </ErrorButton>
        </div>

        <div className="button-row">
          <CopyButton onClick={handleCopyClick} />
        </div>

        <div className="button-row">
          <DropdownButton onClick={handleDropdownClick} />
        </div>

        {/* Horizontal Line 1 */}
        <div className="horizontal-line"></div>

        {/* Icons Section */}
        <h2 className="section-heading">Icons</h2>
        <div className="button-row">
          <IconOnlyButton onClick={handleIconOnlyClick} />
          <CloseIconButton onClick={handleCloseClick} />
          <ToggleSwitch onToggle={handleToggle} defaultOn={true} />
        </div>

        {/* Horizontal Line 2 */}
        <div className="horizontal-line"></div>

        {/* Input Fields Section */}
        <h2 className="section-heading">Input Fields</h2>
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

        {/* Horizontal Line 3 */}
        <div className="horizontal-line"></div>

        {/* Main Components Section */}
        <h2 className="section-heading">Main Components</h2>
        <div className="components-wrapper">
          <TestCard
            title="New Onboarding Flow"
            description="0 recordings . 12 Oct 2025"
            onPreview={handlePreview}
            onCopy={handleCardCopy}
            onEdit={handleCardEdit}
            onDelete={handleCardDelete}
          />
        </div>
        <div className="horizontal-line"></div>
        <h2 className="section-heading">Recording Card</h2>

        <div className="components-wrapper">
          {/* Recording Card Component */}
          <RecordingCard
            username={recordingData.username}
            stats={recordingData.stats}
            timestamp={recordingData.timestamp}
            question={recordingData.question}
            duration={recordingData.duration}
          />
        </div>
        <div className="horizontal-line"></div>
        <h2 className="section-heading">Menu</h2>
        <div className="components-wrapper">
          <Menu 
          />
        </div>
      </div>
    </div>
  );
}

export default App;