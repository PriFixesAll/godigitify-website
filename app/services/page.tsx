'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Layers,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CallToActionSection } from '@/features/cta/components/CallToActionSection';
import { OurServicesReferenceSection } from '@/features/services/components/OurServicesReferenceSection';
import { ServicesMasteryEcosystem } from '@/features/services/components/ServicesMasteryEcosystem';
import { ServicesHeroSection } from '@/features/services/components/ServicesHeroSection';
import { DigitalCapabilitiesSection } from '@/features/services/components/DigitalCapabilitiesSection';
import { WhoThisServiceIsForSection } from '@/features/services/components/WhoThisServiceIsForSection';
import { OurProcessInterlockingSection } from '@/features/process/components/OurProcessInterlockingSection';

interface ServiceItem {
  id: string;
  category: 'brand' | 'marketing' | 'product';
  categoryName: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
  techStack: string[];
  impactMetric: string;
  impactLabel: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'brand',
    category: 'brand',
    categoryName: 'BRAND & DIGITAL',
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
  },
  {
    id: 'marketing',
    category: 'marketing',
    categoryName: 'MARKETING & GROWTH',
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
  },
  {
    id: 'product',
    category: 'product',
    categoryName: 'PRODUCT & TECH',
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
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'brand' | 'marketing' | 'product'>('all');

  const filteredServices =
    activeTab === 'all'
      ? servicesData
      : servicesData.filter((item) => item.category === activeTab);

  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#0F172A] font-sans selection:bg-[#7C3AED]/20 overflow-hidden select-none">
      <Navbar />

      <main className="pb-16">
        {/* NEW TOP HERO SECTION */}
        <ServicesHeroSection />

        {/* 4 EQUAL CARDS CAPABILITIES ROW */}
        <DigitalCapabilitiesSection />

        {/* ONE CONNECTED MASTERY ECOSYSTEM (ANIMATED VENN SLIDE) */}
        <ServicesMasteryEcosystem />

        {/* WHO THIS SERVICE IS FOR SECTION */}
        <WhoThisServiceIsForSection />

        {/* SERVICE FILTER TABS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-12">
          <div className="flex items-center justify-center gap-2 flex-wrap bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-sm max-w-xl mx-auto">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'brand', label: 'Brand & Digital' },
              { id: 'marketing', label: 'Marketing & Growth' },
              { id: 'product', label: 'Product & Tech' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="services-page-active-tab"
                      className="absolute inset-0 bg-[#7C3AED] rounded-full shadow-[0_4px_14px_rgba(124,58,237,0.3)] z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* SERVICES CAPABILITIES GRID */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-20">
          <motion.div layout className="grid grid-cols-1 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const IconComp = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/80 shadow-[0_16px_45px_rgba(124,58,237,0.06)] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-stretch justify-between gap-10 relative overflow-hidden group hover:border-[#7C3AED]/40 transition-all duration-300"
                  >
                    {/* LEFT COLUMN: SERVICE INFORMATION */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-between">
                      <div>
                        {/* BADGE */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-2xl bg-[#F3E8FF] border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                            <IconComp className="w-5.5 h-5.5" />
                          </div>
                          <span className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
                            {service.categoryName}
                          </span>
                        </div>

                        {/* TITLE & SUBTITLE */}
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mb-2">
                          {service.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#7C3AED] font-medium mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* CAPABILITIES LIST */}
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Core Capabilities:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {service.capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* TECH STACK BADGES */}
                      <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">
                          Stack:
                        </span>
                        {service.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: IMPACT CARD & ACTION */}
                    <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#110C24] via-[#1E0B38] to-[#0D071C] text-white rounded-2xl sm:rounded-[28px] p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-lg">
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
                            MEASURABLE OUTCOME
                          </span>
                          <Zap className="w-4 h-4 text-[#A78BFA]" />
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                          {service.impactMetric}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 font-normal">
                          {service.impactLabel}
                        </p>
                      </div>

                      {/* ACTION BUTTON */}
                      <div className="relative z-10 pt-8 mt-8 border-t border-white/15">
                        <Link
                          href={service.id === 'brand' ? '/services/dba/brand-systems' : '/contact'}
                          className="w-full py-3.5 px-6 rounded-full bg-white text-[#110C24] hover:bg-[#7C3AED] hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md group/btn"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA BANNER */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
