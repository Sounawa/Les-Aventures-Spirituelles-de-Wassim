// Islamic Calendar Data
// Provides Islamic (Hijri) month names, events, and calendar utilities

export interface IslamicEvent {
  id: string;
  nameFr: string;
  nameAr: string;
  hijriMonth: number; // 1-12
  hijriDay: number;
  description: string;
  descriptionKid: string;
  icon: string;
  color: string; // tailwind color class for badge
  importance: 'major' | 'minor';
  // Approximate Gregorian month for 1447 AH (2025-2026 CE)
  approxGregorian: string;
}

export interface HijriMonth {
  number: number;
  nameFr: string;
  nameAr: string;
  days: number;
  season: string;
  description: string;
}

// The 12 Islamic (Hijri) months
export const hijriMonths: HijriMonth[] = [
  {
    number: 1,
    nameFr: 'Muharram',
    nameAr: 'محرّم',
    days: 30,
    season: 'Sacre',
    description: 'Le premier mois de l\'annee hегri, mois sacre',
  },
  {
    number: 2,
    nameFr: 'Safar',
    nameAr: 'صفر',
    days: 29,
    season: 'Ordinaire',
    description: 'Deuxieme mois de l\'annee',
  },
  {
    number: 3,
    nameFr: 'Rabi al-Awwal',
    nameAr: 'ربيع الأول',
    days: 30,
    season: 'Printemps',
    description: 'Troisieme mois, naissance du Prophte ﷺ',
  },
  {
    number: 4,
    nameFr: 'Rabi al-Thani',
    nameAr: 'ربيع الثاني',
    days: 29,
    season: 'Printemps',
    description: 'Quatrieme mois de l\'annee',
  },
  {
    number: 5,
    nameFr: 'Jumada al-Ula',
    nameAr: 'جمادى الأولى',
    days: 30,
    season: 'Ordinaire',
    description: 'Cinquieme mois',
  },
  {
    number: 6,
    nameFr: 'Jumada al-Thania',
    nameAr: 'جمادى الثانية',
    days: 29,
    season: 'Ordinaire',
    description: 'Sixieme mois',
  },
  {
    number: 7,
    nameFr: 'Rajab',
    nameAr: 'رجب',
    days: 30,
    season: 'Sacre',
    description: 'Septieme mois, un des mois sacres',
  },
  {
    number: 8,
    nameFr: 'Sha\'ban',
    nameAr: 'شعبان',
    days: 29,
    season: 'Ordinaire',
    description: 'Huitieme mois, preparation au Ramadan',
  },
  {
    number: 9,
    nameFr: 'Ramadan',
    nameAr: 'رمضان',
    days: 30,
    season: 'Sacre',
    description: 'Mois de jeune, le plus sacre',
  },
  {
    number: 10,
    nameFr: 'Shawwal',
    nameAr: 'شوّال',
    days: 29,
    season: 'Fete',
    description: 'Dixieme mois, Eid al-Fitr',
  },
  {
    number: 11,
    nameFr: 'Dhul Qi\'dah',
    nameAr: 'ذو القعدة',
    days: 30,
    season: 'Sacre',
    description: 'Onzieme mois, mois sacre',
  },
  {
    number: 12,
    nameFr: 'Dhul Hijjah',
    nameAr: 'ذو الحجة',
    days: 29,
    season: 'Pelerinage',
    description: 'Dernier mois, Hajj et Eid al-Adha',
  },
];

