'use client';

import { supabase } from './supabase';
import type { UserProgress, BookmarkItemType } from '@/types';

export async function pushProgressToSupabase(userId: string, progress: UserProgress): Promise<void> {
  if (!supabase) return;

  const now = new Date().toISOString();

  await Promise.allSettled([
    supabase.from('settings').upsert({
      user_id: userId,
      due_date: progress.edd,
      notification_time: progress.notificationTime,
      updated_at: now,
    }, { onConflict: 'user_id' }),

    supabase.from('birth_plans').upsert({
      user_id: userId,
      answers: progress.birthPlan,
      updated_at: now,
    }, { onConflict: 'user_id' }),

    (async () => {
      await supabase!.from('bookmarks').delete().eq('user_id', userId);
      if (progress.bookmarks.length > 0) {
        await supabase!.from('bookmarks').insert(
          progress.bookmarks.map((b) => ({
            user_id: userId,
            item_type: b.itemType,
            item_id: b.itemId,
            title: b.title,
            created_at: b.createdAt,
          }))
        );
      }
    })(),

    supabase.from('user_progress').upsert(
      Object.entries(progress.completedTasks).map(([key, completed]) => ({
        user_id: userId,
        item_type: 'task',
        item_id: key,
        completed,
        updated_at: now,
      })),
      { onConflict: 'user_id,item_type,item_id' }
    ),
  ]);
}

export async function pullProgressFromSupabase(userId: string): Promise<Partial<UserProgress> | null> {
  if (!supabase) return null;

  const [settingsRes, birthPlanRes, bookmarksRes] = await Promise.all([
    supabase.from('settings').select('*').eq('user_id', userId).single(),
    supabase.from('birth_plans').select('*').eq('user_id', userId).single(),
    supabase.from('bookmarks').select('*').eq('user_id', userId),
  ]);

  const partial: Partial<UserProgress> = {};

  if (settingsRes.data) {
    if (settingsRes.data.due_date) partial.edd = settingsRes.data.due_date;
    if (settingsRes.data.notification_time) partial.notificationTime = settingsRes.data.notification_time;
  }

  if (birthPlanRes.data?.answers) {
    partial.birthPlan = birthPlanRes.data.answers;
  }

  if (bookmarksRes.data) {
    partial.bookmarks = bookmarksRes.data.map((b: {
      item_type: string;
      item_id: string;
      title: string;
      created_at: string;
    }) => ({
      itemType: b.item_type as BookmarkItemType,
      itemId: b.item_id,
      title: b.title,
      createdAt: b.created_at,
    }));
  }

  return Object.keys(partial).length > 0 ? partial : null;
}

export function mergeLocalWithCloud(
  local: UserProgress,
  cloud: Partial<UserProgress>
): UserProgress {
  const merged = { ...local };

  // Prefer cloud for birth plan (cloud is authoritative after first sync)
  if (cloud.birthPlan && Object.keys(cloud.birthPlan).length > 0) {
    merged.birthPlan = { ...local.birthPlan, ...cloud.birthPlan };
  }

  // Merge bookmarks (union, deduped by itemType+itemId)
  if (cloud.bookmarks) {
    const seen = new Set(local.bookmarks.map((b) => `${b.itemType}:${b.itemId}`));
    const newBookmarks = cloud.bookmarks.filter(
      (b) => !seen.has(`${b.itemType}:${b.itemId}`)
    );
    merged.bookmarks = [...local.bookmarks, ...newBookmarks];
  }

  // Cloud settings override if set
  if (cloud.edd) merged.edd = cloud.edd;
  if (cloud.notificationTime) merged.notificationTime = cloud.notificationTime;

  merged.lastSyncedAt = new Date().toISOString();
  return merged;
}
