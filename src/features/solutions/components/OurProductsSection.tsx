'use client';

import React from 'react';
import { productsList } from '../data/productsData';
import { ProductCard } from './ProductCard';

export function OurProductsSection() {
  return (
    <section id="our-products" className="relative bg-[#FAF9FC] text-[#0F172A] select-none py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* CENTERED SECTION HEADING */}
        <div className="max-w-3xl text-center mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#7C3AED] rounded-none" />
            <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0F172A] leading-tight font-cera mb-4">
            Explore <span className="text-[#7C3AED]">Our Products</span>
          </h2>

          <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our portfolio of enterprise digital products, custom platforms, and automated workflow solutions engineered for growth.
          </p>
        </div>

        {/* 5 VERTICALLY STACKED PRODUCT CARDS */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurProductsSection;
