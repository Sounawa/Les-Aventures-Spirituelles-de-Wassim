'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { greetingCards, type GreetingCard } from '@/data/greetingCards';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Sparkles, Download, Eye } from 'lucide-react';

// Islamic geometric pattern SVG
function PatternOverlay({ pattern, className = '' }: { pattern: string; className?: string }) {
  if (pattern === 'crescent') {
    return (
      <div className={`absolute inset-0 overflow-hidden opacity-10 pointer-events-none ${className}`}>
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="110" cy="95" r="26" fill="rgba(0,0,0,0.3)" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.3" />
          <path d="M70 40 L100 30 L130 40 L140 70 L130 100 L100 110 L70 100 L60 70 Z" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M85 60 L100 55 L115 60 L120 75 L115 90 L100 95 L85 90 L80 75 Z" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  if (pattern === 'stars') {
    return (
      <div className={`absolute inset-0 overflow-hidden opacity-10 pointer-events-none ${className}`}>
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const cx = 100 + 50 * Math.cos(angle);
            const cy = 100 + 50 * Math.sin(angle);
            return (
              <g key={i}>
                <path
                  d={`M${cx} ${cy - 8} L${cx + 2} ${cy - 2} L${cx + 8} ${cy} L${cx + 2} ${cy + 2} L${cx} ${cy + 8} L${cx - 2} ${cy + 2} L${cx - 8} ${cy} L${cx - 2} ${cy - 2} Z`}
                  fill="white"
                  opacity="0.6"
                />
              </g>
            );
          })}
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.3" />
        </svg>
      </div>
    );
  }

  // geometric pattern (default)
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-10 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          return (
            <g key={i}>
              <line
                x1="100" y1="100"
                x2={100 + 90 * Math.cos(angle)}
                y2={100 + 90 * Math.sin(angle)}
                stroke="white" strokeWidth="0.5"
              />
              <circle
                cx={100 + 45 * Math.cos(angle)}
                cy={100 + 45 * Math.sin(angle)}
                r="20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <circle
                cx={100 + 45 * Math.cos(angle)}
                cy={100 + 45 * Math.sin(angle)}
                r="10"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
              />
            </g>
          );
        })}
        <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

// Card Preview Component
function CardPreview({ card, playerName, message }: { card: GreetingCard; playerName: string; message: string }) {
  return (
    <motion.div
      layoutId={`card-preview-${card.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative w-full aspect-[3/4] max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient}`} />

      {/* Pattern overlay */}
      <PatternOverlay pattern={card.pattern} />

      {/* Decorative border */}
      <div className="absolute inset-3 border-2 border-white/20 rounded-xl pointer-events-none" />
      <div className="absolute inset-4 border border-white/10 rounded-lg pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
      <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
      <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
      <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        {/* Top emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-6xl mb-4"
        >
          {card.emoji}
        </motion.div>

        {/* Arabic title */}
        <p className="text-2xl font-amiri text-white/90 mb-2" dir="rtl">
          {card.titleAr}
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 my-3">
          <div className="h-px w-8 bg-white/30" />
          <Sparkles className="w-3 h-3 text-white/50" />
          <div className="h-px w-8 bg-white/30" />
        </div>

        {/* French title */}
        <h3 className="text-xl font-bold text-white mb-4">
          {card.title}
        </h3>

        {/* Occasion */}
        <p className="text-xs text-white/60 uppercase tracking-widest mb-6">
          {card.occasion}
        </p>

        {/* Custom message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 max-w-[240px]">
          <p className="text-sm text-white leading-relaxed">
            {message}
          </p>
        </div>

        {/* Player name */}
        {playerName.trim() && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm font-semibold text-white/80"
          >
            — {playerName}
          </motion.p>
        )}

        {/* Bottom decoration */}
        <div className="flex items-center gap-1.5 mt-4">
          <span className="text-white/30 text-xs">✦</span>
          <span className="text-white/50 text-sm">✦</span>
          <span className="text-white/30 text-xs">✦</span>
        </div>
      </div>
    </motion.div>
  );
}

