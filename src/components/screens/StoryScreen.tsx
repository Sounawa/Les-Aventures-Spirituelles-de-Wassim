'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getChapter } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, BookHeart } from 'lucide-react';
import { SceneRenderer } from '@/components/story/SceneRenderer';

export function StoryScreen() {
  const {
    navigateTo,
    selectedTomeId,
    selectedChapterId,
    completedChapters,
  } = useApp();

  const chapter = selectedTomeId && selectedChapterId
    ? getChapter(selectedTomeId, selectedChapterId)
    : null;

  const isChapterComplete = selectedChapterId && completedChapters.includes(selectedChapterId);

  const handleBack = () => {
    navigateTo('chapter_select');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-amber-200/30 shadow-sm"
      >
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" size="sm" onClick={handleBack} className="shrink-0 hover:bg-amber-100/50">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline text-xs">Chapitres</span>
            </Button>
            {chapter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="min-w-0"
              >
                <p className="text-xs font-medium text-stone-800 truncate">
                  Chapitre {chapter.number} — {chapter.title}
                </p>
                <p className="text-[10px] text-amber-600 truncate font-amiri" dir="rtl">{chapter.titleAr}</p>
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-1">
            {isChapterComplete && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[10px] px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium"
              >
                ✓ Terminé
              </motion.span>
            )}
            <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0 hover:bg-amber-100/50">
              <Home className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Story content */}
      <div className="flex-1">
        <SceneRenderer />
      </div>
    </div>
  );
}
