'use client';

import { useGameStore } from '@/store/gameStore';
import { getChapter } from '@/data/tomes';
import { SceneRenderer } from '@/components/story/SceneRenderer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings, Home } from 'lucide-react';

export function StoryScreen() {
  const {
    setScreen,
    selectedTomeId,
    selectedChapterId,
    completedChapters,
  } = useGameStore();

  const chapter = selectedTomeId && selectedChapterId
    ? getChapter(selectedTomeId, selectedChapterId)
    : null;

  const isChapterComplete = selectedChapterId && completedChapters.includes(selectedChapterId);

  const handleBack = () => {
    setScreen('chapter_select');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" size="sm" onClick={handleBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Chapitres</span>
            </Button>
            {chapter && (
              <div className="min-w-0">
                <p className="text-xs font-medium text-stone-800 truncate">
                  Chapitre {chapter.number} — {chapter.title}
                </p>
                <p className="text-[10px] text-amber-600 truncate" dir="rtl">{chapter.titleAr}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            {isChapterComplete && (
              <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Terminé</span>
            )}
            <Button variant="ghost" size="sm" onClick={() => setScreen('home')} className="shrink-0">
              <Home className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Story content */}
      <div className="flex-1">
        <SceneRenderer />
      </div>
    </div>
  );
}
