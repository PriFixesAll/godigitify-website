'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { problemOptions } from '../data/solutions';

export function SolutionBuilder() {
  const [selectedId, setSelectedId] = useState<string>('automate-ops');
  const activeOption = problemOptions.find((opt) => opt.id === selectedId) || problemOptions[0];

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* HEADING & SUPPORTING TEXT */}
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
              INTERACTIVE SOLUTION BUILDER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Your challenge.
            <br />
            <span className="text-[#7C3AED]">Our solution system.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Tell us where the friction is. We'll help identify the right combination of strategy, design, technology and growth capabilities.
          </motion.p>
        </div>

        {/* INTERACTIVE BUILDER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: "WHAT ARE YOU TRYING TO SOLVE?" OPTIONS */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase block mb-2 px-2">
              WHAT ARE YOU TRYING TO SOLVE?
            </span>

            {problemOptions.map((opt) => {
              const isSelected = opt.id === selectedId;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#7C3AED] shadow-lg ring-2 ring-[#7C3AED]/30 scale-[1.01]'
                      : 'bg-white text-[#0F172A] border-slate-200/80 hover:border-[#7C3AED]/50 hover:bg-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-extrabold">{opt.label}</span>
                  <div
                    className={`w-3 h-3 rounded-full transition-colors ${
                      isSelected ? 'bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]' : 'bg-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: DYNAMIC SOLUTION RECOMMENDATION PANEL */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOption.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] bg-[#F3E8FF] px-3.5 py-1 rounded-full border border-[#E9D8F8] inline-block mb-4">
                    RECOMMENDED SOLUTION SYSTEM
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-cera mb-2">
                    {activeOption.solutionTitle}
                  </h3>

                  <p className="text-sm sm:text-base font-bold text-[#7C3AED] mb-3">
                    {activeOption.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {activeOption.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-3">
                    RECOMMENDED CAPABILITIES
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeOption.recommendedCapabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#0F172A] bg-[#FAF9FC] p-3 rounded-xl border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?challenge=${activeOption.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED] text-white font-bold text-xs hover:bg-[#6D28D9] transition-all duration-300 shadow-md cursor-pointer group"
                  >
                    <span>Discuss Your Challenge</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
