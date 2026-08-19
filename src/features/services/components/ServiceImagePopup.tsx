'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceImagePopupProps {
  image: string;
  title: string;
  isActive: boolean;
  rotation?: number;
  /** Positioning tweak relative to hovered pill if near boundary */
  positionClass?: string;
}

/**
 * ServiceImagePopup — Tilted 3D floating image card pop-up on service hover.
 *
 * Characteristics:
 *   - Front card: tilted (-4deg to +4deg), rounded corners, sharp image, subtle border & drop shadow.
 *   - Back card: offset dark solid surface (#0F172A) rotated opposite direction for 3D depth.
 *   - Motion: translateY(25px) -> translateY(0), scale(0.88) -> scale(1), cubic-bezier(0.16, 1, 0.3, 1).
 *   - Pointer events set to 'none' to prevent hover flicker.
 */
export function ServiceImagePopup({
  image,
  title,
  isActive,
  rotation = -4,
  positionClass = '',
}: ServiceImagePopupProps) {
  // Counter rotation for back card to create organic offset layer depth
  const backRotation = rotation > 0 ? -rotation + 1 : -rotation - 1;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
            scale: 0.88,
            rotate: rotation - 3,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: rotation,
          }}
          exit={{
            opacity: 0,
            y: 16,
            scale: 0.92,
            rotate: rotation - 2,
          }}
          transition={{
            duration: 0.48,
            ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier specified in requirement
          }}
          className={`absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-50 pointer-events-none hidden md:block ${positionClass}`}
        >
          <div className="relative w-[230px] h-[150px] sm:w-[250px] sm:h-[160px] select-none">

            {/* SECONDARY DARK BACK CARD (Layered Depth) */}
            <div
              className="absolute inset-0 rounded-2xl bg-[#0B0914] border border-slate-800/80 shadow-lg"
              style={{
                transform: `translate(16px, -12px) rotate(${backRotation}deg)`,
              }}
            />

            {/* FRONT TILTED IMAGE CARD */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_20px_45px_rgba(0,0,0,0.35)] bg-slate-900">
              <Image
                src={image}
                alt={title}
                fill
                sizes="250px"
                className="w-full h-full object-cover select-none"
                priority
              />
              {/* Subtle bottom gradient & title label overlay */}
              <div className="absolute inset-x-0 bottom-0 px-3 py-2.5 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent flex items-end z-10">
                <span className="text-[11px] font-medium text-white tracking-wide font-cera drop-shadow-md truncate">
                  {title}
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceImagePopup;
