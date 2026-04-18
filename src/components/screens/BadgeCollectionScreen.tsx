'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { badges } from '@/data/badges';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, Sparkles, Lock } from 'lucide-react';

export function BadgeCollectionScreen() {
  const { navigateTo, earnedBadges, completedChapters } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-purple-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-orange-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Badges Spirituels</h1>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-5 h-5 text-purple-500" />
            </motion.div>
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
              {earnedBadges.length}/{badges.length}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Progress message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          {/* Progress ring */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg width="96" height="96" className="-rotate-90">
              <circle cx="48" cy="48" r="40" fill="none" stroke="currentColor" strokeWidth="6" className="text-stone-100 dark:text-stone-700" />
              <motion.circle
                cx="48" cy="48" r="40"
                fill="none" stroke="#7C3AED" strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={251.3}
                initial={{ strokeDashoffset: 251.3 }}
                animate={{ strokeDashoffset: 251.3 - (earnedBadges.length / badges.length) * 251.3 }}
                transition={{ duration: 1.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-purple-700 dark:text-purple-400">
                {Math.round((earnedBadges.length / badges.length) * 100)}%
              </span>
            </div>
          </div>

          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xs mx-auto">
            {earnedBadges.length === 0
              ? 'Fais les bons choix dans l\'histoire pour gagner des badges spirituels !'
              : earnedBadges.length === badges.length
                ? 'Masha\'Allah ! Tu as collectionné tous les badges ! Tu es un vrai seeker spirituel !'
                : `Tu as découvert ${earnedBadges.length} vertu${earnedBadges.length > 1 ? 's' : ''} spirituelle${earnedBadges.length > 1 ? 's' : ''}. Continue ton cheminement !`
            }
          </p>
        </motion.div>

        {/* Badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((badge, idx) => {
            const isEarned = earnedBadges.includes(badge.id);

            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={isEarned ? {
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 },
                } : {}}
                className={`rounded-xl border p-4 text-center transition-all relative overflow-hidden ${
                  isEarned
                    ? 'parchment-card shadow-md cursor-default'
                    : 'bg-white/30 dark:bg-stone-800/30 border-stone-200/40 dark:border-stone-700/40 opacity-40'
                }`}
                style={isEarned ? { borderColor: `${badge.color}30` } : {}}
              >
                {/* Glow effect for earned badges */}
                {isEarned && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${badge.color}, transparent 70%)`,
                    }}
                  />
                )}

                <div className="relative z-10">
                  <motion.div
                    animate={isEarned ? { y: [0, -4, 0] } : {}}
                    transition={isEarned ? { duration: 2, repeat: Infinity, delay: idx * 0.2 } : {}}
                    className="text-4xl mb-2"
                  >
                    {isEarned ? badge.icon : <Lock className="w-8 h-8 mx-auto text-stone-300" />}
                  </motion.div>
                  <h3 className={`font-bold text-sm ${isEarned ? 'text-stone-800 dark:text-stone-100' : 'text-stone-400'}`}>
                    {isEarned ? badge.name : '???'}
                  </h3>
                  {isEarned && (
                    <>
                      <p className="text-xs mt-0.5 font-amiri" style={{ color: badge.color }} dir="rtl">{badge.nameAr}</p>
                      <div className="mt-2 pt-2 border-t border-stone-200/50 dark:border-stone-700/50">
                        <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-relaxed">{badge.description}</p>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <Sparkles className="w-3 h-3" style={{ color: badge.color }} />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Encouragement message */}
        {earnedBadges.length > 0 && earnedBadges.length < badges.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 parchment-card rounded-xl p-4 text-center"
          >
            <p className="text-xs text-stone-500 dark:text-stone-400 italic">
              Chaque badge est une vertu spirituelle que tu cultives en toi.
              Continue à faire les bons choix dans ton aventure !
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
