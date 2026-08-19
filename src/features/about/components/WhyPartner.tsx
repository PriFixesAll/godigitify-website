'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, TrendingUp, Cpu, ShieldCheck, Maximize2, DollarSign } from 'lucide-react';
import { whyPartnerCards } from '../data/about';

const iconMap = {
  Network,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Maximize2,
  DollarSign,
};

export function WhyPartner() {
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
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
              THE GODIGITIFY DIFFERENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Why Partner With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We're not the right fit for everyone — and that's intentional. Here's what separates us from traditional agencies and service providers.
          </motion.p>
        </div>

        {/* 6 FEATURE CARDS GRID (3 x 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {whyPartnerCards.map((card, index) => {
            const IconComp = iconMap[card.iconName] || Network;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/50 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* SUBTLE BOTTOM EDGE PURPLE HIGHLIGHT ON HOVER */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* ICON IN CIRCULAR CONTAINER */}
                  <div className="w-12 h-12 rounded-full bg-[#FAF9FC] border border-slate-200/80 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] group-hover:scale-110 transition-all duration-300 shadow-sm mb-6">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>

                  {/* CARD TITLE */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight leading-snug mb-3 font-cera group-hover:text-[#7C3AED] transition-colors">
                    {card.title}
                  </h3>

                  {/* CARD DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
