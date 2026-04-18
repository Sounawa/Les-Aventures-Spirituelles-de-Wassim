'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, BookOpen, CheckCircle2, Sparkles,
  Lock, ChevronRight, Sword,
} from 'lucide-react';

const tomeGradients = [
  { from: '#D97706', to: '#EA580C', light: 'from-sky-500 to-indigo-600' },
  { from: '#E11D48', to: '#DB2777', light: 'from-rose-500 to-pink-600' },
  { from: '#CA8A04', to: '#D97706', light: 'from-yellow-500 to-sky-600' },
  { from: '#0D9488', to: '#0891B2', light: 'from-sky-500 to-cyan-600' },
  { from: '#7C3AED', to: '#6D28D9', light: 'from-purple-500 to-violet-600' },
];

const tomeIcons = ['🌙', '🔥', '🌊', '💫', '👑'];

export function TomeSelectScreen() {
  const { navigateTo, selectTome, completedChapters } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-indigo-50/30 to-sky-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-sky-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-sky-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Les Tomes</h1>
          <div className="ml-auto flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span className="text-xs font-medium text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30 px-2 py-1 rounded-full">
              {tomes.length} tomes
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Overall progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="parchment-card rounded-xl p-4 flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
            <span className="text-xl">📖</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Progression globale</p>
            <div className="w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full mt-1 overflow-hidden">
              {(() => {
                const total = tomes.reduce((s, t) => s + t.chapters.length, 0);
                const done = completedChapters.length;
                const pct = total > 0 ? (done / total) * 100 : 0;
                return (
                  <motion.div
                    className="h-full story-progress-bar rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1 }}
                  />
                );
              })()}
            </div>
          </div>
          <span className="text-sm font-bold text-sky-700 dark:text-sky-400">
            {completedChapters.length}/{tomes.reduce((s, t) => s + t.chapters.length, 0)}
          </span>
        </motion.div>

        {/* Tome cards */}
        {tomes.map((tome, idx) => {
          const completedInTome = completedChapters.filter(id =>
            tome.chapters.some(c => c.id === id)
          ).length;
          const isTomeComplete = completedInTome === tome.chapters.length;
          const isFirst = idx === 0;
          const isUnlocked = isFirst || isTomeComplete ||
            completedChapters.includes(tomes[idx - 1].chapters[tomes[idx - 1].chapters.length - 1].id);
          const colors = tomeGradients[idx] || tomeGradients[0];

          return (
            <motion.button
              key={tome.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={isUnlocked ? { scale: 1.01, y: -2 } : {}}
              whileTap={isUnlocked ? { scale: 0.99 } : {}}
              onClick={() => {
                if (!isUnlocked) return;
                selectTome(tome.id);
                navigateTo('chapter_select');
              }}
              disabled={!isUnlocked}
              className={`w-full text-left rounded-xl border overflow-hidden transition-all group relative ${
                isUnlocked
                  ? 'parchment-card shadow-sm hover:shadow-lg golden-glow-hover cursor-pointer'
                  : 'bg-white/30 dark:bg-stone-800/30 border-stone-200/40 dark:border-stone-700/40 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex">
                {/* Tome cover */}
                <div
                  className="w-24 md:w-28 flex flex-col items-center justify-center text-white shrink-0 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  <span className="text-3xl mb-1 relative z-10">{tomeIcons[idx]}</span>
                  <span className="text-3xl font-bold relative z-10">{tome.number}</span>
                  {isTomeComplete && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 z-10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                    </motion.div>
                  )}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                      <Lock className="w-5 h-5 text-white/70" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-stone-800 dark:text-stone-100 text-base">{tome.title}</h3>
                      <p className="text-sm text-sky-600 dark:text-sky-400 font-amiri" dir="rtl">{tome.titleAr}</p>
                    </div>
                    {isUnlocked && (
                      <ChevronRight className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-sky-600 transition-colors mt-1 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 italic">{tome.subtitle}</p>

                  {/* Monsters */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {tome.monsters.map((monster) => (
                      <span
                        key={monster}
                        className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${colors.from}10`,
                          color: colors.from,
                        }}
                      >
                        <Sword className="w-2.5 h-2.5" />
                        {monster.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: colors.from }}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${tome.chapters.length > 0 ? (completedInTome / tome.chapters.length) * 100 : 0}%`,
                        }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                      />
                    </div>
                    <span className="text-[10px] text-stone-400 dark:text-stone-500 font-medium">
                      {completedInTome}/{tome.chapters.length}
                    </span>
                    {isTomeComplete && (
                      <Sparkles className="w-3 h-3 text-sky-500" />
                    )}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* Spiritual journey note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="parchment-card rounded-xl p-5 text-center islamic-border"
        >
          <p className="text-sm text-stone-600 dark:text-stone-400 italic leading-relaxed">
            « Le plus grand jihad est le jihad contre soi-même. »
          </p>
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">— Rapporté par Ahmad et Bayhaqi</p>
        </motion.div>
      </div>
    </div>
  );
}
