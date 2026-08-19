'use client';

import React from 'react';
import { ApproachStage } from '../data/approach';

interface ApproachCapabilitiesProps {
  stages: ApproachStage[];
  activeStageId: string | null;
}

export function ApproachCapabilities({
  stages,
  activeStageId,
}: ApproachCapabilitiesProps) {
  return (
    <>
      {stages.map((stage: ApproachStage) => (
        <React.Fragment key={`caps-${stage.id}`}>
          {stage.capabilities.map((cap: string, capIdx: number) => {
            const isParentActive = activeStageId === stage.id;
            return (
              <div
                key={`cap-${stage.id}-${capIdx}`}
                className={`absolute text-xs px-3 py-1 rounded-full ${
                  isParentActive ? 'bg-[#F3E8FF] text-[#7C3AED]' : 'bg-white/80 text-slate-500'
                }`}
              >
                {cap}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
}
