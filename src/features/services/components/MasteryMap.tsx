'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { masteryCapabilities, CapabilityItem } from '../data/masteryMapData';
import { CapabilityConnections } from './CapabilityConnections';
import { CapabilityPill } from './CapabilityPill';

export function MasteryMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);

  // Active item is hoveredId if present, else clickedId
  const activeId = hoveredId || clickedId;
  const activeCapability = activeId
    ? masteryCapabilities.find((item) => item.id === activeId) || null
    : null;

  const handlePillClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setClickedId((prev) => (prev === id ? null : id));
  };

  const handleContainerClick = () => {
    setClickedId(null);
  };

  return (
    <div
      onClick={handleContainerClick}
      className="relative w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* 1. BRAND <---> PRODUCT AXIS HEADER & MASTERY AREA BADGE */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 relative z-20">
        {/* Far Left: BRAND Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full shadow-[0_0_10px_#7C3AED]" />
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#0F172A] uppercase font-cera">
            BRAND
          </span>
        </motion.div>

        {/* Center: MASTERY AREA Label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-center"
        >
          <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.25em] text-[#7C3AED] uppercase bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E9D8F8] shadow-sm">
            MASTERY AREA
          </span>
        </motion.div>

        {/* Far Right: PRODUCT Label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#0F172A] uppercase font-cera">
            PRODUCT
          </span>
          <span className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full shadow-[0_0_10px_#7C3AED]" />
        </motion.div>
      </div>

      {/* 2. SPATIAL CAPABILITY MAP CANVAS */}
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] bg-white/50 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.02)] overflow-hidden">
        {/* SVG Axis, Dotted Concentric Circles & Relationship Connector Lines */}
        <CapabilityConnections
          activeCapability={activeCapability}
          allCapabilities={masteryCapabilities}
        />

        {/* CAPABILITY PILLS SPATIALLY POSITIONED AROUND CONCENTRIC CIRCLES */}
        {masteryCapabilities.map((capability) => {
          let status: 'active' | 'related' | 'muted' | 'default' = 'default';

          if (activeCapability) {
            if (capability.id === activeCapability.id) {
              status = 'active';
            } else if (activeCapability.relatedIds.includes(capability.id)) {
              status = 'related';
            } else {
              status = 'muted';
            }
          }

          return (
            <CapabilityPill
              key={capability.id}
              capability={capability}
              status={status}
              onHover={setHoveredId}
              onClick={handlePillClick}
            />
          );
        })}
      </div>

      {/* HELPER HINT AT FOOTER */}
      <div className="text-center mt-4">
        <p className="text-xs text-slate-400 font-medium">
          Hover or click any capability to reveal related systems & ecosystem connections.
        </p>
      </div>
    </div>
  );
}
