'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp, Users, Zap, Award } from 'lucide-react';

export function ServicesHeroSection() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-[#FAF9FC] text-[#0F172A] overflow-hidden select-none">
      {/* 1. ELEGANT BACKGROUND GRID LINES & LIGHT OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:90px_90px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* AMBIENT GLOW PURPLE/CYAN BLUR ACCENTS */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#7C3AED]/12 via-[#A855F7]/10 to-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        {/* 2. TOP SPARKLE ICON BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-12 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center mb-6 mx-auto"
        >
          <Sparkles className="w-5 h-5 text-[#0F172A]" />
        </motion.div>

        {/* 3. MAIN HEADLINE WITH ELEGANT SERIF ITALIC & GLOWING GROWTH BUBBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-6 max-w-4xl lg:max-w-5xl mx-auto"
        >
          {/* LINE 1 */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2 mb-2">
            <span className="font-serif italic text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#0F172A] tracking-tight">
              Complete
            </span>
            <span className="font-cera font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#8042C0] via-[#7139AA] to-[#49226D] tracking-tight inline-block pb-1 leading-normal">
              Digital
            </span>
          </div>

          {/* LINE 2 */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
            {/* RECTANGLE WITH LOW CORNER RADIUS & LOW OPACITY GRADIENT */}
            <div className="relative inline-flex items-center my-0.5">
              <div className="relative px-4 sm:px-6 py-1 rounded-xl bg-white/60 backdrop-blur-md shadow-sm border border-[#7139AA]/30 bg-gradient-to-r from-[#8042C0]/15 via-[#7139AA]/10 to-[#49226D]/15 flex items-center justify-center">
                <span className="relative z-10 text-[#0F172A] font-cera font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                  Growth
                </span>
              </div>
            </div>

            <span className="font-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#48236C] tracking-tight">
              Ecosystem
            </span>
          </div>
        </motion.div>

        {/* 4. SUBHEADING PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-slate-600 font-normal text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-9 leading-relaxed"
        >
          We combine strategy, design, technology, AI and growth to build connected systems that drive{' '}
          <strong className="font-semibold text-[#0F172A]">real business impact</strong>.
        </motion.p>

        {/* 5. PRIMARY CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mb-14"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED]/40 via-[#06B6D4]/40 to-[#A855F7]/40 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <Link
              href="#our-services-pillars"
              className="relative px-8 py-3.5 rounded-full bg-[#0B0F19] text-white font-semibold text-sm shadow-xl inline-flex items-center gap-2.5 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* 6. FLOATING 3D PLATFORM BADGES (SHOPIFY, GOOGLE ADS, META) */}
        {/* Left Floating Badge: Shopify */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex absolute top-48 left-4 sm:left-10 lg:left-16 xl:left-24 w-16 h-16 rounded-2xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 z-20"
        >
          <div className="w-9 h-9 rounded-xl bg-[#95BF47]/15 flex items-center justify-center text-[#95BF47] font-bold text-sm">
            🛍️
          </div>
        </motion.div>

        {/* Right Floating Badge: Google Ads */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex absolute top-48 right-4 sm:right-10 lg:right-16 xl:right-24 w-16 h-16 rounded-2xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300 z-20"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
            🎯
          </div>
        </motion.div>

        {/* Bottom Right Floating Badge: Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex absolute bottom-24 right-8 sm:right-16 lg:right-24 xl:right-36 w-16 h-16 rounded-2xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300 z-20"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-[#0668E1] font-extrabold text-base">
            ∞
          </div>
        </motion.div>

        {/* 7. MACOS BROWSER FRAME WITH REAL-TIME DASHBOARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="max-w-6xl lg:max-w-7xl xl:max-w-[1360px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.12)] border border-slate-200/80 bg-white text-left relative z-10"
        >
          {/* macOS Window Top Bar */}
          <div className="bg-[#F8F9FA] px-4 py-3 border-b border-slate-200/80 flex items-center justify-between">
            {/* Window Control Buttons */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Address Bar */}
            <div className="bg-slate-200/60 rounded-lg text-[11px] font-mono text-slate-600 px-8 py-1 flex items-center gap-1.5 shadow-inner">
              <span className="text-slate-400">🔒</span>
              <span>godigitify.com</span>
            </div>

            {/* Window Right Action Icons */}
            <div className="flex items-center gap-3 text-slate-400 text-xs font-bold">
              <span>↑</span>
              <span>+</span>
            </div>
          </div>

          {/* Dashboard Application Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white min-h-[280px]">
            {/* Sidebar */}
            <div className="hidden md:block md:col-span-3 border-r border-slate-100 p-4 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-6 px-2">
                <div className="w-6 h-6 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center text-xs font-bold">
                  G
                </div>
                <span className="font-extrabold text-xs tracking-wider text-[#0F172A]">GODIGITIFY</span>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-1.5 rounded-xl bg-white shadow-sm border border-slate-200/60 text-xs font-bold text-[#0F172A] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  <span>Dashboard</span>
                </div>
                <div className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-[#0F172A] cursor-pointer">
                  Strategies
                </div>
                <div className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-[#0F172A] cursor-pointer">
                  Campaigns
                </div>
              </div>
            </div>

            {/* Main Metrics Dashboard Area */}
            <div className="md:col-span-9 p-4 sm:p-6 bg-slate-50/30">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Stat Card 1 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Total Revenue
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                      ₹ 2.45 Cr
                    </div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-1">
                      ↑ 28.6% vs last month
                    </div>
                  </div>
                  {/* Sparkline SVG Graph */}
                  <div className="mt-3">
                    <svg className="w-full h-8 stroke-emerald-500 fill-none" viewBox="0 0 100 30">
                      <path d="M0 25 Q25 15, 50 18 T100 5" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      New Customers
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                      1,286
                    </div>
                    <div className="text-[10px] font-bold text-purple-600 mt-1">
                      ↑ 24.2% vs last month
                    </div>
                  </div>
                  {/* Sparkline SVG Graph */}
                  <div className="mt-3">
                    <svg className="w-full h-8 stroke-[#7C3AED] fill-none" viewBox="0 0 100 30">
                      <path d="M0 22 Q25 28, 50 12 T100 8" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Growth Rate
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                      33.7%
                    </div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-1">
                      ↑ 18.7% vs last month
                    </div>
                  </div>
                  {/* Sparkline SVG Graph */}
                  <div className="mt-3">
                    <svg className="w-full h-8 stroke-cyan-500 fill-none" viewBox="0 0 100 30">
                      <path d="M0 20 Q30 8, 60 18 T100 6" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Active Campaigns
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                      12
                    </div>
                    <div className="text-[10px] font-bold text-purple-600 mt-1">
                      ↑ 20% vs last month
                    </div>
                  </div>
                  {/* Sparkline SVG Graph */}
                  <div className="mt-3">
                    <svg className="w-full h-8 stroke-purple-500 fill-none" viewBox="0 0 100 30">
                      <path d="M0 24 Q30 20, 60 10 T100 4" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
