'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { aboutMetrics } from '../data/about';

export function AboutHero() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pt-32 pb-20 sm:pb-28 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-[#7C3AED]/12 via-[#A855F7]/8 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* HERO CONTAINER */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8F8] mb-6 shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase font-cera">
              AI-ALIGNED GROWTH SYSTEMS PARTNER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.06] font-cera mb-6"
          >
            Building Scalable <span className="text-[#7C3AED]">Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
            className="text-slate-600 font-normal text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Godigitify is not a traditional agency. We're a digital growth systems partner that helps established companies move from effort-based tactics to predictable, scalable execution infrastructure. We architect, build, and optimize the systems that power sustainable business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_6px_24px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start Growth Diagnostic</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200/90 text-[#0F172A] font-bold text-sm hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Explore Our Systems</span>
            </Link>
          </motion.div>
        </div>

        {/* METRICS CARDS OVERLAY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {aboutMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] text-center hover:border-[#7C3AED]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#7C3AED] tracking-tight font-cera mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-[#0F172A] uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
