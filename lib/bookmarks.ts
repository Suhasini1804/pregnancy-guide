'use client';

import type { Bookmark, BookmarkItemType, UserProgress } from '@/types';
import { getProgress, saveProgress } from './progress';

export function toggleBookmark(
  itemType: BookmarkItemType,
  itemId: string,
  title: string
): UserProgress {
  const progress = getProgress();
  const existing = progress.bookmarks.findIndex(
    (b) => b.itemType === itemType && b.itemId === itemId
  );

  if (existing !== -1) {
    progress.bookmarks.splice(existing, 1);
  } else {
    progress.bookmarks.push({ itemType, itemId, title, createdAt: new Date().toISOString() });
  }

  saveProgress(progress);
  return progress;
}

export function isBookmarked(
  itemType: BookmarkItemType,
  itemId: string,
  progress: UserProgress
): boolean {
  return progress.bookmarks.some((b) => b.itemType === itemType && b.itemId === itemId);
}

export function getBookmarks(progress: UserProgress): Bookmark[] {
  return [...progress.bookmarks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
