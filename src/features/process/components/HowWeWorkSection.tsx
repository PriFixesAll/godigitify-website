'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  FileText,
  Cpu,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';

interface Stage {
  id: string;
  numStr: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: React.ElementType;
  xPercent: number; // Horizontal placement in %
  iconTopPx: number; // Y offset of icon container
  textTopPx: number; // Y offset of text block
  yPos: 'upperIcon' | 'lowerIcon'; // Icon position type
  numPos: 'above'; // All numbers positioned above the icon
}

const stages: Stage[] = [
  {
    id: '01',
    numStr: '1',
    titleLine1: 'Discovery &',
    titleLine2: 'Audit',
    subtitle: 'Ecosystem Assessment',
    bullets: [
      'Systems Analysis',
      'Growth Bottleneck Mapping',
      'Technology Stack Review',
      'Data Flow Assessment',
      'Integration Gaps',
      'Performance Baseline',
    ],
    description:
      "We begin with a comprehensive audit of your current digital ecosystem. We identify disconnected systems, manual bottlenecks, and opportunities for automation — giving you a clear picture of what's working and what's holding you back.",
    icon: Search,
    xPercent: 18,
    iconTopPx: 55,
    textTopPx: 180,
    yPos: 'upperIcon',
    numPos: 'above',
  },
  {
    id: '02',
    numStr: '2',
    titleLine1: 'System',
    titleLine2: 'Blueprinting',
    subtitle: 'Architecture & Workflows',
    bullets: [
      'Architecture Design',
      'Integration Planning',
      'Automation Workflows',
      'Data Layer Mapping',
      'Scalability Framework',
      'Security Protocols',
    ],
    description:
      'We design a unified system architecture that connects your brand, technology, and data. Every component is planned for integration, automation, and measurable outcomes — no isolated solutions.',
    icon: FileText,
    xPercent: 40,
    iconTopPx: 355,
    textTopPx: 190,
    yPos: 'lowerIcon',
    numPos: 'above',
  },
  {
    id: '03',
    numStr: '3',
    titleLine1: 'Implementation &',
    titleLine2: 'Integration',
    subtitle: 'Build & Deploy Infrastructure',
    bullets: [
      'Platform Deployment',
      'API Integration',
      'Automation Setup',
      'Data Pipeline Build',
      'Security Hardening',
      'Performance Optimization',
    ],
    description:
      'We build and deploy your growth infrastructure — connecting platforms, automating workflows, and integrating data sources. Every system is stress-tested for security, speed, and scale before launch.',
    icon: Cpu,
    xPercent: 62,
    iconTopPx: 55,
    textTopPx: 180,
    yPos: 'upperIcon',
    numPos: 'above',
  },
  {
    id: '04',
    numStr: '4',
    titleLine1: 'Measurement &',
    titleLine2: 'Optimization',
    subtitle: 'Continuous Growth & ROI',
    bullets: [
      'Performance Dashboards',
      'KPI Tracking',
      'A/B System Testing',
      'Continuous Improvement',
      'ROI Reporting',
      'Predictive Scaling',
    ],
    description:
      'We measure what matters. Custom dashboards track system performance, revenue impact, and efficiency gains. We continuously optimize based on real data — ensuring your infrastructure evolves with your growth.',
    icon: TrendingUp,
    xPercent: 84,
    iconTopPx: 355,
    textTopPx: 190,
    yPos: 'lowerIcon',
    numPos: 'above',
  },
];

const wavePathD =
  'M 0 310 C 90 310, 110 80, 180 80 C 270 80, 310 380, 400 380 C 490 380, 530 80, 620 80 C 710 80, 750 380, 840 380 C 920 380, 960 310, 1000 310';

