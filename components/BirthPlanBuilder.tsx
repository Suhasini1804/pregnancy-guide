'use client';

import { useState, useEffect } from 'react';
import { getProgress, saveBirthPlanSection } from '@/lib/progress';
import type { UserProgress } from '@/types';

interface Section {
  id: string;
  title: string;
  description: string;
  options: { value: string; label: string }[];
  allowFreeText: boolean;
  freeTextPrompt?: string;
}

const sections: Section[] = [
  {
    id: 'environment',
    title: 'Labor Environment',
    description: 'What atmosphere and environment do you want during labor?',
    options: [
      { value: 'dim-lights', label: 'Dim or low lighting' },
      { value: 'quiet', label: 'Quiet or minimal noise' },
      { value: 'music', label: 'My own music playing' },
      { value: 'limited-interruptions', label: 'Minimal interruptions during contractions' },
      { value: 'freedom-move', label: 'Freedom to move around the room' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Anything else about your ideal environment?',
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    description: 'What are your current preferences for managing pain during labor?',
    options: [
      { value: 'no-epidural-prefer', label: 'I prefer to avoid an epidural if possible' },
      { value: 'open-to-epidural', label: 'I am open to an epidural when I decide I want one' },
      { value: 'epidural-planned', label: 'I plan to request an epidural early in active labor' },
      { value: 'water-immersion', label: 'I would like to labor in a tub or shower' },
      { value: 'birth-ball', label: 'I would like access to a birth ball' },
      { value: 'nitrous', label: 'I would like to know if nitrous oxide is available' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other notes about pain management?',
  },
  {
    id: 'movement-positions',
    title: 'Movement and Positions',
    description: 'How do you want to move and position during labor and pushing?',
    options: [
      { value: 'walk-during-labor', label: 'I want to walk and move freely during labor' },
      { value: 'hands-knees', label: 'I want access to hands-and-knees positions' },
      { value: 'squat-bar', label: 'I would like a squat bar if available' },
      { value: 'any-push-position', label: 'I want to push in positions besides flat on my back' },
      { value: 'guided-pushing', label: 'I am open to coached pushing cues from my care team' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any specific positions you want to try or avoid?',
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'What are your preferences for how your baby is monitored during labor?',
    options: [
      { value: 'intermittent-preferred', label: 'I prefer intermittent auscultation if eligible' },
      { value: 'wireless-monitor', label: 'I would like a wireless monitor to allow movement' },
      { value: 'continuous-ok', label: 'I am comfortable with continuous monitoring' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other notes about monitoring?',
  },
  {
    id: 'induction-augmentation',
    title: 'Induction and Augmentation',
    description: 'What are your preferences if labor needs to be started or supported?',
    options: [
      { value: 'discuss-before', label: 'I want to discuss all options before any augmentation' },
      { value: 'prefer-natural', label: 'I prefer natural labor progress before augmentation if safe' },
      { value: 'open-to-pitocin', label: 'I am open to Pitocin if recommended' },
      { value: 'membrane-sweep-ok', label: 'Membrane sweep is okay at late prenatal visits' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other notes on induction?',
  },
  {
    id: 'pushing',
    title: 'Pushing and Birth',
    description: 'What are your preferences for the pushing stage?',
    options: [
      { value: 'spontaneous-push', label: 'I prefer to push when I feel the urge (spontaneous pushing)' },
      { value: 'coached-ok', label: 'I am open to coached pushing if it helps' },
      { value: 'slow-crowning', label: 'I would like to slow down during crowning to reduce tearing' },
      { value: 'perineal-support', label: 'I welcome warm compresses and perineal support from my provider' },
      { value: 'no-episiotomy', label: 'I prefer to avoid episiotomy unless medically necessary' },
      { value: 'mirror', label: 'I would like a mirror to see the birth' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other preferences for pushing?',
  },
  {
    id: 'cesarean',
    title: 'If a Cesarean Is Needed',
    description: 'If a cesarean becomes necessary, what are your preferences?',
    options: [
      { value: 'partner-present', label: 'My partner should be present throughout the surgery' },
      { value: 'clear-drape', label: 'I would like a clear or lowered drape to see the birth' },
      { value: 'skin-to-skin-or', label: 'I want skin-to-skin in the OR if baby is stable' },
      { value: 'music-or', label: 'I would like calm music if possible' },
      { value: 'narrate-birth', label: 'I would like someone to narrate what is happening' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other cesarean preferences?',
  },
  {
    id: 'newborn-procedures',
    title: 'Newborn Procedures',
    description: 'What are your preferences for immediate newborn care?',
    options: [
      { value: 'delayed-cord', label: 'Delayed cord clamping (at least 60 seconds)' },
      { value: 'partner-cuts-cord', label: 'My partner would like to cut the cord' },
      { value: 'skin-to-skin', label: 'Immediate skin-to-skin with me if possible' },
      { value: 'delay-newborn-procedures', label: 'Delay routine newborn procedures (weighing, eye ointment) to allow skin-to-skin time' },
      { value: 'keep-baby-room', label: 'Baby stays with us as much as possible' },
      { value: 'vitamin-k', label: 'We consent to Vitamin K injection for our newborn' },
      { value: 'eye-drops', label: 'We consent to prophylactic eye drops' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other newborn care preferences?',
  },
  {
    id: 'feeding',
    title: 'Feeding',
    description: 'What are your feeding preferences for your newborn?',
    options: [
      { value: 'breastfeed-exclusive', label: 'I plan to breastfeed exclusively' },
      { value: 'breastfeed-supplement', label: 'I plan to breastfeed with possible supplementation' },
      { value: 'formula-feed', label: 'I plan to formula feed' },
      { value: 'combination', label: 'I plan combination feeding' },
      { value: 'no-pacifier', label: 'Please do not offer a pacifier without asking' },
      { value: 'no-formula-without-asking', label: 'Please do not offer formula without discussing with me first' },
      { value: 'lactation-consult', label: 'I would like to see a lactation consultant in the hospital' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other feeding notes?',
  },
  {
    id: 'visitors-postpartum',
    title: 'Visitors and Postpartum',
    description: 'What are your preferences for visitors and early postpartum time?',
    options: [
      { value: 'no-visitors-hospital', label: 'We prefer no visitors in the hospital' },
      { value: 'limited-visitors', label: 'We want to limit visitors to immediate family only' },
      { value: 'bonding-time', label: 'We need uninterrupted bonding time immediately after birth' },
      { value: 'private-feeding', label: 'We want privacy during feeding' },
      { value: 'photos-ok', label: 'We are okay with the care team taking photos of our baby' },
    ],
    allowFreeText: true,
    freeTextPrompt: 'Any other visitor or postpartum preferences?',
  },
];

export default function BirthPlanBuilder() {
  const [birthPlan, setBirthPlan] = useState<Record<string, { selected: string[]; freeText: string }>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const progress = getProgress();
    setBirthPlan(progress.birthPlan);
  }, []);

  const toggle = (sectionId: string, value: string) => {
    const current = birthPlan[sectionId] || { selected: [], freeText: '' };
    const selected = current.selected.includes(value)
      ? current.selected.filter((v) => v !== value)
      : [...current.selected, value];

    const updated = { ...current, selected };
    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, selected, current.freeText);
  };

  const updateFreeText = (sectionId: string, text: string) => {
    const current = birthPlan[sectionId] || { selected: [], freeText: '' };
    const updated = { ...current, freeText: text };
    const newPlan = { ...birthPlan, [sectionId]: updated };
    setBirthPlan(newPlan);
    saveBirthPlanSection(sectionId, current.selected, text);
  };

  const filledSections = sections.filter((s) => {
    const data = birthPlan[s.id];
    return data && (data.selected.length > 0 || data.freeText.trim().length > 0);
  }).length;

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-stone-700">Your Birth Preferences</p>
          <span className="text-xs text-stone-400">{filledSections} of {sections.length} sections</span>
        </div>
        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-400 rounded-full transition-all"
            style={{ width: `${(filledSections / sections.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-stone-400 mt-2 leading-relaxed">
          Tap each section to add your preferences. These are saved automatically. Use them to guide a conversation with your OB or midwife.
        </p>
      </div>

      {sections.map((section) => {
        const data = birthPlan[section.id] || { selected: [], freeText: '' };
        const hasContent = data.selected.length > 0 || data.freeText.trim().length > 0;
        const isOpen = activeSection === section.id;

        return (
          <div key={section.id} className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${hasContent ? 'border-sage-200' : 'border-stone-100'}`}>
            <button
              onClick={() => setActiveSection(isOpen ? null : section.id)}
              className="w-full text-left p-4 flex items-center gap-3"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${hasContent ? 'bg-sage-500' : 'bg-stone-100'}`}>
                {hasContent ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <span className="text-stone-400 text-xs font-bold">+</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-stone-800 text-sm">{section.title}</p>
                {hasContent && !isOpen && (
                  <p className="text-xs text-stone-400 mt-0.5">{data.selected.length} preference{data.selected.length !== 1 ? 's' : ''} noted</p>
                )}
              </div>
              <svg
                className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-3 border-t border-stone-50">
                <p className="text-sm text-stone-500 pt-3 leading-relaxed">{section.description}</p>
                <div className="space-y-2">
                  {section.options.map((opt) => {
                    const checked = data.selected.includes(opt.value);
                    return (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                          checked ? 'bg-sage-50 border border-sage-200' : 'bg-stone-50 border border-transparent'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all ${
                            checked ? 'bg-sage-500 border-sage-500' : 'border-stone-300'
                          }`}
                          onClick={() => toggle(section.id, opt.value)}
                        >
                          {checked && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-stone-700 leading-snug" onClick={() => toggle(section.id, opt.value)}>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>

                {section.allowFreeText && (
                  <div>
                    <p className="text-xs text-stone-400 mb-1.5">{section.freeTextPrompt}</p>
                    <textarea
                      className="w-full border border-stone-200 rounded-xl p-3 text-sm text-stone-700 placeholder-stone-300 resize-none focus:outline-none focus:border-sage-400"
                      rows={3}
                      placeholder="Add any notes..."
                      value={data.freeText}
                      onChange={(e) => updateFreeText(section.id, e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="bg-stone-50 rounded-2xl p-4">
        <p className="text-xs text-stone-500 leading-relaxed">
          Your birth preferences are a communication tool, not a contract. Circumstances during labor may require your care team to make recommendations that differ from your preferences. Discuss this document with your OB or midwife before labor so they understand what matters most to you.
        </p>
      </div>
    </div>
  );
}
