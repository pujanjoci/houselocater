import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeLocationData from './HomeLocation.json';
import { 
    FaBed, 
    FaBath, 
    FaHome, 
    FaCalendarAlt, 
    FaUser, 
    FaPhone, 
    FaEnvelope, 
    FaChevronRight, 
    FaCheck, 
    FaCheckCircle,
    FaArrowLeft,
    FaMapMarkerAlt
} from 'react-icons/fa';

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

const Info = () => {
    const { id } = useParams();
    const [home, setHome] = useState(null);
    
    // Inquiry Modal State
    const [showInquiryModal, setShowInquiryModal] = useState(false);
    const [inquiryType, setInquiryType] = useState(''); // 'buy' or 'reserve'
    const [inquiryName, setInquiryName] = useState('');
    const [inquiryEmail, setInquiryEmail] = useState('');
    const [inquiryPhone, setInquiryPhone] = useState('');
    const [inquiryMessage, setInquiryMessage] = useState('');
    const [inquirySent, setInquirySent] = useState(false);

    useEffect(() => {
        if (Array.isArray(HomeLocationData.homes)) {
            const selectedHome = HomeLocationData.homes.find((item) => item.id.toString() === id);
            setHome(selectedHome);
            if (selectedHome) {
                // Initialize default inquiry message
                setInquiryMessage(`Hello, I am highly interested in the "${selectedHome.title}" property located at ${selectedHome.location.address}, ${selectedHome.location.city}. Please send me details on the buying/reserving process.`);
            }
        }
    }, [id]);

    const handleOpenInquiry = (type) => {
        setInquiryType(type);
        setInquirySent(false);
        setShowInquiryModal(true);
    };

    const handleSendInquiry = (e) => {
        e.preventDefault();
        // Mock API call delay
        setInquirySent(true);
    };

    if (!home) {
        return (
            <div className="container mx-auto px-6 py-20 text-center text-slate-600">
                <p className="text-lg animate-pulse font-medium">Loading property details...</p>
            </div>
        );
    }

    // Agent Initials for Avatar
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-7xl">
            {/* Breadcrumbs Navigation */}
            <div className="text-slate-400 text-xs md:text-sm mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1">
                <Link to="/" className="hover:text-emerald-600 transition font-medium">Home</Link>
                <FaChevronRight className="w-2 h-2 shrink-0 text-slate-300" />
                <Link to="/" className="hover:text-emerald-600 transition font-medium">Properties</Link>
                <FaChevronRight className="w-2 h-2 shrink-0 text-slate-300" />
                <span className="text-slate-800 font-bold truncate">{home.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* LEFT COLUMN: Main Gallery, Description, and Amenities */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    {/* Main High-Res Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white aspect-video max-h-[500px]">
                        <img 
                            src={home.image || images[home.id]} 
                            alt={home.title} 
                            className="w-full h-full object-cover" 
                        />
                        <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                            {home.details.type}
                        </span>
                        {home.isNew && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase">
                                New Listing
                            </span>
                        )}
                    </div>

                    {/* Mock Image Gallery Thumbnails */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-xl overflow-hidden h-28 border border-slate-100 shadow-sm cursor-pointer hover:opacity-85 transition">
                            <img src={home.image || images[home.id]} alt="Interior 1" className="w-full h-full object-cover filter brightness-95" />
                        </div>
                        <div className="rounded-xl overflow-hidden h-28 border border-slate-100 shadow-sm cursor-pointer hover:opacity-85 transition">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80" alt="Interior 2" className="w-full h-full object-cover filter brightness-95" />
                        </div>
                        <div className="rounded-xl overflow-hidden h-28 border border-slate-100 shadow-sm cursor-pointer hover:opacity-85 transition">
                            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80" alt="Interior 3" className="w-full h-full object-cover filter brightness-95" />
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4">Property Description</h3>
                        <p className="text-slate-600 text-base leading-relaxed font-normal">
                            {home.description}
                        </p>
                        <p className="text-slate-650 text-base leading-relaxed font-normal mt-4">
                            This luxury {home.details.type.toLowerCase()} represents the absolute pinnacle of construction quality in {home.location.city}. Nestled in a premium, highly requested neighborhood with direct road approvals, it features an abundance of natural light, a private layout, and immediate access to city facilities and schools.
                        </p>
                    </div>

                    {/* Amenities Section */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4">Amenities & Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {home.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100/60">
                                    <div className="w-5 h-5 shrink-0 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-full">
                                        <FaCheck className="w-2.5 h-2.5" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Price Details, Spec Sheet, and Contact Form */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    {/* Main Listing Panel */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 md:p-8 flex flex-col gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-800 leading-snug">{home.title}</h2>
                            <p className="text-slate-500 text-sm font-medium mt-2 flex items-center gap-1.5">
                                <FaMapMarkerAlt className="text-emerald-500" /> {home.location.address}, {home.location.city}, {home.location.state}
                            </p>
                        </div>

                        {/* Price Tag */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Property Price</span>
                            <span className="text-2xl md:text-3xl font-black text-emerald-600">${home.price.toLocaleString()}</span>
                        </div>

                        {/* Detailed Specs Sheet */}
                        <div className="border-t border-b border-slate-100 py-6 flex flex-col gap-4">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Specifications</h4>
                            
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                                    <FaBed className="text-slate-400 w-4 h-4" /> Bedrooms
                                </span>
                                <span className="text-sm text-slate-800 font-bold">{home.details.bedrooms} Rooms</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                                    <FaBath className="text-slate-400 w-4 h-4" /> Bathrooms
                                </span>
                                <span className="text-sm text-slate-800 font-bold">{home.details.bathrooms} Baths</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                                    <FaHome className="text-slate-400 w-4 h-4" /> Property Area
                                </span>
                                <span className="text-sm text-slate-800 font-bold">{home.details.area}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                                    <FaCalendarAlt className="text-slate-400 w-4 h-4" /> Year Built
                                </span>
                                <span className="text-sm text-slate-800 font-bold">{home.details.yearBuilt}</span>
                            </div>
                        </div>

                        {/* CTA Direct Booking Actions */}
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => handleOpenInquiry('buy')}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition duration-200 text-sm"
                            >
                                Buy This Property
                            </button>
                            <button 
                                onClick={() => handleOpenInquiry('reserve')}
                                className="w-full bg-slate-900 hover:bg-slate-950 text-white font-bold py-3.5 px-6 rounded-xl shadow transition duration-200 text-sm"
                            >
                                Request Reservation
                            </button>
                        </div>
                    </div>

                    {/* Agent Contact Details Panel */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 flex flex-col gap-5">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assigned Agent</h4>
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                                {getInitials(home.agent.name)}
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-slate-800 leading-snug">{home.agent.name}</h4>
                                <p className="text-xs text-slate-500">Official Listing Specialist</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-3 border-t border-slate-50">
                            <a href={`tel:${home.agent.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 text-sm font-semibold transition py-1">
                                <FaPhone className="text-slate-400 w-3.5 h-3.5" /> {home.agent.phone}
                            </a>
                            <a href={`mailto:${home.agent.email}`} className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 text-sm font-semibold transition py-1">
                                <FaEnvelope className="text-slate-400 w-3.5 h-3.5" /> {home.agent.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 10. DIRECT AGENT INQUIRY MODAL */}
            {showInquiryModal && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-scaleUp">
                        {/* Modal Header */}
                        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
                            <h3 className="font-bold text-base md:text-lg">
                                {inquiryType === 'buy' ? 'Inquire Purchasing Property' : 'Request Reservation Booking'}
                            </h3>
                            <button 
                                onClick={() => setShowInquiryModal(false)}
                                className="text-slate-400 hover:text-white font-semibold transition text-sm focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {!inquirySent ? (
                                <form onSubmit={handleSendInquiry} className="flex flex-col gap-4">
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        No registration required! Submit your contact details below, and our listing agent **{home.agent.name}** will follow up with legal papers.
                                    </p>
                                    
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Full Name</label>
                                        <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50/50 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                            <FaUser className="text-slate-400 mr-2 w-3.5 h-3.5" />
                                            <input 
                                                type="text" 
                                                className="w-full text-sm focus:outline-none bg-transparent placeholder-slate-400 font-medium"
                                                placeholder="Enter your name"
                                                value={inquiryName}
                                                onChange={(e) => setInquiryName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Email Address</label>
                                        <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50/50 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                            <FaEnvelope className="text-slate-400 mr-2 w-3.5 h-3.5" />
                                            <input 
                                                type="email" 
                                                className="w-full text-sm focus:outline-none bg-transparent placeholder-slate-400 font-medium"
                                                placeholder="you@example.com"
                                                value={inquiryEmail}
                                                onChange={(e) => setInquiryEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Phone Number</label>
                                        <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50/50 focus-within:ring-2 focus-within:ring-emerald-500 transition">
                                            <FaPhone className="text-slate-400 mr-2 w-3.5 h-3.5" />
                                            <input 
                                                type="tel" 
                                                className="w-full text-sm focus:outline-none bg-transparent placeholder-slate-400 font-medium"
                                                placeholder="98XXXXXXXX / +977-..."
                                                value={inquiryPhone}
                                                onChange={(e) => setInquiryPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Message</label>
                                        <textarea 
                                            rows="3"
                                            className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-700 leading-relaxed"
                                            placeholder="Write message"
                                            value={inquiryMessage}
                                            onChange={(e) => setInquiryMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex gap-3 mt-2">
                                        <button 
                                            type="button"
                                            onClick={() => setShowInquiryModal(false)}
                                            className="w-1/2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-2.5 px-4 rounded-xl transition text-sm focus:outline-none"
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            type="submit"
                                            className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl shadow transition text-sm"
                                        >
                                            Submit Inquiry
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center py-6 flex flex-col items-center gap-4">
                                    <FaCheckCircle className="text-emerald-500 w-16 h-16 animate-bounce" />
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-800">Inquiry Sent Successfully!</h4>
                                        <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                                            Your request for **{home.title}** has been sent directly to agent **{home.agent.name}**.
                                        </p>
                                        <p className="text-xs text-slate-400 mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            A representative will contact you via email at **{inquiryEmail}** or phone at **{inquiryPhone}** within 24 hours.
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setShowInquiryModal(false)}
                                        className="mt-6 bg-slate-900 hover:bg-slate-950 text-white font-bold py-2.5 px-8 rounded-xl text-sm transition"
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Info;
