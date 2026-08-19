import React from 'react';
import { Metadata } from 'next';
import { SrijanCinematicHero } from '@/components/SrijanCinematicHero';

export const metadata: Metadata = {
  title: 'Srijan | Cinematic Animated Hero',
  description: 'Cinematic animated liquid light hero background with sharp white typography.',
};

export default function SrijanPage() {
  return (
    <main className="w-full min-h-screen bg-[#090000] overflow-hidden">
      <SrijanCinematicHero />
    </main>
  );
}
