'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { navigationConfig } from '@/config/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-3.5 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto pointer-events-none">
      {/* 1. Far Left: Logo (Outside Navbar) */}
      <div className="pointer-events-auto shrink-0 flex items-center">
        <Logo showTagline={false} />
      </div>

      {/* 2. Center: Sleek Floating Glass Pill (Height 38px, Links Only Inside) */}
      <div className="pointer-events-auto hidden md:flex h-[38px] glass-header-neutral rounded-full px-5 sm:px-7 items-center justify-center shadow-sm transition-all duration-300">
        <nav aria-label="Main Navigation" className="flex items-center gap-6 sm:gap-7 text-[13px] font-medium text-[#1A1A1A]/85">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-0.5 transition-colors duration-200 hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e] rounded group"
              >
                <span>{item.label}</span>
                {/* Subtle Hover & Active Indicator Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#4d286e] rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. Far Right: Small Circular Floating AI Icon Button (Outside Navbar, 38px) */}
      <div className="pointer-events-auto hidden sm:flex items-center shrink-0">
        <Link
          href="/ask-ai"
          className="w-[38px] h-[38px] rounded-full glass-circle-btn flex items-center justify-center text-[#1A1A1A] hover:text-[#4d286e] cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e]"
          title="Ask AI"
          aria-label="Ask AI Assistant"
        >
          <Bot className="w-3.5 h-3.5 text-[#4d286e]" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="pointer-events-auto flex items-center gap-2 md:hidden">
        <Link
          href="/ask-ai"
          className="w-8 h-8 rounded-full glass-circle-btn flex items-center justify-center text-[#4d286e]"
          aria-label="Ask AI"
        >
          <Bot className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e]"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="pointer-events-auto absolute top-14 left-4 right-4 glass-header-neutral rounded-2xl p-4 shadow-xl flex flex-col gap-2.5 md:hidden border border-white/80"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#4d286e] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d286e] rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
