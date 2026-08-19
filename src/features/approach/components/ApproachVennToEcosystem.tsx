'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

// INNER CORE CAPABILITIES (DARK PILL BADGES WITH COLORFUL ICONS)
const innerCoreItems = [
  {
    id: 'design-systems',
    label: 'design systems',
    iconSymbol: '⬟',
    iconColor: '#FACC15', // Yellow
    x: 50,
    y: 28,
  },
  {
    id: 'branding',
    label: 'branding',
    iconSymbol: '●',
    iconColor: '#38BDF8', // Cyan
    x: 35,
    y: 42,
  },
  {
    id: 'app-design',
    label: 'app design',
    iconSymbol: '■',
    iconColor: '#C084FC', // Purple
    x: 65,
    y: 42,
  },
  {
    id: 'brand-strategy',
    label: 'brand strategy',
    iconSymbol: '♥',
    iconColor: '#F43F5E', // Pink
    x: 28,
    y: 56,
  },
  {
    id: 'ui-ux-design',
    label: 'ui/ux design',
    iconSymbol: '▶',
    iconColor: '#4ADE80', // Green
    x: 48,
    y: 56,
  },
  {
    id: 'web-design',
    label: 'web design',
    iconSymbol: '■',
    iconColor: '#4ADE80', // Green
    x: 36,
    y: 70,
  },
  {
    id: 'web-app-dev',
    label: 'web app development',
    iconSymbol: '■',
    iconColor: '#E879F9', // Magenta
    x: 62,
    y: 70,
  },
];

// OUTER PERIPHERAL CAPABILITIES (LIGHT GLASS PILL BADGES)
const outerPeripheralItems = [
  // Left Side
  { id: 'printing-services', label: 'printing services', x: 26, y: 32 },
  { id: 'packaging-design', label: 'packaging design', x: 20, y: 44 },
  { id: 'pr-campaigns', label: 'pr campaigns', x: 14, y: 56 },
  { id: 'video-productions', label: 'video productions', x: 20, y: 68 },

  // Right Side
  { id: 'data-science', label: 'data science', x: 74, y: 32 },
  { id: 'production-planning', label: 'production planning', x: 80, y: 44 },
  { id: 'gtm-strategy', label: 'gtm strategy', x: 74, y: 56 },
  { id: 'smm', label: 'smm', x: 85, y: 56 },
  { id: 'product-writing', label: 'product writing', x: 82, y: 68 },
];

