import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SolutionsHero } from '@/features/solutions/components/SolutionsHero';
import { ProblemStatement } from '@/features/solutions/components/ProblemStatement';
import { SolutionGrid } from '@/features/solutions/components/SolutionGrid';
import { StackedSolutionsSection } from '@/features/solutions/components/StackedSolutionsSection';
import { OurProductsSection } from '@/features/solutions/components/OurProductsSection';
import { TransformationJourney } from '@/features/solutions/components/TransformationJourney';
import { SolutionBuilder } from '@/features/solutions/components/SolutionBuilder';
import { SolutionEcosystem } from '@/features/solutions/components/SolutionEcosystem';
import { Outcomes } from '@/features/solutions/components/Outcomes';
import { SolutionsCTA } from '@/features/solutions/components/SolutionsCTA';

export const metadata: Metadata = {
  title: 'Solutions | GoDigitify',
  description:
    'Explore GoDigitify solutions for digital experiences, product development, AI automation, digital transformation, growth and business intelligence.',
};

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#0F172A] font-sans selection:bg-[#7C3AED]/20 overflow-hidden select-none">
      <Navbar />

      <main className="pb-0">
        {/* SECTION 01 — HERO */}
        <SolutionsHero />

        {/* SECTION 02 — PROBLEM STATEMENT */}
        <ProblemStatement />

        {/* SECTION 03 — SOLUTION ECOSYSTEM (6 CARDS GRID) */}
        <SolutionGrid />

        {/* SECTION 04 — SCROLL-DRIVEN STACKED SOLUTIONS TAKE-OVER */}
        <StackedSolutionsSection />

        {/* SECTION 05 — OUR PRODUCTS (5 VERTICALLY STACKED CARDS) */}
        <OurProductsSection />

        {/* SECTION 05 — SOLUTIONS BY BUSINESS STAGE */}
        <TransformationJourney />

        {/* SECTION 05 — SOLUTION BUILDER */}
        <SolutionBuilder />

        {/* SECTION 06 — HOW SOLUTIONS CONNECT */}
        <SolutionEcosystem />

        {/* SECTION 07 — OUTCOMES */}
        <Outcomes />

        {/* SECTION 08 — CTA */}
        <SolutionsCTA />
      </main>

      <Footer />
    </div>
  );
}
