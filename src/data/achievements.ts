import { tomes } from '@/data/tomes';

// ─────────────────────────────────────────────────────────────
// Islamic Learning Badges & Achievements System
// Les Aventures Spirituelles de Souhayl
// ─────────────────────────────────────────────────────────────

export type AchievementCategory = 'lecture' | 'sagesse' | 'spiritualite' | 'defis' | 'jeux';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  color: string;
}

export interface AchievementState {
  completedChapters: string[];
  completedChallenges: string[];
  earnedBadges: string[];
  totalDhikr: number;
  totalDhikrSessions: number;
  memoryBestScore: number;
  memoryGamesPlayed: number;
  dailyStreak: number;
  readingDays: string[];
  quizScores: Record<string, number>;
  journalEntries: { id: string }[];
  challengeXP: number;
}

// ─────────────────────────────────────────────────────────────
// Category Configuration
// ─────────────────────────────────────────────────────────────

export const achievementCategories: { key: AchievementCategory; label: string; icon: string; color: string }[] = [
  { key: 'lecture', label: 'Lecture', icon: '📖', color: '#D97706' },
  { key: 'sagesse', label: 'Sagesse', icon: '🧠', color: '#7C3AED' },
  { key: 'spiritualite', label: 'Spiritualité', icon: '📿', color: '#0D9488' },
  { key: 'defis', label: 'Défis', icon: '⭐', color: '#EA580C' },
  { key: 'jeux', label: 'Jeux', icon: '🎮', color: '#DB2777' },
];

// ─────────────────────────────────────────────────────────────
// 20 Achievements
// ─────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  // ─── 📖 LECTURE (5) ───────────────────────────────────────
  {
    id: 'first_lecture',
    title: 'Première Lecture',
    description: "Tu as lu ton premier chapitre. Le voyage spirituel commence !",
    icon: '📖',
    category: 'lecture',
    color: '#D97706',
  },
  {
    id: 'lecteur_passionne',
    title: 'Lecteur Passionné',
    description: "Tu as complété 5 chapitres. Ton cœur s'ouvre à la sagesse.",
    icon: '📚',
    category: 'lecture',
    color: '#D97706',
  },
  {
    id: 'explorateur_tomes',
    title: 'Explorateur des Tomes',
    description: "Tu as exploré des chapitres dans 3 tomes différents.",
    icon: '🧭',
    category: 'lecture',
    color: '#D97706',
  },
  {
    id: 'maitre_histoires',
    title: 'Maître des Histoires',
    description: "Tu as complété 10 chapitres. La quête spirituelle s'approfondit.",
    icon: '👑',
    category: 'lecture',
    color: '#D97706',
  },
  {
    id: 'tous_tomes_complets',
    title: 'Tous les Tomes Complétés',
    description: "Tu as complété tous les chapitres de l'aventure. Masha'Allah !",
    icon: '🌟',
    category: 'lecture',
    color: '#D97706',
  },

  // ─── 🧠 SAGESSE (3) ───────────────────────────────────────
  {
    id: 'chercheur_verite',
    title: 'Chercheur de Vérité',
    description: "Tu as passé ton premier quiz. La connaissance est une lumière.",
    icon: '🔍',
    category: 'sagesse',
    color: '#7C3AED',
  },
  {
    id: 'cœur_eclaire',
    title: 'Cœur Éclairé',
    description: "Tu as obtenu 100% à un quiz. Ton cœur retient la sagesse !",
    icon: '💡',
    category: 'sagesse',
    color: '#7C3AED',
  },
  {
    id: 'sage_en_herbe',
    title: 'Sage en Herbe',
    description: "Tu as complété 5 quiz. Le savoir s'accumule goutte par goutte.",
    icon: '🎓',
    category: 'sagesse',
    color: '#7C3AED',
  },

  // ─── 📿 SPIRITUALITÉ (4) ──────────────────────────────────
  {
    id: 'dhikr_regulier',
    title: 'Dhikr Régulier',
    description: "Tu as complété 3 sessions de dhikr. Ton cœur se souvient d'Allah.",
    icon: '📿',
    category: 'spiritualite',
    color: '#0D9488',
  },
  {
    id: 'cœur_apaise',
    title: 'Cœur Pacifié',
    description: "Tu as récité 500 dhikrs au total. Le cœur trouve la paix.",
    icon: '☮️',
    category: 'spiritualite',
    color: '#0D9488',
  },
  {
    id: 'pilier_priere',
    title: 'Pilier de la Prière',
    description: "Tu as gardé une série de 7 jours consécutifs. La constance est une prière.",
    icon: '🕌',
    category: 'spiritualite',
    color: '#0D9488',
  },
  {
    id: 'amour_prophete',
    title: "Amour du Prophète ﷺ",
    description: "Tu as récité 1000 dhikrs. L'amour du Prophète éclaire ton chemin.",
    icon: '🤲',
    category: 'spiritualite',
    color: '#0D9488',
  },

  // ─── ⭐ DÉFIS (4) ──────────────────────────────────────────
  {
    id: 'premier_defi',
    title: 'Premier Défi',
    description: "Tu as relevé ton premier défi spirituel quotidien.",
    icon: '🎯',
    category: 'defis',
    color: '#EA580C',
  },
  {
    id: 'defi_semaine',
    title: 'Défi de la Semaine',
    description: "Tu as accompli 5 défis quotidiens. La persévérance paie !",
    icon: '📅',
    category: 'defis',
    color: '#EA580C',
  },
  {
    id: 'champion_defis',
    title: 'Champion des Défis',
    description: "Tu as accumulé 200 XP de défis. Tu es un champion spirituel !",
    icon: '🏆',
    category: 'defis',
    color: '#EA580C',
  },
  {
    id: 'constance_royale',
    title: 'Constance Royale',
    description: "Tu as lu pendant 10 jours différents. La constance est la clé.",
    icon: '👑',
    category: 'defis',
    color: '#EA580C',
  },

  // ─── 🎮 JEUX (4) ──────────────────────────────────────────
  {
    id: 'premiere_victoire',
    title: 'Première Victoire',
    description: "Tu as gagné ta première partie du Memory. Bravo !",
    icon: '🎮',
    category: 'jeux',
    color: '#DB2777',
  },
  {
    id: 'memoire_elephant',
    title: 'Mémoire d\'Éléphant',
    description: "Tu as joué 5 parties de Memory. Ton cerveau s'entraîne !",
    icon: '🐘',
    category: 'jeux',
    color: '#DB2777',
  },
  {
    id: 'speed_runner',
    title: 'Speed Runner',
    description: "Tu as terminé le Memory en moins de 16 coups. Vitesse et précision !",
    icon: '⚡',
    category: 'jeux',
    color: '#DB2777',
  },
  {
    id: 'badge_virtu',
    title: 'Badge de Vertu',
    description: "Tu as collecté 5 badges spirituels. Tes qualités rayonnent !",
    icon: '🏅',
    category: 'jeux',
    color: '#DB2777',
  },
];

