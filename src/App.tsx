import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseLevels from './components/CourseLevels';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LoginPage from './components/auth/LoginPage';
import DashboardLayout from './components/dashboard/DashboardLayout';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CourseLevels />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "日本語学院 | Japanese Language Academy";
    
    // Add fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif:wght@400;700&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;