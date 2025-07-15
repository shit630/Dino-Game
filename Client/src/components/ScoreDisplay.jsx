import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🦖</span>
            <span className="text-xl font-bold text-emerald-800">Dino Game</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 transition-colors duration-200 font-medium"
            >
              <span>🏠</span>
              <span>Home</span>
            </a>
            <a 
              href="#leaderboard" 
              className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 transition-colors duration-200 font-medium"
            >
              <span>🏆</span>
              <span>Leaderboard</span>
            </a>
            <a 
              href="#about" 
              className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 transition-colors duration-200 font-medium"
            >
              <span>ℹ️</span>
              <span>About</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 transition-colors duration-200 font-medium"
            >
              <span>📧</span>
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;