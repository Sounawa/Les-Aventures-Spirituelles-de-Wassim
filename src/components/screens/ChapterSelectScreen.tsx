'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getTome } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, CheckCircle2, Play, Brain, Star } from 'lucide-react';

export function ChapterSelectScreen() {
  const { navigateTo, selectedTomeId, selectChapter, setCurrentScene, completedChapters, quizScores } = useApp();
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
      navigateTo('story');
    }
  };

  const handleStartQuiz = (chapterId: string) => {
    selectChapter(chapterId);
    navigateTo('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('tome_select')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <div className="min-w-0 flex-1">
            <h1 className="text-sm font-bold text-stone-800 truncate">Tome {tome.number} — {tome.title}</h1>
            <p className="text-xs text-amber-600 truncate font-amiri" dir="rtl">{tome.titleAr}</p>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded-full shrink-0">
            {completedChapters.filter(id => tome.chapters.some(c => c.id === id)).length}/{tome.chapters.length}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Tome description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="parchment-card rounded-xl p-4 mb-6 islamic-border"
        >
          <p className="text-xs text-stone-500 italic mb-2">{tome.subtitle}</p>
          <p className="text-sm text-stone-600 leading-relaxed">{tome.description}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">
              {tome.theme}
            </span>
            <span className="text-[10px] text-stone-400">
              {tome.chapters.reduce((s, c) => s + c.scenes.length, 0)} scènes
            </span>
          </div>
        </motion.div>

        {/* Chapter path */}
        <div className="relative">
          {/* Vertical path line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300/50 via-amber-200/30 to-transparent" />

          <div className="space-y-4">
            {tome.chapters.map((chapter, idx) => {
              const isCompleted = completedChapters.includes(chapter.id);
              const isFirst = idx === 0;
              const isUnlocked = isFirst || completedChapters.includes(tome.chapters[idx - 1].id);
              const quizScore = quizScores[chapter.id];
              const quizMax = 5; // standard quiz length

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Path node */}
                  <div
                    className="absolute left-3 top-4 w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 shadow-sm"
                    style={{
                      borderColor: isCompleted ? '#059669' : isUnlocked ? '#D97706' : '#D6D3D1',
                      backgroundColor: isCompleted ? '#05966920' : isUnlocked ? '#D9770620' : '#fff',
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
                        ? 'parchment-card shadow-sm hover:shadow-md cursor-pointer group'
                        : 'bg-white/30 border-stone-200/30 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">
                          Chapitre {chapter.number}
                        </p>
                        <h3 className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-amber-600 font-amiri" dir="rtl">{chapter.titleAr}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] text-stone-400">
                            {chapter.scenes.length} scènes
                          </span>
                          {quizScore !== undefined && (
                            <span className="flex items-center gap-1 text-[10px] text-purple-600">
                              <Star className="w-3 h-3" />
                              Quiz: {quizScore}/{quizMax}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {isUnlocked && !isCompleted && (
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <Play className="w-4 h-4 text-amber-600" />
                          </div>
                        )}
                        {isCompleted && (
                          <div className="flex flex-col gap-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStartQuiz(chapter.id);
                              }}
                              className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors"
                              title="Refaire le quiz"
                            >
                              <Brain className="w-4 h-4 text-purple-600" />
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mini progress bar for completed chapters */}
                    {isCompleted && (
                      <div className="mt-3 w-full h-1 bg-green-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                        />
                      </div>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Spiritual lesson */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 parchment-card rounded-xl p-4"
        >
          <p className="text-xs text-stone-500 italic leading-relaxed">
            « {tome.spiritualLesson} »
          </p>
        </motion.div>
      </div>
    </div>
  );
}
