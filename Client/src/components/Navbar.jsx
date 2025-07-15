import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

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

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setLoginForm({ email: "", password: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                <button
                  onClick={handleLoginClick}
                  className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              {!isLoggedIn ? (
                <button
                  onClick={handleLoginClick}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-1.5 px-3 rounded-lg text-sm"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-1.5 px-3 rounded-lg text-sm"
                >
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

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-emerald-800">Login</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
