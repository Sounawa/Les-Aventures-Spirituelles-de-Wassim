'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Home, BookOpen, Map, Trophy, User } from 'lucide-react';

const tabs = [
  { screen: 'home' as const, icon: Home, label: 'Accueil' },
  { screen: 'tome_select' as const, icon: BookOpen, label: 'Tomes' },
  { screen: 'map' as const, icon: Map, label: 'Carte' },
  { screen: 'achievements' as const, icon: Trophy, label: 'Succès' },
  { screen: 'profile' as const, icon: User, label: 'Profil' },
];

export function BottomNavBar() {
  const { screen, navigateTo } = useApp();

  // Don't show on story screen
  if (screen === 'story') return null;

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="glass-card border-t border-amber-200/30 dark:border-stone-700/30 rounded-none px-2 py-1">
          <div className="flex items-center justify-around max-w-lg mx-auto">
            {tabs.map((tab) => {
              const isActive = screen === tab.screen;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.screen}
                  onClick={() => navigateTo(tab.screen)}
                  className="flex flex-col items-center gap-0.5 py-2 px-3 relative min-w-[48px] min-h-[44px] transition-transform active:scale-95"
                  aria-label={tab.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -top-1 w-8 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-stone-400 dark:text-stone-500'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-stone-400 dark:text-stone-500'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Safe area for iOS */}
        <div className="h-[env(safe-area-inset-bottom)] bg-stone-900/10 dark:bg-stone-900/50" />
      </motion.nav>
    </AnimatePresence>
  );
}
