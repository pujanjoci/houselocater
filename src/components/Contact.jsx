import React, { useState } from 'react';
import { 
    FaMapMarkerAlt, 
    FaPhone, 
    FaEnvelope, 
    FaClock, 
    FaPaperPlane, 
    FaCheckCircle 
} from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/myyranbq', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(", "));
        } else {
          setError('Oops! There was a problem submitting your form');
        }
      }
    } catch (err) {
      setError('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-snug">Contact House Locater</h1>
          <p className="text-slate-300 mt-4 text-sm md:text-base font-light leading-relaxed">
            Have questions about a listing or legal document submissions? Reach out, and our team will guide you.
          </p>
        </div>
      </section>

      {/* 2. DUAL-COLUMN LAYOUT */}
      <div className="container mx-auto px-6 mt-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-emerald-600 to-slate-900 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Headquarters
              </span>
              <h2 className="text-2xl font-black mb-6">Contact Information</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Office Address</h4>
                    <p className="text-sm text-slate-200 mt-1 font-medium leading-relaxed">
                      Srijananagar, Bhaktapur, Bagmati, Nepal
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Support</h4>
                    <p className="text-sm text-slate-200 mt-1 font-medium">
                      +977-1-4567890
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Inquiry</h4>
                    <p className="text-sm text-slate-200 mt-1 font-medium">
                      support@houselocater.com
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <FaClock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Working Hours</h4>
                    <p className="text-sm text-slate-200 mt-1 font-medium">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-800 pt-6 mt-8 relative z-10 text-xs text-slate-400 font-light leading-relaxed">
              * Property specific inquiries will be automatically routed to the listing agent assigned to that property database file.
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-8 shadow-xl flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <FaCheckCircle className="text-emerald-500 w-16 h-16 animate-bounce" />
                <h3 className="text-2xl font-black text-slate-800">Thank You!</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                  Your contact form inquiry has been submitted. A representative will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-slate-900 hover:bg-slate-950 text-white font-bold py-2.5 px-8 rounded-xl text-sm transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-800">Send a Message</h3>
                  <p className="text-slate-400 text-xs mt-1 font-semibold">We answer all questions within one business day.</p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 text-xs font-semibold p-3 rounded-xl border border-red-100 mb-4 animate-shake">
                    ⚠️ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Your Name</label>
                    <input 
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 font-medium text-slate-700 placeholder-slate-400 transition" 
                      type="text" 
                      placeholder="Enter full name" 
                      name="name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Email Address</label>
                    <input 
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 font-medium text-slate-700 placeholder-slate-400 transition" 
                      type="email" 
                      placeholder="you@example.com" 
                      name="email" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wide">Message details</label>
                    <textarea 
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50/50 font-medium text-slate-700 placeholder-slate-400 leading-relaxed transition" 
                      placeholder="Tell us what you are looking for..." 
                      name="message" 
                      rows="4" 
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-3 mt-2">
                    <button 
                      className="border border-slate-200 hover:bg-slate-50 text-slate-600 px-6 py-2.5 rounded-xl font-bold transition text-sm focus:outline-none" 
                      type="button" 
                      onClick={() => setError('')}
                    >
                      Clear
                    </button>
                    <button 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-emerald-600/10 transition text-sm flex items-center gap-2" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <FaPaperPlane className="w-3.5 h-3.5" />
                      )}
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
