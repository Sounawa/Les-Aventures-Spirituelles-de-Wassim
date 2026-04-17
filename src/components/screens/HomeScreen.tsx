'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { getDailyWisdom } from '@/data/wisdom';
import { getDailyChallenge, categoryLabels } from '@/data/dailyChallenges';
import { getDailyDua, duaCategoryConfig } from '@/data/duas';
import { getDailyVerse, verseThemeConfig } from '@/data/quranVerses';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  BookOpen, Users, Play, RotateCcw,
  BarChart3, BookHeart, Settings, Sparkles, ChevronRight,
  Moon, Sun, Map, Trophy, Star, BookmarkCheck, Check, Brain, Heart,
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
          className="absolute rounded-full bg-teal-400"
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

// Night sky with twinkling stars and shooting stars (dark mode only)
function NightSky() {
  const stars = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      twinkleDuration: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 5,
      baseOpacity: Math.random() * 0.4 + 0.3,
    })), []);

  const shootingStars = useMemo(() =>
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      startX: Math.random() * 60 + 10,
      startY: Math.random() * 30,
      duration: Math.random() * 1.5 + 1,
      delay: Math.random() * 12 + i * 6,
      angle: Math.random() * 15 + 25,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden dark:block">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [star.baseOpacity * 0.3, star.baseOpacity, star.baseOpacity * 0.5, star.baseOpacity, star.baseOpacity * 0.3],
            scale: [1, 1.3, 1, 1.2, 1],
          }}
          transition={{
            duration: star.twinkleDuration,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={`shoot-${shootingStar.id}`}
          className="absolute"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            x: [0, 0, 120, 200, 280],
            y: [0, 0, 60, 100, 140],
          }}
          transition={{
            duration: shootingStar.duration,
            repeat: Infinity,
            repeatDelay: shootingStar.delay,
            ease: 'easeIn',
          }}
        >
          <div
            className="w-6 h-px bg-gradient-to-r from-white via-white/80 to-transparent"
            style={{
              transform: `rotate(${shootingStar.angle}deg)`,
              transformOrigin: 'left center',
              boxShadow: '0 0 4px 1px rgba(255,255,255,0.4)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Islamic geometric decorative element
function IslamicDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.05]">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" className="text-teal-700 dark:text-teal-500" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.4" className="text-teal-700 dark:text-teal-500" />
        <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.4" className="text-teal-700 dark:text-teal-500" />
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
              className="text-teal-700 dark:text-teal-500"
            />
          );
        })}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Unified Daily Inspiration Card — Premium Tabbed Design
// ─────────────────────────────────────────────────────
type DailyTab = 'wisdom' | 'dua' | 'verse' | 'funfact';

const dailyTabs: { id: DailyTab; icon: string; label: string }[] = [
  { id: 'wisdom', icon: '📜', label: 'Sagesse' },
  { id: 'dua', icon: '💝', label: "Du'a" },
  { id: 'verse', icon: '📖', label: 'Verset' },
  { id: 'funfact', icon: '💡', label: 'Savais-tu ?' },
];

