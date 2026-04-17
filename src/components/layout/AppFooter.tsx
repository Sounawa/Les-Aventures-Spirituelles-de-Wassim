'use client';

import { Heart } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="mt-auto py-4 px-4 border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-1.5 text-center">
        <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
          <span role="img" aria-hidden="true">🌙</span>
          Les Aventures Spirituelles de Nawfel
          <Heart className="size-3 fill-current text-primary/60" />
        </p>
        <p className="text-xs text-muted-foreground">
          Un livre interactif pour les jeunes coeurs en quete de sagesse
        </p>
      </div>
    </footer>
  );
}
