'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { Choice } from '@/types/story';
import { badges } from '@/data/badges';

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  onClick: () => void;
  disabled?: boolean;
  soundEnabled?: boolean;
  onPlayClick?: () => void;
}

export function ChoiceButton({ choice, index, onClick, disabled, soundEnabled, onPlayClick }: ChoiceButtonProps) {
  const badge = choice.badgeId ? badges.find(b => b.id === choice.badgeId) : null;
  const letterColors = ['#D97706', '#059669', '#7C3AED', '#E11D48'];
  const letterColor = letterColors[index] || letterColors[0];

  const handleClick = () => {
    if (soundEnabled && onPlayClick) {
      onPlayClick();
    }
    onClick();
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      disabled={disabled}
      aria-label={`Choix ${String.fromCharCode(65 + index)} : ${choice.text}`}
      className={
        'w-full text-left px-5 py-4 rounded-xl border-2 shadow-md transition-all duration-300 group relative overflow-hidden min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed ' +
        'border-sky-300/50 dark:border-stone-600/30 ' +
        'parchment-card dark:bg-stone-800/60 ' +
        'hover:shadow-lg ' +
        'hover:border-sky-400 dark:hover:border-stone-500/50 ' +
        'hover:bg-sky-50/50 dark:hover:bg-stone-800/80'
      }
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: letterColor }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute top-0 right-0 w-20 h-20 border border-sky-600 rotate-45 translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border border-sky-600 rotate-45 -translate-x-8 translate-y-8" />
      </div>

      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-sky-100/20 dark:via-sky-500/10 to-transparent" />

      <div className="relative flex items-center gap-3">
        {/* Letter badge with hover scale */}
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 shadow-sm"
          style={{
            backgroundColor: letterColor,
            borderColor: `${letterColor}80`,
            boxShadow: '0 0 0px transparent',
          }}
          whileHover={{
            scale: 1.15,
            boxShadow: `0 0 12px ${letterColor}60`,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {String.fromCharCode(65 + index)}
        </motion.div>
        <p className="flex-1 text-sm md:text-base text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
          {choice.text}
        </p>
        {badge && (
          <motion.div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm"
            style={{
              backgroundColor: `${badge.color}15`,
              color: badge.color,
              border: `1px solid ${badge.color}30`,
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Sparkles className="w-3 h-3" />
            {badge.name}
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
