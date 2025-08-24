import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { User, GraduationCap, AlertCircle } from 'lucide-react';
import Logo from '../ui/Logo';

const LoginPage: React.FC = () => {
  const [loginType, setLoginType] = useState<'student' | 'staff' | null>(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginType) return;

    setIsLoading(true);
    setError('');

    try {
      const success = await login({
        ...credentials,
        role: loginType
      });

      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials or role mismatch');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getDemoCredentials = (type: 'student' | 'staff') => {
    if (type === 'student') {
      return { email: 'student@urja.com', password: 'password' };
    } else {
      return { email: 'teacher@urja.com', password: 'password' };
    }
  };

  if (!loginType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to URJA LMS</h1>
            <p className="text-gray-600">Choose your login type to continue</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setLoginType('student')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Login as Student</h3>
                  <p className="text-gray-600">Access your courses, materials, and progress</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setLoginType('staff')}
              className="w-full p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Login as Staff</h3>
                  <p className="text-gray-600">Teacher, Admin, or Management access</p>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {loginType === 'student' ? 'Student Login' : 'Staff Login'}
          </h1>
          <p className="text-gray-600">Enter your credentials to access the LMS</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Demo Credentials:</p>
            <div className="space-y-2">
              <button
                onClick={() => setCredentials(getDemoCredentials(loginType))}
                className="w-full text-left p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 transition-colors"
              >
                <strong>
                  {loginType === 'student' ? 'Student:' : 'Teacher:'}
                </strong>{' '}
                {getDemoCredentials(loginType).email}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setLoginType(null)}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
            >
              ← Change Login Type
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;