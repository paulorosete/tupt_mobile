import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage', error);
      } finally {
        setLoading(false);
      }
    };

    loadStoredUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    
    try {
      // This would be replaced with actual API call in production
      // For demo purposes, we're using a mock
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful login
      const userData = { id: '1', email, name: email.split('@')[0] };
      
      // Store user in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email, password, name) => {
    setLoading(true);
    
    try {
      // This would be replaced with actual API call in production
      // For demo purposes, we're using a mock
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful registration
      const userData = { id: Date.now().toString(), email, name };
      
      // Store user in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message || 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    
    try {
      // Remove user from AsyncStorage
      await AsyncStorage.removeItem('user');
      
      // Update state
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};