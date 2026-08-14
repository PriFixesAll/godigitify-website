'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#D4D8E1] text-[#1E293B] flex flex-col justify-between p-4 sm:p-8 lg:p-12 select-none relative overflow-hidden">
      {/* TOP HEADER */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between relative z-10 pt-2 pb-4">
        <div className="flex items-center gap-3">
          <Logo showTagline={false} />
        </div>
        <button
          aria-label="Toggle navigation menu"
          className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#2B62FB] hover:border-[#2B62FB]/40 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* MAIN 404 CARD CONTAINER MATCHING REFERENCE IMAGE */}
      <main className="max-w-4xl mx-auto w-full my-auto py-6 sm:py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="bg-white rounded-2xl sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative overflow-hidden"
        >
          {/* LEFT COLUMN: BROKEN LIGHTBULB SVG ILLUSTRATION */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-[#F1F4F9] flex items-center justify-center shadow-inner overflow-visible">
              {/* BROKEN LIGHTBULB SVG WITH ACCURATE ELECTRIC BLUE & SLATE COLORS */}
              <svg
                viewBox="0 0 240 280"
                className="w-48 h-56 sm:w-56 sm:h-64 overflow-visible relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* BULB BLUE SCREW BASE */}
                <g id="bulb-base">
                  <path
                    d="M95 210 C95 205, 145 205, 145 210 L142 225 C142 230, 98 230, 98 225 Z"
                    fill="#2B62FB"
                    stroke="#1E293B"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M98 225 C98 222, 142 222, 142 225 L138 238 C138 242, 102 242, 102 238 Z"
                    fill="#1E58F6"
                    stroke="#1E293B"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M102 238 C102 236, 138 236, 138 238 L132 248 C132 253, 108 253, 108 248 Z"
                    fill="#2B62FB"
                    stroke="#1E293B"
                    strokeWidth="2.5"
                  />
                  {/* BASE CONTACT POINT */}
                  <path
                    d="M108 248 C108 255, 132 255, 132 248 Z"
                    fill="#1E293B"
                  />
                </g>

                {/* FILAMENT WIRES INSIDE BROKEN BULB */}
                <path
                  d="M110 205 L108 145 L116 130 M130 205 L132 145 L124 130"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="125" r="3.5" fill="#2B62FB" />

                {/* BROKEN GLASS OUTLINE SHARDS */}
                <path
                  d="M95 205 C70 170 60 135 60 110 C60 90 68 75 80 65 L70 85 L90 95 L82 120 L102 135 L95 165 L105 185 Z"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#1E293B"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M145 205 C170 170 180 135 180 110 C180 75 160 50 145 35 L140 60 L160 85 L145 105 L165 140 L140 170 Z"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#1E293B"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                {/* FLOATING TOP GLASS SHARDS */}
                <motion.path
                  animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  d="M100 45 L120 20 L135 40 L115 55 Z"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <motion.path
                  animate={{ y: [4, -4, 4], rotate: [2, -2, 2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  d="M75 40 L90 25 L98 42 L85 50 Z"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* ELECTRIC BLUE INNER HIGHLIGHT LINES */}
                <path
                  d="M68 110 C68 98 72 88 80 80"
                  stroke="#2B62FB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M172 110 C172 90 160 70 148 55"
                  stroke="#2B62FB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN: 404 TEXT & CONTENT MATCHING REFERENCE IMAGE COLORS */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* ACCURATE ELECTRIC BLUE 404 TYPOGRAPHY (#2B62FB) */}
            <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-[#2B62FB] leading-none mb-3 select-none">
              404
            </h1>

            {/* DARK CHARCOAL HEADLINE */}
            <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-[0.16em] text-[#1E293B] mb-2">
              LOOKS LIKE YOU&apos;RE LOST
            </h2>

            {/* MUTED SLATE SUBTITLE */}
            <p className="text-xs sm:text-[13px] text-[#94A3B8] font-medium mb-8 max-w-xs leading-relaxed">
              The page you are looking for not availble!
            </p>

            {/* GO TO HOME BUTTON */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-bold tracking-[0.18em] text-[11px] uppercase text-[#1E293B] hover:text-[#2B62FB] transition-all duration-200 group bg-transparent"
            >
              <span>GO TO HOME</span>
              <ArrowRight className="w-4 h-4 text-[#1E293B] group-hover:text-[#2B62FB] group-hover:translate-x-1.5 transition-all duration-200" />
            </Link>
          </div>
        </motion.div>
      </main>

      {/* BOTTOM FOOTER LINE */}
      <footer className="max-w-7xl mx-auto w-full text-center relative z-10 pt-4 pb-2 text-[11px] text-slate-500 font-normal">
        <p>© 2026 GoDigitify Technology Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
