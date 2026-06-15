import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaBath } from 'react-icons/fa';

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
                        <div key={home.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img src={home.image || images[home.id]} alt={home.title} className="w-full h-52 object-cover" />
                                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    {home.details.type}
                                </span>
                                <span className="absolute bottom-3 right-3 bg-slate-900 bg-opacity-80 text-white text-sm font-bold px-3 py-1 rounded-lg">
                                    ${home.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-2 leading-snug">{home.title}</h2>
                                    <p className="text-gray-500 text-sm mb-3">{truncateDescription(home.description)}</p>
                                    <p className="text-slate-600 text-xs font-semibold mb-4 flex items-center gap-1.5">
                                        <FaMapMarkerAlt className="text-emerald-500 w-3 h-3 shrink-0" /> {home.location.address}, {home.location.city}
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <span className="text-xs text-slate-500 flex items-center gap-2 font-semibold">
                                        <span><FaBed className="inline mr-1 text-slate-400" /> {home.details.bedrooms} Beds</span>
                                        <span className="text-slate-300">|</span>
                                        <span><FaBath className="inline mr-1 text-slate-400" /> {home.details.bathrooms} Baths</span>
                                    </span>
                                    <Link to={`/link/${home.id}`} className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">
                                        View Details
                                    </Link>
                                </div>
                            </div>
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
