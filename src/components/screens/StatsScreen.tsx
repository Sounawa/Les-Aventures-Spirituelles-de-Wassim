'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { badges } from '@/data/badges';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, BookOpen, Trophy, Star, Brain,
  Flame, Target, TrendingUp, BookHeart, CalendarDays,
} from 'lucide-react';

const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

function getLast7Days(): { dateStr: string; dayLabel: string; isToday: boolean; isFuture: boolean }[] {
  const today = new Date();
  const days: { dateStr: string; dayLabel: string; isToday: boolean; isFuture: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayOfWeek = d.getDay();
    // JS Sunday=0, we want Monday=0
    const idx = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    days.push({
      dateStr,
      dayLabel: DAY_LABELS[idx],
      isToday: i === 0,
      isFuture: i < 0,
    });
  }
  return days;
}

function computeBestStreak(readingDays: string[]): number {
  if (readingDays.length === 0) return 0;
  const sorted = [...readingDays].sort();
  let best = 1;
  let current = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      current++;
      best = Math.max(best, current);
    } else if (diffDays > 1) {
      current = 1;
    }
  }
  return best;
}

function StatCard({
  icon, label, value, sub, color, delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay }}
      className="parchment-card rounded-xl p-4 flex items-start gap-3"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-stone-400 dark:text-stone-500 font-medium">{label}</p>
        <p className="text-xl font-bold text-stone-800 dark:text-stone-100 mt-0.5">{value}</p>
        {sub && <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

function ProgressRing({
  progress, size = 80, strokeWidth = 6, color = '#D97706',
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="currentColor" strokeWidth={strokeWidth}
          className="text-stone-100 dark:text-stone-700"
        />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-stone-700 dark:text-stone-300">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

function getMotivationalMessage(progress: number) {
  if (progress === 0) return { emoji: '🚀', text: 'Ton aventure t\'attend !', gradient: 'from-stone-400 to-stone-500 dark:from-stone-600 dark:to-stone-700' };
  if (progress <= 25) return { emoji: '🌱', text: 'Tu as posé la première pierre de ton chemin', gradient: 'from-violet-400 to-orange-500 dark:from-violet-600 dark:to-orange-700' };
  if (progress <= 50) return { emoji: '📈', text: 'Tu progresses avec persévérance', gradient: 'from-orange-400 to-cyan-500 dark:from-orange-600 dark:to-cyan-700' };
  if (progress <= 75) return { emoji: '⭐', text: 'Plus de la moitié parcourue !', gradient: 'from-orange-400 to-violet-500 dark:from-orange-600 dark:to-violet-700' };
  if (progress < 100) return { emoji: '🏆', text: 'Presque au bout du voyage !', gradient: 'from-rose-400 to-pink-500 dark:from-rose-600 dark:to-pink-700' };
  return { emoji: '🌟', text: 'Masha\'Allah ! Aventure complétée !', gradient: 'from-orange-300 via-yellow-400 to-orange-500 dark:from-orange-500 dark:via-yellow-500 dark:to-orange-600' };
}

export function StatsScreen() {
  const { navigateTo, completedChapters, earnedBadges, completedScenes, quizScores, journalEntries, dailyStreak, readingDays } = useApp();

  const stats = useMemo(() => {
    const totalChapters = tomes.reduce((s, t) => s + t.chapters.length, 0);
    const totalScenes = tomes.reduce((s, t) => s + t.chapters.reduce((cs, c) => cs + c.scenes.length, 0), 0);
    const completedTomes = tomes.filter(t =>
      t.chapters.every(c => completedChapters.includes(c.id))
    ).length;
    const avgQuizScore = Object.keys(quizScores).length > 0
      ? Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.keys(quizScores).length)
      : 0;
    const bestQuizScore = Object.values(quizScores).length > 0
      ? Math.max(...Object.values(quizScores))
      : 0;
    const quizzesTaken = Object.keys(quizScores).length;

    // Find first completed chapter for insights
    const allChapters = tomes.flatMap(t => t.chapters);
    const firstCompletedChapter = allChapters.find(c => completedChapters.includes(c.id));

    // Find next locked chapter
    const nextLockedChapter = allChapters.find(c => !completedChapters.includes(c.id));

    return {
      totalChapters,
      totalScenes,
      completedTomes,
      totalTomes: tomes.length,
      avgQuizScore,
      bestQuizScore,
      quizzesTaken,
      globalProgress: totalChapters > 0 ? (completedChapters.length / totalChapters) * 100 : 0,
      badgeProgress: (earnedBadges.length / badges.length) * 100,
      totalJournalEntries: journalEntries.length,
      scenesProgress: totalScenes > 0 ? (completedScenes.length / totalScenes) * 100 : 0,
      firstCompletedChapter,
      nextLockedChapter,
      allDone: completedChapters.length === totalChapters,
    };
  }, [completedChapters, earnedBadges, completedScenes, quizScores, journalEntries]);

  // Tome-level breakdown
  const tomeStats = useMemo(() =>
    tomes.map(tome => {
      const completed = tome.chapters.filter(c => completedChapters.includes(c.id)).length;
      return {
        id: tome.id,
        number: tome.number,
        title: tome.title,
        total: tome.chapters.length,
        completed,
        progress: (completed / tome.chapters.length) * 100,
      };
    }), [completedChapters]);

  const hasNoProgress = completedChapters.length === 0;
  const motivation = getMotivationalMessage(stats.globalProgress);

  // Weekly calendar data
  const weekDays = useMemo(() => getLast7Days(), []);
  const bestStreak = useMemo(() => computeBestStreak(readingDays), [readingDays]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-violet-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-orange-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-orange-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            Statistiques
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {hasNoProgress ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-orange-400" />
            </div>
            <h2 className="text-lg font-bold text-stone-700 dark:text-stone-300 mb-2">Aucune progression</h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">Commence ton aventure pour voir tes statistiques !</p>
            <Button onClick={() => navigateTo('tome_select')} className="bg-orange-600 hover:bg-orange-700">
              Commencer
            </Button>
          </motion.div>
        ) : (
          <>
            {/* Main progress ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="parchment-card rounded-2xl p-6 flex items-center gap-6"
            >
              <ProgressRing progress={stats.globalProgress} size={100} strokeWidth={8} />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-1">Progression globale</h2>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {completedChapters.length} chapitres terminés sur {stats.totalChapters}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                    {stats.completedTomes > 0 ? `${stats.completedTomes} tome${stats.completedTomes > 1 ? 's' : ''} complété${stats.completedTomes > 1 ? 's' : ''}` : 'Continue ton chemin !'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats grid — 2 cols mobile, 3 cols md */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <StatCard
                icon={<BookOpen className="w-5 h-5" />}
                label="Chapitres"
                value={completedChapters.length}
                sub={`sur ${stats.totalChapters}`}
                color="#D97706"
                delay={0.1}
              />
              <StatCard
                icon={<Star className="w-5 h-5" />}
                label="Badges"
                value={`${earnedBadges.length}/${badges.length}`}
                sub="vertus spirituelles"
                color="#7C3AED"
                delay={0.15}
              />
              <StatCard
                icon={<Brain className="w-5 h-5" />}
                label="Quiz"
                value={stats.quizzesTaken}
                sub={`Moy: ${stats.avgQuizScore}%`}
                color="#EC4899"
                delay={0.2}
              />
              <StatCard
                icon={<Trophy className="w-5 h-5" />}
                label="Meilleur score"
                value={`${stats.bestQuizScore}%`}
                sub={stats.bestQuizScore >= 80 ? 'Excellent !' : 'Continue !'}
                color="#059669"
                delay={0.25}
              />
              {/* New: Scènes lues */}
              <StatCard
                icon={<Target className="w-5 h-5" />}
                label="Scènes lues"
                value={completedScenes.length}
                sub={`sur ${stats.totalScenes}`}
                color="#0D9488"
                delay={0.3}
              />
              {/* New: Journal */}
              <StatCard
                icon={<BookHeart className="w-5 h-5" />}
                label="Journal"
                value={journalEntries.length}
                sub="réflexions écrites"
                color="#E11D48"
                delay={0.35}
              />
              {/* New: Série — spans full width on mobile, 1 col on md */}
              <StatCard
                icon={<Flame className="w-5 h-5" />}
                label="Série"
                value={dailyStreak}
                sub={dailyStreak >= 3 ? `${dailyStreak} jours d'affilée !` : 'jours consécutifs'}
                color="#EA580C"
                delay={0.4}
              />
            </div>

            {/* 📅 Activité de la semaine */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="glass-card rounded-xl p-5 space-y-4"
            >
              <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-200 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                Activité de la semaine
              </h3>

              {/* 7-day row */}
              <div className="flex items-center justify-between gap-1">
                {weekDays.map((day) => {
                  const isActive = readingDays.includes(day.dateStr);
                  const isToday = day.isToday;
                  return (
                    <div key={day.dateStr} className="flex flex-col items-center gap-1.5 flex-1">
                      <span className={`text-[10px] font-medium ${
                        isToday
                          ? 'text-orange-600 dark:text-orange-400'
                          : 'text-stone-400 dark:text-stone-500'
                      }`}>
                        {day.dayLabel}
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.42 }}
                        className="relative"
                      >
                        {/* Pulsing ring for today */}
                        {isToday && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-orange-400 dark:border-orange-500"
                            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        )}
                        {isActive ? (
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 via-violet-400 to-orange-500 dark:from-orange-500 dark:via-violet-500 dark:to-orange-600 flex items-center justify-center shadow-lg shadow-orange-400/30 dark:shadow-orange-500/20">
                            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white" />
                          </div>
                        ) : (
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                            isToday
                              ? 'border-2 border-dashed border-orange-300 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-900/10'
                              : 'border-2 border-dashed border-stone-200 dark:border-stone-600 bg-stone-50/50 dark:bg-stone-800/30'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              isToday
                                ? 'bg-orange-300 dark:bg-orange-600'
                                : 'bg-stone-200 dark:bg-stone-600'
                            }`} />
                          </div>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Streaks + total reading days */}
              <div className="flex items-center gap-3 pt-1">
                {/* Current streak */}
                <div className="flex-1 flex items-center gap-2 p-2.5 rounded-lg bg-orange-50/60 dark:bg-orange-900/15 border border-orange-200/40 dark:border-orange-700/25">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-800/30 flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">Série actuelle</p>
                    <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
                      {dailyStreak}{dailyStreak > 1 ? ' jours' : ' jour'} 🔥
                    </p>
                  </div>
                </div>
                {/* Best streak */}
                <div className="flex-1 flex items-center gap-2 p-2.5 rounded-lg bg-orange-50/60 dark:bg-orange-900/15 border border-orange-200/40 dark:border-orange-700/25">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-800/30 flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">Meilleure série</p>
                    <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
                      {bestStreak}{bestStreak > 1 ? ' jours' : ' jour'} ⭐
                    </p>
                  </div>
                </div>
              </div>

              {/* Total reading days */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <BookOpen className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                  {readingDays.length} jour{readingDays.length > 1 ? 's' : ''} de lecture
                </span>
              </div>
            </motion.section>

            {/* Reading Insights Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="glass-card rounded-xl p-5 space-y-4"
            >
              <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-200 flex items-center gap-2">
                💡 Tes moments de lecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Chapitre favori */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50/60 dark:bg-orange-900/20 border border-orange-200/40 dark:border-orange-700/30">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-800/40 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">Chapitre favori</p>
                    <p className="text-xs font-semibold text-stone-700 dark:text-stone-200 truncate">
                      {stats.firstCompletedChapter ? stats.firstCompletedChapter.title : '—'}
                    </p>
                  </div>
                </div>
                {/* Badges préférés */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-violet-50/60 dark:bg-violet-900/20 border border-violet-200/40 dark:border-violet-700/30">
                  <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-800/40 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">Badges préférés</p>
                    <p className="text-xs font-semibold text-stone-700 dark:text-stone-200">
                      {earnedBadges.length} vertus collectées
                    </p>
                  </div>
                </div>
                {/* Prochaine étape */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50/60 dark:bg-orange-900/20 border border-orange-200/40 dark:border-orange-700/30">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-800/40 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">Prochaine étape</p>
                    <p className="text-xs font-semibold text-stone-700 dark:text-stone-200 truncate">
                      {stats.allDone ? 'Aventure terminée !' : stats.nextLockedChapter ? stats.nextLockedChapter.title : '—'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Scenes progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="parchment-card rounded-xl p-4 space-y-3"
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-600" />
                <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-300">Scènes parcourues</h3>
                <span className="ml-auto text-xs text-stone-400 dark:text-stone-500">{completedScenes.length}/{stats.totalScenes}</span>
              </div>
              <div className="w-full h-3 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-violet-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.scenesProgress}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Tome breakdown */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-3"
            >
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
                <BookOpen className="w-3 h-3" />
                Progression par tome
              </h2>
              {tomeStats.map((ts, idx) => {
                const colors = ['#D97706', '#E11D48', '#CA8A04', '#0D9488', '#7C3AED'];
                return (
                  <motion.div
                    key={ts.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className="parchment-card rounded-xl p-3 flex items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: colors[idx] }}
                    >
                      {ts.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-stone-700 dark:text-stone-300 truncate">{ts.title}</p>
                      <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-700 rounded-full mt-1 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: colors[idx] }}
                          initial={{ width: 0 }}
                          animate={{ width: `${ts.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + idx * 0.05 }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400 shrink-0">
                      {ts.completed}/{ts.total}
                    </span>
                  </motion.div>
                );
              })}
            </motion.section>

            {/* Motivational Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`rounded-xl p-5 text-center bg-gradient-to-r ${motivation.gradient} shadow-lg`}
            >
              <span className="text-2xl block mb-1">{motivation.emoji}</span>
              <p className="text-sm font-bold text-white drop-shadow-sm">{motivation.text}</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
