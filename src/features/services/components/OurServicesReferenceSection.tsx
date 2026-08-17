'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Box, Target } from 'lucide-react';

const capabilitiesData = [
  {
    id: '01',
    num: '01',
    title: 'BRAND\nSYSTEMS',
    description: 'Build a brand with clarity, consistency and meaning.',
    href: '/services/dba/brand-systems',
    icon: Sparkles,
    colorTheme: {
      numColor: 'text-[#10B981]',
      iconBg: 'bg-[#E6F4EA]',
      iconColor: 'text-[#10B981]',
      linkColor: 'text-[#10B981]',
      hoverBorder: 'hover:border-[#10B981]/40',
    },
  },
  {
    id: '02',
    num: '02',
    title: 'GROWTH\nSYSTEMS',
    description: 'Turn attention into measurable growth that compounds.',
    href: '/services#marketing',
    icon: TrendingUp,
    colorTheme: {
      numColor: 'text-[#3B82F6]',
      iconBg: 'bg-[#EBF2FE]',
      iconColor: 'text-[#3B82F6]',
      linkColor: 'text-[#3B82F6]',
      hoverBorder: 'hover:border-[#3B82F6]/40',
    },
  },
  {
    id: '03',
    num: '03',
    title: 'PRODUCT &\nTECHNOLOGY',
    description: 'Design and build digital products that are secure, scalable and built to perform.',
    href: '/services#product',
    icon: Box,
    colorTheme: {
      numColor: 'text-[#8B5CF6]',
      iconBg: 'bg-[#F3E8FF]',
      iconColor: 'text-[#8B5CF6]',
      linkColor: 'text-[#8B5CF6]',
      hoverBorder: 'hover:border-[#8B5CF6]/40',
    },
  },
  {
    id: '04',
    num: '04',
    title: 'DIGITAL BUSINESS\nADVISORY',
    description: 'Make better digital decisions with strategy, architecture and insights.',
    href: '/services/dba/brand-systems',
    icon: Target,
    colorTheme: {
      numColor: 'text-[#F59E0B]',
      iconBg: 'bg-[#FEF3C7]',
      iconColor: 'text-[#F59E0B]',
      linkColor: 'text-[#F59E0B]',
      hoverBorder: 'hover:border-[#F59E0B]/40',
    },
  },
];

export function OurServicesReferenceSection() {
  return (
    <section id="our-services-pillars" className="relative bg-[#FAF9FC] text-[#0F172A] select-none overflow-hidden py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        {/* SECTION HEADER FROM REFERENCE IMAGE 1 */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <div className="text-[11px] font-bold tracking-widest text-[#10B981] uppercase mb-2">
            OUR CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight">
            Four capabilities.
            <br />
            One <span className="text-[#10B981]">connected</span> ecosystem.
          </h2>
        </div>

        {/* 4 EQUAL-WIDTH CAPABILITY CARDS MATCHING REFERENCE IMAGE 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {capabilitiesData.map((cap, index) => {
            const IconComp = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className={`bg-white/95 rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${cap.colorTheme.hoverBorder}`}
              >
                <div>
                  {/* Top Row: Number + Round Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-base font-extrabold ${cap.colorTheme.numColor}`}>
                      {cap.num}
                    </span>
                    <div
                      className={`w-14 h-14 rounded-full ${cap.colorTheme.iconBg} ${cap.colorTheme.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Capability Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight leading-snug mb-3 whitespace-pre-line">
                    {cap.title}
                  </h3>

                  {/* Capability Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Link Button */}
                <div>
                  <Link
                    href={cap.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${cap.colorTheme.linkColor} group-hover:translate-x-1 transition-transform cursor-pointer`}
                  >
                    <span>Explore →</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
