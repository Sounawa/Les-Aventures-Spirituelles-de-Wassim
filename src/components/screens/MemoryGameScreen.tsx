'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw, Clock, Zap, Trophy, Star } from 'lucide-react';

interface CardData {
  id: number;
  emoji: string;
  pairId: string;
}

const CARD_EMOJIS = ['🌙', '🕌', '🕊️', '📖', '🌟', '🌿', '💎', '🕯️'];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(): CardData[] {
  const pairs = CARD_EMOJIS.map((emoji, i) => [
    { id: i * 2, emoji, pairId: `pair-${i}` },
    { id: i * 2 + 1, emoji, pairId: `pair-${i}` },
  ]).flat();
  return shuffleArray(pairs);
}

function getStarRating(moves: number): number {
  if (moves <= 10) return 3;
  if (moves <= 16) return 2;
  return 1;
}

// Confetti particle
function ConfettiParticle({ delay }: { delay: number }) {
  const colors = ['#D97706', '#059669', '#7C3AED', '#EC4899', '#F59E0B', '#0D9488'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const x = Math.random() * 100;
  const rotation = Math.random() * 360;

  return (
    <motion.div
      initial={{ y: -20, x: `${x}vw`, opacity: 1, rotate: 0, scale: 1 }}
      animate={{ y: '100vh', opacity: 0, rotate: rotation + 720, scale: 0.3 }}
      transition={{ duration: 2 + Math.random() * 2, delay, ease: 'easeIn' }}
      className="fixed top-0 w-3 h-3 rounded-sm z-50 pointer-events-none"
      style={{ backgroundColor: color, left: `${x}%` }}
    />
  );
}

function MemoryCard({
  card,
  isFlipped,
  isMatched,
  isChecking,
  onClick,
}: {
  card: CardData;
  isFlipped: boolean;
  isMatched: boolean;
  isChecking: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isFlipped || isMatched || isChecking}
      className="relative aspect-square w-full max-w-[90px] mx-auto cursor-pointer"
      whileHover={!isFlipped && !isMatched && !isChecking ? { scale: 1.05 } : {}}
      whileTap={!isFlipped && !isMatched && !isChecking ? { scale: 0.95 } : {}}
      style={{ perspective: 600 }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped || isMatched ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 rounded-xl flex items-center justify-center shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 shadow-inner" />
          {/* Islamic geometric pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="0.8" />
            <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="0.5" />
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              return (
                <line
                  key={i}
                  x1={40 + 18 * Math.cos(angle)}
                  y1={40 + 18 * Math.sin(angle)}
                  x2={40 + 30 * Math.cos(angle)}
                  y2={40 + 30 * Math.sin(angle)}
                  stroke="white"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
          <span className="relative z-10 text-2xl text-white/80">✦</span>
        </div>

        {/* Card Face */}
        <div
          className={`absolute inset-0 rounded-xl flex items-center justify-center shadow-md ${
            isMatched
              ? 'bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-300 dark:border-emerald-600'
              : 'bg-white dark:bg-stone-800 border border-amber-200 dark:border-stone-600'
          }`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <motion.span
            className="text-3xl sm:text-4xl"
            animate={isMatched ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {card.emoji}
          </motion.span>
          {isMatched && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 dark:bg-emerald-500 rounded-full flex items-center justify-center shadow-sm"
            >
              <Star className="w-3 h-3 text-white fill-white" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.button>
  );
}

function VictoryOverlay({
  moves,
  time,
  stars,
  isNewRecord,
  bestScore,
  onReplay,
  onBack,
}: {
  moves: number;
  time: number;
  stars: number;
  isNewRecord: boolean;
  bestScore: number;
  onReplay: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      {/* Confetti */}
      {Array.from({ length: 30 }, (_, i) => (
        <ConfettiParticle key={i} delay={Math.random() * 0.8} />
      ))}

      <motion.div
        initial={{ scale: 0.5, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
        className="mx-4 max-w-sm w-full glass-card rounded-2xl p-8 text-center space-y-5"
      >
        {/* Trophy icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.4 }}
          className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-400 flex items-center justify-center shadow-lg"
        >
          <span className="text-4xl">{isNewRecord ? '🏆' : '🎉'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-stone-800 dark:text-stone-100"
        >
          {isNewRecord ? 'Nouveau record !' : 'Bravo !'}
        </motion.h2>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2"
        >
          {Array.from({ length: 3 }, (_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.7 + i * 0.15 }}
              className={`text-3xl ${i < stars ? '' : 'opacity-20 grayscale'}`}
            >
              ⭐
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
            <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-stone-800 dark:text-stone-100">{moves}</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">coups</p>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3">
            <Clock className="w-5 h-5 text-teal-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-stone-800 dark:text-stone-100">{time}s</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">temps</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3">
            <Trophy className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-stone-800 dark:text-stone-100">{bestScore > 0 ? bestScore : moves}</p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400">record</p>
          </div>
        </div>

        {isNewRecord && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm font-semibold text-amber-600 dark:text-amber-400"
          >
            🎉 Masha&apos;Allah ! Tu as battu ton record !
          </motion.p>
        )}

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex-1 border-amber-200 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-800"
          >
            Retour
          </Button>
          <Button
            onClick={onReplay}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Rejouer
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MemoryGameScreen() {
  const { navigateTo, memoryBestScore, memoryGamesPlayed, updateMemoryScore } = useApp();

  const [cards, setCards] = useState<CardData[]>(() => createCards());
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCardClick = useCallback((card: CardData) => {
    if (isChecking || flippedIds.includes(card.id) || matchedPairs.includes(card.pairId)) return;

    if (!gameStarted) {
      setGameStarted(true);
      setIsPlaying(true);
    }

    const newFlipped = [...flippedIds, card.id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      setIsChecking(true);

      const [first, second] = newFlipped;
      const firstCard = cards.find(c => c.id === first)!;
      const secondCard = cards.find(c => c.id === second)!;

      if (firstCard.pairId === secondCard.pairId) {
        // Match!
        setTimeout(() => {
          setMatchedPairs(prev => {
            const next = [...prev, firstCard.pairId];
            // Check for game completion inline
            if (next.length === CARD_EMOJIS.length) {
              setIsPlaying(false);
              setIsComplete(true);
              const finalMoves = moves + 1;
              updateMemoryScore(finalMoves);
              const finalStars = getStarRating(finalMoves);
              toast.success('Bravo ! 🎉', {
                description: `${finalMoves} coups - ${finalStars} étoile(s)`,
              });
            }
            return next;
          });
          setFlippedIds([]);
          setIsChecking(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setFlippedIds([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [cards, flippedIds, isChecking, matchedPairs, gameStarted, moves, updateMemoryScore]);

  const resetGame = useCallback(() => {
    setCards(createCards());
    setFlippedIds([]);
    setMatchedPairs([]);
    setIsChecking(false);
    setMoves(0);
    setTime(0);
    setIsPlaying(false);
    setIsComplete(false);
    setGameStarted(false);
  }, []);

  const stars = useMemo(() => getStarRating(moves), [moves]);
  const isNewRecord = memoryBestScore === 0 || (moves < memoryBestScore && isComplete);
  const displayBest = isComplete && isNewRecord ? moves : memoryBestScore;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-amber-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
            🧠 Jeu de Mémoire
          </h1>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 text-xs font-medium text-stone-500 dark:text-stone-400">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>{moves}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-stone-500 dark:text-stone-400">
              <Clock className="w-3.5 h-3.5 text-teal-500" />
              <span>{time}s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-stone-500 dark:text-stone-400">
              Paires trouvées
            </span>
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
              {matchedPairs.length} / {CARD_EMOJIS.length}
            </span>
          </div>
          <div className="w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
              animate={{ width: `${(matchedPairs.length / CARD_EMOJIS.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Best score display */}
        {memoryBestScore > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4 text-xs text-stone-400 dark:text-stone-500"
          >
            <span className="flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              Record : {memoryBestScore} coups
            </span>
            <span>|</span>
            <span>{memoryGamesPlayed} partie{memoryGamesPlayed > 1 ? 's' : ''} jouée{memoryGamesPlayed > 1 ? 's' : ''}</span>
          </motion.div>
        )}

        {/* Cards grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-[400px] mx-auto">
          <AnimatePresence>
            {cards.map((card, idx) => (
              <motion.div
                key={`${card.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.3, type: 'spring', stiffness: 200 }}
              >
                <MemoryCard
                  card={card}
                  isFlipped={flippedIds.includes(card.id)}
                  isMatched={matchedPairs.includes(card.pairId)}
                  isChecking={isChecking}
                  onClick={() => handleCardClick(card)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reset button */}
        {gameStarted && !isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-6"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={resetGame}
              className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Nouvelle partie
            </Button>
          </motion.div>
        )}

        {/* No game started hint */}
        {!gameStarted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-stone-400 dark:text-stone-500 mt-6"
          >
            Tape sur une carte pour commencer ! 🌟
          </motion.p>
        )}
      </div>

      {/* Victory overlay */}
      <AnimatePresence>
        {isComplete && (
          <VictoryOverlay
            moves={moves}
            time={time}
            stars={stars}
            isNewRecord={isNewRecord}
            bestScore={displayBest}
            onReplay={resetGame}
            onBack={() => navigateTo('home')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
