'use client';

import { useEffect, useState } from 'react';
import { checkAndFireReminder } from '@/lib/notifications';
import { getProgress } from '@/lib/progress';

export default function ReminderBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const p = getProgress();
    if (!p.notificationsEnabled) return;

    // Try to fire a scheduled reminder
    checkAndFireReminder();

    // Show in-app banner if notifications not available/granted
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="bg-sage-50 border border-sage-200 rounded-2xl p-3 flex items-center gap-3">
      <span className="text-lg flex-shrink-0">🌿</span>
      <p className="text-xs text-stone-600 leading-relaxed flex-1">
        Today's 10-minute pregnancy prep is ready. Add this app to your home screen for background reminders.
      </p>
      <button
        onClick={() => setShowBanner(false)}
        className="text-stone-400 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
