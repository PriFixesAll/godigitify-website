'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ApproachAxisProps {
  progress: MotionValue<number>;
}

export function ApproachAxis({ progress }: ApproachAxisProps) {
  // Axis line scale & opacity driven by scroll progress (0.20 to 0.48)
  const axisOpacity = useTransform(progress, [0.2, 0.45], [0, 1]);
  const lineScaleX = useTransform(progress, [0.22, 0.48], [0, 1]);
  const brandX = useTransform(progress, [0.18, 0.45], ['50%', '12%']);
  const productX = useTransform(progress, [0.18, 0.45], ['50%', '88%']);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 select-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal Connecting Axis Line */}
        <motion.line
          x1="12%"
          y1="50%"
          x2="88%"
          y2="50%"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ opacity: axisOpacity, scaleX: lineScaleX }}
        />
      </svg>

      {/* BRAND Endpoint Dot & Label (Left) */}
      <motion.div
        style={{ left: brandX, top: '50%', opacity: axisOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
        <span className="text-xs font-extrabold tracking-widest text-[#0F172A] uppercase font-cera">
          BRAND
        </span>
      </motion.div>

      {/* MASTERY AREA Center Badge */}
      <motion.div
        style={{ left: '50%', top: '50%', opacity: axisOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#7C3AED] uppercase bg-[#F3E8FF] px-3.5 py-1.5 rounded-full border border-[#E9D8F8] shadow-sm">
          MASTERY AREA
        </span>
      </motion.div>

      {/* PRODUCT Endpoint Dot & Label (Right) */}
      <motion.div
        style={{ left: productX, top: '50%', opacity: axisOpacity }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm"
      >
        <span className="text-xs font-extrabold tracking-widest text-[#0F172A] uppercase font-cera">
          PRODUCT
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
      </motion.div>
    </div>
  );
}
