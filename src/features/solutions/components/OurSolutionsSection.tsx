'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Bot,
  Layers,
  ShoppingBag,
} from 'lucide-react';

interface SolutionItem {
  id: string;
  numStr: string;
  badgeNum: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  colorBg: string;
  textColor: string;
  accentColor: string;
  imageUrl: string;
  icon: React.ElementType;
}

const solutions: SolutionItem[] = [
  {
    id: 'sol-1',
    numStr: '01',
    badgeNum: '1',
    title: 'Digital Growth Systems',
    subtitle: 'End-to-End Infrastructure',
    description:
      'End-to-end growth infrastructure that connects strategy, technology, and data. We build the systems that replace manual execution with automated, measurable scaling — from lead generation to customer retention.',
    ctaText: 'Explore System',
    colorBg: 'bg-[#F3E8FF]/90', // Soft Light Lavender
    textColor: 'text-[#3B0764]',
    accentColor: '#7C3AED',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: TrendingUp,
  },
  {
    id: 'sol-2',
    numStr: '02',
    badgeNum: '2',
    title: 'AI & Automation Architecture',
    subtitle: 'Intelligent Workflows',
    description:
      'Design and deploy intelligent automation across your marketing, sales, and operations. Reduce manual touchpoints by up to 70% while improving accuracy, speed, and customer experience.',
    ctaText: 'Explore System',
    colorBg: 'bg-[#ECE5FA]/90', // Soft Light Lilac
    textColor: 'text-[#2E1065]',
    accentColor: '#9333EA',
    imageUrl: '/ai_automation_bg.png',
    icon: Bot,
  },
  {
    id: 'sol-3',
    numStr: '03',
    badgeNum: '3',
    title: 'Scalable Platform Engineering',
    subtitle: 'Built for 10x Scale',
    description:
      'Web platforms, applications, and infrastructure built for scale. We engineer systems that handle 10x growth without 10x complexity — secure, fast, and built to evolve with your business.',
    ctaText: 'Explore System',
    colorBg: 'bg-[#FAE8FF]/90', // Soft Light Fuchsia-Orchid Purple
    textColor: 'text-[#701A75]',
    accentColor: '#C026D3',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    icon: Layers,
  },
  {
    id: 'sol-4',
    numStr: '04',
    badgeNum: '4',
    title: 'E-Commerce Growth Infrastructure',
    subtitle: 'Profitable Scale',
    description:
      'Revenue-focused commerce systems that go beyond storefronts. Integrated inventory, automated fulfillment, conversion optimization, and analytics — designed to scale profitably.',
    ctaText: 'Explore System',
    colorBg: 'bg-[#EEF2FF]/90', // Soft Light Periwinkle Indigo-Purple
    textColor: 'text-[#1E1B4B]',
    accentColor: '#4F46E5',
    imageUrl: '/ecommerce_bg.png',
    icon: ShoppingBag,
  },
];

