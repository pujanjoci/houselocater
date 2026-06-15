import React from 'react';
import houseImage from '../assets/house.jpg';
import marketImage from '../assets/market.jpg';
import { 
    FaAward, 
    FaHome, 
    FaUsers, 
    FaBriefcase, 
    FaPhone, 
    FaEnvelope 
} from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: "John Doe",
      role: "Principal Listing Specialist",
      email: "john.doe@houselocater.com",
      phone: "555-123-4567",
      initials: "JD"
    },
    {
      name: "Jane Smith",
      role: "Acquisitions Specialist",
      email: "jane.smith@houselocater.com",
      phone: "555-987-6543",
      initials: "JS"
    },
    {
      name: "Bob Johnson",
      role: "Forest Listings Coordinator",
      email: "bob.johnson@houselocater.com",
      phone: "555-555-5555",
      initials: "BJ"
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-snug">About House Locater</h1>
          <p className="text-slate-300 mt-4 text-sm md:text-base font-light leading-relaxed">
            Connecting genuine property seekers and verified owners across Kathmandu, Pokhara, Lalitpur, and beyond since 2018.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-12 max-w-7xl">
        
        {/* 2. STORY GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Us Text */}
          <div className="flex flex-col justify-center bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">Who We Are</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">Making Search Simple</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 font-normal">
              Welcome to House Locater! We specialize in helping clients find their dream homes and sell their properties quickly and efficiently. Our experienced real estate specialist network is dedicated to providing exceptional service and guiding you through every step.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              By listing verified houses, conducting document reviews, and enabling direct inquiries, we eliminate the traditional hurdles of property searching.
            </p>
          </div>
          {/* About Us Image */}
          <div className="flex justify-center items-center">
            <img src={houseImage} alt="House" className="w-full max-w-lg h-80 rounded-2xl shadow-xl object-cover border border-slate-100" />
          </div>

          {/* Market Image */}
          <div className="flex justify-center items-center lg:order-3">
            <img src={marketImage} alt="Housing Market" className="w-full max-w-lg h-80 rounded-2xl shadow-xl object-cover border border-slate-100" />
          </div>
          {/* Market Text */}
          <div className="flex flex-col justify-center bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md lg:order-4">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">Market Dynamics</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">The Housing Market</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 font-normal">
              The housing market refers to the buying and selling of residential properties. It is influenced by various factors such as economic conditions, interest rates, and consumer confidence. 
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              Understanding the current state of local housing guidelines and regional developments is crucial for both buyers and sellers to make informed decisions. We keep our databases updated daily to help you navigate changes smoothly.
            </p>
          </div>
        </section>

        {/* 3. MILESTONES / STATISTICS GRID */}
        <section className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-800">Our Milestones</h3>
            <p className="text-slate-400 text-xs mt-1 font-semibold">Driven by trust, quality, and community service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/50 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-800">8+ Years</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Industry Experience</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/50 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaHome className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-800">120+ Listings</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Verified Properties</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/50 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-800">5K+ Clients</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Guided to Success</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100/50 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaAward className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-800">99.8%</h4>
              <p className="text-slate-500 text-xs mt-1 font-semibold">Satisfaction Rating</p>
            </div>
          </div>
        </section>

        {/* 4. MEET THE TEAM SECTION */}
        <section className="mb-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest block mb-1">Our Agents</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800">Meet Our Team</h3>
            <p className="text-slate-500 text-sm mt-2 font-medium">Licensed listing professionals ready to help audit documents and secure pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((agent, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl p-6 text-center flex flex-col items-center transition duration-300"
              >
                {/* Agent Initials Avatar */}
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-black flex items-center justify-center text-base shadow-sm mb-4">
                  {agent.initials}
                </div>
                <h4 className="text-lg font-bold text-slate-800 leading-snug">{agent.name}</h4>
                <p className="text-xs text-slate-500 font-semibold mt-1 mb-6">{agent.role}</p>
                
                <div className="border-t border-slate-50 pt-4 w-full flex flex-col gap-2 mt-auto">
                  <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 text-slate-650 hover:text-emerald-600 text-xs font-semibold transition">
                    <FaPhone className="text-slate-400 w-3 h-3" /> {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 text-slate-650 hover:text-emerald-600 text-xs font-semibold transition">
                    <FaEnvelope className="text-slate-400 w-3 h-3" /> {agent.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
