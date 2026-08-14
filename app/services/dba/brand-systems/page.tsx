'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Zap,
  TrendingUp,
  Quote,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CallToActionSection } from '@/features/cta/components/CallToActionSection';

const brandStats = [
  { value: '100%', label: 'Brand Consistency' },
  { value: '40+', label: 'Integration Points' },
  { value: '2x', label: 'Recognition Lift' },
];

const brandCapabilities = [
  {
    title: 'Automated Brand Consistency',
    description: 'Automated brand consistency across all channels automatically.',
    detail: 'Enforce visual standards, design tokens, and editorial guidelines directly inside your digital tools and codebase.',
    icon: ShieldCheck,
  },
  {
    title: 'Design Systems Architecture',
    description: 'Design systems that accelerate development.',
    detail: 'Component-based design tokens and UI libraries engineered for rapid iteration without breaking brand rules.',
    icon: Layers,
  },
  {
    title: 'Multi-Channel Distribution',
    description: 'Multi-channel content distribution infrastructure.',
    detail: 'Seamless asset pipelines that push verified brand components to web, mobile, social, and enterprise applications.',
    icon: Zap,
  },
  {
    title: 'Measurable Brand Recognition',
    description: 'Measurable brand recognition improvements.',
    detail: 'Data-driven brand health tracking measuring consistency gains and market perception lift.',
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Brand Audit',
    description: 'Analyze current brand touchpoints, identify inconsistencies, and map integration opportunities.',
  },
  {
    step: '02',
    title: 'System Architecture',
    description: 'Design unified brand infrastructure with automated enforcement mechanisms.',
  },
  {
    step: '03',
    title: 'Component Development',
    description: 'Build reusable design systems, templates, and automated workflows.',
  },
  {
    step: '04',
    title: 'Rollout & Training',
    description: 'Deploy across all channels and train teams on maintaining brand integrity.',
  },
];

const testimonials = [
  {
    quote: 'Brand consistency went from 60% to 100% across 40 touchpoints. Recognition doubled.',
    author: 'Meera Krishnan',
    role: 'Brand Director at UnifyBrand',
  },
  {
    quote: 'Their design system cut our development time in half while improving quality.',
    author: 'Arjun Singh',
    role: 'Head of Product at DesignOps',
  },
];

export default function BrandSystemsPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#0F172A] font-sans selection:bg-[#7C3AED]/20 overflow-hidden select-none">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16">
        {/* AMBIENT BACKGROUND GLOW ACCENT */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/8 rounded-full blur-[130px]" />
        </div>

        {/* 1. HERO SECTION WITH 100% HORIZONTALLY ALIGNED CARDS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 mb-16">
          {/* UPPER SECTION: LEFT FEATURE CARD & RIGHT HEADLINE BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-6">
            {/* LEFT COLUMN: UPPER LAVENDER FEATURE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between"
            >
              <div className="bg-[#F3EBFB] rounded-[32px] p-6 sm:p-8 border border-[#E9D8F8] relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-sm h-full">
                {/* GENERATED HERO IMAGE */}
                <div className="relative w-44 sm:w-48 h-44 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-md border border-white/80">
                  <Image
                    src="/brand_systems_hero.jpg"
                    alt="Brand Systems Team Workspace"
                    fill
                    priority
                    quality={90}
                    className="object-cover object-center"
                  />
                </div>

                {/* TEXT CONTENT & TOP-RIGHT ARROW BUTTON */}
                <div className="flex flex-col justify-start w-full gap-2">
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED]">
                      FEATURED SYSTEM
                    </span>
                    <Link
                      href="/contact"
                      className="w-10 h-10 rounded-full bg-[#1E0836] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform shrink-0"
                      aria-label="Start Diagnostic"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#0F172A] tracking-tight mb-1">
                      Brand Systems Integration
                    </h2>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      A unified brand system for consistent digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: HEADLINE, SUBTEXT & PRIMARY CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 flex flex-col justify-between space-y-6"
            >
              <div>
                {/* EYEBROW BADGE FROM IMAGE 1 */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E9D8F8] text-[#47216b] text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Brand Systems Partner</span>
                </div>

                {/* MAIN HEADLINE */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
                  A unified brand system for consistent digital experiences.
                </h1>

                {/* SUPPORTING PARAGRAPH */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Turn brand guidelines into scalable, enforceable systems.
                </p>
              </div>

              {/* PRIMARY CTA BUTTON */}
              <div>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-[#1E0836] text-white hover:bg-[#7C3AED] transition-colors duration-300 font-semibold text-xs shadow-md inline-flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 group"
                >
                  <span>Start Growth Diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* LOWER ROW: 3 METRICS CARD & AUTOMATED BRAND INTEGRITY CARD ALIGNED 100% HORIZONTALLY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
          >
            {/* LEFT BOX: 3 METRICS CARD */}
            <div className="lg:col-span-6 bg-[#F3EBFB] rounded-[24px] p-6 border border-[#E9D8F8] shadow-sm grid grid-cols-3 gap-4 text-center divide-x divide-[#E9D8F8] items-center h-full">
              {brandStats.map((stat, idx) => (
                <div key={idx} className={idx > 0 ? 'pl-3' : ''}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT BOX: AUTOMATED BRAND INTEGRITY CARD (HORIZONTALLY ALIGNED) */}
            <div className="lg:col-span-6 bg-[#F5EDFD] rounded-[24px] p-6 border border-[#E9D8F8] flex items-center gap-4 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-[#E0CAFA] text-[#7C3AED] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1">
                  Automated Brand Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  At Godigitify, we create brand systems that enforce consistency automatically — not guidelines that live in a PDF.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. EXISTING BRAND SYSTEMS CAPABILITIES (SERVICES GRID) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="text-left mb-10">
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase block mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Why Choose Brand Systems Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {brandCapabilities.map((cap, index) => {
              const IconComp = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#F9F8FD] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border border-[#7C3AED]/20 shadow-sm hover:shadow-xl hover:border-[#7C3AED]/50 transition-all duration-350 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#7C3AED] mb-3">
                      {cap.description}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {cap.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. EXISTING PROCESS / METHODOLOGY */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
          <div className="text-left mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Our Integration Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-[#7C3AED]/40 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#7C3AED] font-extrabold text-sm flex items-center justify-center mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. CLIENT OUTCOMES & TESTIMONIALS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="text-left mb-10">
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase block mb-2">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Client Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#110C24] text-white rounded-[28px] p-8 border border-white/10 flex flex-col justify-between relative shadow-lg"
              >
                <Quote className="w-8 h-8 text-[#A78BFA] opacity-50 mb-4" />
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/15">
                  <div className="text-sm font-bold text-white">{item.author}</div>
                  <div className="text-xs text-[#A78BFA]">{item.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. FINAL CTA BANNER */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
