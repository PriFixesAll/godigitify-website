'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Mail, PhoneCall, MapPin, ArrowUpRight, CheckCircle2, ChevronDown, X, Check } from 'lucide-react';

const serviceOptions = [
  'Digital Growth Systems Audit',
  'AI & Automation Architecture',
  'Scalable Platform Engineering',
  'E-Commerce Growth Infrastructure',
  'Brand Systems Integration',
  'Marketing Automation Setup',
  'CRM & Sales Pipeline Systems',
  'Data Integration & Analytics',
  'Website Performance Optimization',
  'Mobile App Infrastructure',
  'Security & Compliance Review',
  'Full Digital Ecosystem Build',
  'Other Systems Need',
];

const locationOptions = ['Mumbai', 'Bangalore', 'Delhi', 'UK (London)', 'Amsterdam'];

const sourceOptions = [
  'Referral',
  'Media & News',
  'LinkedIn',
  'Instagram / Facebook',
  'Emails / Newsletter',
  'Search',
  'Other Sources',
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    selectedServices: [] as string[],
    location: '',
    source: '',
    message: '',
  });

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSourceOpen, setIsSourceOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
      if (sourceRef.current && !sourceRef.current.contains(event.target as Node)) {
        setIsSourceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: updated };
    });
  };

  const removeService = (service: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.filter((s) => s !== service),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || formData.selectedServices.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="relative bg-[#090D12] text-white min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden select-none">
      {/* AMBIENT RADIAL TOP GLOW & DEEP BACKGROUND WASH */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#7C3AED]/25 via-[#0F766E]/15 to-transparent blur-[160px] pointer-events-none" />

      {/* GIANT FADED BACKGROUND TYPOGRAPHY WATERMARK MATCHING REFERENCE IMAGE */}
      <div className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <span className="text-[130px] sm:text-[220px] lg:text-[300px] font-black text-white/[0.03] tracking-widest uppercase font-cera leading-none block select-none">
          CONTACT
        </span>
      </div>

      {/* SUBTLE GLOWING CIRCUIT LINES (MATCHING REFERENCE IMAGE EDGES) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M -50 150 L 120 150 L 220 250 L 320 250" fill="none" stroke="url(#circuit-grad)" strokeWidth="1.5" />
        <circle cx="320" cy="250" r="4" fill="#7C3AED" className="animate-pulse" />

        <path d="M 1200 200 L 1050 200 L 950 320 L 850 320" fill="none" stroke="url(#circuit-grad)" strokeWidth="1.5" />
        <circle cx="850" cy="320" r="4" fill="#0F766E" className="animate-pulse" />

        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0F766E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT DETAILS & INFO MATCHING REFERENCE */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              {/* COMPACT TOP PILL TAG */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wide mb-6 shadow-sm backdrop-blur-md"
              >
                <HelpCircle className="w-3.5 h-3.5 text-slate-300" />
                <span>Contact</span>
              </motion.div>

              {/* MAIN CRISP HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-cera mb-4"
              >
                Get in touch
              </motion.h1>

              {/* SUBTEXT DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed mb-10 max-w-md"
              >
                Have a project, growth challenge, or digital transformation requirement? Tell us what you’re looking to build.
              </motion.p>

              {/* 3 STACKED DARK GLASSMORPHISM CONTACT CARDS */}
              <div className="space-y-4">
                {/* 1. EMAIL CARD */}
                <motion.a
                  href="mailto:contact@godigitify.com"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="group bg-[#111721]/80 hover:bg-[#161F2C] border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 backdrop-blur-xl shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-xs font-medium">Email us</span>
                      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#A78BFA] transition-colors">
                        contact@godigitify.com
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#7C3AED] text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>

                {/* 2. PHONE CARD */}
                <motion.a
                  href="tel:+918001234567"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="group bg-[#111721]/80 hover:bg-[#161F2C] border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 backdrop-blur-xl shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-xs font-medium">Call us</span>
                      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#A78BFA] transition-colors">
                        +91 (800) 123-4567
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#7C3AED] text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>

                {/* 3. LOCATION CARD */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="group bg-[#111721]/80 hover:bg-[#161F2C] border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 backdrop-blur-xl shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                      <MapPin className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-xs font-medium">Our location</span>
                      <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#A78BFA] transition-colors">
                        New Delhi, India
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#7C3AED] text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DARK GLASSMORPHISM FORM PANEL MATCHING REFERENCE GRID */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 w-full bg-[#111721]/90 border border-white/10 rounded-[32px] p-6 sm:p-9 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative overflow-hidden"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED] text-[#C4B5FD] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white font-cera mb-2">Message Received!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8">
                  Thank you for reaching out. Our team will review your requirement and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      organization: '',
                      email: '',
                      phone: '',
                      selectedServices: [],
                      location: '',
                      source: '',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* ROW 1: NAME & ORGANIZATION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 mb-2">
                      Your Name <span className="text-[#A78BFA]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-[#18202C]/90 border border-white/10 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 w-full"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label htmlFor="organization" className="text-xs font-semibold text-slate-300 mb-2">
                      Your Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Organization name"
                      className="bg-[#18202C]/90 border border-white/10 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 w-full"
                    />
                  </div>
                </div>

                {/* ROW 2: EMAIL & PHONE NUMBER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 mb-2">
                      Your Email <span className="text-[#A78BFA]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="bg-[#18202C]/90 border border-white/10 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 w-full"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-300 mb-2">
                      Your Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="bg-[#18202C]/90 border border-white/10 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 w-full"
                    />
                  </div>
                </div>

                {/* ROW 3: MULTI-SELECT SERVICES DROPDOWN */}
                <div className="flex flex-col text-left relative" ref={servicesRef}>
                  <label className="text-xs font-semibold text-slate-300 mb-2">
                    Services are you interested in? <span className="text-[#A78BFA]">*</span>
                  </label>

                  <div
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="bg-[#18202C]/90 border border-white/10 hover:border-white/20 focus-within:border-[#7C3AED] rounded-2xl px-4 py-3 min-h-[48px] text-sm cursor-pointer flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex flex-wrap gap-1.5 items-center max-w-[90%]">
                      {formData.selectedServices.length === 0 ? (
                        <span className="text-slate-500">Select services</span>
                      ) : (
                        formData.selectedServices.map((service) => (
                          <span
                            key={service}
                            className="bg-[#7C3AED]/25 border border-[#7C3AED]/50 text-[#C4B5FD] text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5"
                          >
                            <span>{service}</span>
                            <X
                              className="w-3 h-3 hover:text-white transition-colors cursor-pointer"
                              onClick={(e) => removeService(service, e)}
                            />
                          </span>
                        ))
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* MULTI-SELECT DROPDOWN MENU */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#141C27] border border-white/15 rounded-2xl p-2 shadow-2xl z-30 max-h-60 overflow-y-auto space-y-1"
                      >
                        {serviceOptions.map((service) => {
                          const selected = formData.selectedServices.includes(service);
                          return (
                            <div
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                selected
                                  ? 'bg-[#7C3AED]/30 text-[#C4B5FD]'
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <span>{service}</span>
                              {selected && <Check className="w-4 h-4 text-[#C4B5FD]" />}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ROW 4: PREFERRED OFFICE LOCATION & HOW DID YOU HEAR ABOUT US */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  
                  {/* LOCATION DROPDOWN */}
                  <div className="flex flex-col text-left relative" ref={locationRef}>
                    <label className="text-xs font-semibold text-slate-300 mb-2">
                      Preferred Office Location
                    </label>
                    <div
                      onClick={() => setIsLocationOpen(!isLocationOpen)}
                      className="bg-[#18202C]/90 border border-white/10 hover:border-white/20 focus-within:border-[#7C3AED] rounded-2xl px-4 py-3.5 text-sm cursor-pointer flex items-center justify-between transition-all duration-200"
                    >
                      <span className={formData.location ? 'text-white' : 'text-slate-500'}>
                        {formData.location || 'Select location'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isLocationOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#141C27] border border-white/15 rounded-2xl p-2 shadow-2xl z-30 space-y-1"
                        >
                          {locationOptions.map((loc) => (
                            <div
                              key={loc}
                              onClick={() => {
                                setFormData({ ...formData, location: loc });
                                setIsLocationOpen(false);
                              }}
                              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                formData.location === loc
                                  ? 'bg-[#7C3AED]/30 text-[#C4B5FD]'
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <span>{loc}</span>
                              {formData.location === loc && <Check className="w-4 h-4 text-[#C4B5FD]" />}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* HOW DID YOU HEAR ABOUT US DROPDOWN */}
                  <div className="flex flex-col text-left relative" ref={sourceRef}>
                    <label className="text-xs font-semibold text-slate-300 mb-2">
                      How did you hear about us?
                    </label>
                    <div
                      onClick={() => setIsSourceOpen(!isSourceOpen)}
                      className="bg-[#18202C]/90 border border-white/10 hover:border-white/20 focus-within:border-[#7C3AED] rounded-2xl px-4 py-3.5 text-sm cursor-pointer flex items-center justify-between transition-all duration-200"
                    >
                      <span className={formData.source ? 'text-white' : 'text-slate-500'}>
                        {formData.source || 'Select source'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSourceOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isSourceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#141C27] border border-white/15 rounded-2xl p-2 shadow-2xl z-30 space-y-1"
                        >
                          {sourceOptions.map((src) => (
                            <div
                              key={src}
                              onClick={() => {
                                setFormData({ ...formData, source: src });
                                setIsSourceOpen(false);
                              }}
                              className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer transition-colors ${
                                formData.source === src
                                  ? 'bg-[#7C3AED]/30 text-[#C4B5FD]'
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <span>{src}</span>
                              {formData.source === src && <Check className="w-4 h-4 text-[#C4B5FD]" />}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* ROW 5: WHAT'S ON YOUR MIND TEXTAREA */}
                <div className="flex flex-col text-left">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300 mb-2">
                    What’s on your mind?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    className="bg-[#18202C]/90 border border-white/10 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl px-4 py-3.5 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 w-full resize-none"
                  />
                </div>

                {/* ROW 6: SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-white text-[#090D12] hover:bg-slate-100 active:scale-[0.99] font-semibold text-base transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
