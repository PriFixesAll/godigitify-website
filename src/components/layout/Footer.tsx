'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#how-we-work' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'License', href: '/license' },
];

const companyLinks = [
  { label: 'Services', href: '#scale' },
  { label: 'Solutions', href: '#our-solutions' },
  { label: 'Projects', href: '#how-we-work' },
  { label: 'Case Studies', href: '#case-studies' },
];

const otherLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Blog Details', href: '/blog/insights' },
  { label: '404', href: '/404' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  // SCROLL PROGRESS BINDING FOR FOOTER VIEWPORT POSITION
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // SCROLL DIRECTION LOGIC:
  // SCROLL DOWN ↓ -> scrollYProgress 0 -> 1 -> fillPercent 100% -> 0% (fill disappears top to bottom)
  // SCROLL UP ↑   -> scrollYProgress 1 -> 0 -> fillPercent 0% -> 100% (fills bottom to top)
  const fillPercent = useTransform(scrollYProgress, [0.2, 1], [100, 25]);
  const clipStyle = useTransform(fillPercent, (v) => `inset(${v}% 0% 0% 0%)`);

  // VERTICAL TRANSLATION FOR ANIMATED WORDMARK
  const textTranslateY = useTransform(scrollYProgress, [0.05, 0.95], [30, 0]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#05020A] text-white py-10 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* CARD CONTAINER MATCHING REFERENCE IMAGE */}
      <div className="max-w-7xl xl:max-w-[1536px] 2xl:max-w-[1680px] mx-auto bg-[#0D0819] rounded-[28px] sm:rounded-[36px] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* SOFT AMBIENT PURPLE GLOW */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[85%] h-[260px] bg-[#7C3AED]/25 rounded-full blur-[130px] pointer-events-none z-0" />

        {/* TOP GRID CONTENT MATCHING REFERENCE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 relative z-10 items-start">
          
          {/* LEFT BRAND SECTION (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#7C3AED] flex items-center justify-center shadow-[0_0_14px_rgba(124,58,237,0.6)]">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight uppercase">
                Godigitify <sup className="text-[10px] font-normal text-white/70">TM</sup>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-sm">
              GoDigitify is a full-service digital transformation agency specializing in scalable software, modern design, and enterprise AI.
            </p>
          </div>

          {/* RIGHT 4 LINK COLUMNS (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* QUICK LINK */}
            <div>
              <h4 className="text-xs font-semibold text-white/90 mb-4 tracking-wider">
                Quick link
              </h4>
              <ul className="space-y-2.5 text-xs text-white/65">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-xs font-semibold text-white/90 mb-4 tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-white/65">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OTHERS */}
            <div>
              <h4 className="text-xs font-semibold text-white/90 mb-4 tracking-wider">
                Others
              </h4>
              <ul className="space-y-2.5 text-xs text-white/65">
                {otherLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-xs font-semibold text-white/90 mb-4 tracking-wider">
                Social
              </h4>
              <ul className="space-y-2.5 text-xs text-white/65">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT SUBTITLE ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 mb-8 pt-4 border-t border-white/10 relative z-10 font-normal">
          <p>©2026 GoDigitify. All rights reserved.</p>
          <p>Design by GoDigitify Technology Labs — Powered by Innovation</p>
        </div>

        {/* GIANT "GODIGITIFY" WORDMARK WITH EDGE-FADING PURPLE GRADIENT MATCHING REFERENCE IMAGE */}
        <div className="w-full flex justify-center items-center relative overflow-hidden z-10 pt-4">
          <motion.div
            style={{ y: textTranslateY }}
            className="w-full flex justify-center items-center overflow-visible"
          >
            <svg
              viewBox="0 0 1200 190"
              className="w-full h-auto overflow-visible select-none shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* GODIGITIFY PURPLE EDGE FADE GRADIENT MATCHING CONVRTO IN REFERENCE IMAGE */}
                <linearGradient id="godigitifyPurpleEdgeFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
                  <stop offset="18%" stopColor="#A78BFA" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#C084FC" stopOpacity="1" />
                  <stop offset="82%" stopColor="#A78BFA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.12" />
                </linearGradient>
              </defs>

              {/* LAYER 1: BASE OUTLINED WORDMARK */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="font-black tracking-tight"
                style={{
                  fontSize: 'clamp(4rem, 15vw, 12rem)',
                  fill: 'none',
                  stroke: 'url(#godigitifyPurpleEdgeFade)',
                  strokeWidth: '2',
                  letterSpacing: '0.04em',
                }}
              >
                GODIGITIFY
              </text>

              {/* LAYER 2: SOLID GRADIENT FILLED WORDMARK (SCROLL REVEALED) */}
              <motion.g style={{ clipPath: clipStyle }}>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="central"
                  textAnchor="middle"
                  className="font-black tracking-tight"
                  style={{
                    fontSize: 'clamp(4rem, 15vw, 12rem)',
                    fill: 'url(#godigitifyPurpleEdgeFade)',
                    stroke: 'url(#godigitifyPurpleEdgeFade)',
                    strokeWidth: '2',
                    letterSpacing: '0.04em',
                  }}
                >
                  GODIGITIFY
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
