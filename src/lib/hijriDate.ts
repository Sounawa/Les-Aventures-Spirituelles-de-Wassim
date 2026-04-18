/**
 * Approximate Hijri (Islamic) date conversion utility.
 * Uses the lunar calendar formula with ~11 days offset per year.
 * This is an approximation for display purposes.
 */

const HIJRI_MONTHS_FR = [
  'Mouharram',
  'Safar',
  'Rabi\' al-awwal',
  'Rabi\' al-thani',
  'Joumada al-oula',
  'Joumada al-thania',
  'Rajab',
  'Chaabane',
  'Ramadan',
  'Chawwal',
  'Dhou al-qi\'da',
  'Dhou al-hijja',
];

const HIJRI_MONTHS_AR = [
  'مُحَرَّم',
  'صَفَر',
  'رَبِيع الأَوَّل',
  'رَبِيع الثَّانِي',
  'جُمَادَى الأُولَى',
  'جُمَادَى الثَّانِيَة',
  'رَجَب',
  'شَعْبَان',
  'رَمَضَان',
  'شَوَّال',
  'ذُو القَعْدَة',
  'ذُو الحِجَّة',
];

interface HijriDate {
  day: number;
  month: number; // 1-12
  year: number;
  monthFr: string;
  monthAr: string;
}

/**
 * Convert a Gregorian date to an approximate Hijri date.
 * Uses the epoch-based calculation with average lunar year of 354.36667 days.
 */
export function toHijri(gregorianDate: Date = new Date()): HijriDate {
  // Hijri epoch: July 16, 622 CE (Julian) = July 19, 622 CE (Gregorian)
  // Using milliseconds since epoch approach
  const gregorianEpoch = new Date(622, 6, 16); // July 16, 622 (month is 0-indexed)
  const lunarYearMs = 354.36667 * 24 * 60 * 60 * 1000;
  const solarYearMs = 365.2425 * 24 * 60 * 60 * 1000;

  const diffMs = gregorianDate.getTime() - gregorianEpoch.getTime();
  const diffDays = diffMs / (24 * 60 * 60 * 1000);

  // Approximate Hijri year
  const hijriYears = Math.floor(diffDays / 354.36667);
  const remainingDays = diffDays - (hijriYears * 354.36667);

  // Approximate Hijri month (each month ~29.53 days)
  const hijriMonth = Math.min(11, Math.floor(remainingDays / 29.53));
  const hijriDay = Math.max(1, Math.floor(remainingDays - (hijriMonth * 29.53)) + 1);

  return {
    day: Math.min(hijriDay, 30),
    month: hijriMonth + 1, // 1-indexed
    year: 1 + hijriYears,
    monthFr: HIJRI_MONTHS_FR[hijriMonth],
    monthAr: HIJRI_MONTHS_AR[hijriMonth],
  };
}

/**
 * Format Hijri date as French string: "17 Ramadan 1446"
 */
export function formatHijriFr(date: Date = new Date()): string {
  const hijri = toHijri(date);
  return `${hijri.day} ${hijri.monthFr} ${hijri.year}`;
}

/**
 * Format Hijri date as Arabic string: "١٧ رَمَضَان ١٤٤٦"
 */
export function formatHijriAr(date: Date = new Date()): string {
  const hijri = toHijri(date);
  return `${hijri.day} ${hijri.monthAr} ${hijri.year}`;
}
