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
}

export function ChoiceButton({ choice, index, onClick, disabled }: ChoiceButtonProps) {
  const badge = choice.badgeId ? badges.find(b => b.id === choice.badgeId) : null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-5 py-4 rounded-xl border-2 border-amber-300/50 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg hover:border-amber-400 hover:bg-amber-50/50 transition-all duration-300 group relative overflow-hidden min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute top-0 right-0 w-20 h-20 border border-amber-600 rotate-45 translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border border-amber-600 rotate-45 -translate-x-8 translate-y-8" />
      </div>

      <div className="relative flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm border border-amber-300">
          {String.fromCharCode(65 + index)}
        </div>
        <p className="flex-1 text-sm md:text-base text-stone-700 font-medium">
          {choice.text}
        </p>
        {badge && (
          <motion.div
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100/80 text-amber-700 text-xs"
            animate={{ scale: [1, 1.1, 1] }}
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
