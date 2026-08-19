'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { solutionsList } from '../data/solutions';
import { SolutionCard } from './SolutionCard';

export function SolutionGrid() {
  return (
    <section id="solution-grid" className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* SECTION INTRO HEADER */}
        <div className="max-w-3xl text-center mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              SOLUTIONS MATRIX
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            One partner.
            <br />
            <span className="text-[#7C3AED]">Multiple transformation paths.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every business starts from a different challenge. Our solutions combine the right capabilities into a connected system designed around your goals.
          </motion.p>
        </div>

        {/* 3 x 2 SOLUTION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {solutionsList.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
