'use client';

import { useState, useEffect } from 'react';
import { postpartumRoadmap } from '@/data/postpartumRoadmap';
import { getProgress, updateSettings, setPostpartumPlanReady } from '@/lib/progress';
import { getPostpartumWeek } from '@/lib/dates';
import type { UserProgress } from '@/types';

export default function PostpartumPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    if (p.postpartumStartDate) {
      setExpandedWeek(getPostpartumWeek(p.postpartumStartDate));
    } else {
      setExpandedWeek(0);
    }
  }, []);

  const handleStartPostpartum = () => {
    const today = new Date().toISOString().split('T')[0];
    const updated = updateSettings({ postpartumStartDate: today });
    setProgress(updated);
  };

  const handleMarkPlanReady = () => {
    const updated = setPostpartumPlanReady(true);
    setProgress(updated);
  };

  const currentPPWeek = progress?.postpartumStartDate
    ? getPostpartumWeek(progress.postpartumStartDate)
    : null;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Postpartum Roadmap</h1>
        <p className="text-sm text-stone-500 mt-1">Weeks 0–12 after birth — the fourth trimester</p>
      </div>

      {!progress?.postpartumStartDate && (
        <div className="bg-dusty-blue-light/30 border border-dusty-blue rounded-2xl p-4 space-y-3">
          <p className="text-sm text-stone-700 font-medium">Using this before your baby arrives?</p>
          <p className="text-sm text-stone-600 leading-relaxed">
            You can browse the postpartum roadmap now to plan ahead. When your baby is born, tap the button below
            to start your postpartum tracker.
          </p>
          <button
            onClick={handleStartPostpartum}
            className="bg-dusty-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            My baby is here — start postpartum
          </button>
        </div>
      )}

      {currentPPWeek !== null && (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
          <p className="text-xs text-stone-400 uppercase tracking-wide font-semibold mb-1">Current</p>
          <p className="text-lg font-bold text-stone-800">Postpartum Week {currentPPWeek}</p>
        </div>
      )}

      {!progress?.postpartumPlanReady && (
        <button
          onClick={handleMarkPlanReady}
          className="w-full bg-white border border-sage-200 text-sage-700 py-3 rounded-2xl text-sm font-semibold"
        >
          Mark postpartum plan as ready 🌱
        </button>
      )}

      <div className="space-y-3">
        {postpartumRoadmap.map((weekData) => {
          const isCurrent = currentPPWeek === weekData.week;
          const isOpen = expandedWeek === weekData.week;

          return (
            <div
              key={weekData.week}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${isCurrent ? 'border-sage-300' : 'border-stone-100'}`}
            >
              <button
                onClick={() => setExpandedWeek(isOpen ? null : weekData.week)}
                className="w-full text-left p-4 flex items-center gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    isCurrent ? 'bg-sage-500 text-white' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  W{weekData.week}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-stone-800 text-sm">
                      {weekData.week === 0 ? 'First Days' : `Week ${weekData.week}`}
                    </p>
                    {isCurrent && (
                      <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 truncate">{weekData.theme}</p>
                </div>
                <svg
                  className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 space-y-3 border-t border-stone-50">
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <InfoBlock label="Recovery" text={weekData.recoveryFocus} color="rose" />
                    <InfoBlock label="Feeding" text={weekData.feedingFocus} color="amber" />
                    <InfoBlock label="Sleep" text={weekData.sleepFocus} color="sky" />
                    <InfoBlock label="Mental Health" text={weekData.mentalHealthCheck} color="purple" />
                  </div>

                  <div className="bg-sage-50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-sage-700 mb-1">Partner Task</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{weekData.partnerTask}</p>
                  </div>

                  {weekData.appointments.length > 0 && (
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Appointments</p>
                      <ul className="space-y-1">
                        {weekData.appointments.map((apt, i) => (
                          <li key={i} className="text-sm text-stone-600 flex gap-2">
                            <span className="text-blue-400 flex-shrink-0">◦</span>
                            {apt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {weekData.redFlags.length > 0 && (
                    <div className="bg-rose-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-2">Call Your Provider If</p>
                      <ul className="space-y-1">
                        {weekData.redFlags.map((flag, i) => (
                          <li key={i} className="text-xs text-stone-600 flex gap-2">
                            <span className="text-rose-400 flex-shrink-0">•</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InfoBlock({ label, text, color }: { label: string; text: string; color: string }) {
  const colors: Record<string, string> = {
    rose: 'bg-rose-50',
    amber: 'bg-amber-50',
    sky: 'bg-sky-50',
    purple: 'bg-purple-50',
  };
  return (
    <div className={`${colors[color] || 'bg-stone-50'} rounded-xl p-3`}>
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-xs text-stone-600 leading-relaxed line-clamp-4">{text}</p>
    </div>
  );
}
