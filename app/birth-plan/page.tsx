import BirthPlanBuilder from '@/components/BirthPlanBuilder';

export default function BirthPlanPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-stone-800">Birth Preferences</h1>
        <p className="text-sm text-stone-500 mt-1">
          Select what resonates and add your own notes. Review with your OB or midwife.
        </p>
      </div>
      <BirthPlanBuilder />
    </div>
  );
}
