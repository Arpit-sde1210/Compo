import React from 'react';
import Button from './compo/small-btn';
import IconButton from './compo/icon-btn';
import PrimaryButton from './compo/primary-btn';
import ErrorButton from './compo/error-btn';
import CopyButton from './compo/copy-btn';
import DropdownButton from './compo/dropdown-btn';
import IconOnlyButton from './compo/icon-only';
import CloseIconButton from './compo/close-icon';
import ToggleSwitch from './compo/toggle-icon';
import './index.css';

function App() {
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
    </div>
  );
}

export default App;