// Important Islamic events for the year
export const islamicEvents: IslamicEvent[] = [
  {
    id: 'nouvel-an',
    nameFr: 'Nouvel An Islamique',
    nameAr: 'رأس السنة الهجرية',
    hijriMonth: 1,
    hijriDay: 1,
    description: 'Le debut de la nouvelle annee hегri, commemoreant le depart du Prophete Mouhammad ﷺ de La Mecque a Medine.',
    descriptionKid: 'C\'est le debut d\'une nouvelle annee ! Comme on fete le 1er janvier, les musulmans celebrent le 1er Muharram. Le Prophete ﷺ a voyage de La Mecque a Medine ce jour-la.',
    icon: '🌑',
    color: 'bg-sky-500',
    importance: 'major',
    approxGregorian: '~26 Juin 2025',
  },
  {
    id: 'achoura',
    nameFr: 'Achoura',
    nameAr: 'عاشوراء',
    hijriMonth: 1,
    hijriDay: 10,
    description: 'Le 10e jour de Muharram, jour de jeune recommande, commemoreant la delivrance de Moussa (Moise) et son peuple.',
    descriptionKid: 'C\'est un jour tres special ou on jeun pour remercier Allah. Ce jour-la, Allah a sauve Moussa (paix sur lui) et son peuple de Pharaon !',
    icon: '📿',
    color: 'bg-indigo-500',
    importance: 'major',
    approxGregorian: '~5 Juillet 2025',
  },
  {
    id: 'mawlid',
    nameFr: 'Mawlid an-Nabi',
    nameAr: 'مولد النبي ﷺ',
    hijriMonth: 3,
    hijriDay: 12,
    description: 'Anniversaire de la naissance du Prophete Mouhammad ﷺ, celebre avec amour et devotion.',
    descriptionKid: 'C\'est le jour de la naissance de notre Prophete bien-aime Mouhammad ﷺ ! On le celebrate avec de la joie, des chants et des priere pour lui.',
    icon: '🌙',
    color: 'bg-amber-500',
    importance: 'major',
    approxGregorian: '~5 Septembre 2025',
  },
  {
    id: 'isra-miraj',
    nameFr: 'Isra et Mi\'raj',
    nameAr: 'الإسراء والمعراج',
    hijriMonth: 7,
    hijriDay: 27,
    description: 'Voyage nocturne du Prophete ﷺ de la Mosquee Sacree a la Mosquee Al-Aqsa, puis son ascension au ciel.',
    descriptionKid: 'La nuit ou Allah a fait voyager le Prophete ﷺ de La Mecque a Jerusalem en un instant, puis il est monte au ciel pour voir des choses incroyables !',
    icon: '✨',
    color: 'bg-sky-500',
    importance: 'major',
    approxGregorian: '~22 Janvier 2026',
  },
  {
    id: 'laylat-al-baraa',
    nameFr: 'Nuit du Pardon (Laylat al-Bara\'a)',
    nameAr: 'ليلة البراءة',
    hijriMonth: 8,
    hijriDay: 15,
    description: 'La Nuit du Pardon, ou Allah pardonne beaucoup de Ses serviteurs. Nuit de prieres et de supplications.',
    descriptionKid: 'Une nuit tres speciale ou Allah pardonne beaucoup de gens ! C\'est la nuit de la mi-Cha\'ban. On prie et on demande pardon a Allah.',
    icon: '🌟',
    color: 'bg-purple-500',
    importance: 'minor',
    approxGregorian: '~6 Mars 2026',
  },
  {
    id: 'ramadan-debut',
    nameFr: 'Debut du Ramadan',
    nameAr: 'بداية رمضان',
    hijriMonth: 9,
    hijriDay: 1,
    description: 'Debut du mois sacre du Ramadan, mois de jeune, de prieres et de compassion.',
    descriptionKid: 'Le Ramadan commence ! C\'est le mois le plus special de l\'annee. On ne mange pas de l\'aube au coucher du soleil, on prie beaucoup et on est gentil avec tout le monde.',
    icon: '🌙',
    color: 'bg-amber-500',
    importance: 'major',
    approxGregorian: '~1 Mars 2026',
  },
  {
    id: 'laylat-al-qadr',
    nameFr: 'Nuit du Destin (Laylat al-Qadr)',
    nameAr: 'ليلة القدر',
    hijriMonth: 9,
    hijriDay: 27,
    description: 'La Nuit du Destin, meilleure nuit de l\'annee, meilleure que mille mois. Nuit de la revelation du Coran.',
    descriptionKid: 'La meilleure nuit de toute l\'annee ! Elle vaut mille mois ! Le Coran a ete revele cette nuit. On cherche cette nuit pendant les 10 dernieres nuits du Ramadan.',
    icon: '⭐',
    color: 'bg-amber-500',
    importance: 'major',
    approxGregorian: '~27 Mars 2026',
  },
  {
    id: 'eid-al-fitr',
    nameFr: 'Eid al-Fitr',
    nameAr: 'عيد الفطر',
    hijriMonth: 10,
    hijriDay: 1,
    description: 'Fete de la rupture du jeune, celebree apres le Ramadan avec prieres, repas en famille et joie.',
    descriptionKid: 'La fete apres le Ramadan ! On mange des gateaux, on porte de beaux vetements, on va a la priere et on s\'amuse avec la famille. C\'est une grande joie !',
    icon: '🎉',
    color: 'bg-green-500',
    importance: 'major',
    approxGregorian: '~31 Mars 2026',
  },
  {
    id: 'arafat',
    nameFr: 'Jour d\'Arafat',
    nameAr: 'يوم عرفة',
    hijriMonth: 12,
    hijriDay: 9,
    description: 'Le meilleur jour de l\'annee pour le jeune et les invocations. Jour essentiel du Hajj.',
    descriptionKid: 'Le meilleur jour de toute l\'annee ! Les pelerins se tiennent sur la montagne d\'Arafat et prient. Ceux qui ne sont pas en pelerinage jeun ce jour-la.',
    icon: '🕋',
    color: 'bg-sky-500',
    importance: 'major',
    approxGregorian: '~27 Mai 2026',
  },
  {
    id: 'eid-al-adha',
    nameFr: 'Eid al-Adha',
    nameAr: 'عيد الأضحى',
    hijriMonth: 12,
    hijriDay: 10,
    description: 'Fete du Sacrifice, commemoreant le sacrifice d\'Ibrahim (Abraham). Jour de prieres et de partage.',
    descriptionKid: 'La fete du sacrifice ! On raconte l\'histoire d\'Ibrahim (paix sur lui) qui etait pret a sacrifier son fils pour Allah. Allah a remplace son fils par un mouton. On partage la viande avec tout le monde !',
    icon: '🐑',
    color: 'bg-green-500',
    importance: 'major',
    approxGregorian: '~28 Mai 2026',
  },
];

