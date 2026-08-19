'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ecosystemNodes = [
  { id: 'strategy', label: 'STRATEGY', x: 50, y: 16 },
  { id: 'design', label: 'DESIGN', x: 18, y: 38 },
  { id: 'technology', label: 'TECHNOLOGY', x: 82, y: 38 },
  { id: 'ai', label: 'AI', x: 22, y: 72 },
  { id: 'data', label: 'DATA', x: 50, y: 84 },
  { id: 'growth', label: 'GROWTH', x: 78, y: 72 },
];

const connectionPairs = [
  ['strategy', 'design'],
  ['strategy', 'technology'],
  ['design', 'ai'],
  ['technology', 'growth'],
  ['ai', 'data'],
  ['data', 'growth'],
];

export function SolutionHeroVisual() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl border border-[#7C3AED]/40 shadow-[0_25px_60px_rgba(15,8,38,0.6)] flex items-center justify-center overflow-hidden group bg-gradient-to-br from-[#0F0728] via-[#160B36] to-[#0A041C]">
      
      {/* INNER TRAVELLING PURPLE WAVE MOTION CANVAS (EXTENDED MARGIN BLEED) */}
      <div className="absolute -inset-28 sm:-inset-44 pointer-events-none z-0 overflow-hidden">
        
        {/* WAVE STREAM 1: PRIMARY TRAVELLING PURPLE WAVE RIBBON */}
        <motion.div
          animate={{
            x: ['-25%', '22%', '-25%'],
            y: ['-18%', '20%', '-18%'],
            scale: [1.35, 1.65, 1.35],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full blur-xl sm:blur-2xl"
        >
          <Image
            src="/purple_mesh_bg.png"
            alt="Dark Purple Mesh Gradient Travelling Wave"
            fill
            priority
            className="object-cover object-center opacity-85 contrast-125 brightness-90"
          />
        </motion.div>

        {/* WAVE STREAM 2: COUNTER-TRAVELLING PURPLE SILK WAVE RIBBON */}
        <motion.div
          animate={{
            x: ['22%', '-25%', '22%'],
            y: ['16%', '-18%', '16%'],
            scale: [1.4, 1.15, 1.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full blur-xl sm:blur-2xl"
        >
          <Image
            src="/purple_silk_bg.png"
            alt="Dark Purple Silk Travelling Wave Overlay"
            fill
            priority
            className="object-cover object-center opacity-70 mix-blend-soft-light"
          />
        </motion.div>

        {/* WAVE STREAM 3: VOLUMETRIC ATMOSPHERIC DARK PURPLE GLOW WAVE */}
        <motion.div
          animate={{
            x: ['-14%', '16%', '-14%'],
            y: ['14%', '-16%', '14%'],
            scale: [1.25, 1.55, 1.25],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-[#7C3AED]/40 via-[#A855F7]/25 to-transparent mix-blend-multiply"
        />
      </div>

      {/* DARK OVERLAY FOR OPTIMAL READABILITY */}
      <div className="absolute inset-0 bg-[#0F0728]/35 backdrop-blur-[1.5px] pointer-events-none z-0" />

      {/* SVG CONNECTING ENERGY PATHS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
        {/* Central Hub Lines */}
        {ecosystemNodes.map((node) => {
          const isHighlighted = hoveredNode === node.id;
          return (
            <motion.line
              key={`center-${node.id}`}
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke={isHighlighted ? '#A855F7' : 'rgba(168, 85, 247, 0.45)'}
              strokeWidth={isHighlighted ? '2.5' : '1.5'}
              strokeDasharray={isHighlighted ? 'none' : '4 4'}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Outer Connection Pairs */}
        {connectionPairs.map(([fromId, toId]) => {
          const fromNode = ecosystemNodes.find((n) => n.id === fromId);
          const toNode = ecosystemNodes.find((n) => n.id === toId);
          if (!fromNode || !toNode) return null;

          const isHighlighted = hoveredNode === fromId || hoveredNode === toId;

          return (
            <motion.line
              key={`pair-${fromId}-${toId}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={isHighlighted ? '#A855F7' : 'rgba(168, 85, 247, 0.3)'}
              strokeWidth={isHighlighted ? '2' : '1'}
              strokeDasharray="3 3"
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* CENTRAL HUB NODE: GODIGITIFY — LOCKED 100% UNROTATED & UPRIGHT */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: 0 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-24 h-24 rounded-full bg-[#7C3AED] text-white border-2 border-white flex flex-col items-center justify-center shadow-[0_0_35px_rgba(124,58,237,0.8)] z-20 cursor-pointer select-none"
        style={{ transform: 'none' }}
      >
        <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#ffffff] mb-1 animate-pulse" />
        <span className="text-[10px] font-extrabold tracking-[0.2em] font-cera text-white whitespace-nowrap">
          GODIGITIFY
        </span>
      </motion.div>

      {/* ECOSYSTEM NODES */}
      {ecosystemNodes.map((node, index) => {
        const isHovered = hoveredNode === node.id;
        const isDimmed = hoveredNode !== null && !isHovered;

        return (
          <motion.div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isDimmed ? 0.35 : 1,
              scale: isHovered ? 1.12 : 1,
              y: [0, index % 2 === 0 ? -4 : 4, 0],
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              y: { duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
          >
            <div
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg ${
                isHovered
                  ? 'bg-white text-[#0F0728] ring-2 ring-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.7)] scale-105'
                  : 'bg-[#12072B]/90 text-white backdrop-blur-md border border-[#7C3AED]/50 hover:bg-[#7C3AED] hover:border-white'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isHovered ? 'bg-[#A855F7] shadow-[0_0_8px_#A855F7]' : 'bg-[#A855F7]'
                }`}
              />
              <span>{node.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
