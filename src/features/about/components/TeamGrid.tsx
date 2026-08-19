'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/about';
import { UserCheck } from 'lucide-react';

export function TeamGrid() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* HEADING & INTRO */}
        <div className="max-w-3xl text-center mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
              MEET OUR TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-cera mb-4"
          >
            Executors of System Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our diverse team of experts brings together years of experience, creativity, and passion to deliver exceptional results for our clients.
          </motion.p>
        </div>

        {/* 4 TEAM MEMBER CARDS (2 x 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#7C3AED] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D8F8]">
                    LEADERSHIP
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight font-cera mb-1 group-hover:text-[#7C3AED] transition-colors">
                  {member.name}
                </h3>

                <span className="text-xs font-bold text-[#7C3AED] tracking-wider uppercase block mb-4">
                  {member.role}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
