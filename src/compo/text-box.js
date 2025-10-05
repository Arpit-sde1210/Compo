import React from 'react';
import './text-box.css';

const TextBox = ({ placeholder, value, onChange, rows = 6 }) => {
  return (
    <textarea
      className={`text-box ${value ? 'filled' : ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
};

export default TextBox;