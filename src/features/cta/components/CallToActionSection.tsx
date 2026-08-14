'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CallToActionSection() {
  return (
    <section className="relative py-6 md:py-10 bg-[#FAF9FC] text-white overflow-hidden select-none">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* OUTER WHITE DOUBLE-BORDER FRAME (COMPACT SIZE MATCHING REFERENCE) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-2 rounded-[28px] sm:rounded-[34px] border border-slate-200/90 shadow-[0_12px_32px_rgba(124,58,237,0.07)]"
        >
          {/* INNER CARD WITH LIGHT PURPLE GRADIENT THEME & INNER VIGNETTE GLOW */}
          <div className="relative w-full bg-gradient-to-b from-[#2E1053] via-[#3B1566] to-[#1E0836] rounded-[20px] sm:rounded-[26px] py-7 px-6 sm:py-9 sm:px-10 flex flex-col items-center text-center overflow-hidden shadow-[inset_0_0_40px_rgba(255,255,255,0.12)] border border-white/10">
            
            {/* LUMINOUS AMBIENT PURPLE GLOW */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[380px] h-[160px] bg-[#A78BFA]/25 rounded-full blur-[80px] pointer-events-none" />

            {/* CURVED WIREFRAME GLOBE GRID LINES FROM 2ND REFERENCE IMAGE */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-end opacity-40">
              <svg
                viewBox="0 0 800 300"
                className="w-full h-auto max-w-2xl overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric Wireframe Arcs Radiating from Bottom Center */}
                <ellipse cx="400" cy="300" rx="140" ry="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="400" cy="300" rx="220" ry="130" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <ellipse cx="400" cy="300" rx="300" ry="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <ellipse cx="400" cy="300" rx="380" ry="230" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                {/* Vertical Meridian Lines */}
                <path d="M 260 300 Q 400 120 540 300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M 180 300 Q 400 70 620 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </svg>
            </div>

            {/* HEADLINE & SUBTITLE */}
            <div className="relative z-10 max-w-lg mx-auto mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight leading-tight mb-1.5">
                Ready to transform your digital ecosystem?
              </h2>
              <p className="text-[11.5px] sm:text-xs text-white/75 font-normal leading-relaxed max-w-sm mx-auto">
                Join forward-thinking enterprises building automated growth infrastructure and scaling without chaos.
              </p>
            </div>

            {/* CENTER 4-POINT GLOWING STAR ICON */}
            <div className="relative z-10 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_16px_rgba(255,255,255,0.3)]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </div>

            {/* GLASSMORPHIC PILL BUTTON */}
            <div className="relative z-10">
              <Link
                href="/contact"
                className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-medium text-xs shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_24px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
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
