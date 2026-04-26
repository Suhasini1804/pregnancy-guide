'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DailyCard from './DailyCard';
import StreakWidget from './StreakWidget';
import BadgeDisplay from './BadgeDisplay';
import { getProgress, markTaskComplete, isTaskCompleted, getWeeklyCompletionPercent } from '@/lib/progress';
import { getWeekAndDayFromEDD, getPostpartumWeek, isPostpartum } from '@/lib/dates';
import { weekRoadmap } from '@/data/weekRoadmap';
import { postpartumRoadmap } from '@/data/postpartumRoadmap';
import type { UserProgress } from '@/types';

const DAILY_TASK_COUNT = 4;

export default function TodayDashboard() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!progress) return <div className="p-6 text-center text-stone-400 text-sm">Loading...</div>;

  if (!progress.edd) {
    return (
      <div className="p-6 text-center space-y-4">
        <div className="text-4xl">🌸</div>
        <h2 className="text-xl font-semibold text-stone-800">Welcome to your pregnancy companion</h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          To get started, add your estimated due date in Settings so we can personalize your daily guide.
        </p>
        <Link
          href="/settings"
          className="inline-block bg-sage-500 text-white px-6 py-3 rounded-full text-sm font-semibold"
        >
          Set Up Your Profile
        </Link>
      </div>
    );
  }

  const postpartum = isPostpartum(progress.edd, progress.postpartumStartDate);

  if (postpartum) {
    const ppWeek = progress.postpartumStartDate
      ? getPostpartumWeek(progress.postpartumStartDate)
      : 0;
    const ppData = postpartumRoadmap[Math.min(ppWeek, 12)];

    const tasks = [
      { id: 'recovery', label: 'Recovery Focus', emoji: '🌱', text: ppData.recoveryFocus.slice(0, 120) + '...' },
      { id: 'feeding', label: 'Feeding Today', emoji: '🍼', text: ppData.feedingFocus.slice(0, 120) + '...' },
      { id: 'sleep', label: 'Sleep & Rest', emoji: '💤', text: ppData.sleepFocus.slice(0, 120) + '...' },
      { id: 'partner', label: 'Partner Task', emoji: '🤝', text: ppData.partnerTask.slice(0, 120) + '...' },
    ];

    const weeklyPercent = getWeeklyCompletionPercent(progress, DAILY_TASK_COUNT);

    const handleComplete = (taskId: string) => {
      const updated = markTaskComplete(taskId);
      setProgress({ ...updated });
    };

    return (
      <div className="space-y-4 pb-2">
        <div className="bg-gradient-to-br from-dusty-blue to-sage-400 rounded-2xl p-5 text-white">
          <p className="text-sm opacity-80">Postpartum</p>
          <h1 className="text-2xl font-bold mt-1">Week {ppWeek}</h1>
          <p className="text-sm opacity-90 mt-1">{ppData.theme}</p>
        </div>

        <StreakWidget streak={progress.streak} weeklyPercent={weeklyPercent} />

        <div className="space-y-3">
          {tasks.map((task) => (
            <DailyCard
              key={task.id}
              id={task.id}
              label={task.label}
              emoji={task.emoji}
              text={task.text}
              completed={isTaskCompleted(task.id, progress)}
              onComplete={handleComplete}
            />
          ))}
        </div>

        {ppData.redFlags.length > 0 && (
          <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
            <p className="text-xs font-semibold text-rose-700 uppercase tracking-wide mb-2">Discuss with Your Provider</p>
            <ul className="space-y-1">
              {ppData.redFlags.slice(0, 3).map((flag, i) => (
                <li key={i} className="text-xs text-stone-600 flex gap-2">
                  <span className="text-rose-400 flex-shrink-0">•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <BadgeDisplay earnedBadges={progress.earnedBadges} />
      </div>
    );
  }

  const { week, day } = getWeekAndDayFromEDD(progress.edd);
  const clampedWeek = Math.min(40, Math.max(27, week));
  const weekData = weekRoadmap.find((w) => w.week === clampedWeek) || weekRoadmap[0];
  const weeklyPercent = getWeeklyCompletionPercent(progress, DAILY_TASK_COUNT);

  const tasks = [
    { id: 'learning', label: "Today's Learning", emoji: '📖', text: weekData.dailyCards.learning },
    { id: 'body-checkin', label: 'Body Check-In', emoji: '✨', text: weekData.dailyCards.bodyCheckIn },
    { id: 'birth-prep', label: 'Birth Prep', emoji: '🌊', text: weekData.dailyCards.birthPrep },
    { id: 'partner', label: 'Partner Action', emoji: '🤝', text: weekData.dailyCards.partnerAction },
  ];

  const handleComplete = (taskId: string) => {
    const updated = markTaskComplete(taskId);
    setProgress({ ...updated });
  };

  const weeksRemaining = Math.max(0, 40 - week);

  return (
    <div className="space-y-4 pb-2">
      <div className="bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl p-5 text-white">
        <p className="text-sm opacity-80">
          {weeksRemaining > 0 ? `${weeksRemaining} weeks until due date` : 'Due this week'}
        </p>
        <h1 className="text-2xl font-bold mt-1">
          Week {week}, Day {day}
        </h1>
        <p className="text-sm opacity-90 mt-1">{weekData.theme}</p>
      </div>

      <StreakWidget streak={progress.streak} weeklyPercent={weeklyPercent} />

      <div className="space-y-3">
        {tasks.map((task) => (
          <DailyCard
            key={task.id}
            id={task.id}
            label={task.label}
            emoji={task.emoji}
            text={task.text}
            completed={isTaskCompleted(task.id, progress)}
            onComplete={handleComplete}
          />
        ))}
      </div>

      <BadgeDisplay earnedBadges={progress.earnedBadges} />
    </div>
  );
}
