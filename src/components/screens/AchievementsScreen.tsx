'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { achievements, achievementCategories, getAchievementProgress, type AchievementCategory } from '@/data/achievements';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Lock, Check, Sparkles } from 'lucide-react';

export default function AchievementsScreen() {
  const { navigateTo, achievements: earnedIds } = useApp();
  const [activeCategory, setActiveCategory] = useState<AchievementCategory | 'all'>('all');

  // Build the achievement state from context
  const appState = useApp();
  const progressMap = useMemo(() => getAchievementProgress({
    completedChapters: appState.completedChapters,
    completedChallenges: appState.completedChallenges,
    earnedBadges: appState.earnedBadges,
    totalDhikr: appState.totalDhikr,
    totalDhikrSessions: appState.totalDhikrSessions,
    memoryBestScore: appState.memoryBestScore,
    memoryGamesPlayed: appState.memoryGamesPlayed,
    dailyStreak: appState.dailyStreak,
    readingDays: appState.readingDays,
    quizScores: appState.quizScores,
    journalEntries: appState.journalEntries,
    challengeXP: appState.challengeXP,
  }), [appState.completedChapters, appState.completedChallenges, appState.earnedBadges, appState.totalDhikr, appState.totalDhikrSessions, appState.memoryBestScore, appState.memoryGamesPlayed, appState.dailyStreak, appState.readingDays, appState.quizScores, appState.journalEntries, appState.challengeXP]);

  const totalAchievements = achievements.length;
  const earnedCount = earnedIds.length;
  const progressPercent = totalAchievements > 0 ? Math.round((earnedCount / totalAchievements) * 100) : 0;

  // Filtered achievements based on selected category
  const filteredAchievements = activeCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === activeCategory);

  // Recent unlocks (last 3 earned)
  const recentUnlocks = useMemo(() => {
    return [...earnedIds].reverse().slice(0, 3).map(id => achievements.find(a => a.id === id)).filter(Boolean);
  }, [earnedIds]);

  const filterTabs = [
    { key: 'all' as const, label: 'Tous' },
    ...achievementCategories.map(c => ({ key: c.key, label: c.label })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-violet-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-orange-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-orange-200/30 dark:border-stone-700/30">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-orange-600" />
              Succès
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
              {earnedCount}/{totalAchievements}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 text-center"
        >
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg width="112" height="112" className="-rotate-90">
              <circle cx="56" cy="56" r="46" fill="none" stroke="currentColor" strokeWidth="8" className="text-stone-100 dark:text-stone-700" />
              <motion.circle
                cx="56" cy="56" r="46"
                fill="none" stroke="#D97706" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={289}
                initial={{ strokeDashoffset: 289 }}
                animate={{ strokeDashoffset: 289 - (earnedCount / totalAchievements) * 289 }}
                transition={{ duration: 1.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <span className="text-2xl font-bold text-stone-700 dark:text-stone-300">{earnedCount}</span>
                <p className="text-[10px] text-stone-400 dark:text-stone-500">/{totalAchievements}</p>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-1">Badges de l&apos;aventure</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
            {earnedCount === 0
              ? 'Explore l\'aventure pour débloquer tes premiers succès !'
              : earnedCount === totalAchievements
                ? 'Masha\'Allah ! Tu as débloqué tous les succès !'
                : `${progressPercent}% complété — Continue ton chemin spirituel !`
            }
          </p>
          {/* Progress bar */}
          <div className="w-full h-2.5 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Recent Unlocks */}
        {recentUnlocks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-stone-600 dark:text-stone-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Derniers badges débloqués
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {recentUnlocks.map((achievement, idx) => {
                if (!achievement) return null;
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-shrink-0 glass-card rounded-xl p-3 flex items-center gap-3 min-w-[200px]"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                      style={{
                        background: `${achievement.color}15`,
                        border: `2px solid ${achievement.color}30`,
                        boxShadow: `0 0 12px ${achievement.color}20`,
                      }}
                    >
                      {achievement.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-800 dark:text-stone-100 truncate">{achievement.title}</p>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400 truncate">{achievement.description}</p>
                    </div>
                    <Check className="w-4 h-4 text-violet-500 shrink-0" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {filterTabs.map(tab => {
            const isActive = activeCategory === tab.key;
            const cat = achievementCategories.find(c => c.key === tab.key);
            const catColor = cat ? cat.color : '#D97706';
            const catIcon = cat ? cat.icon : '🏆';

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as AchievementCategory | 'all')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'bg-white/60 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border border-stone-200/50 dark:border-stone-700/50 hover:bg-white dark:hover:bg-stone-800'
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${catColor}, ${catColor}CC)`,
                  boxShadow: `0 2px 8px ${catColor}40`,
                } : {}}
              >
                <span>{catIcon}</span>
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredAchievements.map((achievement, idx) => {
            const isEarned = earnedIds.includes(achievement.id);
            const progress = progressMap[achievement.id] || 0;
            const cat = achievementCategories.find(c => c.key === achievement.category);

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                whileHover={isEarned ? { scale: 1.04, y: -2, transition: { duration: 0.2 } } : {}}
                className={`relative rounded-xl border p-4 text-center transition-all overflow-hidden ${
                  isEarned
                    ? 'glass-card shadow-md cursor-default'
                    : 'bg-white/40 dark:bg-stone-800/40 border-stone-200/40 dark:border-stone-700/40'
                }`}
                style={isEarned ? {
                  borderColor: `${achievement.color}30`,
                } : {}}
              >
                {/* Glow for earned */}
                {isEarned && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${achievement.color}, transparent 70%)`,
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={isEarned ? { y: [0, -3, 0] } : {}}
                    transition={isEarned ? { duration: 2, repeat: Infinity, delay: idx * 0.15 } : {}}
                    className="text-4xl mb-2"
                  >
                    {isEarned ? achievement.icon : (
                      <div className="relative inline-block">
                        <div className="w-10 h-10 mx-auto rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center">
                          <Lock className="w-5 h-5 text-stone-300 dark:text-stone-500" />
                        </div>
                        <span className="absolute -top-1 -right-1 text-lg opacity-30">{achievement.icon}</span>
                      </div>
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-bold text-sm ${isEarned ? 'text-stone-800 dark:text-stone-100' : 'text-stone-400 dark:text-stone-500'}`}>
                    {isEarned ? achievement.title : '???'}
                  </h3>

                  {/* Category label */}
                  <p className="text-[10px] mt-0.5 font-medium" style={{ color: cat ? cat.color : '#78716C' }}>
                    {cat ? `${cat.icon} ${cat.label}` : achievement.category}
                  </p>

                  {/* Description or progress */}
                  {isEarned ? (
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1.5 leading-relaxed line-clamp-2">
                      {achievement.description}
                    </p>
                  ) : (
                    <div className="mt-2 space-y-1">
                      <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: `${achievement.color}80` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(progress * 100, 5)}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.03 }}
                        />
                      </div>
                      <p className="text-[9px] text-stone-400 dark:text-stone-500">
                        {Math.round(progress * 100)}%
                      </p>
                    </div>
                  )}

                  {/* Checkmark for earned */}
                  {isEarned && (
                    <div className="mt-2 flex justify-center">
                      <div
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                        style={{
                          background: `${achievement.color}15`,
                          color: achievement.color,
                        }}
                      >
                        <Check className="w-3 h-3" />
                        Débloqué
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-4 text-center"
        >
          <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed">
            « Chaque pas en avant est une victoire sur soi-même. »
          </p>
        </motion.div>
      </div>
    </div>
  );
}
