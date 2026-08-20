'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { InsightCategory } from '../types/insight';
import { insightsArticles } from '../data/insightsData';

interface InsightsGridProps {
  selectedCategory: InsightCategory;
}

export function InsightsGrid({ selectedCategory }: InsightsGridProps) {
  const filteredArticles =
    selectedCategory === 'All'
      ? insightsArticles
      : insightsArticles.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative bg-[#FAF9FC] text-[#0F172A] select-none pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-slate-500 font-medium text-base">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#7C3AED]/40 hover:shadow-[0_20px_45px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* IMAGE THUMBNAIL */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200/70">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full select-none transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#7C3AED] text-[11px] font-semibold tracking-wide uppercase border border-white">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* METADATA */}
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-[#0F172A] tracking-tight leading-snug mb-3 font-cera group-hover:text-[#7C3AED] transition-colors">
                    {article.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* CARD FOOTER */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold text-[11px]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{article.author.name}</span>
                  </div>

                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] group-hover:text-[#6D28D9] transition-colors"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default InsightsGrid;
