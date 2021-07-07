import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  function signIn(userSignIn, token, refreshToken) {
    setUser({ ...userSignIn, token, refreshToken });

    // api.defaults.headers.authorization =
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
