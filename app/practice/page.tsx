'use client';

import { useState, useEffect } from 'react';
import PracticeCard from '@/components/PracticeCard';
import { practices } from '@/data/practices';
import { getProgress } from '@/lib/progress';
import type { UserProgress } from '@/types';

export default function PracticePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const completedCount = progress
    ? practices.filter((p) => progress.completedPractices.includes(p.id)).length
    : 0;

  const handleComplete = (id: string) => {
    setProgress((prev) =>
      prev
        ? { ...prev, completedPractices: [...new Set([...prev.completedPractices, id])] }
        : prev
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Couple Practice</h1>
        <p className="text-sm text-stone-500 mt-1">
          {completedCount} of {practices.length} sessions completed · 10–20 min each
        </p>
      </div>

      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-4">
        <p className="text-sm text-stone-600 leading-relaxed">
          These practices are designed for both of you. Find a quiet 15–20 minutes together — no perfection needed.
          Building familiarity with these techniques before labor makes them much easier to use in the moment.
        </p>
      </div>

      <div className="space-y-3">
        {practices.map((practice) => (
          <PracticeCard
            key={practice.id}
            practice={practice}
            completed={progress ? progress.completedPractices.includes(practice.id) : false}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}
