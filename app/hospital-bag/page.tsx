'use client';

import { useState, useEffect } from 'react';
import { hospitalBagItems, bagCategories, timingLabels } from '@/data/hospitalBag';
import { getProgress, toggleHospitalBagItem, setHospitalBagItemNote, setHospitalBagReady } from '@/lib/progress';
import type { UserProgress } from '@/types';

export default function HospitalBagPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Labor Documents']));
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [noteValue, setNoteValue] = useState('');

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const handleToggleItem = (itemId: string) => {
    const updated = toggleHospitalBagItem(itemId);
    setProgress({ ...updated });
  };

  const handleSaveNote = (itemId: string) => {
    const updated = setHospitalBagItemNote(itemId, noteValue);
    setProgress({ ...updated });
    setEditingNote(null);
  };

  const handleMarkReady = () => {
    if (!progress) return;
    const updated = setHospitalBagReady(!progress.hospitalBagReady);
    setProgress({ ...updated });
  };

  if (!progress) return <div className="p-6 text-center text-stone-400 text-sm">Loading...</div>;

  const totalItems = hospitalBagItems.length;
  const packedItems = hospitalBagItems.filter((item) => progress.hospitalBagItems[item.id]).length;
  const packedPercent = Math.round((packedItems / totalItems) * 100);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Hospital Bag</h1>
        <p className="text-sm text-stone-500 mt-0.5">
          {packedItems} of {totalItems} items packed
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-stone-700">Packing Progress</p>
          <span className="text-sm font-bold text-sage-600">{packedPercent}%</span>
        </div>
        <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-400 rounded-full transition-all"
            style={{ width: `${packedPercent}%` }}
          />
        </div>
        <button
          onClick={handleMarkReady}
          className={`mt-3 w-full py-2.5 rounded-full text-sm font-semibold border transition-all ${
            progress.hospitalBagReady
              ? 'bg-sage-500 text-white border-sage-500'
              : 'border-stone-200 text-stone-600'
          }`}
        >
          {progress.hospitalBagReady ? '🎒 Bag is Ready!' : 'Mark Bag as Ready'}
        </button>
      </div>

      {/* Categories */}
      {bagCategories.map((category) => {
        const items = hospitalBagItems.filter((i) => i.category === category);
        const packedInCat = items.filter((i) => progress.hospitalBagItems[i.id]).length;
        const isOpen = expandedCategories.has(category);

        return (
          <div key={category} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 flex items-center gap-3 min-h-[56px]"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                packedInCat === items.length ? 'bg-sage-500 text-white' : 'bg-stone-100 text-stone-500'
              }`}>
                {packedInCat === items.length ? '✓' : `${packedInCat}`}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-stone-800 text-sm">{category}</p>
                <p className="text-xs text-stone-400">{packedInCat} of {items.length} packed</p>
              </div>
              <svg
                className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="border-t border-stone-50 divide-y divide-stone-50">
                {items.map((item) => {
                  const packed = !!progress.hospitalBagItems[item.id];
                  const note = progress.hospitalBagNotes[item.id] || '';
                  const isEditingThis = editingNote === item.id;

                  return (
                    <div key={item.id} className={`px-4 py-3 transition-colors ${packed ? 'bg-sage-50/40' : ''}`}>
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleToggleItem(item.id)}
                          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-all min-h-[44px] min-w-[44px] -ml-2 -my-2`}
                          aria-label={packed ? 'Mark unpacked' : 'Mark packed'}
                          aria-pressed={packed}
                        >
                          <span className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            packed ? 'bg-sage-500 border-sage-500' : 'border-stone-300'
                          }`}>
                            {packed && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            )}
                          </span>
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm leading-snug ${packed ? 'line-through text-stone-400' : 'text-stone-700'}`}>
                            {item.label}
                          </p>
                          <p className="text-xs text-stone-400 mt-0.5">{timingLabels[item.timing]}</p>

                          {note && !isEditingThis && (
                            <p className="text-xs text-stone-500 mt-1 italic">{note}</p>
                          )}

                          {isEditingThis ? (
                            <div className="mt-2 space-y-1.5">
                              <textarea
                                className="w-full border border-stone-200 rounded-lg px-2.5 py-2 text-xs text-stone-600 placeholder-stone-300 resize-none focus:outline-none focus:border-sage-300"
                                rows={2}
                                value={noteValue}
                                placeholder="Add a note (e.g. location, brand, reminder)..."
                                onChange={(e) => setNoteValue(e.target.value)}
                                autoFocus
                              />
                              {/* TODO: Add photo_url field here when Supabase storage is configured */}
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleSaveNote(item.id)}
                                  className="text-xs text-sage-600 font-semibold px-3 py-1 border border-sage-300 rounded-full"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingNote(null)}
                                  className="text-xs text-stone-400 px-3 py-1"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingNote(item.id);
                                setNoteValue(note);
                              }}
                              className="text-xs text-stone-400 mt-1 hover:text-stone-600 transition-colors min-h-[32px]"
                            >
                              {note ? 'Edit note' : '+ Add note'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div className="bg-stone-50 rounded-2xl p-4">
        <p className="text-xs text-stone-500 leading-relaxed">
          Pack time-sensitive items last (chargers, snacks, frozen items). Car seat should be installed and inspected before 36 weeks.
        </p>
      </div>
    </div>
  );
}
