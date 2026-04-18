// Prayer times data for the Nawfel app
// Approximate fixed prayer times for various cities (no API needed)

export interface PrayerTime {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  icon: string;
  description: string;
  hour: number;
  minute: number;
}

export interface CityPrayerTimes {
  id: string;
  name: string;
  country: string;
  flag: string;
  prayers: PrayerTime[];
}

export const CITIES: CityPrayerTimes[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    flag: '🇫🇷',
    prayers: [
      { id: 'fajr', name: 'Fajr', nameAr: 'أَلْفَجْر', nameFr: 'Prière de l\'aube', icon: '🌅', description: 'Avant le lever du soleil', hour: 6, minute: 15 },
      { id: 'dhouhr', name: 'Dhouhr', nameAr: 'الظُّهْر', nameFr: 'Prière de midi', icon: '☀️', description: 'Midday', hour: 13, minute: 30 },
      { id: 'asr', name: 'Asr', nameAr: 'العَصْر', nameFr: 'Prière de l\'après-midi', icon: '🌤️', description: 'Fin d\'après-midi', hour: 16, minute: 45 },
      { id: 'maghrib', name: 'Maghrib', nameAr: 'المَغْرِب', nameFr: 'Prière du coucher', icon: '🌇', description: 'Juste après le coucher', hour: 19, minute: 30 },
      { id: 'isha', name: 'Isha', nameAr: 'العِشَاء', nameFr: 'Prière de la nuit', icon: '🌙', description: 'Après le crépuscule', hour: 21, minute: 0 },
    ],
  },
  {
    id: 'london',
    name: 'Londres',
    country: 'Royaume-Uni',
    flag: '🇬🇧',
    prayers: [
      { id: 'fajr', name: 'Fajr', nameAr: 'أَلْفَجْر', nameFr: 'Prière de l\'aube', icon: '🌅', description: 'Avant le lever du soleil', hour: 5, minute: 30 },
      { id: 'dhouhr', name: 'Dhouhr', nameAr: 'الظُّهْر', nameFr: 'Prière de midi', icon: '☀️', description: 'Midday', hour: 12, minute: 45 },
      { id: 'asr', name: 'Asr', nameAr: 'العَصْر', nameFr: 'Prière de l\'après-midi', icon: '🌤️', description: 'Fin d\'après-midi', hour: 15, minute: 50 },
      { id: 'maghrib', name: 'Maghrib', nameAr: 'المَغْرِب', nameFr: 'Prière du coucher', icon: '🌇', description: 'Juste après le coucher', hour: 19, minute: 0 },
      { id: 'isha', name: 'Isha', nameAr: 'العِشَاء', nameFr: 'Prière de la nuit', icon: '🌙', description: 'Après le crépuscule', hour: 20, minute: 30 },
    ],
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turquie',
    flag: '🇹🇷',
    prayers: [
      { id: 'fajr', name: 'Fajr', nameAr: 'أَلْفَجْر', nameFr: 'Prière de l\'aube', icon: '🌅', description: 'Avant le lever du soleil', hour: 5, minute: 45 },
      { id: 'dhouhr', name: 'Dhouhr', nameAr: 'الظُّهْر', nameFr: 'Prière de midi', icon: '☀️', description: 'Midday', hour: 12, minute: 50 },
      { id: 'asr', name: 'Asr', nameAr: 'العَصْر', nameFr: 'Prière de l\'après-midi', icon: '🌤️', description: 'Fin d\'après-midi', hour: 16, minute: 10 },
      { id: 'maghrib', name: 'Maghrib', nameAr: 'المَغْرِب', nameFr: 'Prière du coucher', icon: '🌇', description: 'Juste après le coucher', hour: 19, minute: 15 },
      { id: 'isha', name: 'Isha', nameAr: 'العِشَاء', nameFr: 'Prière de la nuit', icon: '🌙', description: 'Après le crépuscule', hour: 20, minute: 45 },
    ],
  },
  {
    id: 'casablanca',
    name: 'Casablanca',
    country: 'Maroc',
    flag: '🇲🇦',
    prayers: [
      { id: 'fajr', name: 'Fajr', nameAr: 'أَلْفَجْر', nameFr: 'Prière de l\'aube', icon: '🌅', description: 'Avant le lever du soleil', hour: 5, minute: 50 },
      { id: 'dhouhr', name: 'Dhouhr', nameAr: 'الظُّهْر', nameFr: 'Prière de midi', icon: '☀️', description: 'Midday', hour: 12, minute: 40 },
      { id: 'asr', name: 'Asr', nameAr: 'العَصْر', nameFr: 'Prière de l\'après-midi', icon: '🌤️', description: 'Fin d\'après-midi', hour: 16, minute: 0 },
      { id: 'maghrib', name: 'Maghrib', nameAr: 'المَغْرِب', nameFr: 'Prière du coucher', icon: '🌇', description: 'Juste après le coucher', hour: 18, minute: 55 },
      { id: 'isha', name: 'Isha', nameAr: 'العِشَاء', nameFr: 'Prière de la nuit', icon: '🌙', description: 'Après le crépuscule', hour: 20, minute: 15 },
    ],
  },
  {
    id: 'dubai',
    name: 'Dubaï',
    country: 'Émirats Arabes Unis',
    flag: '🇦🇪',
    prayers: [
      { id: 'fajr', name: 'Fajr', nameAr: 'أَلْفَجْر', nameFr: 'Prière de l\'aube', icon: '🌅', description: 'Avant le lever du soleil', hour: 4, minute: 45 },
      { id: 'dhouhr', name: 'Dhouhr', nameAr: 'الظُّهْر', nameFr: 'Prière de midi', icon: '☀️', description: 'Midday', hour: 12, minute: 15 },
      { id: 'asr', name: 'Asr', nameAr: 'العَصْر', nameFr: 'Prière de l\'après-midi', icon: '🌤️', description: 'Fin d\'après-midi', hour: 15, minute: 30 },
      { id: 'maghrib', name: 'Maghrib', nameAr: 'المَغْرِب', nameFr: 'Prière du coucher', icon: '🌇', description: 'Juste après le coucher', hour: 18, minute: 45 },
      { id: 'isha', name: 'Isha', nameAr: 'العِشَاء', nameFr: 'Prière de la nuit', icon: '🌙', description: 'Après le crépuscule', hour: 20, minute: 15 },
    ],
  },
];

