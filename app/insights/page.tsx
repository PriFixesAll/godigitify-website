'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InsightsHero } from '@/features/insights/components/InsightsHero';
import { FeaturedInsight } from '@/features/insights/components/FeaturedInsight';
import { InsightsGrid } from '@/features/insights/components/InsightsGrid';
import { InsightsNewsletter } from '@/features/insights/components/InsightsNewsletter';
import { InsightCategory } from '@/features/insights/types/insight';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory>('All');

  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#0F172A] font-sans selection:bg-[#7C3AED]/20 overflow-hidden select-none">
      <Navbar />

      <main className="pb-0">
        {/* HERO SECTION */}
        <InsightsHero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* FEATURED ARTICLE SPOTLIGHT */}
        {selectedCategory === 'All' && <FeaturedInsight />}

        {/* ARTICLES GRID */}
        <InsightsGrid selectedCategory={selectedCategory} />

        {/* NEWSLETTER SUBSCRIPTION */}
        <InsightsNewsletter />
      </main>

      <Footer />
    </div>
  );
}
