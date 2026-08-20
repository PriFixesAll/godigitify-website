import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
  showTagline?: boolean;
  isDarkPage?: boolean;
}

export function Logo({ className = '', showTagline = false, isDarkPage = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      <div className="relative h-28 sm:h-34 lg:h-40 w-auto flex items-center justify-center shrink-0">
        <Image
          src="/godigitify_logo.png"
          alt="Godigitify — Let's Build Digital Trust"
          width={1000}
          height={540}
          priority
          className={`h-28 sm:h-34 lg:h-40 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
            isDarkPage
              ? 'brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]'
              : 'drop-shadow-sm'
          }`}
        />
      </div>
    </Link>
  );
}
