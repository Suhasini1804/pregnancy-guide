'use client';

export async function requestNotificationPermission(): Promise<'granted' | 'denied' | 'unavailable'> {
  if (typeof Notification === 'undefined') return 'unavailable';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';

  const result = await Notification.requestPermission();
  return result === 'granted' ? 'granted' : 'denied';
}

export function showNotification(title: string, body: string) {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  new Notification(title, {
    body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
  });
}

export function scheduleLocalReminder(timeHHMM: string) {
  // Browser Notification API cannot schedule future notifications natively.
  // We use a simple check: store the desired time, and on app load / focus,
  // compare against current time to show the notification.
  // For a true background notification, the user must add the app to their home screen (PWA).
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem('pregnancy-guide-reminder-time', timeHHMM);
}

export function checkAndFireReminder() {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  const stored = localStorage.getItem('pregnancy-guide-reminder-time');
  if (!stored) return;

  const lastFired = localStorage.getItem('pregnancy-guide-reminder-last');
  const today = new Date().toISOString().slice(0, 10);
  if (lastFired === today) return; // already fired today

  const [hh, mm] = stored.split(':').map(Number);
  const now = new Date();
  if (now.getHours() === hh && now.getMinutes() >= mm) {
    showNotification(
      'Pregnancy Companion',
      "Today's 10-minute pregnancy prep is ready."
    );
    localStorage.setItem('pregnancy-guide-reminder-last', today);
  }
}