// Monthly observances and tips for kids
export const monthlyObservances: Record<number, {
  title: string;
  icon: string;
  tips: string[];
}> = {
  1: {
    title: 'Muharram - Mois Sacre',
    icon: '🌑',
    tips: [
      'Jeune le jour de Achoura (10 Muharram)',
      'Reflechis a tes resolutions pour la nouvelle annee',
      'Apprends l\'histoire de Moussa (as) et Pharaon',
    ],
  },
  2: {
    title: 'Safar - Patience',
    icon: '⏳',
    tips: [
      'Fais des du\'as pour etre protege',
      'Ne crois pas aux mauvais presages',
      'Sois patient dans tes etudes',
    ],
  },
  3: {
    title: 'Rabi al-Awwal - Amour du Prophete',
    icon: '💚',
    tips: [
      'Apprends une new sira (histoire du Prophete)',
    ],
  },
  4: {
    title: 'Rabi al-Thani - Bienveillance',
    icon: '🤝',
    tips: [
      'Sois bienveillant avec tes camarades',
      'Aide quelqu\'un dans le besoin',
      'Donne de la nourriture a un ami',
    ],
  },
  5: {
    title: 'Jumada al-Ula - gratitude',
    icon: '🙏',
    tips: [
      'Remercie Allah pour tes parents',
      'Dis "Alhamdulillah" pour chaque bienfait',
      'Fais un joli cadeau a ta mere',
    ],
  },
  6: {
    title: 'Jumada al-Thania - Generosite',
    icon: '🎁',
    tips: [
      'Donne quelque chose de precieux',
      'Partage tes jouets avec les autres',
      'Fais un sourire a quelqu\'un de triste',
    ],
  },
  7: {
    title: 'Rajab - Mois Sacre',
    icon: '🕌',
    tips: [
      'Prie beaucoup et fais des du\'as',
      'Apprends l\'histoire de l\'Isra et Mi\'raj',
      'Prepare-toi spirituellement pour le Ramadan',
    ],
  },
  8: {
    title: 'Sha\'ban - Preparation',
    icon: '🌙',
    tips: [
      'Augmente progressivement tes prieres',
      'Jeune les jours blancs (13, 14, 15)',
      'Apprends de nouvelles du\'as',
    ],
  },
  9: {
    title: 'Ramadan - Mois de Merci',
    icon: '🌙',
    tips: [
      'Jeune avec ferveur et patience',
      'Recite le Coran chaque jour',
      'Fais beaucoup de du\'as',
      'Sois extra-gentil avec tout le monde',
      'Cherche Laylat al-Qadr les 10 dernieres nuits',
    ],
  },
  10: {
    title: 'Shawwal - Reconnaissance',
    icon: '🎉',
    tips: [
      'Celebre Eid avec joie et partage',
      'Jeune 6 jours de Shawwal (Sawm as-Sittu)',
      'Remercie Allah pour le Ramadan',
    ],
  },
  11: {
    title: 'Dhul Qi\'dah - Tranquillite',
    icon: '🕊️',
    tips: [
      'Prends du temps pour reflechir',
      'Apprends les prieres du Hajj',
      'Lis des histoires de pelerins',
    ],
  },
  12: {
    title: 'Dhul Hijjah - Pelerinage',
    icon: '🕋',
    tips: [
      'Jeune le jour d\'Arafat (9 Dhul Hijjah)',
      'Dis "Takbir" beaucoup de fois',
      'Apprends l\'histoire d\'Ibrahim (as)',
    ],
  },
};

