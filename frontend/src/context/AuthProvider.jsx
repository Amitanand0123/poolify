import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const MOCK_SIGNED_IN_USER = {
  name: 'Alice',
  profileImageUrl: '/user-avatar.png',
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(MOCK_SIGNED_IN_USER);

  const login = () => {
    setUser(MOCK_SIGNED_IN_USER);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
