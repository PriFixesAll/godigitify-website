'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const cardsData = [
  {
    id: 'brand',
    eyebrow: '01 — BRAND',
    title: 'BRAND',
    description: 'Build a digital identity that stays consistent as you scale.',
    services: [
      'Brand Systems Integration',
      'Digital Experience',
      'Digital Transformation',
      'Design Systems',
    ],
    ctaText: 'Explore Brand Solutions',
    ctaHref: '/services/dba/brand-systems',
    icon: Sparkles,
    cardBg: 'bg-[#F9F8FD]',
    borderColor: 'border-[#7C3AED]/20 hover:border-[#7C3AED]/50',
    eyebrowColor: 'text-[#7C3AED]',
    iconColor: 'text-[#7C3AED]',
    iconBg: 'bg-white border-purple-100',
  },
  {
    id: 'marketing',
    eyebrow: '02 — MARKETING',
    title: 'MARKETING',
    description: 'Turn acquisition, conversion and retention into measurable growth systems.',
    services: [
      'Digital Growth Systems',
      'AI & Automation',
      'E-Commerce Growth',
      'Analytics & Optimization',
    ],
    ctaText: 'Explore Marketing Solutions',
    ctaHref: '/services#marketing',
    icon: TrendingUp,
    cardBg: 'bg-[#F5FBF8]',
    borderColor: 'border-[#059669]/20 hover:border-[#059669]/50',
    eyebrowColor: 'text-[#059669]',
    iconColor: 'text-[#059669]',
    iconBg: 'bg-white border-emerald-100',
  },
  {
    id: 'product',
    eyebrow: '03 — PRODUCT',
    title: 'PRODUCT',
    description: 'Build technology infrastructure capable of supporting the next stage of growth.',
    services: [
      'Platform Engineering',
      'Enterprise Integration',
      'Data Infrastructure',
      'AI & Automation',
      'Custom Solutions',
    ],
    ctaText: 'Explore Product Solutions',
    ctaHref: '/services#product',
    icon: Cpu,
    cardBg: 'bg-[#F6F8FE]',
    borderColor: 'border-[#2563EB]/20 hover:border-[#2563EB]/50',
    eyebrowColor: 'text-[#2563EB]',
    iconColor: 'text-[#2563EB]',
    iconBg: 'bg-white border-blue-100',
  },
];

export function OurServicesReferenceSection() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none overflow-hidden pb-16">
      {/* 1. TOP HERO BANNER IMAGE ("WHAT WE OFFER / Our Services") */}
      <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-[#0D0819]">
        {/* Workspace Background Image */}
        <Image
          src="/digital_growth_hero.jpg"
          alt="Our Services Background"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />

        {/* Content Overlay */}
        <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 flex flex-col justify-center relative z-10 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-[#EF4444] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-white/90 uppercase">
              WHAT WE OFFER
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Our Services
          </h1>
        </div>
      </div>

      {/* 2. OVERLAPPING WHITE CONTAINER CARD */}
      <div className="-mt-16 sm:-mt-24 max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] sm:rounded-[44px] shadow-[0_25px_70px_rgba(0,0,0,0.06)] border border-slate-200/80 p-8 sm:p-14 lg:p-16"
        >
          {/* HEADER BADGE, HEADLINE & PARAGRAPH */}
          <div className="max-w-2xl text-left mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] font-semibold text-xs tracking-wide mb-6 shadow-sm">
              Digital Growth Systems Partner
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#7C3AED]">Systems That</span>{' '}
              <span className="text-[#0F172A]">Scale</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              We build digital infrastructure that connects your strategy, technology, and data into unified growth machines.
            </p>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#3B1566] text-white hover:bg-[#7C3AED] transition-colors duration-300 font-semibold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 group"
            >
              <span>Start Growth Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 EQUAL WIDTH STRATEGIC PILLAR CARDS WITH STAGGERED SCROLL REVEAL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {cardsData.map((card, index) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className={`${card.cardBg} rounded-[28px] p-7 sm:p-8 flex flex-col justify-between border ${card.borderColor} shadow-sm hover:shadow-xl transition-all duration-350 ease-out group cursor-pointer h-full`}
                >
                  {/* TOP HEADER: ICON & EYEBROW */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <IconComp className={`w-5 h-5 ${card.iconColor}`} />
                      </div>
                      <span className={`text-[11px] font-extrabold tracking-widest uppercase ${card.eyebrowColor}`}>
                        {card.eyebrow}
                      </span>
                    </div>

                    {/* LARGE BOLD CATEGORY HEADING */}
                    <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-3">
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* SERVICES LIST */}
                    <ul className="space-y-2.5 mb-8">
                      {card.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <span className={`${card.eyebrowColor} font-bold text-sm leading-none`}>•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BOTTOM ALIGNED CTA */}
                  <div className="pt-5 border-t border-slate-200/60 mt-auto">
                    <Link
                      href={card.ctaHref}
                      className={`text-xs font-bold ${card.eyebrowColor} inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300`}
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
