'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CallToActionSection() {
  return (
    <section className="relative py-12 md:py-20 bg-[#FAF9FC] text-white overflow-hidden select-none">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* OUTER WHITE DOUBLE-BORDER FRAME WITH ELEGANT STANDARD RECTANGLE CORNERS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-2.5 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_15px_45px_rgba(124,58,237,0.08)]"
        >
          {/* INNER CARD WITH LIGHT PURPLE GRADIENT THEME & INNER VIGNETTE GLOW */}
          <div className="relative w-full bg-gradient-to-b from-[#2E1053] via-[#3B1566] to-[#1E0836] rounded-xl sm:rounded-2xl py-14 px-8 sm:py-18 sm:px-16 lg:py-20 lg:px-24 flex flex-col items-center text-center overflow-hidden shadow-[inset_0_0_50px_rgba(255,255,255,0.12)] border border-white/10">
            
            {/* LUMINOUS AMBIENT PURPLE GLOW */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-[#A78BFA]/25 rounded-full blur-[100px] pointer-events-none" />

            {/* CURVED WIREFRAME GLOBE GRID LINES */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-end opacity-40">
              <svg
                viewBox="0 0 800 300"
                className="w-full h-auto max-w-4xl overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric Wireframe Arcs Radiating from Bottom Center */}
                <ellipse cx="400" cy="300" rx="160" ry="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="400" cy="300" rx="260" ry="150" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <ellipse cx="400" cy="300" rx="360" ry="210" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <ellipse cx="400" cy="300" rx="460" ry="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                {/* Vertical Meridian Lines */}
                <path d="M 260 300 Q 400 120 540 300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M 180 300 Q 400 70 620 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </svg>
            </div>

            {/* HEADLINE & SUBTITLE */}
            <div className="relative z-10 max-w-3xl mx-auto mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-cera">
                Ready to transform your digital ecosystem?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 font-normal leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
                Join forward-thinking enterprises building automated growth infrastructure and scaling without chaos.
              </p>
            </div>

            {/* CENTER 4-POINT GLOWING STAR ICON */}
            <div className="relative z-10 mb-6">
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </div>

            {/* GLASSMORPHIC PILL BUTTON */}
            <div className="relative z-10">
              <Link
                href="/contact"
                className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-semibold text-sm sm:text-base shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Start Growth Diagnostic</span>
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
