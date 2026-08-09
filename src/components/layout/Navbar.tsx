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
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pointer-events-none">
      {/* 1. Far Left: Logo (Outside Navbar) */}
      <div className="pointer-events-auto shrink-0 flex items-center">
        <Logo showTagline={false} />
      </div>

      {/* 2. Center: Sleek Floating Glass Pill (Height 44px, Links Only Inside) */}
      <div className="pointer-events-auto hidden md:flex h-[44px] glass-header-neutral rounded-full px-6 sm:px-8 items-center justify-center shadow-sm transition-all duration-300">
        <nav className="flex items-center gap-7 text-[13.5px] font-medium text-[#1A1A1A]/85">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 transition-colors duration-200 hover:text-[#1A1A1A] group"
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

      {/* 3. Far Right: Small Circular Floating AI Icon Button (Outside Navbar, 42px) */}
      <div className="pointer-events-auto hidden sm:flex items-center shrink-0">
        <Link
          href="/ask-ai"
          className="w-[42px] h-[42px] rounded-full glass-circle-btn flex items-center justify-center text-[#1A1A1A] hover:text-[#4d286e] cursor-pointer shadow-sm"
          title="Ask AI"
          aria-label="Ask AI"
        >
          <Bot className="w-4 h-4 text-[#4d286e]" />
        </Link>
      </div>

      {/* Mobile Menu Button (Outside Navbar for Mobile Viewports) */}
      <div className="pointer-events-auto flex items-center gap-2 md:hidden">
        <Link
          href="/ask-ai"
          className="w-8 h-8 rounded-full glass-circle-btn flex items-center justify-center text-[#4d286e]"
        >
          <Bot className="w-4 h-4" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#1A1A1A]"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-14 left-6 right-6 glass-header-neutral rounded-2xl p-5 shadow-xl flex flex-col gap-3 md:hidden">
          <nav className="flex flex-col gap-2.5">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#4d286e] transition-colors py-1"
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
