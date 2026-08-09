import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/features/hero/components/HeroSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f8f7fc] text-slate-900 font-sans selection:bg-purple-500/20">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
