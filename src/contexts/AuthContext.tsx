import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, LoginCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'student@urja.com',
    name: 'John Student',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    enrolledCourses: ['beginner', 'elementary'],
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    email: 'teacher@urja.com',
    name: 'Tanaka Sensei',
    role: 'teacher',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01'
  },
  {
    id: '3',
    email: 'admin@urja.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01'
  },
  {
    id: '4',
    email: 'head@urja.com',
    name: 'Main Head',
    role: 'main_head',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01'
  },
  {
    id: '5',
    email: 'management@urja.com',
    name: 'Management Team',
    role: 'management_team',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('urja_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        localStorage.removeItem('urja_user');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      // Mock authentication
      const user = mockUsers.find(u => u.email === credentials.email);
      
      if (!user) {
        return false;
      }

      // Check role compatibility
      if (credentials.role === 'student' && user.role !== 'student') {
        return false;
      }
      
      if (credentials.role === 'staff' && user.role === 'student') {
        return false;
      }

      localStorage.setItem('urja_user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('urja_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Mock registration
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: 'student',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('urja_user', JSON.stringify(newUser));
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false
      });
      
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};