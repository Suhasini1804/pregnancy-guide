import Link from 'next/link';
import BirthPlanBuilder from '@/components/BirthPlanBuilder';

export default function BirthPlanPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-stone-800">Birth Preferences</h1>
          <p className="text-sm text-stone-500 mt-1">
            Select what resonates and add your own notes. Review with your OB or midwife.
          </p>
        </div>
        <Link
          href="/hospital-bag"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-100 text-stone-600 text-xs font-medium min-h-[44px] flex-shrink-0"
        >
          🎒 Bag
        </Link>
      </div>
      <BirthPlanBuilder />
    </div>
  );
}
