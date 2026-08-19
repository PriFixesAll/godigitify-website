'use client';

import React from 'react';
import { MasteryMap } from './MasteryMap';

export function OurServicesReferenceSection() {
  return (
    <section
      id="our-services-pillars"
      className="relative bg-gradient-to-tr from-[#FAF5FF] via-[#F4EAFF] to-[#FAF9FC] text-[#0F172A] select-none overflow-hidden py-16 sm:py-24"
    >
      {/* SOFT AMBIENT LIGHT PURPLE WASH BLURS */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E9D8F8]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#F3E8FF]/60 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-20">
        {/* SECTION INTRO HEADER */}
        <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
              CAPABILITY MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-cera mb-3">
            One Connected <span className="text-[#7C3AED]">Mastery</span> Ecosystem.
          </h2>
          <p className="text-slate-600 font-normal text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hover or click any capability to explore dynamic relationships across brand, design, engineering, and digital growth.
          </p>
        </div>

        {/* MASTERY AREA SPATIAL CAPABILITY MAP SYSTEM */}
        <MasteryMap />
      </div>
    </section>
  );
}
