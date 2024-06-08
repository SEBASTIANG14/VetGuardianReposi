import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const accessToken = localStorage.getItem('accessToken');
    if (savedUser && accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        setUser(decodedToken);
      } catch (error) {
        console.error('Invalid token:', error);
        logout(); 
      }
    }
  }, []);

  const login = (userData, token) => {
    try {
      const decodedToken = jwtDecode(token);
      localStorage.setItem('user', JSON.stringify(decodedToken));
      localStorage.setItem('accessToken', token);
      setUser(decodedToken);
    } catch (error) {
      console.error('Invalid token:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};