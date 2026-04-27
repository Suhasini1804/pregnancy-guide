'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import { lessons, lessonCategories } from '@/data/lessons';
import { getProgress } from '@/lib/progress';
import { isBookmarked } from '@/lib/bookmarks';
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
  const bookmarkCount = progress ? progress.bookmarks.filter((b) => b.itemType === 'lesson').length : 0;

  const handleComplete = (lessonId: string) => {
    if (!progress) return;
    setProgress((prev) =>
      prev
        ? { ...prev, completedLessons: [...new Set([...prev.completedLessons, lessonId])] }
        : prev
    );
  };

  const handleBookmark = () => {
    setProgress(getProgress());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-stone-800">Learning Library</h1>
          <p className="text-sm text-stone-500 mt-1">
            {completedCount} of {lessons.length} lessons read
          </p>
        </div>
        <Link
          href="/bookmarks"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-100 text-stone-600 text-xs font-medium min-h-[44px]"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
          Saved {bookmarkCount > 0 && `(${bookmarkCount})`}
        </Link>
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
            bookmarked={progress ? isBookmarked('lesson', lesson.id, progress) : false}
            onComplete={handleComplete}
            onBookmark={handleBookmark}
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
