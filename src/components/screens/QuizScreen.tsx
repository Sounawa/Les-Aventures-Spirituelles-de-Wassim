'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getChapter } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, CheckCircle2, XCircle, Trophy, Star, Volume2, VolumeX } from 'lucide-react';
import { quizQuestions } from '@/data/quizData';
import type { QuizQuestion } from '@/data/quizData';
import { useNarration } from '@/hooks/useNarration';

const chapterQuizzes: Record<string, QuizQuestion[]> = {};

export default function QuizScreen() {
  const { navigateTo, selectedTomeId, selectedChapterId, completeChapter, setQuizScore, quizScores, settings, updateSettings } = useApp();
  const { speak, stop: stopNarration, isSpeaking } = useNarration();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const chapter = selectedTomeId && selectedChapterId
    ? getChapter(selectedTomeId, selectedChapterId)
    : null;

  // All quiz data is in quizData.ts
  const allQuizzes = quizQuestions;
  const questions = chapter ? (allQuizzes[chapter.id] || generateDefaultQuiz(chapter)) : [];

  const handleAnswer = useCallback((index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correctIndex) {
      setScore(prev => prev + 1);
    }
  }, [showResult, currentQuestion, questions]);

  const handleNext = useCallback(() => {
    if (currentQuestion + 1 >= questions.length) {
      const finalScore = selectedAnswer === questions[currentQuestion].correctIndex ? score + 1 : score;
      setQuizFinished(true);
      if (chapter) {
        setQuizScore(chapter.id, finalScore);
        if (finalScore >= Math.ceil(questions.length * 0.6)) {
          completeChapter(chapter.id);
        }
      }
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentQuestion, questions, selectedAnswer, score, chapter, setQuizScore, completeChapter]);

  const handleRetry = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
  }, []);

  const handleBack = useCallback(() => {
    navigateTo('chapter_select');
  }, [navigateTo]);

  const bestScore = chapter ? (quizScores[chapter.id] || 0) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-purple-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-orange-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={handleBack} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {chapter ? `Quiz — ${chapter.title}` : 'Quiz'}
            </h1>
            {chapter && <p className="text-xs text-orange-600 dark:text-orange-400" dir="rtl">{chapter.titleAr}</p>}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (isSpeaking) { stopNarration(); }
                else { speak(questions[currentQuestion]?.question || ''); }
              }}
              className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              title={isSpeaking ? 'Arrêter la lecture' : 'Écouter la question'}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </motion.button>
            <Brain className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-bold text-purple-700 dark:text-purple-400">{score}/{questions.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {!quizFinished ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-stone-500 dark:text-stone-400">
                    Question {currentQuestion + 1} sur {questions.length}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: questions.length }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i < currentQuestion ? 'bg-stone-300 dark:bg-stone-500'
                            : i === currentQuestion ? 'bg-purple-500'
                            : 'bg-stone-200 dark:bg-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 dark:border-stone-700/30 shadow-sm mb-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-purple-700 dark:text-purple-400">{currentQuestion + 1}</span>
                  </div>
                  <h2 className="text-base font-semibold text-stone-800 dark:text-stone-100 leading-relaxed pt-1.5">
                    {questions[currentQuestion]?.question}
                  </h2>
                </div>

                {/* Options */}
                <div className="space-y-2 mt-4">
                  {questions[currentQuestion]?.options.map((option, idx) => {
                    const isCorrect = idx === questions[currentQuestion].correctIndex;
                    const isSelected = idx === selectedAnswer;
                    let optionStyle = 'border-stone-200/50 dark:border-stone-700/50 bg-stone-50/50 dark:bg-stone-700/50 hover:bg-orange-50 dark:hover:bg-stone-700 hover:border-orange-200 dark:hover:border-stone-600';

                    if (showResult) {
                      if (isCorrect) optionStyle = 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20';
                      else if (isSelected && !isCorrect) optionStyle = 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20';
                      else optionStyle = 'border-stone-200/30 dark:border-stone-700/30 opacity-50';
                    } else if (isSelected) {
                      optionStyle = 'border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20';
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileTap={!showResult ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswer(idx)}
                        disabled={showResult}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center gap-3 min-h-[48px] ${optionStyle}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          showResult && isCorrect ? 'bg-green-500 text-white' :
                          showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                          'bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                        }`}>
                          {showResult && isCorrect ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : showResult && isSelected && !isCorrect ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            String.fromCharCode(65 + idx)
                          )}
                        </div>
                        <span className="text-sm text-stone-700 dark:text-stone-300">{option}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className={`p-3 rounded-lg text-sm leading-relaxed ${
                        selectedAnswer === questions[currentQuestion].correctIndex
                          ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300'
                          : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 text-orange-800 dark:text-orange-300'
                      }`}>
                        <p className="font-medium mb-1">
                          {selectedAnswer === questions[currentQuestion].correctIndex ? '✅ Bravo !' : '💡 Pas tout à fait...'}
                        </p>
                        <p>{questions[currentQuestion]?.explanation}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Next button */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    <Button
                      onClick={handleNext}
                      className="w-full h-12 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white rounded-xl font-medium"
                    >
                      {currentQuestion + 1 >= questions.length ? 'Voir le résultat' : 'Question suivante'}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/30 dark:border-stone-700/30 shadow-sm mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mb-4"
              >
                {score >= Math.ceil(questions.length * 0.8) ? (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-300 to-green-400 shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                ) : score >= Math.ceil(questions.length * 0.5) ? (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 shadow-lg">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 shadow-lg">
                    <Brain className="w-10 h-10 text-stone-500" />
                  </div>
                )}
              </motion.div>

              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                {score >= Math.ceil(questions.length * 0.8) ? 'Excellent !' :
                 score >= Math.ceil(questions.length * 0.5) ? 'Bien joué !' : 'Continue d\'apprendre !'}
              </h2>
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {score} / {questions.length}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
                {score >= Math.ceil(questions.length * 0.8)
                  ? 'Tu as une excellente mémoire spirituelle, Masha\'Allah !'
                  : score >= Math.ceil(questions.length * 0.5)
                  ? 'Tu as bien retenu la leçon de ce chapitre.'
                  : 'Relis le chapitre et essaie encore pour améliorer ton score !'}
              </p>

              {score >= Math.ceil(questions.length * 0.6) && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  Chapitre validé !
                </div>
              )}

              {bestScore > 0 && bestScore > score && (
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-2">
                  Meilleur score : {bestScore}/{questions.length}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleRetry}
                className="flex-1 h-12 rounded-xl"
              >
                Recommencer
              </Button>
              <Button
                onClick={handleBack}
                className="flex-1 h-12 bg-gradient-to-r from-orange-600 to-violet-600 hover:from-orange-700 hover:to-violet-700 rounded-xl"
              >
                Continuer
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function generateDefaultQuiz(chapter: { title: string; titleAr: string }): QuizQuestion[] {
  return [
    { question: `Quel est le titre de ce chapitre en arabe ?`, options: [chapter.titleAr, "الفصل الأول", "الباب الأخير", "مقدمة"], correctIndex: 0, explanation: `Le titre arabe de ce chapitre est « ${chapter.titleAr} ».` },
    { question: "Dans quelle ville habite Wassim ?", options: ["Marrakech", "Fès", "Casablanca", "Rabat"], correctIndex: 1, explanation: "Wassim habite à Fès, la plus ancienne ville impériale du Maroc, avec sa magnifique médina !" },
    { question: "Comment s'appelle le papa de Wassim ?", options: ["Sidi Mu'adh", "Souhayl", "Mehdi", "Ahmad"], correctIndex: 2, explanation: "Le papa de Wassim s'appelle Mehdi. Il est professeur à la madrasa de Fès !" },
  ];
}
