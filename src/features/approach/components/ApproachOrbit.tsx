'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApproachOrbitProps {
  activeIndex: number | null;
  totalCards?: number;
}

export function ApproachOrbit({ activeIndex, totalCards = 4 }: ApproachOrbitProps) {
  if (activeIndex === null) return null;

  // Calculate center position percentage for desktop 4-column grid
  // Col 0: 12.5%, Col 1: 37.5%, Col 2: 62.5%, Col 3: 87.5%
  const colWidthPercent = 100 / totalCards;
  const leftCenterPercent = (activeIndex + 0.5) * colWidthPercent;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="approach-orbit-system"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 26,
          mass: 0.8,
        }}
        style={{
          left: `${leftCenterPercent}%`,
          top: '50%',
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:flex items-center justify-center w-[480px] h-[480px]"
      >
        {/* RADIAL BACKGROUND AMBIENT GLOW */}
        <div className="absolute inset-0 rounded-full bg-radial from-[#7C3AED]/10 via-[#A855F7]/4 to-transparent blur-xl" />

        {/* 1. LARGE OUTER CIRCULAR RING */}
        <div className="absolute w-[460px] h-[460px] rounded-full border border-[#7C3AED]/35 shadow-[0_0_30px_rgba(124,58,237,0.08)]" />

        {/* 2. INNER DOTTED CIRCULAR RING */}
        <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[#7C3AED]/30" />

        {/* 3. ROTATING ORBITAL NODES (4 TINY DOTS ON CIRCUMFERENCE) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-[460px] h-[460px] rounded-full"
        >
          {/* Node Dot 1 (Top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />

          {/* Node Dot 2 (Right) */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]" />

          {/* Node Dot 3 (Bottom) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />

          {/* Node Dot 4 (Left) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