function DailyInspirationCard() {
  const [activeTab, setActiveTab] = useState<DailyTab>('wisdom');
  const wisdom = useMemo(() => getDailyWisdom(), []);
  const dua = useMemo(() => getDailyDua(), []);
  const verse = useMemo(() => getDailyVerse(), []);
  const duaConfig = duaCategoryConfig[dua.category];
  const verseConfig = verseThemeConfig[verse.theme];

  const [showWisdomAr, setShowWisdomAr] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const funFacts = useMemo(() => [
    "🌍 Le Maroc abrite les montagnes du Rif, où vit Souhayl",
    "📚 Le Tassawuf enseigne la purification du cœur",
    "🌙 Les rêves sont les portes du monde intérieur",
    "⚔️ Le Nafs a 3 états : ammarah, lawwama, mutma'inna",
    "🕯️ Le Dhikr est le rappel d'Allah dans le cœur",
  ], []);
  const [currentFact, setCurrentFact] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [funFacts.length]);

  const wisdomCategoryIcons = { hadith: '📜', coran: '📗', sagesse: '💫' };
  const activeIdx = dailyTabs.findIndex(t => t.id === activeTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      className="max-w-lg lg:max-w-2xl mx-auto"
    >
      <div className="glass-card rounded-2xl border border-teal-200/30 dark:border-teal-700/20 shadow-sm overflow-hidden">
        {/* ── Tab Bar ── */}
        <div className="relative flex items-center px-2 pt-2 pb-0 gap-0.5">
          {/* Animated underline indicator */}
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 dark:from-teal-500 dark:via-emerald-400 dark:to-teal-500 shadow-sm shadow-teal-500/20 dark:shadow-teal-500/30"
            style={{
              width: `calc(${100 / 4}% - 6px)`,
              left: `calc(${(activeIdx * 100) / 4}% + 3px)`,
            }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          />
          {dailyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 flex items-center justify-center gap-1 py-2.5 text-[11px] font-semibold
                transition-all duration-200 rounded-t-lg relative z-10
                ${activeTab === tab.id
                  ? 'text-teal-700 dark:text-teal-300'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-500 dark:hover:text-stone-400'
                }
              `}
            >
              <span className="text-[15px] transition-transform duration-200" style={{ transform: activeTab === tab.id ? 'scale(1.2)' : 'scale(1)' }}>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Thin decorative separator ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-300/40 dark:via-teal-500/30 to-transparent" />

        {/* ── Content Area ── */}
        <div className="p-5 pt-4 min-h-[190px]">
          <AnimatePresence mode="wait">
            {/* ── WISDOM TAB ── */}
            {activeTab === 'wisdom' && (
              <motion.div
                key="wisdom"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{wisdomCategoryIcons[wisdom.category]}</span>
                  <p className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                    Sagesse du jour
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={showWisdomAr ? 'ar' : 'fr'}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`font-medium leading-[1.8] mb-4 ${showWisdomAr ? 'text-lg text-stone-800 dark:text-stone-100 font-amiri text-center' : 'text-[15px] text-stone-700 dark:text-stone-200'}`}
                    dir={showWisdomAr ? 'rtl' : 'ltr'}
                  >
                    {showWisdomAr ? wisdom.textAr : wisdom.textFr}
                  </motion.p>
                </AnimatePresence>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setShowWisdomAr(!showWisdomAr)}
                    className="flex items-center gap-1.5 text-[11px] text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    <span>{showWisdomAr ? 'Français' : 'Arabe'}</span>
                    <span className="text-sm">↺</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── DU'A TAB ── */}
            {activeTab === 'dua' && (
              <motion.div
                key="dua"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{duaConfig.icon}</span>
                    <p className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                      Du&apos;a du jour
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${duaConfig.color} bg-white/60 dark:bg-stone-800/60`}>
                      {duaConfig.label}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => {
                        const next = !isFav;
                        setIsFav(next);
                        if (next) toast.success('Ajouté aux favoris ! 💝');
                        else toast('Retiré des favoris');
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                      aria-label="Ajouter aux favoris"
                    >
                      <Heart className={`w-4 h-4 transition-all duration-200 ${isFav ? 'text-rose-500 dark:text-rose-400 fill-rose-500 dark:fill-rose-400 scale-110' : 'text-stone-300 dark:text-stone-500'}`} />
                    </motion.button>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 dark:text-stone-500 mb-3 italic">{dua.occasion}</p>
                {/* Arabic text — elegant container */}
                <div className="mb-3 py-4 px-5 rounded-2xl bg-gradient-to-br from-teal-50/80 via-emerald-50/40 to-teal-50/80 dark:from-stone-800/40 dark:via-stone-800/20 dark:to-stone-800/40 border border-teal-200/50 dark:border-teal-700/25 relative">
                  {/* Decorative corner flourish */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-teal-400/40 dark:text-teal-500/30">
                      <path d="M2 2 L2 12 Q2 2 12 2 Q2 2 2 12 L2 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M2 2 L8 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M2 2 L2 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-teal-400/40 dark:text-teal-500/30">
                      <path d="M22 22 L22 12 Q22 22 12 22 Q22 22 22 12 L22 22Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M22 22 L16 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M22 22 L22 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xl text-stone-800 dark:text-teal-100 font-amiri leading-[2.2] text-center" dir="rtl">{dua.textAr}</p>
                </div>
                <p className="text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed mb-2">{dua.textFr}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500/70 flex items-center gap-1">📖 <span>{dua.source}</span></p>
              </motion.div>
            )}

            {/* ── QURAN VERSE TAB ── */}
            {activeTab === 'verse' && (
              <motion.div
                key="verse"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <p className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                      Verset du Jour
                    </p>
                  </div>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${verseConfig.color} ${verseConfig.badgeBg}`}>
                    {verseConfig.icon} {verseConfig.label}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 dark:text-stone-500 mb-3 font-medium">Sourate {verse.surahName}</p>
                {/* Arabic text — elegant container */}
                <div className="mb-3 py-4 px-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-emerald-50/70 dark:from-stone-800/40 dark:via-stone-800/20 dark:to-stone-800/40 border border-emerald-200/50 dark:border-emerald-700/25 relative">
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-emerald-400/40 dark:text-emerald-500/30">
                      <path d="M2 2 L2 12 Q2 2 12 2 Q2 2 2 12 L2 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M2 2 L8 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M2 2 L2 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-emerald-400/40 dark:text-emerald-500/30">
                      <path d="M22 22 L22 12 Q22 22 12 22 Q22 22 22 12 L22 22Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M22 22 L16 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M22 22 L22 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xl text-stone-800 dark:text-emerald-100 font-amiri leading-[2.2] text-center" dir="rtl">{verse.textAr}</p>
                </div>
                <p className="text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed mb-2">{verse.textFr}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500/70 flex items-center gap-1">📖 <span>{verse.source}</span></p>
              </motion.div>
            )}

            {/* ── FUN FACT TAB ── */}
            {activeTab === 'funfact' && (
              <motion.div
                key="funfact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">💡</span>
                  <p className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                    Le savais-tu ?
                  </p>
                </div>
                <div className="relative h-20 flex items-center justify-center overflow-hidden mb-5">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentFact}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="text-[15px] text-stone-700 dark:text-stone-200 font-medium leading-relaxed text-center"
                    >
                      {funFacts[currentFact]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="flex items-center justify-center gap-2.5">
                  {funFacts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentFact(i)}
                      className={`rounded-full transition-all duration-300 ${i === currentFact ? 'w-6 h-2 bg-teal-500 dark:bg-teal-400 shadow-sm shadow-teal-500/30' : 'w-2 h-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'}`}
                      aria-label={`Fun fait ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
      className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-emerald-200/40 dark:border-emerald-700/30"
    >
      <div className="streak-fire text-lg">🔥</div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{streak} jour{streak > 1 ? 's' : ''}</span>
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
      transition={{ delay: 2.1 }}
      className="max-w-lg lg:max-w-none mx-auto"
    >
      <div className={`glass-card rounded-2xl border p-5 shadow-sm ${isCompleted ? 'border-green-200/40 dark:border-green-700/30' : 'border-teal-200/30 dark:border-teal-700/20'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{challenge.icon}</span>
            <p className="text-xs font-semibold text-stone-600 dark:text-stone-200 uppercase tracking-wider">
              Défi du jour
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${category.color}`}>
              {category.label}
            </span>
            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">
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
              onClick={() => {
                completeChallenge(todayString);
                toast.success("Masha'Allah ! Défi accompli ! ⭐", {
                  description: `+${challenge.xp} XP gagnés`,
                });
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full text-xs font-semibold shadow-sm transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-emerald-50 to-teal-50 dark:from-stone-950 dark:via-indigo-950/20 dark:to-stone-950" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D9488' fill-opacity='1'%3E%3Cpath d='M40 0l10 20h20l-15 15 5 20-20-10-20 10 5-20L10 20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <FloatingParticles />
        <NightSky />
        <IslamicDecoration className="top-4 right-4" />
        <IslamicDecoration className="bottom-20 left-4" />

        {/* Top bar */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('settings')}
            className="w-12 h-12 rounded-full glass-card border border-teal-200/30 dark:border-stone-600/40 flex items-center justify-center text-stone-500 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-100 shadow-md transition-colors"
            aria-label="Paramètres"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className="w-12 h-12 rounded-full glass-card border border-teal-200/30 dark:border-stone-600/40 flex items-center justify-center text-stone-500 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-100 shadow-md transition-colors"
            aria-label={settings.darkMode ? 'Mode clair' : 'Mode sombre'}
          >
            {settings.darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>

        <div className="relative z-10 text-center max-w-lg lg:max-w-2xl">
          {/* Crescent moon and star with glow - enhanced */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1.2 }}
            className="mb-5"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Outer glow - enhanced for dark mode */}
              <motion.div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{
                  boxShadow: '0 0 40px rgba(45, 212, 191, 0.3), 0 0 80px rgba(45, 212, 191, 0.1)',
                }}
              />
              {/* Dark mode radial glow around moon */}
              <div className="absolute -inset-8 rounded-full hidden dark:block" style={{
                background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0.05) 40%, transparent 70%)',
              }} />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-200 via-emerald-200 to-teal-300 shadow-lg shadow-teal-200/50 dark:shadow-teal-900/30 flex items-center justify-center relative">
                <span className="text-5xl relative z-10">🌙</span>
                {/* Orbiting stars */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-lg dark:text-teal-200/90 dark:brightness-110">✦</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-xs dark:text-teal-200/90 dark:brightness-110">✦</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hero Character - Meet Souhayl */}
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
                background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 50%, #0F766E 100%)',
                boxShadow: '0 4px 20px rgba(13, 148, 136, 0.4)',
              }}
            >
              <span className="text-4xl">🌟</span>
            </motion.div>
            <div className="text-center">
              <p className="text-base font-bold text-stone-800 dark:text-stone-100">Je suis Souhayl, j&apos;ai 8 ans</p>
              <p className="text-base font-bold text-teal-600 dark:text-teal-300">Prêt pour l&apos;aventure ?</p>
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
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2"
          >
            de Souhayl
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-teal-600/80 dark:text-teal-400/80 mb-1 font-amiri"
            dir="rtl"
          >
            مغامرات سهيل الروحية
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-3 mb-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-300 dark:to-teal-600" />
            <Sparkles className="w-4 h-4 text-teal-400 dark:text-teal-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-300 dark:to-teal-600" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-stone-500 dark:text-stone-400 max-w-lg mx-auto leading-relaxed"
          >
            Un livre dont tu es le héros — Découvre le cheminement spirituel de Souhayl,
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
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-teal-200/40 dark:border-stone-700/40 shadow-sm"
            >
              <div className="w-32 h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full story-progress-bar rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">{progressPercent}%</span>
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
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-lg shadow-teal-200/50 dark:shadow-teal-900/30 rounded-xl golden-glow-hover animate-breathe"
              >
                <Play className="w-5 h-5" />
                Continuer l&apos;aventure
              </Button>
            ) : (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('chapter_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-lg shadow-teal-200/50 dark:shadow-teal-900/30 rounded-xl golden-glow-hover animate-breathe"
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

      {/* Daily Inspiration — unified tabbed card */}
      <div className="relative z-10 px-4 pb-4">
        <DailyInspirationCard />
      </div>

      {/* Daily Challenge */}
      <div className="relative z-10 px-4 pb-4">
        <div className="max-w-lg lg:max-w-5xl mx-auto">
          <DailyChallengeCard />
        </div>
      </div>

      {/* Quick access cards - staggered grid */}
      <div className="relative z-10 px-4 pb-4">
        <motion.div
          className="max-w-lg lg:max-w-5xl mx-auto grid grid-cols-4 gap-2.5"
          variants={{
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('tome_select')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-teal-200/40 dark:hover:border-teal-700/30 card-hover-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-200 dark:group-hover:bg-teal-800/30 transition-colors shadow-sm">
              <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Tomes</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">{tomes.length} aventures</span>
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
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
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
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
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigateTo('map')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-emerald-200/40 dark:hover:border-emerald-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition-colors shadow-sm">
              <Map className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Carte</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">Monde entier</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Feature cards: Dhikr + Mini-Jeux side by side — staggered */}
      <div className="relative z-10 px-4 pb-3">
        <motion.div
          className="max-w-lg lg:max-w-5xl mx-auto grid grid-cols-2 gap-2.5"
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => navigateTo('dhikr_counter')}
              className="w-full flex items-center gap-3 px-4 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-teal-200/40 dark:hover:border-teal-700/30"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                <span className="text-lg">📿</span>
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200 block">Dhikr</span>
                <span className="text-[9px] text-stone-400 dark:text-stone-500">Compteur de tasbih</span>
              </div>
              <Sparkles className="w-4 h-4 text-teal-400 dark:text-teal-500 shrink-0" />
            </motion.button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => navigateTo('memory_game')}
              className="w-full flex items-center gap-3 px-4 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-purple-200/40 dark:hover:border-purple-700/30"
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
        </motion.div>
      </div>

      {/* Secondary actions row - staggered */}
      <div className="relative z-10 px-4 pb-6">
        <motion.div
          className="max-w-lg lg:max-w-5xl mx-auto grid grid-cols-3 gap-2.5"
          variants={{
            show: { transition: { staggerChildren: 0.06 } },
          }}
          initial="hidden"
          animate="show"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('stats')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-stone-200/40 dark:hover:border-stone-700/30"
          >
            <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-[11px] font-medium">Statistiques</span>
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('journal')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-rose-200/40 dark:hover:border-rose-700/30"
          >
            <BookHeart className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            <span className="text-[11px] font-medium">Journal</span>
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateTo('badge_collection')}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-teal-200/40 dark:hover:border-teal-700/30"
          >
            <Star className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-[11px] font-medium">Badges</span>
          </motion.button>
        </motion.div>

        {/* Bookmarked scenes quick access */}
        {bookmarkedScenes.length > 0 && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            className="mt-3 max-w-lg lg:max-w-5xl mx-auto"
          >
            <button
              onClick={() => navigateTo('lesson')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border border-transparent hover:border-teal-200/40 dark:hover:border-teal-700/30"
            >
              <BookmarkCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-[11px] font-medium">Mes signets ({bookmarkedScenes.length})</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
