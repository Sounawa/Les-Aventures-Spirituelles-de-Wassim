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
    textAr: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    textFr: "Lis ! Au nom de ton Seigneur qui a créé.",
    source: 'Coran — Al-\'Alaq (96:1)',
    category: 'coran',
  },
  {
    id: 'w2',
    textAr: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
    textFr: "Celui qui emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis.",
    source: 'Hadith — Muslim',
    category: 'hadith',
  },
  {
    id: 'w3',
    textAr: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    textFr: "Les actes ne valent que par les intentions, et chacun sera rétribué selon son intention.",
    source: 'Hadith — Bukhari & Muslim',
    category: 'hadith',
  },
  {
    id: 'w4',
    textAr: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
    textFr: "Le meilleur des gens est celui qui est le plus utile aux autres.",
    source: 'Hadith — Ahmad & Tabarani',
    category: 'hadith',
  },
  {
    id: 'w5',
    textAr: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    textFr: "Et dis : Ô mon Seigneur, accrois mes connaissances.",
    source: 'Coran — Ta-Ha (20:114)',
    category: 'coran',
  },
  {
    id: 'w6',
    textAr: 'وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
    textFr: "Celui à qui Allah accorde la sagesse a reçu un bien immense.",
    source: 'Coran — Al-Baqarah (2:269)',
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
    textAr: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',
    textFr: "Les croyants ne sont que des frères.",
    source: 'Coran — Al-Hujurat (49:10)',
    category: 'coran',
  },
  {
    id: 'w9',
    textAr: 'الْعِلْمُ وِرَاثَةٌ مِنَ الأَنْبِيَاءِ',
    textFr: "Le savoir est l'héritage des prophètes.",
    source: 'Sagesse — Al-Ghazali (Ihya Ulum al-Din)',
    category: 'sagesse',
  },
  {
    id: 'w10',
    textAr: 'إِذَا أَرَادَ اللَّهُ بِعَبْدِهِ خَيْرًا فَقَّهْهُ فِي الدِّينِ',
    textFr: "Lorsqu'Allah veut du bien pour Son serviteur, Il lui accorde la compréhension de la religion.",
    source: 'Hadith — Bukhari & Muslim',
    category: 'hadith',
  },
  {
    id: 'w11',
    textAr: 'كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',
    textFr: "Sois dans ce monde comme un étranger ou un voyageur de passage.",
    source: 'Hadith — Bukhari',
    category: 'hadith',
  },
  {
    id: 'w12',
    textAr: 'الصَّبْرُ مِفْتَاحُ الْفَرَجِ',
    textFr: "La patience est la clé de la délivrance.",
    source: 'Sagesse — Ibn Al-Qayyim (Madarij al-Salikin)',
    category: 'sagesse',
  },
  {
    id: 'w13',
    textAr: 'تَحَلَّ بِالصَّبْرِ وَالرِّضَا وَالثِّقَةِ بِاللَّهِ',
    textFr: "Orne-toi de patience, de contentement et de confiance en Allah.",
    source: 'Sagesse — Sidi Mu\'adh, enseignement à Souhayl',
    category: 'sagesse',
  },
  {
    id: 'w14',
    textAr: 'قُلْ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
    textFr: "Seigneur, ouvre-moi ma poitrine et facilite ma mission.",
    source: 'Coran — Ta-Ha (20:25-26)',
    category: 'coran',
  },
  {
    id: 'w15',
    textAr: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
    textFr: "Ne t'attriste pas, Allah est avec nous.",
    source: 'Coran — At-Tawbah (9:40)',
    category: 'coran',
  },
  {
    id: 'w16',
    textAr: 'الرَّحْمَةُ لا تُنَالُ إِلا بِالرَّحْمَةِ',
    textFr: "On n'obtient la miséricorde qu'en étant miséricordieux.",
    source: 'Hadith — attribué à Salahuddin, citation du Prophète ﷺ',
    category: 'hadith',
  },
  {
    id: 'w17',
    textAr: 'سَادَةُ الْقَوْمِ خِدَامُهُمْ',
    textFr: "Les maîtres d'un peuple sont ceux qui le servent.",
    source: 'Sagesse — Ibn Al-Qayyim',
    category: 'sagesse',
  },
  {
    id: 'w18',
    textAr: 'الْعِلْمُ يَعْمُرُ بِالصَّبْرِ كَمَا يَعْمُرُ الْبَيْتُ بِأَهْلِهِ',
    textFr: "Le savoir s'édifie par la patience, comme une maison s'édifie par ses habitants.",
    source: 'Sagesse — attribuée à Ibn Al-Qayyim, enseignement dans la bibliothèque',
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
