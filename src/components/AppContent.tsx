'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider, useApp } from '@/components/AppContext';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { TomeSelectScreen } from '@/components/screens/TomeSelectScreen';
import { ChapterSelectScreen } from '@/components/screens/ChapterSelectScreen';
import { StoryScreen } from '@/components/screens/StoryScreen';
import { CharacterGalleryScreen } from '@/components/screens/CharacterGalleryScreen';
import { BadgeCollectionScreen } from '@/components/screens/BadgeCollectionScreen';
import { LessonScreen } from '@/components/screens/LessonScreen';
import { SettingsScreen } from '@/components/screens/SettingsScreen';
import { StatsScreen } from '@/components/screens/StatsScreen';
import { JournalScreen } from '@/components/screens/JournalScreen';
import AchievementsScreen from '@/components/screens/AchievementsScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import { WorldMapScreen } from '@/components/screens/WorldMapScreen';
import MemoryGameScreen from '@/components/screens/MemoryGameScreen';
import { ProfileScreen } from '@/components/screens/ProfileScreen';
import { DhikrCounterScreen } from '@/components/screens/DhikrCounterScreen';
import { BottomNavBar } from '@/components/layout/BottomNavBar';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { OnboardingModal } from '@/components/OnboardingModal';
import { AchievementPopup } from '@/components/AchievementPopup';
import { Toaster } from '@/components/ui/sonner';
import type { ScreenType } from '@/types/story';

const screenComponents: Record<ScreenType, React.ComponentType> = {
  home: HomeScreen,
  tome_select: TomeSelectScreen,
  chapter_select: ChapterSelectScreen,
  story: StoryScreen,
  character_gallery: CharacterGalleryScreen,
  badge_collection: BadgeCollectionScreen,
  lesson: LessonScreen,
  quiz: QuizScreen,
  settings: SettingsScreen,
  stats: StatsScreen,
  journal: JournalScreen,
  achievements: AchievementsScreen,
  map: WorldMapScreen,
  profile: ProfileScreen,
  memory_game: MemoryGameScreen,
  dhikr_counter: DhikrCounterScreen,
};

function Hydrator({ children }: { children: React.ReactNode }) {
  const { hydrate } = useApp();
  useEffect(() => { hydrate(); }, [hydrate]);
  return <>{children}</>;
}

function ThemeHandler() {
  const { settings } = useApp();
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);
  return null;
}

function AppInner() {
  const { screen } = useApp();
  const ScreenComponent = screenComponents[screen];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 via-emerald-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950 transition-colors duration-500">
      <ThemeHandler />
      <OnboardingModal />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {ScreenComponent && <ScreenComponent />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto relative transition-colors duration-500">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 dark:via-teal-500/30 to-transparent" />
        <div className="glass-card border-t border-teal-200/30 dark:border-stone-700/30 py-4 pb-20 md:pb-4">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-[10px] text-stone-500 dark:text-stone-400">
              Les Aventures Spirituelles de Souhayl — مغامرات سهيل الروحية
            </p>
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="text-teal-400 dark:text-teal-500 text-xs">🌙</span>
              <span className="text-stone-300 dark:text-stone-600">✦</span>
              <span className="text-teal-300 dark:text-teal-500 text-[10px]">⭐</span>
              <span className="text-stone-300 dark:text-stone-600">✦</span>
              <span className="text-teal-400 dark:text-teal-500 text-xs">🌙</span>
            </div>
            <p className="text-[10px] text-stone-400 dark:text-stone-600">
              Un livre dont tu es le héros • Basé sur les enseignements du Tassawuf
            </p>
            <p className="text-[10px] text-stone-400/70 dark:text-stone-600/50 mt-1">
              Fait avec ❤️ pour les jeunes musulmans
            </p>
            <p className="text-[9px] text-stone-300 dark:text-stone-700 mt-1">v1.0</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <BottomNavBar />
      <AchievementPopup />
      <Toaster />
    </div>
  );
}

export default function AppContent() {
  return (
    <AppProvider>
      <Hydrator>
        <AppInner />
      </Hydrator>
    </AppProvider>
  );
}
