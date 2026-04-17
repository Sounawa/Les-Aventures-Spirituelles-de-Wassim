'use client';

import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/components/AppContext';

export default function QuizScreen() {
  const { setScreen } = useApp();

  return (
    <div className="min-h-[70vh] px-4 py-6 max-w-2xl mx-auto w-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 w-full">
        <Button
          variant="ghost"
          size="icon"
          onClick={goBack}
          className="shrink-0"
          aria-label="Retour"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Quiz</h1>
          <p className="text-sm text-muted-foreground">Teste tes connaissances</p>
        </div>
      </div>

      {/* Placeholder */}
      <div className="parchment-card islamic-border rounded-2xl p-8 text-center max-w-md">
        <Brain className="size-16 text-primary/40 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground mb-2">
          Bientot disponible
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Le quiz interactif arrive bientot ! Teste ce que tu as appris dans les aventures de Nawfel et gagne des badges speciaux.
        </p>
      </div>
    </div>
  );
}
