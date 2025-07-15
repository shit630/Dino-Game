import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🦖</span>
              <span className="text-xl font-bold text-emerald-800">
                Dino Game
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {["home", "leaderboard", "about", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-medium transition"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  <span>
                    {item === "home" && "🏠"}
                    {item === "leaderboard" && "🏆"}
                    {item === "about" && "ℹ️"}
                    {item === "contact" && "📧"}
                  </span>
                  <span className="capitalize">{item}</span>
                </a>
              ))}

              {!isLoggedIn ? (
                <button className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg">
                  Login
                </button>
              ) : (
                <button className="ml-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg">
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              {!isLoggedIn ? (
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-1.5 px-3 rounded-lg text-sm">
                  Login
                </button>
              ) : (
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1.5 px-3 rounded-lg text-sm">
                  Logout
                </button>
              )}
              <button
                onClick={toggleMenu}
                className="text-emerald-700 hover:text-emerald-900"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2 py-2">
              <div className="flex flex-col space-y-3 px-4 pb-3">
                {["home", "leaderboard", "about", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 py-2"
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    <span>
                      {item === "home" && "🏠"}
                      {item === "leaderboard" && "🏆"}
                      {item === "about" && "ℹ️"}
                      {item === "contact" && "📧"}
                    </span>
                    <span className="capitalize">{item}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
