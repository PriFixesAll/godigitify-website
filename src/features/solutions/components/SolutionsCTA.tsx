'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function SolutionsCTA() {
  return (
    <section className="relative bg-[#0F172A] text-white select-none py-24 sm:py-32 overflow-hidden">
      {/* AMBIENT PURPLE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#A855F7]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* SUBTLE BACKGROUND CONNECTING DOT GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:60px_60px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="w-1.5 h-5 bg-[#A855F7] rounded-none shadow-[0_0_10px_#A855F7]" />
          <span className="text-xs font-semibold tracking-widest text-[#C4B5FD] uppercase">
            GET STARTED
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight font-cera max-w-3xl mx-auto mb-6"
        >
          Have a challenge <span className="text-[#A855F7]">worth solving?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-purple-200/80 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Let's understand where you are, where you want to go, and what needs to change to get there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_6px_24px_rgba(124,58,237,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Explore Our Services</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
