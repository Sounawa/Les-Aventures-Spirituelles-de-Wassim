'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, RotateCcw, Star, Trophy, Sparkles,
} from 'lucide-react';

// ─── Dhikr phrases ────────────────────────────────────────────
interface DhikrPhrase {
  id: string;
  arabic: string;
  french: string;
  target: number;
  emoji: string;
}

const DHIKR_PHRASES: DhikrPhrase[] = [
  { id: 'soubhanallah', arabic: 'سُبْحَانَ اللَّهِ', french: 'Soubhan\'Allah — Gloire à Allah', target: 33, emoji: '✨' },
  { id: 'alhamdoulillah', arabic: 'الْحَمْدُ لِلَّهِ', french: 'Alhamdoulillah — Louange à Allah', target: 33, emoji: '🌟' },
  { id: 'allahouakbar', arabic: 'اللَّهُ أَكْبَرُ', french: 'Allahou Akbar — Allah est le plus Grand', target: 34, emoji: '🏔️' },
  { id: 'lailahailla', arabic: 'لَا إِلٰهَ إِلَّا اللَّهُ', french: 'La ilaha illa Allah — Il n\'y a de dieu qu\'Allah', target: 100, emoji: '💎' },
  { id: 'astaghfirullah', arabic: 'أَسْتَغْفِرُ اللَّهَ', french: 'Astaghfirullah — Je demande pardon à Allah', target: 100, emoji: '🕊️' },
];

// ─── Celebration particle ─────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  angle: number;
  distance: number;
  size: number;
  delay: number;
}

const CELEBRATION_EMOJIS = ['⭐', '✨', '🌟', '💫', '🕌', '🌙', '💚', '🤲'];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    emoji: CELEBRATION_EMOJIS[Math.floor(Math.random() * CELEBRATION_EMOJIS.length)],
    angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5,
    distance: 80 + Math.random() * 100,
    size: 16 + Math.random() * 14,
    delay: Math.random() * 0.3,
  }));
}

