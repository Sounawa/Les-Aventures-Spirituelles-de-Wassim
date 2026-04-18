export interface QuranVerse {
  id: number;
  textAr: string;
  textFr: string;
  source: string;
  surahName: string;
  surahNumber: number;
  theme: 'courage' | 'sagesse' | 'espoir' | 'paix' | 'famille' | 'bonte';
}

export const verseThemeConfig: Record<QuranVerse['theme'], {
  icon: string;
  label: string;
  color: string;
  borderColor: string;
  darkBorderColor: string;
  bgColor: string;
  darkBgColor: string;
  leftBorder: string;
  badgeBg: string;
}> = {
  courage: {
    icon: '🦁',
    label: 'Courage',
    color: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-300/40',
    darkBorderColor: 'dark:border-orange-700/30',
    bgColor: 'from-orange-50 to-violet-50',
    darkBgColor: 'dark:from-orange-950/20 dark:to-violet-950/20',
    leftBorder: 'border-l-orange-500 dark:border-l-orange-400',
    badgeBg: 'bg-orange-100 dark:bg-orange-900/30',
  },
  sagesse: {
    icon: '🦉',
    label: 'Sagesse',
    color: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-300/40',
    darkBorderColor: 'dark:border-violet-700/30',
    bgColor: 'from-violet-50 to-orange-50',
    darkBgColor: 'dark:from-violet-950/20 dark:to-orange-950/20',
    leftBorder: 'border-l-violet-500 dark:border-l-violet-400',
    badgeBg: 'bg-violet-100 dark:bg-violet-900/30',
  },
  espoir: {
    icon: '🌟',
    label: 'Espoir',
    color: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-300/40',
    darkBorderColor: 'dark:border-orange-700/30',
    bgColor: 'from-orange-50 to-cyan-50',
    darkBgColor: 'dark:from-orange-950/20 dark:to-cyan-950/20',
    leftBorder: 'border-l-orange-500 dark:border-l-orange-400',
    badgeBg: 'bg-orange-100 dark:bg-orange-900/30',
  },
  paix: {
    icon: '🕊️',
    label: 'Paix',
    color: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-300/40',
    darkBorderColor: 'dark:border-purple-700/30',
    bgColor: 'from-purple-50 to-violet-50',
    darkBgColor: 'dark:from-purple-950/20 dark:to-violet-950/20',
    leftBorder: 'border-l-purple-500 dark:border-l-purple-400',
    badgeBg: 'bg-purple-100 dark:bg-purple-900/30',
  },
  famille: {
    icon: '👨‍👩‍👧‍👦',
    label: 'Famille',
    color: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-300/40',
    darkBorderColor: 'dark:border-rose-700/30',
    bgColor: 'from-rose-50 to-pink-50',
    darkBgColor: 'dark:from-rose-950/20 dark:to-pink-950/20',
    leftBorder: 'border-l-rose-500 dark:border-l-rose-400',
    badgeBg: 'bg-rose-100 dark:bg-rose-900/30',
  },
  bonte: {
    icon: '🌻',
    label: 'Bonté',
    color: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-300/40',
    darkBorderColor: 'dark:border-orange-700/30',
    bgColor: 'from-orange-50 to-orange-50',
    darkBgColor: 'dark:from-orange-950/20 dark:to-orange-950/20',
    leftBorder: 'border-l-orange-500 dark:border-l-orange-400',
    badgeBg: 'bg-orange-100 dark:bg-orange-900/30',
  },
};

