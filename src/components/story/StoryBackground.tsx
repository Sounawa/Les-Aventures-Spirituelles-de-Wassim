'use client';

import { motion } from 'framer-motion';

const backgrounds: Record<string, { gradient: string; pattern: string }> = {
  bedroom: {
    gradient: 'from-indigo-100 via-purple-50 to-blue-100',
    pattern: '🌙',
  },
  garden: {
    gradient: 'from-emerald-100 via-lime-50 to-amber-50',
    pattern: '🌿',
  },
  zawiyah: {
    gradient: 'from-amber-100 via-orange-50 to-yellow-50',
    pattern: '🕌',
  },
  kitchen: {
    gradient: 'from-orange-100 via-amber-50 to-yellow-50',
    pattern: '🍳',
  },
  school: {
    gradient: 'from-sky-100 via-blue-50 to-cyan-50',
    pattern: '📚',
  },
  inner_world: {
    gradient: 'from-violet-100 via-purple-50 to-amber-50',
    pattern: '✨',
  },
  desert: {
    gradient: 'from-amber-200 via-orange-100 to-yellow-100',
    pattern: '🏜️',
  },
  golden_city: {
    gradient: 'from-yellow-100 via-amber-100 to-orange-50',
    pattern: '🏙️',
  },
  oasis: {
    gradient: 'from-cyan-100 via-teal-50 to-emerald-50',
    pattern: '🏊',
  },
  door: {
    gradient: 'from-purple-100 via-indigo-50 to-violet-50',
    pattern: '🚪',
  },
  battle: {
    gradient: 'from-red-100 via-rose-50 to-purple-50',
    pattern: '⚔️',
  },
  home: {
    gradient: 'from-amber-50 via-orange-50 to-yellow-50',
    pattern: '🏠',
  },
  street: {
    gradient: 'from-sky-100 via-blue-50 to-indigo-50',
    pattern: '🌅',
  },
  classroom: {
    gradient: 'from-stone-100 via-amber-50 to-yellow-50',
    pattern: '✏️',
  },
};

interface StoryBackgroundProps {
  background: string;
}

export function StoryBackground({ background }: StoryBackgroundProps) {
  const bg = backgrounds[background] || backgrounds.home;

  return (
    <motion.div
      key={background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`absolute inset-0 bg-gradient-to-br ${bg.gradient}`}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 50% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Islamic geometric border corners */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-300/30 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-300/30 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-300/30 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-300/30 rounded-br-lg" />
    </motion.div>
  );
}
