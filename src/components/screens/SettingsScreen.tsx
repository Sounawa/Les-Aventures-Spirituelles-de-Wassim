'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Moon, Sun, Type, Gauge, Volume2, VolumeX,
  Check, Info, Download, Upload, Trash2, Copy,
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

const STORAGE_KEY = 'nawfel-save-v3';

export function SettingsScreen() {
  const { navigateTo, settings, updateSettings, resetProgress } = useApp();
  const [exportStatus, setExportStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExport = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) { setExportStatus('error'); return; }
      navigator.clipboard.writeText(data);
      setExportStatus('copied');
      setTimeout(() => setExportStatus('idle'), 2000);
    } catch { setExportStatus('error'); }
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          if (!data || typeof data !== 'object') { setImportStatus('error'); return; }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          setImportStatus('success');
          setTimeout(() => { setImportStatus('idle'); window.location.reload(); }, 1000);
        } catch { setImportStatus('error'); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm('Es-tu sûr de vouloir recommencer ? Toute ta progression sera perdue.')) {
      resetProgress();
      toast('Progression réinitialisée', {
        description: 'Tu peux recommencer l\'aventure !',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-amber-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Paramètres</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Apparence */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Sun className="w-3 h-3" />
            Apparence
          </h2>

          <div className="parchment-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                {settings.darkMode ? <Moon className="w-5 h-5 text-amber-700 dark:text-amber-400" /> : <Sun className="w-5 h-5 text-amber-600" />}
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Mode sombre</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Réduire la fatigue visuelle</p>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => updateSettings({ darkMode: !settings.darkMode })}
              className={`w-12 h-7 rounded-full transition-colors duration-300 relative ${settings.darkMode ? 'bg-amber-600' : 'bg-stone-200 dark:bg-stone-600'}`}
            >
              <motion.div className="w-5 h-5 rounded-full bg-white shadow-sm absolute top-1" animate={{ left: settings.darkMode ? '24px' : '4px' }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
            </motion.button>
          </div>

          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Type className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Taille du texte</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Ajuster la lisibilité</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {fontSizeOptions.map((opt) => (
                <button key={opt.value} onClick={() => updateSettings({ fontSize: opt.value })} className={`px-3 py-2 rounded-lg border-2 transition-all text-center ${settings.fontSize === opt.value ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20 shadow-sm' : 'border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-stone-800/50 hover:border-amber-200 dark:hover:border-stone-600'}`}>
                  <p className={`font-medium text-stone-700 dark:text-stone-300 ${opt.size}`}>Aa</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5">{opt.label}</p>
                  {settings.fontSize === opt.value && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mt-1"><Check className="w-3 h-3 text-amber-600" /></motion.div>}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lecture */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Gauge className="w-3 h-3" />
            Lecture
          </h2>
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <Gauge className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Vitesse de l&apos;histoire</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Vitesse de l&apos;effet machine à écrire</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {speedOptions.map((opt) => (
                <button key={opt.value} onClick={() => updateSettings({ typewriterSpeed: opt.value })} className={`px-3 py-2 rounded-lg border-2 transition-all text-center ${settings.typewriterSpeed === opt.value ? 'border-teal-400 bg-teal-50 dark:bg-teal-900/20 shadow-sm' : 'border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-stone-800/50 hover:border-teal-200 dark:hover:border-teal-600'}`}>
                  <p className="text-xs font-medium text-stone-700 dark:text-stone-300">{opt.label}</p>
                  <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5">{opt.desc}</p>
                  {settings.typewriterSpeed === opt.value && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mt-1"><Check className="w-3 h-3 text-teal-600" /></motion.div>}
                </button>
              ))}
            </div>
          </div>

          <div className="parchment-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                {settings.soundEnabled ? <Volume2 className="w-5 h-5 text-rose-600 dark:text-rose-400" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Sons</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Effets sonores de l&apos;histoire</p>
              </div>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })} className={`w-12 h-7 rounded-full transition-colors duration-300 relative ${settings.soundEnabled ? 'bg-rose-500' : 'bg-stone-200 dark:bg-stone-600'}`}>
              <motion.div className="w-5 h-5 rounded-full bg-white shadow-sm absolute top-1" animate={{ left: settings.soundEnabled ? '24px' : '4px' }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
            </motion.button>
          </div>
        </motion.section>

        {/* Données */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 flex items-center gap-2">
            <Download className="w-3 h-3" />
            Données
          </h2>

          {/* Export */}
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Exporter la sauvegarde</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Copier dans le presse-papiers pour partager</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleExport}
                variant="outline"
                size="sm"
                className="flex-1"
                disabled={exportStatus !== 'idle'}
              >
                {exportStatus === 'copied' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                {exportStatus === 'copied' ? 'Copié !' : exportStatus === 'error' ? 'Erreur' : 'Copier'}
              </Button>
            </div>
          </div>

          {/* Import */}
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Upload className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Importer une sauvegarde</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Restaurer depuis un fichier JSON</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleImport}
                variant="outline"
                size="sm"
                className="flex-1"
                disabled={importStatus !== 'idle'}
              >
                {importStatus === 'success' ? <Check className="w-3 h-3 mr-1" /> : <Upload className="w-3 h-3 mr-1" />}
                {importStatus === 'success' ? 'Importé !' : 'Importer'}
              </Button>
            </div>
          </div>

          {/* Reset */}
          <div className="parchment-card rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">Réinitialiser</p>
                <p className="text-xs text-stone-400 dark:text-stone-500">Supprimer toute progression</p>
              </div>
            </div>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="w-full border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <Trash2 className="w-3 h-3 mr-1" />
              Réinitialiser la progression
            </Button>
          </div>
        </motion.section>

        {/* Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="parchment-card rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
            <div className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              <p className="font-medium text-stone-600 dark:text-stone-300 mb-1">À propos</p>
              <p>
                Les Aventures Spirituelles de Nawfel est un livre interactif qui enseigne les
                concepts du Tassawuf (soufisme) aux enfants de 8 à 12 ans à travers une aventure
                passionnante. Basé sur les enseignements authentiques de l&apos;Islam.
              </p>
              <p className="mt-2 text-stone-400 dark:text-stone-500">Version 3.3 — Défis quotidiens, onboarding, navigation mobile, défis XP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
