'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CapabilityItem } from '../data/masteryMapData';
import { ServiceImagePopup } from './ServiceImagePopup';
import { getServiceImageData } from '../data/serviceImageMap';

interface CapabilityPillProps {
  capability: CapabilityItem;
  status: 'active' | 'related' | 'muted' | 'default';
  onHover: (id: string | null) => void;
  onClick: (id: string, e: React.MouseEvent) => void;
}

export function CapabilityPill({
  capability,
  status,
  onHover,
  onClick,
}: CapabilityPillProps) {
  const isActive = status === 'active';
  const isRelated = status === 'related';
  const isMuted = status === 'muted';

  // Position relative to center (50% + x*0.9%, 50% + y*0.9%)
  const leftPos = `${50 + capability.x * 0.9}%`;
  const topPos = `${50 + capability.y * 0.9}%`;

  const imageData = getServiceImageData(capability.id, capability.name);

  // Position class safety for items near edge
  let posClass = 'bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2';
  if (capability.y < -25) {
    posClass = 'top-[calc(100%+14px)] bottom-auto left-1/2 -translate-x-1/2';
  } else if (capability.x < -30) {
    posClass = 'bottom-[calc(100%+14px)] left-0 translate-x-0';
  } else if (capability.x > 30) {
    posClass = 'bottom-[calc(100%+14px)] right-0 left-auto translate-x-0';
  }

  return (
    <motion.div
      style={{ left: leftPos, top: topPos }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none z-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isMuted ? 0.25 : 1,
        scale: isActive ? 1.06 : isRelated ? 1.02 : 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier, no bounce, no overshoot
      }}
      onMouseEnter={() => onHover(capability.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => onClick(capability.id, e)}
    >
      <ServiceImagePopup
        image={imageData.image}
        title={capability.name}
        rotation={imageData.rotation}
        isActive={isActive}
        positionClass={posClass}
      />

      <div
        className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-500 flex items-center gap-2 shadow-sm ${
          isActive
            ? 'bg-[#0F172A] text-white shadow-lg border border-[#7C3AED] ring-2 ring-[#7C3AED]/30 z-30'
            : isRelated
            ? 'bg-[#F3E8FF] text-[#7C3AED] border border-[#7C3AED]/50 shadow-md font-bold z-20'
            : capability.isPrimary
            ? 'bg-white/95 text-[#0F172A] border border-slate-200/90 hover:border-[#7C3AED]/50 hover:shadow-md'
            : 'bg-white/70 text-slate-500 border border-slate-200/60 hover:text-[#0F172A] hover:bg-white'
        }`}
      >
        {/* Accent Indicator Dot */}
        <span
          className={`w-2 h-2 rounded-full transition-all duration-500 ${
            isActive
              ? 'bg-[#7C3AED] scale-125 shadow-[0_0_8px_#7C3AED]'
              : isRelated
              ? 'bg-[#7C3AED]'
              : capability.isPrimary
              ? 'bg-slate-400'
              : 'bg-slate-300'
          }`}
        />

        <span>{capability.name}</span>
      </div>
    </motion.div>
  );
}

