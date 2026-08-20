'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ServiceImagePopup } from './ServiceImagePopup';
import { getServiceImageData } from '../data/serviceImageMap';

function getPositionClass(x: number, y: number) {
  let vertical = 'bottom-[calc(100%+14px)]';
  let horizontal = 'left-1/2 -translate-x-1/2';

  if (y < 25) {
    vertical = 'top-[calc(100%+14px)] bottom-auto';
  }
  if (x < 22) {
    horizontal = 'left-0 translate-x-0';
  } else if (x > 78) {
    horizontal = 'right-0 left-auto translate-x-0';
  }

  return `${vertical} ${horizontal}`;
}

// ─── CAPABILITY DATA ──────────────────────────────────────────────────────────
const innerCoreItems = [
  { id: 'design-systems',        label: 'Design Systems',        iconSymbol: '⬟', iconColor: '#FACC15', x: 46, y: 40 },
  { id: 'product-strategy',      label: 'Product Strategy',      iconSymbol: '●', iconColor: '#38BDF8', x: 55, y: 34 },
  { id: 'digital-transformation',label: 'Digital Transformation',iconSymbol: '■', iconColor: '#C084FC', x: 45, y: 68 },
  { id: 'technology-consulting',  label: 'Technology Consulting', iconSymbol: '●', iconColor: '#38BDF8', x: 66, y: 58 },
  { id: 'ui-ux-design',          label: 'UI/UX Design',          iconSymbol: '▶', iconColor: '#4ADE80', x: 34, y: 32 },
  { id: 'web-development',       label: 'Web Development',       iconSymbol: '■', iconColor: '#4ADE80', x: 66, y: 30 },
  { id: 'ai-solutions',          label: 'AI Solutions',          iconSymbol: '■', iconColor: '#E879F9', x: 62, y: 70 },
];

