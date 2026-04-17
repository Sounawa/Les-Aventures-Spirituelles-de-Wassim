'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { BookOpen, Lock, ChevronRight, Star, Users, Award, Play, RotateCcw } from 'lucide-react';

export function HomeScreen() {
  const { setScreen, selectTome, completedChapters, earnedBadges } = useApp();
  const hasProgress = completedChapters.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='1'%3E%3Cpath d='M40 0l10 20h20l-15 15 5 20-20-10-20 10 5-20L10 20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 border-2 border-amber-300/20 rotate-45"
          animate={{ rotate: [45, 90, 45], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-16 w-12 h-12 border-2 border-teal-300/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-10 h-10 bg-amber-200/10 rotate-12"
          animate={{ rotate: [12, 45, 12], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-lg">
          {/* Crescent moon and star */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 shadow-lg shadow-amber-200/50">
              <span className="text-5xl">🌙</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-2"
          >
            Les Aventures Spirituelles
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-amber-700 mb-2"
          >
            de Nawfel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-amber-600/80 mb-1"
            dir="rtl"
          >
            مغامرات نوفل الروحية
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-stone-500 mt-4 max-w-md mx-auto leading-relaxed"
          >
            Un livre dont tu es le héros — Découvre le cheminement spirituel de Nawfel,
            un garçon de 8 ans qui apprend à combattre son ego avec les armes de l&apos;âme.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 space-y-3"
          >
            <Button
              onClick={() => {
                selectTome(tomes[0].id);
                setScreen('chapter_select');
              }}
              className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 h-14 text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-200/50 rounded-xl"
            >
              <Play className="w-5 h-5" />
              Commencer l\'aventure
            </Button>


          </motion.div>
        </div>
      </div>

      {/* Quick access cards */}
      <div className="relative z-10 px-4 pb-6">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setScreen('tome_select')}
            className="flex flex-col items-center gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-amber-200/30 shadow-sm hover:shadow-md transition-shadow"
          >
            <BookOpen className="w-6 h-6 text-amber-600" />
            <span className="text-xs font-medium text-stone-600">Tomes</span>
            <span className="text-[10px] text-stone-400">{tomes.length} disponible{tomes.length > 1 ? 's' : ''}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setScreen('character_gallery')}
            className="flex flex-col items-center gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-teal-200/30 shadow-sm hover:shadow-md transition-shadow"
          >
            <Users className="w-6 h-6 text-teal-600" />
            <span className="text-xs font-medium text-stone-600">Personnages</span>
            <span className="text-[10px] text-stone-400">6 personnages</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setScreen('badge_collection')}
            className="flex flex-col items-center gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-200/30 shadow-sm hover:shadow-md transition-shadow"
          >
            <Award className="w-6 h-6 text-purple-600" />
            <span className="text-xs font-medium text-stone-600">Badges</span>
            <span className="text-[10px] text-stone-400">{earnedBadges.length}/8</span>
          </motion.button>
        </div>
      </div>


    </div>
  );
}
