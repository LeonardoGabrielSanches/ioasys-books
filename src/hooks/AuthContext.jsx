import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userStorage = JSON.parse(localStorage.getItem('@Ioasys:User'));

    if (!userStorage) return undefined;

    api.defaults.headers.Authorization = `Bearer ${userStorage?.token}`;

    return userStorage;
  });

  function login(userlogin, token, refreshToken) {
    const loginUser = { ...userlogin, token, refreshToken };

    localStorage.setItem('@Ioasys:User', JSON.stringify(loginUser));

    setUser(loginUser);

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  function logout() {
    setUser(undefined);

    localStorage.removeItem('@Ioasys:User');
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
