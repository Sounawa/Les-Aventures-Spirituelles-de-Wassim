'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { badges } from '@/data/badges';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Award, Sparkles } from 'lucide-react';

export function LessonScreen() {
  const { navigateTo, earnedBadges, completedChapters } = useApp();

  // Collect all lessons from completed chapters
  const allLessons = tomes.flatMap(tome =>
    tome.chapters
      .filter(c => completedChapters.includes(c.id))
      .flatMap(c =>
        c.scenes
          .filter(s => s.lesson)
          .map(s => ({
            ...s.lesson!,
            chapterTitle: c.title,
            tomeTitle: tome.title,
            tomeNumber: tome.number,
          }))
      )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <h1 className="text-lg font-bold text-stone-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            Leçons Spirituelles
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {allLessons.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-amber-400" />
            </div>
            <h2 className="text-lg font-bold text-stone-700 mb-2">Pas encore de leçons</h2>
            <p className="text-sm text-stone-500 max-w-xs mx-auto mb-4">
              Les leçons spirituelles apparaissent au fil de ton aventure.
              Continue l&apos;histoire pour les découvrir !
            </p>
            <Button onClick={() => navigateTo('tome_select')} className="bg-amber-600 hover:bg-amber-700">
              Explorer les tomes
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-stone-400 font-medium"
            >
              {allLessons.length} leçon{allLessons.length > 1 ? 's' : ''} découverte{allLessons.length > 1 ? 's' : ''}
            </motion.p>

            {allLessons.map((lesson, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="parchment-card rounded-xl p-5 islamic-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">
                    T{lesson.tomeNumber}
                  </span>
                  <span className="text-xs text-stone-500">{lesson.chapterTitle}</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">{lesson.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{lesson.content}</p>
                <blockquote className="border-l-3 border-amber-400 pl-4 italic text-stone-500 text-sm bg-amber-50/50 py-2 rounded-r-lg">
                  « {lesson.quote} »
                </blockquote>
                <p className="text-xs text-stone-400 mt-2">— {lesson.source}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
