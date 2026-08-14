'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { navigationConfig } from '@/config/navigation';

const servicesSubmenu = [
  { label: 'BRAND', href: '/services/dba/brand-systems' },
  { label: 'MARKETING', href: '/services#marketing' },
  { label: 'PRODUCT', href: '/services#product' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        setIsPastHero(heroRect.bottom <= 80);
      } else {
        setIsPastHero(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 150);
  };

  return (
    <header
      className={`fixed top-3.5 inset-x-0 z-50 flex h-12 items-center justify-between px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
        isPastHero
          ? '-translate-y-24 opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100 pointer-events-none'
      }`}
    >
      {/* 1. Far Left: Logo */}
      <div className="pointer-events-auto shrink-0 flex items-center">
        <Logo showTagline={false} />
      </div>

      {/* 2. Center: Sleek Floating Glass Pill (Height 34px, Compact Animated Nav) */}
      <div className="pointer-events-auto hidden md:flex h-[34px] glass-header-neutral rounded-full px-2.5 sm:px-3 items-center justify-center shadow-sm relative z-40">
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-0.5 sm:gap-1 text-[11.5px] font-medium"
          onMouseLeave={handleMouseLeave}
        >
          {navigationConfig.mainNav.map((item) => {
            const isHovered = hoveredNav === item.label;
            const isServices = item.label === 'Services';

            return (
              <div
                key={item.href}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <Link
                  href={item.href}
                  className="relative px-2.5 py-1 rounded-full text-[11.5px] font-medium transition-colors duration-200 z-10 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                  style={{
                    color: isHovered ? '#FFFFFF' : '#1A1A1A',
                  }}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* SHARED HOVER ACTIVE ANIMATED PILL HIGHLIGHT */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-[#4d2a71] rounded-full shadow-[0_4px_14px_rgba(77,42,113,0.35)] z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>

                {/* SERVICES INDIVIDUAL DROPDOWN PILLS WITH LEFT ALIGNMENT */}
                {isServices && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-2 z-50 pointer-events-auto"
                        onMouseEnter={() => handleMouseEnter('Services')}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* INVISIBLE HOVER BRIDGE PREVENTS GAP DROPOUT */}
                        <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

                        {/* STACK OF LEFT-ALIGNED COMPACT SUBMENU PILL BUTTONS (#4d2a71) WITH INCREASED GAP */}
                        <div className="flex flex-col items-start gap-2">
                          {servicesSubmenu.map((subItem, index) => (
                            <motion.div
                              key={subItem.label}
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{
                                duration: 0.22,
                                ease: [0.22, 1, 0.36, 1],
                                delay: index * 0.05,
                              }}
                            >
                              <Link
                                href={subItem.href}
                                className="block px-2.5 py-[3px] rounded-full text-[9.5px] font-medium tracking-wider text-white hover:text-[#0F172A] bg-gradient-to-br from-[#2D1A4A]/85 via-[#22133B]/80 to-[#180C2C]/85 backdrop-blur-md border border-[#7C3AED]/60 hover:bg-none hover:bg-white hover:border-[#7C3AED] hover:shadow-[0_4px_14px_rgba(124,58,237,0.35)] transition-all duration-300 ease-out whitespace-nowrap hover:scale-105 cursor-pointer"
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* 3. Far Right: Small Circular Floating AI Icon Button */}
      <div className="pointer-events-auto hidden sm:flex items-center shrink-0">
        <Link
          href="/ask-ai"
          className="w-[34px] h-[34px] rounded-full glass-circle-btn flex items-center justify-center text-[#1A1A1A] hover:text-[#7C3AED] cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
          title="Ask AI"
          aria-label="Ask AI Assistant"
        >
          <Bot className="w-3.5 h-3.5 text-[#7C3AED]" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="pointer-events-auto flex items-center gap-2 md:hidden">
        <Link
          href="/ask-ai"
          className="w-8 h-8 rounded-full glass-circle-btn flex items-center justify-center text-[#7C3AED]"
          aria-label="Ask AI"
        >
          <Bot className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-14 left-4 right-4 glass-header-neutral rounded-2xl p-4 shadow-xl flex flex-col gap-2 md:hidden border border-white/80"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {navigationConfig.mainNav.map((item) => {
                const isServices = item.label === 'Services';
                return (
                  <div key={item.href} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => !isServices && setIsOpen(false)}
                        className="text-sm font-semibold text-[#1A1A1A] hover:text-[#7C3AED] transition-colors py-1.5 px-3 rounded-full"
                      >
                        {item.label}
                      </Link>
                      {isServices && (
                        <button
                          onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
                          className="p-1.5 text-slate-600"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isServicesOpenMobile ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {isServices && isServicesOpenMobile && (
                      <div className="flex flex-col gap-1 items-start pl-4 pt-1 pb-2">
                        {servicesSubmenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-slate-700 hover:text-[#7C3AED] py-1 px-3 rounded-full bg-slate-100/60"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
