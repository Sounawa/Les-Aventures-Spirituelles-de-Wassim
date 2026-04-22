'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getScene, getChapter } from '@/data/tomes';
import { DialogueBubble } from './DialogueBubble';
import { ChoiceButton } from './ChoiceButton';
import { StoryBackground } from './StoryBackground';
import { TypewriterText } from './TypewriterText';
import { useNarration } from '@/hooks/useNarration';
import { badges } from '@/data/badges';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import {
  Award, BookOpen, ChevronRight, Brain,
  Home, ArrowLeft, BookHeart, Sparkles,
  Volume2, VolumeX, Bookmark, BookmarkCheck,
  Pause,
} from 'lucide-react';

/* ── SparkleBurst: CSS-only confetti particles ── */
function SparkleBurst() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(t);
  }, []);

  const PARTICLES = 12;
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLES }, (_, i) => {
        const angle = (360 / PARTICLES) * i;
        const rad = (angle * Math.PI) / 180;
        const dist = 40 + Math.random() * 30;
        return { id: i, tx: Math.cos(rad) * dist, ty: Math.sin(rad) * dist, delay: i * 0.03 };
      }),
    [],
  );

  return (
    <AnimatePresence>
      {visible && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-40">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute text-orange-400 text-lg select-none"
              initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0.5, 1.2, 0.6],
                x: p.tx,
                y: p.ty,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: p.delay, ease: 'easeOut' }}
              aria-hidden
            >
              ✦
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

