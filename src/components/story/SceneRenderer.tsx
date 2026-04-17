'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getScene, getChapter } from '@/data/tomes';
import { DialogueBubble } from './DialogueBubble';
import { ChoiceButton } from './ChoiceButton';
import { StoryBackground } from './StoryBackground';
import { TypewriterText } from './TypewriterText';
import { badges } from '@/data/badges';
import {
  Award, BookOpen, ChevronRight, Brain,
  Home, ArrowLeft, BookHeart, Sparkles,
} from 'lucide-react';

export function SceneRenderer() {
  const {
    navigateTo,
    selectedTomeId,
    selectedChapterId,
    currentSceneId,
    setCurrentScene,
    completeScene,
    earnBadge,
    completeChapter,
    settings,
  } = useApp();

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
  }, [earnBadge, completeScene, setCurrentScene, scene]);

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

  // Track scene changes to trigger dialogues after narration
  useEffect(() => {
    if (narrationComplete) {
      const timer = setTimeout(() => setDialoguesStarted(true), 500);
      return () => clearTimeout(timer);
    }
  }, [narrationComplete]);

  // Reset on scene change via key-based remount pattern in parent
  // (states reset through handleChoice and handleContinue)

  if (!scene) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 mx-auto mb-3 border-2 border-amber-400 border-t-transparent rounded-full"
          />
          <p className="text-stone-400 text-sm">Chargement...</p>
        </div>
      </div>
    );
  }

  const hasChoices = scene.choices && scene.choices.length > 0;
  const showContinue = narrationComplete && !hasChoices && !scene.lesson;
  const showContinueAfterLesson = showLesson && narrationComplete;

  // Dynamic font size class based on settings
  const fontSizeClass = settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-sm';

  return (
    <div className="relative min-h-[70vh]">
      <StoryBackground background={scene.background} />

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        {/* Scene progress info */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-stone-500">
              {chapter?.titleAr} — {chapter?.title}
            </span>
          </div>
          <span className="text-xs text-stone-400 font-medium bg-white/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {sceneIndex + 1}/{totalScenes}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-white/40 rounded-full mb-6 overflow-hidden shadow-inner">
          <motion.div
            className="h-full story-progress-bar rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${totalScenes > 0 ? ((sceneIndex + 1) / totalScenes) * 100 : 0}%` }}
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
            className="text-lg md:text-xl font-bold text-stone-800 mb-4 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            {scene.title}
          </motion.h2>
        </AnimatePresence>

        {/* Narration box */}
        <div className="parchment-card rounded-xl p-4 md:p-5 mb-4 islamic-border">
          <TypewriterText
            text={scene.narration}
            speed={settings.typewriterSpeed}
            onComplete={() => setNarrationComplete(true)}
            className={`${fontSizeClass} text-stone-700`}
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
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px flex-1 bg-amber-300/30" />
                <p className="text-sm font-semibold text-stone-600 flex items-center gap-1">
                  ✦ Que fais-tu ? ✦
                </p>
                <div className="h-px flex-1 bg-amber-300/30" />
              </div>
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleContinue}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl shadow-lg golden-glow-hover transition-all min-h-[48px]"
              >
                Continuer
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lesson */}
        <AnimatePresence>
          {showLesson && scene.lesson && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 parchment-card rounded-xl p-5 islamic-border bg-gradient-to-br from-amber-50 to-orange-50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-bold text-amber-800">{scene.lesson.title}</h3>
              </div>
              <p className={`${fontSizeClass} text-stone-600 mb-4 leading-relaxed`}>{scene.lesson.content}</p>
              <blockquote className="border-l-3 border-amber-400 pl-4 italic text-stone-500 text-sm mb-4 bg-amber-50/50 py-2 rounded-r-lg">
                « {scene.lesson.quote} »
              </blockquote>
              <p className="text-xs text-stone-400 mb-3">— {scene.lesson.source}</p>
              {showContinueAfterLesson && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinue}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl shadow-lg golden-glow-hover transition-all min-h-[48px]"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapter end */}
        {narrationComplete && scene.isEnding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-lg font-bold text-stone-800">Chapitre terminé !</h3>
            <p className="text-sm text-stone-500">
              Bravo ! Tu as terminé ce chapitre de l&apos;aventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('quiz')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 text-white rounded-xl shadow-md transition-all min-h-[48px] font-medium"
              >
                <Brain className="w-4 h-4" />
                Passer le quiz
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('journal')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl shadow-md transition-all min-h-[48px] font-medium"
              >
                <BookHeart className="w-4 h-4" />
                Écrire une réflexion
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('chapter_select')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl transition-all min-h-[48px]"
              >
                Chapitres
                <ChevronRight className="w-4 h-4" />
              </motion.button>
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
            <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-2xl shadow-2xl golden-glow">
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
