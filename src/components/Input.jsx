import React from 'react';

const Input = ({ label, type = "text", placeholder, value, onChange, required = false }) => {
  return (
    <div className="input-container">
      <label className="input-label">
        {label}
        {required && <span className="required-mark">*</span>}
      </label>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;