import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <div className="app-container">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  );
};

export default AppContainer;