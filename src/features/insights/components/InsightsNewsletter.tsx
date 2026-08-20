'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function InsightsNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="relative bg-gradient-to-br from-[#181024] via-[#0F172A] to-[#181024] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#3B1F5E] shadow-[0_20px_60px_rgba(24,16,36,0.3)] overflow-hidden text-center">
          {/* AMBIENT PURPLE GLOW */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#C4B5FD] flex items-center justify-center mx-auto mb-6 border border-white/15">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-cera mb-4">
              Stay Ahead of Digital Transformation
            </h2>

            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed mb-8">
              Get our monthly research digest on enterprise AI architecture, custom SaaS engineering, and compounding brand growth delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED] text-[#C4B5FD] text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C4B5FD]" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="bg-white/10 border border-white/20 focus:border-[#7C3AED] rounded-full px-6 py-3.5 text-white text-sm placeholder-slate-400 outline-none w-full sm:flex-1 transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] font-semibold text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default InsightsNewsletter;
