export interface WeekData {
  week: number;
  theme: string;
  motherFocus: string;
  babyFocus: string;
  birthPrepFocus: string;
  partnerFocus: string;
  exercise: string;
  readingSuggestion: string;
  checklist: string[];
  dailyCards: DailyCardContent;
}

export interface DailyCardContent {
  learning: string;
  bodyCheckIn: string;
  birthPrep: string;
  partnerAction: string;
}

export interface PostpartumWeek {
  week: number;
  theme: string;
  recoveryFocus: string;
  feedingFocus: string;
  sleepFocus: string;
  mentalHealthCheck: string;
  partnerTask: string;
  appointments: string[];
  redFlags: string[];
}

export type LessonCategory =
  | 'body-changes'
  | 'labor-signs'
  | 'pain-coping'
  | 'interventions'
  | 'birth-preferences'
  | 'cesarean'
  | 'feeding'
  | 'newborn-care'
  | 'postpartum-recovery'
  | 'mental-health';

export interface Lesson {
  id: string;
  category: LessonCategory;
  title: string;
  estimatedMinutes: number;
  summary: string;
  keyTakeaways: string[];
  askYourProvider: string[];
  sourceCategory: string;
}

export type BadgeId =
  | 'third-trimester-start'
  | 'partner-practice'
  | 'birth-preferences-drafted'
  | 'hospital-bag-ready'
  | 'postpartum-plan-ready'
  | 'feeding-plan-ready';

export interface Badge {
  id: BadgeId;
  label: string;
  description: string;
  icon: string;
}

export type PracticeType =
  | 'breathing'
  | 'positions'
  | 'counterpressure'
  | 'support'
  | 'brain-framework'
  | 'postpartum-planning';

export interface PracticeStep {
  duration: string;
  instruction: string;
  partnerNote?: string;
}

export interface Practice {
  id: string;
  week: number | null;
  title: string;
  durationMinutes: number;
  type: PracticeType;
  intro: string;
  steps: PracticeStep[];
  closingNote: string;
}

export interface BirthPlanOption {
  value: string;
  label: string;
}

export interface BirthPlanSection {
  id: string;
  title: string;
  description: string;
  options: BirthPlanOption[];
  allowFreeText: boolean;
  freeTextPrompt?: string;
}

export interface UserProgress {
  edd: string | null;
  partnerName: string;
  userName: string;
  streak: number;
  lastCompletedDate: string | null;
  completedTasks: Record<string, boolean>;
  completedLessons: string[];
  completedPractices: string[];
  earnedBadges: BadgeId[];
  birthPlan: Record<string, { selected: string[]; freeText: string }>;
  postpartumStartDate: string | null;
  hospitalBagReady: boolean;
  postpartumPlanReady: boolean;
  feedingPlanReady: boolean;
  weeklyTasksCompleted: Record<string, number>;
  disclaimerAccepted: boolean;
}

export interface SafetyWarning {
  id: string;
  title: string;
  description: string;
  action: string;
}