export function HowWeWorkSection() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // SCROLL-ANIMATED SINE WAVE DRAW EFFECT
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative pt-8 pb-12 md:pt-12 md:pb-16 bg-[#FAF9FC] text-[#0F172A] overflow-hidden select-none"
    >
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C4B5FD]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl xl:max-w-[1536px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* MAIN SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#0F172A] tracking-tight leading-tight font-cera">
            How We Work at Godigitify.
          </h2>
        </motion.div>

        {/* DESKTOP 4-STAGE SINUSOIDAL CONTINUOUS WAVE */}
        <div className="hidden lg:block relative w-full h-[470px] my-4">
          {/* CONTINUOUS SVG WAVE PATH WITH SCROLL DRAW & ANIMATED TRAVELING PULSE */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 470"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="violetWaveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#A78BFA" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
              </linearGradient>

              <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing Soft Background Trace */}
            <path
              d={wavePathD}
              stroke="#A78BFA"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.2"
              filter="url(#softGlow)"
            />

            {/* Main Animated Scroll-Drawn Curve Path */}
            <motion.path
              d={wavePathD}
              stroke="url(#violetWaveGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* CONTINUOUSLY TRAVELING ANIMATED GLOWING PULSE DOT */}
            <g filter="url(#dotGlow)">
              <circle r="7" fill="#7C3AED">
                <animateMotion
                  path={wavePathD}
                  dur="7s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3.5" fill="#FFFFFF">
                <animateMotion
                  path={wavePathD}
                  dur="7s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>

          {/* 4 INTERACTIVE STAGE ITEMS ON THE CONTINUOUS WAVE */}
          {stages.map((stage, index) => (
            <StageItem
              key={stage.id}
              stage={stage}
              hoveredStage={hoveredStage}
              setHoveredStage={setHoveredStage}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* MOBILE RESPONSIVE TIMELINE */}
        <div className="block lg:hidden space-y-6 relative py-4">
          {/* Vertical Soft Lavender Line */}
          <div className="absolute top-6 bottom-6 left-8 w-0.5 bg-[#C4B5FD]/60 rounded-full z-0" />

          {stages.map((stage, index) => {
            const IconComponent = stage.icon;
            const isHovered = hoveredStage === stage.id;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative z-10 flex items-start gap-4 cursor-pointer"
                onClick={() => setHoveredStage(isHovered ? null : stage.id)}
              >
                {/* White Rounded Square Icon Container */}
                <div className="relative shrink-0 my-1">
                  <div className="w-13 h-13 bg-white rounded-xl border border-slate-100 shadow-[0_6px_18px_rgba(124,58,237,0.08)] flex items-center justify-center relative z-10">
                    <IconComponent className="w-5 h-5 text-[#4C1D95]" />
                  </div>
                </div>

                {/* Text Block */}
                <div className="flex-1 bg-white/95 border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-medium text-[#7C3AED]">
                      {stage.numStr}
                    </span>
                    <h3 className="text-base font-normal text-[#0F172A] flex flex-col items-start leading-tight">
                      <span>{stage.titleLine1}</span>
                      <span className="font-bold text-[#7C3AED] text-xl sm:text-[22px]">
                        {stage.titleLine2}
                      </span>
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] font-normal mb-2">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-[#4B5563] leading-relaxed pt-2 border-t border-slate-100">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

{/* STAGE ITEM COMPONENT */}
function StageItem({
  stage,
  hoveredStage,
  setHoveredStage,
  delay,
}: {
  stage: Stage;
  hoveredStage: string | null;
  setHoveredStage: (id: string | null) => void;
  delay: number;
}) {
  const IconComponent = stage.icon;
  const isHovered = hoveredStage === stage.id;
  const isUpperIcon = stage.yPos === 'upperIcon';

  return (
    <div
      className="absolute -translate-x-1/2 pointer-events-auto"
      style={{
        left: `${stage.xPercent}%`,
      }}
      onMouseEnter={() => setHoveredStage(stage.id)}
      onMouseLeave={() => setHoveredStage(null)}
    >
      {/* UPPER TEXT BLOCK (STAGES 2 & 4) */}
      {!isUpperIcon && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[260px] sm:w-[280px] text-center flex flex-col items-center pointer-events-auto z-30"
          style={{ top: `${stage.textTopPx}px` }}
        >
          {/* 2-LINE TYPOGRAPHY: DISCOVERY & ABOVE, AUDIT BELOW IN BOLD PURPLE */}
          <h3 className="text-base lg:text-[17px] tracking-tight leading-tight text-center mb-1 flex flex-col items-center">
            <span className="font-normal text-[#0F172A]">{stage.titleLine1}</span>
            <span className="font-bold text-[#7C3AED] text-xl lg:text-[22px]">{stage.titleLine2}</span>
          </h3>

          {/* IN-PLACE HOVER GLASS CARD */}
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="desc-card-upper"
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full relative z-40 pointer-events-none"
              >
                <FolderTabCard stage={stage} />
              </motion.div>
            ) : (
              <motion.div
                key="subtitle-card-upper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <p className="text-xs lg:text-[13px] text-[#64748B] font-normal mt-0.5 text-center">
                  {stage.subtitle}
                </p>
                <div className="flex items-center justify-center gap-1 text-[10.5px] text-[#94A3B8] font-normal mt-1 text-center">
                  <span>Hover icon for details & scope</span>
                  <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* SINGLE KEY POINT (WHITE ROUNDED SQUARE ICON CONTAINER) & NUMBER PLACED ABOVE ICON FOR ALL STAGES */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{ top: `${stage.iconTopPx}px` }}
      >
        {/* NUMBER DIRECTLY ABOVE ICON FOR ALL STAGES (1, 2, 3, 4) WITH ANIMATED HOVER SCALE */}
        <motion.div
          animate={isHovered ? { scale: 1.15, y: -2 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl lg:text-5xl font-normal text-[#7C3AED] pointer-events-none select-none"
        >
          {stage.numStr}
        </motion.div>

        {/* WHITE ROUNDED-SQUARE ICON CONTAINER (KEY POINT ANCHOR) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.25, once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay }}
          animate={
            isHovered
              ? { y: -4, scale: 1.08 }
              : { y: 0, scale: 1 }
          }
          className={`w-[52px] h-[52px] bg-white rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer relative z-20 ${
            isHovered
              ? 'border-[#7C3AED]/40 shadow-[0_12px_28px_rgba(124,58,237,0.22)]'
              : 'border-slate-100/90 shadow-[0_6px_18px_rgba(124,58,237,0.08)]'
          }`}
        >
          <IconComponent className="w-5.5 h-5.5 text-[#4C1D95] stroke-[1.8]" />
        </motion.div>
      </div>

      {/* LOWER TEXT BLOCK (STAGES 1 & 3) */}
      {isUpperIcon && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[260px] sm:w-[280px] text-center flex flex-col items-center pointer-events-auto z-30"
          style={{ top: `${stage.textTopPx}px` }}
        >
          {/* 2-LINE TYPOGRAPHY: DISCOVERY & ABOVE, AUDIT BELOW IN BOLD PURPLE */}
          <h3 className="text-base lg:text-[17px] tracking-tight leading-tight text-center mb-1 flex flex-col items-center">
            <span className="font-normal text-[#0F172A]">{stage.titleLine1}</span>
            <span className="font-bold text-[#7C3AED] text-xl lg:text-[22px]">{stage.titleLine2}</span>
          </h3>

          {/* IN-PLACE HOVER GLASS CARD */}
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="desc-card-lower"
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full relative z-40 pointer-events-none"
              >
                <FolderTabCard stage={stage} />
              </motion.div>
            ) : (
              <motion.div
                key="subtitle-card-lower"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <p className="text-xs lg:text-[13px] text-[#64748B] font-normal mt-0.5 text-center">
                  {stage.subtitle}
                </p>
                <div className="flex items-center justify-center gap-1 text-[10.5px] text-[#94A3B8] font-normal mt-1 text-center">
                  <span>Hover icon for details & scope</span>
                  <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

/* GLASSMORPHIC CARD COMPONENT CONTAINING TEXT & SCOPE BULLETS */
function FolderTabCard({
  stage,
}: {
  stage: {
    description: string;
    bullets: string[];
  };
}) {
  return (
    <div className="w-full text-white bg-gradient-to-br from-[#2D1A4A]/85 via-[#22133B]/80 to-[#180C2C]/85 backdrop-blur-2xl rounded-2xl p-4.5 sm:p-5 text-left flex flex-col justify-between transition-all duration-300 shadow-[0_20px_45px_rgba(20,8,35,0.45)] border border-[#7C3AED]/60 hover:border-[#C084FC] ring-1 ring-[#7C3AED]/30">
      {/* Main Descriptive Paragraph */}
      <p className="text-[11.5px] sm:text-xs text-white/95 font-normal leading-relaxed mb-2.5">
        {stage.description}
      </p>

      {/* Thin Horizontal Divider */}
      <div className="w-full h-px bg-white/20 mb-2.5" />

      {/* Bullet Points in 2 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
        {stage.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[10px] text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0" />
            <span className="truncate">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
}