export function ApproachVennToEcosystem() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-play smooth morphing animation 2s after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAnimation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] bg-gradient-to-br from-[#FAF9FC] via-[#F4EAFF]/60 to-[#FAF5FF] rounded-3xl border border-[#E9D8F8] shadow-[0_15px_50px_rgba(124,58,237,0.06)] overflow-hidden select-none flex flex-col items-center justify-center p-6">
      
      {/* TOP RIGHT REPLAY / TOGGLE ANIMATION BUTTON */}
      <div className="absolute top-5 right-6 z-40 flex items-center gap-3">
        <button
          onClick={toggleAnimation}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E9D8F8] text-xs font-extrabold text-[#7C3AED] shadow-sm hover:bg-[#7C3AED] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{isOpen ? 'Replay Venn Transition' : 'Open Ecosystem'}</span>
        </button>
      </div>

      {/* UNIFIED MORPHING CANVAS */}
      <div className="relative w-full max-w-[1050px] h-[520px] sm:h-[580px] flex items-center justify-center">
        
        {/* ============================================================ */}
        {/* 1. TOP MASTERY AREA BADGE MORPH */}
        {/* ============================================================ */}
        <motion.div
          animate={{
            top: isOpen ? '16px' : '50%',
            translateY: isOpen ? '0%' : '-50%',
            scale: isOpen ? 1 : 1.15,
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center"
        >
          <motion.span
            animate={{
              backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.92)' : 'rgba(31, 31, 31, 0)',
              color: isOpen ? '#7C3AED' : '#FFFFFF',
              borderColor: isOpen ? '#E9D8F8' : 'rgba(255, 255, 255, 0)',
              boxShadow: isOpen ? '0 2px 10px rgba(124, 58, 237, 0.08)' : '0 0 0 rgba(0,0,0,0)',
            }}
            transition={{ duration: 1.2 }}
            className="inline-block text-xs sm:text-sm font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border font-cera"
          >
            {isOpen ? 'MASTERY AREA' : 'Mastery\nArea'}
          </motion.span>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. BRAND (LEFT) CIRCLE MORPHING TO ENDPOINT BADGE */}
        {/* ============================================================ */}
        <motion.div
          animate={{
            left: isOpen ? '12%' : '42%',
            width: isOpen ? '130px' : '230px',
            height: isOpen ? '42px' : '230px',
            borderRadius: isOpen ? '9999px' : '9999px',
            backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.95)' : '#1F1F1F',
            borderColor: isOpen ? '#E9D8F8' : 'rgba(51, 65, 85, 0.6)',
            boxShadow: isOpen
              ? '0 4px 14px rgba(0, 0, 0, 0.04)'
              : '0 20px 40px rgba(0, 0, 0, 0.35)',
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 border flex items-center justify-center px-4 overflow-hidden z-20"
        >
          <motion.div
            animate={{
              flexDirection: isOpen ? 'row' : 'row',
              gap: isOpen ? '8px' : '0px',
            }}
            className="flex items-center"
          >
            <motion.span
              animate={{
                color: isOpen ? '#0F172A' : '#FFFFFF',
                fontSize: isOpen ? '12px' : '22px',
                fontWeight: isOpen ? 800 : 700,
              }}
              transition={{ duration: 1.2 }}
              className="tracking-wider uppercase font-cera whitespace-nowrap"
            >
              BRAND
            </motion.span>

            {isOpen && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED] shrink-0"
              />
            )}
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. PRODUCT (RIGHT) CIRCLE MORPHING TO ENDPOINT BADGE */}
        {/* ============================================================ */}
        <motion.div
          animate={{
            left: isOpen ? '88%' : '58%',
            width: isOpen ? '130px' : '230px',
            height: isOpen ? '42px' : '230px',
            borderRadius: isOpen ? '9999px' : '9999px',
            backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.95)' : '#1F1F1F',
            borderColor: isOpen ? '#E9D8F8' : 'rgba(51, 65, 85, 0.6)',
            boxShadow: isOpen
              ? '0 4px 14px rgba(0, 0, 0, 0.04)'
              : '0 20px 40px rgba(0, 0, 0, 0.35)',
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 border flex items-center justify-center px-4 overflow-hidden z-20"
        >
          <motion.div className="flex items-center gap-2">
            {isOpen && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED] shrink-0"
              />
            )}

            <motion.span
              animate={{
                color: isOpen ? '#0F172A' : '#FFFFFF',
                fontSize: isOpen ? '12px' : '22px',
                fontWeight: isOpen ? 800 : 700,
              }}
              transition={{ duration: 1.2 }}
              className="tracking-wider uppercase font-cera whitespace-nowrap"
            >
              PRODUCT
            </motion.span>
          </motion.div>
        </motion.div>

        {/* ============================================================ */}
        {/* 4. DUMBBELL HORIZONTAL DASHED LINE */}
        {/* ============================================================ */}
        <motion.div
          animate={{
            scaleX: isOpen ? 1 : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-1/2 left-[18%] right-[18%] -translate-y-1/2 h-[1.5px] border-b border-dashed border-[#7C3AED]/40 z-10 pointer-events-none"
        />

        {/* ============================================================ */}
        {/* 5. CONCENTRIC DASHED ORBITAL RINGS */}
        {/* ============================================================ */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Dashed Orbit Ring */}
          <motion.circle
            animate={{
              r: isOpen ? 220 : 0,
              opacity: isOpen ? 0.4 : 0,
            }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            cx="50%"
            cy="50%"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="hidden sm:block"
          />

          {/* Inner Dashed Orbit Ring */}
          <motion.circle
            animate={{
              r: isOpen ? 125 : 0,
              opacity: isOpen ? 0.5 : 0,
            }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
            cx="50%"
            cy="50%"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            className="hidden sm:block"
          />
        </svg>

        {/* ============================================================ */}
        {/* 6. INNER CORE CAPABILITY BADGES (DARK BADGES WITH COLORFUL ICONS) */}
        {/* ============================================================ */}
        {innerCoreItems.map((item, index) => (
          <motion.div
            key={item.id}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : 0,
              y: isOpen ? 0 : 30,
            }}
            transition={{
              duration: 0.5,
              delay: isOpen ? 0.5 + index * 0.05 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.08 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
          >
            <div className="bg-[#1A1827] text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold tracking-tight shadow-md flex items-center gap-2 border border-slate-700/80 hover:border-[#7C3AED] hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300">
              <span
                style={{ color: item.iconColor }}
                className="text-xs font-black leading-none shrink-0"
              >
                {item.iconSymbol}
              </span>
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          </motion.div>
        ))}

        {/* ============================================================ */}
        {/* 7. OUTER PERIPHERAL CAPABILITY BADGES (LIGHT GLASS BADGES) */}
        {/* ============================================================ */}
        {outerPeripheralItems.map((item, index) => (
          <motion.div
            key={item.id}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              opacity: isOpen ? 0.75 : 0,
              scale: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: isOpen ? 0.7 + index * 0.03 : 0,
            }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer hidden sm:block"
          >
            <div className="bg-white/80 text-slate-600 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium border border-slate-200/80 shadow-xs hover:border-[#7C3AED] hover:text-[#7C3AED] hover:bg-white transition-all duration-300">
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}
