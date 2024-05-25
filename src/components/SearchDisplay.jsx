import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';

const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9: img9,
    10: img10,
};

const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 15) {
        return words.slice(0, 15).join(' ') + '...';
    }
    return description;
};

const SearchDisplay = ({ results, keywords }) => {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (id) => {
        setShowDetails({ ...showDetails, [id]: !showDetails[id] });
    };

    const filterHomes = (home) => {
        const lowerKeywords = keywords.toLowerCase();
        return (
            home.title.toLowerCase().includes(lowerKeywords) ||
            home.description.toLowerCase().includes(lowerKeywords) ||
            home.location.address.toLowerCase().includes(lowerKeywords) ||
            home.location.city.toLowerCase().includes(lowerKeywords) ||
            home.location.state.toLowerCase().includes(lowerKeywords) ||
            home.location.zip.toLowerCase().includes(lowerKeywords)
        );
    };

    const filteredResults = results.filter(filterHomes);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            {filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredResults.map((home) => (
                        <div key={home.id} className="bg-white p-4 rounded-lg shadow-md text-center justify-center">
                            <img src={images[home.id]} alt={home.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{home.title}</h2>
                            <p className="mb-2">{truncateDescription(home.description)}</p>
                            <p className="mb-2"> {home.location.state}, {home.location.address}, {home.location.city} </p>
                            <p className="text-lg font-bold">${home.price}</p>
                            <Link to={`/link/${home.id}`} className="text-blue-500 underline">Show more</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchDisplay;
