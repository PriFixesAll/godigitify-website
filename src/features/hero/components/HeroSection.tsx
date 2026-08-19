'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TrustedLogos } from './TrustedLogos';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#F8F6F2]">
      {/* City Skyline Full-Width Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/hero/city-skyline.jpg"
          alt="Modern City Skyline Sunset"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-90 scale-105"
        />
        {/* Soft Warm White / Beige Atmospheric Fog Overlay from Bottom */}
        <div className="absolute inset-0 hero-fog-overlay pointer-events-none" />
      </div>

      {/* Main Centered Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center text-center my-auto px-6 sm:px-10 relative z-10"
      >
        {/* Refined Fluid Headline scaling naturally across screen sizes */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[58px] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.18] mb-6 max-w-3xl lg:max-w-4xl font-cera">
          Engineering Digital Systems That Drive Growth
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-slate-700 text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl lg:max-w-3xl leading-relaxed mb-8 font-normal">
          We design and build integrated digital ecosystems that streamline operations, accelerate innovation, and deliver measurable business impact.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* GET STARTED CTA BUTTON WITH LEFT -> RIGHT ROUNDED WIPE HOVER ANIMATION */}
          <Link
            href="/contact"
            className="btn-purple-primary group w-full sm:w-auto font-semibold text-sm sm:text-base lg:text-lg px-8 py-3.5 sm:px-10 sm:py-4 rounded-full flex items-center justify-center cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e] focus-visible:ring-offset-2 select-none"
          >
            {/* INTERNAL ANIMATED FILL LAYER (ROUNDED LEADING EDGE WIPE) */}
            <span className="btn-purple-primary-fill" />

            {/* STATIONARY CONTENT LAYER (TEXT + ARROW) */}
            <span className="btn-purple-primary-content font-cera">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 text-white/95 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* EXPLORE SERVICES CTA BUTTON */}
          <Link
            href="/services"
            className="w-full sm:w-auto btn-purple-secondary font-semibold text-sm sm:text-base lg:text-lg px-8 py-3.5 sm:px-10 sm:py-4 rounded-full flex items-center justify-center gap-2.5 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e] focus-visible:ring-offset-2 transition-transform hover:scale-105"
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
