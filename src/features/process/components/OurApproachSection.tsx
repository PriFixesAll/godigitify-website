'use client';

import React from 'react';
import { ApproachEcosystem } from '@/features/approach/components/ApproachEcosystem';

export function OurApproachSection() {
  return (
    <section
      id="our-approach"
      className="relative bg-[#FAF9FC] text-[#0F172A] select-none overflow-hidden py-20 sm:py-28"
    >
      {/* SOFT TOP ERASER OVERLAY FOR SEAMLESS TRANSITION */}
      <div className="absolute top-0 inset-x-0 h-24 sm:h-36 bg-gradient-to-b from-[#FAF9FC] via-[#FAF9FC]/90 to-transparent z-10 pointer-events-none" />

      {/* AMBIENT BACKGROUND RADIAL WASH */}
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:80px_80px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
        {/* SECTION HEADER — CENTER ALIGNED */}
        <div className="max-w-3xl text-center mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-cera mb-4">
            From clarity to scale.
            <br />
            <span className="text-[#7C3AED]">A system built to move forward.</span>
          </h2>

          <p className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine strategic thinking, design, engineering, and continuous optimization to turn complex business challenges into scalable digital systems.
          </p>
        </div>

        {/* SCROLL-TRANSFORMATION SPATIAL CAPABILITY ECOSYSTEM */}
        <ApproachEcosystem />
      </div>
    </section>
  );
}
