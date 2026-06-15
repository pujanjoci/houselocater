import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
    FaMapMarkerAlt, 
    FaBed, 
    FaBath, 
    FaSearch, 
    FaShieldAlt, 
    FaBolt, 
    FaLightbulb, 
    FaArrowRight, 
    FaHome, 
    FaDollarSign,
    FaRegNewspaper
} from 'react-icons/fa';

const Home = ({ homes, onSearchInitiated }) => {
    const [keywords, setKeywords] = useState('');
    const [propertyType, setPropertyType] = useState('All');
    const [priceRange, setPriceRange] = useState('All');
    const [suggestions, setSuggestions] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const locations = ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Pokhara', 'Butwal', 'Chitwan', 'Nepalgunj', 'Jhapa', 'Damak'];

    // Auto-popup trigger after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // Get first newly added property for the popup
    const newHouse = homes.find(home => home.isNew) || homes[2];

    const handleSearch = () => {
        let searchQuery = keywords;
        if (propertyType !== 'All') searchQuery += ` ${propertyType}`;
        if (priceRange !== 'All') searchQuery += ` ${priceRange}`;
        onSearchInitiated(searchQuery.trim());
        setSuggestions([]);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setKeywords(value);
        if (value) {
            const filteredSuggestions = locations.filter(loc =>
                loc.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleLocationClick = (locName) => {
        setKeywords(locName);
        onSearchInitiated(locName);
    };

    // Filter featured vs latest homes
    const featuredHomes = homes.slice(0, 3);
    const latestHomes = homes.slice(3, 7);

    // Mock Real Estate Blog & Notices
    const blogNotices = [
      {
        id: 1,
        title: "Notice: Land Registration Process Simplified in Nepal",
        category: "Government Notice",
        date: "June 12, 2026",
        summary: "The Ministry of Land Management has launched new online registration desks to streamline property title transfers and reduce waiting times.",
      },
      {
        id: 2,
        title: "Home Buying Guide: Document Audits and Road Approvals",
        category: "Buying Guide",
        date: "June 08, 2026",
        summary: "A comprehensive walkthrough covering land verification bills (Lalpurja), structural approvals, road access checks, and municipal water allocations.",
      },
      {
        id: 3,
        title: "Market Report: Pokhara Real Estate Yields 15% Annual Growth",
        category: "Market Update",
        date: "May 28, 2026",
        summary: "Enhanced highway connectivity and tourist sector expansion have triggered a significant appreciation in vacation house pricing.",
      }
    ];

    return (
        <div className="relative font-sans text-slate-800 bg-slate-50/50">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden rounded-2xl shadow-xl mt-4 mx-4">
                {/* Background image & dark overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out transform scale-105"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
                    <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider backdrop-blur-sm">
                        ✨ Discover Premium Living
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Find Your Perfect Home With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                            House Locater
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover houses, apartments, and luxury properties easily in Kathmandu, Pokhara, Lalitpur, and beyond.
                    </p>

                    {/* Integrated Search Bar */}
                    <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl text-slate-800 max-w-4xl mx-auto text-left border border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Location Search Input */}
                            <div className="relative">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Location</label>
                                <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                    <FaMapMarkerAlt className="text-slate-400 mr-2 w-4 h-4 shrink-0" />
                                    <input
                                        type="text"
                                        className="w-full text-slate-700 font-medium focus:outline-none bg-transparent placeholder-slate-400 text-sm"
                                        placeholder="Where are you looking?"
                                        value={keywords}
                                        onChange={handleInputChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSearch();
                                        }}
                                    />
                                </div>
                                {suggestions.length > 0 && (
                                    <ul className="absolute left-0 right-0 bg-white border border-slate-100 rounded-xl mt-1 shadow-2xl z-20 max-h-48 overflow-y-auto overflow-hidden divide-y divide-slate-50">
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 text-slate-700 font-medium transition"
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

                            {/* Property Type Dropdown */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Property Type</label>
                                <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                    <FaHome className="text-slate-400 mr-2 w-4 h-4 shrink-0" />
                                    <select
                                        className="w-full text-slate-700 font-medium focus:outline-none bg-transparent text-sm cursor-pointer"
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    >
                                        <option value="All">All Types</option>
                                        <option value="House">House</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Cottage">Cottage</option>
                                    </select>
                                </div>
                            </div>

                            {/* Price Range Dropdown */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Price Range</label>
                                <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                    <FaDollarSign className="text-slate-400 mr-2 w-4 h-4 shrink-0" />
                                    <select
                                        className="w-full text-slate-700 font-medium focus:outline-none bg-transparent text-sm cursor-pointer"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                    >
                                        <option value="All">Any Price</option>
                                        <option value="Under $250k">Under $250k</option>
                                        <option value="$250k - $500k">$250k - $500k</option>
                                        <option value="$500k - $1M">$500k - $1M</option>
                                        <option value="Above $1M">Above $1M</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* CTA Search Button */}
                        <div className="mt-4 flex justify-end">
                            <button
                                className="w-full md:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2 text-sm"
                                onClick={handleSearch}
                            >
                                <FaSearch className="w-4 h-4" />
                                Search Houses
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATISTICS SECTION */}
            <section className="relative z-10 -mt-10 max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">120+</p>
                        <p className="text-slate-500 font-semibold text-sm mt-1">Houses Listed</p>
                    </div>
                    <div className="border-l border-slate-100">
                        <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">20+</p>
                        <p className="text-slate-500 font-semibold text-sm mt-1">Locations Covered</p>
                    </div>
                    <div className="border-l border-slate-100">
                        <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">1K+</p>
                        <p className="text-slate-500 font-semibold text-sm mt-1">Daily Visitors</p>
                    </div>
                    <div className="border-l border-slate-100">
                        <p className="text-3xl md:text-4xl font-extrabold text-emerald-600">50+</p>
                        <p className="text-slate-500 font-semibold text-sm mt-1">Verified Owners</p>
                    </div>
                </div>
            </section>

            {/* 3. FEATURED HOUSES SECTION */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block mb-2">Exclusive Selection</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">Featured Houses</h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto font-medium">Explore our luxury listings designed with outstanding structure, design, and strategic settings.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredHomes.map((home) => (
                        <div 
                            key={home.id} 
                            className="group bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={home.image} 
                                    alt={home.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                                    {home.details.type}
                                </span>
                                <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-sm text-white text-base font-extrabold px-3 py-1 rounded-lg">
                                    ${home.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition leading-snug mb-2">{home.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed font-normal">{home.description}</p>
                                    <p className="text-slate-400 text-xs font-semibold mb-6 flex items-center gap-1.5">
                                        <FaMapMarkerAlt className="text-emerald-500 w-3 h-3" /> {home.location.address}, {home.location.city}
                                    </p>
                                </div>
                                <div className="border-t border-slate-50 pt-5">
                                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-500 mb-5">
                                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center justify-center">
                                            <p className="text-slate-800 text-sm font-bold flex items-center gap-1"><FaBed className="w-3.5 h-3.5 text-slate-500" /> {home.details.bedrooms}</p>
                                            <p className="text-slate-400 text-[10px] uppercase mt-0.5">Beds</p>
                                        </div>
                                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center justify-center">
                                            <p className="text-slate-800 text-sm font-bold flex items-center gap-1"><FaBath className="w-3.5 h-3.5 text-slate-500" /> {home.details.bathrooms}</p>
                                            <p className="text-slate-400 text-[10px] uppercase mt-0.5">Baths</p>
                                        </div>
                                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center justify-center">
                                            <p className="text-slate-800 text-[10px] font-bold leading-tight truncate flex items-center gap-1"><FaHome className="w-3.5 h-3.5 text-slate-500" /> {home.details.area.split(' ')[0]}</p>
                                            <p className="text-slate-400 text-[10px] uppercase mt-1">Area</p>
                                        </div>
                                    </div>
                                    <Link 
                                        to={`/link/${home.id}`} 
                                        className="block text-center bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl shadow transition duration-200 text-sm"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. POPULAR LOCATIONS SECTION */}
            <section className="py-20 bg-slate-900 text-white rounded-3xl shadow-xl mx-4 my-10 px-6 max-w-7xl lg:mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest block mb-2">Regional Focus</span>
                    <h2 className="text-3xl md:text-4xl font-black">Popular Locations</h2>
                    <p className="text-slate-400 mt-3 max-w-md mx-auto font-medium">Browse beautiful listings directly in some of our most requested neighborhoods.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                    {[
                        { name: 'Kathmandu', count: '45+ Houses', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Lalitpur', count: '28+ Houses', img: 'https://images.unsplash.com/photo-1626294711319-3f8d38ee59f2?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Bhaktapur', count: '31+ Houses', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Pokhara', count: '18+ Houses', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Butwal', count: '12+ Houses', img: 'https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Chitwan', count: '15+ Houses', img: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=400&q=80' }
                    ].map((loc, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => handleLocationClick(loc.name)}
                            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition transform hover:-translate-y-1.5 hover:shadow-2xl"
                        >
                            <img 
                                src={loc.img} 
                                alt={loc.name} 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition duration-300" />
                            
                            <div className="absolute bottom-5 left-5 z-10">
                                <h3 className="text-xl font-bold tracking-tight">{loc.name}</h3>
                                <p className="text-xs text-emerald-400 font-semibold mt-1">{loc.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. WHY CHOOSE US SECTION */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block mb-2">Our Advantage</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">Why Choose House Locater</h2>
                    <p className="text-slate-500 mt-3 max-w-md mx-auto font-medium">We build platforms of trust connecting genuine homeowners and real seekers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-emerald-100 transition duration-300">
                        <div className="bg-emerald-50 text-emerald-600 w-12 h-12 flex items-center justify-center rounded-xl font-bold mb-6">
                            <FaShieldAlt className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Verified Listings</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Every single house on our database goes through strict documentation audit and coordinate verification before list display.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-emerald-100 transition duration-300">
                        <div className="bg-emerald-50 text-emerald-600 w-12 h-12 flex items-center justify-center rounded-xl font-bold mb-6">
                            <FaBolt className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Easy Search Interface</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Filter down to cities, size, pricing limits, and property build structures instantly in a single sleek search box.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-emerald-100 transition duration-300">
                        <div className="bg-emerald-50 text-emerald-600 w-12 h-12 flex items-center justify-center rounded-xl font-bold mb-6">
                            <FaLightbulb className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Modern Experience</h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            Fast page routing, smooth visual interactions, crystal-clear property details, and effortless contact layouts.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. LATEST BLOG & NOTICES SECTION */}
            <section className="py-20 bg-slate-900 text-white rounded-3xl shadow-xl mx-4 my-10 px-6 max-w-7xl lg:mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest block mb-2">Notice Board & Guides</span>
                    <h2 className="text-3xl md:text-4xl font-black flex items-center justify-center gap-3">
                        <FaRegNewspaper className="text-emerald-400" /> Latest Blog & Notices
                    </h2>
                    <p className="text-slate-400 mt-3 max-w-md mx-auto font-medium">Stay updated with policy releases, real estate guidelines, and local registration notice portals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogNotices.map((notice) => (
                        <div 
                            key={notice.id}
                            className="bg-slate-950/55 border border-slate-800 hover:border-emerald-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
                        >
                            <div>
                                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-3 py-1 rounded-full">
                                    {notice.category}
                                </span>
                                <h3 className="text-lg font-bold text-white mt-4 mb-2 leading-snug hover:text-emerald-400 cursor-pointer transition">
                                    {notice.title}
                                </h3>
                                <p className="text-slate-400 text-xs mb-4">{notice.date}</p>
                                <p className="text-slate-350 text-sm leading-relaxed font-light line-clamp-3">
                                    {notice.summary}
                                </p>
                            </div>
                            <div className="border-t border-slate-900 pt-4 mt-6">
                                <Link 
                                    to="/contact" 
                                    className="text-xs font-bold text-emerald-400 hover:text-emerald-350 flex items-center gap-1.5"
                                >
                                    Inquire Details <FaArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. LATEST PROPERTIES SECTION */}
            <section className="py-20 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block mb-2">Fresh In Store</span>
                            <h2 className="text-3xl font-black text-slate-800">Latest Properties</h2>
                        </div>
                        <p className="text-slate-500 md:max-w-xs text-sm mt-3 md:mt-0 font-medium">Newly listed properties uploaded today across prime resident areas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {latestHomes.map((home) => (
                            <div 
                                key={home.id}
                                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                                    <img 
                                        src={home.image} 
                                        alt={home.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                                    />
                                    {home.isNew && (
                                        <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-between sm:w-3/5">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                                                {home.details.type}
                                            </span>
                                            <span className="text-slate-800 text-base font-extrabold">
                                                ${home.price.toLocaleString()}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition truncate mb-2">{home.title}</h3>
                                        <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">{home.description}</p>
                                    </div>
                                    <div className="border-t border-slate-50 pt-4 flex items-center justify-between mt-auto">
                                        <span className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                            <span><FaBed className="inline mr-0.5 text-slate-400" /> {home.details.bedrooms} Bds</span>
                                            <span className="text-slate-300">|</span>
                                            <span><FaBath className="inline mr-0.5 text-slate-400" /> {home.details.bathrooms} Bth</span>
                                        </span>
                                        <Link 
                                            to={`/link/${home.id}`}
                                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                                        >
                                            View Details <FaArrowRight className="w-2.5 h-2.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION SECTION */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-800 text-white rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    {/* Background visual shapes */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-emerald-600 to-slate-900 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to find your next home?</h2>
                        <p className="text-emerald-100 mb-8 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed">
                            Sign up to contact our verified agent networks and find the best properties across Lalitpur, Pokhara, Kathmandu, and other popular cities.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                className="px-8 py-3 bg-white hover:bg-emerald-50 text-slate-900 font-bold rounded-xl shadow-md transition duration-200 text-sm"
                                onClick={() => handleLocationClick('Kathmandu')}
                            >
                                Explore Houses
                            </button>
                            <Link 
                                to="/contact"
                                className="px-8 py-3 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl shadow-md transition duration-200 text-sm flex items-center justify-center"
                            >
                                Contact Agent
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. NEWLY ADDED HOUSE POPUP */}
            {newHouse && (
                <div 
                    className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden transition-all duration-500 ease-out transform ${
                        showPopup ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="flex p-4 gap-4 relative">
                        {/* Close button */}
                        <button 
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-50 transition font-sans text-xs focus:outline-none"
                        >
                            ✕
                        </button>

                        {/* Thumbnail image */}
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                            <img src={newHouse.image} alt={newHouse.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Text and Actions */}
                        <div className="flex-grow pr-4">
                            <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                New House Added
                            </span>
                            <h4 className="text-sm font-extrabold text-slate-800 mt-1 line-clamp-1">{newHouse.title}</h4>
                            <p className="text-xs text-slate-500">{newHouse.location.city}, {newHouse.location.address}</p>
                            <p className="text-sm font-bold text-emerald-600 mt-1">${newHouse.price.toLocaleString()}</p>
                            
                            <div className="flex gap-2 mt-3">
                                <Link 
                                    to={`/link/${newHouse.id}`}
                                    onClick={() => setShowPopup(false)}
                                    className="text-xs bg-slate-900 text-white font-bold px-3 py-1.5 rounded-md hover:bg-emerald-600 transition"
                                >
                                    Visit Now
                                </Link>
                                <button 
                                    onClick={() => setShowPopup(false)}
                                    className="text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-semibold px-3 py-1.5 rounded-md transition focus:outline-none"
                                >
                                    Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