// ─────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────

function getTotalChapters(): number {
  return tomes.reduce((sum, tome) => sum + tome.chapters.length, 0);
}

function getAllChapterIds(): string[] {
  return tomes.flatMap(tome => tome.chapters.map(ch => ch.id));
}

function getTomesWithCompletedChapters(completedChapterIds: string[]): number {
  const tomeIds = new Set<string>();
  for (const chapterId of completedChapterIds) {
    for (const tome of tomes) {
      if (tome.chapters.some(ch => ch.id === chapterId)) {
        tomeIds.add(tome.id);
      }
    }
  }
  return tomeIds.size;
}

const QUESTIONS_PER_QUIZ = 5;

// ─────────────────────────────────────────────────────────────
// Achievement Progress — returns 0-1 progress for each achievement
// ─────────────────────────────────────────────────────────────

export function getAchievementProgress(state: AchievementState): Record<string, number> {
  const { completedChapters, completedChallenges, earnedBadges, totalDhikr, totalDhikrSessions, memoryBestScore, memoryGamesPlayed, dailyStreak, readingDays, quizScores, journalEntries, challengeXP } = state;

  const totalChapters = getTotalChapters();
  const quizKeys = Object.keys(quizScores);
  const hasPerfectScore = quizKeys.some(key => quizScores[key] >= QUESTIONS_PER_QUIZ);
  const tomesExplored = getTomesWithCompletedChapters(completedChapters);

  return {
    // Lecture
    first_lecture: Math.min(completedChapters.length / 1, 1),
    lecteur_passionne: Math.min(completedChapters.length / 5, 1),
    explorateur_tomes: Math.min(tomesExplored / 3, 1),
    maitre_histoires: Math.min(completedChapters.length / 10, 1),
    tous_tomes_complets: totalChapters > 0 ? Math.min(completedChapters.length / totalChapters, 1) : 0,

    // Sagesse
    chercheur_verite: Math.min(quizKeys.length / 1, 1),
    cœur_eclaire: hasPerfectScore ? 1 : quizKeys.length > 0 ? Math.min(Math.max(...quizKeys.map(k => quizScores[k])) / QUESTIONS_PER_QUIZ, 1) : 0,
    sage_en_herbe: Math.min(quizKeys.length / 5, 1),

    // Spiritualité
    dhikr_regulier: Math.min(totalDhikrSessions / 3, 1),
    cœur_apaise: Math.min(totalDhikr / 500, 1),
    pilier_priere: Math.min(dailyStreak / 7, 1),
    amour_prophete: Math.min(totalDhikr / 1000, 1),

    // Défis
    premier_defi: Math.min(completedChallenges.length / 1, 1),
    defi_semaine: Math.min(completedChallenges.length / 5, 1),
    champion_defis: Math.min(challengeXP / 200, 1),
    constance_royale: Math.min(readingDays.length / 10, 1),

    // Jeux
    premiere_victoire: memoryGamesPlayed >= 1 ? 1 : 0,
    memoire_elephant: Math.min(memoryGamesPlayed / 5, 1),
    speed_runner: memoryBestScore > 0 && memoryBestScore <= 16 ? 1 : memoryBestScore > 0 ? Math.min((16 / memoryBestScore) * 0.5, 1) : 0,
    badge_virtu: Math.min(earnedBadges.length / 5, 1),
  };
}

