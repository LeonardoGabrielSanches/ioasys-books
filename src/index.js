import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './hooks/AuthContext';
import BookList from './pages/BookList';
import Login from './pages/Login';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BookList />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

