import React from 'react';
import './input-text.css';

const InputText = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      className={`input-text ${value ? 'filled' : ''}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;