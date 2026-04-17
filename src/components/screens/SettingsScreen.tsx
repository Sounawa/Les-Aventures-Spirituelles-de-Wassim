'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Moon, Sun, Type, Gauge, Volume2, VolumeX,
  RotateCcw, Check, Info,
} from 'lucide-react';

const fontSizeOptions = [
  { value: 'normal' as const, label: 'Normal', size: 'text-sm', desc: 'Taille standard' },
  { value: 'large' as const, label: 'Grand', size: 'text-base', desc: 'Plus facile à lire' },
  { value: 'xlarge' as const, label: 'Très grand', size: 'text-lg', desc: 'Pour une lecture confortable' },
];

const speedOptions = [
  { value: 10, label: 'Rapide', desc: 'Animation rapide' },
  { value: 25, label: 'Normal', desc: 'Vitesse standard' },
  { value: 45, label: 'Lent', desc: 'Pour bien lire chaque mot' },
];

export function SettingsScreen() {
  const { navigateTo, settings, updateSettings } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-orange-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800">Paramètres</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Apparence */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <Sun className="w-3 h-3" />
            Apparence
          </h2>

          {/* Dark mode */}
          <div className="parchment-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                {settings.darkMode ? <Moon className="w-5 h-5 text-amber-700" /> : <Sun className="w-5 h-5 text-amber-600" />}
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700">Mode sombre</p>
                <p className="text-xs text-stone-400">Réduire la fatigue visuelle</p>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => updateSettings({ darkMode: !settings.darkMode })}
              className={`w-12 h-7 rounded-full transition-colors duration-300 relative ${
                settings.darkMode ? 'bg-amber-600' : 'bg-stone-200'
              }`}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white shadow-sm absolute top-1"
                animate={{ left: settings.darkMode ? '24px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>

          {/* Font size */}
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Type className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700">Taille du texte</p>
                <p className="text-xs text-stone-400">Ajuster la lisibilité</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {fontSizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => updateSettings({ fontSize: opt.value })}
                  className={`px-3 py-2 rounded-lg border-2 transition-all text-center ${
                    settings.fontSize === opt.value
                      ? 'border-amber-400 bg-amber-50 shadow-sm'
                      : 'border-stone-200 bg-white/50 hover:border-amber-200'
                  }`}
                >
                  <p className={`font-medium text-stone-700 ${opt.size}`}>
                    Aa
                  </p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{opt.label}</p>
                  {settings.fontSize === opt.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex justify-center mt-1"
                    >
                      <Check className="w-3 h-3 text-amber-600" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <Gauge className="w-3 h-3" />
            Lecture
          </h2>

          {/* Typewriter speed */}
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Gauge className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700">Vitesse de l&apos;histoire</p>
                <p className="text-xs text-stone-400">Vitesse de l&apos;effet machine à écrire</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {speedOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => updateSettings({ typewriterSpeed: opt.value })}
                  className={`px-3 py-2 rounded-lg border-2 transition-all text-center ${
                    settings.typewriterSpeed === opt.value
                      ? 'border-teal-400 bg-teal-50 shadow-sm'
                      : 'border-stone-200 bg-white/50 hover:border-teal-200'
                  }`}
                >
                  <p className="text-xs font-medium text-stone-700">{opt.label}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{opt.desc}</p>
                  {settings.typewriterSpeed === opt.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex justify-center mt-1"
                    >
                      <Check className="w-3 h-3 text-teal-600" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sound */}
          <div className="parchment-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                {settings.soundEnabled
                  ? <Volume2 className="w-5 h-5 text-rose-600" />
                  : <VolumeX className="w-5 h-5 text-stone-400" />
                }
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700">Sons</p>
                <p className="text-xs text-stone-400">Effets sonores de l&apos;histoire</p>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`w-12 h-7 rounded-full transition-colors duration-300 relative ${
                settings.soundEnabled ? 'bg-rose-500' : 'bg-stone-200'
              }`}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white shadow-sm absolute top-1"
                animate={{ left: settings.soundEnabled ? '24px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
        </motion.section>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="parchment-card rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
            <div className="text-xs text-stone-500 leading-relaxed">
              <p className="font-medium text-stone-600 mb-1">À propos</p>
              <p>
                Les Aventures Spirituelles de Nawfel est un livre interactif qui enseigne les
                concepts du Tassawuf (soufisme) aux enfants de 8 à 12 ans à travers une aventure
                passionnante. Basé sur les enseignements authentiques de l&apos;Islam.
              </p>
              <p className="mt-2 text-stone-400">Version 2.0 — Nouvelles fonctionnalités ajoutées !</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
