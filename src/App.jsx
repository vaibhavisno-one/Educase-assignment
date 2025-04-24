import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContainer from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import AccountSettings from './pages/AccountSettings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;