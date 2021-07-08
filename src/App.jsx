import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

import './styles/global.scss';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}
