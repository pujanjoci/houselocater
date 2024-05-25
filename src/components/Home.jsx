import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ homes, onSearchInitiated }) => {
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        onSearchInitiated(keywords);
    };

    const redirectToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <main className="bg-white min-h-screen">
                <section className="bg-white py-12">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
                        <p className="text-lg mb-8">Search from thousands of listings to find the perfect home for you and your family.</p>
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg border border-gray-300 shadow-lg"
                                placeholder="Search locations..."
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                            />
                            <button
                                className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
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

                <section className="bg-blue-600 py-12 text-white rounded-md shadow-lg">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
                        <p className="mb-8">Sign up today and start your search with Home Finder.</p>
                        <button 
                            className="px-6 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-200"
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
