'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ApproachMorphingShapeProps {
  progress: MotionValue<number>;
}

export function ApproachMorphingShape({ progress }: ApproachMorphingShapeProps) {
  // Compute smooth morphing path string based on scroll progress (0.00 to 1.00)
  const pathD = useTransform(progress, (latest) => {
    // Cubic bezier easing: cubic-bezier(0.65, 0, 0.35, 1)
    const t = Math.max(0, Math.min(1, latest));
    const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const cx1 = 430 - easeT * 310; // 430 -> 120
    const cx2 = 570 + easeT * 310; // 570 -> 880
    const cy = 250;
    const r = 110 - easeT * 70; // 110 -> 40
    const waist = 100 - Math.pow(easeT, 0.75) * 97; // 100 -> 3 (organic waist pinch)

    const leftTopX = cx1;
    const leftTopY = cy - r;
    const leftBotX = cx1;
    const leftBotY = cy + r;

    const rightTopX = cx2;
    const rightTopY = cy - r;
    const rightBotX = cx2;
    const rightBotY = cy + r;

    const ctrlTopX = 500;
    const ctrlTopY = cy - waist;
    const ctrlBotX = 500;
    const ctrlBotY = cy + waist;

    return `M ${leftTopX} ${leftTopY} A ${r} ${r} 0 0 0 ${leftBotX} ${leftBotY} Q ${ctrlBotX} ${ctrlBotY} ${rightBotX} ${rightBotY} A ${r} ${r} 0 0 0 ${rightTopX} ${rightTopY} Q ${ctrlTopX} ${ctrlTopY} ${leftTopX} ${leftTopY} Z`;
  });

  // Position transforms for BRAND (Left) and PRODUCT (Right) labels
  const brandLeftPercent = useTransform(progress, (latest) => {
    const t = Math.max(0, Math.min(1, latest));
    const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const cx1 = 430 - easeT * 310;
    return `${(cx1 / 1000) * 100}%`;
  });

  const productLeftPercent = useTransform(progress, (latest) => {
    const t = Math.max(0, Math.min(1, latest));
    const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const cx2 = 570 + easeT * 310;
    return `${(cx2 / 1000) * 100}%`;
  });

  // Label Opacities & Badges
  const initialCenterOpacity = useTransform(progress, [0, 0.35], [1, 0]);
  const finalCenterOpacity = useTransform(progress, [0.3, 0.7], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 select-none">
      {/* SVG DEFORMING PATH CANVAS */}
      <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* ORGANIC MORPHING PATH SHAPE */}
        <motion.path
          d={pathD}
          fill="url(#morphGradient)"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="transition-all duration-75"
        />
      </svg>

      {/* BRAND (LEFT) ENDPOINT BADGE */}
      <motion.div
        style={{ left: brandLeftPercent, top: '50%' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/90 shadow-sm"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
        <span className="text-xs font-extrabold tracking-widest text-[#0F172A] uppercase font-cera">
          BRAND
        </span>
      </motion.div>

      {/* INITIAL CENTER CONCEPT LABEL (FADES OUT AS WAIST PINCHES) */}
      <motion.div
        style={{ left: '50%', top: '50%', opacity: initialCenterOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#E9D8F8] shadow-2xs">
          OUR APPROACH
        </span>
      </motion.div>

      {/* FINAL MASTERY AREA CENTER BADGE (FADES IN AS DUMBBELL ESTABLISHES) */}
      <motion.div
        style={{ left: '50%', top: '50%', opacity: finalCenterOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#7C3AED] uppercase bg-[#F3E8FF] px-3.5 py-1.5 rounded-full border border-[#E9D8F8] shadow-sm">
          MASTERY AREA
        </span>
      </motion.div>

      {/* PRODUCT (RIGHT) ENDPOINT BADGE */}
      <motion.div
        style={{ left: productLeftPercent, top: '50%' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/90 shadow-sm"
      >
        <span className="text-xs font-extrabold tracking-widest text-[#0F172A] uppercase font-cera">
          PRODUCT
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
      </motion.div>
    </div>
  );
}
