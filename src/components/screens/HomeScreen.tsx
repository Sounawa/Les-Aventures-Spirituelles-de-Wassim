'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { getDailyWisdom } from '@/data/wisdom';
import { getDailyChallenge, categoryLabels } from '@/data/dailyChallenges';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Users, Play, RotateCcw,
  BarChart3, BookHeart, Settings, Sparkles, ChevronRight,
  Moon, Sun, Map, Trophy, Star, BookmarkCheck, Check, Brain,
} from 'lucide-react';

// Floating particle component - enhanced
function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.25 + 0.05,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -25, 0, 15, 0],
            x: [0, 8, -8, 4, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Islamic geometric decorative element
function IslamicDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.05]">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" className="text-amber-700 dark:text-amber-500" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.4" className="text-amber-700 dark:text-amber-500" />
        <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.4" className="text-amber-700 dark:text-amber-500" />
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={50 + 16 * Math.cos(angle)}
              y1={50 + 16 * Math.sin(angle)}
              x2={50 + 40 * Math.cos(angle)}
              y2={50 + 40 * Math.sin(angle)}
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-amber-700 dark:text-amber-500"
            />
          );
        })}
      </svg>
    </div>
  );
}

// Daily wisdom card - enhanced
function WisdomCard() {
  const wisdom = useMemo(() => getDailyWisdom(), []);
  const [showFull, setShowFull] = useState(false);

  const categoryColors = {
    hadith: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/30 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-700/30',
    coran: 'from-amber-500/10 to-orange-500/10 border-amber-200/30 dark:from-amber-900/20 dark:to-orange-900/20 dark:border-amber-700/30',
    sagesse: 'from-purple-500/10 to-violet-500/10 border-purple-200/30 dark:from-purple-900/20 dark:to-violet-900/20 dark:border-purple-700/30',
  };
  const categoryIcons = {
    hadith: '📜',
    coran: '📗',
    sagesse: '💫',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      className="max-w-md mx-auto"
    >
      <button
        onClick={() => setShowFull(!showFull)}
        className={`w-full text-left glass-card rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all ${categoryColors[wisdom.category]}`}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl shrink-0 mt-0.5">{categoryIcons[wisdom.category]}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
              Sagesse du jour
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={showFull ? 'ar' : 'fr'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`font-medium leading-relaxed ${showFull ? 'text-lg text-stone-800 dark:text-stone-200 font-amiri' : 'text-base text-stone-700 dark:text-stone-300'}`}
                dir={showFull ? 'rtl' : 'ltr'}
              >
                {showFull ? wisdom.textAr : (wisdom.textFr.length > 120 ? wisdom.textFr.slice(0, 120) + '…' : wisdom.textFr)}
              </motion.p>
            </AnimatePresence>
            <div className="flex items-center justify-end mt-2">
              <span className="text-base text-amber-600 dark:text-amber-400 cursor-pointer hover:scale-110 transition-transform">🔄</span>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

// Fun Facts rotating section
function FunFacts() {
  const funFacts = [
    "🌍 Le Maroc abrite les montagnes du Rif, où vit Nawfel",
    "📚 Le Tassawuf enseigne la purification du cœur",
    "🌙 Les rêves sont les portes du monde intérieur",
    "⚔️ Le Nafs a 3 états : ammarah, lawwama, mutma'inna",
    "🕯️ Le Dhikr est le rappel d'Allah dans le cœur",
  ];

  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [funFacts.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8 }}
      className="max-w-md mx-auto"
    >
      <div className="glass-card rounded-2xl border border-amber-200/30 dark:border-amber-700/20 p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">💡</span>
          <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Le savais-tu ?
          </p>
        </div>
        <div className="relative h-12 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-stone-700 dark:text-stone-300 font-medium leading-relaxed"
            >
              {funFacts[currentFact]}
            </motion.p>
          </AnimatePresence>
        </div>
        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {funFacts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentFact(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentFact
                  ? 'w-5 h-1.5 bg-amber-500 dark:bg-amber-400'
                  : 'w-1.5 h-1.5 bg-stone-300 dark:bg-stone-600 hover:bg-stone-400 dark:hover:bg-stone-500'
              }`}
              aria-label={`Fun fait ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Streak display component
function StreakDisplay({ streak }: { streak: number }) {
  if (streak <= 0) return null;

  const getStreakMessage = (s: number) => {
    if (s === 1) return 'Premier jour !';
    if (s <= 3) return 'Bonne continuité !';
    if (s <= 7) return 'Tu es régulier !';
    if (s <= 14) return 'Incroyable !';
    if (s <= 30) return 'Champion spirituel !';
    return 'Maître de la constance !';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-orange-200/40 dark:border-orange-700/30"
    >
      <div className="streak-fire text-lg">🔥</div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{streak} jour{streak > 1 ? 's' : ''}</span>
        <span className="text-[9px] text-stone-400 dark:text-stone-500">{getStreakMessage(streak)}</span>
      </div>
    </motion.div>
  );
}

// Daily Challenge Card
function DailyChallengeCard() {
  const { completedChallenges, completeChallenge, challengeXP } = useApp();
  const challenge = useMemo(() => getDailyChallenge(), []);
  const todayString = new Date().toISOString().split('T')[0];
  const isCompleted = completedChallenges.includes(todayString);
  const category = categoryLabels[challenge.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0 }}
      className="max-w-md mx-auto"
    >
      <div className={`glass-card rounded-2xl border p-5 shadow-sm ${isCompleted ? 'border-green-200/40 dark:border-green-700/30' : 'border-amber-200/30 dark:border-amber-700/20'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{challenge.icon}</span>
            <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Défi du jour
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${category.color}`}>
              {category.label}
            </span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
              +{challenge.xp} XP
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-stone-800 dark:text-stone-100 mb-1.5">
          {challenge.title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
          {challenge.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-stone-400 dark:text-stone-500">
            ⭐ {challengeXP} XP total
          </span>
          {isCompleted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold"
            >
              <Check className="w-3 h-3" />
              Accompli !
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => completeChallenge(todayString)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full text-xs font-semibold shadow-sm transition-all"
            >
              <span>✓</span>
              J&apos;ai fait ce défi !
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function HomeScreen() {
  const {
    setScreen, navigateTo, selectTome,
    completedChapters, earnedBadges, resetProgress,
    settings, updateSettings, dailyStreak, updateStreak,
    bookmarkedScenes,
  } = useApp();
  const hasProgress = completedChapters.length > 0;

  const totalChapters = tomes.reduce((sum, t) => sum + t.chapters.length, 0);
  const progressPercent = totalChapters > 0 ? Math.round((completedChapters.length / totalChapters) * 100) : 0;

  // Update streak on mount
  useEffect(() => {
    if (hasProgress) updateStreak();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='1'%3E%3Cpath d='M40 0l10 20h20l-15 15 5 20-20-10-20 10 5-20L10 20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <FloatingParticles />
        <IslamicDecoration className="top-4 right-4" />
        <IslamicDecoration className="bottom-20 left-4" />

        {/* Top bar */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('settings')}
            className="w-12 h-12 rounded-full glass-card border border-amber-200/30 dark:border-stone-700/30 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 shadow-md transition-colors"
            aria-label="Paramètres"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className="w-12 h-12 rounded-full glass-card border border-amber-200/30 dark:border-stone-700/30 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 shadow-md transition-colors"
            aria-label={settings.darkMode ? 'Mode clair' : 'Mode sombre'}
          >
            {settings.darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>

        <div className="relative z-10 text-center max-w-lg">
          {/* Crescent moon and star with glow - enhanced */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1.2 }}
            className="mb-5"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{ boxShadow: '0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1)' }}
              />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30 flex items-center justify-center relative">
                <span className="text-5xl relative z-10">🌙</span>
                {/* Orbiting stars */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-lg">✦</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-xs">✦</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hero Character - Meet Nawfel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center gap-2 mb-5"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
                boxShadow: '0 4px 20px rgba(217, 119, 6, 0.4)',
              }}
            >
              <span className="text-4xl">🌟</span>
            </motion.div>
            <div className="text-center">
              <p className="text-base font-bold text-stone-800 dark:text-stone-100">Je suis Nawfel, j&apos;ai 8 ans</p>
              <p className="text-base font-bold text-amber-600 dark:text-amber-300">Prêt pour l&apos;aventure ?</p>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.05em' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-2 tracking-wide"
          >
            Les Aventures Spirituelles
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2"
          >
            de Nawfel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-amber-600/80 dark:text-amber-400/80 mb-1 font-amiri"
            dir="rtl"
          >
            مغامرات نوفل الروحية
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-4 mb-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-600" />
            <Sparkles className="w-4 h-4 text-amber-400 dark:text-amber-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300 dark:to-amber-600" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto leading-relaxed"
          >
            Un livre dont tu es le héros — Découvre le cheminement spirituel de Nawfel,
            un garçon de 8 ans qui apprend à combattre son ego avec les armes de l&apos;âme.
          </motion.p>

          {/* Streak display */}
          {hasProgress && dailyStreak > 0 && (
            <div className="mt-4 flex justify-center">
              <StreakDisplay streak={dailyStreak} />
            </div>
          )}

          {/* Progress badge if has progress */}
          {hasProgress && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-amber-200/40 dark:border-stone-700/40 shadow-sm"
            >
              <div className="w-32 h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full story-progress-bar rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{progressPercent}%</span>
            </motion.div>
          )}

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-5 space-y-3"
          >
            {hasProgress ? (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('tome_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30 rounded-xl golden-glow-hover animate-breathe"
              >
                <Play className="w-5 h-5" />
                Continuer l&apos;aventure
              </Button>
            ) : (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('chapter_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30 rounded-xl golden-glow-hover animate-breathe"
              >
                <Play className="w-5 h-5" />
                Commencer l&apos;aventure
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}

            {hasProgress && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => resetProgress()}
                className="mx-auto flex items-center gap-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="text-xs">Recommencer</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Daily wisdom */}
      <div className="relative z-10 px-4 pb-4">
        <WisdomCard />
      </div>

      {/* Fun Facts */}
      <div className="relative z-10 px-4 pb-4">
        <FunFacts />
      </div>

      {/* Daily Challenge */}
      <div className="relative z-10 px-4 pb-4">
        <DailyChallengeCard />
      </div>

      {/* Quick access cards - enhanced grid */}
      <div className="relative z-10 px-4 pb-4">
        <div className="max-w-md mx-auto grid grid-cols-4 gap-2.5">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('tome_select')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-amber-200/40 dark:hover:border-amber-700/30 card-hover-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-800/30 transition-colors shadow-sm">
              <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Tomes</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">{tomes.length} aventures</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('character_gallery')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-teal-200/40 dark:hover:border-teal-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-200 dark:group-hover:bg-teal-800/30 transition-colors shadow-sm">
              <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Personnages</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">6 personnages</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('achievements')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-purple-200/40 dark:hover:border-purple-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors shadow-sm">
              <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Succès</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">{earnedBadges.length} badges</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('map')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-orange-200/40 dark:hover:border-orange-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800/30 transition-colors shadow-sm">
              <Map className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Carte</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">Monde entier</span>
          </motion.button>
        </div>
      </div>

      {/* Mini-Jeux card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.85 }}
        className="relative z-10 px-4 pb-3"
      >
        <motion.button
          whileHover={{ scale: 1.01, y: -1 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => navigateTo('memory_game')}
          className="w-full max-w-md mx-auto flex items-center gap-3 px-4 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-purple-200/40 dark:hover:border-purple-700/30"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left flex-1 min-w-0">
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200 block">Mini-Jeux</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">Jeu de mémoire</span>
          </div>
          <Sparkles className="w-4 h-4 text-purple-400 dark:text-purple-500 shrink-0" />
        </motion.button>
      </motion.div>

      {/* Secondary actions row - enhanced */}
      <div className="relative z-10 px-4 pb-6">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2.5">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('stats')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-stone-200/40 dark:hover:border-stone-700/30"
          >
            <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-[11px] font-medium">Statistiques</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('journal')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-rose-200/40 dark:hover:border-rose-700/30"
          >
            <BookHeart className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            <span className="text-[11px] font-medium">Journal</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('badge_collection')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-amber-200/40 dark:hover:border-amber-700/30"
          >
            <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-[11px] font-medium">Badges</span>
          </motion.button>
        </div>

        {/* Bookmarked scenes quick access */}
        {bookmarkedScenes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-3 max-w-md mx-auto"
          >
            <button
              onClick={() => navigateTo('lesson')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border border-transparent hover:border-amber-200/40 dark:hover:border-amber-700/30"
            >
              <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-[11px] font-medium">Mes signets ({bookmarkedScenes.length})</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
