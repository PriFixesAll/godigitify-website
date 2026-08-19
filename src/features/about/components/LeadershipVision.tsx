'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Sparkles, UserCheck } from 'lucide-react';

interface LeadershipVisionProps {
  mentorName?: string;
  mentorTitle?: string;
  mentorImage?: string;
  mentorStats?: string;
}

export function LeadershipVision({
  mentorName = 'Er. Ankur Gill',
  mentorTitle = 'CHIEF EXECUTIVE OFFICER & FOUNDER',
  mentorImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  mentorStats = '10+ Years Leadership & 50+ Enterprise Projects',
}: LeadershipVisionProps) {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* CONTAINER CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* AMBIENT PURPLE ACCENT GLOW */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* LEFT: QUOTE & STORY */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
                <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
                  LEADERSHIP & MENTORSHIP VISION
                </span>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug font-cera"
              >
                <span className="text-[#7C3AED] font-serif text-4xl mr-1">“</span>
                At Godigitify, we believe technology should empower possibilities and ignite progress. Our mission is to transform ideas into impact through inclusive, innovative, and intelligent solutions.
                <span className="text-[#7C3AED] font-serif text-4xl ml-1">”</span>
              </motion.blockquote>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-2"
              >
                With over a decade of leadership across education, research, and business strategy, our CEO and mentor, Ankur Gill, has cultivated a future-focused approach that bridges academia with industry. His vision drives our dedication to innovation, equity, and meaningful transformation. Under his guidance, Godigitify has delivered 50+ successful projects, empowering institutions and enterprises to achieve their digital goals.
              </motion.p>
            </div>

            {/* RIGHT: MENTOR EXECUTIVE CARD WITH PICTURE CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-5 bg-[#0F172A] text-white rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative group overflow-hidden"
            >
              {/* SOFT AMBIENT GLOW INSIDE CARD */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#7C3AED]/20 rounded-full blur-2xl pointer-events-none" />

              {/* TOP ROW: MENTOR PICTURE & BADGE */}
              <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                {/* MENTOR PHOTO FRAME CONTAINER */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#7C3AED] shadow-[0_8px_24px_rgba(124,58,237,0.3)] shrink-0 bg-slate-900 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={mentorImage}
                    alt={mentorName}
                    fill
                    priority
                    unoptimized
                    className="object-cover object-top"
                  />
                  {/* OVERLAY BADGE */}
                  <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-md border border-white/20">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* AWARD ICON BADGE */}
                <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* MENTOR DETAILS */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-cera mb-1">
                  {mentorName}
                </h3>
                <span className="text-xs font-extrabold tracking-widest text-[#A855F7] uppercase block mb-5">
                  {mentorTitle}
                </span>

                <div className="pt-4 border-t border-slate-800/90 flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                  <Sparkles className="w-4 h-4 text-[#A855F7] shrink-0" />
                  <span>{mentorStats}</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
