import React from 'react';

const AccountSettings = () => {
  return (
    <div className="account-page">
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>
      
      <div className="profile-section">
        <div className="profile-image-container">
          <div className="profile-image">
            {/* Placeholder image would be here */}
          </div>
          <div className="edit-icon">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="white">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Marry Doe</h2>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div className="profile-description">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
          Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;