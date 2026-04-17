'use client';

import { useReducer, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward } from 'lucide-react';

interface TypewriterTextProps {
  text: string[];
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

interface TypewriterState {
  displayedTexts: string[];
  isComplete: boolean;
}

type TypewriterAction =
  | { type: 'ADD_CHAR'; paraIndex: number; text: string; charIndex: number }
  | { type: 'NEW_PARA'; text: string }
  | { type: 'COMPLETE' }
  | { type: 'SKIP'; fullTexts: string[] };

function typewriterReducer(state: TypewriterState, action: TypewriterAction): TypewriterState {
  switch (action.type) {
    case 'ADD_CHAR': {
      const updated = [...state.displayedTexts];
      updated[action.paraIndex] = action.text.substring(0, action.charIndex);
      return { ...state, displayedTexts: updated };
    }
    case 'NEW_PARA': {
      return { ...state, displayedTexts: [...state.displayedTexts, action.text.charAt(0)] };
    }
    case 'COMPLETE':
      return { ...state, isComplete: true };
    case 'SKIP':
      return { ...state, displayedTexts: [...action.fullTexts], isComplete: true };
    default:
      return state;
  }
}

export function TypewriterText({ text, speed = 25, onComplete, className = '' }: TypewriterTextProps) {
  const [state, dispatch] = useReducer(typewriterReducer, {
    displayedTexts: [],
    isComplete: false,
  });
  const onCompleteRef = useRef(onComplete);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const charIndex = useRef(0);
  const paraIndex = useRef(0);
  const textRef = useRef(text);
  const startedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    textRef.current = text;
    charIndex.current = 0;
    paraIndex.current = 0;
    startedRef.current = false;
    dispatch({ type: 'SKIP', fullTexts: [] }); // reset display

    // Start after a micro-task to avoid synchronous setState in effect
    const initTimer = setTimeout(() => {
      startedRef.current = true;
      if (text.length === 0) {
        dispatch({ type: 'COMPLETE' });
        return;
      }
      dispatch({ type: 'ADD_CHAR', paraIndex: 0, text: text[0], charIndex: 1 });
      charIndex.current = 1;
      tick();
    }, 0);

    function tick() {
      if (textRef.current.length === 0) return;
      const pIdx = paraIndex.current;
      const cIdx = charIndex.current;

      if (pIdx >= textRef.current.length) {
        dispatch({ type: 'COMPLETE' });
        onCompleteRef.current?.();
        return;
      }

      const fullText = textRef.current[pIdx];
      if (cIdx < fullText.length) {
        charIndex.current = cIdx + 1;
        dispatch({ type: 'ADD_CHAR', paraIndex: pIdx, text: fullText, charIndex: cIdx + 1 });
        timerRef.current = setTimeout(tick, speed);
      } else {
        paraIndex.current = pIdx + 1;
        charIndex.current = 0;
        if (pIdx + 1 < textRef.current.length) {
          dispatch({ type: 'NEW_PARA', text: textRef.current[pIdx + 1] });
          charIndex.current = 1;
          timerRef.current = setTimeout(tick, speed);
        } else {
          dispatch({ type: 'COMPLETE' });
          onCompleteRef.current?.();
        }
      }
    }

    return () => {
      clearTimeout(initTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, speed]);

  const handleSkip = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    dispatch({ type: 'SKIP', fullTexts: text });
    onCompleteRef.current?.();
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {state.displayedTexts.map((paragraph, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-3 leading-relaxed text-stone-700"
          >
            {paragraph}
            {idx === state.displayedTexts.length - 1 && !state.isComplete && (
              <span className="inline-block w-0.5 h-4 bg-amber-600 ml-0.5 animate-pulse align-middle" />
            )}
          </motion.p>
        ))}
      </AnimatePresence>
      {!state.isComplete && state.displayedTexts.length > 0 && (
        <button
          onClick={handleSkip}
          className="mt-2 flex items-center gap-1 text-xs text-amber-700/60 hover:text-amber-700 transition-colors"
          aria-label="Passer l'animation"
        >
          <SkipForward className="w-3 h-3" />
          Passer
        </button>
      )}
    </div>
  );
}
