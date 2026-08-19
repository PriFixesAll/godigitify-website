import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      <div className="relative h-28 sm:h-34 lg:h-40 w-auto flex items-center justify-center shrink-0">
        <Image
          src="/godigitify_logo.png"
          alt="Godigitify — Let's Build Digital Trust"
          width={1000}
          height={540}
          priority
          className="h-28 sm:h-34 lg:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
