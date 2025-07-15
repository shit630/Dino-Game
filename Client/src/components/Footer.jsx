import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-emerald-900 text-white py-4 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span>📧</span>
              <span>contact@dinogame.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Credits */}
          <div className="text-sm text-emerald-200">
            © 2025 Dino Game. Made with ❤️
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-emerald-200 hover:text-white transition-colors duration-200"
            >
              <span>🐙</span>
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-white transition-colors duration-200"
            >
              <span>🐦</span>
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-white transition-colors duration-200"
            >
              <span>📘</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
