'use client';

import { useState, useEffect } from 'react';
import { getProgress, updateSettings, resetProgress } from '@/lib/progress';
import { estimatedDueDate } from '@/lib/dates';
import type { UserProgress } from '@/types';

export default function SettingsPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [eddInput, setEddInput] = useState('');
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [saved, setSaved] = useState(false);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    setEddInput(p.edd || '');
    setUserName(p.userName || '');
    setPartnerName(p.partnerName || '');
  }, []);

  const handleSave = () => {
    const updated = updateSettings({
      edd: eddInput || null,
      userName,
      partnerName,
      disclaimerAccepted: true,
    });
    setProgress(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    resetProgress();
    window.location.href = '/';
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Settings</h1>
        <p className="text-sm text-stone-500 mt-1">Personalize your companion</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-4 border-b border-stone-50">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Your Profile</p>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-stone-500 font-medium block mb-1">Your name (optional)</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Maya"
                className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-sage-400"
              />
            </div>
            <div>
              <label className="text-xs text-stone-500 font-medium block mb-1">Partner's name (optional)</label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="e.g. Jordan"
                className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-sage-400"
              />
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Due Date</p>
          <div>
            <label className="text-xs text-stone-500 font-medium block mb-1">Estimated due date</label>
            <input
              type="date"
              value={eddInput}
              onChange={(e) => setEddInput(e.target.value)}
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-sage-400"
            />
            {eddInput && (
              <p className="text-xs text-stone-400 mt-1.5">
                EDD: {estimatedDueDate(eddInput)}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${
          saved ? 'bg-sage-400 text-white' : 'bg-sage-500 text-white'
        }`}
      >
        {saved ? 'Saved!' : 'Save Settings'}
      </button>

      <div className="bg-stone-100 rounded-2xl p-4">
        <p className="text-xs font-semibold text-stone-500 mb-2">Medical Disclaimer</p>
        <p className="text-xs text-stone-500 leading-relaxed">
          This app provides general educational information only. It is not medical advice and does not replace
          care from your obstetrician, midwife, pediatrician, or other healthcare provider. All content is
          original and evidence-informed — it is not copied from copyrighted sources. Always follow your
          provider's specific guidance. In an emergency, call 911 or go to your nearest emergency room.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4 space-y-2">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Data</p>
        <p className="text-xs text-stone-500 leading-relaxed">
          All your data — progress, birth preferences, and settings — is stored privately on this device only.
          Nothing is sent to any server.
        </p>
        <button
          onClick={() => setShowReset(true)}
          className="text-xs text-rose-500 font-medium"
        >
          Reset all data
        </button>
      </div>

      {showReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowReset(false)} />
          <div className="relative bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="font-semibold text-stone-800 mb-2">Reset all data?</h3>
            <p className="text-sm text-stone-500 mb-5">
              This will permanently delete all your progress, birth preferences, and settings from this device.
              This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowReset(false)}
                className="flex-1 border border-stone-200 text-stone-600 py-2.5 rounded-full text-sm font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-rose-500 text-white py-2.5 rounded-full text-sm font-semibold"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
