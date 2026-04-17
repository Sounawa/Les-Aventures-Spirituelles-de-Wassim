'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Save, Star, Trophy, Flame, Check,
} from 'lucide-react';

const AVATAR_OPTIONS = [
  '🌟', '🌙', '⭐', '🦋', '🕊️', '🌸',
  '🍃', '💎', '🐪', '🕌', '☀️', '🌿',
  '📖', '🎵', '🏔️', '🌊',
];

const COLOR_OPTIONS = [
  { value: 'amber', label: 'Ambre', tw: 'bg-amber-500', ring: 'ring-amber-400', bg: 'bg-amber-100 dark:bg-amber-900/40', text: 'text-amber-600 dark:text-amber-400' },
  { value: 'emerald', label: 'Émeraude', tw: 'bg-emerald-500', ring: 'ring-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/40', text: 'text-emerald-600 dark:text-emerald-400' },
  { value: 'purple', label: 'Violet', tw: 'bg-purple-500', ring: 'ring-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-600 dark:text-purple-400' },
  { value: 'rose', label: 'Rose', tw: 'bg-rose-500', ring: 'ring-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/40', text: 'text-rose-600 dark:text-rose-400' },
  { value: 'teal', label: 'Turquoise', tw: 'bg-teal-500', ring: 'ring-teal-400', bg: 'bg-teal-100 dark:bg-teal-900/40', text: 'text-teal-600 dark:text-teal-400' },
  { value: 'sky', label: 'Ciel', tw: 'bg-sky-500', ring: 'ring-sky-400', bg: 'bg-sky-100 dark:bg-sky-900/40', text: 'text-sky-600 dark:text-sky-400' },
] as const;

function getColorMap(color: string) {
  return COLOR_OPTIONS.find(c => c.value === color) || COLOR_OPTIONS[0];
}

