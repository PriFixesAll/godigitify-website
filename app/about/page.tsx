import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/features/about/components/AboutHero';
import { MissionVisionValues } from '@/features/about/components/MissionVisionValues';
import { WhyPartner } from '@/features/about/components/WhyPartner';
import { LeadershipVision } from '@/features/about/components/LeadershipVision';
import { TeamGrid } from '@/features/about/components/TeamGrid';
import { AboutCTA } from '@/features/about/components/AboutCTA';

export const metadata: Metadata = {
  title: 'AI-Aligned Growth Systems Partner | GoDigitify',
  description:
    "GoDigitify is a digital growth systems partner that helps established companies move from effort-based tactics to predictable, scalable execution infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9FC] text-[#0F172A] font-sans selection:bg-[#7C3AED]/20 overflow-hidden select-none">
      <Navbar />

      <main className="pb-0">
        {/* HERO + METRICS */}
        <AboutHero />

        {/* MISSION, VISION, VALUES */}
        <MissionVisionValues />

        {/* WHY PARTNER WITH US */}
        <WhyPartner />

        {/* LEADERSHIP VISION (CEO ANKUR GILL) */}
        <LeadershipVision />

        {/* MEET OUR TEAM */}
        <TeamGrid />

        {/* READY TO MOVE FROM EFFORT TO INFRASTRUCTURE CTA */}
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
