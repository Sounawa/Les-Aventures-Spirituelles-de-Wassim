'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { characters } from '@/data/characters';
import type { Dialogue } from '@/types/story';
import { CharacterPortrait } from './CharacterPortrait';

interface DialogueBubbleProps {
  dialogue: Dialogue;
  index: number;
}

export function DialogueBubble({ dialogue, index }: DialogueBubbleProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const character = useMemo(() => characters.find(c => c.id === dialogue.characterId), [dialogue.characterId]);

  useEffect(() => {
    let i = 0;
    setIsComplete(false);
    setDisplayText('');
    const speed = 18;
    const timer = setInterval(() => {
      if (i < dialogue.text.length) {
        setDisplayText(dialogue.text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [dialogue.text]);

  if (!character) return null;

  const emotionEmoji: Record<string, string> = {
    neutral: '',
    happy: '😊',
    sad: '😢',
    angry: '😠',
    surprised: '😮',
    wise: '🧠',
    scared: '😨',
    determined: '💪',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="flex items-start gap-3 mb-4"
    >
      <CharacterPortrait
        characterId={dialogue.characterId}
        size="sm"
        showName={false}
        emotion={dialogue.emotion}
        isSpeaking={!isComplete}
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-xs font-semibold" style={{ color: character.color }}>
            {character.name}
          </p>
          <p className="text-[10px] text-stone-400 font-amiri" dir="rtl">{character.nameAr}</p>
          {dialogue.emotion && dialogue.emotion !== 'neutral' && (
            <span className="text-xs">{emotionEmoji[dialogue.emotion] || ''}</span>
          )}
        </div>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border max-w-lg"
          style={{
            backgroundColor: `${character.color}10`,
            borderColor: `${character.color}30`,
          }}
        >
          <p className="text-sm leading-relaxed text-stone-700">
            {displayText}
            {!isComplete && (
              <span
                className="inline-block w-0.5 h-3 ml-0.5 animate-pulse align-middle typewriter-cursor"
                style={{ backgroundColor: character.color }}
              />
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
