import React from 'react';

const RadioGroup = ({ label, options, value, onChange, required = false }) => {
  return (
    <div className="radio-group-container">
      <label className="radio-group-label">
        {label}
        {required && <span className="required-mark">*</span>}
      </label>
      <div className="radio-options">
        {options.map((option) => (
          <div key={option.value} className="radio-option">
            <div 
              className={`radio-button ${value === option.value ? 'selected' : ''}`}
              onClick={() => onChange(option.value)}
            >
              {value === option.value && <div className="radio-dot"></div>}
            </div>
            <span className="radio-label">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;