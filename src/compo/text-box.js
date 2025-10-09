import React from 'react';
import './text-box.css';

const TextBox = ({ placeholder, value, onChange, rows = 6, maxLength }) => {
  return (
    <div className="text-box-container">
      <textarea
        className={`text-box ${value ? 'filled' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
      />
      {maxLength && (
        <div className="character-counter">
          {value?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextBox;