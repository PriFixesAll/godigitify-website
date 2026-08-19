'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Bot,
  ChevronDown,
  Sparkles,
  Search,
  BarChart3,
  Zap,
  Code2,
  ArrowRight,
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { navigationConfig } from '@/config/navigation';

const richServicesSubmenu = [
  {
    title: 'Brand Strategy',
    description: 'Positioning, identity, messaging, GTM',
    href: '/services/dba/brand-systems',
    icon: Sparkles,
  },
  {
    title: 'SEO and Content',
    description: 'Organic traffic that compounds over time',
    href: '/services#marketing',
    icon: Search,
  },
  {
    title: 'Digital Marketing',
    description: 'Meta, Google, WhatsApp, UGC, Influencer and more',
    href: '/services#marketing',
    icon: BarChart3,
  },
  {
    title: 'AI Products and Tech',
    description: 'Chatbots, MVPs, automation workflows',
    href: '/services#product',
    icon: Zap,
  },
  {
    title: 'Tech Consulting',
    description: 'Fractional CTO, audits, architecture, team building',
    href: '/services#product',
    icon: Code2,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header className="fixed top-2 sm:top-3 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1536px] 2xl:max-w-[1680px] mx-auto pointer-events-none">
      {/* 1. Top-Left Corner: Logo aligned on exact same horizontal center line */}
      <div className="pointer-events-auto shrink-0 flex items-center h-10 sm:h-12">
        <Logo showTagline={false} />
      </div>

      {/* 2. Center: Compact Floating Glass Pill containing ONLY the navigation buttons — ON EXACT SAME HORIZONTAL LINE */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 pointer-events-auto hidden md:flex items-center justify-center transition-all duration-300 ease-out rounded-full ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(15,23,42,0.1)] px-5 py-2 sm:px-7 sm:py-2.5'
            : 'bg-white/50 backdrop-blur-md border border-white/80 shadow-sm px-5 py-2 sm:px-7 sm:py-2.5'
        }`}
        style={{
          WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(12px)',
          backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(12px)',
        }}
      >
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-semibold"
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
                  className="relative px-3.5 py-1 rounded-full text-sm sm:text-base font-semibold transition-colors duration-200 z-10 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                  style={{
                    color: isHovered ? '#7C3AED' : '#0F172A',
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isServices && (
                    <ChevronDown
                      className={`w-4 h-4 relative z-10 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#7C3AED]' : 'text-slate-600'
                      }`}
                    />
                  )}

                  {/* SIMPLE SLEEK PURPLE UNDERLINE HOVER ANIMATION */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover-line"
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#7C3AED] rounded-full z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>

                {/* SERVICES RICH DROPDOWN PANEL MATCHING REFERENCE IMAGE */}
                {isServices && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 pointer-events-auto"
                        onMouseEnter={() => handleMouseEnter('Services')}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* INVISIBLE HOVER BRIDGE PREVENTS GAP DROPOUT */}
                        <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

                        {/* FLOATING WHITE CARD WITH GODIGITIFY PURPLE THEME & COMPACT SIZING */}
                        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(15,23,42,0.14)] border border-slate-100/90 w-[280px] sm:w-[315px] flex flex-col gap-0.5 text-left">
                          {richServicesSubmenu.map((subItem, index) => {
                            const IconComp = subItem.icon;
                            return (
                              <motion.div
                                key={subItem.title}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: index * 0.03,
                                }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="group p-1.5 sm:p-2 rounded-xl hover:bg-purple-50/60 transition-colors flex items-start gap-2.5 cursor-pointer text-left w-full block"
                                >
                                  {/* GODIGITIFY BRAND PURPLE ICON BOX */}
                                  <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-[#E9D8F8] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] transition-all duration-200 mt-0.5">
                                    <IconComp className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="text-[13px] font-bold text-[#0F172A] tracking-tight group-hover:text-[#7C3AED] transition-colors leading-snug">
                                      {subItem.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}

                          {/* BOTTOM FOOTER BAR */}
                          <div className="border-t border-slate-100 pt-2 mt-0.5 px-2 flex items-center justify-between">
                            <Link
                              href="/services"
                              className="text-[11.5px] font-semibold text-slate-700 hover:text-[#7C3AED] transition-colors flex items-center gap-1.5 group"
                            >
                              <span>View all services</span>
                            </Link>
                            <Link
                              href="/services"
                              aria-label="View all services"
                              className="text-slate-400 group-hover:text-[#7C3AED] transition-colors"
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
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

      {/* 3. Top-Right Corner: Ask AI Icon Button OUTSIDE the floating navbar pill */}
      <div className="pointer-events-auto hidden sm:flex items-center shrink-0">
        <Link
          href="/ask-ai"
          className="w-[36px] h-[36px] rounded-full glass-circle-btn flex items-center justify-center text-[#1A1A1A] hover:text-[#7C3AED] cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
          title="Ask AI"
          aria-label="Ask AI Assistant"
        >
          <Bot className="w-4 h-4 text-[#7C3AED]" />
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
            className="pointer-events-auto absolute top-full left-4 right-4 mt-3 glass-header-neutral rounded-2xl p-4 shadow-xl flex flex-col gap-2 md:hidden border border-white/80"
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
                        {richServicesSubmenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-slate-700 hover:text-[#7C3AED] py-1.5 px-3 rounded-full bg-slate-100/60 block w-full text-left"
                          >
                            {subItem.title}
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
