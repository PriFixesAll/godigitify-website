'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, CheckCircle2, Users, Heart, BarChart3, DollarSign, ArrowRight } from 'lucide-react';
import { whyPartnerCards } from '../data/about';

const iconMap = {
  'integration-first': Zap,
  'measurable-roi': CheckCircle2,
  'systems-engineers': Users,
  'enterprise-security': Heart,
  'scale-ready': BarChart3,
  'cost-effective': DollarSign,
};

export function WhyPartner() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-12 sm:py-16 overflow-hidden">
      {/* COMPACT CONTAINER MATCHING REFERENCE CARD GRID AESTHETIC */}
      <div className="max-w-6xl xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-[#F3E8FF]/70 via-[#FAF5FF] to-[#F3E8FF]/50 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-[#E5D7FA] shadow-[0_10px_35px_rgba(124,58,237,0.05)] overflow-hidden">
          
          {/* SECTION HEADER */}
          <div className="max-w-2xl text-center mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0F172A] font-cera mb-2.5">
              Why Partner With Us
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
              We're not the right fit for everyone — and that's intentional. Here's what separates us from traditional agencies and service providers.
            </p>
          </div>

          {/* 3-COLUMN x 2-ROW GRID CLONING REFERENCE DESIGN AESTHETIC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {whyPartnerCards.map((card) => {
              const IconComp = iconMap[card.id as keyof typeof iconMap] || Zap;

              return (
                <div
                  key={card.id}
                  className="group relative bg-[#FAFAFC] hover:bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/40 hover:shadow-[0_14px_30px_rgba(124,58,237,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* TOP-LEFT VERTICAL BRAND ACCENT BAR MATCHING REFERENCE IMAGE */}
                  <div className="absolute top-5 left-0 w-[4px] h-7 bg-[#7C3AED] rounded-r-full shadow-xs" />

                  <div>
                    {/* CIRCULAR ICON CONTAINER WITH BRAND ACCENT */}
                    <div className="w-11 h-11 rounded-full bg-[#F3E8FF] border border-[#E9D8F8] text-[#7C3AED] flex items-center justify-center mb-4 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] group-hover:scale-105 transition-all duration-200 shadow-xs">
                      <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* RESTRAINED CARD TITLE */}
                    <h3 className="text-base sm:text-lg font-semibold text-[#0F172A] tracking-tight leading-snug mb-2 font-cera group-hover:text-[#7C3AED] transition-colors">
                      {card.title}
                    </h3>

                    {/* COMPACT CARD DESCRIPTION */}
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mb-5">
                      {card.description}
                    </p>
                  </div>

                  {/* LEARN MORE CTA LINK WITH ARROW MATCHING REFERENCE */}
                  <div className="pt-3 border-t border-slate-100/80 flex items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors cursor-pointer group/link"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyPartner;