/* ── StarProgress: visual star-based progress row ── */
function StarProgress({
  totalScenes,
  completedSceneIds,
  currentSceneId,
  allSceneIds,
}: {
  totalScenes: number;
  completedSceneIds: string[];
  currentSceneId: string;
  allSceneIds: string[];
}) {
  const MAX_SHOW = 10;
  const showEllipsis = totalScenes > MAX_SHOW;
  const displayCount = showEllipsis ? MAX_SHOW - 1 : totalScenes;

  return (
    <span className="flex items-center gap-0.5 text-xs leading-none">
      {Array.from({ length: displayCount }).map((_, i) => {
        const sceneId = allSceneIds[i];
        if (!sceneId) return null;
        const isCurrent = sceneId === currentSceneId;
        const isCompleted = completedSceneIds.includes(sceneId);

        if (isCurrent) {
          return (
            <span
              key={sceneId}
              className="animate-pulse inline-block"
              aria-label={`Scène actuelle ${i + 1}`}
            >
              🌟
            </span>
          );
        }
        if (isCompleted) {
          return (
            <span key={sceneId} className="inline-block" aria-label={`Scène terminée ${i + 1}`}>
              ⭐
            </span>
          );
        }
        return (
          <span key={sceneId} className="inline-block opacity-40" aria-label={`Scène à venir ${i + 1}`}>
            ☆
          </span>
        );
      })}
      {showEllipsis && (
        <span className="text-stone-400 dark:text-stone-500 ml-0.5">…</span>
      )}
    </span>
  );
}

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
    bookmarkedScenes,
    toggleBookmark,
    completedScenes,
  } = useApp();

  const { playClick, playSuccess, playBadge, playTransition, playComplete } = useSoundEffects();
  const { speak, stop, isSpeaking } = useNarration();

  const [showLesson, setShowLesson] = useState(false);
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  const [dialoguesStarted, setDialoguesStarted] = useState(false);
  const [narrationComplete, setNarrationComplete] = useState(false);
  const [sparkleKey, setSparkleKey] = useState(0);

  const scene = selectedTomeId && selectedChapterId && currentSceneId
    ? getScene(selectedTomeId, selectedChapterId, currentSceneId)
    : null;

  const chapter = selectedTomeId && selectedChapterId
    ? getChapter(selectedTomeId, selectedChapterId)
    : null;

  const sceneIndex = chapter?.scenes.findIndex(s => s.id === currentSceneId) ?? -1;
  const totalScenes = chapter?.scenes.length ?? 0;

  const isBookmarked = currentSceneId ? bookmarkedScenes.includes(currentSceneId) : false;

  // Stop narration on scene change
  useEffect(() => {
    stop();
  }, [currentSceneId, stop]);

  const handleNarrate = useCallback(() => {
    if (!scene) return;
    if (isSpeaking) {
      stop();
    } else {
      speak(scene.narration, 'fr');
    }
  }, [scene, isSpeaking, speak, stop]);

  const handleToggleBookmark = useCallback(() => {
    if (currentSceneId) {
      toggleBookmark(currentSceneId);
      if (settings.soundEnabled) playClick();
    }
  }, [currentSceneId, toggleBookmark, settings.soundEnabled, playClick]);

  const handleChoice = useCallback((choice: { id: string; nextSceneId: string; badgeId?: string }) => {
    if (settings.soundEnabled) { playTransition(); }
    if (choice.badgeId) {
      earnBadge(choice.badgeId);
      setEarnedBadge(choice.badgeId);
      if (settings.soundEnabled) { playBadge(); }
      setTimeout(() => setEarnedBadge(null), 3000);
    }
    if (scene) completeScene(scene.id);
    setCurrentScene(choice.nextSceneId);
    setNarrationComplete(false);
    setDialoguesStarted(false);
    setShowLesson(false);
  }, [earnBadge, completeScene, setCurrentScene, scene, settings.soundEnabled, playTransition, playBadge]);

  const handleContinue = useCallback(() => {
    if (!scene) return;
    if (settings.soundEnabled) { playClick(); }
    if (scene.lesson && !showLesson) {
      setShowLesson(true);
      return;
    }
    // Trigger sparkle burst on scene transition
    setSparkleKey((k) => k + 1);
    if (scene.nextSceneId) {
      completeScene(scene.id);
      setCurrentScene(scene.nextSceneId);
      setNarrationComplete(false);
      setDialoguesStarted(false);
      setShowLesson(false);
    } else {
      completeScene(scene.id);
      if (selectedChapterId) {
        completeChapter(selectedChapterId);
        if (settings.soundEnabled) { playComplete(); }
      }
    }
  }, [scene, showLesson, completeScene, setCurrentScene, completeChapter, selectedChapterId, settings.soundEnabled, playClick, playComplete]);

  // Track scene changes to trigger dialogues after narration
  useEffect(() => {
    if (narrationComplete) {
      const timer = setTimeout(() => setDialoguesStarted(true), 500);
      return () => clearTimeout(timer);
    }
  }, [narrationComplete]);

  if (!scene) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 mx-auto mb-3 border-2 border-orange-400 border-t-transparent rounded-full"
          />
          <p className="text-stone-400 text-sm">Chargement...</p>
        </div>
      </div>
    );
  }

  const hasChoices = scene.choices && scene.choices.length > 0;
  const showContinue = narrationComplete && !hasChoices && !showLesson;
  const showContinueAfterLesson = showLesson && narrationComplete;

  // Dynamic font size class based on settings
  const fontSizeClass = settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'xlarge' ? 'text-lg' : 'text-sm';

  const progressPercent = totalScenes > 0 ? ((sceneIndex + 1) / totalScenes) * 100 : 0;

  return (
    <div className="relative min-h-[70vh]">
      <StoryBackground background={scene.background} />

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        {/* Scene progress info - enhanced header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <BookOpen className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
              <span className="text-xs text-stone-500 dark:text-stone-400 truncate">
                {chapter?.titleAr} — {chapter?.title}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-2">
              {/* Audio narration button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNarrate}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isSpeaking
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-200/50'
                    : 'bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm text-stone-500 dark:text-stone-400 hover:text-orange-600 border border-orange-200/30 dark:border-stone-700/30'
                }`}
                aria-label={isSpeaking ? 'Arrêter la narration' : 'Écouter la narration'}
              >
                {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </motion.button>
              {/* Bookmark button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleBookmark}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isBookmarked
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-200/50'
                    : 'bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm text-stone-500 dark:text-stone-400 hover:text-orange-600 border border-orange-200/30 dark:border-stone-700/30'
                }`}
                aria-label={isBookmarked ? 'Retirer le signet' : 'Ajouter un signet'}
              >
                {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              </motion.button>
              {/* Star-based progress indicator */}
              <span className="flex items-center gap-1 bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm px-2 py-1.5 rounded-full border border-orange-200/20 dark:border-stone-700/20">
                <StarProgress
                  totalScenes={totalScenes}
                  completedSceneIds={completedScenes}
                  currentSceneId={currentSceneId ?? ''}
                  allSceneIds={chapter?.scenes.map(s => s.id) ?? []}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced progress bar */}
        <div className="w-full h-2.5 bg-white/40 dark:bg-stone-800/60 rounded-full mb-6 overflow-hidden shadow-inner backdrop-blur-sm">
          <motion.div
            className="h-full story-progress-bar rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
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
            className="text-lg md:text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-orange-500 animate-sparkle" />
            {scene.title}
          </motion.h2>
        </AnimatePresence>

        {/* Narration box - enhanced with glass effect */}
        <motion.div
          key={`narration-${scene.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="narration-glass rounded-xl p-5 md:p-6 mb-4 islamic-border"
        >
          <TypewriterText
            text={scene.narration}
            speed={settings.typewriterSpeed}
            onComplete={() => setNarrationComplete(true)}
            className={`${fontSizeClass} text-stone-700 dark:text-stone-300 leading-relaxed`}
          />
          {narrationComplete && !isSpeaking && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNarrate}
              className="mt-3 flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
            >
              <Volume2 className="w-3 h-3" />
              <span>Écouter</span>
            </motion.button>
          )}
        </motion.div>

        {/* Dialogues */}
        <AnimatePresence>
          {dialoguesStarted && scene.dialogues.map((dialogue, idx) => (
            <motion.div
              key={`${scene.id}-d-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: idx * 0.15 }}
            >
              <DialogueBubble dialogue={dialogue} index={idx} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Choices - Enhanced */}
        <AnimatePresence>
          {narrationComplete && hasChoices && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              {/* Choice section glass-card with gradient */}
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 via-violet-50/30 to-orange-100/20 dark:from-orange-900/20 dark:via-violet-900/10 dark:to-orange-900/10" />
                <div className="relative backdrop-blur-sm border border-orange-200/40 dark:border-orange-700/20 rounded-xl p-4 md:p-5">
                  {/* Header with title and instruction */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-px flex-1 bg-orange-300/30 dark:bg-orange-500/20" />
                    <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 flex items-center gap-1">
                      ✦ Que fais-tu ? ✦
                    </p>
                    <div className="h-px flex-1 bg-orange-300/30 dark:bg-orange-500/20" />
                  </div>
                  <p className="text-center text-xs text-stone-400 dark:text-stone-500 mb-3">
                    Choisis ta réponse :
                  </p>
                  {/* Choices list */}
                  <div className="space-y-3">
                    {scene.choices.map((choice, idx) => (
                      <ChoiceButton
                        key={choice.id}
                        choice={choice}
                        index={idx}
                        onClick={() => handleChoice(choice)}
                        soundEnabled={settings.soundEnabled}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button with sparkle burst */}
        <AnimatePresence>
          {showContinue && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex justify-center relative"
            >
              {sparkleKey > 0 && <SparkleBurst key={sparkleKey} />}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleContinue}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-violet-600 hover:from-orange-700 hover:to-violet-700 text-white rounded-xl shadow-lg golden-glow-hover transition-all min-h-[48px]"
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
              className="mt-6 parchment-card rounded-xl p-5 islamic-border bg-gradient-to-br from-orange-50 to-violet-50 dark:from-stone-800/80 dark:to-stone-800/60"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-orange-700 dark:text-orange-400" />
                </div>
                <h3 className="font-bold text-orange-800 dark:text-orange-300">{scene.lesson.title}</h3>
              </div>
              <p className={`${fontSizeClass} text-stone-600 dark:text-stone-300 mb-4 leading-relaxed`}>{scene.lesson.content}</p>
              <blockquote className="border-l-3 border-orange-400 pl-4 italic text-stone-500 dark:text-stone-400 text-sm mb-4 bg-orange-50/50 dark:bg-orange-900/10 py-2 rounded-r-lg">
                « {scene.lesson.quote} »
              </blockquote>
              <p className="text-xs text-stone-400 dark:text-stone-500 mb-3">— {scene.lesson.source}</p>
              {showContinueAfterLesson && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinue}
                  className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-violet-600 hover:from-orange-700 hover:to-violet-700 text-white rounded-xl shadow-lg golden-glow-hover transition-all min-h-[48px]"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chapter end - Enhanced celebration */}
        {narrationComplete && scene.isEnding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center space-y-4"
          >
            {/* Celebration title */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 0.1, stiffness: 200 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-violet-500 to-orange-600 bg-clip-text text-transparent"
            >
              🎉 Masha&apos;Allah !
            </motion.h3>

            {/* Sequential animated stars */}
            <div className="flex items-center justify-center gap-3">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    delay: 0.3 + i * 0.2,
                    stiffness: 260,
                    damping: 15,
                  }}
                  className="text-4xl drop-shadow-md"
                  aria-hidden
                >
                  ⭐
                </motion.span>
              ))}
            </div>

            {/* Award icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.9 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-violet-400 shadow-lg golden-glow"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <p className="text-base font-semibold text-stone-700 dark:text-stone-200">Chapitre terminé !</p>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Bravo ! Tu as terminé ce chapitre de l&apos;aventure.
            </p>
            {/* Buttons with better visual hierarchy */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
              {/* Primary action */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('quiz')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-violet-500 hover:from-orange-600 hover:to-violet-600 text-white rounded-xl shadow-lg golden-glow-hover transition-all min-h-[48px] font-bold"
              >
                <Brain className="w-5 h-5" />
                Passer le quiz
              </motion.button>
              {/* Secondary action */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('journal')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl shadow-md transition-all min-h-[48px] font-medium"
              >
                <BookHeart className="w-4 h-4" />
                Écrire une réflexion
              </motion.button>
              {/* Tertiary action */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateTo('chapter_select')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-xl transition-all min-h-[48px]"
              >
                Chapitres
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Badge earned notification - enhanced */}
      <AnimatePresence>
        {earnedBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="toast-achievement flex items-center gap-3 px-5 py-3 text-white rounded-2xl shadow-2xl golden-glow">
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
