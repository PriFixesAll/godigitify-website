'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fragmentedBlocks = ['Brand', 'Website', 'Marketing', 'Data', 'Operations', 'Technology'];
const outcomeBlocks = ['Growth', 'Efficiency', 'Better Experience', 'Scale'];

export function ProblemStatement() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* NEXT SECTION PREVIEW HEADING & SUPPORTING TEXT */}
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
              THE RIGHT SYSTEM FOR THE RIGHT CHALLENGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Different challenges.
            <br />
            <span className="text-[#7C3AED]">Connected solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're building something new, modernizing existing systems, or looking for smarter ways to grow, we bring the right capabilities together around the problem.
          </motion.p>
        </div>

        {/* HORIZONTAL TRANSFORMATION DIAGRAM */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT: FRAGMENTED DISCONNECTED BLOCKS */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase block mb-4">
                FRAGMENTED
              </span>
              <div className="grid grid-cols-2 gap-3">
                {fragmentedBlocks.map((block, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-100/80 border border-slate-200/80 text-xs font-semibold text-slate-600 text-center shadow-2xs"
                  >
                    {block}
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER: CONNECTED SYSTEM NODE */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center my-4 lg:my-0 relative">
              <div className="w-20 h-20 rounded-full bg-[#F3E8FF] border border-[#E9D8F8] flex flex-col items-center justify-center shadow-sm z-10">
                <span className="w-3.5 h-3.5 rounded-full bg-[#7C3AED] shadow-[0_0_12px_#7C3AED] mb-1" />
                <span className="text-[10px] font-extrabold tracking-widest text-[#7C3AED]">
                  SYSTEM
                </span>
              </div>
              <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase mt-3">
                CONNECTED SYSTEM
              </span>
            </div>

            {/* RIGHT: BUSINESS OUTCOMES */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase block mb-4">
                BUSINESS OUTCOMES
              </span>
              <div className="grid grid-cols-2 gap-3">
                {outcomeBlocks.map((block, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-extrabold text-center shadow-md"
                  >
                    {block}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
