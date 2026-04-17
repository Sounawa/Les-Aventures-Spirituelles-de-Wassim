'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';

export function LessonScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/40 shadow-lg p-6 text-center"
        >
          <BookOpen className="w-10 h-10 text-amber-600 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-stone-800 mb-4">Leçons Spirituelles</h2>
          <p className="text-sm text-stone-500">
            Les leçons apparaissent à la fin des chapitres au fil de ton aventure.
            Continue l&apos;histoire pour les découvrir !
          </p>
          <Button
            onClick={() => window.history.back()}
            className="mt-6 bg-amber-600 hover:bg-amber-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
