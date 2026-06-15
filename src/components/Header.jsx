import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onSearchInitiated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleHomeClick = () => {
        if (onSearchInitiated) {
            onSearchInitiated(false);
        }
        setIsMenuOpen(false);
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand Name Logo */}
                <div className="flex items-center">
                    <button 
                        onClick={handleHomeClick} 
                        className="text-2xl font-serif font-semibold text-slate-800 hover:text-emerald-600 transition focus:outline-none"
                    >
                        House Locater
                    </button>
                </div>

                {/* Desktop Menu Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={handleHomeClick} className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition focus:outline-none">Home</button>
                    <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">About</Link>
                    <Link to="/contact" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">Contact</Link>
                </div>

                {/* Actions Menu */}
                <div className="flex items-center gap-4">
                    <Link 
                        to="/contact" 
                        className="hidden md:inline-block text-sm font-bold bg-slate-900 text-white hover:bg-emerald-600 px-5 py-2.5 rounded-xl shadow-md transition"
                    >
                        Get in Touch
                    </Link>
                    
                    {/* Mobile Hamburger Trigger */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none transition rounded-lg hover:bg-slate-50"
                        >
                            {isMenuOpen ? <FaTimes size={20} className="text-red-500" /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown Panel */}
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl z-50 animate-fadeIn">
                    <div className="p-6 flex flex-col space-y-4">
                        <button 
                            onClick={handleHomeClick} 
                            className="text-left text-base font-bold text-slate-700 hover:text-emerald-600 transition py-2 focus:outline-none"
                        >
                            Home
                        </button>
                        <Link to="/about" className="text-base font-bold text-slate-700 hover:text-emerald-600 transition py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/contact" className="text-base font-bold text-slate-700 hover:text-emerald-600 transition py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <Link 
                            to="/contact" 
                            className="block text-center text-sm font-bold bg-slate-900 text-white hover:bg-emerald-600 py-3 rounded-xl shadow transition mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
