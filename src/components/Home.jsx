import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ homes, onSearchInitiated }) => {
    const [keywords, setKeywords] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const locations = ['Bhaktapur', 'Kathmandu', 'Pokhara', 'Jhapa', 'Nikoshera'];

    const handleSearch = () => {
        onSearchInitiated(keywords);
        setSuggestions([]);  // Clear suggestions after search
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setKeywords(value);
        if (value) {
            const filteredSuggestions = locations.filter(location =>
                location.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const redirectToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <main className="bg-white min-h-screen">
                <section className="bg-white py-12">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Search for your ideal place</h1>
                        <h1 className="text-4xl font-bold mb-4">
                            Find <span className="text-orange-500">Your Dream Home</span>
                        </h1>
                        <p className="text-lg mb-8">Search from thousands of listings to find the perfect home for you and your family.</p>
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg border border-gray-300 shadow-lg"
                                placeholder="Search locations..."
                                value={keywords}
                                onChange={handleInputChange}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                            />
                            <button
                                className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-blue-600"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                            {suggestions.length > 0 && (
                                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => {
                                                setKeywords(suggestion);
                                                setSuggestions([]);
                                            }}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </section>

                <section className="py-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold mb-4">Wide Range of Listings</h2>
                            <p>Explore a wide range of listings from different locations and price ranges.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold mb-4">User-Friendly Interface</h2>
                            <p>Easily navigate through listings with our user-friendly interface.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold mb-4">Expert Advice</h2>
                            <p>Get expert advice from our team of real estate professionals.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-300 py-12 text-gray-800 rounded-md shadow-lg">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
                        <p className="mb-8">Sign up today and start your search with Home Finder.</p>
                        <button 
                            className="px-6 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-500 hover:text-white"
                            onClick={redirectToLogin}
                        >
                            Get Started
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
