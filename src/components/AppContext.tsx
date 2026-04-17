'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { ScreenType } from '@/types/story';

interface AppContextType {
  screen: ScreenType;
  setScreen: (s: ScreenType) => void;
  selectedTomeId: string | null;
  selectTome: (id: string) => void;
  selectedChapterId: string | null;
  selectChapter: (id: string) => void;
  currentSceneId: string | null;
  setCurrentScene: (id: string) => void;
  earnedBadges: string[];
  earnBadge: (id: string) => void;
  completedScenes: string[];
  completeScene: (id: string) => void;
  completedChapters: string[];
  completeChapter: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<ScreenType>('home');
  const [selectedTomeId, setSelectedTomeId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState<string | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);

  const selectTome = useCallback((id: string) => setSelectedTomeId(id), []);
  const selectChapter = useCallback((id: string) => setSelectedChapterId(id), []);

  const earnBadge = useCallback((id: string) => {
    setEarnedBadges(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const completeScene = useCallback((id: string) => {
    setCompletedScenes(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  const completeChapter = useCallback((id: string) => {
    setCompletedChapters(prev => prev.includes(id) ? prev : [...prev, id]);
  }, []);

  return (
    <AppContext.Provider value={{
      screen, setScreen,
      selectedTomeId, selectTome,
      selectedChapterId, selectChapter,
      currentSceneId, setCurrentScene: setCurrentSceneId,
      earnedBadges, earnBadge,
      completedScenes, completeScene,
      completedChapters, completeChapter,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
