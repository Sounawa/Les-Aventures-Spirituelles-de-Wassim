'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { TomeSelectScreen } from '@/components/screens/TomeSelectScreen';
import { ChapterSelectScreen } from '@/components/screens/ChapterSelectScreen';
import { StoryScreen } from '@/components/screens/StoryScreen';
import { CharacterGalleryScreen } from '@/components/screens/CharacterGalleryScreen';
import { BadgeCollectionScreen } from '@/components/screens/BadgeCollectionScreen';
import { LessonScreen } from '@/components/screens/LessonScreen';
import type { ScreenType } from '@/types/story';

const screenComponents: Record<ScreenType, React.ComponentType> = {
  home: HomeScreen,
  tome_select: TomeSelectScreen,
  chapter_select: ChapterSelectScreen,
  story: StoryScreen,
  character_gallery: CharacterGalleryScreen,
  badge_collection: BadgeCollectionScreen,
  lesson: LessonScreen,
  quiz: () => (
    <div className="min-h-screen flex items-center justify-center text-stone-400 bg-gradient-to-b from-amber-50 to-teal-50">
      Quiz — Bientôt disponible
    </div>
  ),
  settings: () => (
    <div className="min-h-screen flex items-center justify-center text-stone-400 bg-gradient-to-b from-amber-50 to-teal-50">
      Paramètres — Bientôt disponible
    </div>
  ),
};

export default function AppContent() {
  const { currentScreen } = useGameStore();
  const ScreenComponent = screenComponents[currentScreen];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {ScreenComponent && <ScreenComponent />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto bg-amber-100/60 backdrop-blur-sm border-t border-amber-200/30 py-3">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[10px] text-stone-400">
            Les Aventures Spirituelles de Nawfel — مغامرات نوفل الروحية
          </p>
          <p className="text-[10px] text-stone-300 mt-0.5">
            Un livre dont tu es le héros • Basé sur les enseignements du Tassawuf
          </p>
        </div>
      </footer>
    </div>
  );
}
