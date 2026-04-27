import type { HospitalBagItem } from '@/types';

export const hospitalBagItems: HospitalBagItem[] = [
  // Labor Documents
  { id: 'doc-insurance', category: 'Labor Documents', label: 'Insurance card and photo ID', timing: 'week-36' },
  { id: 'doc-birth-plan', category: 'Labor Documents', label: 'Printed birth plan (2–3 copies)', timing: 'week-36' },
  { id: 'doc-prenatal-records', category: 'Labor Documents', label: 'Prenatal records / provider contact', timing: 'week-36' },
  { id: 'doc-hospital-forms', category: 'Labor Documents', label: 'Pre-registration paperwork if needed', timing: 'week-36' },
  { id: 'doc-pediatrician', category: 'Labor Documents', label: 'Pediatrician name and contact', timing: 'week-36' },

  // Mom Comfort
  { id: 'mom-robe', category: 'Mom Comfort', label: 'Robe or button-down shirt (easy for nursing/skin-to-skin)', timing: 'week-36' },
  { id: 'mom-socks', category: 'Mom Comfort', label: 'Warm non-slip socks', timing: 'week-36' },
  { id: 'mom-slippers', category: 'Mom Comfort', label: 'Slippers or easy slip-on shoes', timing: 'week-36' },
  { id: 'mom-hair-ties', category: 'Mom Comfort', label: 'Hair ties and clips', timing: 'week-36' },
  { id: 'mom-pillow', category: 'Mom Comfort', label: 'Your own pillow with a colored pillowcase', timing: 'last-minute' },
  { id: 'mom-snacks-labor', category: 'Mom Comfort', label: 'Light labor snacks (clear liquids, hard candy)', timing: 'last-minute' },
  { id: 'mom-going-home', category: 'Mom Comfort', label: 'Loose going-home outfit (maternity or stretchy)', timing: 'week-36' },
  { id: 'mom-nursing-bra', category: 'Mom Comfort', label: 'Nursing bra or sports bra', timing: 'week-36' },
  { id: 'mom-pads', category: 'Mom Comfort', label: 'Extra postpartum pads (hospital also provides)', timing: 'week-36' },
  { id: 'mom-massage-tools', category: 'Mom Comfort', label: 'Tennis ball or massage tool for counterpressure', timing: 'week-36' },

  // Partner Items
  { id: 'partner-clothes', category: 'Partner Items', label: 'Change of clothes (1–2 days)', timing: 'week-36' },
  { id: 'partner-toiletries', category: 'Partner Items', label: 'Partner toiletries bag', timing: 'week-36' },
  { id: 'partner-snacks', category: 'Partner Items', label: 'Partner snacks and drinks', timing: 'last-minute' },
  { id: 'partner-chargers', category: 'Partner Items', label: 'Chargers for all devices', timing: 'last-minute' },
  { id: 'partner-cash', category: 'Partner Items', label: 'Cash or card for cafeteria/parking', timing: 'last-minute' },
  { id: 'partner-pillow', category: 'Partner Items', label: 'Partner travel pillow / blanket', timing: 'week-36' },
  { id: 'partner-counterpressure', category: 'Partner Items', label: 'Double hip squeeze cue card or guide', timing: 'week-36' },

  // Baby Going-Home
  { id: 'baby-carseat', category: 'Baby Going-Home', label: 'Car seat installed and inspected', timing: 'early' },
  { id: 'baby-outfit-home', category: 'Baby Going-Home', label: 'Going-home outfit (newborn + 0–3 months)', timing: 'week-36' },
  { id: 'baby-swaddle', category: 'Baby Going-Home', label: 'Swaddle blanket', timing: 'week-36' },
  { id: 'baby-hat', category: 'Baby Going-Home', label: 'Baby hat', timing: 'week-36' },

  // Feeding
  { id: 'feed-nipple-cream', category: 'Feeding', label: 'Nipple cream (lanolin or similar)', timing: 'week-36' },
  { id: 'feed-nursing-pads', category: 'Feeding', label: 'Disposable nursing pads', timing: 'week-36' },
  { id: 'feed-formula', category: 'Feeding', label: 'Ready-to-feed formula if bottle-feeding or backup', timing: 'week-36' },
  { id: 'feed-bottles', category: 'Feeding', label: 'Bottles and nipples (if not breastfeeding exclusively)', timing: 'week-36' },
  { id: 'feed-haakaa', category: 'Feeding', label: 'Haakaa or silicone pump', timing: 'week-36' },

  // Toiletries
  { id: 'toi-shampoo', category: 'Toiletries', label: 'Shampoo and conditioner (travel size)', timing: 'week-36' },
  { id: 'toi-body-wash', category: 'Toiletries', label: 'Body wash', timing: 'week-36' },
  { id: 'toi-toothbrush', category: 'Toiletries', label: 'Toothbrush and toothpaste', timing: 'week-36' },
  { id: 'toi-deodorant', category: 'Toiletries', label: 'Deodorant', timing: 'week-36' },
  { id: 'toi-lip-balm', category: 'Toiletries', label: 'Lip balm (for dry air + breathing through contractions)', timing: 'week-36' },
  { id: 'toi-face-wipes', category: 'Toiletries', label: 'Face wipes or gentle cleanser', timing: 'week-36' },
  { id: 'toi-hair-brush', category: 'Toiletries', label: 'Brush or comb', timing: 'week-36' },

  // Electronics
  { id: 'elec-phone', category: 'Electronics', label: 'Phone fully charged', timing: 'day-of' },
  { id: 'elec-charger', category: 'Electronics', label: 'Phone charger (long cable)', timing: 'week-36' },
  { id: 'elec-portable-charger', category: 'Electronics', label: 'Portable power bank', timing: 'week-36' },
  { id: 'elec-camera', category: 'Electronics', label: 'Camera or extra phone for photos', timing: 'week-36' },
  { id: 'elec-headphones', category: 'Electronics', label: 'Headphones / earbuds', timing: 'week-36' },
  { id: 'elec-speaker', category: 'Electronics', label: 'Portable speaker for your labor playlist', timing: 'week-36' },
  { id: 'elec-tablet', category: 'Electronics', label: 'Tablet or laptop if staying multiple nights', timing: 'week-36' },

  // Snacks
  { id: 'snack-clear', category: 'Snacks', label: 'Clear liquids for active labor (broth, sports drink)', timing: 'last-minute' },
  { id: 'snack-light', category: 'Snacks', label: 'Light snacks for early labor (crackers, apple sauce)', timing: 'last-minute' },
  { id: 'snack-post-delivery', category: 'Snacks', label: 'Favorite post-delivery snack or meal to look forward to', timing: 'last-minute' },
  { id: 'snack-partner-meals', category: 'Snacks', label: 'Full meals for partner (hospital cafeteria may be limited)', timing: 'last-minute' },

  // Postpartum Recovery
  { id: 'pp-pain-relief', category: 'Postpartum Recovery', label: 'Peri bottle (hospital provides but bring backup)', timing: 'week-36' },
  { id: 'pp-sitz', category: 'Postpartum Recovery', label: 'Sitz bath or witch hazel pads (Tucks)', timing: 'week-36' },
  { id: 'pp-stool-softener', category: 'Postpartum Recovery', label: 'Stool softener (ask your provider)', timing: 'week-36' },
  { id: 'pp-compression', category: 'Postpartum Recovery', label: 'Compression socks or belly band', timing: 'week-36' },
  { id: 'pp-comfortable-underwear', category: 'Postpartum Recovery', label: 'Comfortable high-waisted underwear (mesh or disposable)', timing: 'week-36' },

  // Dog/Home Prep Before Leaving
  { id: 'home-pet-care', category: 'Dog/Home Prep', label: 'Pet care arranged for hospital stay', timing: 'early' },
  { id: 'home-pet-food', category: 'Dog/Home Prep', label: 'Pet food and supplies topped up', timing: 'week-36' },
  { id: 'home-house-key', category: 'Dog/Home Prep', label: 'House key with pet sitter / family member', timing: 'early' },
  { id: 'home-freezer-meals', category: 'Dog/Home Prep', label: 'Freezer meals stocked for postpartum', timing: 'week-36' },
  { id: 'home-bassinet-ready', category: 'Dog/Home Prep', label: 'Bassinet or bedside sleeper set up', timing: 'week-36' },
  { id: 'home-car-ready', category: 'Dog/Home Prep', label: 'Gas tank full, hospital route mapped', timing: 'last-minute' },
  { id: 'home-notifications', category: 'Dog/Home Prep', label: 'People to notify when labor starts (draft message ready)', timing: 'week-36' },
];

export const bagCategories = [
  'Labor Documents',
  'Mom Comfort',
  'Partner Items',
  'Baby Going-Home',
  'Feeding',
  'Toiletries',
  'Electronics',
  'Snacks',
  'Postpartum Recovery',
  'Dog/Home Prep',
] as const;

export const timingLabels: Record<HospitalBagItem['timing'], string> = {
  early: 'Pack early (36+ weeks)',
  'week-36': 'Pack at 36 weeks',
  'last-minute': 'Pack last-minute',
  'day-of': 'Grab day of',
};
