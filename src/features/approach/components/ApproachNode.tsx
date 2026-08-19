'use client';

import React from 'react';
import { Compass, Layers, Code2, TrendingUp } from 'lucide-react';
import { ApproachStage } from '../data/approach';

interface ApproachNodeProps {
  stage: ApproachStage;
  isActive: boolean;
  isMuted: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string, e: React.MouseEvent) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Code2,
  TrendingUp,
};

export function ApproachNode({
  stage,
  isActive,
  onHover,
  onClick,
}: ApproachNodeProps) {
  const IconComp = iconMap[stage.iconName] || Compass;

  return (
    <button
      type="button"
      style={{ left: `${50 + stage.x}%`, top: `${50 + stage.y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none z-30"
      onMouseEnter={() => onHover(stage.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => onClick(stage.id, e)}
    >
      <div className={`px-4 py-3 rounded-2xl flex items-center gap-3 ${isActive ? 'bg-[#0F172A] text-white' : 'bg-white text-[#0F172A]'}`}>
        <IconComp className="w-5 h-5 text-[#7C3AED]" />
        <span className="text-xs font-bold">{stage.title}</span>
      </div>
    </button>
  );
}
