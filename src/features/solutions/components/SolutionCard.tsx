'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Monitor, Layers, Bot, RefreshCw, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { SolutionCardData } from '../types/solution';

const iconMap = {
  Monitor,
  Layers,
  Bot,
  RefreshCw,
  TrendingUp,
  BarChart3,
};

interface SolutionCardProps {
  solution: SolutionCardData;
  index: number;
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const IconComp = iconMap[solution.iconName] || Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/50 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* SUBTLE BOTTOM EDGE PURPLE GRADIENT HIGHLIGHT ON HOVER */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* TOP ROW: NUMBER & ICON CONTAINER */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-semibold tracking-widest text-[#7C3AED] bg-[#F3E8FF] px-3.5 py-1 rounded-full border border-[#E9D8F8]">
            {solution.number}
          </span>

          <div className="w-12 h-12 rounded-full bg-[#FAF9FC] border border-slate-200/80 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] group-hover:scale-110 transition-all duration-300 shadow-sm">
            <IconComp className="w-5.5 h-5.5" />
          </div>
        </div>

        {/* CATEGORY */}
        <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase block mb-1.5">
          {solution.category}
        </span>

        {/* HEADLINE */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] tracking-tight leading-snug mb-3 font-cera group-hover:text-[#7C3AED] transition-colors">
          {solution.headline}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* INCLUDES TAGS */}
        <div className="pt-4 border-t border-slate-100 mb-8">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2.5">
            INCLUDES
          </span>
          <div className="flex flex-wrap gap-1.5">
            {solution.includes.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-slate-100/80 text-[11px] font-semibold text-slate-700 border border-slate-200/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW CTA LINK WITH ARROW */}
      <div className="flex items-center justify-between pt-2">
        <Link
          href={solution.ctaHref}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors cursor-pointer"
        >
          <span>{solution.ctaLabel}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.div>
  );
}
