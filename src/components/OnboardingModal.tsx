'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    icon: '🌙',
    title: 'Bienvenue, aventurier !',
    description: "Je suis Wassim, un garçon de 6 ans ! 🌟 Viens jouer avec moi et découvrir plein de choses sur Allah et notre belle religion ! C'est magique ! ✨",
    gradient: 'from-orange-400 to-violet-400',
    emoji: '✨',
  },
  {
    icon: '📖',
    title: 'Un livre magique ! 🪄',
    description: "Tu vas faire des choix qui changent l'histoire ! 📖 C'est comme un jeu où TU décides ce qui se passe ! Chaque choix t'apprend quelque chose de beau ! 💫",
    gradient: 'from-violet-400 to-orange-400',
    emoji: '🎮',
  },
  {
    icon: '🧠',
    title: 'Joue et découvre ! 🎓',
    description: "Tu vas apprendre à être gentil, sincère et courageux ! 💪 Comme les grands héros de l'Islam ! Des histoires, des quiz, des badges à collectionner ! 🏅",
    gradient: 'from-purple-400 to-violet-400',
    emoji: '📿',
  },
  {
    icon: '🏆',
    title: 'Collectionne des badges ! 🎖️',
    description: 'Fais des chapitres, passe des quiz, relève des défis chaque jour et gagne des super badges ! ⭐ Plus tu joues, plus tu apprends ! 🚀',
    gradient: 'from-rose-400 to-pink-400',
    emoji: '⭐',
  },
];

export function OnboardingModal() {
  const { hasSeenOnboarding, setHasSeenOnboarding } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLastSlide = currentSlide === slides.length - 1;

  if (hasSeenOnboarding) return null;

  const handleNext = () => {
    if (isLastSlide) {
      setHasSeenOnboarding();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleNext}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-sm bg-white dark:bg-stone-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Top gradient banner */}
          <div className={`h-40 bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
            {/* Floating decorations */}
            <motion.div
              key={currentSlide}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="text-6xl relative z-10"
            >
              {slide.icon}
            </motion.div>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 0l5 10h10l-8 7.5 3 10-10-5-10 5 3-10L5 10h10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-stone-900 to-transparent" />
          </div>

          {/* Content */}
          <div className="px-6 pb-6 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <span className="text-2xl block mb-2">{slide.emoji}</span>
                <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-5 mb-5">
              {slides.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? 'w-6 h-2 bg-orange-500 dark:bg-orange-400'
                      : 'w-2 h-2 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
                  }`}
                  aria-label={`Diapositive ${i + 1}`}
                />
              ))}
            </div>

            {/* Action button */}
            <Button
              onClick={handleNext}
              className={`w-full h-12 rounded-xl text-white font-semibold transition-all ${
                isLastSlide
                  ? 'bg-gradient-to-r from-orange-500 to-violet-500 hover:from-orange-600 hover:to-violet-600 shadow-lg shadow-orange-200/50 dark:shadow-orange-900/30'
                  : 'bg-gradient-to-r from-orange-500 to-violet-500 hover:from-orange-600 hover:to-violet-600'
              }`}
            >
              {isLastSlide ? "C'est parti !" : 'Suivant'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>

            {/* Skip button */}
            {!isLastSlide && (
              <button
                onClick={setHasSeenOnboarding}
                className="w-full mt-2 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors py-2"
              >
                Passer l&apos;introduction
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
