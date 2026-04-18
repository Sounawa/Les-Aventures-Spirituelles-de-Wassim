'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { getDailyWisdom } from '@/data/wisdom';
import { getDailyChallenge, categoryLabels } from '@/data/dailyChallenges';
import { getDailyDua, duaCategoryConfig } from '@/data/duas';
import { getDailyVerse, verseThemeConfig } from '@/data/quranVerses';
import { getShuffledDiscoveries, discoveryCategoryConfig, type Discovery } from '@/data/discoveries';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  BookOpen, Users, Play, RotateCcw,
  BarChart3, BookHeart, Settings, Sparkles, ChevronRight,
  Moon, Sun, Map, Trophy, Star, BookmarkCheck, Check, Brain, Heart, CreditCard, ScrollText,
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
          className="absolute rounded-full bg-blue-400"
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
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" className="text-sky-700 dark:text-sky-500" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.4" className="text-sky-700 dark:text-sky-500" />
        <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.4" className="text-sky-700 dark:text-sky-500" />
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
              className="text-sky-700 dark:text-sky-500"
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
      <div className="glass-card rounded-2xl border border-sky-200/30 dark:border-sky-700/20 shadow-sm overflow-hidden">
        {/* ── Tab Bar ── */}
        <div className="relative flex items-center px-2 pt-2 pb-0 gap-0.5">
          {/* Animated underline indicator */}
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-500 dark:from-sky-500 dark:via-indigo-400 dark:to-sky-500 shadow-sm shadow-sky-500/20 dark:shadow-sky-500/30"
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
                  ? 'text-sky-700 dark:text-sky-300'
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
        <div className="h-px bg-gradient-to-r from-transparent via-sky-300/40 dark:via-sky-500/30 to-transparent" />

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
                    className="flex items-center gap-1.5 text-[11px] text-sky-600 dark:text-sky-400 font-semibold hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
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
                <div className="mb-3 py-4 px-5 rounded-2xl bg-gradient-to-br from-sky-50/80 via-indigo-50/40 to-sky-50/80 dark:from-stone-800/40 dark:via-stone-800/20 dark:to-stone-800/40 border border-sky-200/50 dark:border-sky-700/25 relative">
                  {/* Decorative corner flourish */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400/40 dark:text-sky-500/30">
                      <path d="M2 2 L2 12 Q2 2 12 2 Q2 2 2 12 L2 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M2 2 L8 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M2 2 L2 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400/40 dark:text-sky-500/30">
                      <path d="M22 22 L22 12 Q22 22 12 22 Q22 22 22 12 L22 22Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M22 22 L16 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M22 22 L22 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xl text-stone-800 dark:text-sky-100 font-amiri leading-[2.2] text-center" dir="rtl">{dua.textAr}</p>
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
                <div className="mb-3 py-4 px-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-sky-50/40 to-indigo-50/70 dark:from-stone-800/40 dark:via-stone-800/20 dark:to-stone-800/40 border border-indigo-200/50 dark:border-indigo-700/25 relative">
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-400/40 dark:text-indigo-500/30">
                      <path d="M2 2 L2 12 Q2 2 12 2 Q2 2 2 12 L2 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M2 2 L8 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M2 2 L2 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-400/40 dark:text-indigo-500/30">
                      <path d="M22 22 L22 12 Q22 22 12 22 Q22 22 22 12 L22 22Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M22 22 L16 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M22 22 L22 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xl text-stone-800 dark:text-indigo-100 font-amiri leading-[2.2] text-center" dir="rtl">{verse.textAr}</p>
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
                      className={`rounded-full transition-all duration-300 ${i === currentFact ? 'w-6 h-2 bg-sky-500 dark:bg-sky-400 shadow-sm shadow-sky-500/30' : 'w-2 h-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'}`}
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
      className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-green-200/40 dark:border-green-700/30"
    >
      <div className="streak-fire text-lg">🔥</div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-green-600 dark:text-green-400">{streak} jour{streak > 1 ? 's' : ''}</span>
        <span className="text-[9px] text-stone-400 dark:text-stone-500">{getStreakMessage(streak)}</span>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────
// Discoveries Feed — Horizontal auto-scrolling cards
// ─────────────────────────────────────────────────────
function DiscoveriesFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const items = useMemo(() => getShuffledDiscoveries(20), []);

  // Card width for snap scrolling
  const CARD_WIDTH = 200;
  const GAP = 12;
  const STEP = CARD_WIDTH + GAP;

  const scrollToNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const next = el.scrollLeft + STEP;
    // Loop back to start when reaching the end
    el.scrollTo({ left: next > maxScroll + STEP / 2 ? 0 : next, behavior: 'smooth' });
  }, [STEP]);

  const scrollToPrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const prev = el.scrollLeft - STEP;
    el.scrollTo({ left: prev < 0 ? el.scrollWidth - el.clientWidth : prev, behavior: 'smooth' });
  }, [STEP]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    autoScrollRef.current = setInterval(scrollToNext, 5000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused, scrollToNext]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  const handleTouchStart = useCallback(() => setIsPaused(true), []);
  const handleTouchEnd = useCallback(() => setIsPaused(false), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.85 }}
      className="max-w-2xl lg:max-w-5xl mx-auto"
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-base">💡</span>
          <h2 className="text-sm font-bold text-stone-700 dark:text-stone-200 uppercase tracking-wider">
            Découvertes
          </h2>
          <span className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">
            {items.length} curiosités
          </span>
        </div>
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              toast('Découvertes réinitialisées !');
            }
          }}
          className="flex items-center gap-1 text-[11px] text-sky-600 dark:text-sky-400 font-semibold hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
        >
          Voir tout
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative group">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/80 dark:from-stone-950/80 to-transparent z-10 pointer-events-none rounded-l-xl" />
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/80 dark:from-stone-950/80 to-transparent z-10 pointer-events-none rounded-r-xl" />

        {/* Navigation arrows (desktop only) */}
        <button
          onClick={scrollToPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-sm border border-stone-200/50 dark:border-stone-700/50 flex items-center justify-center text-stone-500 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
          aria-label="Précédent"
        >
          <span className="text-xs">‹</span>
        </button>
        <button
          onClick={scrollToNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-sm border border-stone-200/50 dark:border-stone-700/50 flex items-center justify-center text-stone-500 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
          aria-label="Suivant"
        >
          <span className="text-xs">›</span>
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1 -mx-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => {
            const cat = discoveryCategoryConfig[item.category];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.05, duration: 0.35 }}
                className="flex-shrink-0 snap-start"
                style={{ width: CARD_WIDTH }}
              >
                <div className={`
                  glass-card rounded-xl border border-stone-200/40 dark:border-stone-700/30
                  shadow-sm hover:shadow-md transition-all duration-200
                  p-3.5 h-full flex flex-col
                  border-t-2 ${cat.cardAccent}
                  hover:border-stone-300/60 dark:hover:border-stone-600/40
                  cursor-default
                `}>
                  {/* Icon + category pill row */}
                  <div className="flex items-center justify-between mb-2">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/30 dark:to-indigo-900/30 flex items-center justify-center text-xl shadow-sm"
                    >
                      {item.icon}
                    </motion.div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${cat.color} ${cat.bg}`}>
                      {cat.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] font-bold text-stone-800 dark:text-stone-100 mb-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed flex-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {isPaused ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1.5"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-sky-500"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
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
      <div className={`glass-card rounded-2xl border p-5 shadow-sm ${isCompleted ? 'border-green-200/40 dark:border-green-700/30' : 'border-sky-200/30 dark:border-sky-700/20'}`}>
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
            <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">
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
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white rounded-full text-xs font-semibold shadow-sm transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-indigo-50 to-sky-50 dark:from-stone-950 dark:via-indigo-950/20 dark:to-stone-950" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M40 0l10 20h20l-15 15 5 20-20-10-20 10 5-20L10 20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            className="w-12 h-12 rounded-full glass-card border border-sky-200/30 dark:border-stone-600/40 flex items-center justify-center text-stone-500 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-100 shadow-md transition-colors"
            aria-label="Paramètres"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className="w-12 h-12 rounded-full glass-card border border-sky-200/30 dark:border-stone-600/40 flex items-center justify-center text-stone-500 dark:text-stone-200 hover:text-stone-700 dark:hover:text-stone-100 shadow-md transition-colors"
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
                  boxShadow: '0 0 40px rgba(96, 165, 250, 0.3), 0 0 80px rgba(96, 165, 250, 0.1)',
                }}
              />
              {/* Dark mode radial glow around moon */}
              <div className="absolute -inset-8 rounded-full hidden dark:block" style={{
                background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, rgba(96,165,250,0.05) 40%, transparent 70%)',
              }} />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 via-indigo-200 to-sky-300 shadow-lg shadow-sky-200/50 dark:shadow-sky-900/30 flex items-center justify-center relative">
                <span className="text-5xl relative z-10">🌙</span>
                {/* Orbiting stars */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-lg dark:text-sky-200/90 dark:brightness-110">✦</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '48px 48px' }}
                >
                  <span className="text-xs dark:text-sky-200/90 dark:brightness-110">✦</span>
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
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
              }}
            >
              <span className="text-4xl">🌟</span>
            </motion.div>
            <div className="text-center">
              <p className="text-base font-bold text-stone-800 dark:text-stone-100">Je suis Souhayl, j'ai bientôt 10 ans</p>
              <p className="text-base font-bold text-sky-600 dark:text-sky-300">Prêt pour l&apos;aventure ?</p>
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
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2"
          >
            de Souhayl
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-sky-600/80 dark:text-sky-400/80 mb-1 font-amiri"
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-300 dark:to-sky-600" />
            <Sparkles className="w-4 h-4 text-sky-400 dark:text-sky-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-300 dark:to-sky-600" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-stone-500 dark:text-stone-400 max-w-lg mx-auto leading-relaxed"
          >
            Un livre dont tu es le héros — Découvre le cheminement spirituel de Souhayl,
            un garçon de 9 ans bientôt 10 qui apprend à combattre son ego avec les armes de l'âme.
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
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-sky-200/40 dark:border-stone-700/40 shadow-sm"
            >
              <div className="w-32 h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full story-progress-bar rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <span className="text-xs font-semibold text-sky-700 dark:text-sky-400">{progressPercent}%</span>
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
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-lg shadow-sky-200/50 dark:shadow-sky-900/30 rounded-xl golden-glow-hover animate-breathe"
              >
                <Play className="w-5 h-5" />
                Continuer l&apos;aventure
              </Button>
            ) : (
              <Button
                onClick={() => { selectTome(tomes[0].id); navigateTo('chapter_select'); }}
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-lg shadow-sky-200/50 dark:shadow-sky-900/30 rounded-xl golden-glow-hover animate-breathe"
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

      {/* Discoveries Feed — horizontal scroll */}
      <div className="relative z-10 px-4 pb-4">
        <DiscoveriesFeed />
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
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30 card-hover-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center group-hover:bg-sky-200 dark:group-hover:bg-sky-800/30 transition-colors shadow-sm">
              <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
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
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center group-hover:bg-sky-200 dark:group-hover:bg-sky-800/30 transition-colors shadow-sm">
              <Users className="w-5 h-5 text-sky-600 dark:text-sky-400" />
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
            onClick={() => navigateTo('islamic_names')}
            className="flex flex-col items-center gap-1.5 p-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-indigo-200/40 dark:hover:border-indigo-700/30"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors shadow-sm">
              <ScrollText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200">Noms</span>
            <span className="text-[9px] text-stone-400 dark:text-stone-500">Beaux prénoms</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Feature cards: Dhikr + Mini-Jeux + Cartes — staggered */}
      <div className="relative z-10 px-4 pb-3">
        <motion.div
          className="max-w-lg lg:max-w-5xl mx-auto grid grid-cols-3 gap-2.5"
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
              className="w-full flex items-center gap-3 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                <span className="text-lg">📿</span>
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200 block">Dhikr</span>
                <span className="text-[9px] text-stone-400 dark:text-stone-500 hidden sm:block">Compteur de tasbih</span>
              </div>
              <Sparkles className="w-4 h-4 text-sky-400 dark:text-sky-500 shrink-0" />
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
              className="w-full flex items-center gap-3 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-purple-200/40 dark:hover:border-purple-700/30"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200 block">Mini-Jeux</span>
                <span className="text-[9px] text-stone-400 dark:text-stone-500 hidden sm:block">Jeu de mémoire</span>
              </div>
              <Sparkles className="w-4 h-4 text-purple-400 dark:text-purple-500 shrink-0" />
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
              onClick={() => navigateTo('greeting_cards')}
              className="w-full flex items-center gap-3 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-indigo-200/40 dark:hover:border-indigo-700/30"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-200 block">Cartes</span>
                <span className="text-[9px] text-stone-400 dark:text-stone-500 hidden sm:block">Cartes de vœux</span>
              </div>
              <Sparkles className="w-4 h-4 text-indigo-400 dark:text-indigo-500 shrink-0" />
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
            <BarChart3 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
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
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-600 dark:text-stone-300 border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30"
          >
            <Star className="w-4 h-4 text-sky-600 dark:text-sky-400" />
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
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 glass-card rounded-xl shadow-sm hover:shadow-md transition-all text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30"
            >
              <BookmarkCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="text-[11px] font-medium">Mes signets ({bookmarkedScenes.length})</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