export function ProfileScreen() {
  const {
    navigateTo, playerName, playerAvatar, playerColor, updateProfile,
    completedChapters, earnedBadges, dailyStreak, readingDays, challengeXP,
  } = useApp();

  const [localName, setLocalName] = useState(playerName);
  const [localAvatar, setLocalAvatar] = useState(playerAvatar);
  const [localColor, setLocalColor] = useState(playerColor);
  const [saved, setSaved] = useState(false);

  const hasChanges = useMemo(() => {
    return localName !== playerName || localAvatar !== playerAvatar || localColor !== playerColor;
  }, [localName, localAvatar, localColor, playerName, playerAvatar, playerColor]);

  const handleSave = () => {
    if (!localName.trim()) return;
    updateProfile({
      playerName: localName.trim().slice(0, 20),
      playerAvatar: localAvatar,
      playerColor: localColor,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const colorMap = getColorMap(localColor);

  const streakDays = dailyStreak;
  const totalChapters = completedChapters.length;
  const totalBadges = earnedBadges.length;
  const totalReadingDays = readingDays.length;
  const totalXP = challengeXP;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-amber-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Mon Profil</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6 pb-28">
        {/* Avatar Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={localAvatar + localColor}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`w-28 h-28 rounded-full ${colorMap.bg} flex items-center justify-center ring-4 ${colorMap.ring}/30 shadow-lg`}
            >
              <span className="text-5xl" role="img" aria-label="Avatar">{localAvatar}</span>
            </motion.div>
          </AnimatePresence>
          <div className="text-center">
            <h2 className={`text-xl font-bold ${colorMap.text} transition-colors duration-300`}>
              {localName || 'Nawfel'}
            </h2>
            <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">Aventurier spirituel</p>
          </div>
        </motion.section>

        {/* Name Input */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Star className="w-3 h-3" />
            Nom
          </h2>
          <div className="parchment-card rounded-xl p-4">
            <label htmlFor="profile-name" className="sr-only">Nom du joueur</label>
            <input
              id="profile-name"
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value.slice(0, 20))}
              placeholder="Ton nom d&apos;aventurier..."
              maxLength={20}
              className="w-full bg-white/60 dark:bg-stone-800/60 rounded-lg px-3 py-2.5 text-sm text-stone-700 dark:text-stone-200 placeholder:text-stone-300 dark:placeholder:text-stone-600 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-amber-500/40 transition-all"
            />
            <div className="flex justify-between mt-1.5">
              <p className="text-[10px] text-stone-400 dark:text-stone-500">Choisis un joli nom !</p>
              <p className="text-[10px] text-stone-400 dark:text-stone-500">{localName.length}/20</p>
            </div>
          </div>
        </motion.section>

        {/* Avatar Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Star className="w-3 h-3" />
            Avatar
          </h2>
          <div className="parchment-card rounded-xl p-4">
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
              {AVATAR_OPTIONS.map((emoji) => {
                const isSelected = localAvatar === emoji;
                return (
                  <motion.button
                    key={emoji}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLocalAvatar(emoji)}
                    className={`w-full aspect-square rounded-xl text-2xl flex items-center justify-center transition-all relative ${
                      isSelected
                        ? `bg-amber-100 dark:bg-amber-900/30 ring-2 ring-amber-400 shadow-sm`
                        : 'bg-white/50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-stone-800 border border-stone-200/50 dark:border-stone-700/50'
                    }`}
                    aria-label={`Avatar ${emoji}`}
                  >
                    {emoji}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center"
                      >
                        <Check className="w-2.5 h-2.5 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Color Theme Picker */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Star className="w-3 h-3" />
            Couleur thème
          </h2>
          <div className="parchment-card rounded-xl p-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {COLOR_OPTIONS.map((color) => {
                const isSelected = localColor === color.value;
                return (
                  <motion.button
                    key={color.value}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLocalColor(color.value)}
                    className="flex flex-col items-center gap-1.5 group"
                    aria-label={`Couleur ${color.label}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${color.tw} transition-all ${
                        isSelected
                          ? 'ring-3 ring-offset-2 ring-offset-white dark:ring-offset-stone-900 shadow-lg scale-110'
                          : 'opacity-60 group-hover:opacity-100 group-hover:scale-105'
                      }`}
                      style={{ ringColor: undefined }}
                    />
                    <span className={`text-[10px] font-medium transition-colors ${
                      isSelected
                        ? color.text
                        : 'text-stone-400 dark:text-stone-500'
                    }`}>
                      {color.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Reading Stats Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Trophy className="w-3 h-3" />
            Statistiques de lecture
          </h2>
          <div className="glass-card rounded-xl p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-stone-700 dark:text-stone-200">{totalChapters}</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500">Chapitres terminés</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-stone-700 dark:text-stone-200">{totalBadges}</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500">Badges obtenus</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-stone-700 dark:text-stone-200">{streakDays}</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500">Jours de série</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/40 dark:bg-stone-800/40 rounded-lg p-3">
                <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-stone-700 dark:text-stone-200">{totalXP} XP</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500">Points de défi</p>
                </div>
              </div>
            </div>
            {totalReadingDays > 0 && (
              <div className="mt-3 pt-3 border-t border-stone-200/50 dark:border-stone-700/50 text-center">
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  📅 {totalReadingDays} jour{totalReadingDays > 1 ? 's' : ''} de lecture en tout — Masha&apos;Allah !
                </p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Settings Link */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Button
            variant="outline"
            className="w-full glass-card border-stone-200/50 dark:border-stone-700/50 text-stone-600 dark:text-stone-300 hover:bg-white/60 dark:hover:bg-stone-800/60 card-hover-lift"
            onClick={() => navigateTo('settings')}
          >
            Paramètres de l&apos;application
          </Button>
        </motion.section>

        {/* Save Button */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={handleSave}
            disabled={!hasChanges || !localName.trim()}
            className={`w-full py-3 text-sm font-semibold transition-all ${
              saved
                ? 'bg-emerald-500 hover:bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg'
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 mr-1.5" />
                Sauvegardé !
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-1.5" />
                Sauvegarder
              </>
            )}
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
