import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onSearchInitiated, isLoginPage }) => {
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

    const handleLinkClick = (sectionId) => {
        onSearchInitiated(false);
        setIsMenuOpen(false);
        navigate(`/#${sectionId}`);
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <header className="bg-white text-gray-800 p-4">
            <nav className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-xl font-bold md:col-span-1">
                    <Link to="/" className='hover:text-gray-400' onClick={() => handleLinkClick('home')}>
                        House-Locater
                    </Link>
                </div>
                <div className="hidden md:flex space-x-10 justify-center md:col-span-1">
                    <Link to="/" className="hover:underline hover:text-teal-400"  onClick={() => handleLinkClick('home')}>Home</Link>
                    <Link to="/" className="hover:underline hover:text-teal-400" onClick={() => handleLinkClick('about')}>About</Link>
                    <Link to="/" className="hover:underline hover:text-teal-400" onClick={() => handleLinkClick('contact')}>Contact</Link>
                </div>
            <div className="relative flex items-center justify-end md:col-span-1">
                {!isLoginPage && (
                <div className="hidden md:flex space-x-4">
                    <button className="border border-transparent hover:border-dotted hover:border-gray-400 rounded-lg focus:outline-none px-2">
                        <Link to="/login" className="text-gray-600 hover:text-gray-400 hover:underline cursor-pointer">Login</Link>
                    </button>
                </div>
                )}
                <div className="md:hidden ml-2 absolute top-[-40px] right-1 z-30">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} style={{ color: 'red' }} /> : <FaBars size={24} style={{ color: 'gray' }} />}
                    </button>
                </div>
            </div>
            </nav>
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
                    {/* Background blur effect */}
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    
                    {/* Menu content */}
                    <div className="bg-opacity-35 backdrop-filter backdrop-blur-sm text-white p-4 z-10">
                        <ul className="flex flex-col space-y-16 items-center">
                            <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('home')}>Home</Link></li>
                            <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('about')}>About</Link></li>
                            <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
