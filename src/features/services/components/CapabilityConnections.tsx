'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CapabilityItem } from '../data/masteryMapData';

interface CapabilityConnectionsProps {
  activeCapability: CapabilityItem | null;
  allCapabilities: CapabilityItem[];
}

export function CapabilityConnections({
  activeCapability,
  allCapabilities,
}: CapabilityConnectionsProps) {
  // Find related items for active capability
  const relatedItems = activeCapability
    ? allCapabilities.filter((item) => activeCapability.relatedIds.includes(item.id))
    : [];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. HORIZONTAL BRAND <---> PRODUCT AXIS DOTTED LINE */}
      <motion.line
        x1="10%"
        y1="50%"
        x2="90%"
        y2="50%"
        stroke="#E2E8F0"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* 2. CONCENTRIC DOTTED CIRCLES CENTERED ON THE PAGE */}
      {/* Outer Dotted Circle */}
      <motion.circle
        cx="50%"
        cy="50%"
        r="280"
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="hidden sm:block"
      />

      {/* Inner Dotted Circle */}
      <motion.circle
        cx="50%"
        cy="50%"
        r="140"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeDasharray="3 5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="hidden sm:block"
      />

      {/* 3. DYNAMIC RELATIONSHIP CONNECTION LINES WHEN A CAPABILITY IS HOVERED / CLICKED */}
      {activeCapability &&
        relatedItems.map((target) => (
          <motion.line
            key={`line-${activeCapability.id}-${target.id}`}
            x1={`${50 + activeCapability.x * 0.9}%`}
            y1={`${50 + activeCapability.y * 0.9}%`}
            x2={`${50 + target.x * 0.9}%`}
            y2={`${50 + target.y * 0.9}%`}
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.45, pathLength: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
    </svg>
  );
}
