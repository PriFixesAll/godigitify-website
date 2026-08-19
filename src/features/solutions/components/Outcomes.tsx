'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { outcomeItems } from '../data/solutions';

export function Outcomes() {
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
              BUILT FOR IMPACT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Technology is only valuable
            <br />
            <span className="text-[#7C3AED]">when it moves the business forward.</span>
          </motion.h2>
        </div>

        {/* 4 OUTCOME BLOCKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {outcomeItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D8F8] inline-block mb-6">
                  {item.number}
                </span>

                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-cera mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
