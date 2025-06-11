
import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Here you would integrate with your Python/Firebase backend
    // For demo purposes, redirect to admin if email contains 'admin'
    if (email.includes('admin')) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/';
    }
  };

  const handleSignup = (email: string, password: string, name: string) => {
    console.log('Signup attempt:', { email, password, name });
    // Here you would integrate with your Python/Firebase backend
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599004658-2c72b7e5dfb6?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {isLogin ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToSignup={() => setIsLogin(false)}
          />
        ) : (
          <SignupForm
            onSignup={handleSignup}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
