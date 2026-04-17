'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Award, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NavigationMenu from './NavigationMenu';
import { useApp } from '@/components/AppContext';
import { useTheme } from 'next-themes';

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { earnedBadges, setScreen } = useApp();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Left: menu + logo */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="size-9"
            >
              <Menu className="size-5" />
            </Button>

            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 group"
              aria-label="Accueil"
            >
              <span className="text-lg" role="img" aria-hidden="true">
                🌙
              </span>
              <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors hidden sm:inline">
                Souhayl
              </span>
            </button>
          </div>

          {/* Right: badge count + theme toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setScreen('badge_collection')}
              className="gap-1.5 text-muted-foreground hover:text-primary"
              aria-label={`Collection de badges: ${earnedBadges.length} badges`}
            >
              <Award className="size-4" />
              <span className="text-xs font-medium tabular-nums">
                {earnedBadges.length}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="size-9"
              aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <NavigationMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
