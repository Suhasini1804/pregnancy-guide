'use client';

import { useState } from 'react';
import type { Lesson } from '@/types';
import { markLessonComplete } from '@/lib/progress';

interface LessonCardProps {
  lesson: Lesson;
  completed: boolean;
  onComplete?: (lessonId: string) => void;
}

export default function LessonCard({ lesson, completed, onComplete }: LessonCardProps) {
  const [open, setOpen] = useState(false);

  const handleComplete = () => {
    markLessonComplete(lesson.id);
    onComplete?.(lesson.id);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`w-full text-left bg-white rounded-2xl shadow-sm border p-4 transition-all ${
          completed ? 'border-sage-200 opacity-75' : 'border-stone-100'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {completed && (
                <svg className="w-3.5 h-3.5 text-sage-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
              <p className="font-semibold text-stone-800 text-sm leading-snug">{lesson.title}</p>
            </div>
            <p className="text-xs text-stone-500">{lesson.estimatedMinutes} min read</p>
          </div>
          <svg className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-start justify-between p-5 border-b border-stone-100">
              <div className="flex-1 pr-4">
                <p className="text-xs text-stone-400 mb-1">{lesson.estimatedMinutes} min · {lesson.sourceCategory}</p>
                <h2 className="text-lg font-semibold text-stone-800 leading-snug">{lesson.title}</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-5 space-y-5">
              <p className="text-stone-600 text-sm leading-relaxed">{lesson.summary}</p>

              <div>
                <h3 className="font-semibold text-stone-800 text-sm mb-2">Key Takeaways</h3>
                <ul className="space-y-2">
                  {lesson.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-sage-500 flex-shrink-0 mt-0.5 font-bold">·</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4">
                <h3 className="font-semibold text-stone-800 text-sm mb-2">Ask Your Provider</h3>
                <ul className="space-y-2">
                  {lesson.askYourProvider.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-blue-400 flex-shrink-0">?</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 rounded-xl p-3">
                <p className="text-xs text-stone-400">
                  Source category: {lesson.sourceCategory}. This content is educational and not medical advice. Always discuss with your provider.
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-stone-100">
              {completed ? (
                <div className="flex items-center justify-center gap-2 text-sage-600 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Completed
                </div>
              ) : (
                <button
                  onClick={handleComplete}
                  className="w-full bg-sage-500 text-white py-3 rounded-full text-sm font-semibold"
                >
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
