import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaRegClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-semibold tracking-wide text-white">House Locater</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Making your property search simple, verified, and premium. Find your dream home in your preferred location.
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Socials Icons */}
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition text-sm"
                  title={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 text-sm transition font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 text-sm transition font-medium">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 text-sm transition font-medium">Contact Us</Link>
              </li>
              <li>
                <Link to="/policy" className="text-slate-400 hover:text-emerald-400 text-sm transition font-medium">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-light leading-relaxed">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-500 w-3.5 h-3.5 shrink-0" /> Kathmandu, Bagmati, Nepal
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-emerald-500 w-3.5 h-3.5 shrink-0" /> +977-1-4567890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-500 w-3.5 h-3.5 shrink-0" /> support@houselocater.com
              </li>
              <li className="flex items-center gap-2">
                <FaRegClock className="text-emerald-500 w-3.5 h-3.5 shrink-0" /> Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed font-light">
              Subscribe to get latest property additions and regional housing pricing reports.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 text-slate-200 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Copyright and links */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} House Locater. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-xs transition font-semibold">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-xs transition font-semibold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
