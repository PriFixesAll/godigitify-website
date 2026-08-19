'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SolutionHeroVisual } from './SolutionHeroVisual';
import { SolutionPreviewCards } from './SolutionPreviewCards';

export function SolutionsHero() {
  return (
    <div className="relative w-full">
      {/* ULTRA-HIGH-CONTRAST LIGHT THEME HERO CONTAINER */}
      <section className="relative min-h-[680px] sm:min-h-[720px] lg:min-h-[760px] bg-gradient-to-br from-[#FAF9FC] via-[#F3E8FF] to-[#FAF5FF] text-[#0F172A] select-none pt-28 sm:pt-32 pb-24 sm:pb-32 rounded-b-[40px] sm:rounded-b-[56px] lg:rounded-b-[64px] overflow-hidden border-b border-[#E9D8F8] shadow-[0_20px_50px_rgba(124,58,237,0.06)]">
        
        {/* AMBIENT SOFT PURPLE & LILAC LIGHT ACCENTS */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7C3AED]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#A855F7]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT HERO CONTENT */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex items-center gap-2 mb-3.5"
              >
                <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
                <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
                  STRATEGIC DIGITAL SYSTEMS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#0F172A] leading-[1.04] font-cera mb-6"
              >
                <span className="text-[#0F172A]">From Discovery to Deployment: </span>
                <span className="text-[#7C3AED]">Unified Digital Systems.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.18 }}
                className="text-[#334155] font-medium text-base sm:text-lg max-w-[560px] leading-relaxed mb-8 sm:mb-10"
              >
                Transform your digital ecosystem through discovery & audit, system blueprinting, and seamless integration. We build scalable, automated growth systems that connect your brand, technology, and data for measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.28 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Link
                  href="#solution-grid"
                  className="px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_6px_24px_rgba(124,58,237,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-[#0F172A] border border-slate-300/90 font-bold text-sm hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT HERO ABSTRACT DIGITAL ECOSYSTEM VISUAL */}
            <div className="lg:col-span-5">
              <SolutionHeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* THREE OVERLAPPING SOLUTION CARDS EXTENDING OVER HERO BOTTOM BOUNDARY */}
      <SolutionPreviewCards />
    </div>
  );
}
