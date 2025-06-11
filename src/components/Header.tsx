
import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">CINEFLOW</h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Latest</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          <Bell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
