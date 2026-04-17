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
import { BottomNavBar } from '@/components/layout/BottomNavBar';
import { OnboardingModal } from '@/components/OnboardingModal';
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950 transition-colors duration-500">
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

      <footer className="mt-auto glass-card border-t border-amber-200/30 dark:border-stone-700/30 py-3 pb-20 md:pb-3 transition-colors duration-500">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[10px] text-stone-500 dark:text-stone-400">
            Les Aventures Spirituelles de Nawfel — مغامرات نوفل الروحية
          </p>
          <p className="text-[10px] text-stone-400 dark:text-stone-600 mt-0.5">
            Un livre dont tu es le héros • Basé sur les enseignements du Tassawuf
          </p>
        </div>
      </footer>
      <BottomNavBar />
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
