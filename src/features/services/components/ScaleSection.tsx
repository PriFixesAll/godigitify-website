'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  Settings,
  Palette,
  Megaphone,
  Smartphone,
  BarChart2,
  Code2,
} from 'lucide-react';

const checklist = [
  { label: 'System-Level Automation', desc: 'End manual bottlenecks' },
  { label: 'Secure & Scalable', desc: 'Built for enterprise load' },
  { label: 'Measurable ROI', desc: 'Predictable growth metrics' },
];

const stats = [
  { value: '500+', label: 'Systems Deployed' },
  { value: '3.2x', label: 'Avg. Efficiency Gain' },
  { value: '97%', label: 'Client Retention' },
];

const serviceNodes = [
  {
    icon: Settings,
    title: 'AI Automation',
    subtitle: 'Smart Agents',
    href: '/services#ai-automation',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    subtitle: 'Growth ROI',
    href: '/services#digital-marketing',
  },
  {
    icon: BarChart2,
    title: 'Analytics',
    subtitle: 'Real-time',
    href: '/services#analytics',
  },
  {
    icon: Code2,
    title: 'Web Development',
    subtitle: 'Next.js',
    href: '/services#web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'iOS & Android',
    href: '/services#mobile-apps',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Figma System',
    href: '/services#ui-ux-design',
  },
];

export function ScaleSection() {
  const [rotationAngle, setRotationAngle] = useState(0);

  // Unstoppable 60fps continuous circular orbit loop (NEVER pauses on hover)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const speedDegPerMs = 360 / 38000; // Smooth continuous 360° circular loop in 38 seconds

    const update = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      // Continuous revolving motion never stops
      setRotationAngle((prev) => (prev + delta * speedDegPerMs) % 360);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const totalItems = serviceNodes.length; // 6
  const orbitRadius = 155; // 155px orbit radius (310px circle diameter)
  const innerRadius = 48;  // Inner Services core edge radius
  const size = 390;        // Square viewBox size (390px x 390px)
  const center = size / 2; // 195px (exact center)

  return (
    <section className="relative py-12 md:py-16 bg-[#F8F7FC] overflow-hidden text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* H1 Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#7C3AED]">Scale</span>{' '}
              <span className="text-[#0F172A]">Without</span>{' '}
              <span className="text-[#7C3AED]">Chaos</span>
            </h2>

            {/* Body Paragraph */}
            <p className="text-[#4B5563] text-sm sm:text-base lg:text-[15.5px] leading-relaxed font-normal mb-6 max-w-xl">
              We build <strong className="text-[#0F172A] font-bold">integrated digital ecosystems</strong> that replace fragmented tactics with predictable, automated growth systems. For established businesses ready to move from effort-based execution to scalable infrastructure.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-7 w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-[#0F172A]">{item.label}</span>
                  <span className="text-[#4B5563] font-normal">— {item.desc}</span>
                </div>
              ))}
            </div>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-7">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-[#4d286e] via-[#6b389c] to-[#7c3aed] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_8px_25px_rgba(124,58,237,0.4)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-300 group shrink-0"
              >
                <span>Start Growth Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/solutions"
                className="w-full sm:w-auto bg-white text-[#4d286e] border border-[#c0a0e8] hover:border-[#7c3aed] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_16px_rgba(124,58,237,0.12)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.25)] hover:scale-[1.02] transition-all duration-300 group shrink-0"
              >
                <span>Explore Our Systems</span>
                <ArrowRight className="w-4 h-4 text-[#4d286e] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Thin Horizontal Divider Line */}
            <div className="w-full h-px bg-[#E5E7EB] mb-5" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-7 w-full max-w-lg">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10.5px] sm:text-xs text-[#4B5563] font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CIRCULAR ORBIT WITH DECREASED CARD WIDTH (140px x 42px) & SAME FONT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[390px] mx-auto flex items-center justify-center py-2 select-none"
          >
            {/* Soft Ambient Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C3AED]/16 rounded-full blur-[90px] pointer-events-none" />

            {/* Scattered Dot-Grid Pattern */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

            {/* EXACT CENTER: "Services" Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none shrink-0">
              <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-full border border-dashed border-[#7C3AED]/30 bg-white/90 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold tracking-normal text-[#0F172A]">
                  Services
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-[#7C3AED]/20 rounded-full blur-xl animate-pulse" />
            </div>

            {/* Outer Stationary Dashed Circular Track */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7C3AED]/20 pointer-events-none z-10"
              style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
            />

            {/* CONNECTING LINES IN SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 text-[#7C3AED]/20"
              viewBox={`0 0 ${size} ${size}`}
            >
              {serviceNodes.map((_, idx) => {
                const itemAngle = (360 / totalItems) * idx + rotationAngle - 90;
                const rad = (itemAngle * Math.PI) / 180;
                const x1 = center + innerRadius * Math.cos(rad);
                const y1 = center + innerRadius * Math.sin(rad);
                const x2 = center + orbitRadius * Math.cos(rad);
                const y2 = center + orbitRadius * Math.sin(rad);

                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeDasharray="3 3"
                  />
                );
              })}
            </svg>

            {/* NARROWER 140px OPTION BOXES (140px x 42px) — SAME FONT SIZE & FULL VISIBILITY */}
            {serviceNodes.map((node, idx) => {
              const NodeIcon = node.icon;
              const itemAngle = (360 / totalItems) * idx + rotationAngle - 90;
              const rad = (itemAngle * Math.PI) / 180;
              
              // Exact 2D Circular Coordinate Calculation at 155px Radius
              const x = orbitRadius * Math.cos(rad);
              const y = orbitRadius * Math.sin(rad);

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 z-30 transition-transform duration-75 ease-linear pointer-events-auto shrink-0"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
                    width: '140px',
                    height: '42px',
                  }}
                >
                  <Link
                    href={node.href}
                    className="w-[140px] h-[42px] shrink-0 bg-white border-1.5 border-[#E5E7EB] px-2 py-1.5 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_24px_rgba(124,58,237,0.32)] hover:border-[#7C3AED] hover:scale-108 transition-all duration-200 flex items-center gap-1.5 cursor-pointer group box-border overflow-hidden"
                  >
                    <div className="w-5.5 h-5.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(124,58,237,0.5)] transition-all duration-200 flex items-center justify-center shrink-0">
                      <NodeIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left justify-center min-w-0">
                      <span className="text-[10.5px] font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors whitespace-nowrap">
                        {node.title}
                      </span>
                      <span className="text-[8.5px] text-[#4B5563] whitespace-nowrap">
                        {node.subtitle}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
