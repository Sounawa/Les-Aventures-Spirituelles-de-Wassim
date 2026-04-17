'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { characters } from '@/data/characters';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X } from 'lucide-react';

export function CharacterGalleryScreen() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const character = selectedCharacter ? characters.find(c => c.id === selectedCharacter) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-amber-50 to-orange-50">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-teal-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => selectedCharacter ? setSelectedCharacter(null) : undefined} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            {selectedCharacter ? 'Retour' : 'Accueil'}
          </Button>
          <h1 className="text-lg font-bold text-stone-800">
            {selectedCharacter ? character?.name : 'Personnages'}
          </h1>
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
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-sm overflow-hidden"
            >
              {/* Character header */}
              <div
                className="p-6 text-center text-white"
                style={{ background: `linear-gradient(135deg, ${character.color}, ${character.color}cc)` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-5xl border-4 border-white/40">
                  {character.icon}
                </div>
                <h2 className="text-2xl font-bold">{character.name}</h2>
                <p className="text-lg opacity-90" dir="rtl">{character.nameAr}</p>
                {character.age && (
                  <p className="text-sm opacity-75 mt-1">{character.age}</p>
                )}
                <p className="text-sm mt-2 opacity-90 font-medium">{character.role}</p>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-400 mb-2">Description</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{character.description}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-stone-400 mb-2">Apparence manga</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{character.appearance}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {characters.map((char, idx) => (
                <motion.button
                  key={char.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCharacter(char.id)}
                  className="bg-white/70 backdrop-blur-sm rounded-xl border p-4 text-center shadow-sm hover:shadow-md transition-all"
                  style={{ borderColor: `${char.color}30` }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl border-2"
                    style={{ borderColor: char.color, backgroundColor: `${char.color}10` }}
                  >
                    {char.icon}
                  </div>
                  <p className="font-bold text-stone-800 text-sm">{char.name}</p>
                  <p className="text-xs" style={{ color: char.color }}>{char.nameAr}</p>
                  <p className="text-[10px] text-stone-400 mt-1">{char.role.split('—')[0].trim()}</p>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
