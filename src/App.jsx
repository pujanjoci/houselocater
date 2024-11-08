import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';  // New Privacy Policy import
import SearchDisplay from './components/SearchDisplay';
import AuthForm from './components/AuthForm';
import Info from './components/Info';
import homeData from './components/HomeLocation.json';

const App = () => {
    const [isSearchInitiated, setIsSearchInitiated] = useState(false);
    const [homes, setHomes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (homeData && homeData.homes) {
            setHomes(homeData.homes);
        } else {
            console.error('Invalid homeData format:', homeData);
        }
    }, []);

    const handleSearch = (query) => {
        setIsSearchInitiated(true);
        setSearchQuery(query);
        const results = homes.filter(home =>
            home.title.toLowerCase().includes(query.toLowerCase()) ||
            home.description.toLowerCase().includes(query.toLowerCase()) ||
            home.location.address.toLowerCase().includes(query.toLowerCase()) ||
            home.location.city.toLowerCase().includes(query.toLowerCase()) ||
            home.location.state.toLowerCase().includes(query.toLowerCase()) ||
            home.location.zip.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleLinkClick = () => {
        setIsSearchInitiated(false);
        setSearchQuery('');
    };

    return (
        <Router basename="/houselocater">
            <div className="flex flex-col min-h-screen">
                <Header onSearchInitiated={handleLinkClick} />
                <main className="container mx-auto p-4 flex-grow">
                    <Routes>
                        <Route path="/" element={
                            isSearchInitiated ? (
                                <SearchDisplay results={searchResults} keywords={searchQuery} />
                            ) : (
                                <>
                                    <section id="home">
                                        <Home homes={homes} onSearchInitiated={handleSearch} />
                                    </section>
                                </>
                            )
                        } />
                        {/* New Routes for About, Contact, Privacy Policy */}
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/policy" element={<PrivacyPolicy />} />
                        
                        <Route path="/login" element={<AuthForm />} />
                        <Route path="/link/:id" element={<Info />} />
                    </Routes>
                </main>
                <ConditionalFooter />
            </div>
        </Router>
    );
};

const ConditionalFooter = () => {
    const location = useLocation();

    // Define paths where footer should not be displayed
    const noFooterPaths = ['/searchdisplay', '/link'];

    // Check if current path matches any path in the noFooterPaths array
    const shouldDisplayFooter = !noFooterPaths.some(path => location.pathname.startsWith(path));

    return shouldDisplayFooter ? (
        <footer className="bg-gray-800 text-white py-4">
            <Footer />
        </footer>
    ) : null;
};

export default App;
