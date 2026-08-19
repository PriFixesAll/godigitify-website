'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Code2, Sparkles, ArrowRight } from 'lucide-react';

interface PreviewCardItem {
  id: string;
  icon: React.ElementType;
  category: string;
  headline: string;
  description: string;
  href: string;
}

const previewCards: PreviewCardItem[] = [
  {
    id: 'discovery-audit',
    icon: Layers,
    category: 'DISCOVERY & AUDIT',
    headline: 'Uncover growth bottlenecks & technical friction.',
    description:
      'Assess existing technology stacks, data silos, and operational bottlenecks to create a clear digital transformation roadmap.',
    href: '#solution-grid',
  },
  {
    id: 'system-blueprinting',
    icon: Code2,
    category: 'SYSTEM BLUEPRINTING',
    headline: 'Design unified digital architecture.',
    description:
      'Architect scalable custom platforms, web applications, and intelligent workflow automation systems built for sustainable growth.',
    href: '#solution-grid',
  },
  {
    id: 'strategic-integration',
    icon: Sparkles,
    category: 'STRATEGIC INTEGRATION',
    headline: 'Connect brand, technology & data.',
    description:
      'Seamlessly integrate APIs, cloud platforms, and data pipelines into a compounding business intelligence engine.',
    href: '#solution-grid',
  },
];

export function SolutionPreviewCards() {
  return (
    <div className="relative z-30 -mb-16 sm:-mb-20 lg:-mb-24 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {previewCards.map((card, index) => {
          const IconComp = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E8E3F2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#7C3AED]/50 hover:shadow-[0_22px_45px_rgba(124,58,237,0.14)] transition-all duration-350 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* SUBTLE PURPLE HOVER GLOW BEHIND CARD */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/0 via-[#7C3AED]/0 to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

              <div>
                {/* ICON IN SUBTLE CIRCULAR CONTAINER */}
                <div className="w-12 h-12 rounded-full bg-[#FAF9FC] border border-[#E8E3F2] text-[#7C3AED] flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] group-hover:scale-105 transition-all duration-350 shadow-sm">
                  <IconComp className="w-5.5 h-5.5" />
                </div>

                {/* SMALL UPPERCASE CATEGORY */}
                <span className="text-[10px] font-semibold tracking-widest text-[#7C3AED] uppercase block mb-1.5">
                  {card.category}
                </span>

                {/* LARGE HEADLINE */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] tracking-tight leading-snug font-cera mb-3 group-hover:text-[#7C3AED] transition-colors duration-300">
                  {card.headline}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* EXPLORE CTA LINK WITH ARROW */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-350 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
