'use client';

import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, BookOpen, CheckCircle2 } from 'lucide-react';

const futureTomes = [
  { number: 2, title: 'Le Miroir de l\'Âme', titleAr: 'مرآة الروح', theme: 'L\'orgueil et la jalousie', monsters: ['Al-Jabbara', 'Al-Hasad'] },
  { number: 3, title: 'Le Désert de l\'Épreuve', titleAr: 'صحراء الابتلاء', theme: 'L\'endurance spirituelle', monsters: ['Al-Bukhl', 'Al-Ghadab Al-Akbar'] },
  { number: 4, title: 'Le Voile et la Lumière', titleAr: 'الحجاب والنور', theme: 'Les obstacles subtils', monsters: ['Al-Riya', 'Al-Mulhama'] },
  { number: 5, title: 'Al-Mutma\'inna', titleAr: 'النفس المطمئنة', theme: 'L\'ultime épreuve', monsters: ['Al-Nafs Al-Ammara Suprême'] },
];

export function TomeSelectScreen() {
  const { setScreen, selectTome, completedTomes, completedChapters } = useGameStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setScreen('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800">Les Tomes</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Available tomes */}
        {tomes.map((tome, idx) => {
          const completedChaptersInTome = completedChapters.filter(id => tome.chapters.some(c => c.id === id)).length;
          const isComplete = completedTomes.includes(tome.id);

          return (
            <motion.button
              key={tome.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                selectTome(tome.id);
                setScreen('chapter_select');
              }}
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-amber-200/40 shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="flex">
                {/* Tome number */}
                <div className="w-20 md:w-24 bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center text-white shrink-0">
                  <BookOpen className="w-6 h-6 mb-1" />
                  <span className="text-2xl font-bold">{tome.number}</span>
                </div>

                {/* Info */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-stone-800 text-base">{tome.title}</h3>
                      <p className="text-sm text-amber-600" dir="rtl">{tome.titleAr}</p>
                    </div>
                    {isComplete && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{tome.subtitle}</p>
                  <p className="text-xs text-stone-400 mt-2">{tome.description.substring(0, 80)}...</p>

                  {/* Progress */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all"
                        style={{ width: `${(completedChaptersInTome / tome.chapters.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-stone-400">
                      {completedChaptersInTome}/{tome.chapters.length} chapitres
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* Future tomes */}
        <div className="pt-4">
          <p className="text-xs text-stone-400 mb-3 uppercase tracking-wider">Bientôt disponibles</p>
          <div className="space-y-3">
            {futureTomes.map((tome, idx) => (
              <motion.div
                key={tome.number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (tomes.length + idx) * 0.1 }}
                className="bg-white/40 backdrop-blur-sm rounded-xl border border-stone-200/30 p-4 opacity-60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-500">Tome {tome.number} — {tome.title}</p>
                    <p className="text-xs text-stone-400" dir="rtl">{tome.titleAr}</p>
                    <p className="text-[10px] text-stone-300 mt-1">{tome.theme}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
