'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { badges } from '@/data/badges';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, Award } from 'lucide-react';

export function BadgeCollectionScreen() {
  const { setScreen, earnedBadges } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-amber-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-purple-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setScreen('home')} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-lg font-bold text-stone-800">Badges Spirituels</h1>
          </div>
          <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {earnedBadges.length}/{badges.length}
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Progress message */}
        <div className="text-center mb-6">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-3"
          >
            <Award className="w-12 h-12 text-purple-500" />
          </motion.div>
          <p className="text-sm text-stone-500">
            {earnedBadges.length === 0
              ? 'Fais les bons choix dans l\'histoire pour gagner des badges spirituels !'
              : earnedBadges.length === badges.length
                ? 'Masha\'Allah ! Tu as collectionné tous les badges ! 🌟'
                : `Tu as découvert ${earnedBadges.length} vertu${earnedBadges.length > 1 ? 's' : ''} spirituelle${earnedBadges.length > 1 ? 's' : ''}. Continue ton cheminement !`
            }
          </p>
        </div>

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
                whileHover={isEarned ? { scale: 1.05 } : {}}
                className={`rounded-xl border p-4 text-center transition-all ${
                  isEarned
                    ? 'bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg cursor-default'
                    : 'bg-white/30 border-stone-200/40 opacity-50'
                }`}
                style={isEarned ? { borderColor: `${badge.color}40` } : {}}
              >
                <motion.div
                  animate={isEarned ? { y: [0, -4, 0] } : {}}
                  transition={isEarned ? { duration: 2, repeat: Infinity, delay: idx * 0.2 } : {}}
                  className="text-4xl mb-2"
                >
                  {isEarned ? badge.icon : '🔒'}
                </motion.div>
                <h3 className={`font-bold text-sm ${isEarned ? 'text-stone-800' : 'text-stone-400'}`}>
                  {isEarned ? badge.name : '???'}
                </h3>
                {isEarned && (
                  <>
                    <p className="text-xs mt-0.5" style={{ color: badge.color }} dir="rtl">{badge.nameAr}</p>
                    <p className="text-[10px] text-stone-500 mt-2 leading-relaxed">{badge.description}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
