'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import type { Choice } from '@/types/story';
import { badges } from '@/data/badges';

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  onClick: () => void;
  disabled?: boolean;
}

export function ChoiceButton({ choice, index, onClick, disabled }: ChoiceButtonProps) {
  const badge = choice.badgeId ? badges.find(b => b.id === choice.badgeId) : null;
  const letterColors = ['#D97706', '#059669', '#7C3AED', '#E11D48'];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-5 py-4 rounded-xl border-2 border-amber-300/50 parchment-card shadow-md hover:shadow-lg hover:border-amber-400 hover:bg-amber-50/50 transition-all duration-300 group relative overflow-hidden min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute top-0 right-0 w-20 h-20 border border-amber-600 rotate-45 translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border border-amber-600 rotate-45 -translate-x-8 translate-y-8" />
      </div>

      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-amber-100/20 to-transparent" />

      <div className="relative flex items-center gap-3">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 shadow-sm"
          style={{
            backgroundColor: letterColors[index] || letterColors[0],
            borderColor: `${letterColors[index] || letterColors[0]}80`,
          }}
        >
          {String.fromCharCode(65 + index)}
        </div>
        <p className="flex-1 text-sm md:text-base text-stone-700 font-medium leading-relaxed">
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
