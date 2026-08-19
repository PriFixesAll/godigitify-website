'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Rocket,
  Building2,
  Laptop,
  Globe,
  Palette,
} from 'lucide-react';

const audienceCards = [
  {
    id: 'it-companies',
    title: 'IT Companies',
    description:
      'Enhance your service offerings and delivery with modern engineering, AI, and cloud solutions that help you build better for your clients.',
    icon: Code2,
  },
  {
    id: 'startups',
    title: 'Startups',
    description:
      'From idea to MVP and beyond—we help startups build scalable products, launch faster, and grow with the right technology.',
    icon: Rocket,
  },
  {
    id: 'enterprise-teams',
    title: 'Enterprise Teams',
    description:
      'Modernize legacy systems, integrate disconnected platforms, and build secure, future-ready digital foundations at scale.',
    icon: Building2,
  },
  {
    id: 'freelancers-consultants',
    title: 'Freelancers & Consultants',
    description:
      'Extend your capabilities with reliable technology and design support so you can deliver more value to your clients and focus on growth.',
    icon: Laptop,
  },
  {
    id: 'global-teams',
    title: 'Global Teams',
    description:
      'Work with a trusted digital partner across time zones. We collaborate seamlessly with distributed teams to deliver consistent results.',
    icon: Globe,
    isDefaultFeatured: true,
  },
  {
    id: 'creative-agencies',
    title: 'Creative Agencies',
    description:
      'Add technical depth to your creative work. We partner with agencies to bring ideas to life through design, development, and digital strategy.',
    icon: Palette,
  },
];

export function WhoThisServiceIsForSection() {
  const [activeCardId, setActiveCardId] = useState<string>('global-teams');

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9FC] text-[#0F172A] select-none overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* SECTION HEADLINE & SUBHEAD */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-6 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
              Who This Service Is For
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-3 font-cera">
            Built for High-Impact Teams
          </h2>

          <p className="text-slate-600 font-normal text-sm sm:text-base max-w-2xl leading-relaxed">
            <strong className="text-[#48236C] font-semibold">GoDigitify</strong> empowers businesses that want to scale through strong digital systems, intelligent technology, and compounding growth.
          </p>
        </div>

        {/* 6 AUDIENCE ITEMS GRID — TEXT DIRECTLY ON PAGE BY DEFAULT, LIGHT SHADOW LESS CURVED BOX ON HOVER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch mb-12">
          {audienceCards.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.05,
                }}
                className="group relative bg-transparent border border-transparent rounded-lg p-5 sm:p-6 transition-all duration-300 cursor-pointer text-left hover:bg-white/35 hover:backdrop-blur-xl hover:border hover:border-white/70 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)] hover:rounded-lg"
              >
                <div className="flex items-start gap-4">
                  {/* ICON BADGE — LESS CURVED CORNERS (rounded-lg) */}
                  <div className="w-11 h-11 rounded-lg bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8F8] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] transition-all duration-300 shadow-sm">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>

                  {/* CONTENT BODY */}
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold tracking-tight mb-1.5 font-cera text-[#0F172A] group-hover:text-[#7C3AED] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM FOOTER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-center pt-4"
        >
          <p className="text-sm sm:text-base font-normal text-slate-600">
            If you're building, scaling, or transforming—we're here to help you{' '}
            <strong className="font-bold text-[#7C3AED]">move forward.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
