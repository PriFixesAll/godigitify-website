'use client';

import React, { useState } from 'react';
import { approachStages, ApproachStage } from '../data/approach';
import { ApproachCard } from './ApproachCard';

export function OurApproach() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {approachStages.map((stage: ApproachStage, index: number) => (
        <ApproachCard
          key={stage.id}
          stage={stage}
          index={index}
          isActive={activeIndex === index}
          onHover={setActiveIndex}
          onClick={(idx) => setActiveIndex(idx)}
        />
      ))}
    </div>
  );
}
