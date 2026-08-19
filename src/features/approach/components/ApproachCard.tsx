'use client';

import React from 'react';
import { Compass, Layers, Code2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ApproachStage } from '../data/approach';

interface ApproachCardProps {
  stage: ApproachStage;
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
  onClick: (index: number, e: React.MouseEvent) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Code2,
  TrendingUp,
};

export function ApproachCard({
  stage,
  index,
  isActive,
  onHover,
  onClick,
}: ApproachCardProps) {
  const IconComp = iconMap[stage.iconName] || Compass;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Stage ${stage.number}: ${stage.title} — ${stage.tagline}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
      onClick={(e) => onClick(index, e)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(index, e as unknown as React.MouseEvent);
        }
      }}
      className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 border transition-all duration-500 flex flex-col justify-between cursor-pointer select-none z-20 ${
        isActive
          ? 'bg-white border-[#7C3AED]/50 shadow-[0_20px_40px_rgba(124,58,237,0.12)]'
          : 'bg-white/90 border-slate-200/80'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full bg-[#F3E8FF] text-[#7C3AED]">
            {stage.number}
          </span>
          <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center">
            <IconComp className="w-5.5 h-5.5" />
          </div>
        </div>
        <h3 className="text-xl font-extrabold tracking-tight font-cera mb-1.5 text-[#0F172A]">
          {stage.title}
        </h3>
        <p className="text-xs font-semibold text-slate-700 mb-3">{stage.tagline}</p>
        <p className="text-xs text-slate-500 font-normal leading-relaxed mb-6">{stage.description}</p>
      </div>

      <div className="pt-4 border-t border-slate-100 space-y-2">
        {stage.capabilities.map((cap: string, idx: number) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
            <span>{cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
