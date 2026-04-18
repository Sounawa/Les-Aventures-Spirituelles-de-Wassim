export interface DailyDua {
  id: string;
  title: string;
  textAr: string;
  textFr: string;
  source: string;
  category: 'morning' | 'evening' | 'before_eating' | 'after_eating' | 'general' | 'protection' | 'gratitude';
  occasion: string;
}

export const duas: DailyDua[] = [
  {
    id: 'dua-1',
    title: "Du'a du matin",
    textAr: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    textFr: "Nous sommes entrés dans le matin et le royaume appartient à Allah. Louange à Allah. Il n'y a de divinité qu'Allah, seul, sans associé. À Lui la royauté et à Lui la louange, et Il est Omnipotent.",
    source: 'Sahih Muslim 27',
    category: 'morning',
    occasion: "Le matin, dès le réveil",
  },
  {
    id: 'dua-2',
    title: "Du'a du soir",
    textAr: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    textFr: "Nous sommes entrés dans le soir et le royaume appartient à Allah. Louange à Allah. Il n'y a de divinité qu'Allah, seul, sans associé. À Lui la royauté et à Lui la louange, et Il est Omnipotent.",
    source: 'Sahih Muslim 27',
    category: 'evening',
    occasion: "Le soir, avant de dormir",
  },
  {
    id: 'dua-3',
    title: "Du'a avant de manger",
    textAr: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
    textFr: "Au nom d'Allah et avec la bénédiction d'Allah.",
    source: 'Sahih Bukhari 5376',
    category: 'before_eating',
    occasion: "Avant de manger ou de boire",
  },
  {
    id: 'dua-4',
    title: "Du'a après avoir mangé",
    textAr: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    textFr: "Louange à Allah qui nous a nourris, abreuvés, et a fait de nous des musulmans.",
    source: 'Sunan Abi Dawud 3851',
    category: 'after_eating',
    occasion: "Après avoir mangé et bu",
  },
  {
    id: 'dua-5',
    title: "Du'a pour la gratitude",
    textAr: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ',
    textFr: "Ô Allah, à Toi la louange ! Tu es le Seigneur des cieux, de la terre et de tout ce qu'ils contiennent.",
    source: 'Sahih Bukhari 2991',
    category: 'gratitude',
    occasion: "Quand on ressent de la gratitude",
  },
  {
    id: 'dua-6',
    title: "Du'a de protection",
    textAr: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    textFr: "Au nom d'Allah, avec le nom duquel rien ne peut nuire, ni sur terre ni dans le ciel. Il est Celui qui entend tout et sait tout.",
    source: 'Sunan Abi Dawud 3892',
    category: 'protection',
    occasion: "Quand on a peur ou qu'on part de la maison",
  },
  {
    id: 'dua-7',
    title: "Du'a avant de dormir",
    textAr: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    textFr: "En Ton nom, ô Allah, je meurs et je vis.",
    source: 'Sahih Bukhari 6954',
    category: 'evening',
    occasion: "Avant de se coucher le soir",
  },
  {
    id: 'dua-8',
    title: "Du'a en se réveillant",
    textAr: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    textFr: "Louange à Allah qui nous a fait revivre après nous avoir fait mourir, et c'est vers Lui que sera la résurrection.",
    source: 'Sahih Bukhari 6312',
    category: 'morning',
    occasion: "En se réveillant le matin",
  },
  {
    id: 'dua-9',
    title: "Du'a pour demander la bonté",
    textAr: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي',
    textFr: "Ô Allah, je Te demande la bonne santé dans ce monde et dans l'au-delà. Ô Allah, je Te demande le pardon et la bonne santé dans ma religion, ma vie d'ici-bas, ma famille et mes biens.",
    source: 'Sahih Ibn Majah 3871',
    category: 'general',
    occasion: "À tout moment, pour demander le bien",
  },
  {
    id: 'dua-10',
    title: "Du'a de gratitude pour les parents",
    textAr: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    textFr: "Seigneur, fais-leur miséricorde comme ils m'ont élevé tout petit.",
    source: 'Coran — Al-Isra (17:24)',
    category: 'gratitude',
    occasion: "Quand on pense à ses parents",
  },
  {
    id: 'dua-11',
    title: "Du'a en sortant de la maison",
    textAr: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    textFr: "Au nom d'Allah, je place ma confiance en Allah. Il n'y a de puissance ni de force qu'en Allah.",
    source: 'Sunan Abi Dawud 5095',
    category: 'protection',
    occasion: "En quittant la maison",
  },
  {
    id: 'dua-12',
    title: "Du'a pour la guidée",
    textAr: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',
    textFr: "Ô Allah, guide-moi et accorde-moi la droiture.",
    source: 'Sahih Muslim 2725',
    category: 'general',
    occasion: "Quand on veut être bien guidé",
  },
  {
    id: 'dua-13',
    title: "Du'a du matin (protection)",
    textAr: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    textFr: "Ô Allah, par Toi nous entrons dans le matin, par Toi nous entrons dans le soir, par Toi nous vivons, par Toi nous mourons, et vers Toi est le retour.",
    source: 'Sunan At-Tirmidhi 3391',
    category: 'morning',
    occasion: "Le matin, pour se placer sous la protection d'Allah",
  },
  {
    id: 'dua-14',
    title: "Du'a avant d'étudier",
    textAr: 'رَبِّ زِدْنِي عِلْمًا',
    textFr: "Seigneur, augmente mes connaissances.",
    source: 'Coran — Ta-Ha (20:114)',
    category: 'general',
    occasion: "Avant d'étudier ou d'apprendre",
  },
];

