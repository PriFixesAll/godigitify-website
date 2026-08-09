'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer',
          // Variants
          variant === 'primary' &&
            'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] border border-indigo-400/30',
          variant === 'secondary' &&
            'bg-slate-900/80 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white backdrop-blur-sm',
          variant === 'glass' &&
            'bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:border-white/25 backdrop-blur-md shadow-lg',
          variant === 'ghost' &&
            'bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white',
          // Sizes
          size === 'sm' && 'px-4 py-2 text-xs gap-1.5',
          size === 'md' && 'px-5 py-2.5 text-sm gap-2',
          size === 'lg' && 'px-7 py-3.5 text-base gap-2.5',
          className
        )}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
