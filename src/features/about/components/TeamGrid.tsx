'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/about';
import { UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export function TeamGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalCount = teamMembers.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCount);
  }, [totalCount]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCount) % totalCount);
  }, [totalCount]);

  // Infinite Auto-loop with faster 2.2s visual hold and responsive step transitions
  useEffect(() => {
    if (isHovered) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 2200);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, handleNext]);

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      {/* SOFT AMBIENT LIGHT PURPLE BACKGROUND WASH */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#7C3AED]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* HEADING & INTRO */}
        <div className="max-w-3xl text-center mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              MEET OUR TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Executors of System Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our diverse team of experts brings together years of experience, creativity, and passion to deliver exceptional results for our clients.
          </motion.p>
        </div>

        {/* 3D TEAM-CARD CAROUSEL CANVAS WITH FULL-BLEED PORTRAIT CARDS MATCHING REFERENCE */}
        <div
          className="relative w-full h-[480px] sm:h-[520px] lg:h-[560px] flex items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {teamMembers.map((member, index) => {
            // Calculate circular offset relative to activeIndex in range [-2, -1, 0, 1, 2]
            let offset = (index - activeIndex + totalCount) % totalCount;
            if (offset > totalCount / 2) {
              offset -= totalCount;
            }

            const isCenter = offset === 0;
            const isAdjacentLeft = offset === -1;
            const isAdjacentRight = offset === 1;
            const isOuterLeft = offset === -2 || offset < -2;
            const isOuterRight = offset === 2 || offset > 2;

            // Strict 3D Depth & Stacking Parameters — ONLY Center Card Sits in Front (zIndex=50)
            let xOffset = 0;
            let scale = 1;
            let rotateY = 0;
            let zIndex = 10;
            let opacity = 1;

            if (isCenter) {
              xOffset = 0;
              scale = 1.08;
              rotateY = 0;
              zIndex = 50; // SINGLE FRONTMOST CARD
              opacity = 1;
            } else if (isAdjacentLeft) {
              xOffset = -330;
              scale = 0.88;
              rotateY = 18;
              zIndex = 10; // BEHIND CENTER CARD
              opacity = 0.75;
            } else if (isAdjacentRight) {
              xOffset = 330;
              scale = 0.88;
              rotateY = -18;
              zIndex = 10; // BEHIND CENTER CARD
              opacity = 0.75;
            } else if (isOuterLeft) {
              xOffset = -540;
              scale = 0.72;
              rotateY = 28;
              zIndex = 5;
              opacity = 0.35;
            } else if (isOuterRight) {
              xOffset = 540;
              scale = 0.72;
              rotateY = -28;
              zIndex = 5;
              opacity = 0.35;
            }

            return (
              <motion.div
                key={member.name}
                animate={{
                  x: xOffset,
                  scale: scale,
                  rotateY: rotateY,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1], // Faster smooth motion curve
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[290px] sm:w-[340px] lg:w-[380px] h-[430px] sm:h-[470px] lg:h-[500px] rounded-[32px] overflow-hidden border border-slate-200/80 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.14)] cursor-pointer select-none transition-all duration-300 ${
                  isCenter
                    ? 'border-[#7C3AED]/80 shadow-[0_30px_70px_rgba(124,58,237,0.28)]'
                    : 'hover:border-slate-400'
                }`}
              >
                {/* FULL-BLEED PORTRAIT IMAGE (MATCHING REFERENCE IMAGE) */}
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 300px, 380px"
                    className="object-cover object-center w-full h-full select-none"
                    priority={isCenter}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1E1035] to-[#0A0612] flex items-center justify-center">
                    <UserCheck className="w-16 h-16 text-[#7C3AED]/40" />
                  </div>
                )}

                {/* TOP-RIGHT BADGE OVERLAY */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                  <UserCheck className="w-3 h-3 text-[#C4B5FD]" />
                  <span>LEADERSHIP</span>
                </div>

                {/* BOTTOM DARK GRADIENT OVERLAY & TEXT (MATCHING REFERENCE IMAGE EXACTLY) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0612] via-[#0A0612]/75 via-45% to-transparent flex flex-col justify-end p-6 sm:p-8 z-10 text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white uppercase font-cera drop-shadow-md mb-1">
                    {member.name}
                  </h3>

                  <span className="text-xs font-semibold tracking-wider text-[#C4B5FD] uppercase block mb-2">
                    {member.role}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3 opacity-90 drop-shadow-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* NON-CIRCULAR RECTANGULAR NAVIGATION CONTROLS & PROGRESS BARS */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous team member"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-300/90 text-slate-700 hover:text-[#7C3AED] hover:border-[#7C3AED] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* SLEEK RECTANGULAR PROGRESS BARS */}
          <div className="flex items-center gap-2">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-md cursor-pointer h-2 ${
                  activeIndex === idx
                    ? 'w-8 bg-[#7C3AED]'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next team member"
            className="w-11 h-11 rounded-2xl bg-white border border-slate-300/90 text-slate-700 hover:text-[#7C3AED] hover:border-[#7C3AED] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default TeamGrid;
