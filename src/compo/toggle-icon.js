import React, { useState } from 'react';
import './toggle-icon.css';

const ToggleSwitch = ({ onToggle, defaultOn = false }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button 
      className={`toggle-switch ${isOn ? 'on' : ''}`}
      onClick={handleToggle}
      type="button"
      aria-checked={isOn}
      role="switch"
    />
  );
};

export default ToggleSwitch;