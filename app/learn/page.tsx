'use client';

import { useState, useEffect } from 'react';
import LessonCard from '@/components/LessonCard';
import { lessons, lessonCategories } from '@/data/lessons';
import { getProgress } from '@/lib/progress';
import type { LessonCategory, UserProgress } from '@/types';

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<LessonCategory | 'all'>('all');
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const filtered = activeCategory === 'all'
    ? lessons
    : lessons.filter((l) => l.category === activeCategory);

  const completedCount = progress ? lessons.filter((l) => progress.completedLessons.includes(l.id)).length : 0;

  const handleComplete = (lessonId: string) => {
    if (!progress) return;
    setProgress((prev) =>
      prev
        ? { ...prev, completedLessons: [...new Set([...prev.completedLessons, lessonId])] }
        : prev
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Learning Library</h1>
        <p className="text-sm text-stone-500 mt-1">
          {completedCount} of {lessons.length} lessons read
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        <CategoryPill
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          label="All"
          emoji="📚"
        />
        {lessonCategories.map((cat) => (
          <CategoryPill
            key={cat.id}
            active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id as LessonCategory)}
            label={cat.label}
            emoji={cat.emoji}
          />
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            completed={progress ? progress.completedLessons.includes(lesson.id) : false}
            onComplete={handleComplete}
          />
        ))}
      </div>

      <div className="bg-stone-100 rounded-2xl p-4">
        <p className="text-xs text-stone-500 leading-relaxed">
          All content is original and educational. Source categories are referenced for each lesson.
          This is not medical advice — always discuss with your OB, midwife, or other healthcare provider.
        </p>
      </div>
    </div>
  );
}

function CategoryPill({
  active,
  onClick,
  label,
  emoji,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  emoji: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium flex-shrink-0 transition-all ${
        active ? 'bg-sage-500 text-white' : 'bg-white border border-stone-200 text-stone-600'
      }`}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );
}
