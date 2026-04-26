// Content is original and evidence-informed.
// Source categories: ACOG Postpartum Care, AAFP Fourth Trimester, Evidence Based Birth, Academy of Breastfeeding Medicine
import type { PostpartumWeek } from '@/types';

export const postpartumRoadmap: PostpartumWeek[] = [
  {
    week: 0,
    theme: 'The First Days',
    recoveryFocus:
      'Your body has just done extraordinary work. Blood loss, hormonal shifts, and physical healing begin immediately. Bleeding (lochia) is heavy and red in the first days — similar to a heavy period. Perineal swelling and soreness are expected whether you had a vaginal birth or cesarean.',
    feedingFocus:
      'Colostrum — the first milk — is available from the first feeding. It is small in volume and dense in nutrients and antibodies. Frequent feeding (8–12 times per 24 hours) signals your body to establish milk supply. Ask for a lactation consultant in the hospital.',
    sleepFocus:
      'Sleep in the hospital when your baby sleeps. Decline unnecessary visitors if it means more rest. Accept every offer of help with the baby so you can sleep in stretches longer than 2 hours.',
    mentalHealthCheck:
      'Emotional swings in the first 48–72 hours are very common and are sometimes called "baby blues." Tearfulness, emotional sensitivity, and overwhelm during this period are normal. Talk about how you are feeling — you do not have to be fine.',
    partnerTask:
      'Handle all non-feeding tasks in the hospital: getting the nurse, changing diapers, managing visitors, bringing food and water. Your job is to protect your partner\'s rest and recovery.',
    appointments: [
      'Newborn metabolic screening (state-mandated, done in hospital)',
      'Newborn hearing screening',
      'Discharge instructions from OB or midwife',
    ],
    redFlags: [
      'Soaking more than one pad per hour for two consecutive hours',
      'Fever above 100.4°F',
      'Foul-smelling vaginal discharge',
      'Signs of wound infection at incision or perineum',
      'Severe headache or vision changes',
      'Difficulty breathing or chest pain',
    ],
  },
  {
    week: 1,
    theme: 'Home, Healing, and Learning',
    recoveryFocus:
      'Lochia transitions from bright red to pinkish-brown this week. Afterpains (uterine cramping) are strongest in the first 2–3 days and intensify during breastfeeding as oxytocin contracts the uterus. This is normal and protective.',
    feedingFocus:
      'Milk "comes in" around days 2–5, bringing fuller, heavier breasts. Engorgement is common and temporary. Frequent feeding, hand expression, and cold compresses between feeds help. Nipple soreness with a shallow latch is common — ask for a lactation consult if pain is significant.',
    sleepFocus:
      'Sleep deprivation is real and cumulative. Prioritize one longer sleep per 24 hours (4+ hours) whenever possible by coordinating with your partner or a helper. Sleep deprivation affects mood, pain tolerance, and decision-making.',
    mentalHealthCheck:
      'Baby blues typically peak around day 3–5 and resolve within 2 weeks. If tearfulness, anxiety, or low mood persists beyond two weeks or feels severe, contact your provider — this is not weakness, it is a treatable medical condition.',
    partnerTask:
      'Protect sleep shifts: one person sleeps while the other handles the baby. Even 3–4 hour blocks of uninterrupted sleep make a significant difference. Do not both stay awake unless necessary.',
    appointments: [
      'Newborn pediatric visit within 48–72 hours of hospital discharge',
      'Lactation consultant follow-up if breastfeeding',
    ],
    redFlags: [
      'Fever above 100.4°F',
      'Increasing redness, warmth, or discharge at perineum or incision',
      'Pain that is worsening rather than improving',
      'Difficulty urinating or burning',
      'Leg pain or swelling (may indicate blood clot)',
    ],
  },
  {
    week: 2,
    theme: 'Finding a Rhythm',
    recoveryFocus:
      'Many people begin to feel slightly more mobile this week, though full recovery takes weeks to months. Perineal pain should be slowly improving. Cesarean incision care continues — avoid lifting anything heavier than your baby. Rest remains the priority.',
    feedingFocus:
      'Cluster feeding (very frequent, closely spaced feeds in the evening) is common and normal — it signals your body to increase supply. Watch for adequate wet diapers (6+ per day) and weight gain rather than counting minutes at the breast.',
    sleepFocus:
      'Begin identifying your baby\'s "drowsy but awake" window and try placing them down at that moment once per day — not as a strict routine yet, but as gentle observation and practice.',
    mentalHealthCheck:
      'Check in on your partner\'s mental health too. Partners can experience postpartum anxiety and depression at rates that are often under-recognized. Ask each other directly: "How are you really doing?"',
    partnerTask:
      'Take over all household tasks this week: laundry, dishes, meals, grocery orders. The postpartum person\'s job is to feed the baby, eat, drink water, and heal. Everything else is secondary.',
    appointments: ['Pediatric visit around 2 weeks for weight check and feeding assessment'],
    redFlags: [
      'Mastitis symptoms: breast redness, warmth, fever, flu-like aching',
      'Thoughts of harming yourself or your baby — call your provider immediately',
      'Persistent inability to sleep even when baby sleeps',
      'Severe anxiety or panic attacks',
    ],
  },
  {
    week: 3,
    theme: 'Recovery in Progress',
    recoveryFocus:
      'Lochia should now be light pink or yellow-white. If bleeding becomes red or heavy again, it often signals overdoing activity — rest more. Hormonal fluctuations continue to affect mood, hair texture, and skin.',
    feedingFocus:
      'If breastfeeding is going well, you may notice a more predictable feeding pattern emerging — though "predictable" at 3 weeks is loose. If you are struggling, reach out to a lactation consultant. Formula supplementation is a valid and supportive choice if needed.',
    sleepFocus:
      'Short daytime naps (20–30 minutes) are more restorative than longer ones at this stage because they avoid deep sleep cycles that increase grogginess. Try a nap when your longest sleep stretch allows.',
    mentalHealthCheck:
      'Notice your emotional response to your baby — do you feel connection, even if exhausted? Feelings of detachment that are persistent and distressing can be signs of postpartum depression and are worth discussing with your provider.',
    partnerTask:
      'Plan and prepare one nutritious meal per day that the postpartum person can eat easily and one-handed if needed — soups, grain bowls, sandwiches. Nutrition supports healing and milk supply.',
    appointments: [
      'Call your OB or midwife if you have any unresolved physical concerns',
      'IBCLC visit if breastfeeding concerns persist',
    ],
    redFlags: [
      'Heavy bleeding returning after it had lightened',
      'Fever or chills',
      'Wound reopening or increased discharge',
      'Racing heart, shortness of breath',
    ],
  },
  {
    week: 4,
    theme: 'One Month',
    recoveryFocus:
      'At four weeks, you are approximately halfway through the traditional "fourth trimester." Your uterus has returned close to its pre-pregnancy size. Vaginal discharge should now be minimal or absent. Constipation, hemorrhoids, and pelvic floor weakness may still be present.',
    feedingFocus:
      'Milk supply is becoming more established if you are breastfeeding — breasts may feel less full between feeds, which is normal and not a sign of low supply. Feed on demand and watch your baby\'s weight and output rather than breast softness.',
    sleepFocus:
      'Begin discussing a loose nighttime structure with your partner — who takes which shift, how to hand off. Even informal coordination improves sleep quality for both partners.',
    mentalHealthCheck:
      'The EPDS (Edinburgh Postnatal Depression Scale) is a brief questionnaire often used at postpartum visits. You can complete it at home and share results with your provider — it screens for both depression and anxiety.',
    partnerTask:
      'Schedule a dedicated one-hour break for the postpartum person this week — where they leave the home or have uninterrupted time alone. Return to full baby responsibility when they return.',
    appointments: ['Some providers schedule a 4-week check — confirm with your OB or midwife'],
    redFlags: [
      'Persistent or worsening sadness, anxiety, or irritability beyond two weeks',
      'Difficulty bonding with or caring for your baby',
      'Thoughts of harming yourself — call your provider, a crisis line, or 911',
    ],
  },
  {
    week: 5,
    theme: 'Moving Through It',
    recoveryFocus:
      'If you had a cesarean, your external incision is healing but internal healing continues for 6–8 weeks. Avoid heavy lifting. Vaginal birth recovery varies widely — some people feel nearly normal, others are still managing significant pain or pelvic floor symptoms.',
    feedingFocus:
      'Growth spurts are common around 4–6 weeks — your baby may feed constantly for 1–2 days. This is supply regulation, not inadequate milk. Offer the breast frequently and trust the process.',
    sleepFocus:
      'Cumulative sleep debt at this stage is significant. If you have family or friends offering help, direct them specifically to baby care shifts so you can sleep — vague offers of "help" often result in company, not rest.',
    mentalHealthCheck:
      'Anger and irritability are underrecognized symptoms of postpartum depression. If you notice frequent anger, rage, or feeling "not yourself" — not just tired — please mention it to your provider.',
    partnerTask:
      'Check in: is your partner getting any time that is just theirs? Even 20 minutes of a shower without interruption, a walk alone, or quiet time with headphones matters for mental health.',
    appointments: ['Pediatric visit around 1 month for vaccines and weight check'],
    redFlags: [
      'Inability to eat, sleep, or care for yourself',
      'Feeling like your baby would be better off without you',
      'Persistent physical symptoms that are not improving — contact your OB',
    ],
  },
  {
    week: 6,
    theme: 'The 6-Week Visit',
    recoveryFocus:
      'Most providers schedule a postpartum visit around 6 weeks. This visit should include a discussion of physical recovery, mental health, contraception, and return to activity. Come with your questions written down — this appointment goes fast.',
    feedingFocus:
      'If you are breastfeeding, your supply should be well-established by now. If you are transitioning to pumping, formula, or combination feeding — all of these are valid. Feeding your baby is what matters.',
    sleepFocus:
      'Some babies begin consolidating sleep into longer stretches around 6–8 weeks, though there is enormous variation. Track what your baby is doing and try to find patterns — but know that irregular sleep at this stage is still normal.',
    mentalHealthCheck:
      'Your 6-week visit is an important opportunity to discuss mental health. Bring up any persistent emotional symptoms — do not minimize or push through without support.',
    partnerTask:
      'Attend the 6-week postpartum visit if possible. Ask your partner\'s provider directly: "What should we be watching for in the next 6 weeks?" and "What does normal recovery look like for this specific birth?"',
    appointments: [
      '6-week OB or midwife postpartum visit',
      'Pediatric 2-month visit with vaccines (usually scheduled around 8 weeks)',
    ],
    redFlags: [
      'Ongoing pain with sex, pelvic pressure, or prolapse symptoms — raise at 6-week visit',
      'Any mood symptoms that feel severe, persistent, or that you are hiding from others',
    ],
  },
  {
    week: 7,
    theme: 'Settling In',
    recoveryFocus:
      'By week 7, most vaginal birth recoveries have progressed well, though pelvic floor rehabilitation may still be needed. Cesarean recovery continues internally. Resume activity gradually and only as cleared by your provider.',
    feedingFocus:
      'If you are pumping exclusively or building a freezer stash, a lactation consultant or pumping specialist can help you optimize output and protect supply without exhaustion.',
    sleepFocus:
      'This is a good week to reflect on your sleep structure: who is waking, how often, what shifts are working. Adjust your coordination plan now rather than waiting until you are more depleted.',
    mentalHealthCheck:
      'Connection with other new parents — even briefly — reduces isolation. A postpartum support group, parent group, or even an online community can significantly improve wellbeing.',
    partnerTask:
      'Plan a low-key activity for just the two of you this week — even 30 minutes after the baby is asleep. Connection between partners often gets de-prioritized postpartum and matters for long-term relationship health.',
    appointments: ['No standard visit this week unless following up on specific concerns'],
    redFlags: [
      'Any new physical symptoms — do not assume they are normal, call your OB',
      'Mental health symptoms that are worsening rather than improving',
    ],
  },
  {
    week: 8,
    theme: 'Two Months',
    recoveryFocus:
      'Two months postpartum. Your body has undergone significant hormonal recalibration. Hair loss (postpartum telogen effluvium) often peaks around 3–5 months — it is normal, temporary, and related to hormonal changes after delivery.',
    feedingFocus:
      'At two months, many breastfeeding parents feel more confident. If you are struggling, help is still available — it is never too late to consult a lactation specialist. Feeding decisions at this stage are yours alone.',
    sleepFocus:
      'Some babies are beginning to have one longer sleep stretch at night (3–5 hours). If yours is not, that is also normal. Sleep training decisions are personal and not medically necessary at this stage.',
    mentalHealthCheck:
      'Two months is a meaningful checkpoint. Ask yourself: am I more myself than 4 weeks ago? If the answer is no, or if things feel worse, please contact your provider. Postpartum mental health conditions are very treatable.',
    partnerTask:
      'Check in on your own mental health. Parental burnout and adjustment difficulties affect partners too. Talk to someone — a friend, a therapist, or your own provider.',
    appointments: ['Pediatric 2-month well visit with vaccines'],
    redFlags: [
      'Worsening mental health symptoms at any time',
      'Physical symptoms that are new, concerning, or not improving',
    ],
  },
  {
    week: 9,
    theme: 'Finding Yourself Again',
    recoveryFocus:
      'Pelvic floor physical therapy, if not already started, is worth discussing with your provider now. Symptoms like leaking, pressure, or pain with exercise are treatable — they are not something to just accept as permanent.',
    feedingFocus:
      'If you are returning to work soon, now is the time to practice bottle introduction (if breastfeeding), establish a pumping routine, and connect with HR about pumping accommodations.',
    sleepFocus:
      'Sleep needs vary — what works for your family is what matters. Seek outside guidance (pediatrician, sleep consultant) if sleep feels genuinely unsustainable for your family system.',
    mentalHealthCheck:
      'Your identity has shifted. It is normal to grieve parts of your pre-parenthood self while also experiencing deep love for your baby. Both can be true simultaneously.',
    partnerTask:
      'Discuss return-to-work logistics this week: feeding plan, childcare coverage, morning and evening routines, and who handles backup when childcare falls through.',
    appointments: ['If returning to work soon, confirm pumping or feeding plan with pediatrician and employer'],
    redFlags: [
      'Inability to function at a basic level — eating, sleeping, caring for yourself',
      'Intrusive thoughts that feel disturbing or that you are hiding — contact your provider',
    ],
  },
  {
    week: 10,
    theme: 'Strengthening',
    recoveryFocus:
      'If cleared by your provider, gentle return to physical activity is appropriate — walking, postpartum yoga, or core and pelvic floor-specific work with a physical therapist. Avoid high-impact exercise until pelvic floor function is assessed.',
    feedingFocus:
      'Feeding patterns may be shifting as your baby becomes more efficient and alert. Feeds that used to take 40 minutes may take 10–15 — this is progress, not reduced supply.',
    sleepFocus:
      'You may be feeling the effects of sustained sleep deprivation. This is one of the hardest parts of new parenthood. Rest whenever you genuinely can. You are not failing by being tired.',
    mentalHealthCheck:
      'Notice your relationship with your body right now. External pressure to "bounce back" is not evidence-based and is often harmful. Your body did something remarkable and deserves kindness.',
    partnerTask:
      'Schedule a specific time each week for the postpartum person to have uninterrupted rest or solo time. Put it in the calendar like an appointment.',
    appointments: ['No standard visit unless specific follow-up is needed'],
    redFlags: [
      'Pain during exercise or activity — stop and consult your provider',
      'Any mental health symptoms that are worsening',
    ],
  },
  {
    week: 11,
    theme: 'Looking Forward',
    recoveryFocus:
      'At 11 weeks, many people are beginning to feel more like themselves physically, though emotional adjustment continues. Hormones are still fluctuating, particularly if breastfeeding. Continue being patient with your recovery timeline.',
    feedingFocus:
      'If you are at a feeding transition point — reducing breastfeeding, switching to formula, or changing your pumping schedule — make changes gradually and consult a lactation consultant if weaning is causing pain or supply issues.',
    sleepFocus:
      'Take stock of what has improved in your sleep and what still feels difficult. Share this honestly with your partner and consider any adjustments that might help.',
    mentalHealthCheck:
      'Talk about how your relationship has changed. Resentment, communication breakdown, and unequal labor division are common in this period. Naming these honestly is healthier than avoiding them.',
    partnerTask:
      'Initiate a relationship check-in this week: "How are we doing as a team? What do you need from me that you\'re not getting?" Listen without defensiveness.',
    appointments: [
      'Pediatric 4-month well visit is typically scheduled soon — confirm with your pediatrician',
    ],
    redFlags: [
      'Any persistent or worsening physical or mental health symptoms — always contact your provider',
    ],
  },
  {
    week: 12,
    theme: 'Three Months: A Milestone',
    recoveryFocus:
      'Three months postpartum. The acute recovery phase is largely behind you, though healing continues. If you have unresolved symptoms — pain, leaking, mood concerns — please bring them to your provider rather than assuming they will resolve on their own.',
    feedingFocus:
      'At three months, your feeding relationship with your baby is established in whatever form it has taken. Whatever path you chose — breastfeeding, formula, combination — has nourished your baby through this critical period.',
    sleepFocus:
      'Sleep at three months varies enormously. Some babies sleep 6+ hours; many do not. If sleep feels unmanageable, your pediatrician can discuss developmentally appropriate approaches for your baby\'s age and weight.',
    mentalHealthCheck:
      'Postpartum depression and anxiety can emerge or persist beyond 12 weeks. If you are still struggling — or if new symptoms appear — please reach out to your provider or a mental health professional. Support is available.',
    partnerTask:
      'Celebrate. You have supported your partner through three of the most physically and emotionally demanding months of their life. Tell them specifically what you admire about how they have done this.',
    appointments: [
      'Pediatric 4-month well visit (typically 16 weeks)',
      'Follow up with your OB if any postpartum concerns remain unaddressed',
    ],
    redFlags: [
      'Postpartum mood disorders can appear at any time in the first year — contact your OB or midwife if you are experiencing depression, anxiety, OCD, or psychosis symptoms at any point',
      'Persistent pelvic pain, pressure, or dysfunction — pelvic PT is highly effective and available',
    ],
  },
];
