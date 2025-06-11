
import React, { useState } from 'react';
import { Search, Bell, User, Settings, LogOut } from 'lucide-react';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth context

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Handle logout
      setIsLoggedIn(false);
      console.log('User logged out');
    } else {
      // Redirect to auth page
      window.location.href = '/auth';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary cursor-pointer" onClick={() => window.location.href = '/'}>
            CINEFLOW
          </h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Latest</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
            {isLoggedIn && (
              <a href="/admin" className="text-white hover:text-gray-300 transition-colors">Admin</a>
            )}
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          {isLoggedIn && (
            <Bell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          )}
          
          {/* User Menu */}
          <div className="relative">
            <div 
              className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center cursor-pointer"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <User className="w-5 h-5 text-white" />
            </div>
            
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50">
                {isLoggedIn ? (
                  <>
                    <a href="/profile" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                      <User className="w-4 h-4 inline mr-2" />
                      Profile
                    </a>
                    <a href="/admin" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                      <Settings className="w-4 h-4 inline mr-2" />
                      Admin Panel
                    </a>
                    <hr className="my-2 border-gray-700" />
                    <button 
                      onClick={handleAuthAction}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                    >
                      <LogOut className="w-4 h-4 inline mr-2" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleAuthAction}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
