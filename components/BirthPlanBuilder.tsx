'use client';

import { useState, useEffect } from 'react';
import { getProgress, saveBirthPlanSection } from '@/lib/progress';
import { birthPlanSections } from '@/data/birthPlanSections';
import type { BirthPlanSectionState, BirthPlanPriority, UserProgress } from '@/types';

const PRIORITY_LABELS: Record<BirthPlanPriority, string> = {
  'must-have': 'Must-have',
  prefer: 'Prefer',
  flexible: 'Flexible',
};

const PRIORITY_COLORS: Record<BirthPlanPriority, string> = {
  'must-have': 'bg-rose-100 text-rose-700 border-rose-200',
  prefer: 'bg-sage-100 text-sage-700 border-sage-200',
  flexible: 'bg-stone-100 text-stone-600 border-stone-200',
};

function emptySection(): BirthPlanSectionState {
  return { selected: [], optionStates: {}, freeText: '' };
}

export default function BirthPlanBuilder() {
  const [birthPlan, setBirthPlan] = useState<Record<string, BirthPlanSectionState>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showProviderQuestions, setShowProviderQuestions] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    setBirthPlan(p.birthPlan);
  }, []);

  const getSectionState = (sectionId: string): BirthPlanSectionState =>
    birthPlan[sectionId] || emptySection();

  const toggleOption = (sectionId: string, value: string) => {
    const current = getSectionState(sectionId);
    const optState = current.optionStates[value] || { selected: false, priority: 'prefer' as BirthPlanPriority, notes: '' };
    const nowSelected = !optState.selected;

    const updatedOptStates = {
      ...current.optionStates,
      [value]: { ...optState, selected: nowSelected },
    };
    const newSelected = nowSelected
      ? [...new Set([...current.selected, value])]
      : current.selected.filter((v) => v !== value);

    const updated: BirthPlanSectionState = {
      ...current,
      selected: newSelected,
      optionStates: updatedOptStates,
    };

    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, updated);
  };

  const setPriority = (sectionId: string, value: string, priority: BirthPlanPriority) => {
    const current = getSectionState(sectionId);
    const optState = current.optionStates[value] || { selected: true, priority: 'prefer' as BirthPlanPriority, notes: '' };
    const updated: BirthPlanSectionState = {
      ...current,
      optionStates: {
        ...current.optionStates,
        [value]: { ...optState, priority },
      },
    };
    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, updated);
  };

  const setOptionNotes = (sectionId: string, value: string, notes: string) => {
    const current = getSectionState(sectionId);
    const optState = current.optionStates[value] || { selected: true, priority: 'prefer' as BirthPlanPriority, notes: '' };
    const updated: BirthPlanSectionState = {
      ...current,
      optionStates: {
        ...current.optionStates,
        [value]: { ...optState, notes },
      },
    };
    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, updated);
  };

  const updateFreeText = (sectionId: string, text: string) => {
    const current = getSectionState(sectionId);
    const updated: BirthPlanSectionState = { ...current, freeText: text };
    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, updated);
  };

  const filledSections = birthPlanSections.filter((s) => {
    const data = getSectionState(s.id);
    return data.selected.length > 0 || data.freeText.trim().length > 0;
  }).length;

  const mustHaves = birthPlanSections.flatMap((s) => {
    const data = getSectionState(s.id);
    return s.options.filter((opt) => {
      const state = data.optionStates[opt.value];
      return state?.selected && state.priority === 'must-have';
    }).map((opt) => ({ section: s.title, label: opt.label }));
  });

  return (
    <div className="space-y-3">
      {/* Print view — hidden on screen, shown only when printing */}
      <PrintView progress={progress} birthPlan={birthPlan} mustHaves={mustHaves} />

      {/* Header */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-stone-700">Your Birth Preferences</p>
          <span className="text-xs text-stone-400">{filledSections} of {birthPlanSections.length} sections</span>
        </div>
        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-400 rounded-full transition-all"
            style={{ width: `${(filledSections / birthPlanSections.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
          Tap each section to add preferences. Mark each as <strong>must-have</strong>, <strong>prefer</strong>, or <strong>flexible</strong> to help your care team understand your priorities.
        </p>
        <button
          onClick={() => window.print()}
          className="mt-3 flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-xs font-semibold hover:bg-stone-200 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
          </svg>
          Print / Export Birth Plan
        </button>
      </div>

      {/* Sections */}
      {birthPlanSections.map((section) => {
        const data = getSectionState(section.id);
        const hasContent = data.selected.length > 0 || data.freeText.trim().length > 0;
        const isOpen = activeSection === section.id;

        return (
          <div key={section.id} className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${hasContent ? 'border-sage-200' : 'border-stone-100'}`}>
            <button
              onClick={() => setActiveSection(isOpen ? null : section.id)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 flex items-center gap-3 min-h-[56px]"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${hasContent ? 'bg-sage-500' : 'bg-stone-100'}`}>
                {hasContent ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <span className="text-stone-400 text-xs font-bold">+</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-stone-800 text-sm">{section.title}</p>
                {hasContent && !isOpen && (
                  <p className="text-xs text-stone-400 mt-0.5">
                    {data.selected.length} preference{data.selected.length !== 1 ? 's' : ''} noted
                    {mustHaves.some((m) => m.section === section.title) && (
                      <span className="ml-1 text-rose-500">· has must-haves</span>
                    )}
                  </p>
                )}
              </div>
              <svg
                className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-4 border-t border-stone-50">
                <p className="text-sm text-stone-500 pt-3 leading-relaxed">{section.description}</p>

                <div className="space-y-2">
                  {section.options.map((opt) => {
                    const optState = data.optionStates[opt.value];
                    const checked = data.selected.includes(opt.value);
                    const priority = optState?.priority || 'prefer';
                    const notes = optState?.notes || '';

                    return (
                      <div
                        key={opt.value}
                        className={`rounded-xl border transition-all ${
                          checked ? 'bg-sage-50 border-sage-200' : 'bg-stone-50 border-transparent'
                        }`}
                      >
                        <label className="flex items-start gap-3 p-3 cursor-pointer">
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                              checked ? 'bg-sage-500 border-sage-500' : 'border-stone-300'
                            }`}
                            onClick={() => toggleOption(section.id, opt.value)}
                          >
                            {checked && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-stone-700 leading-snug flex-1" onClick={() => toggleOption(section.id, opt.value)}>
                            {opt.label}
                          </span>
                        </label>

                        {checked && (
                          <div className="px-3 pb-3 space-y-2">
                            <div className="flex gap-1.5 flex-wrap">
                              {(['must-have', 'prefer', 'flexible'] as BirthPlanPriority[]).map((p) => (
                                <button
                                  key={p}
                                  onClick={() => setPriority(section.id, opt.value, p)}
                                  className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${
                                    priority === p
                                      ? PRIORITY_COLORS[p]
                                      : 'bg-white border-stone-200 text-stone-400'
                                  }`}
                                >
                                  {PRIORITY_LABELS[p]}
                                </button>
                              ))}
                            </div>
                            <textarea
                              className="w-full border border-stone-200 rounded-lg px-2.5 py-2 text-xs text-stone-600 placeholder-stone-300 resize-none focus:outline-none focus:border-sage-300"
                              rows={2}
                              placeholder="Optional notes for your care team..."
                              value={notes}
                              onChange={(e) => setOptionNotes(section.id, opt.value, e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <p className="text-xs text-stone-400 mb-1.5">Additional notes for this section</p>
                  <textarea
                    className="w-full border border-stone-200 rounded-xl p-3 text-sm text-stone-700 placeholder-stone-300 resize-none focus:outline-none focus:border-sage-400"
                    rows={2}
                    placeholder="Add any context or nuance..."
                    value={data.freeText}
                    onChange={(e) => updateFreeText(section.id, e.target.value)}
                  />
                </div>

                <button
                  onClick={() => setShowProviderQuestions(showProviderQuestions === section.id ? null : section.id)}
                  className="flex items-center gap-2 text-xs text-blue-600 font-medium"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                  {showProviderQuestions === section.id ? 'Hide' : 'Show'} questions to ask your provider
                </button>

                {showProviderQuestions === section.id && (
                  <div className="bg-blue-50 rounded-xl p-3 space-y-2">
                    <p className="text-xs font-semibold text-blue-700">Questions to Ask Your Provider</p>
                    {section.providerQuestions.map((q, i) => (
                      <p key={i} className="text-xs text-stone-600 flex gap-2">
                        <span className="text-blue-400 flex-shrink-0">?</span>
                        {q}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="bg-stone-50 rounded-2xl p-4">
        <p className="text-xs text-stone-500 leading-relaxed">
          Your birth preferences are a communication tool, not a contract. Circumstances may require your care team to make different recommendations. Discuss this document with your OB or midwife before labor.
        </p>
      </div>
    </div>
  );
}

function PrintView({
  progress,
  birthPlan,
  mustHaves,
}: {
  progress: UserProgress | null;
  birthPlan: Record<string, BirthPlanSectionState>;
  mustHaves: { section: string; label: string }[];
}) {
  return (
    <div className="hidden print:block print:text-black print:bg-white">
      <div className="print:p-8 space-y-6">
        <div className="border-b border-gray-300 pb-4">
          <h1 className="text-2xl font-bold">Birth Preferences</h1>
          {progress?.userName && <p className="text-sm mt-1">Prepared by: {progress.userName}</p>}
          {progress?.edd && <p className="text-sm">Due date: {progress.edd}</p>}
          {progress?.partnerName && <p className="text-sm">Support person: {progress.partnerName}</p>}
        </div>

        {mustHaves.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-2">Top Priorities (Must-Have)</h2>
            <ul className="list-disc list-inside space-y-1">
              {mustHaves.slice(0, 8).map((m, i) => (
                <li key={i} className="text-sm"><span className="font-medium">{m.section}:</span> {m.label}</li>
              ))}
            </ul>
          </div>
        )}

        {birthPlanSections.map((section) => {
          const data = birthPlan[section.id];
          if (!data || (data.selected.length === 0 && !data.freeText.trim())) return null;
          return (
            <div key={section.id}>
              <h2 className="text-base font-bold mb-1">{section.title}</h2>
              <ul className="space-y-1">
                {section.options
                  .filter((opt) => data.selected.includes(opt.value))
                  .map((opt) => {
                    const state = data.optionStates[opt.value];
                    return (
                      <li key={opt.value} className="text-sm">
                        <span className="text-gray-500 font-medium mr-1">
                          [{state?.priority === 'must-have' ? 'Must-have' : state?.priority === 'flexible' ? 'Flexible' : 'Prefer'}]
                        </span>
                        {opt.label}
                        {state?.notes && <span className="text-gray-500"> — {state.notes}</span>}
                      </li>
                    );
                  })}
              </ul>
              {data.freeText.trim() && (
                <p className="text-sm text-gray-600 mt-1 italic">{data.freeText}</p>
              )}
            </div>
          );
        })}

        <div className="border-t border-gray-300 pt-4 text-xs text-gray-500">
          <p>I understand that birth preferences may need to adapt based on the clinical situation. My goal is to communicate what matters most to me so my care team can support me as fully as possible.</p>
        </div>
      </div>
    </div>
  );
}