export const quranVerses: QuranVerse[] = [
  {
    id: 1,
    textAr: 'وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    textFr: 'Et dis : « Seigneur, fais-leur miséricorde tous deux comme ils m\'ont élevé tout petit. »',
    source: 'Coran — Al-Isra (17:24)',
    surahName: 'Al-Isra',
    surahNumber: 17,
    theme: 'famille',
  },
  {
    id: 2,
    textAr: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    textFr: 'Certes, avec la difficulté vient la facilité.',
    source: 'Coran — Ash-Sharh (94:6)',
    surahName: 'Ash-Sharh',
    surahNumber: 94,
    theme: 'espoir',
  },
  {
    id: 3,
    textAr: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
    textFr: 'Si vous êtes reconnaissants, Je vous accorderai davantage de bienfaits.',
    source: 'Coran — Ibrahim (14:7)',
    surahName: 'Ibrahim',
    surahNumber: 14,
    theme: 'espoir',
  },
  {
    id: 4,
    textAr: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    textFr: 'Lis ! Au nom de ton Seigneur qui a créé.',
    source: 'Coran — Al-Alaq (96:1)',
    surahName: 'Al-Alaq',
    surahNumber: 96,
    theme: 'sagesse',
  },
  {
    id: 5,
    textAr: 'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',
    textFr: 'La prière éloigne de la turpitude et du blâmable.',
    source: 'Coran — Al-Ankabut (29:45)',
    surahName: 'Al-Ankabut',
    surahNumber: 29,
    theme: 'paix',
  },
  {
    id: 6,
    textAr: 'وَقُولُوا قَوْلًا سَدِيدًا',
    textFr: 'Et dites des paroles justes et droites.',
    source: 'Coran — Al-Ahzab (33:70)',
    surahName: 'Al-Ahzab',
    surahNumber: 33,
    theme: 'bonte',
  },
  {
    id: 7,
    textAr: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَنفِقُوا مِن طَيِّبَاتِ مَا كَسَبْتُمْ',
    textFr: 'Ô vous qui croyez, donnez en charité les meilleures choses que vous avez gagnées.',
    source: 'Coran — Al-Baqarah (2:267)',
    surahName: 'Al-Baqarah',
    surahNumber: 2,
    theme: 'bonte',
  },
  {
    id: 8,
    textAr: 'وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ',
    textFr: 'Qu\'ils pardonnent et fassent preuve d\'indulgence. N\'aimez-vous pas qu\'Allah vous pardonne ?',
    source: 'Coran — An-Nur (24:22)',
    surahName: 'An-Nur',
    surahNumber: 24,
    theme: 'paix',
  },
  {
    id: 9,
    textAr: 'وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',
    textFr: 'Sois patient, car Allah ne laisse pas perdre la récompense de ceux qui font le bien.',
    source: 'Coran — Hud (11:115)',
    surahName: 'Hud',
    surahNumber: 11,
    theme: 'courage',
  },
  {
    id: 10,
    textAr: 'وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ',
    textFr: 'Nous avons commandé à l\'homme la bienveillance envers ses parents. Sa mère l\'a porté avec peine, avec beaucoup de peine.',
    source: 'Coran — Luqman (31:14)',
    surahName: 'Luqman',
    surahNumber: 31,
    theme: 'famille',
  },
  {
    id: 11,
    textAr: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    textFr: 'Et quiconque place sa confiance en Allah, Il lui suffit.',
    source: 'Coran — At-Talaq (65:3)',
    surahName: 'At-Talaq',
    surahNumber: 65,
    theme: 'courage',
  },
  {
    id: 12,
    textAr: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    textFr: 'Et dis : « Ô mon Seigneur, accrois mes connaissances. »',
    source: 'Coran — Ta-Ha (20:114)',
    surahName: 'Ta-Ha',
    surahNumber: 20,
    theme: 'sagesse',
  },
  {
    id: 13,
    textAr: 'وَإِنَّكَ لَعَلى خُلُقٍ عَظِيمٍ',
    textFr: 'Et tu es certes d\'une moralité éminente.',
    source: 'Coran — Al-Qalam (68:4)',
    surahName: 'Al-Qalam',
    surahNumber: 68,
    theme: 'sagesse',
  },
  {
    id: 14,
    textAr: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    textFr: 'N\'est-ce pas par le rappel d\'Allah que les cœurs se tranquillisent ?',
    source: 'Coran — Ar-Ra\'d (13:28)',
    surahName: 'Ar-Ra\'d',
    surahNumber: 13,
    theme: 'paix',
  },
  {
    id: 15,
    textAr: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ',
    textFr: 'Lorsque tu as pris une décision, place ta confiance en Allah.',
    source: 'Coran — Al-Imran (3:159)',
    surahName: 'Al-Imran',
    surahNumber: 3,
    theme: 'courage',
  },
];

export function getDailyVerse(): QuranVerse {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return quranVerses[dayOfYear % quranVerses.length];
}