export const duaCategoryConfig: Record<DailyDua['category'], { icon: string; label: string; color: string; borderColor: string; darkBorderColor: string; bgColor: string; darkBgColor: string }> = {
  morning: {
    icon: '🌅',
    label: 'Matin',
    color: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-300/40',
    darkBorderColor: 'dark:border-orange-700/30',
    bgColor: 'from-orange-50 to-violet-50',
    darkBgColor: 'dark:from-orange-950/20 dark:to-violet-950/20',
  },
  evening: {
    icon: '🌙',
    label: 'Soir',
    color: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-300/40',
    darkBorderColor: 'dark:border-purple-700/30',
    bgColor: 'from-purple-50 to-violet-50',
    darkBgColor: 'dark:from-purple-950/20 dark:to-violet-950/20',
  },
  before_eating: {
    icon: '🍽️',
    label: 'Avant le repas',
    color: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-300/40',
    darkBorderColor: 'dark:border-violet-700/30',
    bgColor: 'from-violet-50 to-orange-50',
    darkBgColor: 'dark:from-violet-950/20 dark:to-orange-950/20',
  },
  after_eating: {
    icon: '🤲',
    label: 'Après le repas',
    color: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-300/40',
    darkBorderColor: 'dark:border-violet-700/30',
    bgColor: 'from-violet-50 to-green-50',
    darkBgColor: 'dark:from-violet-950/20 dark:to-green-950/20',
  },
  general: {
    icon: '📿',
    label: 'Général',
    color: 'text-stone-600 dark:text-stone-300',
    borderColor: 'border-stone-300/40',
    darkBorderColor: 'dark:border-stone-700/30',
    bgColor: 'from-stone-50 to-warm-50',
    darkBgColor: 'dark:from-stone-900/40 dark:to-stone-950/40',
  },
  protection: {
    icon: '🛡️',
    label: 'Protection',
    color: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-300/40',
    darkBorderColor: 'dark:border-orange-700/30',
    bgColor: 'from-orange-50 to-cyan-50',
    darkBgColor: 'dark:from-orange-950/20 dark:to-cyan-950/20',
  },
  gratitude: {
    icon: '💝',
    label: 'Gratitude',
    color: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-300/40',
    darkBorderColor: 'dark:border-rose-700/30',
    bgColor: 'from-rose-50 to-pink-50',
    darkBgColor: 'dark:from-rose-950/20 dark:to-pink-950/20',
  },
};

export function getDailyDua(): DailyDua {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return duas[dayOfYear % duas.length];
}
