'use client';

import type { UserProgress, BadgeId } from '@/types';
import { getTodayTaskKey, getWeeklyTaskKey } from './dates';

const STORAGE_KEY = 'pregnancy-guide-progress';

const defaultProgress: UserProgress = {
  edd: null,
  partnerName: '',
  userName: '',
  streak: 0,
  lastCompletedDate: null,
  completedTasks: {},
  completedLessons: [],
  completedPractices: [],
  earnedBadges: [],
  birthPlan: {},
  postpartumStartDate: null,
  hospitalBagReady: false,
  postpartumPlanReady: false,
  feedingPlanReady: false,
  weeklyTasksCompleted: {},
  disclaimerAccepted: false,
};

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markTaskComplete(taskId: string): UserProgress {
  let progress = getProgress();
  const todayKey = getTodayTaskKey();
  const weekKey = getWeeklyTaskKey();

  const fullTaskKey = `${todayKey}:${taskId}`;
  if (progress.completedTasks[fullTaskKey]) return progress;

  progress.completedTasks[fullTaskKey] = true;

  // update weekly count
  progress.weeklyTasksCompleted[weekKey] = (progress.weeklyTasksCompleted[weekKey] || 0) + 1;

  // update streak
  if (progress.lastCompletedDate !== todayKey) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

    if (progress.lastCompletedDate === yesterdayKey) {
      progress.streak += 1;
    } else if (progress.lastCompletedDate !== todayKey) {
      progress.streak = 1;
    }
    progress.lastCompletedDate = todayKey;
  }

  // first badge: starting the journey
  if (!progress.earnedBadges.includes('third-trimester-start')) {
    progress.earnedBadges.push('third-trimester-start');
  }

  progress = checkBadges(progress);
  saveProgress(progress);
  return progress;
}

export function isTaskCompleted(taskId: string, progress: UserProgress): boolean {
  const todayKey = getTodayTaskKey();
  return !!progress.completedTasks[`${todayKey}:${taskId}`];
}

export function markLessonComplete(lessonId: string): UserProgress {
  let progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  progress = checkBadges(progress);
  saveProgress(progress);
  return progress;
}

export function markPracticeComplete(practiceId: string): UserProgress {
  const progress = getProgress();
  if (!progress.completedPractices.includes(practiceId)) {
    progress.completedPractices.push(practiceId);
  }
  if (!progress.earnedBadges.includes('partner-practice')) {
    progress.earnedBadges.push('partner-practice');
  }
  saveProgress(progress);
  return progress;
}

export function saveBirthPlanSection(
  sectionId: string,
  selected: string[],
  freeText: string
): UserProgress {
  const progress = getProgress();
  progress.birthPlan[sectionId] = { selected, freeText };

  // award badge if at least 3 sections have content
  const filledSections = Object.values(progress.birthPlan).filter(
    (v) => v.selected.length > 0 || v.freeText.trim().length > 0
  );
  if (filledSections.length >= 3 && !progress.earnedBadges.includes('birth-preferences-drafted')) {
    progress.earnedBadges.push('birth-preferences-drafted');
  }

  saveProgress(progress);
  return progress;
}

export function setHospitalBagReady(ready: boolean): UserProgress {
  const progress = getProgress();
  progress.hospitalBagReady = ready;
  if (ready && !progress.earnedBadges.includes('hospital-bag-ready')) {
    progress.earnedBadges.push('hospital-bag-ready');
  }
  saveProgress(progress);
  return progress;
}

export function setPostpartumPlanReady(ready: boolean): UserProgress {
  const progress = getProgress();
  progress.postpartumPlanReady = ready;
  if (ready && !progress.earnedBadges.includes('postpartum-plan-ready')) {
    progress.earnedBadges.push('postpartum-plan-ready');
  }
  saveProgress(progress);
  return progress;
}

export function setFeedingPlanReady(ready: boolean): UserProgress {
  const progress = getProgress();
  progress.feedingPlanReady = ready;
  if (ready && !progress.earnedBadges.includes('feeding-plan-ready')) {
    progress.earnedBadges.push('feeding-plan-ready');
  }
  saveProgress(progress);
  return progress;
}

export function updateSettings(updates: Partial<Pick<UserProgress, 'edd' | 'userName' | 'partnerName' | 'postpartumStartDate' | 'disclaimerAccepted'>>): UserProgress {
  const progress = getProgress();
  Object.assign(progress, updates);
  saveProgress(progress);
  return progress;
}

export function getWeeklyCompletionPercent(progress: UserProgress, totalDailyTasks: number): number {
  const weekKey = getWeeklyTaskKey();
  const completed = progress.weeklyTasksCompleted[weekKey] || 0;
  const target = totalDailyTasks * 7;
  return Math.min(100, Math.round((completed / target) * 100));
}

function checkBadges(progress: UserProgress): UserProgress {
  if (
    progress.hospitalBagReady &&
    !progress.earnedBadges.includes('hospital-bag-ready')
  ) {
    progress.earnedBadges.push('hospital-bag-ready');
  }
  if (
    progress.postpartumPlanReady &&
    !progress.earnedBadges.includes('postpartum-plan-ready')
  ) {
    progress.earnedBadges.push('postpartum-plan-ready');
  }
  if (
    progress.feedingPlanReady &&
    !progress.earnedBadges.includes('feeding-plan-ready')
  ) {
    progress.earnedBadges.push('feeding-plan-ready');
  }
  return progress;
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
