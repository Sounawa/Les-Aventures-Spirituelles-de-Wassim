'use client';

import { Award, Home, BookOpen, Users, Settings, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useApp } from '@/components/AppContext';
import { badges } from '@/data/badges';
import type { ScreenType } from '@/types/story';

interface NavigationMenuProps {
  open: boolean;
  onClose: () => void;
}

interface NavItem {
  screen: ScreenType;
  label: string;
  icon: React.ReactNode;
}

export default function NavigationMenu({ open, onClose }: NavigationMenuProps) {
  const {
    earnedBadges,
    completedChapters,
    setScreen,
  } = useApp();

  const navItems: NavItem[] = [
    {
      screen: 'home',
      label: 'Accueil',
      icon: <Home className="size-5" />,
    },
    {
      screen: 'tome_select',
      label: 'Les Tomes',
      icon: <BookOpen className="size-5" />,
    },
    {
      screen: 'character_gallery',
      label: 'Personnages',
      icon: <Users className="size-5" />,
    },
    {
      screen: 'badge_collection',
      label: 'Badges',
      icon: <Award className="size-5" />,
    },
    {
      screen: 'settings',
      label: 'Parametres',
      icon: <Settings className="size-5" />,
    },
  ];

  const handleNav = (screen: ScreenType) => {
    setScreen(screen);
    onClose();
  };

  const badgeProgress = (earnedBadges.length / badges.length) * 100;

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="left"
        className="w-72 bg-background/95 backdrop-blur-md"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-primary">
            <span role="img" aria-hidden="true">🌙</span>
            Souhayl
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-1 mt-2">
          {navItems.map((item) => (
            <Button
              key={item.screen}
              variant="ghost"
              className="w-full justify-start gap-3 h-12 px-3"
              onClick={() => handleNav(item.screen)}
            >
              <span className="text-muted-foreground">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.screen === 'badge_collection' && earnedBadges.length > 0 && (
                <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {earnedBadges.length}
                </span>
              )}
              <ChevronRight className="size-4 text-muted-foreground/50 ml-auto" />
            </Button>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Progress overview */}
        <div className="px-1">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Progression
          </h4>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Award className="size-3" />
                  Badges
                </span>
                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                  {earnedBadges.length}/{badges.length}
                </span>
              </div>
              <Progress value={badgeProgress} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <BookOpen className="size-3" />
                  Chapitres
                </span>
                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                  {completedChapters.length}
                </span>
              </div>
              <Progress
                value={completedChapters.length > 0 ? 33 : 0}
                className="h-2"
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
