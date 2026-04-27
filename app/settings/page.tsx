'use client';

import { useState, useEffect } from 'react';
import { getProgress, updateSettings, resetProgress } from '@/lib/progress';
import { estimatedDueDate } from '@/lib/dates';
import { pushProgressToSupabase, pullProgressFromSupabase, mergeLocalWithCloud } from '@/lib/sync';
import { saveProgress } from '@/lib/progress';
import { requestNotificationPermission } from '@/lib/notifications';
import { useAuth } from '@/app/providers';
import type { UserProgress } from '@/types';

export default function SettingsPage() {
  const { user, loading: authLoading, signIn, signUp, signOut } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);

  // Profile fields
  const [eddInput, setEddInput] = useState('');
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [saved, setSaved] = useState(false);
  const [showReset, setShowReset] = useState(false);

  // Auth fields
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoaderLocal, setAuthLoaderLocal] = useState(false);

  // Sync state
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Notification fields
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [notifTime, setNotifTime] = useState('08:00');
  const [notifPermission, setNotifPermission] = useState<string>('default');

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    setEddInput(p.edd || '');
    setUserName(p.userName || '');
    setPartnerName(p.partnerName || '');
    setNotifEnabled(p.notificationsEnabled || false);
    setNotifTime(p.notificationTime || '08:00');

    if (typeof Notification !== 'undefined') {
      setNotifPermission(Notification.permission);
    }
  }, []);

  // After sign-in, sync from cloud
  useEffect(() => {
    if (user && progress) {
      setSyncing(true);
      pullProgressFromSupabase(user.id)
        .then((cloud) => {
          if (cloud) {
            const merged = mergeLocalWithCloud(progress, cloud);
            saveProgress(merged);
            setProgress(merged);
            setSyncMessage(`Synced — ${new Date().toLocaleTimeString()}`);
          }
        })
        .finally(() => setSyncing(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const handleSave = () => {
    const updated = updateSettings({
      edd: eddInput || null,
      userName,
      partnerName,
      disclaimerAccepted: true,
      notificationsEnabled: notifEnabled,
      notificationTime: notifTime || null,
    });
    setProgress(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);

    if (user) {
      pushProgressToSupabase(user.id, updated)
        .then(() => setSyncMessage(`Synced — ${new Date().toLocaleTimeString()}`))
        .catch(() => {});
    }
  };

  const handleAuth = async () => {
    setAuthError(null);
    setAuthLoaderLocal(true);
    const { error } = authMode === 'signin'
      ? await signIn(email, password)
      : await signUp(email, password);
    setAuthLoaderLocal(false);
    if (error) {
      setAuthError(error);
    } else {
      setEmail('');
      setPassword('');
      if (authMode === 'signup') {
        setAuthError('Check your email to confirm your account, then sign in.');
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setSyncMessage(null);
  };

  const handleNotifToggle = async (enabled: boolean) => {
    if (enabled && typeof Notification !== 'undefined') {
      const result = await requestNotificationPermission();
      setNotifPermission(result === 'granted' ? 'granted' : result === 'denied' ? 'denied' : 'default');
      if (result !== 'granted') {
        setNotifEnabled(false);
        return;
      }
    }
    setNotifEnabled(enabled);
  };

  const handleReset = () => {
    resetProgress();
    window.location.href = '/';
  };

  if (authLoading || !progress) {
    return <div className="p-6 text-center text-stone-400 text-sm">Loading...</div>;
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Settings</h1>
        <p className="text-sm text-stone-500 mt-1">Personalize your companion</p>
      </div>

      {/* Profile */}
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

      {/* Account & Sync */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-4">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Account & Sync</p>

          {user ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-stone-700">{user.email}</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {syncing ? 'Syncing...' : syncMessage || 'Data stored locally and in cloud'}
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-xs text-stone-500 border border-stone-200 px-3 py-1.5 rounded-full min-h-[44px] font-medium"
                >
                  Sign out
                </button>
              </div>
              <button
                onClick={() => {
                  if (!progress) return;
                  setSyncing(true);
                  pushProgressToSupabase(user.id, progress)
                    .then(() => setSyncMessage(`Synced — ${new Date().toLocaleTimeString()}`))
                    .catch(() => setSyncMessage('Sync failed'))
                    .finally(() => setSyncing(false));
                }}
                disabled={syncing}
                className="text-xs text-sage-600 font-medium"
              >
                {syncing ? 'Syncing...' : 'Sync now'}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-stone-500 leading-relaxed">
                Sign in to back up your progress and access it across devices. The app works fully without an account.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setAuthMode('signin')}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold border transition-all ${
                    authMode === 'signin' ? 'bg-sage-500 text-white border-sage-500' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold border transition-all ${
                    authMode === 'signup' ? 'bg-sage-500 text-white border-sage-500' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  Create account
                </button>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                autoComplete="email"
                className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-sage-400"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete={authMode === 'signup' ? 'new-password' : 'current-password'}
                className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-sage-400"
              />
              {authError && (
                <p className={`text-xs ${authError.includes('Check your email') ? 'text-sage-600' : 'text-rose-500'}`}>
                  {authError}
                </p>
              )}
              <button
                onClick={handleAuth}
                disabled={authLoaderLocal || !email || !password}
                className="w-full bg-sage-500 text-white py-3 rounded-full text-sm font-semibold disabled:opacity-50"
              >
                {authLoaderLocal ? 'Loading...' : authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Daily Reminders */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-4">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Daily Reminders</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-700">Enable check-in reminder</p>
                <p className="text-xs text-stone-400 mt-0.5">A gentle daily nudge for your pregnancy prep</p>
              </div>
              <button
                onClick={() => handleNotifToggle(!notifEnabled)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  notifEnabled ? 'bg-sage-500' : 'bg-stone-200'
                }`}
                role="switch"
                aria-checked={notifEnabled}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    notifEnabled ? 'translate-x-5.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {notifEnabled && notifPermission === 'granted' && (
              <div>
                <label className="text-xs text-stone-500 font-medium block mb-1">Reminder time</label>
                <input
                  type="time"
                  value={notifTime}
                  onChange={(e) => setNotifTime(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-sage-400"
                />
              </div>
            )}

            {notifEnabled && notifPermission === 'denied' && (
              <div className="bg-amber-50 rounded-xl p-3">
                <p className="text-xs text-amber-700">
                  Notifications are blocked in your browser settings. To enable, update permissions for this site in your browser.
                </p>
              </div>
            )}

            {notifEnabled && notifPermission !== 'denied' && typeof Notification === 'undefined' && (
              <div className="bg-stone-50 rounded-xl p-3">
                <p className="text-xs text-stone-500">
                  For reliable reminders, add this app to your home screen.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Medical disclaimer */}
      <div className="bg-stone-100 rounded-2xl p-4">
        <p className="text-xs font-semibold text-stone-500 mb-2">Medical Disclaimer</p>
        <p className="text-xs text-stone-500 leading-relaxed">
          This app provides general educational information only. It is not medical advice and does not replace
          care from your obstetrician, midwife, pediatrician, or other healthcare provider. All content is
          original and evidence-informed — it is not copied from copyrighted sources. Always follow your
          provider's specific guidance. In an emergency, call 911 or go to your nearest emergency room.
        </p>
      </div>

      {/* Data */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4 space-y-2">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Data</p>
        <p className="text-xs text-stone-500 leading-relaxed">
          {user
            ? 'Your data is stored on this device and backed up to your account.'
            : 'All your data is stored privately on this device. Sign in to back up to the cloud.'}
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
