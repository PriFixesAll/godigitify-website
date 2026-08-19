'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ApproachStage } from '../data/approach';

interface ApproachContextPanelProps {
  activeStage: ApproachStage | null;
}

export function ApproachContextPanel({ activeStage }: ApproachContextPanelProps) {
  if (!activeStage) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[360px] bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-[#7C3AED]/30 shadow-xl pointer-events-none text-left">
      <span className="text-xs font-extrabold tracking-widest text-[#7C3AED] uppercase block mb-1">
        STAGE {activeStage.number} — {activeStage.title}
      </span>
      <h4 className="text-lg font-extrabold text-[#0F172A] mb-2">{activeStage.tagline}</h4>
      <p className="text-xs text-slate-600 mb-4">{activeStage.description}</p>
      <div className="space-y-1.5 pt-3 border-t border-slate-100">
        {activeStage.capabilities.map((cap: string, idx: number) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
            <span>{cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
