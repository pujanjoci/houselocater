// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-xl font-bold">Houser-Locater</h5>
            <p className="text-gray-400">
              Making your dream home a reality. Come see what we can do for you.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link to="/policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500">&copy; 2024 House-Locater. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
