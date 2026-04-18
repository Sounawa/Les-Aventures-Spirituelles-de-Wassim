'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { screen } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hidden on story screen
  if (screen === 'story') return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/30 flex items-center justify-center text-white glass-card border border-sky-300/40 dark:border-sky-600/40 hover:shadow-xl hover:shadow-sky-500/40 transition-shadow"
          aria-label="Remonter en haut"
        >
          <span className="text-xl">🌙</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
