'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { InsightCategory } from '../types/insight';

interface InsightsHeroProps {
  selectedCategory: InsightCategory;
  onSelectCategory: (category: InsightCategory) => void;
}

const categories: InsightCategory[] = [
  'All',
  'AI & Automation',
  'Systems Architecture',
  'Brand & Design',
  'Growth Analytics',
  'Security & Infrastructure',
];

export function InsightsHero({ selectedCategory, onSelectCategory }: InsightsHeroProps) {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      {/* AMBIENT SOFT LIGHT PURPLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* CENTERED HEADER */}
        <div className="max-w-3xl text-center mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              THOUGHT LEADERSHIP & RESEARCH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Insights, Engineering & <span className="text-[#7C3AED]">Growth Architecture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into enterprise digital transformation, AI workflows, system engineering, and compounding brand growth.
          </motion.p>
        </div>

        {/* CATEGORY FILTER PILL BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#7C3AED] text-white shadow-[0_4px_16px_rgba(124,58,237,0.25)]'
                    : 'bg-white text-slate-700 hover:bg-purple-50/70 border border-slate-200/80 shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default InsightsHero;
