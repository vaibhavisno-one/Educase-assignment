import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page page-full-height">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      <div className="button-container">
        <Button primary onClick={() => navigate('/create-account')}>
          Create Account
        </Button>
        <Button onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Landing;