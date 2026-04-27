'use client';

interface DailyCardProps {
  id: string;
  label: string;
  emoji: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
}

export default function DailyCard({ id, label, emoji, text, completed, onToggle }: DailyCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-sm border transition-all ${
        completed ? 'border-sage-200 bg-sage-50/30' : 'border-stone-100'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-xl mt-0.5 flex-shrink-0">{emoji}</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{label}</p>
          <p className={`text-sm text-stone-700 leading-relaxed ${completed ? 'line-through text-stone-400' : ''}`}>
            {text}
          </p>
        </div>
        <button
          onClick={() => onToggle(id)}
          className={`flex-shrink-0 flex items-center justify-center transition-all min-h-[44px] min-w-[44px] -mr-2 -my-2`}
          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
          aria-pressed={completed}
        >
          <span
            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
              completed
                ? 'bg-sage-500 border-sage-500 text-white'
                : 'border-stone-300 hover:border-sage-400'
            }`}
          >
            {completed && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
