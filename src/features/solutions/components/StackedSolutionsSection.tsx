'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Cpu, BarChart3, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

interface StackedSolutionItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
  techStack: string[];
  impactMetric: string;
  impactLabel: string;
  ctaHref: string;
}

const stackedSolutionsData: StackedSolutionItem[] = [
  {
    id: 'solution-01',
    category: 'BRAND & DIGITAL',
    title: 'Brand & Digital Ecosystem Architecture',
    subtitle: 'High-impact design systems & modern web experiences',
    description:
      'We craft iconic visual identities, modern design systems, and fluid web applications that establish instant authority and deliver frictionless digital experiences.',
    icon: Layers,
    capabilities: [
      'Visual Identity & Brand Strategy',
      'Design System Architecture',
      'UI/UX Design & Prototyping',
      'Interactive Web & Mobile Apps',
      'Editorial & Digital Asset Creation',
      'Motion Design & Micro-Interactions',
    ],
    techStack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Figma'],
    impactMetric: '3.4x',
    impactLabel: 'Increase in Brand Engagement',
    ctaHref: '/services/dba/brand-systems',
  },
  {
    id: 'solution-02',
    category: 'MARKETING & GROWTH',
    title: 'Automated Growth & Marketing Infrastructure',
    subtitle: 'Data-driven acquisition & lifecycle automation',
    description:
      'Eliminate marketing chaos with connected growth infrastructure. We build automated funnels, multi-channel customer triggers, and real-time revenue analytics dashboards.',
    icon: TrendingUp,
    capabilities: [
      'Automated Lead Acquisition Funnels',
      'Customer Lifecycle Triggers & CRM',
      'Omnichannel Campaign Orchestration',
      'Real-Time Revenue Analytics',
      'Conversion Rate Optimization (CRO)',
      'Data Pipeline Integration',
    ],
    techStack: ['Segment', 'HubSpot', 'Python', 'Mixpanel', 'BigQuery'],
    impactMetric: '65%',
    impactLabel: 'Reduction in Acquisition Cost',
    ctaHref: '/solutions#growth',
  },
  {
    id: 'solution-03',
    category: 'PRODUCT & TECH',
    title: 'Product & Enterprise Tech Engineering',
    subtitle: 'Cloud-native software, APIs & AI automation',
    description:
      'Engineer scalable custom software, intelligent AI workflows, and resilient cloud architectures designed for high throughput, security, and zero downtime.',
    icon: Cpu,
    capabilities: [
      'Custom SaaS & Platform Engineering',
      'AI & Intelligent Automation Models',
      'API & Microservices Ecosystems',
      'Cloud Architecture & Security Hardening',
      'Database Architecture & Optimization',
      'Continuous Integration & Deployment',
    ],
    techStack: ['TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    impactMetric: '99.99%',
    impactLabel: 'Uptime & Operational Reliability',
    ctaHref: '/solutions#product',
  },
  {
    id: 'solution-04',
    category: 'BUSINESS INTELLIGENCE',
    title: 'Executive Intelligence & Data Systems',
    subtitle: 'Real-time analytics & decision-making engines',
    description:
      'Consolidate raw corporate data into clear executive dashboards, automated pipelines, and predictive BI tools that support faster, smarter decisions.',
    icon: BarChart3,
    capabilities: [
      'Data Engineering & ETL Pipelines',
      'Executive BI Dashboards',
      'Predictive Analytics Models',
      'Real-Time Revenue Intelligence',
      'Cloud Data Warehousing',
      'Automated Compliance Reporting',
    ],
    techStack: ['Snowflake', 'BigQuery', 'dbt', 'Looker', 'Python', 'Airflow'],
    impactMetric: '4.2x',
    impactLabel: 'Faster Executive Decision Velocity',
    ctaHref: '/solutions#bi',
  },
];

export function StackedSolutionsSection() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28">
      {/* AMBIENT SOFT PURPLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* SECTION INTRO HEADER */}
        <div className="max-w-3xl text-center mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              CONNECTED ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4">
            GoDigitify Solution Stack
          </h2>

          <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            As you scroll down, explore how our solution layers stack together into one unified digital transformation engine.
          </p>
        </div>

        {/* NATIVE SCROLL-DRIVEN STACKED CARDS TAKEOVER LIST */}
        <div className="relative w-full max-w-6xl xl:max-w-[1340px] mx-auto space-y-16 sm:space-y-24">
          {stackedSolutionsData.map((card, index) => {
            const IconComp = card.icon;
            const zIndexValue = (index + 1) * 10;
            // Slightly offset sticky top positioning for a clean physical stacked deck appearance
            const stickyTop = 100 + index * 20;

            return (
              <div
                key={card.id}
                style={{
                  position: 'sticky',
                  top: `${stickyTop}px`,
                  zIndex: zIndexValue,
                }}
                className="w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
                    
                    {/* LEFT COLUMN: SOLUTION DETAILS */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-between text-left">
                      <div>
                        {/* CATEGORY BADGE */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
                            {card.category}
                          </span>
                        </div>

                        {/* HEADLINE & SUBTITLE */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] tracking-tight leading-tight font-cera mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#7C3AED] font-medium mb-4">
                          {card.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                          {card.description}
                        </p>

                        {/* CORE CAPABILITIES GRID */}
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                          CORE CAPABILITIES:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {card.capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* TECH STACK TAGS */}
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">
                          STACK:
                        </span>
                        {card.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: OUTCOME CARD MATCHING REFERENCE IMAGE */}
                    <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#110C24] via-[#1E0B38] to-[#0D071C] text-white rounded-2xl sm:rounded-[28px] p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-lg min-h-[280px]">
                      <div className="relative z-10 text-left">
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
                            MEASURABLE OUTCOME
                          </span>
                          <Zap className="w-4 h-4 text-[#A78BFA]" />
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                          {card.impactMetric}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 font-normal">
                          {card.impactLabel}
                        </p>
                      </div>

                      {/* ACTION BUTTON */}
                      <div className="relative z-10 pt-8 mt-8 border-t border-white/15">
                        <Link
                          href={card.ctaHref}
                          className="w-full py-3.5 px-6 rounded-full bg-white text-[#110C24] hover:bg-[#7C3AED] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md group/btn cursor-pointer"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default StackedSolutionsSection;
