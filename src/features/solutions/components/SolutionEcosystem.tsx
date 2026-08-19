'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ecosystemNodes = [
  { id: 'strategy', label: 'STRATEGY', angle: -90 },
  { id: 'design', label: 'DESIGN', angle: -30 },
  { id: 'technology', label: 'TECHNOLOGY', angle: 30 },
  { id: 'ai', label: 'AI', angle: 90 },
  { id: 'data', label: 'DATA', angle: 150 },
  { id: 'growth', label: 'GROWTH', angle: 210 },
];

const outcomes = [
  'Better Experiences',
  'Faster Operations',
  'Smarter Decisions',
  'Scalable Technology',
  'Sustainable Growth',
];

export function SolutionEcosystem() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* HEADING */}
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
              CONNECTED ARCHITECTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            The strongest solutions
            <br />
            <span className="text-[#7C3AED]">don't work in isolation.</span>
          </motion.h2>
        </div>

        {/* LARGE VISUAL ECOSYSTEM CANVAS */}
        <div className="relative w-full h-[480px] sm:h-[540px] bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.02)] flex items-center justify-center overflow-hidden">
          
          {/* SVG CURVED CONNECTING PATHS */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="180" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 6" className="hidden sm:block" />
            <circle cx="50%" cy="50%" r="90" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 5" className="hidden sm:block" />
          </svg>

          {/* CENTRAL NODE: GODIGITIFY */}
          <div className="w-24 h-24 rounded-full bg-[#0F172A] text-white flex flex-col items-center justify-center shadow-xl z-20 border-2 border-[#7C3AED]">
            <span className="w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED] mb-1" />
            <span className="text-[10px] font-extrabold tracking-[0.2em]">GODIGITIFY</span>
          </div>

          {/* SURROUNDING NODES */}
          {ecosystemNodes.map((node, idx) => {
            const rad = (node.angle * Math.PI) / 180;
            const dist = 180;
            const leftPos = `calc(50% + ${Math.cos(rad) * dist}px)`;
            const topPos = `calc(50% + ${Math.sin(rad) * dist}px)`;

            return (
              <motion.div
                key={node.id}
                style={{ left: leftPos, top: topPos }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="px-4 py-2 rounded-full bg-white text-[#0F172A] border border-slate-200/90 text-xs font-extrabold tracking-wider shadow-md hover:border-[#7C3AED] transition-all duration-300">
                  {node.label}
                </div>
              </motion.div>
            );
          })}

          {/* OUTCOME LABELS FLOATING NEAR CANVAS BORDER */}
          <div className="absolute bottom-6 inset-x-6 flex items-center justify-center gap-2 sm:gap-4 flex-wrap z-10">
            {outcomes.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8F8] text-xs font-extrabold shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
