'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { characters } from '@/data/characters';
import { Button } from '@/components/ui/button';
import { useApp } from '@/components/AppContext';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

export function CharacterGalleryScreen() {
  const { navigateTo } = useApp();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const character = selectedCharacter ? characters.find(c => c.id === selectedCharacter) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-indigo-50/30 to-sky-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-sky-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-sky-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => selectedCharacter ? setSelectedCharacter(null) : navigateTo('home')}
            className="shrink-0"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {selectedCharacter ? 'Retour' : 'Accueil'}
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">
            {selectedCharacter ? character?.name : 'Personnages'}
          </h1>
          {!selectedCharacter && (
            <span className="ml-auto text-xs font-medium text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30 px-2 py-1 rounded-full">
              {characters.length} personnages
            </span>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {selectedCharacter && character ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="parchment-card rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Character hero header */}
              <div
                className="p-8 text-center text-white relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${character.color}, ${character.color}cc)` }}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-20 h-20 rounded-full border border-white/10" />
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/5" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl border-4 border-white/40 shadow-xl relative z-10"
                >
                  {character.icon}
                </motion.div>
                <h2 className="text-2xl font-bold relative z-10">{character.name}</h2>
                <p className="text-lg opacity-90 font-amiri relative z-10" dir="rtl">{character.nameAr}</p>
                {character.age && (
                  <p className="text-sm opacity-75 mt-1 relative z-10">{character.age}</p>
                )}
                <div className="mt-2 flex items-center justify-center gap-2 relative z-10">
                  <Heart className="w-3 h-3" />
                  <p className="text-sm font-medium opacity-90">{character.role}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Description
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">{character.description}</p>
                </div>
                <div className="border-t border-stone-100 dark:border-stone-700 pt-4">
                  <h3 className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2 flex items-center gap-1">
                    🎨 Apparence manga
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">{character.appearance}</p>
                </div>

                {/* Character color accent */}
                <div className="flex items-center gap-3 pt-2">
                  <div
                    className="w-6 h-6 rounded-full shadow-sm"
                    style={{ backgroundColor: character.color }}
                  />
                  <span className="text-xs text-stone-400 dark:text-stone-500">Couleur du personnage</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {characters.map((char, idx) => (
                <motion.button
                  key={char.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCharacter(char.id)}
                  className="parchment-card rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  {/* Subtle background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${char.color}, transparent 70%)`,
                    }}
                  />

                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl border-2 relative z-10 shadow-sm"
                    style={{ borderColor: char.color, backgroundColor: `${char.color}10` }}
                  >
                    {char.icon}
                  </div>
                  <p className="font-bold text-stone-800 dark:text-stone-100 text-sm relative z-10">{char.name}</p>
                  <p className="text-xs font-amiri relative z-10" style={{ color: char.color }} dir="rtl">{char.nameAr}</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-1 relative z-10">{char.role.split('—')[0].trim()}</p>
                  {char.age && (
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5 relative z-10">{char.age}</p>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info section */}
        {!selectedCharacter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 parchment-card rounded-xl p-4"
          >
            <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed text-center">
              Chaque personnage incarne une qualité spirituelle. En découvrant leur histoire,
              tu apprendras à cultiver ces vertus dans ta propre vie.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
