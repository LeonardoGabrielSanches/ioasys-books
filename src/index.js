import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './hooks/AuthContext';
import Login from './pages/Login';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

