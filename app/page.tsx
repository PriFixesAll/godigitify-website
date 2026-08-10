import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { ScaleSection } from '@/features/services/components/ScaleSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F6F2] text-[#1A1A1A] font-sans selection:bg-purple-500/20">
      <Navbar />
      <main>
        <HeroSection />
        <ScaleSection />
      </main>
    </div>
  );
}
