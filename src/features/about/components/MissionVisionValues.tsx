'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

const tabData = [
  {
    id: 'mission',
    label: 'Our Mission',
    icon: Compass,
    title: 'To replace fragmented digital tactics with integrated growth systems.',
    content:
      'We exist to help established businesses stop treating digital as a series of disconnected projects and start building the infrastructure that compounds growth over time.',
    highlightBox: {
      tag: 'THE GAP WE FILL',
      text: 'Most businesses have websites, run marketing, and use various tools — but nothing connects. Strategy sits in decks, execution fragments across vendors, and growth remains unpredictable. We close that gap by architecting systems where every component drives measurable outcomes.',
    },
  },
  {
    id: 'vision',
    label: 'Our Vision',
    icon: Eye,
    title: 'To define the future of AI-aligned enterprise growth infrastructure.',
    content:
      'We envision a digital landscape where every ambitious company operates on unified, intelligent infrastructure — eliminating friction, predicting growth, and scaling effortlessly without proportional complexity.',
    highlightBox: {
      tag: 'THE LONG-TERM IMPACT',
      text: 'Empowering institutions and enterprises worldwide to transition from manual, reactive operations to resilient, automated digital systems built for 10x scale.',
    },
  },
  {
    id: 'values',
    label: 'Our Values',
    icon: ShieldCheck,
    title: 'Engineered principles that guide every system we build.',
    content:
      'Our core values are not marketing slogans; they are architectural rules that dictate how we research, design, code, and partner with our clients.',
    bullets: [
      'Systems Over Tactics: We prioritize long-term infrastructure over short-term band-aids.',
      'Integration-First: Zero isolated data silos; everything connects seamlessly.',
      'Measurable Outcomes: We hold ourselves accountable to business revenue & efficiency.',
      'Security & Equity: Enterprise-grade security and inclusive access built-in by default.',
    ],
  },
];

export function MissionVisionValues() {
  const [activeTab, setActiveTab] = useState<string>('mission');
  const currentTab = tabData.find((t) => t.id === activeTab) || tabData[0];

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* TAB BUTTONS HEADER */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabData.map((tab) => {
            const IconComp = tab.icon;
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#0F172A] text-white shadow-lg ring-2 ring-[#7C3AED]/40'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:border-[#7C3AED]/50 hover:text-[#0F172A]'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#7C3AED]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE TAB CONTENT CARD */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-cera">
                {currentTab.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {currentTab.content}
              </p>

              {currentTab.highlightBox && (
                <div className="p-6 rounded-2xl bg-[#F3E8FF]/60 border border-[#E9D8F8]">
                  <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase block mb-2 font-cera">
                    {currentTab.highlightBox.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    {currentTab.highlightBox.text}
                  </p>
                </div>
              )}

              {currentTab.bullets && (
                <div className="space-y-3 pt-2">
                  {currentTab.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#0F172A]">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
