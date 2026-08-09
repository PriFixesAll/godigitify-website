import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'glass';
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'glass',
  icon,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-300',
        variant === 'glass' &&
          'bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:border-indigo-400/50',
        variant === 'outline' &&
          'border border-slate-700 text-slate-300 hover:border-slate-500',
        variant === 'default' &&
          'bg-indigo-600/20 text-indigo-300 border border-indigo-500/20',
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center justify-center shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
