'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProgress } from '@/lib/progress';
import { getBookmarks, toggleBookmark } from '@/lib/bookmarks';
import type { Bookmark, BookmarkItemType, UserProgress } from '@/types';

const TYPE_LABELS: Record<BookmarkItemType, string> = {
  lesson: 'Lesson',
  'roadmap-week': 'Roadmap Week',
  practice: 'Practice',
  'birth-plan-section': 'Birth Plan',
  'postpartum-week': 'Postpartum',
};

const TYPE_COLORS: Record<BookmarkItemType, string> = {
  lesson: 'bg-blue-100 text-blue-700',
  'roadmap-week': 'bg-sage-100 text-sage-700',
  practice: 'bg-rose-100 text-rose-700',
  'birth-plan-section': 'bg-amber-100 text-amber-700',
  'postpartum-week': 'bg-purple-100 text-purple-700',
};

const TYPE_LINKS: Record<BookmarkItemType, string> = {
  lesson: '/learn',
  'roadmap-week': '/roadmap',
  practice: '/practice',
  'birth-plan-section': '/birth-plan',
  'postpartum-week': '/postpartum',
};

export default function BookmarksPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!progress) return <div className="p-6 text-center text-stone-400 text-sm">Loading...</div>;

  const bookmarks = getBookmarks(progress);

  const grouped = bookmarks.reduce<Record<BookmarkItemType, Bookmark[]>>(
    (acc, b) => {
      if (!acc[b.itemType]) acc[b.itemType] = [];
      acc[b.itemType].push(b);
      return acc;
    },
    {} as Record<BookmarkItemType, Bookmark[]>
  );

  const handleRemove = (b: Bookmark) => {
    const updated = toggleBookmark(b.itemType, b.itemId, b.title);
    setProgress({ ...updated });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-stone-800">Saved</h1>
          <p className="text-sm text-stone-500 mt-0.5">
            {bookmarks.length === 0 ? 'Nothing saved yet' : `${bookmarks.length} item${bookmarks.length !== 1 ? 's' : ''} saved`}
          </p>
        </div>
      </div>

      {bookmarks.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <div className="text-4xl">🔖</div>
          <p className="text-stone-500 text-sm">
            Tap the bookmark icon on any lesson, week, or practice to save it here.
          </p>
          <Link
            href="/learn"
            className="inline-block text-sage-600 text-sm font-medium underline underline-offset-2"
          >
            Browse lessons
          </Link>
        </div>
      )}

      {(Object.keys(grouped) as BookmarkItemType[]).map((type) => (
        <div key={type} className="space-y-2">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide px-1">
            {TYPE_LABELS[type]}
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden divide-y divide-stone-50">
            {grouped[type].map((b) => (
              <div key={b.itemId} className="flex items-center gap-3 px-4 py-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${TYPE_COLORS[type]}`}>
                  {TYPE_LABELS[type]}
                </span>
                <Link href={TYPE_LINKS[type]} className="flex-1 min-w-0 text-sm text-stone-700 font-medium truncate">
                  {b.title}
                </Link>
                <button
                  onClick={() => handleRemove(b)}
                  className="flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 text-stone-400 hover:text-rose-500 transition-colors"
                  aria-label="Remove bookmark"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