// ─── SVG Progress Ring ────────────────────────────────────────
function ProgressRing({
  progress,
  size,
  strokeWidth,
  isComplete,
}: {
  progress: number;
  size: number;
  strokeWidth: number;
  isComplete: boolean;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="absolute inset-0 -rotate-90"
      style={{ width: size, height: size }}
    >
      {/* Background ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-amber-200/40 dark:stroke-amber-700/30"
      />
      {/* Progress ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={isComplete ? 'stroke-emerald-400 dark:stroke-emerald-500' : 'stroke-amber-400 dark:stroke-amber-500'}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{
          transition: 'stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s ease',
        }}
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────
export function DhikrCounterScreen() {
  const { navigateTo, totalDhikr, totalDhikrSessions, updateDhikrSession } = useApp();

  // Local state (not persisted)
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [count, setCount] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [particles] = useState<Particle[]>(() => generateParticles(12));
  const completedRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const celebrationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const phrase = DHIKR_PHRASES[selectedIdx];
  const progress = Math.min(count / phrase.target, 1);
  const isComplete = count >= phrase.target;

  const handleTap = useCallback(() => {
    if (isComplete) return;

    const newCount = count + 1;
    setCount(newCount);
    setSessionCount(prev => prev + 1);
    setPulseKey(prev => prev + 1);

    // Check if target just reached
    if (newCount >= phrase.target && !completedRef.current) {
      completedRef.current = true;
      setShowCelebration(true);
      setRoundsCompleted(prev => prev + 1);
      // Persist this session completion
      updateDhikrSession(phrase.target);
      toast.success("Masha'Allah ! Dhikr terminé ! 📿", {
        description: phrase.french,
      });
      if (celebrationTimerRef.current) clearTimeout(celebrationTimerRef.current);
      celebrationTimerRef.current = setTimeout(() => setShowCelebration(false), 2500);
    }

    // Vibration feedback
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(15);
    }
  }, [isComplete, count, phrase.target, phrase.french, updateDhikrSession]);

  const handleReset = useCallback(() => {
    setCount(0);
    completedRef.current = false;
  }, []);

  const handleSelectPhrase = useCallback((idx: number) => {
    if (idx === selectedIdx) return;
    // If the current count was >= target and we're switching, reset completed ref
    completedRef.current = false;
    setSelectedIdx(idx);
    setCount(0);
  }, [selectedIdx]);

  const handleScrollToSelected = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const selectedBtn = container.querySelector('[data-selected="true"]') as HTMLElement;
    if (selectedBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = selectedBtn.getBoundingClientRect();
      const offset = btnRect.left - containerRect.left - (containerRect.width / 2) + (btnRect.width / 2);
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    handleScrollToSelected();
  }, [selectedIdx, handleScrollToSelected]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/50 to-orange-50/30 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-amber-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">
            📿 Compteur de Dhikr
          </h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6 pb-28">
        {/* Phrase Selector Pills */}
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {DHIKR_PHRASES.map((p, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <motion.button
                  key={p.id}
                  data-selected={isActive ? 'true' : undefined}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectPhrase(idx)}
                  className={`shrink-0 snap-center px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400 shadow-md'
                      : 'bg-white/60 dark:bg-stone-800/60 text-stone-600 dark:text-stone-300 border-stone-200/50 dark:border-stone-700/50 hover:bg-amber-50 dark:hover:bg-stone-800'
                  }`}
                >
                  <span className="mr-1">{p.emoji}</span>
                  {p.french.split(' — ')[0]}
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Current Phrase Display */}
        <motion.section
          key={phrase.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-center space-y-2 py-4"
        >
          <p className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-stone-100 leading-relaxed" dir="rtl">
            {phrase.arabic}
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {phrase.french}
          </p>
        </motion.section>

        {/* Main Counter Button with Progress Ring */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Counter display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={pulseKey}
                initial={{ scale: 1.15, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="text-center"
              >
                <p className="text-5xl sm:text-6xl font-black text-stone-800 dark:text-stone-100 tabular-nums">
                  {count}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tap Button with Progress Ring */}
          <div className="relative" style={{ width: 160, height: 160 }}>
            <ProgressRing
              progress={progress}
              size={160}
              strokeWidth={6}
              isComplete={isComplete}
            />
            <motion.button
              whileTap={{ scale: 0.92 }}
              onTapStart={() => setIsPressed(true)}
              onTap={() => setIsPressed(false)}
              onClick={handleTap}
              disabled={isComplete}
              className={`absolute inset-0 m-auto rounded-full flex items-center justify-center transition-all duration-150 ${
                isComplete
                  ? 'bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30 cursor-default'
                  : 'bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 active:shadow-md cursor-pointer'
              } ${isPressed && !isComplete ? 'brightness-90' : ''}`}
              style={{ width: 140, height: 140 }}
              aria-label={`Compter ${phrase.french.split(' — ')[0]}. ${count} sur ${phrase.target}`}
            >
              {isComplete ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-4xl">✅</span>
                  <span className="text-white text-xs font-semibold">Terminé !</span>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white text-2xl font-bold">{phrase.emoji}</span>
                  <span className="text-white/80 text-[10px] font-medium">Appuie ici</span>
                </div>
              )}
            </motion.button>

            {/* Celebration overlay */}
            <AnimatePresence>
              {showCelebration && particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: Math.cos(p.angle) * p.distance,
                    y: Math.sin(p.angle) * p.distance,
                    opacity: 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, delay: p.delay, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{ fontSize: p.size, lineHeight: 1 }}
                >
                  {p.emoji}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Target Display */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-1"
        >
          {isComplete ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40"
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Masha&apos;Allah ! Objectif atteint : {phrase.target} / {phrase.target} ✅
              </span>
            </motion.div>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-stone-800/60 border border-stone-200/50 dark:border-stone-700/50">
              <span className="text-sm text-stone-500 dark:text-stone-400">
                Objectif : {count} / {phrase.target}
              </span>
              {count > 0 && (
                <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                  ({Math.round(progress * 100)}%)
                </span>
              )}
            </div>
          )}

          {/* Reset Button */}
          {count > 0 && (
            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Recommencer
              </Button>
            </div>
          )}
        </motion.section>

        {/* Session Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Trophy className="w-3 h-3" />
            Statistiques de la session
          </h2>
          <div className="glass-card rounded-xl p-4">
            <div className="grid grid-cols-3 gap-3">
              {/* Total this session */}
              <div className="flex flex-col items-center bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-lg font-bold text-stone-700 dark:text-stone-200 tabular-nums">{sessionCount}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500">Cette session</p>
              </div>
              {/* Rounds completed */}
              <div className="flex flex-col items-center bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-1.5">
                  <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-lg font-bold text-stone-700 dark:text-stone-200 tabular-nums">{roundsCompleted}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500">Tours terminés</p>
              </div>
              {/* Lifetime total */}
              <div className="flex flex-col items-center bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-1.5">
                  <Trophy className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="text-lg font-bold text-stone-700 dark:text-stone-200 tabular-nums">{totalDhikr}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500">Total dhikr</p>
              </div>
            </div>
            {/* Lifetime sessions */}
            <div className="mt-3 pt-3 border-t border-stone-200/50 dark:border-stone-700/50 text-center">
              <p className="text-xs text-stone-500 dark:text-stone-400">
                📿 {totalDhikrSessions} session{totalDhikrSessions > 1 ? 's' : ''} complétée{totalDhikrSessions > 1 ? 's' : ''} en tout — BarakAllahou fik !
              </p>
            </div>
          </div>
        </motion.section>

        {/* Spiritual encouragement */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xs text-stone-400 dark:text-stone-600 italic">
            &ldquo;Le Prophète ﷺ a dit : Les paroles les plus aimées auprès d&apos;Allah sont : Soubhan&apos;Allah wal hamdoulillah wa la ilaha illa Allah wallahou akbar.&rdquo;
          </p>
        </motion.section>
      </div>
    </div>
  );
}
