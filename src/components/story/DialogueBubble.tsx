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
        <p className="text-xs font-semibold mb-1" style={{ color: character.color }}>
          {character.name}
          <span className="text-stone-400 font-normal ml-2">{character.nameAr}</span>
        </p>
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
              <span className="inline-block w-0.5 h-3 ml-0.5 animate-pulse align-middle" style={{ backgroundColor: character.color }} />
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
