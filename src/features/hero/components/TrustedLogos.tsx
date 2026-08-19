'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Microsoft',
    render: () => (
      <div className="flex items-center gap-2 text-slate-700 font-semibold text-lg sm:text-xl tracking-tight">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#f25022] w-1.5 h-1.5" />
          <div className="bg-[#7fba00] w-1.5 h-1.5" />
          <div className="bg-[#00a4ef] w-1.5 h-1.5" />
          <div className="bg-[#ffb900] w-1.5 h-1.5" />
        </div>
        <span>Microsoft</span>
      </div>
    ),
  },
  {
    name: 'Google',
    render: () => (
      <div className="text-slate-700 font-medium text-lg sm:text-xl tracking-tight font-sans">
        Google
      </div>
    ),
  },
  {
    name: 'AWS',
    render: () => (
      <div className="flex flex-col items-center">
        <span className="text-slate-700 font-bold text-lg sm:text-xl tracking-wider leading-none">
          AWS
        </span>
        <svg width="24" height="6" viewBox="0 0 40 10" fill="none" className="text-slate-600 mt-0.5">
          <path
            d="M2 3 Q20 12 38 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'IBM',
    render: () => (
      <div className="text-slate-700 font-semibold text-xl sm:text-2xl tracking-widest font-mono">
        IBM
      </div>
    ),
  },
  {
    name: 'DELL',
    render: () => (
      <div className="border-2 border-slate-600 rounded-full px-3 py-0.5 text-slate-700 font-bold text-sm sm:text-base tracking-widest uppercase">
        Dell
      </div>
    ),
  },
  {
    name: 'ORACLE',
    render: () => (
      <div className="text-slate-700 font-bold text-lg sm:text-xl tracking-widest uppercase">
        Oracle
      </div>
    ),
  },
];

export function TrustedLogos() {
  // Duplicate array 4x for a perfectly seamless, infinite queue moving loop
  const queueLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full max-w-7xl xl:max-w-[1400px] mx-auto mt-16 pt-6 flex flex-col items-center overflow-hidden">
      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide mb-8">
        Trusted by forward-thinking companies
      </p>

      {/* Infinite Queue Moving Container */}
      <div className="w-full relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 28,
            ease: 'linear',
          }}
          className="flex items-center gap-12 sm:gap-16 shrink-0 w-max"
        >
          {queueLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {logo.render()}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
