import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function login(userlogin, token, refreshToken) {
    setUser({ ...userlogin, token, refreshToken });

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  function logout() {
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
