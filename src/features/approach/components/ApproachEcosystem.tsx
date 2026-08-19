'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Compass, Layers, Code2, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';
import { approachCapabilities } from '../data/approach';
import { ApproachMorphingShape } from './ApproachMorphingShape';
import { ApproachGeometry } from './ApproachGeometry';
import { ApproachPill } from './ApproachPill';

const mobileMethodology = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Understand before we build.',
    description:
      'We examine your business, users, market, technology, and growth opportunities to identify what actually needs to change.',
    capabilities: ['Business Discovery', 'Market Research', 'User Research', 'Technical Audit', 'Digital Strategy'],
    icon: Compass,
  },
  {
    number: '02',
    title: 'DESIGN',
    tagline: 'Turn insight into direction.',
    description:
      'We transform research into clear strategies, intuitive experiences, scalable design systems, and actionable product roadmaps.',
    capabilities: ['Brand Strategy', 'UX Strategy', 'UI/UX Design', 'Design Systems', 'Product Strategy'],
    icon: Layers,
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'Turn direction into working systems.',
    description:
      'We engineer reliable digital products, platforms, integrations, and automation designed around real business requirements.',
    capabilities: ['Web Development', 'App Development', 'AI Solutions', 'Automation', 'Cloud & Integrations'],
    icon: Code2,
  },
  {
    number: '04',
    title: 'SCALE',
    tagline: 'Make progress compound.',
    description:
      'We continuously measure, optimize, automate, and evolve the system so digital performance improves over time.',
    capabilities: ['Analytics', 'Performance Optimization', 'Growth Strategy', 'Conversion Optimization', 'Continuous Improvement'],
    icon: TrendingUp,
  },
];

export function ApproachEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>('01');

  const activeId = hoveredId || clickedId;

  // Track scroll progress BEFORE & WHILE approaching the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start 25%'],
  });

  const handlePillClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setClickedId((prev) => (prev === id ? null : id));
  };

  const handleCanvasClick = () => {
    setClickedId(null);
  };

  return (
    <div ref={containerRef} className="w-full relative select-none min-h-[640px] sm:min-h-[720px] lg:min-h-[780px]">
      {/* DESKTOP & TABLET ORGANIC SPATIAL MORPHING ECOSYSTEM CANVAS */}
      <div
        onClick={handleCanvasClick}
        className="hidden md:block relative w-full h-[640px] lg:h-[720px] bg-white/40 backdrop-blur-md rounded-3xl border border-slate-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden cursor-pointer"
      >
        {/* PHASE 1 - 4: ORGANIC SVG PATH MORPH (OVERLAPPING CIRCLES -> HOURGLASS -> DUMBBELL) */}
        <ApproachMorphingShape progress={scrollYProgress} />

        {/* CONCENTRIC DOTTED SVG CIRCLES (FADES IN AFTER MORPH STARTS) */}
        <ApproachGeometry progress={scrollYProgress} />

        {/* CAPABILITY PILLS (FADES & TRANSLATES IN AFTER DUMBBELL ESTABLISHED) */}
        {approachCapabilities.map((capability) => (
          <ApproachPill
            key={capability.id}
            capability={capability}
            progress={scrollYProgress}
            activeId={activeId}
            onHover={setHoveredId}
            onClick={handlePillClick}
          />
        ))}

        {/* HELPER HINT AT FOOTER */}
        <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none z-10">
          <p className="text-xs text-slate-400 font-medium">
            Hover any capability to explore dynamic relationships across brand, design, engineering, and digital growth.
          </p>
        </div>
      </div>

      {/* MOBILE ACCORDION STACKED METHODOLOGY */}
      <div className="block md:hidden space-y-4">
        {mobileMethodology.map((item) => {
          const IconComp = item.icon;
          const isExpanded = expandedMobileId === item.number;

          return (
            <div
              key={`mobile-${item.number}`}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'bg-white border-[#7C3AED]/40 shadow-lg ring-1 ring-[#7C3AED]/20'
                  : 'bg-white/80 border-slate-200/80 shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => setExpandedMobileId(isExpanded ? null : item.number)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-[#7C3AED] text-white shadow-sm'
                        : 'bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8F8]'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#7C3AED] uppercase block">
                      STAGE {item.number}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight font-cera">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#7C3AED]' : ''
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-left">
                  <p className="text-xs font-semibold text-[#7C3AED] mb-1.5">{item.tagline}</p>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded-md bg-[#FAF9FC] border border-[#E9D8F8] text-[11px] font-medium text-slate-700"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