const outerPeripheralItems = [
  { id: 'web-design',            label: 'Web Design',            x: 44, y: 18 },
  { id: 'product-design',        label: 'Product Design',        x: 58, y: 18 },
  { id: 'web-applications',      label: 'Web Applications',      x: 80, y: 24 },
  { id: 'brand-strategy',        label: 'Brand Strategy',        x: 14, y: 28 },
  { id: 'brand-identity',        label: 'Brand Identity',        x: 18, y: 46 },
  { id: 'gtm-strategy',          label: 'GTM Strategy',          x: 31, y: 46 },
  { id: 'performance-marketing', label: 'Performance Marketing', x: 24, y: 62 },
  { id: 'digital-marketing',     label: 'Digital Marketing',     x: 28, y: 74 },
  { id: 'creative-direction',    label: 'Creative Direction',    x: 12, y: 74 },
  { id: 'seo',                   label: 'SEO',                   x: 21, y: 84 },
  { id: 'social-media',          label: 'Social Media',          x: 32, y: 84 },
  { id: 'mobile-applications',   label: 'Mobile Applications',   x: 86, y: 40 },
  { id: 'saas-development',      label: 'SaaS Development',      x: 81, y: 55 },
  { id: 'ai-integration',        label: 'AI Integration',        x: 72, y: 78 },
  { id: 'e-commerce',            label: 'E-Commerce',            x: 84, y: 70 },
  { id: 'business-automation',   label: 'Business Automation',   x: 52, y: 84 },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export function ServicesMasteryEcosystem() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredBadgeId, setHoveredBadgeId] = useState<string | null>(null);

  const hoverProgress = useMotionValue(0);
  const smoothProgress = useSpring(hoverProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.9,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverProgress.set(1);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    hoverProgress.set(0);
  };

  const CY = 200; // SVG vertical center in 0 0 1000 400

  // ── CIRCLE GEOMETRY (Venn resting → dumbbell end nodes) ─────────────────────
  // Left circle: center moves 410 -> 140, radius 140 -> 7
  const cx1 = useTransform(smoothProgress, [0, 1], [410, 140]);
  // Right circle: center moves 590 -> 860, radius 140 -> 7
  const cx2 = useTransform(smoothProgress, [0, 1], [590, 860]);
  const circleRadius = useTransform(smoothProgress, [0, 1], [140, 7]);

  // Closed-state dark lens & text opacities (fade out early in transition)
  const lensOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const closedTextOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);

  // Open-state connecting line (fades in as circles pull apart)
  const lineOpacity = useTransform(smoothProgress, [0.15, 0.50], [0, 1]);

  // Open-state brand/product label position tracking
  const brandLabelLeft = useTransform(smoothProgress, (t) => {
    const c1 = 410 - t * 270;
    const r = 140 - t * 133;
    return `${((c1 - r - 15) / 1000) * 100}%`;
  });
  const productLabelLeft = useTransform(smoothProgress, (t) => {
    const c2 = 590 + t * 270;
    const r = 140 - t * 133;
    return `${((c2 + r + 15) / 1000) * 100}%`;
  });
  const openTextOpacity = useTransform(smoothProgress, [0.25, 0.55], [0, 1]);

  // Capability Ecosystem (orbital rings + badges) fade & scale in
  const contentOpacity = useTransform(smoothProgress, [0.35, 0.85], [0, 1]);
  const contentScale = useTransform(smoothProgress, [0.35, 0.85], [0.8, 1]);
  const masteryOpacity = useTransform(smoothProgress, [0.45, 0.85], [0, 1]);

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden">
      {/* ambient dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:80px_80px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20">

        {/* SECTION HEADER */}
        <div className="max-w-3xl text-center mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              CAPABILITY MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4">
            One Connected <span className="text-[#7C3AED]">Mastery Ecosystem.</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hover over the circles to open the connected mastery architecture.
          </p>
        </div>

        {/* CANVAS CARD */}
        <div
          className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] bg-gradient-to-br from-[#FAF5FF] via-[#F4EAFF] to-[#FAF9FC] rounded-3xl border border-[#E9D8F8] shadow-[0_20px_60px_rgba(124,58,237,0.08)] overflow-hidden flex flex-col items-center justify-center p-6"
        >

          {/* STATUS BADGE */}
          <div className="absolute top-5 right-6 z-40 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5FF] backdrop-blur-md border border-[#E9D8F8] text-xs font-semibold text-[#7C3AED] shadow-sm">
              <span
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isHovered
                    ? 'bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]'
                    : 'bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]'
                }`}
              />
              <span>{isHovered ? 'Ecosystem Unlocked' : 'Hover Circles to Open'}</span>
            </span>
          </div>

          <div className="relative w-full max-w-[1150px] h-[520px] sm:h-[600px] flex items-center justify-center">

            {/* MASTERY AREA — top label (open state) */}
            <motion.div
              style={{ opacity: masteryOpacity }}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none"
            >
              <div className="text-sm sm:text-base font-semibold tracking-wider text-[#0F172A] font-cera leading-tight">
                Mastery<br />Area
              </div>
            </motion.div>

            {/* ORBITAL RINGS */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              <motion.circle
                style={{ opacity: contentOpacity }}
                cx="50%"
                cy="50%"
                r="220"
                fill="none"
                stroke="#0F172A"
                strokeWidth="1"
                strokeDasharray="3 5"
                className="hidden sm:block opacity-20"
              />
              <motion.circle
                style={{ opacity: contentOpacity }}
                cx="50%"
                cy="50%"
                r="130"
                fill="none"
                stroke="#0F172A"
                strokeWidth="1"
                strokeDasharray="2 4"
                className="hidden sm:block opacity-30"
              />
            </svg>

            {/* CORE CAPABILITY BADGES */}
            {innerCoreItems.map((item) => {
              const imageData = getServiceImageData(item.id, item.label);
              const isBadgeHovered = hoveredBadgeId === item.id;
              const posClass = getPositionClass(item.x, item.y);

              return (
                <motion.div
                  key={item.id}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    opacity: contentOpacity,
                    scale: contentScale,
                  }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setHoveredBadgeId(item.id)}
                  onMouseLeave={() => setHoveredBadgeId(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <ServiceImagePopup
                    image={imageData.image}
                    title={item.label}
                    rotation={imageData.rotation}
                    isActive={isBadgeHovered}
                    positionClass={posClass}
                  />

                  <div className="bg-[#1A1827] text-white border border-slate-700/80 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold tracking-tight shadow-md flex items-center gap-2 hover:border-[#7C3AED] hover:shadow-[0_0_18px_rgba(124,58,237,0.5)] transition-all duration-300">
                    <span
                      style={{ color: item.iconColor }}
                      className="text-xs font-black leading-none shrink-0"
                    >
                      {item.iconSymbol}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* PERIPHERAL CAPABILITY BADGES */}
            {outerPeripheralItems.map((item) => {
              const imageData = getServiceImageData(item.id, item.label);
              const isBadgeHovered = hoveredBadgeId === item.id;
              const posClass = getPositionClass(item.x, item.y);

              return (
                <motion.div
                  key={item.id}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    opacity: contentOpacity,
                    scale: contentScale,
                  }}
                  whileHover={{ opacity: 1, scale: 1.06 }}
                  onMouseEnter={() => setHoveredBadgeId(item.id)}
                  onMouseLeave={() => setHoveredBadgeId(null)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer hidden sm:block"
                >
                  <ServiceImagePopup
                    image={imageData.image}
                    title={item.label}
                    rotation={imageData.rotation}
                    isActive={isBadgeHovered}
                    positionClass={posClass}
                  />

                  <div className="bg-white/95 text-[#0F172A] backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200/90 shadow-sm hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-white transition-all duration-300">
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* ============================================================== */}
            {/* HOVER ZONE — Circles area triggers opening                      */}
            {/* =================================git status============================= */}
            <div
              className="relative w-full h-full flex items-center justify-center z-30"
            >

              {/* Centered trigger overlay sized precisely to the resting Venn circles */}
              {!isHovered && (
                <div
                  onMouseEnter={handleMouseEnter}
                  className="absolute w-[46%] h-[70%] z-50 cursor-pointer pointer-events-auto"
                  title="Hover circles to unlock ecosystem"
                />
              )}

              {/* ── SVG LAYER: Venn circles sliding & morphing smoothly ────── */}
              <svg
                viewBox="0 0 1000 400"
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                style={{ filter: 'drop-shadow(0 6px 28px rgba(0,0,0,0.22))' }}
              >
                <defs>
                  <radialGradient id="smCircleGrad" cx="38%" cy="28%" r="72%">
                    <stop offset="0%" stopColor="#2E2C3A" />
                    <stop offset="100%" stopColor="#17151E" />
                  </radialGradient>
                  <radialGradient id="smLensGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0A0814" />
                    <stop offset="100%" stopColor="#040309" />
                  </radialGradient>

                  {/* Mask for the Venn intersection lens */}
                  <mask id="smLensMask">
                    <motion.circle cx={cx1 as any} cy={CY} r={circleRadius as any} fill="white" />
                  </mask>
                </defs>

                {/* Connecting dashed dumbbell line */}
                <motion.line
                  x1={cx1 as any}
                  y1={CY}
                  x2={cx2 as any}
                  y2={CY}
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  style={{ opacity: lineOpacity }}
                />

                {/* Left Circle */}
                <motion.circle
                  cx={cx1 as any}
                  cy={CY}
                  r={circleRadius as any}
                  fill="url(#smCircleGrad)"
                />

                {/* Right Circle */}
                <motion.circle
                  cx={cx2 as any}
                  cy={CY}
                  r={circleRadius as any}
                  fill="url(#smCircleGrad)"
                />

                {/* Darker Intersection Lens (fades out as circles separate) */}
                <g mask="url(#smLensMask)">
                  <motion.circle
                    cx={cx2 as any}
                    cy={CY}
                    r={circleRadius as any}
                    fill="url(#smLensGrad)"
                    style={{ opacity: lensOpacity }}
                  />
                </g>
              </svg>

              {/* ── CLOSED STATE LABELS (inside Venn circles) ── */}
              <motion.div
                style={{ opacity: closedTextOpacity }}
                className="absolute inset-0 pointer-events-none z-40"
              >
                {/* Brand label centered in non-overlapping left crescent */}
                <div
                  style={{ left: '36%', top: '50%' }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-cera drop-shadow-md">
                    Brand
                  </span>
                </div>

                {/* Mastery Area label centered in the dark intersection lens */}
                <div
                  style={{ left: '50%', top: '50%' }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                >
                  <h4 className="text-sm sm:text-base font-medium text-white leading-tight font-cera drop-shadow-lg tracking-wider uppercase">
                    Mastery<br />Area
                  </h4>
                </div>

                {/* Product label centered in non-overlapping right crescent */}
                <div
                  style={{ left: '64%', top: '50%' }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-cera drop-shadow-md">
                    Product
                  </span>
                </div>
              </motion.div>

              {/* ── OPEN STATE LABELS (attached to sliding circle nodes) ── */}
              <motion.div
                style={{ opacity: openTextOpacity }}
                className="absolute inset-0 pointer-events-none z-40"
              >
                {/* Brand — left node label */}
                <motion.div
                  style={{ left: brandLabelLeft, top: '50%' }}
                  className="absolute -translate-x-full -translate-y-1/2"
                >
                  <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F172A] font-cera whitespace-nowrap">
                    Brand
                  </span>
                </motion.div>

                {/* Product — right node label */}
                <motion.div
                  style={{ left: productLabelLeft, top: '50%' }}
                  className="absolute -translate-y-1/2"
                >
                  <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F172A] font-cera whitespace-nowrap">
                    Product
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMasteryEcosystem;
