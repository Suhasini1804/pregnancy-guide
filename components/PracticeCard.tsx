'use client';

import { useState } from 'react';
import type { Practice } from '@/types';
import { markPracticeComplete } from '@/lib/progress';

interface PracticeCardProps {
  practice: Practice;
  completed: boolean;
  onComplete?: (id: string) => void;
}

export default function PracticeCard({ practice, completed, onComplete }: PracticeCardProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);

  const handleComplete = () => {
    markPracticeComplete(practice.id);
    onComplete?.(practice.id);
    setOpen(false);
    setStep(0);
    setStarted(false);
  };

  const typeColors: Record<string, string> = {
    breathing: 'bg-sky-50 text-sky-700',
    positions: 'bg-amber-50 text-amber-700',
    counterpressure: 'bg-rose-50 text-rose-700',
    support: 'bg-sage-50 text-sage-700',
    'brain-framework': 'bg-purple-50 text-purple-700',
    'postpartum-planning': 'bg-stone-100 text-stone-600',
  };

  const typeLabel: Record<string, string> = {
    breathing: 'Breathing',
    positions: 'Positions',
    counterpressure: 'Counterpressure',
    support: 'Labor Support',
    'brain-framework': 'Decision-Making',
    'postpartum-planning': 'Planning',
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
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[practice.type] || 'bg-stone-100 text-stone-500'}`}>
                {typeLabel[practice.type]}
              </span>
              {completed && (
                <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-medium">Done</span>
              )}
            </div>
            <p className="font-semibold text-stone-800 text-sm">{practice.title}</p>
            <p className="text-xs text-stone-500 mt-1">~{practice.durationMinutes} minutes · For both of you</p>
          </div>
          <svg className="w-4 h-4 text-stone-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-stone-100">
              <div>
                <p className="text-xs text-stone-400 mb-0.5">~{practice.durationMinutes} min · Together</p>
                <h2 className="text-lg font-semibold text-stone-800">{practice.title}</h2>
              </div>
              <button onClick={() => { setOpen(false); setStep(0); setStarted(false); }} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500">✕</button>
            </div>

            <div className="overflow-y-auto flex-1 p-5">
              {!started ? (
                <div className="space-y-4">
                  <p className="text-stone-600 text-sm leading-relaxed">{practice.intro}</p>
                  <div className="bg-stone-50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">Steps in this session</p>
                    <ul className="space-y-1">
                      {practice.steps.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                          <span className="text-xs text-sage-500 font-bold">{i + 1}.</span>
                          <span>{s.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setStarted(true)}
                    className="w-full bg-sage-500 text-white py-3 rounded-full text-sm font-semibold"
                  >
                    Start Practice
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {practice.steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all ${
                            i === step ? 'w-6 bg-sage-500' : i < step ? 'w-2 bg-sage-300' : 'w-2 bg-stone-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-stone-400">{step + 1} of {practice.steps.length}</span>
                  </div>

                  {practice.steps[step] && (
                    <div className="space-y-4">
                      <div className="bg-sage-50 rounded-2xl p-4">
                        <p className="text-xs font-semibold text-sage-600 mb-2">{practice.steps[step].duration}</p>
                        <p className="text-stone-700 text-sm leading-relaxed">{practice.steps[step].instruction}</p>
                      </div>

                      {practice.steps[step].partnerNote && (
                        <div className="bg-amber-50 rounded-2xl p-4">
                          <p className="text-xs font-semibold text-amber-600 mb-1.5">Partner note</p>
                          <p className="text-stone-600 text-sm leading-relaxed">{practice.steps[step].partnerNote}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-3">
                    {step > 0 && (
                      <button
                        onClick={() => setStep((s) => s - 1)}
                        className="flex-1 border border-stone-200 text-stone-600 py-3 rounded-full text-sm font-semibold"
                      >
                        Back
                      </button>
                    )}
                    {step < practice.steps.length - 1 ? (
                      <button
                        onClick={() => setStep((s) => s + 1)}
                        className="flex-1 bg-sage-500 text-white py-3 rounded-full text-sm font-semibold"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleComplete}
                        className="flex-1 bg-sage-500 text-white py-3 rounded-full text-sm font-semibold"
                      >
                        Complete Practice
                      </button>
                    )}
                  </div>

                  <div className="bg-stone-50 rounded-xl p-3">
                    <p className="text-xs text-stone-500 leading-relaxed">{practice.closingNote}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
