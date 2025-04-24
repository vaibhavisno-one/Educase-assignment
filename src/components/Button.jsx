import React from 'react';

const Button = ({ children, onClick, primary = false, disabled = false }) => {
  const buttonClass = primary 
    ? "button primary-button" 
    : "button secondary-button";
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
      style={{ opacity: disabled ? 0.7 : 1 }}
    >
      {children}
    </button>
  );
};

export default Button;