'use client';

import dynamic from 'next/dynamic';

const AppContent = dynamic(() => import('@/components/AppContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      <div className="text-center space-y-4">
        {/* Pulsing Islamic geometric pattern background */}
        <div className="relative w-24 h-24 mx-auto">
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '20s' }} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" className="text-amber-300/30 dark:text-amber-700/30" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" className="text-amber-400/20 dark:text-amber-600/20" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" className="text-amber-300/25 dark:text-amber-700/25" />
            {Array.from({ length: 6 }, (_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              return (
                <line
                  key={i}
                  x1={50 + 25 * Math.cos(angle)}
                  y1={50 + 25 * Math.sin(angle)}
                  x2={50 + 45 * Math.cos(angle)}
                  y2={50 + 45 * Math.sin(angle)}
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-amber-400/20 dark:text-amber-600/20"
                />
              );
            })}
          </svg>
          {/* Counter-rotating outer ring */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} viewBox="0 0 100 100" fill="none">
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              return (
                <circle
                  key={i}
                  cx={50 + 38 * Math.cos(angle)}
                  cy={50 + 38 * Math.sin(angle)}
                  r="2"
                  className="fill-amber-400/20 dark:fill-amber-600/20"
                />
              );
            })}
          </svg>
          {/* Spinner rings */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-200 dark:border-amber-800" />
          <div className="absolute inset-2 rounded-full border-2 border-amber-300/60 dark:border-amber-700/60" />
          <div className="absolute inset-0 rounded-full border-t-2 border-t-amber-500 animate-spin" style={{ animationDuration: '1.5s' }} />
          <span className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">🌙</span>
        </div>
        <p className="text-amber-700 dark:text-amber-400 font-medium text-sm">Chargement de l&apos;aventure...</p>
        <p className="text-amber-600/50 dark:text-amber-500/40 text-xs italic">Que la paix soit avec toi</p>
        <p className="text-amber-600/30 dark:text-amber-500/25 text-xs font-amiri" dir="rtl">مغامرات سهيل الروحية</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return <AppContent />;
}
