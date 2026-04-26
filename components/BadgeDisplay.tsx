import type { BadgeId } from '@/types';
import { badges } from '@/data/badges';

interface BadgeDisplayProps {
  earnedBadges: BadgeId[];
}

export default function BadgeDisplay({ earnedBadges }: BadgeDisplayProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-3">Your Milestones</p>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => {
          const earned = earnedBadges.includes(badge.id);
          return (
            <div
              key={badge.id}
              title={badge.description}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                earned
                  ? 'bg-sage-100 text-sage-800 border border-sage-200'
                  : 'bg-stone-100 text-stone-400 border border-stone-200 opacity-50 grayscale'
              }`}
            >
              <span className={earned ? '' : 'opacity-50'}>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
