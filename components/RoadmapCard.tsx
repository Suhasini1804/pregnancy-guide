'use client';

import { useState } from 'react';
import type { WeekData } from '@/types';
import { toggleBookmark } from '@/lib/bookmarks';
import BookmarkButton from './BookmarkButton';

interface RoadmapCardProps {
  weekData: WeekData;
  isCurrentWeek?: boolean;
  bookmarked?: boolean;
  onBookmark?: () => void;
}

export default function RoadmapCard({ weekData, isCurrentWeek, bookmarked = false, onBookmark }: RoadmapCardProps) {
  const [expanded, setExpanded] = useState(isCurrentWeek ?? false);
  const [localBookmarked, setLocalBookmarked] = useState(bookmarked);

  const handleBookmark = () => {
    toggleBookmark('roadmap-week', String(weekData.week), `Week ${weekData.week} — ${weekData.theme}`);
    setLocalBookmarked((v) => !v);
    onBookmark?.();
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${
        isCurrentWeek ? 'border-sage-300' : 'border-stone-100'
      }`}
    >
      <div className="flex items-center pr-2">
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex-1 text-left p-4 flex items-center gap-3 min-h-[56px] min-w-0"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
              isCurrentWeek ? 'bg-sage-500 text-white' : 'bg-stone-100 text-stone-500'
            }`}
          >
            {weekData.week}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-stone-800 text-sm">Week {weekData.week}</p>
              {isCurrentWeek && (
                <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
            <p className="text-xs text-stone-500 truncate">{weekData.theme}</p>
          </div>
          <svg
            className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </button>
        <BookmarkButton bookmarked={localBookmarked} onToggle={handleBookmark} size="sm" />
      </div>

      {expanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-stone-50">
          <div className="grid grid-cols-2 gap-3 pt-4">
            <FocusBlock label="Your Body" text={weekData.motherFocus} color="rose" />
            <FocusBlock label="Baby" text={weekData.babyFocus} color="sky" />
            <FocusBlock label="Birth Prep" text={weekData.birthPrepFocus} color="sage" />
            <FocusBlock label="Partner" text={weekData.partnerFocus} color="amber" />
          </div>

          <div className="bg-stone-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">Practice</p>
            <p className="text-sm text-stone-600">{weekData.exercise}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">Checklist</p>
            <ul className="space-y-1.5">
              {weekData.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-sage-500 flex-shrink-0 mt-0.5">◦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">Learn This Week</p>
            <p className="text-sm text-stone-600">{weekData.readingSuggestion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function FocusBlock({ label, text, color }: { label: string; text: string; color: string }) {
  const [expanded, setExpanded] = useState(false);

  const colors: Record<string, string> = {
    rose: 'bg-rose-50',
    sky: 'bg-sky-50',
    sage: 'bg-sage-50',
    amber: 'bg-amber-50',
  };

  return (
    <button
      onClick={() => setExpanded((v) => !v)}
      aria-expanded={expanded}
      className={`${colors[color] || 'bg-stone-50'} rounded-xl p-3 text-left w-full min-h-[44px]`}
    >
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-xs text-stone-600 leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}>{text}</p>
      <p className="text-xs text-sage-600 font-medium mt-1.5">{expanded ? 'Show less' : 'Read more'}</p>
    </button>
  );
}
