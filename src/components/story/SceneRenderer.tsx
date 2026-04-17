'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { getScene, getChapter } from '@/data/tomes';
import { DialogueBubble } from './DialogueBubble';
import { ChoiceButton } from './ChoiceButton';
import { StoryBackground } from './StoryBackground';
import { TypewriterText } from './TypewriterText';
import { badges } from '@/data/badges';
import { Award, BookOpen, ChevronRight } from 'lucide-react';

export function SceneRenderer() {
  const {
    selectedTomeId,
    selectedChapterId,
    currentSceneId,
    setCurrentScene,
    completeScene,
    earnBadge,
    completeChapter,
    makeChoice,
    settings,
  } = useGameStore();

  const [showLesson, setShowLesson] = useState(false);
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const [dialoguesStarted, setDialoguesStarted] = useState(false);
  const [narrationComplete, setNarrationComplete] = useState(false);

  const scene = selectedTomeId && selectedChapterId && currentSceneId
    ? getScene(selectedTomeId, selectedChapterId, currentSceneId)
    : null;

  const chapter = selectedTomeId && selectedChapterId
    ? getChapter(selectedTomeId, selectedChapterId)
    : null;

  const sceneIndex = chapter?.scenes.findIndex(s => s.id === currentSceneId) ?? -1;
  const totalScenes = chapter?.scenes.length ?? 0;

  const handleChoice = useCallback((choice: { id: string; nextSceneId: string; badgeId?: string }) => {
    if (selectedChapterId && currentSceneId) {
      makeChoice(currentSceneId, choice.id);
    }
    if (choice.badgeId) {
      earnBadge(choice.badgeId);
      setEarnedBadge(choice.badgeId);
      setTimeout(() => setEarnedBadge(null), 3000);
    }
    if (scene) completeScene(scene.id);
    setCurrentScene(choice.nextSceneId);
    setNarrationComplete(false);
    setDialoguesStarted(false);
    setShowLesson(false);
  }, [selectedChapterId, currentSceneId, makeChoice, earnBadge, completeScene, setCurrentScene, scene]);

  const handleContinue = useCallback(() => {
    if (!scene) return;
    if (scene.lesson && !showLesson) {
      setShowLesson(true);
      return;
    }
    if (scene.nextSceneId) {
      completeScene(scene.id);
      setCurrentScene(scene.nextSceneId);
      setNarrationComplete(false);
      setDialoguesStarted(false);
      setShowLesson(false);
    } else {
      completeScene(scene.id);
      if (selectedChapterId) completeChapter(selectedChapterId);
    }
  }, [scene, showLesson, completeScene, setCurrentScene, completeChapter, selectedChapterId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (narrationComplete) setDialoguesStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [narrationComplete]);

  if (!scene) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-stone-400">Chargement...</p>
      </div>
    );
  }

  const hasChoices = scene.choices && scene.choices.length > 0;
  const showContinue = narrationComplete && !hasChoices && !scene.lesson;
  const showContinueAfterLesson = showLesson && narrationComplete;

  const fontClass = settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-sm';

  return (
    <div className="relative min-h-[70vh]">
      <StoryBackground background={scene.background} />

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-stone-500">
              {chapter?.titleAr} — {chapter?.title}
            </span>
          </div>
          <span className="text-xs text-stone-400">
            Scène {sceneIndex + 1}/{totalScenes}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/40 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((sceneIndex + 1) / totalScenes) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Scene title */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={scene.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-lg md:text-xl font-bold text-stone-800 mb-4"
          >
            {scene.title}
          </motion.h2>
        </AnimatePresence>

        {/* Narration */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-sm border border-amber-200/30 mb-4">
          <TypewriterText
            text={scene.narration}
            speed={settings.typewriterSpeed}
            onComplete={() => setNarrationComplete(true)}
            className={fontClass}
          />
        </div>

        {/* Dialogues */}
        <AnimatePresence>
          {dialoguesStarted && scene.dialogues.map((dialogue, idx) => (
            <DialogueBubble key={`${scene.id}-d-${idx}`} dialogue={dialogue} index={idx} />
          ))}
        </AnimatePresence>

        {/* Choices */}
        <AnimatePresence>
          {narrationComplete && hasChoices && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 space-y-3"
            >
              <p className="text-sm font-semibold text-stone-600 mb-2">Que fais-tu ?</p>
              {scene.choices.map((choice, idx) => (
                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  index={idx}
                  onClick={() => handleChoice(choice)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        <AnimatePresence>
          {showContinue && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex justify-center"
            >
              <button
                onClick={handleContinue}
                className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-md transition-all hover:shadow-lg min-h-[48px]"
              >
                Continuer
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lesson */}
        <AnimatePresence>
          {showLesson && scene.lesson && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200/50 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-amber-800">{scene.lesson.title}</h3>
              </div>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">{scene.lesson.content}</p>
              <blockquote className="border-l-3 border-amber-400 pl-4 italic text-stone-500 text-sm mb-4">
                « {scene.lesson.quote} »
              </blockquote>
              <p className="text-xs text-stone-400">— {scene.lesson.source}</p>
              {showContinueAfterLesson && (
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-md transition-all min-h-[48px]"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapter end */}
        {narrationComplete && scene.isEnding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm">
              <Award className="w-4 h-4" />
              Chapitre terminé !
            </div>
          </motion.div>
        )}
      </div>

      {/* Badge earned notification */}
      <AnimatePresence>
        {earnedBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-2xl shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: 2, duration: 0.5 }}
              >
                <Award className="w-6 h-6" />
              </motion.div>
              <div>
                <p className="font-bold text-sm">Nouveau badge !</p>
                <p className="text-xs opacity-90">
                  {badges.find(b => b.id === earnedBadge)?.name} — {badges.find(b => b.id === earnedBadge)?.nameAr}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
