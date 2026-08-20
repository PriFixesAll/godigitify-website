'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { featuredArticle } from '../data/insightsData';

export function FeaturedInsight() {
  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:border-[#7C3AED]/40 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
            
            {/* FEATURED IMAGE */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full select-none transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#7C3AED] text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
            </div>

            {/* FEATURED CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F172A] tracking-tight leading-snug font-cera mb-4 group-hover:text-[#7C3AED] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-[#0F172A]">{featuredArticle.author.name}</span>
                    <span className="text-[11px] font-medium text-slate-500">{featuredArticle.author.role}</span>
                  </div>
                </div>

                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-xs sm:text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_4px_16px_rgba(124,58,237,0.25)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedInsight;
