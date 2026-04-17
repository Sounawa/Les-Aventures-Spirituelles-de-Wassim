'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { toast } from 'sonner';
import { Sparkles, X } from 'lucide-react';

export function AchievementPopup() {
  const { achievementPopup, dismissAchievement } = useApp();

  useEffect(() => {
    if (achievementPopup) {
      toast.success(`🏆 ${achievementPopup.title}`, {
        description: achievementPopup.description,
        duration: 4000,
      });
    }
  }, [achievementPopup]);

  return (
    <AnimatePresence>
      {achievementPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/30 backdrop-blur-sm"
            onClick={dismissAchievement}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300,
              duration: 0.5,
            }}
            className="fixed bottom-24 left-4 right-4 z-[201] mx-auto max-w-sm"
          >
            <div className="relative overflow-hidden rounded-2xl p-5 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 40%, #99F6E4 100%)',
              }}
            >
              {/* Dark mode overlay */}
              <div className="absolute inset-0 rounded-2xl dark:bg-stone-900/90" />

              {/* Golden shimmer animation */}
              <motion.div
                className="absolute inset-0 opacity-20 dark:opacity-10"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(13, 148, 136, 0.4) 45%, rgba(45, 212, 191, 0.6) 50%, rgba(13, 148, 136, 0.4) 55%, transparent 60%)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
              />

              {/* Sparkle particles */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-teal-400 dark:text-teal-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-3 left-3"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-teal-300/60 dark:text-teal-600/60" />
              </motion.div>

              {/* Close button */}
              <button
                onClick={dismissAchievement}
                className="absolute top-3 right-3 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-stone-200/50 dark:bg-stone-700/50 text-stone-500 dark:text-stone-400 hover:bg-stone-300/50 dark:hover:bg-stone-600/50 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Achievement Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: 'spring', damping: 12 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2), rgba(45, 212, 191, 0.3))',
                    boxShadow: '0 0 20px rgba(13, 148, 136, 0.3)',
                    border: '2px solid rgba(13, 148, 136, 0.4)',
                  }}
                >
                  {achievementPopup.icon}
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-0.5"
                  >
                    🏆 Succès débloqué !
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-base font-bold text-stone-800 dark:text-stone-100 truncate"
                  >
                    {achievementPopup.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 line-clamp-2 leading-relaxed"
                  >
                    {achievementPopup.description}
                  </motion.p>
                </div>
              </div>

              {/* Continue button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={dismissAchievement}
                className="relative z-10 mt-4 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                  boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
                }}
              >
                Continuer ✨
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
