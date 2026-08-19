'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, TrendingUp } from 'lucide-react';

export function OurProcessInterlockingSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9FC] text-[#0F172A] select-none overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-[11px] font-bold tracking-widest text-[#7C3AED] uppercase mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-4 font-cera">
            Four Steps. One Seamless Engine.
          </h2>
          <p className="text-slate-600 font-normal text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our strategic engineering process connects strategy, design, technology, and analytics into a continuous compounding flywheel.
          </p>
        </div>

        {/* 2x2 INTERLOCKING PROCESS GRID CLONED FROM REFERENCE IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto relative">
          {/* CARD 01 (TOP-LEFT) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[28px] border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative p-7 sm:p-9 flex flex-col justify-between group overflow-visible"
          >
            {/* Top-Left Corner Colored Badge with Pointer Tail */}
            <div className="absolute top-0 left-0 w-32 sm:w-40 h-24 sm:h-28 bg-[#7C3AED] text-white rounded-tl-[28px] rounded-br-[24px] p-5 flex flex-col justify-between shadow-md z-10">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">01</span>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">STEP ONE</span>
              {/* Pointer Tail at bottom of badge */}
              <div className="absolute -bottom-2 left-8 w-3.5 h-3.5 bg-[#7C3AED] rotate-45 rounded-bl-sm" />
            </div>

            {/* Right Side Icon Container Area */}
            <div className="flex justify-end pl-32 sm:pl-40 pt-1 pb-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8F8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="pt-2 text-left">
              <div className="flex items-center gap-2 text-[#7C3AED] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px] font-extrabold">+</span>
                <span>STEP ONE</span>
              </div>
              <h3 className="text-xl sm:text-22px font-extrabold text-[#0F172A] tracking-tight mb-3 font-cera">
                Discovery & Strategy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We analyze your business architecture, market positioning, and tech stack to define a clear, data-driven digital growth roadmap.
              </p>
            </div>

            {/* Right Connector Tail pointing to Step 2 */}
            <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 bg-white border-t border-r border-slate-200 rotate-45 z-20" />
          </motion.div>

          {/* CARD 02 (TOP-RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-white rounded-[28px] border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative p-7 sm:p-9 flex flex-col justify-between group overflow-visible"
          >
            {/* Top-Right Corner Colored Badge with Pointer Tail */}
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-24 sm:h-28 bg-[#48236C] text-white rounded-tr-[28px] rounded-bl-[24px] p-5 flex flex-col justify-between shadow-md z-10">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">02</span>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">STEP TWO</span>
              {/* Pointer Tail at bottom of badge */}
              <div className="absolute -bottom-2 right-8 w-3.5 h-3.5 bg-[#48236C] rotate-45 rounded-bl-sm" />
            </div>

            {/* Left Side Icon Container Area */}
            <div className="flex justify-start pr-32 sm:pr-40 pt-1 pb-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-purple-50 text-[#48236C] border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="pt-2 text-left">
              <div className="flex items-center gap-2 text-[#48236C] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-5 h-5 rounded-full bg-[#48236C] text-white flex items-center justify-center text-[10px] font-extrabold">+</span>
                <span>STEP TWO</span>
              </div>
              <h3 className="text-xl sm:text-22px font-extrabold text-[#0F172A] tracking-tight mb-3 font-cera">
                Architecture & Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We design scalable design systems, cloud infrastructure, and frictionless UI/UX prototypes engineered for high throughput.
              </p>
            </div>

            {/* Bottom Connector Tail pointing to Step 3 */}
            <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-slate-200 rotate-45 z-20" />
          </motion.div>

          {/* CARD 04 (BOTTOM-LEFT) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-white rounded-[28px] border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative p-7 sm:p-9 flex flex-col justify-between group overflow-visible"
          >
            {/* Top Content Area */}
            <div className="pb-8 text-left">
              <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-5 h-5 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-[10px] font-extrabold">+</span>
                <span>STEP FOUR</span>
              </div>
              <h3 className="text-xl sm:text-22px font-extrabold text-[#0F172A] tracking-tight mb-3 font-cera">
                Launch & Compounding Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We deploy with zero downtime, optimize conversion rates, and run continuous data analytics to compound long-term ROI.
              </p>
            </div>

            {/* Bottom Row: Bottom-Left Colored Badge + Icon */}
            <div className="relative pt-6 flex items-center justify-between">
              {/* Bottom-Left Corner Colored Badge with Pointer Tail */}
              <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-24 sm:h-28 bg-[#3B82F6] text-white rounded-bl-[28px] rounded-tr-[24px] p-5 flex flex-col justify-between shadow-md z-10">
                {/* Pointer Tail at top of badge */}
                <div className="absolute -top-2 left-8 w-3.5 h-3.5 bg-[#3B82F6] rotate-45 rounded-tr-sm" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-90 mt-2">STEP FOUR</span>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">04</span>
              </div>

              {/* Right Side Icon Container Area */}
              <div className="w-full flex justify-end">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-blue-50 text-[#3B82F6] border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Top Connector Tail pointing to Step 1 */}
            <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-t border-l border-slate-200 rotate-45 z-20" />
          </motion.div>

          {/* CARD 03 (BOTTOM-RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="bg-white rounded-[28px] border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 relative p-7 sm:p-9 flex flex-col justify-between group overflow-visible"
          >
            {/* Top Content Area */}
            <div className="pb-8 text-left">
              <div className="flex items-center gap-2 text-[#8042C0] font-bold text-xs tracking-wider uppercase mb-2">
                <span className="w-5 h-5 rounded-full bg-[#8042C0] text-white flex items-center justify-center text-[10px] font-extrabold">+</span>
                <span>STEP THREE</span>
              </div>
              <h3 className="text-xl sm:text-22px font-extrabold text-[#0F172A] tracking-tight mb-3 font-cera">
                Development & AI Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We engineer high-performance software, automated AI workflows, and resilient microservices with clean code and robust APIs.
              </p>
            </div>

            {/* Bottom Row: Bottom-Right Colored Badge + Icon */}
            <div className="relative pt-6 flex items-center justify-between">
              {/* Left Side Icon Container Area */}
              <div className="w-full flex justify-start">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-purple-50 text-[#8042C0] border border-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom-Right Corner Colored Badge with Pointer Tail */}
              <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-24 sm:h-28 bg-[#8042C0] text-white rounded-br-[28px] rounded-tl-[24px] p-5 flex flex-col justify-between shadow-md z-10">
                {/* Pointer Tail at top of badge */}
                <div className="absolute -top-2 right-8 w-3.5 h-3.5 bg-[#8042C0] rotate-45 rounded-tr-sm" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-90 mt-2">STEP THREE</span>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">03</span>
              </div>
            </div>

            {/* Left Connector Tail pointing to Step 4 */}
            <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 w-5 h-5 bg-white border-b border-l border-slate-200 rotate-45 z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
