'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, ChevronDown, ArrowRight } from 'lucide-react';
import { ProductItemData } from '../types/solution';

interface ProductCardProps {
  product: ProductItemData;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#7C3AED]/40 hover:shadow-[0_16px_45px_rgba(124,58,237,0.08)] transition-all duration-300 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* LEFT COLUMN: PRODUCT PREVIEW IMAGE PLACEHOLDER */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 group">
            <Image
              src={product.image}
              alt={product.imageAlt || product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover w-full h-full select-none transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: PRODUCT INFORMATION & ACTIONS */}
        <div className="lg:col-span-7 flex flex-col justify-between text-left">
          <div>
            {/* PRODUCT NAME */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#7C3AED] tracking-tight font-cera mb-2">
              {product.name}
            </h3>

            {/* SHORT ITALIC TAGLINE */}
            <p className="text-slate-500 italic text-sm sm:text-base font-medium mb-4 leading-normal">
              {product.tagline}
            </p>

            {/* DUMMY DESCRIPTION */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              {product.description}
            </p>
          </div>

          {/* THREE HORIZONTAL DUMMY STATISTICS */}
          <div className="pt-6 border-t border-slate-100 mb-8">
            <div className="flex items-center gap-6 sm:gap-10">
              {product.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-semibold text-[#7C3AED] font-cera leading-none mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* THREE ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* 1. GET DEMO (Primary Purple Filled) */}
            <Link
              href={product.demoHref || '/contact'}
              className="px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-xs sm:text-sm hover:bg-[#6D28D9] transition-all duration-300 shadow-[0_4px_16px_rgba(124,58,237,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Demo</span>
              <Zap className="w-3.5 h-3.5 fill-current" />
            </Link>

            {/* 2. LEARN MORE (Purple Outlined) */}
            <Link
              href={product.learnMoreHref || '/solutions'}
              className="px-6 py-3 rounded-full bg-transparent border border-[#7C3AED] text-[#7C3AED] hover:bg-purple-50/60 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* 3. VIEW DETAILS (Light Gray with Downward Chevron) */}
            <Link
              href={product.detailsHref || '/solutions'}
              className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View Details</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;
