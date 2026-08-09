'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import { floatCardVariants, reverseFloatVariants } from '@/animations/hero';

export function FloatingCardsLeft() {
  return (
    <div className="hidden lg:flex flex-col gap-8 absolute left-8 xl:left-16 top-1/3 z-20 pointer-events-none max-w-[210px]">
      {/* Card 1: AI Automation */}
      <motion.div
        variants={floatCardVariants}
        animate="animate"
        className="glass-card-floating p-4 rounded-2xl flex items-center gap-3.5 pointer-events-auto cursor-default"
      >
        <div className="w-9 h-9 rounded-xl bg-[#4d286e]/10 border border-[#4d286e]/20 flex items-center justify-center text-[#4d286e] shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1A1A1A] leading-snug">
            AI Automation
          </span>
          <span className="text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
            Smart workflow engine
          </span>
        </div>
      </motion.div>

      {/* Card 2: Data Analytics */}
      <motion.div
        variants={reverseFloatVariants}
        animate="animate"
        className="glass-card-floating p-4 rounded-2xl flex items-center gap-3.5 pointer-events-auto cursor-default ml-4"
      >
        <div className="w-9 h-9 rounded-xl bg-[#6b389c]/10 border border-[#6b389c]/20 flex items-center justify-center text-[#6b389c] shrink-0">
          <BarChart3 className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1A1A1A] leading-snug">
            Data Analytics
          </span>
          <span className="text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
            Real-time intelligence
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function FloatingCardsRight() {
  return (
    <div className="hidden lg:flex flex-col gap-8 absolute right-8 xl:right-16 top-1/3 z-20 pointer-events-none max-w-[210px]">
      {/* Card 3: Cloud Infrastructure */}
      <motion.div
        variants={reverseFloatVariants}
        animate="animate"
        className="glass-card-floating p-4 rounded-2xl flex items-center gap-3.5 pointer-events-auto cursor-default"
      >
        <div className="w-9 h-9 rounded-xl bg-[#8848c7]/10 border border-[#8848c7]/20 flex items-center justify-center text-[#8848c7] shrink-0">
          <Cloud className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1A1A1A] leading-snug">
            Cloud Infrastructure
          </span>
          <span className="text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
            99.99% multi-region SLA
          </span>
        </div>
      </motion.div>

      {/* Card 4: Enterprise Security */}
      <motion.div
        variants={floatCardVariants}
        animate="animate"
        className="glass-card-floating p-4 rounded-2xl flex items-center gap-3.5 pointer-events-auto cursor-default mr-4"
      >
        <div className="w-9 h-9 rounded-xl bg-[#4d286e]/10 border border-[#4d286e]/20 flex items-center justify-center text-[#4d286e] shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1A1A1A] leading-snug">
            Enterprise Security
          </span>
          <span className="text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
            Zero-trust protection
          </span>
        </div>
      </motion.div>
    </div>
  );
}
