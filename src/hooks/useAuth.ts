import { useState, useCallback } from 'react';
import { User } from '../types';

// Mock user for demo purposes
const mockUser: User = {
  id: '1',
  email: 'customer@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '+2348012345678',
  role: 'customer',
  addresses: [],
  createdAt: '2024-01-01T00:00:00Z',
  isActive: true
};

const mockAdmin: User = {
  id: '2',
  email: 'admin@truenorth.ng',
  firstName: 'Admin',
  lastName: 'User',
  phone: '+2348087654321',
  role: 'admin',
  addresses: [],
  createdAt: '2024-01-01T00:00:00Z',
  isActive: true
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string, role?: string) => {
    setIsLoading(true);
    
    // Mock login logic
    setTimeout(() => {
      if (email === 'admin@truenorth.ng' || role === 'admin') {
        setUser(mockAdmin);
      } else {
        setUser(mockUser);
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const register = useCallback(async (userData: Partial<User>) => {
    setIsLoading(true);
    
    // Mock registration logic
    setTimeout(() => {
      setUser({
        ...mockUser,
        ...userData,
        id: Math.random().toString(36).substr(2, 9)
      } as User);
      setIsLoading(false);
    }, 1000);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const isAdmin = user?.role === 'admin' || user?.role === 'manager';

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated: !!user
  };
};