// ─────────────────────────────────────────────────────────────
// Achievement Checker — returns IDs of currently unlockable achievements
// ─────────────────────────────────────────────────────────────

export function getUnlockedAchievements(state: AchievementState): string[] {
  const unlocked: string[] = [];
  const { completedChapters, completedChallenges, earnedBadges, totalDhikr, totalDhikrSessions, memoryBestScore, memoryGamesPlayed, dailyStreak, readingDays, quizScores, challengeXP } = state;

  const totalChapters = getTotalChapters();
  const quizKeys = Object.keys(quizScores);
  const hasPerfectScore = quizKeys.some(key => quizScores[key] >= QUESTIONS_PER_QUIZ);
  const tomesExplored = getTomesWithCompletedChapters(completedChapters);

  // ─── LECTURE ──────────────────────────────────────────────

  if (completedChapters.length >= 1) unlocked.push('first_lecture');
  if (completedChapters.length >= 5) unlocked.push('lecteur_passionne');
  if (tomesExplored >= 3) unlocked.push('explorateur_tomes');
  if (completedChapters.length >= 10) unlocked.push('maitre_histoires');
  if (totalChapters > 0 && completedChapters.length >= totalChapters) unlocked.push('tous_tomes_complets');

  // ─── SAGESSE ──────────────────────────────────────────────

  if (quizKeys.length >= 1) unlocked.push('chercheur_verite');
  if (hasPerfectScore) unlocked.push('cœur_eclaire');
  if (quizKeys.length >= 5) unlocked.push('sage_en_herbe');

  // ─── SPIRITUALITÉ ─────────────────────────────────────────

  if (totalDhikrSessions >= 3) unlocked.push('dhikr_regulier');
  if (totalDhikr >= 500) unlocked.push('cœur_apaise');
  if (dailyStreak >= 7) unlocked.push('pilier_priere');
  if (totalDhikr >= 1000) unlocked.push('amour_prophete');

  // ─── DÉFIS ────────────────────────────────────────────────

  if (completedChallenges.length >= 1) unlocked.push('premier_defi');
  if (completedChallenges.length >= 5) unlocked.push('defi_semaine');
  if (challengeXP >= 200) unlocked.push('champion_defis');
  if (readingDays.length >= 10) unlocked.push('constance_royale');

  // ─── JEUX ─────────────────────────────────────────────────

  if (memoryGamesPlayed >= 1) unlocked.push('premiere_victoire');
  if (memoryGamesPlayed >= 5) unlocked.push('memoire_elephant');
  if (memoryBestScore > 0 && memoryBestScore <= 16) unlocked.push('speed_runner');
  if (earnedBadges.length >= 5) unlocked.push('badge_virtu');

  return unlocked;
}

// ─────────────────────────────────────────────────────────────
// Lookup helper
// ─────────────────────────────────────────────────────────────

export function getAchievement(id: string): Achievement | undefined {
  return achievements.find(a => a.id === id);
}
