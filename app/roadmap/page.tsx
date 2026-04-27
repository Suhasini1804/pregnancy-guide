'use client';

import { useState, useEffect } from 'react';
import RoadmapCard from '@/components/RoadmapCard';
import { weekRoadmap } from '@/data/weekRoadmap';
import { getProgress } from '@/lib/progress';
import { isBookmarked } from '@/lib/bookmarks';
import { getWeekAndDayFromEDD } from '@/lib/dates';
import type { UserProgress } from '@/types';

export default function RoadmapPage() {
  const [currentWeek, setCurrentWeek] = useState<number | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    if (p.edd) {
      const { week } = getWeekAndDayFromEDD(p.edd);
      setCurrentWeek(week);
    }
  }, []);

  const handleBookmark = () => {
    setProgress(getProgress());
  };

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
            bookmarked={progress ? isBookmarked('roadmap-week', String(weekData.week), progress) : false}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
}
