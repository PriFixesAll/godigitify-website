'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { journeyStages } from '../data/solutions';

export function TransformationJourney() {
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
              TRANSFORMATION JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Wherever you are in the journey,
            <br />
            <span className="text-[#7C3AED]">we can help you move forward.</span>
          </motion.h2>
        </div>

        {/* 4-STAGE JOURNEY CANVAS WITH CONNECTING LINE */}
        <div className="relative">
          {/* SVG CONTINUOUS CONNECTING LINE */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 120 80 Q 360 40 600 80 T 1080 80"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>

          {/* 4 STAGES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 items-stretch relative z-10">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* NODE STAGE NUMBER */}
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8F8] font-extrabold text-xs flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
                    {stage.number}
                  </div>

                  <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase block mb-1">
                    {stage.title}
                  </span>

                  <h3 className="text-base font-bold text-[#0F172A] leading-snug mb-4 font-cera">
                    "{stage.problemText}"
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                    RECOMMENDED SOLUTION
                  </span>
                  <span className="text-xs font-extrabold text-[#7C3AED]">
                    {stage.solutionText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
