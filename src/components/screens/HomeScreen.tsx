'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { getDailyWisdom, type WisdomQuote } from '@/data/wisdom';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Users, Award, Play, RotateCcw,
  BarChart3, BookHeart, Settings, Sparkles, ChevronRight,
  Moon, Sun,
} from 'lucide-react';

// Floating particle component
function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.3 + 0.1,
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
            y: [0, -30, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            scale: [1, 1.3, 1],
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
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.06]">
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1" className="text-amber-700" />
        <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" />
        <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" />
        {/* 8-pointed star */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={60 + 20 * Math.cos(angle)}
              y1={60 + 20 * Math.sin(angle)}
              x2={60 + 50 * Math.cos(angle)}
              y2={60 + 50 * Math.sin(angle)}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-amber-700"
            />
          );
        })}
        {/* Connecting arcs */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle1 = ((i * 45 + 22.5) * Math.PI) / 180;
          const angle2 = (((i + 1) * 45 + 22.5) * Math.PI) / 180;
          return (
            <path
              key={`arc-${i}`}
              d={`M ${60 + 35 * Math.cos(angle1)} ${60 + 35 * Math.sin(angle1)} A 35 35 0 0 1 ${60 + 35 * Math.cos(angle2)} ${60 + 35 * Math.sin(angle2)}`}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-amber-700"
              fill="none"
            />
          );
        })}
      </svg>
    </div>
  );
}

// Daily wisdom card
function WisdomCard() {
  const wisdom = useMemo(() => getDailyWisdom(), []);
  const [showFull, setShowFull] = useState(false);

  const categoryColors = {
    hadith: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/30',
    coran: 'from-amber-500/10 to-orange-500/10 border-amber-200/30',
    sagesse: 'from-purple-500/10 to-violet-500/10 border-purple-200/30',
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
        className={`w-full text-left bg-gradient-to-br ${categoryColors[wisdom.category]} backdrop-blur-sm rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all`}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl shrink-0 mt-0.5">{categoryIcons[wisdom.category]}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Sagesse du jour
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={showFull ? 'ar' : 'fr'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`font-medium leading-relaxed ${showFull ? 'text-lg text-stone-800 font-amiri' : 'text-sm text-stone-700'}`}
                dir={showFull ? 'rtl' : 'ltr'}
              >
                {showFull ? wisdom.textAr : wisdom.textFr}
              </motion.p>
            </AnimatePresence>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[10px] text-stone-400">{wisdom.source}</p>
              <div className="flex items-center gap-1 text-[10px] text-amber-600">
                <Sparkles className="w-3 h-3" />
                <span>Cliquez pour {showFull ? 'français' : 'arabe'}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export function HomeScreen() {
  const {
    setScreen, navigateTo, selectTome,
    completedChapters, earnedBadges, resetProgress,
    settings, updateSettings,
  } = useApp();
  const hasProgress = completedChapters.length > 0;

  const totalChapters = tomes.reduce((sum, t) => sum + t.chapters.length, 0);
  const progressPercent = totalChapters > 0 ? Math.round((completedChapters.length / totalChapters) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='1'%3E%3Cpath d='M40 0l10 20h20l-15 15 5 20-20-10-20 10 5-20L10 20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <FloatingParticles />
        <IslamicDecoration className="top-4 right-4" />
        <IslamicDecoration className="bottom-20 left-4" />

        {/* Top bar with dark mode toggle */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('settings')}
            className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-amber-200/30 flex items-center justify-center text-stone-500 hover:text-stone-700 shadow-sm transition-colors"
            aria-label="Paramètres"
          >
            <Settings className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-amber-200/30 flex items-center justify-center text-stone-500 hover:text-stone-700 shadow-sm transition-colors"
            aria-label={settings.darkMode ? 'Mode clair' : 'Mode sombre'}
          >
            {settings.darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        </div>

        <div className="relative z-10 text-center max-w-lg">
          {/* Crescent moon and star with glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1.2 }}
            className="mb-6"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: '0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1)' }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 shadow-lg shadow-amber-200/50 flex items-center justify-center relative">
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

          {/* Title with letter spacing animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.05em' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 tracking-wide"
          >
            Les Aventures Spirituelles
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2"
          >
            de Nawfel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-amber-600/80 mb-1 font-amiri"
            dir="rtl"
          >
            مغامرات نوفل الروحية
          </motion.p>

          {/* Subtitle with decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-4 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed"
          >
            Un livre dont tu es le héros — Découvre le cheminement spirituel de Nawfel,
            un garçon de 8 ans qui apprend à combattre son ego avec les armes de l&apos;âme.
          </motion.p>

          {/* Progress badge if has progress */}
          {hasProgress && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-amber-200/40 shadow-sm"
            >
              <div className="w-32 h-2 bg-stone-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full story-progress-bar rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <span className="text-xs font-semibold text-amber-700">{progressPercent}%</span>
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-6 space-y-3"
          >
            {hasProgress ? (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('tome_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-200/50 rounded-xl golden-glow-hover"
              >
                <Play className="w-5 h-5" />
                Continuer l&apos;aventure
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('chapter_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-200/50 rounded-xl golden-glow-hover"
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
                className="mx-auto flex items-center gap-1 text-stone-400 hover:text-stone-600"
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

      {/* Quick access cards */}
      <div className="relative z-10 px-4 pb-4">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('tome_select')}
            className="flex flex-col items-center gap-2 p-4 parchment-card rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
              <BookOpen className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-xs font-semibold text-stone-700">Tomes</span>
            <span className="text-[10px] text-stone-400">{tomes.length} aventures</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('character_gallery')}
            className="flex flex-col items-center gap-2 p-4 parchment-card rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
              <Users className="w-5 h-5 text-teal-600" />
            </div>
            <span className="text-xs font-semibold text-stone-700">Personnages</span>
            <span className="text-[10px] text-stone-400">6 personnages</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('badge_collection')}
            className="flex flex-col items-center gap-2 p-4 parchment-card rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs font-semibold text-stone-700">Badges</span>
            <span className="text-[10px] text-stone-400">{earnedBadges.length}/8</span>
          </motion.button>
        </div>
      </div>

      {/* Secondary actions row */}
      <div className="relative z-10 px-4 pb-6">
        <div className="max-w-md mx-auto flex gap-3">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('stats')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 parchment-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600"
          >
            <BarChart3 className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-medium">Statistiques</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('journal')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 parchment-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600"
          >
            <BookHeart className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-medium">Journal Spirituel</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
