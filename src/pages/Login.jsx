import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { isValidEmail } from '../utils/validators';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidEmail(email) && password) {
      navigate('/account');
    }
  };
  
  const isFormValid = isValidEmail(email) && password.length > 0;
  
  return (
    <div className="page">
      <h1>Signin to your PopX account</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <form onSubmit={handleLogin}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="form-footer">
          <Button primary disabled={!isFormValid} onClick={handleLogin}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;