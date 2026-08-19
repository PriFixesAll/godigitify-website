'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { ApproachCapability } from '../data/approach';

interface ApproachPillProps {
  capability: ApproachCapability;
  progress: MotionValue<number>;
  activeId: string | null;
  onHover: (id: string | null) => void;
  onClick: (id: string, e: React.MouseEvent) => void;
}

export function ApproachPill({
  capability,
  progress,
  activeId,
  onHover,
  onClick,
}: ApproachPillProps) {
  // Transform x, y percentage coordinates based on scroll progress (0.65 to 0.88)
  const xPos = useTransform(
    progress,
    [0.65, 0.88],
    [`${50 + capability.initialPosition.x * 0.9}%`, `${50 + capability.finalPosition.x * 0.9}%`]
  );
  const yPos = useTransform(
    progress,
    [0.65, 0.88],
    [`${50 + capability.initialPosition.y * 0.9}%`, `${50 + capability.finalPosition.y * 0.9}%`]
  );
  const scrollOpacity = useTransform(progress, [0.65, 0.85], [0, 1]);
  const scrollScale = useTransform(progress, [0.65, 0.85], [0.85, 1]);

  // Hover state calculations when ecosystem is settled
  const isActive = activeId === capability.id;
  const isRelated = activeId
    ? capability.relatedIds.includes(activeId) || capability.id === activeId
    : false;
  const isMuted = activeId !== null && !isActive && !isRelated;

  return (
    <motion.div
      style={{
        left: xPos,
        top: yPos,
        opacity: isMuted ? 0.25 : scrollOpacity,
        scale: isActive ? 1.06 : scrollScale,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none z-20"
      onMouseEnter={() => onHover(capability.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => onClick(capability.id, e)}
    >
      <div
        className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 shadow-sm ${
          isActive
            ? 'bg-[#0F172A] text-white border border-[#7C3AED] ring-2 ring-[#7C3AED]/40 shadow-lg z-30 scale-105'
            : isRelated
            ? 'bg-[#F3E8FF] text-[#7C3AED] border border-[#7C3AED]/50 font-bold z-20'
            : capability.isPrimary
            ? 'bg-white/95 text-[#0F172A] border border-slate-200/90 hover:border-[#7C3AED]/50 hover:shadow-md'
            : 'bg-white/70 text-slate-500 border border-slate-200/60 hover:text-[#0F172A] hover:bg-white'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-[#7C3AED] scale-125 shadow-[0_0_8px_#7C3AED]'
              : isRelated
              ? 'bg-[#7C3AED]'
              : capability.isPrimary
              ? 'bg-slate-400'
              : 'bg-slate-300'
          }`}
        />
        <span>{capability.label}</span>
      </div>
    </motion.div>
  );
}
