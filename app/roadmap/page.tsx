'use client';

import { useState, useEffect } from 'react';
import RoadmapCard from '@/components/RoadmapCard';
import { weekRoadmap } from '@/data/weekRoadmap';
import { getProgress } from '@/lib/progress';
import { getWeekAndDayFromEDD } from '@/lib/dates';

export default function RoadmapPage() {
  const [currentWeek, setCurrentWeek] = useState<number | null>(null);

  useEffect(() => {
    const progress = getProgress();
    if (progress.edd) {
      const { week } = getWeekAndDayFromEDD(progress.edd);
      setCurrentWeek(week);
    }
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Pregnancy Roadmap</h1>
        <p className="text-sm text-stone-500 mt-1">Weeks 27 through 40 — tap a week to expand</p>
      </div>

      <div className="space-y-3">
        {weekRoadmap.map((weekData) => (
          <RoadmapCard
            key={weekData.week}
            weekData={weekData}
            isCurrentWeek={currentWeek !== null && weekData.week === Math.min(40, Math.max(27, currentWeek))}
          />
        ))}
      </div>
    </div>
  );
}
