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
        navigate(`/#${sectionId}`);
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-xl font-bold md:col-span-1">House-Locater</div>
                <div className="hidden md:flex space-x-10 justify-center md:col-span-1">
                    <Link to="/" className="hover:underline" onClick={() => handleLinkClick('home')}>Home</Link>
                    <Link to="/" className="hover:underline" onClick={() => handleLinkClick('about')}>About</Link>
                    <Link to="/" className="hover:underline" onClick={() => handleLinkClick('contact')}>Contact</Link>
                </div>
                <div className="relative flex items-center justify-end md:col-span-1">
                    {!isLoginPage && (
                        <div className="hidden md:block relative">
                            <Link to="/login" className='text-gray-200 hover:text-gray-300 hover:underline cursor-pointer'>Login..|Sign-in</Link>
                        </div>
                    )}
                    <div className="md:hidden ml-2">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden bg-blue-600 text-white p-4 absolute top-15 left-0 w-full z-10">
                    <ul className="flex flex-col space-y-4 items-center">
                        <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('home')}>Home</Link></li>
                        <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('about')}>About</Link></li>
                        <li><Link to="/" className="hover:underline" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
