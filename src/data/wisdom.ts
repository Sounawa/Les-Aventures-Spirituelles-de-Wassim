export interface WisdomQuote {
  id: string;
  textAr: string;
  textFr: string;
  source: string;
  category: 'hadith' | 'coran' | 'sagesse';
}

export const wisdomQuotes: WisdomQuote[] = [
  {
    id: 'w1',
    textAr: 'إنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    textFr: "Les actes ne valent que par les intentions, et chacun sera rétribué selon son intention.",
    source: 'Hadith — Bukhari & Muslim',
    category: 'hadith',
  },
  {
    id: 'w2',
    textAr: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    textFr: "Celui qui croit en Allah et au Jour Dernier, qu'il dise du bien ou qu'il se taise.",
    source: 'Hadith — Bukhari & Muslim',
    category: 'hadith',
  },
  {
    id: 'w3',
    textAr: 'لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    textFr: "Aucun d'entre vous ne croit véritablement tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",
    source: 'Hadith — Bukhari & Muslim',
    category: 'hadith',
  },
  {
    id: 'w4',
    textAr: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
    textFr: "Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure façon.",
    source: 'Hadith — Abu Dawud & Nasai',
    category: 'hadith',
  },
  {
    id: 'w5',
    textAr: 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
    textFr: "Quiconque craint Allah, Il lui donnera une issue et le pourvoira par des moyens qu'il ne soupçonnait pas.",
    source: 'Coran — At-Talaq (65:2-3)',
    category: 'coran',
  },
  {
    id: 'w6',
    textAr: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
    textFr: "Et ton Seigneur te donnera et tu seras satisfait.",
    source: 'Coran — Ad-Duha (93:5)',
    category: 'coran',
  },
  {
    id: 'w7',
    textAr: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    textFr: "Certes, avec la difficulté vient la facilité.",
    source: 'Coran — Ash-Sharh (94:6)',
    category: 'coran',
  },
  {
    id: 'w8',
    textAr: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
    textFr: "Souvenez-vous de Moi, et Je Me souviendrai de vous.",
    source: 'Coran — Al-Baqarah (2:152)',
    category: 'coran',
  },
  {
    id: 'w9',
    textAr: 'الصَّبْرُ مِفْتَاحُ الْفَرَجِ',
    textFr: "La patience est la clé de la délivrance.",
    source: 'Sagesse soufie',
    category: 'sagesse',
  },
  {
    id: 'w10',
    textAr: 'أَكْثِرُوا مِنْ ذِكْرِ اللَّهِ حَتَّى يَقُولُوا: مُجَنُونٌ',
    textFr: "Multipliez le rappel d'Allah, même si les gens vous prennent pour des fous.",
    source: 'Sagesse — attribuée à Abu Bakr As-Siddiq',
    category: 'sagesse',
  },
  {
    id: 'w11',
    textAr: 'الْعِلْمُ نُورٌ وَالْجَهْلُ ظَلَامٌ',
    textFr: "Le savoir est lumière et l'ignorance est ténèbres.",
    source: 'Sagesse soufie',
    category: 'sagesse',
  },
  {
    id: 'w12',
    textAr: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
    textFr: "Le meilleur des gens est celui qui est le plus utile aux autres.",
    source: 'Hadith — Ahmad & Tabarani',
    category: 'hadith',
  },
  {
    id: 'w13',
    textAr: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    textFr: "Et dis : Ô mon Seigneur, accrois mes connaissances.",
    source: 'Coran — Ta-Ha (20:114)',
    category: 'coran',
  },
  {
    id: 'w14',
    textAr: 'تَحَلَّ بِالصَّبْرِ وَالشُّكْرِ وَالرِّضَا',
    textFr: "Orne-toi de patience, de gratitude et de contentement.",
    source: 'Sagesse — Ibn Ata\'illah',
    category: 'sagesse',
  },
  {
    id: 'w15',
    textAr: 'الْقَلْبُ الصَّحِيحُ هُوَ الْقَلْبُ السَّلِيمُ مِنْ كُلِّ شَيْءٍ غَيْرِ اللَّهِ',
    textFr: "Le cœur sain est le cœur libre de tout ce qui n'est pas Allah.",
    source: 'Sagesse — Ibn Taymiyya',
    category: 'sagesse',
  },
];

export function getDailyWisdom(): WisdomQuote {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return wisdomQuotes[dayOfYear % wisdomQuotes.length];
}

export function getRandomWisdom(): WisdomQuote {
  return wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
}
