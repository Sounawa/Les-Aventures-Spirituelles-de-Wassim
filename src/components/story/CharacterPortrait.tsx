'use client';

import { characters } from '@/data/characters';
import { motion } from 'framer-motion';

interface CharacterPortraitProps {
  characterId: string;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  emotion?: string;
  isSpeaking?: boolean;
}

const sizeMap = {
  sm: { container: 'w-12 h-12 text-xl', ring: 'ring-2' },
  md: { container: 'w-16 h-16 text-2xl', ring: 'ring-2' },
  lg: { container: 'w-24 h-24 text-4xl', ring: 'ring-3' },
};

const emotionMap: Record<string, string> = {
  neutral: '',
  happy: '😊',
  sad: '😢',
  angry: '😠',
  surprised: '😮',
  wise: '🧠',
  scared: '😨',
  determined: '💪',
};

export function CharacterPortrait({
  characterId,
  size = 'md',
  showName = true,
  emotion = 'neutral',
  isSpeaking = false,
}: CharacterPortraitProps) {
  const character = characters.find(c => c.id === characterId);
  if (!character) return null;

  const sizes = sizeMap[size];
  const emotionEmoji = emotionMap[emotion] || '';

  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      animate={isSpeaking ? { scale: [1, 1.05, 1] } : {}}
      transition={isSpeaking ? { repeat: Infinity, duration: 1.5 } : {}}
    >
      <div
        className={`${sizes.container} rounded-full flex items-center justify-center border-2 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden`}
        style={{ borderColor: character.color }}
      >
        <img
          src={`/images/characters/${characterId}.png`}
          alt={character.name}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextElementSibling) (target.nextElementSibling as HTMLElement).style.display = 'flex';
          }}
        />
        <span
          className="absolute inset-0 items-center justify-center text-3xl"
          style={{ display: 'none' }}
        >
          {character.icon}
        </span>
        {isSpeaking && (
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-sky-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
        {emotionEmoji && (
          <span className="absolute -top-1 -right-1 text-sm">{emotionEmoji}</span>
        )}
      </div>
      {showName && (
        <div className="text-center">
          <p className="text-xs font-semibold" style={{ color: character.color }}>
            {character.name}
          </p>
          <p className="text-[10px] text-stone-400">{character.nameAr}</p>
        </div>
      )}
    </motion.div>
  );
}
