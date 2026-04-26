import { differenceInDays, addDays } from 'date-fns';

export function getWeekAndDayFromEDD(edd: string): { week: number; day: number } {
  const eddDate = new Date(edd);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eddDate.setHours(0, 0, 0, 0);

  // EDD corresponds to 40w0d; work backwards
  const eddDaysFromConception = 40 * 7;
  const daysFromConception = eddDaysFromConception - differenceInDays(eddDate, today);

  const week = Math.floor(daysFromConception / 7);
  const day = daysFromConception % 7;

  return { week: Math.max(0, week), day: Math.max(0, day) };
}

export function isPostpartum(edd: string, postpartumStartDate: string | null): boolean {
  if (postpartumStartDate) return true;
  const { week } = getWeekAndDayFromEDD(edd);
  return week >= 40;
}

export function getPostpartumWeek(postpartumStartDate: string): number {
  const start = new Date(postpartumStartDate);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const days = differenceInDays(today, start);
  return Math.min(12, Math.max(0, Math.floor(days / 7)));
}

export function getTodayTaskKey(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

export function getWeeklyTaskKey(): string {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const week = Math.ceil(((today.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7);
  return `${today.getFullYear()}-W${String(week).padStart(2, '0')}`;
}

export function formatWeekLabel(week: number): string {
  if (week < 40) return `Week ${week}`;
  if (week === 40) return 'Week 40 — Due Week';
  return `Week ${week}`;
}

export function estimatedDueDate(edd: string): string {
  const date = new Date(edd);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
