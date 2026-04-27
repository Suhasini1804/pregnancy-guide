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

// ── V2: Bookmarks ────────────────────────────────────────────────────────────

export type BookmarkItemType =
  | 'lesson'
  | 'roadmap-week'
  | 'practice'
  | 'birth-plan-section'
  | 'postpartum-week';

export interface Bookmark {
  itemType: BookmarkItemType;
  itemId: string;
  title: string;
  createdAt: string;
}

// ── V2: Birth plan (richer state) ────────────────────────────────────────────

export type BirthPlanPriority = 'must-have' | 'prefer' | 'flexible';

export interface BirthPlanOptionState {
  selected: boolean;
  priority: BirthPlanPriority;
  notes: string;
}

export interface BirthPlanSectionState {
  selected: string[];
  optionStates: Record<string, BirthPlanOptionState>;
  freeText: string;
}

// ── V2: Birth plan section data shape (for data/birthPlanSections.ts) ────────

export interface BirthPlanSectionData {
  id: string;
  title: string;
  description: string;
  options: BirthPlanOption[];
  providerQuestions: string[];
}

// ── V2: Hospital bag ─────────────────────────────────────────────────────────

export type HospitalBagTiming = 'early' | 'week-36' | 'last-minute' | 'day-of';

export interface HospitalBagItem {
  id: string;
  category: string;
  label: string;
  timing: HospitalBagTiming;
}

// ── UserProgress ─────────────────────────────────────────────────────────────

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
  birthPlan: Record<string, BirthPlanSectionState>;
  postpartumStartDate: string | null;
  hospitalBagReady: boolean;
  postpartumPlanReady: boolean;
  feedingPlanReady: boolean;
  weeklyTasksCompleted: Record<string, number>;
  disclaimerAccepted: boolean;
  // V2
  bookmarks: Bookmark[];
  hospitalBagItems: Record<string, boolean>;
  hospitalBagNotes: Record<string, string>;
  notificationsEnabled: boolean;
  notificationTime: string | null;
  lastSyncedAt?: string;
}

export interface SafetyWarning {
  id: string;
  title: string;
  description: string;
  action: string;
}
