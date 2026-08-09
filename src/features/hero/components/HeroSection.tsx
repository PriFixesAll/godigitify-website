'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TrustedLogos } from './TrustedLogos';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#F8F6F2]">
      {/* City Skyline Full-Width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/hero/city-skyline.jpg"
          alt="Modern City Skyline Sunset"
          fill
          priority
          className="object-cover object-center opacity-90 scale-105"
        />
        {/* Soft Warm White / Beige Atmospheric Fog Overlay from Bottom */}
        <div className="absolute inset-0 hero-fog-overlay pointer-events-none" />
      </div>

      {/* Main Centered Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center my-auto px-6 relative z-10"
      >
        {/* Headline strictly set to 36px font size */}
        <h1 className="text-[36px] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.2] mb-6 max-w-2xl">
          Engineering Digital Systems That Drive Growth
        </h1>

        {/* Short Supporting Paragraph */}
        <p className="text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal">
          We design and build integrated digital ecosystems that streamline operations, accelerate innovation, and deliver measurable business impact.
        </p>

        {/* Action CTAs: Decreased Size (px-5 py-2.5 text-xs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto btn-purple-primary font-semibold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto btn-purple-secondary font-semibold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </motion.div>

      {/* Trusted By Companies Moving Queue Marquee */}
      <div className="relative z-10">
        <TrustedLogos />
      </div>
    </section>
  );
}