export function getCityById(cityId: string): CityPrayerTimes {
  return CITIES.find(c => c.id === cityId) || CITIES[0];
}

export type PrayerStatus = 'past' | 'current' | 'next' | 'upcoming';

export function getPrayerStatus(
  prayer: PrayerTime,
  allPrayers: PrayerTime[],
  nowHours: number,
  nowMinutes: number
): PrayerStatus {
  const nowMinutesTotal = nowHours * 60 + nowMinutes;
  const prayerMinutes = prayer.hour * 60 + prayer.minute;

  // Find the next prayer
  let nextPrayerIndex = 0;
  for (let i = 0; i < allPrayers.length; i++) {
    const p = allPrayers[i];
    if (p.hour * 60 + p.minute > nowMinutesTotal) {
      nextPrayerIndex = i;
      break;
    }
    // If we've passed all prayers, next is Fajr tomorrow
    if (i === allPrayers.length - 1) {
      nextPrayerIndex = 0;
    }
  }

  const prayerIndex = allPrayers.findIndex(p => p.id === prayer.id);

  // Check if past
  const prayerMinutesTotal = prayer.hour * 60 + prayer.minute;
  // For the "next" check: is this the first prayer after now?
  const nextPrayer = allPrayers[nextPrayerIndex];
  const nextPrayerMinutes = nextPrayer.hour * 60 + nextPrayer.minute;

  if (prayerIndex < nextPrayerIndex || (nextPrayerIndex === 0 && prayerMinutesTotal <= nowMinutesTotal)) {
    return 'past';
  }
  if (prayer.id === nextPrayer.id) {
    // Check if we're currently within the prayer time window (within 30 min)
    if (nowMinutesTotal >= prayerMinutesTotal && nowMinutesTotal < prayerMinutesTotal + 30) {
      return 'current';
    }
    return 'next';
  }
  return 'upcoming';
}

export function getNextPrayer(cityId: string): { prayer: PrayerTime; city: CityPrayerTimes } | null {
  const city = getCityById(cityId);
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const prayer of city.prayers) {
    const prayerMinutes = prayer.hour * 60 + prayer.minute;
    if (prayerMinutes > nowMinutes) {
      return { prayer, city };
    }
  }
  // All prayers passed, next is Fajr tomorrow
  return { prayer: city.prayers[0], city };
}

export function getTimeRemaining(cityId: string): string {
  const result = getNextPrayer(cityId);
  if (!result) return '';

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const targetMinutes = result.prayer.hour * 60 + result.prayer.minute;

  let diff = targetMinutes - nowMinutes;
  if (diff <= 0) diff += 24 * 60; // Next day

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  if (hours > 0 && minutes > 0) return `Dans ${hours}h ${minutes}min`;
  if (hours > 0) return `Dans ${hours}h`;
  return `Dans ${minutes}min`;
}
