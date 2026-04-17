'use client';

import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { getTome } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, CheckCircle2, Play } from 'lucide-react';

export function ChapterSelectScreen() {
  const { setScreen, selectedTomeId, selectChapter, setCurrentScene, completedChapters } = useGameStore();
  const tome = selectedTomeId ? getTome(selectedTomeId) : null;

  if (!tome) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-400">Tome non trouvé</p>
      </div>
    );
  }

  const handleStartChapter = (chapterId: string) => {
    selectChapter(chapterId);
    const chapter = tome.chapters.find(c => c.id === chapterId);
    if (chapter) {
      setCurrentScene(chapter.scenes[0].id);
      setScreen('story');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setScreen('tome_select')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <div className="min-w-0">
            <h1 className="text-sm font-bold text-stone-800 truncate">Tome {tome.number} — {tome.title}</h1>
            <p className="text-xs text-amber-600 truncate" dir="rtl">{tome.titleAr}</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Tome description */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200/30 mb-6">
          <p className="text-xs text-stone-500 italic mb-2">{tome.subtitle}</p>
          <p className="text-sm text-stone-600 leading-relaxed">{tome.description}</p>
        </div>

        {/* Chapter path */}
        <div className="relative">
          {/* Vertical path line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 to-amber-100" />

          <div className="space-y-4">
            {tome.chapters.map((chapter, idx) => {
              const isCompleted = completedChapters.includes(chapter.id);
              const isFirst = idx === 0;
              const isUnlocked = isFirst || completedChapters.includes(tome.chapters[idx - 1].id);

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Path node */}
                  <div className="absolute left-3 top-4 w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 bg-white shadow-sm"
                    style={{
                      borderColor: isCompleted ? '#059669' : isUnlocked ? '#D97706' : '#D6D3D1',
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : isUnlocked ? (
                      <span className="text-xs font-bold text-amber-600">{chapter.number}</span>
                    ) : (
                      <Lock className="w-3 h-3 text-stone-300" />
                    )}
                  </div>

                  <button
                    onClick={() => isUnlocked && handleStartChapter(chapter.id)}
                    disabled={!isUnlocked}
                    className={`w-full text-left rounded-xl border p-4 transition-all ${
                      isUnlocked
                        ? 'bg-white/70 backdrop-blur-sm border-amber-200/40 shadow-sm hover:shadow-md hover:border-amber-300 cursor-pointer'
                        : 'bg-white/30 border-stone-200/30 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-stone-400 mb-1">Chapitre {chapter.number}</p>
                        <h3 className="font-bold text-stone-800 text-sm">{chapter.title}</h3>
                        <p className="text-sm text-amber-600" dir="rtl">{chapter.titleAr}</p>
                        <p className="text-xs text-stone-400 mt-1">{chapter.scenes.length} scènes</p>
                      </div>
                      {isUnlocked && !isCompleted && (
                        <Play className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                      )}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
