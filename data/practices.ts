// Original content. Evidence-informed practices for labor preparation and postpartum readiness.
import type { Practice } from '@/types';

export const practices: Practice[] = [
  {
    id: 'practice-breathing',
    week: 30,
    title: 'Breathing Through Contractions',
    durationMinutes: 12,
    type: 'breathing',
    intro:
      'Slow, intentional breathing is one of the most accessible tools for managing labor sensations. This practice builds the muscle memory of calm breathing before you need it. Do this together — your partner breathes with you.',
    steps: [
      {
        duration: '2 minutes',
        instruction: 'Sit comfortably and close your eyes. Begin breathing naturally without changing anything. Just notice your breath.',
        partnerNote: 'Sit facing or beside your partner. Match their breathing rhythm.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Begin slow breathing: inhale for 4 counts through your nose, exhale for 6–7 counts through your mouth. Let your shoulders drop on the exhale.',
        partnerNote: 'Count quietly with your partner: "In 2-3-4, out 2-3-4-5-6." Keep your voice soft and steady.',
      },
      {
        duration: '4 minutes',
        instruction:
          'Simulate a contraction: tense your arm or thigh muscles gently for 30–45 seconds while continuing to breathe slowly. Practice staying in your breath rather than holding it.',
        partnerNote:
          'Time the "contraction." Say softly: "Halfway through" at the midpoint. Say "Release" at the end. Do not talk about anything else during this time.',
      },
      {
        duration: '2 minutes',
        instruction:
          'Between contractions, take 2–3 normal breaths, then relax completely. This recovery window matters — practice the release.',
        partnerNote: 'Model complete relaxation between contractions. Breathe naturally and stay calm.',
      },
      {
        duration: '1 minute',
        instruction: 'Open your eyes and check in. How did that feel? What was helpful? What was hard?',
        partnerNote: 'Ask: "What did you need from me during that — more or less verbal cues? Closer or more space?"',
      },
    ],
    closingNote:
      'Practice this 3–5 times before labor starts. The goal is not perfection — it is building a familiar pattern your body can return to.',
  },
  {
    id: 'practice-positions',
    week: 32,
    title: 'Labor Positions Practice',
    durationMinutes: 20,
    type: 'positions',
    intro:
      'Movement and position changes during labor support fetal descent, relieve pressure, and reduce pain. This practice session familiarizes both of you with the most useful positions before you need them.',
    steps: [
      {
        duration: '3 minutes',
        instruction:
          'Standing sway: Stand and sway side to side, shifting weight from foot to foot. Relax your hips fully. This is one of the most instinctive and effective early labor positions.',
        partnerNote: 'Stand behind and place both hands on your partner\'s hips. Sway gently with them or support their movement.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Walking with sway: Walk slowly in a figure-8 pattern, letting your hips move freely. Breathe through each practice breath.',
        partnerNote: 'Walk beside your partner with a hand at their lower back.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Hands and knees: Get on hands and knees on a yoga mat or carpet. Rock forward and back slowly, then side to side. This is highly effective for back labor.',
        partnerNote: 'Offer a pillow for your partner\'s knees. Ask if back pressure feels helpful from this position.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Leaning forward: Lean against a wall, the back of a sofa, or your partner\'s shoulders. Bend forward slightly from the hips. Rock or sway gently.',
        partnerNote: 'Stand stable and let your partner lean against you. Stay still and grounded.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Birth ball sitting: Sit on a birth ball (or firm chair) and circle your hips slowly. Lean forward with elbows on a surface if helpful.',
        partnerNote: 'Spot the ball with your feet to keep it stable. Offer to apply back pressure if desired.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Side lying: Lie on your left side with a pillow between your knees. This is a good rest position during active labor.',
        partnerNote: 'Adjust pillows. This is often when partners can offer a cool cloth on the forehead or neck.',
      },
      {
        duration: '2 minutes',
        instruction: 'Debrief: Which positions felt best? Which might be hard to get into during a real contraction? Make notes.',
        partnerNote: 'Note which positions your partner preferred. Write them on your labor support cheat sheet.',
      },
    ],
    closingNote:
      'You do not need to use all of these in labor. Knowing several options gives you flexibility when one stops working.',
  },
  {
    id: 'practice-counterpressure',
    week: 33,
    title: 'Counterpressure Practice',
    durationMinutes: 15,
    type: 'counterpressure',
    intro:
      'Counterpressure — applying firm, steady pressure to the lower back during contractions — is one of the most effective partner pain relief techniques, especially for back labor. Practice the technique now so it feels natural when you need it.',
    steps: [
      {
        duration: '3 minutes',
        instruction: 'Learn the anatomy: the sacrum is the triangular bone at the center of your lower back. This is where most back labor pain originates and where counterpressure is most effective.',
        partnerNote: 'Find your partner\'s sacrum — place your hand flat at the center of their lower back just above the tailbone.',
      },
      {
        duration: '4 minutes',
        instruction:
          'Assume a position that allows access to your lower back — standing leaning forward, hands-and-knees, or sitting leaning forward over a surface.',
        partnerNote:
          'Use the heel of your hand or a tennis ball. Apply firm, steady, downward pressure directly to the sacrum. Start with medium pressure and ask for feedback.',
      },
      {
        duration: '4 minutes',
        instruction:
          'Simulate a contraction (tense your muscles gently). Your partner applies counterpressure from the start to the end of the "contraction." Practice releasing the pressure gradually at the end.',
        partnerNote:
          'Ask during or after: "More pressure? Less? Higher or lower?" The exact right spot and pressure is different for everyone.',
      },
      {
        duration: '2 minutes',
        instruction:
          'Try hip squeeze: your partner places both palms on the outer sides of your hips and squeezes firmly inward. This can relieve pelvic pressure during contractions.',
        partnerNote:
          'Stand behind your partner. Place palms on the outer widest point of the hips and press firmly inward and slightly upward.',
      },
      {
        duration: '2 minutes',
        instruction:
          'Discuss: How did the pressure feel? What pressure level is "too much," "too little," and "just right"? Write this down for your labor notes.',
        partnerNote: 'Write down the preferred technique, pressure level, and position for your labor cheat sheet.',
      },
    ],
    closingNote:
      'During real labor your partner may want more or less pressure than this practice. Keep asking. No single technique works for everyone.',
  },
  {
    id: 'practice-support',
    week: 35,
    title: 'Full Labor Support Rehearsal',
    durationMinutes: 20,
    type: 'support',
    intro:
      'This practice brings everything together: breathing, positioning, counterpressure, and verbal support. Run through a simulated labor sequence so your partner builds confidence in the full support role.',
    steps: [
      {
        duration: '2 minutes',
        instruction: 'Set the scene: dim lights, familiar music on low, water nearby. Practice the environment you want during labor.',
        partnerNote: 'You set the environment. This is your job in early labor.',
      },
      {
        duration: '4 minutes',
        instruction:
          'Partner talks you through two simulated contractions. They give verbal cues, apply counterpressure, and support position changes during each one.',
        partnerNote:
          'Say: "Contraction starting. Breathe with me. In... and out... halfway there... last few seconds... and release. Good work." Then: "How are you doing? What do you need?"',
      },
      {
        duration: '4 minutes',
        instruction: 'Practice a position change between contractions. Move from standing to hands-and-knees without rushing.',
        partnerNote: 'Guide the position change. Say: "When you\'re ready, let\'s try hands-and-knees. Take your time." Support the movement.',
      },
      {
        duration: '4 minutes',
        instruction: 'Practice the rest interval: your partner offers water, adjusts pillows, and checks in quietly between contractions.',
        partnerNote: 'Offer water. Ask: "Cool cloth?" or "Do you want quiet or some music?" Practice anticipating needs without asking constantly.',
      },
      {
        duration: '4 minutes',
        instruction: 'Practice the BRAIN conversation: your partner brings you a hypothetical recommendation and you talk through it together using Benefits, Risks, Alternatives, Intuition, Next step.',
        partnerNote:
          'Say: "The nurse mentioned that the doctor wants to start Pitocin. Let\'s think through BRAIN." Walk through each letter together.',
      },
      {
        duration: '2 minutes',
        instruction: 'Full debrief: what worked, what felt uncomfortable, what do you want more or less of during real labor?',
        partnerNote: 'Write down 3 specific things your partner found helpful and 1 thing they want you to avoid.',
      },
    ],
    closingNote:
      'This practice is preparation, not prediction. Labor will unfold differently — your job is to stay present and responsive.',
  },
  {
    id: 'practice-brain',
    week: 32,
    title: 'Decision-Making with BRAIN',
    durationMinutes: 15,
    type: 'brain-framework',
    intro:
      'The BRAIN framework helps you evaluate recommendations calmly during labor or postpartum without panic or pressure. This practice runs you through several realistic scenarios so the framework becomes automatic before you need it.',
    steps: [
      {
        duration: '2 minutes',
        instruction: 'Review the five letters together: Benefits, Risks, Alternatives, Intuition, Nothing/Next step. Say them out loud twice.',
        partnerNote: 'You are the advocate. Your job is to buy thinking time and walk through the letters when a decision comes up.',
      },
      {
        duration: '4 minutes',
        instruction:
          'Scenario 1: "Your baby\'s heart rate has been slightly lower than we\'d like. We\'d like to start continuous monitoring." Walk through BRAIN together.',
        partnerNote:
          'Ask: "Is this an emergency right now?" If no, say: "Can we have two minutes to talk privately?" Then: "What are the benefits of monitoring? The risks? Are there other options?"',
      },
      {
        duration: '4 minutes',
        instruction:
          'Scenario 2: "You\'ve been at 6 cm for 3 hours. We\'d like to recommend Pitocin to augment." Walk through BRAIN together. Use all five letters.',
        partnerNote:
          'Walk through each letter: B — speed up labor, reduce risk of infection. R — stronger contractions, possible cascade. A — position change, more time, walking. I — what is her gut saying? N — can we wait 30 minutes and reassess?',
      },
      {
        duration: '3 minutes',
        instruction:
          'Scenario 3 — postpartum: "Baby\'s bilirubin levels are elevated. The pediatrician is recommending phototherapy." Use BRAIN.',
        partnerNote: 'Note: some decisions are more urgent than others. The N question — "what if we do nothing?" — has different weight in emergency vs. elective situations.',
      },
      {
        duration: '2 minutes',
        instruction: 'Reflect: did BRAIN feel accessible and calm, or clunky and hard to remember under stress? What part needs more practice?',
        partnerNote: 'Ask: "If a nurse presents a recommendation quickly and I use BRAIN, will you feel supported by that or pressured?" Adjust your approach based on the answer.',
      },
    ],
    closingNote:
      'BRAIN is not about distrusting your care team — it is about making sure decisions feel considered rather than reactive.',
  },
  {
    id: 'practice-postpartum-plan',
    week: 36,
    title: 'Postpartum Planning Conversation',
    durationMinutes: 20,
    type: 'postpartum-planning',
    intro:
      'The postpartum period is often the least planned part of pregnancy. This conversation-based practice helps you and your partner align on support structures, expectations, and division of responsibility before you are in the thick of it.',
    steps: [
      {
        duration: '4 minutes',
        instruction:
          'Sleep logistics: Who takes which nighttime shift? What are the hand-off rules? Write down a loose plan, knowing you will adjust it in real life.',
        partnerNote: 'Propose a specific plan: "I can take midnight to 4am. You take 4am to 8am." Be concrete, not vague.',
      },
      {
        duration: '3 minutes',
        instruction:
          'First two weeks support: Who is coming to help? What is their role? What are your boundaries around visitors?',
        partnerNote:
          'Discuss specifically: "I\'d like [person] to come on day 3 to help with meals. I do not want overnight guests for the first week."',
      },
      {
        duration: '3 minutes',
        instruction:
          'Household tasks: Make a list of everything that needs to happen in the first two weeks (laundry, groceries, meals, dishes, dog walking). Assign responsibility.',
        partnerNote: 'Take ownership of everything on this list unless your partner specifically requests to handle something.',
      },
      {
        duration: '3 minutes',
        instruction:
          'Feeding plan: What are your feeding goals? What is the backup plan? Who is responsible for feeding support, lactation follow-up, or formula preparation?',
        partnerNote:
          'Ask: "What would feel most supportive from me around feeding? Sitting with you during feeds? Handling all other tasks? Looking up lactation consultants?"',
      },
      {
        duration: '3 minutes',
        instruction:
          'Mental health check-in: How will you both know if one of you is struggling beyond normal adjustment? What is the plan if that happens?',
        partnerNote:
          'Say: "If I notice you seem really low or disconnected for more than a couple of days, I will say something directly. Can we agree that we both ask the other person how they are really doing once a week?"',
      },
      {
        duration: '2 minutes',
        instruction:
          'What do you each need that you haven\'t said yet? Take one minute each to name one unspoken need or fear about the postpartum period.',
        partnerNote: 'Listen without solving. Just say: "Thank you for telling me that."',
      },
      {
        duration: '2 minutes',
        instruction: 'Write a one-sentence intention for the postpartum period from each of you. Keep it simple and real.',
        partnerNote: 'Examples: "I will ask for help before I hit my limit." "I will prioritize your rest over everything."',
      },
    ],
    closingNote:
      'Plans change the moment you bring a baby home. The goal is shared understanding, not a perfect script.',
  },
];
