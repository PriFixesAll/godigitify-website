import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/features/contact/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | GoDigitify',
  description:
    'Get in touch with GoDigitify. Have questions or ready to transform your business with AI automation and digital systems? Reach out today.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#090D12] text-white font-sans selection:bg-[#7C3AED]/30 overflow-hidden">
      <Navbar />

      <main>
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
