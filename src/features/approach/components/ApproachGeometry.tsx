'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ApproachGeometryProps {
  progress: MotionValue<number>;
}

export function ApproachGeometry({ progress }: ApproachGeometryProps) {
  // Geometry scale & opacity driven by scroll progress (0.45 to 0.68)
  const geometryScale = useTransform(progress, [0.45, 0.68], [0.7, 1]);
  const geometryOpacity = useTransform(progress, [0.45, 0.65], [0, 0.3]);

  return (
    <motion.svg
      style={{ scale: geometryScale, opacity: geometryOpacity }}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Dotted Concentric Circle */}
      <circle
        cx="50%"
        cy="50%"
        r="240"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="1"
        strokeDasharray="4 6"
        className="hidden sm:block"
      />

      {/* Inner Dotted Concentric Circle */}
      <circle
        cx="50%"
        cy="50%"
        r="125"
        fill="none"
        stroke="#64748B"
        strokeWidth="1"
        strokeDasharray="3 5"
        className="hidden sm:block"
      />
    </motion.svg>
  );
}
