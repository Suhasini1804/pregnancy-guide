'use client';

interface BookmarkButtonProps {
  bookmarked: boolean;
  onToggle: () => void;
  label?: string;
  size?: 'sm' | 'md';
}

export default function BookmarkButton({ bookmarked, onToggle, label, size = 'md' }: BookmarkButtonProps) {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="flex items-center justify-center min-h-[44px] min-w-[44px] -m-2 rounded-full transition-colors hover:bg-stone-100"
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark'}
      aria-pressed={bookmarked}
    >
      <svg
        className={`${iconSize} transition-colors ${bookmarked ? 'fill-sage-500 stroke-sage-500' : 'fill-none stroke-stone-400'}`}
        viewBox="0 0 24 24"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
      {label && <span className="ml-1 text-xs text-stone-500">{label}</span>}
    </button>
  );
}
