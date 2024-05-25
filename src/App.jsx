import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchDisplay from './components/SearchDisplay';
import LoginForm from './components/LoginForm';
import Info from './components/Info';
import homeData from './components/HomeLocation.json';

function App() {
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
            <Header onSearchInitiated={handleLinkClick} />
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={
                        isSearchInitiated ? (
                            <SearchDisplay results={searchResults} keywords={searchQuery} />
                        ) : (
                            <>
                                <section id="home">
                                    <Home homes={homes} onSearchInitiated={handleSearch} />
                                </section>
                                <section id="about">
                                    <About />
                                </section>
                                <section id="contact" className="mt-4">
                                    <Contact/>
                                </section>
                            </>
                        )
                    } />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/link/:id" element={<Info />} />
                </Routes>
            </main>
        <section id="footer">
            <Footer/>
        </section>
        </Router>
    );
}

export default App;
