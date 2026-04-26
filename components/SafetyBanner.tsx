'use client';

import { useState } from 'react';

const warnings = [
  {
    id: 'movement',
    title: 'Decreased Fetal Movement',
    description:
      'If your baby is moving less than usual or you haven\'t noticed movement in 2+ hours during an active period — contact your OB or go to L&D triage. Do not wait until the next day.',
    action: 'Call your OB or go to L&D triage',
  },
  {
    id: 'bleeding',
    title: 'Vaginal Bleeding',
    description:
      'Any significant vaginal bleeding during pregnancy — not light spotting after an exam — should be evaluated promptly.',
    action: 'Call your OB or go to L&D triage immediately',
  },
  {
    id: 'headache',
    title: 'Severe Headache or Vision Changes',
    description:
      'A severe headache that does not respond to acetaminophen, vision changes (spots, blurring, seeing lights), or headache with swelling can be signs of preeclampsia.',
    action: 'Call your OB immediately or go to L&D',
  },
  {
    id: 'abdominal',
    title: 'Severe Abdominal Pain',
    description:
      'Severe or persistent abdominal pain — different from normal round ligament or uterine pressure — should be evaluated.',
    action: 'Call your OB or go to L&D',
  },
  {
    id: 'preterm',
    title: 'Signs of Preterm Labor',
    description:
      'Before 37 weeks: regular cramping or contractions every 10 minutes or less, low back ache that comes and goes, pelvic pressure or feeling like baby is pushing down, or change in vaginal discharge.',
    action: 'Call your OB or go to L&D immediately',
  },
  {
    id: 'fluid',
    title: 'Leaking Fluid',
    description:
      'A gush or steady trickle of clear fluid that you cannot control may be amniotic fluid. Always contact your provider when you suspect your water has broken.',
    action: 'Call your OB or go to L&D',
  },
  {
    id: 'fever',
    title: 'Fever',
    description:
      'A temperature of 100.4°F (38°C) or higher during pregnancy or the postpartum period should always be evaluated.',
    action: 'Call your OB or go to L&D',
  },
  {
    id: 'chest',
    title: 'Chest Pain or Shortness of Breath',
    description:
      'Sudden chest pain, significant shortness of breath, or difficulty breathing that is new or unusual may indicate a serious condition.',
    action: 'Call 911 or go to the emergency room',
  },
  {
    id: 'pp-bleeding',
    title: 'Postpartum Heavy Bleeding',
    description:
      'Postpartum hemorrhage: soaking more than one pad per hour for two consecutive hours, or any sudden significant increase in bleeding after it had been lightening.',
    action: 'Call your OB or go to the emergency room immediately',
  },
  {
    id: 'pp-mood',
    title: 'Postpartum Mood Crisis',
    description:
      'Thoughts of harming yourself or your baby, feeling like your baby would be better off without you, severe inability to sleep or function, or hearing or seeing things that others don\'t.',
    action: 'Call your OB, a crisis line (988), or 911',
  },
];

export default function SafetyBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-50 w-11 h-11 rounded-full bg-terracotta text-white flex items-center justify-center shadow-lg text-lg font-bold"
        aria-label="When to call your provider"
        title="When to call your provider"
      >
        !
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-stone-100">
              <div>
                <h2 className="text-lg font-semibold text-stone-800">When to Call Your Provider</h2>
                <p className="text-xs text-stone-500 mt-0.5">Follow your OB or hospital's specific guidance</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-5 space-y-4">
              {warnings.map((w) => (
                <div key={w.id} className="bg-rose-50 rounded-2xl p-4">
                  <h3 className="font-semibold text-stone-800 text-sm mb-1">{w.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-2">{w.description}</p>
                  <p className="text-rose-700 text-xs font-semibold">{w.action}</p>
                </div>
              ))}

              <div className="bg-stone-100 rounded-2xl p-4 mt-4">
                <p className="text-stone-600 text-xs leading-relaxed">
                  <strong>Disclaimer:</strong> This app provides general educational information only. It is not
                  medical advice and does not replace care from your OB, midwife, pediatrician, or other
                  healthcare provider. Always follow your provider's specific guidance. In an emergency, call 911.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
