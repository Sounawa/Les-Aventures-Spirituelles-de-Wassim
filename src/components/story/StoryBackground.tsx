'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface BackgroundConfig {
  gradient: string;
  darkGradient: string;
  pattern: string;
  decorativeElements: string[];
  ambientColor: string;
}

const backgrounds: Record<string, BackgroundConfig> = {
  bedroom: {
    gradient: 'from-violet-100 via-purple-50 to-amber-100',
    darkGradient: 'from-violet-950 via-purple-950 to-amber-950',
    pattern: '🌙',
    decorativeElements: ['✨', '⭐', '💫'],
    ambientColor: 'rgba(129, 140, 248, 0.06)',
  },
  garden: {
    gradient: 'from-violet-100 via-lime-50 to-orange-50',
    darkGradient: 'from-violet-950 via-lime-950 to-orange-950',
    pattern: '🌿',
    decorativeElements: ['🌿', '🌱', '🦋'],
    ambientColor: 'rgba(16, 185, 129, 0.06)',
  },
  zawiyah: {
    gradient: 'from-orange-100 via-violet-50 to-orange-50',
    darkGradient: 'from-orange-950 via-violet-950 to-orange-950',
    pattern: '🕌',
    decorativeElements: ['🕌', '📖', '🤲'],
    ambientColor: 'rgba(251, 191, 36, 0.08)',
  },
  kitchen: {
    gradient: 'from-violet-100 via-orange-50 to-yellow-50',
    darkGradient: 'from-violet-950 via-orange-950 to-yellow-950',
    pattern: '🍳',
    decorativeElements: ['🫖', '🍞', '🧆'],
    ambientColor: 'rgba(251, 146, 60, 0.06)',
  },
  school: {
    gradient: 'from-orange-100 via-amber-50 to-cyan-50',
    darkGradient: 'from-orange-950 via-amber-950 to-cyan-950',
    pattern: '📚',
    decorativeElements: ['📚', '✏️', '🎓'],
    ambientColor: 'rgba(56, 189, 248, 0.06)',
  },
  inner_world: {
    gradient: 'from-violet-100 via-purple-50 to-orange-50',
    darkGradient: 'from-violet-950 via-purple-950 to-orange-950',
    pattern: '✨',
    decorativeElements: ['✨', '🌟', '💫', '⭐'],
    ambientColor: 'rgba(167, 139, 250, 0.08)',
  },
  desert: {
    gradient: 'from-orange-200 via-violet-100 to-orange-100',
    darkGradient: 'from-orange-950 via-violet-950 to-orange-950',
    pattern: '🏜️',
    decorativeElements: ['🏜️', '🌵', '☀️'],
    ambientColor: 'rgba(251, 191, 36, 0.08)',
  },
  golden_city: {
    gradient: 'from-orange-100 via-orange-100 to-violet-50',
    darkGradient: 'from-orange-950 via-orange-950 to-violet-950',
    pattern: '🏙️',
    decorativeElements: ['🏙️', '✨', '👑'],
    ambientColor: 'rgba(250, 204, 21, 0.08)',
  },
  oasis: {
    gradient: 'from-cyan-100 via-orange-50 to-violet-50',
    darkGradient: 'from-cyan-950 via-orange-950 to-violet-950',
    pattern: '💦',
    decorativeElements: ['💦', '🌴', '🌊'],
    ambientColor: 'rgba(34, 211, 238, 0.06)',
  },
  door: {
    gradient: 'from-purple-100 via-violet-50 to-violet-50',
    darkGradient: 'from-purple-950 via-violet-950 to-violet-950',
    pattern: '🚪',
    decorativeElements: ['🚪', '🗝️', '✨'],
    ambientColor: 'rgba(168, 85, 247, 0.08)',
  },
  battle: {
    gradient: 'from-red-100 via-rose-50 to-purple-50',
    darkGradient: 'from-red-950 via-rose-950 to-purple-950',
    pattern: '⚔️',
    decorativeElements: ['⚔️', '🛡️', '⚡'],
    ambientColor: 'rgba(239, 68, 68, 0.06)',
  },
  home: {
    gradient: 'from-orange-50 via-violet-50 to-orange-50',
    darkGradient: 'from-orange-950 via-violet-950 to-orange-950',
    pattern: '🏠',
    decorativeElements: ['🏠', '🌸', '🌿'],
    ambientColor: 'rgba(251, 191, 36, 0.06)',
  },
  street: {
    gradient: 'from-orange-100 via-amber-50 to-violet-50',
    darkGradient: 'from-orange-950 via-amber-950 to-violet-950',
    pattern: '🌅',
    decorativeElements: ['🌅', '🏘️', '🌳'],
    ambientColor: 'rgba(56, 189, 248, 0.06)',
  },
  classroom: {
    gradient: 'from-stone-100 via-orange-50 to-yellow-50',
    darkGradient: 'from-stone-900 via-orange-950 to-yellow-950',
    pattern: '✏️',
    decorativeElements: ['✏️', '📝', '📐'],
    ambientColor: 'rgba(251, 191, 36, 0.05)',
  },
};

interface StoryBackgroundProps {
  background: string;
}

export function StoryBackground({ background }: StoryBackgroundProps) {
  const bg = backgrounds[background] || backgrounds.home;

  // Generate decorative floating elements
  const floatingElements = useMemo(() =>
    bg.decorativeElements.map((emoji, i) => ({
      id: i,
      emoji,
      x: 10 + (i * 25) + (i % 3) * 10,
      y: 15 + (i * 20) + (i % 2) * 15,
      size: 16 + (i % 3) * 4,
      delay: i * 1.2,
      duration: 6 + (i % 3) * 2,
    })),
  [bg.decorativeElements]);

  return (
    <motion.div
      key={background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0"
    >
      {/* Light mode gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bg.gradient}`} />
      {/* Dark mode gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bg.darkGradient} opacity-0 dark:opacity-100 transition-opacity duration-500`} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] islamic-pattern" />

      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(ellipse at 20% 50%, ${bg.ambientColor} 0%, transparent 50%)`,
            `radial-gradient(ellipse at 80% 50%, ${bg.ambientColor} 0%, transparent 50%)`,
            `radial-gradient(ellipse at 50% 20%, ${bg.ambientColor} 0%, transparent 50%)`,
            `radial-gradient(ellipse at 20% 50%, ${bg.ambientColor} 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.08) 100%)',
      }} />
      <div className="absolute inset-0 pointer-events-none dark:hidden" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.05) 100%)',
      }} />

      {/* Floating decorative elements */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute pointer-events-none select-none opacity-20 dark:opacity-10"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
          }}
          animate={{
            y: [0, -12, 0, 8, 0],
            x: [0, 5, -5, 3, 0],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      {/* Islamic geometric border corners */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-orange-300/30 dark:border-orange-500/20 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-orange-300/30 dark:border-orange-500/20 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-orange-300/30 dark:border-orange-500/20 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-orange-300/30 dark:border-orange-500/20 rounded-br-lg" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50/50 via-orange-50/20 to-transparent dark:from-stone-950/50 dark:via-stone-950/20 pointer-events-none" />
    </motion.div>
  );
}
