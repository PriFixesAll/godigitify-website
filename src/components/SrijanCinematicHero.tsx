'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function SrijanCinematicHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#090000] text-white flex items-center justify-center overflow-hidden select-none">
      
      {/* 1. BASE BACKGROUND ATMOSPHERE (NEAR-BLACK BURGUNDY) */}
      <div className="absolute inset-0 bg-radial from-[#1A0205]/40 via-[#0B0103] to-[#050001] pointer-events-none" />

      {/* 2. MULTI-LAYERED GPU-ACCELERATED VOLUMETRIC LIQUID LIGHT BLOBS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* LIGHT BLOB 1 — LOWER LEFT CRIMSON MASS */}
        <motion.div
          animate={{
            x: ['-10%', '8%', '-10%'],
            y: ['12%', '-15%', '12%'],
            scale: [1, 1.35, 0.95, 1],
            opacity: [0.65, 0.85, 0.55, 0.65],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -left-20 w-[600px] sm:w-[850px] lg:w-[1050px] h-[600px] sm:h-[850px] lg:h-[1050px] rounded-full bg-gradient-to-tr from-[#450000] via-[#700000] to-[#B00000]/60 blur-[130px] sm:blur-[170px] lg:blur-[220px] mix-blend-screen"
        />

        {/* LIGHT BLOB 2 — LOWER RIGHT DARK RED VOLUMETRIC CLOUD */}
        <motion.div
          animate={{
            x: ['10%', '-12%', '10%'],
            y: ['-8%', '16%', '-8%'],
            scale: [1.1, 0.85, 1.25, 1.1],
            opacity: [0.6, 0.9, 0.5, 0.6],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-32 -right-20 w-[650px] sm:w-[900px] lg:w-[1150px] h-[650px] sm:h-[900px] lg:h-[1150px] rounded-full bg-gradient-to-tl from-[#580000] via-[#8B0000] to-[#C0392B]/50 blur-[140px] sm:blur-[180px] lg:blur-[230px] mix-blend-screen"
        />

        {/* LIGHT BLOB 3 — BOTTOM CENTER WARM ORANGE/RED ATMOSPHERIC ACCENT */}
        <motion.div
          animate={{
            x: ['-8%', '8%', '-8%'],
            y: ['6%', '-10%', '6%'],
            scale: [0.9, 1.4, 1, 0.9],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] lg:w-[1200px] h-[450px] sm:h-[650px] lg:h-[800px] rounded-full bg-gradient-to-t from-[#B00000] via-[#D35400]/40 to-transparent blur-[150px] sm:blur-[190px] lg:blur-[240px] mix-blend-screen"
        />

        {/* LIGHT BLOB 4 — UPPER RIGHT DRIFTING BURGUNDY MASS */}
        <motion.div
          animate={{
            x: ['8%', '-10%', '8%'],
            y: ['-12%', '10%', '-12%'],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -right-20 w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px] rounded-full bg-gradient-to-br from-[#4A0000] via-[#700000]/70 to-[#900C3F]/40 blur-[130px] sm:blur-[170px] lg:blur-[210px] mix-blend-screen"
        />

        {/* LIGHT BLOB 5 — MID CENTER PULSING AURORA CORE */}
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[400px] sm:h-[600px] lg:h-[750px] rounded-full bg-radial from-[#800000]/60 via-[#4A0000]/30 to-transparent blur-[160px] sm:blur-[200px] lg:blur-[250px] mix-blend-screen"
        />

      </div>

      {/* 3. SUBTLE NOISE OVERLAY FOR FILM GRAIN TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.025] pointer-events-none z-10" />

      {/* 4. FOREGROUND STATIC TYPOGRAPHY "srijan" */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-7xl sm:text-9xl lg:text-[14rem] xl:text-[17rem] 2xl:text-[20rem] font-black tracking-tighter text-white font-cera leading-none select-none pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          srijan
        </h1>
      </div>

    </section>
  );
}