export function OurSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  const activeSolution = solutions[activeIndex];

  return (
    <section
      id="our-solutions"
      className="relative pt-18 sm:pt-22 pb-16 sm:pb-20 bg-[#FAF9FC] text-[#0F172A] overflow-hidden select-none"
    >
      {/* TOP ERASER GRADIENT FADE OVERLAY — SEAMLESSLY DISSOLVES GRID INTO PREVIOUS SECTION */}
      <div className="absolute top-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-b from-[#FAF9FC] via-[#FAF9FC]/90 to-transparent pointer-events-none z-10" />

      {/* ELEGANT BACKGROUND GRID LINES WITH RADIAL FADE MASK */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:90px_90px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_50%,#000_30%,transparent_95%)] z-0" />

      {/* AMBIENT GLOW PURPLE/CYAN BLUR ACCENTS */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-[#7C3AED]/14 via-[#A855F7]/12 to-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl xl:max-w-[1536px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10 flex flex-col items-center text-center">
        {/* HEADER SECTION — CENTER ALIGNED IN THE MIDDLE */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-9 max-w-3xl mx-auto">
          {/* Top Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#7C3AED] uppercase mb-1.5"
          >
            <span className="w-3.5 h-0.5 bg-[#7C3AED]/60" />
            <span>GROWTH SYSTEMS ARCHITECTURE</span>
            <span className="w-3.5 h-0.5 bg-[#7C3AED]/60" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera"
          >
            Our <span className="text-[#7C3AED]">Solutions</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
            className="text-sm sm:text-base text-[#64748B] font-normal max-w-xl leading-relaxed mt-1.5"
          >
            Integrated systems that replace fragmented tactics with predictable, automated growth infrastructure
          </motion.p>
        </div>

        {/* CONTROLS & STACKED CARDS WRAPPER */}
        <div className="w-full max-w-[1080px] xl:max-w-[1160px] 2xl:max-w-[1240px] mx-auto flex flex-col items-center">
          {/* Center-Aligned Navigation Arrow Controls */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <button
              onClick={handlePrev}
              aria-label="Previous Solution"
              className="w-9 h-9 rounded-full bg-[#110C24] text-white hover:bg-[#7C3AED] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Solution"
              className="w-9 h-9 rounded-full bg-[#110C24] text-white hover:bg-[#7C3AED] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* DESKTOP & TABLET: INITIALLY VISIBLE COLOR IMAGES, B&W + TEXT FOCUS ON HOVER */}
          <div className="hidden md:flex flex-row gap-3.5 sm:gap-4.5 h-[340px] lg:h-[370px] w-full items-stretch justify-center py-1">
            {solutions.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -5 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                  }}
                  className={`relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between p-5 lg:p-6 text-left border group backdrop-blur-sm ${
                    item.colorBg
                  } ${
                    isActive
                      ? 'flex-[3.4] shadow-[0_20px_42px_rgba(124,58,237,0.24)] border-[#7C3AED]/40 ring-2 ring-[#7C3AED]/25'
                      : 'flex-[0.95] opacity-95 hover:opacity-100 shadow-[0_5px_14px_rgba(0,0,0,0.035)] hover:shadow-[0_18px_36px_rgba(124,58,237,0.19)] border-white/60 hover:border-[#7C3AED]/40'
                  }`}
                >
                  {/* BACKGROUND IMAGE: INITIALLY FULL VIVID COLOR & HIGH VISIBILITY, B&W + SOFTENED ON HOVER */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-all duration-700 ease-out grayscale-0 opacity-80 group-hover:grayscale-100 group-hover:opacity-20 group-hover:scale-105"
                    />
                    {/* TINT OVERLAY: LIGHT INITIALLY FOR IMAGE VISIBILITY, SOLID ON HOVER FOR TEXT CONTRAST */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${item.colorBg} opacity-40 group-hover:opacity-95`}
                    />
                  </div>

                  {/* FOREGROUND CARD CONTENT */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    {/* TOP ROW: BADGE NUMBER */}
                    <div className="flex items-center justify-between w-full">
                      {/* Circled Badge Number */}
                      <div
                        className={`w-8 h-8 rounded-full border border-current/30 bg-white/70 backdrop-blur-md flex items-center justify-center text-xs font-bold font-mono ${item.textColor} shadow-sm`}
                      >
                        {item.badgeNum}
                      </div>

                      <span
                        className="text-[10.5px] uppercase font-bold tracking-wider opacity-90 truncate max-w-[140px] bg-white/60 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm"
                        style={{ color: item.accentColor }}
                      >
                        {item.subtitle}
                      </span>
                    </div>

                    {/* COLLAPSED CARD TITLE */}
                    {!isActive && (
                      <div className="flex-1 flex flex-col justify-end pt-3">
                        <div className="bg-white/70 backdrop-blur-md p-2 rounded-xl border border-white/60 shadow-sm transition-all duration-300 group-hover:bg-white/90">
                          <h3
                            className={`text-base font-bold ${item.textColor} tracking-tight leading-snug line-clamp-3`}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    )}

                    {/* EXPANDED ACTIVE CARD CONTENT */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.25, delay: 0.06 }}
                          className="flex-1 flex flex-col justify-between pt-3"
                        >
                          {/* Title & Description */}
                          <div>
                            <h3
                              className={`text-lg lg:text-xl font-semibold ${item.textColor} tracking-tight leading-tight mb-2 group-hover:text-black transition-colors duration-300`}
                            >
                              {item.title}
                            </h3>
                            <p
                              className={`text-xs ${item.textColor} opacity-90 group-hover:opacity-100 leading-relaxed max-w-md font-medium mb-3 line-clamp-4 transition-all duration-300`}
                            >
                              {item.description}
                            </p>
                          </div>

                          {/* Bottom CTA Button */}
                          <div className="flex items-center justify-between pt-2.5 border-t border-black/10">
                            <button
                              className={`px-4 py-1.5 rounded-full border border-current text-[11px] font-semibold tracking-wide flex items-center gap-1.5 ${item.textColor} bg-white/70 backdrop-blur-sm hover:bg-white/95 hover:shadow-sm transition-all duration-300`}
                            >
                              <span>{item.ctaText}</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>

                            <span className={`text-[11px] font-semibold ${item.textColor} opacity-80`}>
                              Stage 0{item.badgeNum}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE RESPONSIVE CAROUSEL SLIDER (md:hidden) */}
          <div className="flex md:hidden flex-col gap-3.5 w-full max-w-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-xl p-4 flex flex-col justify-between min-h-[300px] shadow-lg shadow-purple-900/10 border border-white/60 text-left overflow-hidden group ${activeSolution.colorBg}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={activeSolution.imageUrl}
                    alt={activeSolution.title}
                    className="w-full h-full object-cover object-center grayscale-0 active:grayscale-100 transition-all duration-500 opacity-70 group-hover:opacity-20"
                  />
                  <div className={`absolute inset-0 ${activeSolution.colorBg} opacity-50 group-hover:opacity-95`} />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Badge Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-8 h-8 rounded-full border border-current/30 bg-white/60 flex items-center justify-center text-xs font-bold font-mono ${activeSolution.textColor}`}
                    >
                      {activeSolution.badgeNum}
                    </div>
                    <span
                      className="text-[10px] uppercase font-bold tracking-wider bg-white/60 px-2 py-0.5 rounded-full"
                      style={{ color: activeSolution.accentColor }}
                    >
                      {activeSolution.subtitle}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="my-2.5">
                    <h3
                      className={`text-lg font-semibold ${activeSolution.textColor} tracking-tight leading-tight mb-1.5`}
                    >
                      {activeSolution.title}
                    </h3>
                    <p className={`text-xs ${activeSolution.textColor} opacity-95 leading-relaxed mb-3`}>
                      {activeSolution.description}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-black/10">
                    <button
                      className={`px-3.5 py-1.5 rounded-full border border-current text-[11px] font-semibold tracking-wide flex items-center gap-1.5 ${activeSolution.textColor} bg-white/60`}
                    >
                      <span>{activeSolution.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <div className="flex gap-1.5">
                      {solutions.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeIndex === idx ? 'w-4 bg-[#7C3AED]' : 'w-1.5 bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
