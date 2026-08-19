'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-24 sm:py-32 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* PHYSICAL STATIONARY ROUNDED RECTANGLE CONTAINER CARD */}
        <div className="relative rounded-3xl p-10 sm:p-16 border border-[#E9D8F8] shadow-[0_15px_50px_rgba(124,58,237,0.08)] text-center overflow-hidden group bg-gradient-to-br from-[#FAF5FF] via-[#F4EAFF] to-[#FAF9FC]">
          
          {/* INNER TRAVELING & RETURNING PURPLE CURVE MOTION CANVAS */}
          <div className="absolute -inset-28 sm:-inset-44 pointer-events-none z-0 overflow-hidden">
            
            {/* INNER CURVE STREAM 1: LEADER PURPLE CURVE (TRAVELS RIGHT/DOWN & DRIFTS BACK SMOOTHLY) */}
            <motion.div
              animate={{
                x: ['-18%', '16%', '-18%'],
                y: ['-12%', '14%', '-12%'],
                rotate: [-6, 8, -6],
                scale: [1.25, 1.5, 1.25],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full blur-xl sm:blur-2xl"
            >
              <Image
                src="/purple_mesh_bg.png"
                alt="Soft Purple Mesh Gradient Texture Curve"
                fill
                priority
                className="object-cover object-center opacity-85"
              />
            </motion.div>

            {/* INNER CURVE STREAM 2: COUNTER-TRAVELING CURVE (TRAVELS LEFT/UP & DRIFTS BACK SMOOTHLY) */}
            <motion.div
              animate={{
                x: ['16%', '-18%', '16%'],
                y: ['12%', '-14%', '12%'],
                rotate: [180, 194, 180],
                scale: [1.35, 1.15, 1.35],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full blur-xl sm:blur-2xl"
            >
              <Image
                src="/purple_mesh_bg.png"
                alt="Soft Purple Mesh Gradient Texture Counter Curve"
                fill
                priority
                className="object-cover object-center opacity-60 mix-blend-soft-light"
              />
            </motion.div>

            {/* INNER CURVE STREAM 3: ATMOSPHERIC PURPLE GLOW RIBBON (BREATHES & SHIFTS BACK & FORTH) */}
            <motion.div
              animate={{
                x: ['-10%', '12%', '-10%'],
                y: ['10%', '-12%', '10%'],
                scale: [1.2, 1.45, 1.2],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-[#7C3AED]/20 via-[#F3E8FF] to-transparent mix-blend-multiply"
            />
          </div>

          {/* LIGHT OVERLAY FOR OPTIMAL TYPOGRAPHY READABILITY */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] pointer-events-none z-0" />

          {/* CARD CONTENT — COMPLETELY UNCHANGED & PROTECTED */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9D8F8] mb-6 shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase font-cera">
                TAKE THE NEXT STEP
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-cera max-w-4xl mx-auto mb-6"
            >
              Ready to Move From Effort <span className="text-[#7C3AED]">to Infrastructure?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-700 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Start with a Growth Systems Diagnostic. We'll audit your current digital ecosystem, identify bottlenecks, and outline what unified growth infrastructure could look like for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_6px_24px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Growth Diagnostic</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/our-approach"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-[#0F172A] font-bold text-sm hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Explore Methodology</span>
              </Link>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
