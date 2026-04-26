interface StreakWidgetProps {
  streak: number;
  weeklyPercent: number;
}

export default function StreakWidget({ streak, weeklyPercent }: StreakWidgetProps) {
  const circumference = 2 * Math.PI * 20;
  const dashOffset = circumference - (weeklyPercent / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔥</span>
        <div>
          <p className="text-2xl font-bold text-stone-800 leading-none">{streak}</p>
          <p className="text-xs text-stone-500">{streak === 1 ? 'day streak' : 'day streak'}</p>
        </div>
      </div>

      <div className="flex-1 h-px bg-stone-100" />

      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#e7e5e4" strokeWidth="4" />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#7D9B76"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-stone-700">
            {weeklyPercent}%
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold text-stone-700">This week</p>
          <p className="text-xs text-stone-500">complete</p>
        </div>
      </div>
    </div>
  );
}
