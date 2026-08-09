import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Precision SVG Logo Mark */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Far-left Purple Dot */}
        <circle cx="18" cy="60" r="14" fill="#4d286e" />

        {/* Outer Chevron Pill Body */}
        <path
          d="M42 22 L86 60 L42 98"
          stroke="#4d286e"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Translucent Overlap Shade */}
        <path
          d="M42 22 L86 60 L42 98"
          stroke="#6b389c"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>

      {/* Brand Typography (Only Godigitify™) */}
      <div className="flex items-baseline leading-none">
        <span className="text-[17px] font-bold text-[#1A1A1A] tracking-tight font-sans">
          Godigitify
        </span>
        <span className="text-[9px] font-extrabold text-[#1A1A1A] ml-0.5 align-super">
          TM
        </span>
      </div>
      {showTagline && (
        <span className="text-[9.5px] font-light text-[#582a72] tracking-wide mt-0.5 font-sans leading-none block">
          Let&apos;s Build Digital Trust
        </span>
      )}
    </Link>
  );
}
