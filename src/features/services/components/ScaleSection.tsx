'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  Zap,
  Globe,
  Bot,
  BarChart3,
  Search,
  ShieldCheck,
} from 'lucide-react';

const checklist = [
  {
    label: 'Unified System Architecture',
    desc: 'Connecting brand, tech, and data',
  },
  {
    label: 'AI-Powered Workflows',
    desc: 'Automating manual execution bottlenecks',
  },
  {
    label: 'Predictive Performance',
    desc: 'Real-time visibility into ROI and scale',
  },
];

const stats = [
  { value: '3.4x', label: 'Average ROI Increase' },
  { value: '70%', label: 'Manual Effort Saved' },
  { value: '99.9%', label: 'System Uptime' },
];

const serviceNodes = [
  {
    title: 'Digital Systems',
    subtitle: 'End-to-End Architecture',
    icon: Globe,
    href: '/services/digital-systems',
  },
  {
    title: 'AI Workflows',
    subtitle: 'Intelligent Automation',
    icon: Bot,
    href: '/services/ai-workflows',
  },
  {
    title: 'Platform Eng',
    subtitle: '10x Scalable Infra',
    icon: Zap,
    href: '/services/platform-engineering',
  },
  {
    title: 'Growth Analytics',
    subtitle: 'Real-time BI Dashboards',
    icon: BarChart3,
    href: '/services/growth-analytics',
  },
  {
    title: 'SEO & Performance',
    subtitle: 'Sub-Second Speeds',
    icon: Search,
    href: '/services/seo-performance',
  },
  {
    title: 'System Security',
    subtitle: 'Enterprise Hardening',
    icon: ShieldCheck,
    href: '/services/system-security',
  },
];

export function ScaleSection() {
  const [rotationAngle, setRotationAngle] = useState(0);

  // Smooth continuous rotation animation frame
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // 6 degrees per second slow smooth continuous orbit rotation
      setRotationAngle((prev) => (prev + 6 * deltaTime) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const size = 360;
  const center = size / 2;
  const orbitRadius = 145; // 145px radius
  const innerRadius = 45; // 45px radius for center "Services" circle boundary
  const totalItems = serviceNodes.length;

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFFFF] text-[#0F172A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: HEADLINE, PARAGRAPH, CHECKLIST, STATS (NO CTA BUTTONS) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* H1 Headline (Less Bold) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.1] mb-4">
              <span className="text-[#7C3AED]">Scale</span>{' '}
              <span className="text-[#0F172A]">Without</span>{' '}
              <span className="text-[#7C3AED]">Chaos</span>
            </h2>

            {/* Body Paragraph */}
            <p className="text-[#4B5563] text-sm sm:text-base lg:text-[15.5px] leading-relaxed font-normal mb-6 max-w-xl">
              We build <strong className="text-[#0F172A] font-semibold">integrated digital ecosystems</strong> that replace fragmented tactics with predictable, automated growth systems. For established businesses ready to move from effort-based execution to scalable infrastructure.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-7 w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-[#0F172A]">{item.label}</span>
                  <span className="text-[#4B5563] font-normal">— {item.desc}</span>
                </div>
              ))}
            </div>

            {/* Thin Horizontal Divider Line */}
            <div className="w-full h-px bg-[#E5E7EB] mb-5" />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-7 w-full max-w-lg">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-semibold text-[#7C3AED] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10.5px] sm:text-xs text-[#4B5563] font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CIRCULAR ORBIT WITH DECREASED CARD WIDTH (140px x 42px) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* 360px x 360px Orbit Arena */}
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              {/* Scattered Dot-Grid Pattern */}
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

              {/* EXACT CENTER: "Services" Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none shrink-0">
                <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-full border border-dashed border-[#7C3AED]/30 bg-white/90 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold tracking-normal text-[#0F172A]">
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

              {/* NARROWER 140px OPTION BOXES (140px x 42px) */}
              {serviceNodes.map((node, idx) => {
                const NodeIcon = node.icon;
                const itemAngle = (360 / totalItems) * idx + rotationAngle - 90;
                const rad = (itemAngle * Math.PI) / 180;
                
                // Exact 2D Circular Coordinate Calculation at 145px Radius
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
                        <span className="text-[10.5px] font-semibold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors whitespace-nowrap">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
