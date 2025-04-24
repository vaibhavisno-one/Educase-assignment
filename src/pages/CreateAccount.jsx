import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';
import { isValidEmail } from '../utils/validators';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });
  
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/account');
    }
  };
  
  const isFormValid = 
    form.fullName && 
    form.phoneNumber && 
    isValidEmail(form.email) && 
    form.password;
  
  return (
    <div className="page">
      <h1>Create your PopX account</h1>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          required
        />
        
        <Input
          label="Phone number"
          type="tel"
          placeholder="Marry Doe"
          value={form.phoneNumber}
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
          required
        />
        
        <Input
          label="Email address"
          type="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />
        
        <Input
          label="Company name"
          placeholder="Marry Doe"
          value={form.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
        />
        
        <RadioGroup
          label="Are you an Agency?"
          options={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' }
          ]}
          value={form.isAgency}
          onChange={(value) => handleChange('isAgency', value)}
          required
        />
        
        <div className="form-footer">
          <Button primary disabled={!isFormValid} onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;