export function GreetingCardsScreen() {
  const { navigateTo, playerName } = useApp();
  const [selectedCard, setSelectedCard] = useState<GreetingCard | null>(null);
  const [customName, setCustomName] = useState(playerName || 'Souhayl');
  const [customMessage, setCustomMessage] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handleSelectCard = (card: GreetingCard) => {
    setSelectedCard(card);
    setCustomMessage(card.messageDefault);
    setIsPreview(false);
  };

  const handleSave = () => {
    toast.success('Carte sauvegardée ! 🎨', {
      description: 'Masha\'Allah, ta carte est magnifique !',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-30 glass-card border-b border-teal-200/30 dark:border-teal-700/20 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo(selectedCard ? 'greeting_cards' : 'home')}
            className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {selectedCard ? selectedCard.title : 'Cartes Islamiques'}
            </h1>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {selectedCard ? selectedCard.occasion : 'Crée de belles cartes de vœux'}
            </p>
          </div>
          {selectedCard && !isPreview && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPreview(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-xs font-semibold shadow-sm transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              Aperçu
            </motion.button>
          )}
        </div>
      </div>

      <div className="flex-1 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedCard ? (
              /* ─── Card Selection Grid ─── */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-4xl mb-2"
                  >
                    🎴
                  </motion.div>
                  <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-1">
                    Cartes de Vœux Islamiques
                  </h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400">
                    Choisis un modèle et personnalise-le avec ton nom !
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {greetingCards.map((card, index) => (
                    <motion.button
                      key={card.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSelectCard(card)}
                      className="relative group"
                    >
                      <div className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br ${card.bgGradient} shadow-md hover:shadow-lg transition-shadow`}>
                        {/* Pattern */}
                        <PatternOverlay pattern={card.pattern} />

                        {/* Border */}
                        <div className="absolute inset-2 border border-white/15 rounded-lg" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 text-center">
                          <span className="text-3xl mb-2">{card.emoji}</span>
                          <p className="text-xs font-bold text-white leading-tight">{card.title}</p>
                          <p className="text-[10px] font-amiri text-white/70 mt-1" dir="rtl">{card.titleAr}</p>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <motion.div
                            className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-colors"
                            initial={false}
                          >
                            <Sparkles className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : isPreview ? (
              /* ─── Preview Mode ─── */
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6"
              >
                <CardPreview
                  card={selectedCard}
                  playerName={customName}
                  message={customMessage || selectedCard.messageDefault}
                />

                <div className="flex items-center gap-3 w-full max-w-[320px]">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsPreview(false)}
                    className="flex-1 py-3 rounded-xl border border-teal-200 dark:border-teal-700 text-teal-600 dark:text-teal-400 text-sm font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
                  >
                    Modifier
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-sm font-semibold shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Sauvegarder
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* ─── Customization Mode ─── */
              <motion.div
                key="customize"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6"
              >
                {/* Mini preview */}
                <div className="w-full max-w-[200px]">
                  <CardPreview
                    card={selectedCard}
                    playerName={customName}
                    message={customMessage || selectedCard.messageDefault}
                  />
                </div>

                {/* Customization form */}
                <div className="w-full max-w-sm space-y-4 glass-card rounded-2xl border border-teal-200/30 dark:border-teal-700/20 p-5">
                  <h3 className="text-sm font-bold text-stone-700 dark:text-stone-200 uppercase tracking-wider">
                    ✏️ Personnaliser
                  </h3>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                      Ton nom
                    </label>
                    <Input
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="Entre ton nom..."
                      className="bg-white dark:bg-stone-800 border-teal-200 dark:border-teal-700 focus:border-teal-400 dark:focus:border-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                      Message personnalisé
                    </label>
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Écris ton message ici..."
                      rows={3}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-teal-200 dark:border-teal-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-teal-400 dark:focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400/20 dark:focus:ring-teal-500/20 resize-none transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCustomMessage(selectedCard.messageDefault)}
                      className="text-xs text-stone-500 hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      Réinitialiser
                    </Button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsPreview(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Voir l&apos;aperçu complet
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
