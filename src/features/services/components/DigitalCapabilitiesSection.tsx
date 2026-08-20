'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Code2, Cpu, ArrowRight } from 'lucide-react';

const capabilitiesList = [
  {
    number: '01',
    icon: Palette,
    title: 'Brand & Design',
    description: 'Build a clear, consistent brand across every digital touchpoint.',
    services: 'Branding · UI/UX · Graphic Design',
    href: '/services/dba/brand-systems',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Digital Growth',
    description: 'Turn digital presence into measurable, sustainable growth.',
    services: 'Digital Marketing · SEO · Social Media',
    href: '/services#marketing',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Product & Technology',
    description: 'Design and develop scalable digital products built for performance.',
    services: 'Web · Apps · E-commerce · SaaS',
    href: '/services#product',
  },
  {
    number: '04',
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Connect intelligent technology with smarter business operations.',
    services: 'AI Solutions · Automation · Digital Transformation',
    href: '/services#ai',
  },
];

export function DigitalCapabilitiesSection() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden">
      {/* SUBTLE AMBIENT PURPLE WASH */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl text-center mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-1.5 h-4 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              OUR CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Digital capabilities. One connected system.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            From brand and design to technology, AI and growth, we build connected digital solutions that help businesses move forward.
          </motion.p>
        </div>

        {/* 4 EQUAL CARDS GRID (1 COL MOBILE, 2 COL TABLET, 4 COL DESKTOP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {capabilitiesList.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl sm:rounded-[22px] p-7 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/40 hover:shadow-[0_16px_40px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
              >
                <div>
                  {/* TOP ROW: ICON & NUMBER */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200/60 text-slate-800 flex items-center justify-center group-hover:bg-[#F3E8FF] group-hover:border-[#7C3AED]/30 group-hover:text-[#7C3AED] transition-colors duration-300">
                      <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-xs font-semibold font-mono text-slate-400 group-hover:text-[#7C3AED] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-[#0F172A] tracking-tight leading-snug mb-2.5 font-cera group-hover:text-[#7C3AED] transition-colors">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* SERVICES LIST */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500 block">
                      {item.services}
                    </span>
                  </div>

                  {/* CTA LINK */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
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

export default DigitalCapabilitiesSection;
