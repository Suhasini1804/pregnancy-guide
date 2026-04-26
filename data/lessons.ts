// All lesson content is original and evidence-informed.
// Source categories: ACOG, Evidence Based Birth, AAFP, Academy of Breastfeeding Medicine, Mayo Clinic Guide (3rd ed.)
import type { Lesson } from '@/types';

export const lessons: Lesson[] = [
  // ── BODY CHANGES ──
  {
    id: 'body-1',
    category: 'body-changes',
    title: 'What Happens in the Third Trimester',
    estimatedMinutes: 7,
    summary:
      'The third trimester (weeks 27–40) brings rapid baby growth and significant changes to your body. Your uterus expands from roughly the size of a cantaloupe to the size of a watermelon. Shortness of breath, pelvic pressure, increased Braxton Hicks, heartburn, and sleep disruption are all normal responses to this growth.',
    keyTakeaways: [
      'Shortness of breath is common as the uterus presses on the diaphragm — it often eases as baby drops near the end.',
      'Braxton Hicks contractions are practice contractions: irregular, painless, and stop with movement or position change.',
      'Pelvic girdle pain and round ligament pain peak in the third trimester — support belts and warm compresses help.',
      'Swelling in feet and ankles is expected; facial, hand, or sudden severe swelling warrants a call to your provider.',
      'Sleep disruption is nearly universal — side lying with pillow support and daytime rest improve overall sleep quality.',
    ],
    askYourProvider: [
      'At what point should swelling concern me enough to call?',
      'Are my Braxton Hicks contractions at a normal frequency for my stage?',
      'What positions or exercises do you recommend for my specific back pain?',
    ],
    sourceCategory: 'ACOG Patient Education / Mayo Clinic Guide 3rd Ed.',
  },
  {
    id: 'body-2',
    category: 'body-changes',
    title: 'Fetal Movement: Kick Counting and What to Notice',
    estimatedMinutes: 5,
    summary:
      'Fetal movement is one of the most important signals of your baby\'s wellbeing. In the third trimester, your baby develops predictable activity patterns. Daily awareness of these patterns — rather than rigid counting rules — is the most sensitive way to notice changes early.',
    keyTakeaways: [
      'Most babies have a predictable active period at roughly the same time each day.',
      'The "count to 10" method: most babies reach 10 movements within 1–2 hours during an active period.',
      'Decreased movement should always be evaluated — do not wait until the next day. Call your OB or go to L&D triage.',
      'Movement may feel different (rolling vs. kicking) as your baby runs out of room near the end.',
      'Fetal hiccups — rhythmic, repetitive movements — are normal and common.',
    ],
    askYourProvider: [
      'What is your recommended kick count method for my specific situation?',
      'How many hours should I wait before calling if I am concerned about movement?',
      'Is there anything about my pregnancy that changes what is normal for my baby\'s movement pattern?',
    ],
    sourceCategory: 'ACOG Patient Education / Evidence Based Birth',
  },
  {
    id: 'body-3',
    category: 'body-changes',
    title: 'Gestational Diabetes: Understanding Your Screening',
    estimatedMinutes: 8,
    summary:
      'Gestational diabetes (GDM) is a form of glucose intolerance that develops during pregnancy and typically resolves after birth. It is screened for around 24–28 weeks. A positive screening leads to a diagnostic test. Most people with GDM manage it successfully with diet, exercise, and sometimes medication.',
    keyTakeaways: [
      'A failed one-hour glucose challenge does not confirm GDM — a three-hour diagnostic test is required.',
      'GDM does not mean you did something wrong — it is a pregnancy-specific metabolic change.',
      'Blood sugar monitoring, dietary adjustments, and walking after meals are cornerstones of GDM management.',
      'Babies of people with GDM are at increased risk of being larger (macrosomia) — this influences labor and birth discussions.',
      'GDM resolves after delivery for most people, but increases lifetime risk of Type 2 diabetes — lifestyle factors after birth matter.',
    ],
    askYourProvider: [
      'What are my glucose numbers and what do they mean for my care plan?',
      'Will GDM change my birth options or timing?',
      'When should I be rescreened for Type 2 diabetes after birth?',
    ],
    sourceCategory: 'ACOG Patient Education / Evidence Based Birth',
  },
  {
    id: 'body-4',
    category: 'body-changes',
    title: 'Pelvic Floor Basics: What It Is and Why It Matters Now',
    estimatedMinutes: 6,
    summary:
      'The pelvic floor is a group of muscles that support the uterus, bladder, and bowel. During pregnancy, increased weight and hormonal changes can stress these muscles. Strengthening and releasing the pelvic floor — not just squeezing — prepares your body for both birth and postpartum recovery.',
    keyTakeaways: [
      'The pelvic floor needs both strength (Kegel contractions) and relaxation (releasing and breathing through the muscles).',
      'Releasing the pelvic floor during pushing is critical — practicing this now builds body awareness.',
      'Symptoms like leaking urine, pelvic pressure, or pain are signs to consult a pelvic floor physical therapist.',
      'Pelvic floor PT is highly effective and available to pregnant and postpartum people.',
      'Not all leaking is the same — a PT can distinguish between stress incontinence and other causes.',
    ],
    askYourProvider: [
      'Would pelvic floor PT be appropriate for me before or after delivery?',
      'Is there any reason I should modify or avoid pelvic floor exercises?',
      'Can you refer me to a pelvic floor physical therapist?',
    ],
    sourceCategory: 'ACOG Patient Education',
  },

  // ── LABOR SIGNS ──
  {
    id: 'labor-1',
    category: 'labor-signs',
    title: 'Recognizing Early Labor vs. Active Labor',
    estimatedMinutes: 8,
    summary:
      'Labor unfolds in stages. Early labor is typically longer, milder, and manageable at home. Active labor is defined by contractions that are stronger, longer, and closer together. Knowing the difference helps you stay calm at home during early labor and recognize when to head to the hospital.',
    keyTakeaways: [
      'Early labor: contractions are irregular, 5–20 minutes apart, and manageable with breathing and movement.',
      'Active labor: contractions are typically 4–5 minutes apart, lasting 60 seconds, for at least 1 hour — the "5-1-1 rule."',
      'Your provider may have personalized guidance — ask specifically about when to call and when to come in.',
      'Water breaking (rupture of membranes) can happen before or during labor — always call your provider when this occurs.',
      'Prodromal labor (irregular contractions that do not progress) is common and exhausting — rest as much as possible.',
    ],
    askYourProvider: [
      'What are your specific criteria for when I should call vs. come in?',
      'If my water breaks before contractions, what should I do?',
      'What is your preference for when I arrive at the hospital relative to dilation?',
    ],
    sourceCategory: 'ACOG Patient Education / Mayo Clinic Guide 3rd Ed.',
  },
  {
    id: 'labor-2',
    category: 'labor-signs',
    title: 'Signs That Labor Is Approaching: What to Watch For',
    estimatedMinutes: 5,
    summary:
      'In the days and weeks before labor, your body sends signals that birth is approaching. These include changes to the cervix, shifts in how you feel, and specific physical signs. Recognizing these helps reduce anxiety and helps you prepare.',
    keyTakeaways: [
      'Lightening (baby dropping into the pelvis) often causes increased pelvic pressure but easier breathing.',
      'Bloody show (pink or blood-tinged mucus discharge) is a sign the cervix is changing — labor may follow within hours or days.',
      'Increased Braxton Hicks frequency and a "nesting" energy surge are common in the days before labor.',
      'Loose stools in the 24–48 hours before labor onset are reported by many people and may reflect hormonal shifts.',
      'No single sign predicts exactly when labor will begin — patterns across multiple signs are more informative.',
    ],
    askYourProvider: [
      'At what point do you want me to call you if I notice bloody show?',
      'How will I know if my water breaks if the leak is small?',
      'What do early contractions feel like — are they different from Braxton Hicks?',
    ],
    sourceCategory: 'ACOG Patient Education / Evidence Based Birth',
  },

  // ── PAIN COPING ──
  {
    id: 'pain-1',
    category: 'pain-coping',
    title: 'Breathing Techniques for Labor',
    estimatedMinutes: 6,
    summary:
      'Intentional breathing is one of the most accessible and effective tools for managing labor sensations. It works by activating the parasympathetic nervous system, reducing the perception of pain, and giving you something to focus on during contractions. Regular practice before labor makes it more natural when you need it.',
    keyTakeaways: [
      'Slow breathing (in for 4 counts, out for 6–8) activates the calming branch of the nervous system.',
      'Breathing through each contraction — rather than holding your breath — keeps oxygen flowing and muscles relaxed.',
      'A longer exhale than inhale is consistently calming for most people.',
      'Breathing patterns can be used in early labor, active labor, and during pushing.',
      'Your partner can breathe with you during contractions — matching breath helps with connection and pacing.',
    ],
    askYourProvider: [
      'Are there specific breathing techniques you find most effective?',
      'Is there a birth educator or class you recommend for practicing these skills?',
    ],
    sourceCategory: 'Evidence Based Birth / Lamaze International Guidelines',
  },
  {
    id: 'pain-2',
    category: 'pain-coping',
    title: 'Movement and Position During Labor',
    estimatedMinutes: 7,
    summary:
      'Labor is not meant to be experienced lying flat in a bed. Movement, position changes, and upright postures work with gravity to support fetal descent and can significantly reduce pain. Most hospitals allow mobility during labor unless monitoring or medical conditions require bed rest.',
    keyTakeaways: [
      'Walking, rocking, swaying, and slow dancing encourage baby\'s descent and reduce back labor.',
      'Upright positions (standing, kneeling, sitting on a birth ball) use gravity to support labor progress.',
      'Side-lying positions allow rest during active labor and can reduce pressure if lying upright is too intense.',
      'Hands-and-knees position is particularly effective for back labor.',
      'Position changes every 20–30 minutes can restart a stalled labor pattern.',
    ],
    askYourProvider: [
      'What monitoring policy does your hospital use — continuous or intermittent auscultation?',
      'Are there any medical reasons I would be restricted to bed during labor?',
      'Is there a birth ball available in your labor rooms?',
    ],
    sourceCategory: 'Evidence Based Birth / ACOG Safe Prevention of Primary Cesarean Delivery',
  },
  {
    id: 'pain-3',
    category: 'pain-coping',
    title: 'Epidurals: What to Actually Expect',
    estimatedMinutes: 8,
    summary:
      'An epidural is a regional anesthetic placed in the epidural space of the lower back that provides pain relief during labor. It is the most commonly used form of pain relief in hospital births in the United States. Understanding how it works, when it can be placed, and its tradeoffs helps you make an informed decision.',
    keyTakeaways: [
      'An epidural can typically be placed at any point during active labor — the idea that it "slows labor" if placed early is not supported by current evidence.',
      'Placement takes about 10–20 minutes and begins providing relief within 10–20 minutes of placement.',
      'Epidurals may cause decreased blood pressure, requiring IV fluids and monitoring.',
      'They can limit mobility but many hospitals offer "walking epidurals" or lower doses that allow some movement.',
      'An epidural does not increase the risk of cesarean — current evidence does not support this widely held belief.',
    ],
    askYourProvider: [
      'What is your anesthesiologist\'s typical wait time once I request an epidural?',
      'Do you offer low-dose or walking epidural options?',
      'Are there any reasons based on my health history that an epidural might not be an option for me?',
    ],
    sourceCategory: 'ACOG Patient Education / Evidence Based Birth',
  },
  {
    id: 'pain-4',
    category: 'pain-coping',
    title: 'Hydrotherapy: Laboring in Water',
    estimatedMinutes: 5,
    summary:
      'Warm water immersion during labor (laboring in a tub or shower) is a well-supported non-pharmacological pain relief option. Many hospitals and birth centers offer tubs for labor even when delivery in water is not available.',
    keyTakeaways: [
      'Warm water immersion is associated with reduced pain perception and reduced use of epidural analgesia.',
      'Laboring in water is generally safe for uncomplicated pregnancies — ask your provider about your eligibility.',
      'Water should be body temperature (not too hot) to avoid raising your baby\'s heart rate.',
      'A shower with warm water directed at the lower back can provide similar relief if a tub is unavailable.',
      'You can exit the water at any time to use other comfort measures or request an epidural.',
    ],
    askYourProvider: [
      'Does your facility have tubs available for laboring?',
      'Are there any conditions in my pregnancy that would make water immersion inadvisable?',
      'Can I use the tub if I am on IV fluids or continuous monitoring?',
    ],
    sourceCategory: 'Evidence Based Birth / Cochrane Reviews on Immersion in Water',
  },

  // ── INTERVENTIONS ──
  {
    id: 'interv-1',
    category: 'interventions',
    title: 'Continuous Electronic Fetal Monitoring: What It Means for You',
    estimatedMinutes: 7,
    summary:
      'Continuous electronic fetal monitoring (EFM) tracks your baby\'s heart rate throughout labor using belts on your belly. It is standard practice in most hospitals. Understanding what it measures, what it can and cannot tell you, and what your alternatives are helps you participate in monitoring decisions.',
    keyTakeaways: [
      'Continuous EFM is widely used but associated with higher cesarean rates without improvement in newborn outcomes compared to intermittent auscultation in low-risk pregnancies.',
      'Intermittent auscultation (periodic listening to baby\'s heartbeat) is an evidence-based alternative for low-risk labors.',
      'Telemetry units allow monitoring while you move — ask if these are available at your birth location.',
      'Some monitoring may be required with certain interventions (epidural, Pitocin) or medical conditions.',
      'Abnormal heart rate patterns may be transient or positional — changing your position is often a first response.',
    ],
    askYourProvider: [
      'Does your hospital offer intermittent auscultation for low-risk patients?',
      'Are wireless/telemetry monitoring units available?',
      'In what situations would continuous monitoring be required for my specific pregnancy?',
    ],
    sourceCategory: 'Evidence Based Birth / ACOG',
  },
  {
    id: 'interv-2',
    category: 'interventions',
    title: 'Labor Induction: Methods, Timing, and Evidence',
    estimatedMinutes: 9,
    summary:
      'Induction of labor means using medical interventions to start contractions before labor begins on its own. It may be recommended for a variety of medical or timing reasons. Understanding the different methods, what the evidence says about timing, and how to evaluate recommendations helps you participate in this decision.',
    keyTakeaways: [
      'Methods include membrane sweeping (done during a cervical exam), Foley balloon catheter, prostaglandin ripening agents, and synthetic oxytocin (Pitocin).',
      'Research on elective induction at 39 weeks (the ARRIVE trial) found it did not increase cesarean rates and may reduce them in certain populations.',
      'Induction timing decisions depend on your individual health, pregnancy complications, and provider protocols.',
      'Cervical ripeness (Bishop score) affects how induction proceeds — an unripe cervix may require a longer process.',
      'Using the BRAIN framework for any induction recommendation helps you evaluate the specific evidence for your situation.',
    ],
    askYourProvider: [
      'What is the specific reason you are recommending induction for me?',
      'What method(s) will you use, and what is the typical timeline?',
      'What happens if induction is not successful — what are our next steps?',
    ],
    sourceCategory: 'Evidence Based Birth / ACOG / ARRIVE Trial',
  },
  {
    id: 'interv-3',
    category: 'interventions',
    title: 'The BRAIN Framework for Labor Decisions',
    estimatedMinutes: 5,
    summary:
      'BRAIN is a simple five-step tool for calmly evaluating any recommendation during labor without feeling pressured. It stands for Benefits, Risks, Alternatives, Intuition, and Nothing/Next step. Practicing it before labor makes it easier to use when you are in the middle of it.',
    keyTakeaways: [
      'B: What are the benefits of this recommendation for me and my baby right now?',
      'R: What are the risks of doing this? What are the risks of NOT doing this?',
      'A: What are the alternatives to this recommendation?',
      'I: What does your intuition say? Your gut reaction is valid information.',
      'N: What happens if we wait — for 10 minutes, for 30 minutes? Is this an emergency?',
    ],
    askYourProvider: [
      'Is this an emergency that requires an immediate decision?',
      'Can we have 5–10 minutes to discuss this recommendation privately?',
      'What would happen if we decided not to proceed with this recommendation?',
    ],
    sourceCategory: 'Evidence Based Birth',
  },

  // ── BIRTH PREFERENCES ──
  {
    id: 'birthpref-1',
    category: 'birth-preferences',
    title: 'Writing a Clear, Flexible Birth Preferences Document',
    estimatedMinutes: 6,
    summary:
      'A birth preferences document (sometimes called a birth plan) communicates your priorities and values to your care team. The most effective ones are concise (one page), focused on priorities rather than every possibility, and written with flexibility in mind. Your care team cannot read your mind — this document helps them understand what matters most to you.',
    keyTakeaways: [
      'Keep it to one page — care teams are more likely to read and honor a concise document.',
      'Use language that reflects preferences rather than demands: "I would prefer..." and "Unless medically necessary, I\'d like to avoid..."',
      'Prioritize: decide what your top 5 preferences are, rather than listing every possible scenario.',
      'Include a fallback section: "If a cesarean becomes necessary, I would like..."',
      'Review it with your OB or midwife before labor and confirm specific items are possible at your location.',
    ],
    askYourProvider: [
      'Is there anything on my birth preferences document that would not be possible at your facility?',
      'Can you note my core preferences in my chart before I go into labor?',
      'Who should I give this document to when I arrive at the hospital?',
    ],
    sourceCategory: 'ACOG Patient Education',
  },
  {
    id: 'birthpref-2',
    category: 'birth-preferences',
    title: 'Delayed Cord Clamping: What the Evidence Says',
    estimatedMinutes: 5,
    summary:
      'Delayed cord clamping (DCC) means waiting at least 30–60 seconds (or until the cord stops pulsing) before cutting the umbilical cord after birth. Major organizations including ACOG and WHO now recommend delayed clamping as standard practice. It increases iron stores and red blood cells in newborns.',
    keyTakeaways: [
      'DCC is associated with higher iron stores in infants at 3–6 months and improved neurodevelopmental outcomes.',
      'The benefit is particularly significant for preterm infants.',
      'DCC is safe and does not increase maternal blood loss or jaundice in a meaningful way.',
      'Most hospitals and providers offer DCC as standard — confirm at your prenatal visit.',
      'You can request the cord not be cut until it has fully stopped pulsing if you want the maximum transfer.',
    ],
    askYourProvider: [
      'What is your standard practice for cord clamping timing?',
      'Are there any situations (like baby needing resuscitation) where immediate clamping would be needed?',
      'Can the non-birthing partner cut the cord after delay if we wish?',
    ],
    sourceCategory: 'ACOG Committee Opinion / Evidence Based Birth',
  },

  // ── CESAREAN ──
  {
    id: 'ces-1',
    category: 'cesarean',
    title: 'Cesarean Birth: What to Expect',
    estimatedMinutes: 10,
    summary:
      'A cesarean section (C-section) is a surgical birth through incisions in the abdomen and uterus. It is the most common major surgery in the United States. Understanding what happens during and after a cesarean — whether planned or unplanned — reduces fear and helps you advocate for preferences that can still be honored in the OR.',
    keyTakeaways: [
      'Most cesareans use spinal or epidural anesthesia — you are awake, aware, and can hold your baby in the OR.',
      'Surgery typically takes 45–60 minutes; the birth itself occurs in the first 5–10 minutes.',
      'A clear surgical drape or a mirror can be requested so you can see your baby being born if you wish.',
      'Skin-to-skin contact in the OR is offered at many hospitals — confirm your facility\'s policy.',
      'Cesarean recovery involves more restricted activity — no heavy lifting (>10 lbs), driving restrictions, and monitoring the incision site.',
    ],
    askYourProvider: [
      'What is your typical cesarean rate for patients with my risk profile?',
      'Does your hospital offer "gentle cesarean" or family-centered cesarean options?',
      'What specific restrictions will I have after a cesarean, and for how long?',
    ],
    sourceCategory: 'ACOG Patient Education / Mayo Clinic Guide 3rd Ed.',
  },
  {
    id: 'ces-2',
    category: 'cesarean',
    title: 'Unplanned Cesarean: Preparing Emotionally',
    estimatedMinutes: 6,
    summary:
      'Most cesareans are unplanned — they occur during labor when a situation arises that makes vaginal birth riskier than surgery. An unplanned cesarean can feel shocking, confusing, or disappointing, even when it is clearly the right decision. Preparing emotionally in advance makes the experience less destabilizing if it occurs.',
    keyTakeaways: [
      'Having a cesarean does not mean your birth "failed" — it means you had a birth that required surgery.',
      'Many cesareans are preceded by a decision window of minutes to hours — you often have time to ask questions.',
      'Requesting specific preferences for the OR (who accompanies you, music, curtain position) is often possible.',
      'Processing a cesarean birth — especially an unplanned one — often takes time and may involve grief alongside gratitude.',
      'Postpartum support groups for cesarean parents exist and are genuinely helpful for processing the experience.',
    ],
    askYourProvider: [
      'What are the most common reasons a cesarean becomes necessary during labor in your practice?',
      'If I need an unplanned cesarean, what preferences can still be honored?',
      'What support is available for cesarean birth processing postpartum?',
    ],
    sourceCategory: 'ACOG Patient Education',
  },

  // ── FEEDING ──
  {
    id: 'feed-1',
    category: 'feeding',
    title: 'How Breastfeeding Works: Supply and Demand',
    estimatedMinutes: 8,
    summary:
      'Breastfeeding operates on a supply-and-demand principle: the more milk is removed from the breast, the more is produced. Understanding this basic mechanism helps you recognize what supports your supply, what threatens it, and why the first days and weeks are the most important for establishing feeding.',
    keyTakeaways: [
      'Colostrum is the first milk — small in volume, high in antibodies and nutrients. It is exactly what your newborn needs.',
      'Mature milk "comes in" between days 2–5 and transitions from colostrum over 2 weeks.',
      'Frequent feeding (8–12 times per 24 hours in the first weeks) signals the body to establish adequate supply.',
      'Breast size does not determine supply — milk production happens in glandular tissue, not fat.',
      'Supplementing with formula without pumping replacement reduces supply signals — this is important to know before making supplementation decisions.',
    ],
    askYourProvider: [
      'Is there a lactation consultant I can see before I deliver, and in the hospital after birth?',
      'What signs tell me my baby is getting enough milk?',
      'If we need to supplement, what is the best way to protect my supply?',
    ],
    sourceCategory: 'Academy of Breastfeeding Medicine / ACOG',
  },
  {
    id: 'feed-2',
    category: 'feeding',
    title: 'Latch and Positioning: The Foundation of Breastfeeding',
    estimatedMinutes: 7,
    summary:
      'A deep, effective latch is the single most important factor in comfortable and productive breastfeeding. Many early breastfeeding challenges — nipple soreness, poor transfer, engorgement — have latch or positioning at their root. This is a skill that takes practice, and help is available.',
    keyTakeaways: [
      'A good latch is asymmetric — more areola visible above the nipple than below. The nipple points toward the roof of the baby\'s mouth.',
      'Baby\'s mouth should be wide open before latching — like a big yawn.',
      'Pain beyond mild initial sensitivity during a feed almost always signals a shallow latch.',
      'Common positions: cradle hold, cross-cradle, football hold, and side-lying — each works differently for different bodies.',
      'If pain is significant or feeding is not going well after 24 hours, ask for a lactation consultant — this is what they are for.',
    ],
    askYourProvider: [
      'Will there be a lactation consultant available in the hospital for each day I am there?',
      'How do I get outpatient lactation support after discharge?',
      'What does a good latch look like and feel like?',
    ],
    sourceCategory: 'Academy of Breastfeeding Medicine',
  },
  {
    id: 'feed-3',
    category: 'feeding',
    title: 'Formula Feeding: Making It Work Safely',
    estimatedMinutes: 6,
    summary:
      'Formula is a safe and complete nutrition source for infants. Whether you choose formula from the start, supplement breastfeeding, or transition to formula — you are making a valid feeding decision. Understanding safe preparation, storage, and feeding practices supports your baby\'s health.',
    keyTakeaways: [
      'Commercial infant formula is regulated and nutritionally complete for full-term infants.',
      'Always follow mixing instructions exactly — over- or under-diluting formula is dangerous.',
      'Prepared formula should be used within 1 hour at room temperature or stored in the refrigerator for up to 24 hours.',
      'Paced bottle feeding (holding the bottle horizontal, allowing breaks) mimics a breastfeeding rhythm.',
      'Watch for signs of formula intolerance: persistent fussiness, vomiting, blood in stool — discuss with your pediatrician.',
    ],
    askYourProvider: [
      'Is there a specific formula you recommend for my baby\'s needs?',
      'How do I know if my baby is tolerating formula well?',
      'If I want to stop or reduce breastfeeding, how should I manage the transition?',
    ],
    sourceCategory: 'ACOG / Academy of Breastfeeding Medicine',
  },
  {
    id: 'feed-4',
    category: 'feeding',
    title: 'Pumping: The Basics',
    estimatedMinutes: 7,
    summary:
      'Breast pumping allows milk removal when direct nursing is not possible — whether for work, supply building, supplementing, or any other reason. Understanding how to use a pump effectively, maintain supply, and store milk safely helps you meet your feeding goals.',
    keyTakeaways: [
      'Flange size matters — an ill-fitting flange can reduce output and cause pain. Most pumps come with multiple sizes.',
      'Pumping 8–10 times per 24 hours in the early weeks most closely mimics a newborn\'s nursing frequency.',
      'Breast milk storage guidelines: room temperature for up to 4 hours, refrigerator for up to 4 days, freezer for 6–12 months.',
      'Power pumping (mimicking cluster feeding with a specific interval pump schedule) can boost supply if needed.',
      'Your employer is legally required to provide break time and a private space for pumping until your baby is 1 year old (federal law — Pump Act).',
    ],
    askYourProvider: [
      'How do I know what flange size is right for me?',
      'What is a reasonable pumping output at 1 week, 1 month, and 3 months postpartum?',
      'What signs indicate my pump is not working effectively?',
    ],
    sourceCategory: 'Academy of Breastfeeding Medicine / ACOG',
  },

  // ── NEWBORN CARE ──
  {
    id: 'newborn-1',
    category: 'newborn-care',
    title: 'Safe Sleep Basics for Newborns',
    estimatedMinutes: 6,
    summary:
      'Safe infant sleep practices significantly reduce the risk of SIDS (Sudden Infant Death Syndrome) and other sleep-related causes of infant death. The ABCs of safe sleep — Alone, Back, Crib — form the core guidance from the American Academy of Pediatrics.',
    keyTakeaways: [
      'Always place your baby on their Back for every sleep, from day one.',
      'Your baby should sleep Alone — not with you or with siblings in the same sleep surface.',
      'Use a firm, flat Crib, bassinet, or play yard with a tight-fitting sheet and nothing else inside.',
      'Room-sharing (same room, separate surface) for at least the first 6 months reduces SIDS risk.',
      'Swaddling is safe if the swaddle is snug around the arms and loose around the hips.',
    ],
    askYourProvider: [
      'What is the current AAP guidance on room-sharing versus bed-sharing?',
      'Is it safe to use a bassinet with an incline?',
      'At what point can I introduce a sleep sack or wearable blanket?',
    ],
    sourceCategory: 'American Academy of Pediatrics Safe Sleep Guidelines',
  },
  {
    id: 'newborn-2',
    category: 'newborn-care',
    title: 'What Newborns Actually Need: The First Two Weeks',
    estimatedMinutes: 8,
    summary:
      'Newborns have simple but constant needs: feeding, warmth, physical contact, and sleep. Many things new parents worry about — cluster feeding, normal skin changes, newborn sounds — are completely expected. Knowing what is normal reduces midnight panic.',
    keyTakeaways: [
      'Newborns sleep 16–18 hours per day in fragmented periods — they do not have day/night orientation at birth.',
      'Normal newborn skin: vernix (waxy coating at birth), peeling skin, milia (tiny white bumps on nose), and jaundice (yellowing) in the first few days.',
      'Newborns make many noises during sleep — grunting, squeaking, irregular breathing. Watch for color changes, persistent distress, or stopping breathing.',
      'The umbilical cord stump dries and falls off in 1–3 weeks. Keep it dry and do not pull it.',
      'Skin-to-skin contact regulates newborn temperature, heart rate, and blood sugar, and supports bonding.',
    ],
    askYourProvider: [
      'What jaundice levels require treatment, and what does treatment look like?',
      'When should I call the pediatrician for newborn skin color changes?',
      'What noises or breathing patterns in a newborn are concerning?',
    ],
    sourceCategory: 'AAP / Mayo Clinic Guide 3rd Ed.',
  },

  // ── POSTPARTUM RECOVERY ──
  {
    id: 'post-1',
    category: 'postpartum-recovery',
    title: 'What Physical Recovery Actually Looks Like',
    estimatedMinutes: 7,
    summary:
      'Postpartum physical recovery is a process that takes weeks to months — not days. Understanding what is normal, what is concerning, and what helps accelerates your recovery and prevents complications. The "fourth trimester" framing helps set realistic expectations.',
    keyTakeaways: [
      'Lochia (postpartum bleeding) transitions from bright red to pink to yellow-white over 4–6 weeks. Increasing redness after it has lightened is a sign of overdoing activity.',
      'Perineal soreness, hemorrhoids, and difficulty with bowel movements are nearly universal in the first weeks after vaginal birth.',
      'Cesarean recovery restricts lifting (nothing heavier than your baby), driving, and certain movements for 4–6 weeks.',
      'Afterpains — uterine cramping as the uterus shrinks — are stronger with subsequent pregnancies and during breastfeeding.',
      'Your first postpartum bowel movement often takes 2–3 days — stool softeners are a helpful and safe standard recommendation.',
    ],
    askYourProvider: [
      'What physical symptoms should prompt me to call you in the first two weeks postpartum?',
      'When can I drive after a cesarean?',
      'How do I manage perineal soreness — are ice packs, sitz baths, and spray bottles appropriate for me?',
    ],
    sourceCategory: 'ACOG Postpartum Care Guidelines / AAFP Fourth Trimester',
  },
  {
    id: 'post-2',
    category: 'postpartum-recovery',
    title: 'Postpartum Nutrition: Eating to Heal and Feed',
    estimatedMinutes: 5,
    summary:
      'Postpartum nutrition supports healing, milk production (if breastfeeding), mood stability, and energy. The immediate postpartum period is not a time for caloric restriction. Easy, nourishing foods that require minimal preparation are the most practical goal.',
    keyTakeaways: [
      'Breastfeeding increases caloric needs by approximately 300–500 calories per day.',
      'Iron-rich foods support recovery from blood loss — red meat, legumes, fortified grains, spinach.',
      'Calcium, omega-3 fatty acids, and vitamin D remain important postpartum and during lactation.',
      'Hydration is critical for milk supply and energy — keep water within reach at all times.',
      'You do not need a special "clean" diet while breastfeeding — eat a varied, nourishing diet and watch for any pattern of baby fussiness after specific foods.',
    ],
    askYourProvider: [
      'Should I continue prenatal vitamins postpartum?',
      'Are there specific supplements you recommend while breastfeeding?',
      'If I am struggling to eat enough, what resources are available?',
    ],
    sourceCategory: 'ACOG / Academy of Breastfeeding Medicine',
  },

  // ── MENTAL HEALTH ──
  {
    id: 'mh-1',
    category: 'mental-health',
    title: 'Baby Blues vs. Postpartum Depression: Knowing the Difference',
    estimatedMinutes: 7,
    summary:
      'Emotional changes after birth are nearly universal. Baby blues — tearfulness, emotional sensitivity, overwhelm — are common in the first 2 weeks and resolve on their own. Postpartum depression is a clinical condition that requires care and is more persistent, severe, or disabling. Knowing the difference helps you get the right support at the right time.',
    keyTakeaways: [
      'Baby blues: onset within 2–3 days of birth, peak around day 5, resolve within 2 weeks. No treatment required, though support matters.',
      'Postpartum depression: persistent low mood, anxiety, loss of interest, or overwhelm beyond 2 weeks, or any time symptoms feel severe.',
      'Postpartum anxiety is as common as depression — it presents as excessive worry, racing thoughts, and inability to rest even when tired.',
      'Both are medical conditions caused by hormonal, biological, and circumstantial factors — not character weaknesses.',
      'Effective treatment exists: therapy, medication, peer support, and lifestyle adjustments all have evidence behind them.',
    ],
    askYourProvider: [
      'What mental health screening will you do at my 6-week postpartum visit?',
      'What resources are available locally for postpartum mental health support?',
      'If I have a history of depression or anxiety, what should I watch for specifically?',
    ],
    sourceCategory: 'ACOG Postpartum Depression / AAFP Fourth Trimester',
  },
  {
    id: 'mh-2',
    category: 'mental-health',
    title: 'Relationship Shifts After Baby: What to Expect',
    estimatedMinutes: 6,
    summary:
      'Having a baby changes a partnership in ways that are real and often difficult to anticipate. Sleep deprivation, identity shifts, unequal labor division, and reduced intimacy are common challenges that do not reflect relationship failure — they reflect the reality of new parenthood. Naming these patterns helps couples navigate them.',
    keyTakeaways: [
      'Relationship satisfaction typically dips in the first year after birth — this is documented, common, and temporary when couples address it directly.',
      'Unequal division of postpartum labor — who wakes at night, who manages appointments, who recovers while the other works — is a significant source of resentment.',
      'Physical intimacy changes after birth due to healing, hormones, and exhaustion. Most providers clear physical intimacy at 6 weeks, but readiness varies widely.',
      'Communication patterns established in the first postpartum months often persist — naming resentment early is healthier than letting it accumulate.',
      'Couples therapy postpartum is an effective, proactive tool — it does not have to wait until things are in crisis.',
    ],
    askYourProvider: [
      'When is it medically safe to resume physical intimacy?',
      'What postpartum support resources do you offer for couples?',
      'Are there specific concerns to watch for in partners\' mental health postpartum?',
    ],
    sourceCategory: 'AAFP Fourth Trimester / ACOG Postpartum Care',
  },
  {
    id: 'mh-3',
    category: 'mental-health',
    title: 'Partner Mental Health in the Postpartum Period',
    estimatedMinutes: 5,
    summary:
      'Postpartum mental health challenges affect partners too — at a rate of approximately 1 in 10. Paternal postpartum depression and anxiety are under-recognized, under-reported, and undertreated. Partners who are struggling are less able to provide support and more likely to develop long-term mental health difficulties.',
    keyTakeaways: [
      'Symptoms in partners may look different: increased irritability, withdrawal, overworking, or substance use rather than sadness.',
      'Risk factors include sleep deprivation, a partner with PPD, financial stress, relationship conflict, and history of depression.',
      'Partners should have their own provider relationship — either a primary care physician or mental health professional — to discuss postpartum adjustment.',
      'Asking for help is not weakness — it is how you become the parent and partner your family needs.',
      'Online and in-person support resources for dads, partners, and non-gestational parents exist and are growing.',
    ],
    askYourProvider: [
      'Is there a mental health screening for partners that you offer?',
      'What resources exist locally for partners experiencing postpartum challenges?',
      'How do I support my partner through postpartum mental health challenges while also managing my own?',
    ],
    sourceCategory: 'AAFP Fourth Trimester / ACOG Postpartum Care',
  },
];

export const lessonCategories: { id: string; label: string; emoji: string }[] = [
  { id: 'body-changes', label: 'Body Changes', emoji: '🤰' },
  { id: 'labor-signs', label: 'Labor Signs', emoji: '🌊' },
  { id: 'pain-coping', label: 'Pain Coping', emoji: '🌬️' },
  { id: 'interventions', label: 'Interventions', emoji: '🩺' },
  { id: 'birth-preferences', label: 'Birth Preferences', emoji: '📋' },
  { id: 'cesarean', label: 'Cesarean Birth', emoji: '✦' },
  { id: 'feeding', label: 'Feeding', emoji: '🍼' },
  { id: 'newborn-care', label: 'Newborn Care', emoji: '👶' },
  { id: 'postpartum-recovery', label: 'Postpartum Recovery', emoji: '🌱' },
  { id: 'mental-health', label: 'Mental Health', emoji: '💛' },
];