/**
 * Get approximate current Hijri date
 * Note: This is an approximation. For precise dates, use a library like hijri-date.
 * Current Hijri year ~ 1447 AH (2025-2026 CE)
 */
export function getApproximateHijriDate(): {
  day: number;
  month: number;
  year: number;
  monthName: string;
  monthNameAr: string;
} {
  const now = new Date();
  // Approximate conversion for 2025-2026
  // Muharram 1447 started approximately on June 26, 2025
  // We'll use a simple approximation
  const hijriEpoch = new Date(2025, 5, 26); // June 26, 2025
  const diffMs = now.getTime() - hijriEpoch.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let day = diffDays + 1;
  let month = 1;
  const year = 1447;

  const monthDays = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

  for (let i = 0; i < monthDays.length; i++) {
    if (day <= monthDays[i]) {
      month = i + 1;
      break;
    }
    day -= monthDays[i];
    if (i === monthDays.length - 1) {
      month = 12;
    }
  }

  const monthData = hijriMonths[month - 1];

  return {
    day: Math.max(1, day),
    month,
    year,
    monthName: monthData.nameFr,
    monthNameAr: monthData.nameAr,
  };
}

/**
 * Get upcoming Islamic events
 */
export function getUpcomingEvents(count: number = 5): IslamicEvent[] {
  const hijriDate = getApproximateHijriDate();
  const currentMonthDay = hijriDate.month * 100 + hijriDate.day;

  const sorted = [...islamicEvents].sort((a, b) => {
    const aMonthDay = a.hijriMonth * 100 + a.hijriDay;
    const bMonthDay = b.hijriMonth * 100 + b.hijriDay;

    // Check if event has passed this year
    const aPassed = aMonthDay < currentMonthDay;
    const bPassed = bMonthDay < currentMonthDay;

    if (aPassed && !bPassed) return 1;
    if (!aPassed && bPassed) return -1;
    if (aPassed && bPassed) return aMonthDay - bMonthDay;
    return aMonthDay - bMonthDay;
  });

  return sorted.slice(0, count);
}

/**
 * Get events for a specific month
 */
export function getEventsForMonth(month: number): IslamicEvent[] {
  return islamicEvents.filter(e => e.hijriMonth === month);
}
