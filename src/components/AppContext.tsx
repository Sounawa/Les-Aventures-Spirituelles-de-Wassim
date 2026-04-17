'use client';

import { useState, useCallback } from 'react';
import { createContext, useContext, type ReactNode } from 'react';
import type { ScreenType } from '@/types/story';

interface AppSettings {
  darkMode: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  typewriterSpeed: number;
  soundEnabled: boolean;
}

interface AppState {
  screen: ScreenType;
  selectedTomeId: string | null;
  selectedChapterId: string | null;
  currentSceneId: string | null;
  earnedBadges: string[];
  completedScenes: string[];
  completedChapters: string[];
  quizScores: Record<string, number>;
  settings: AppSettings;
  journalEntries: JournalEntry[];
}

export interface JournalEntry {
  id: string;
  chapterId: string;
  chapterTitle: string;
  text: string;
  createdAt: string;
}

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
  quizScores: Record<string, number>;
  setQuizScore: (chapterId: string, score: number) => void;
  resetProgress: () => void;
  hydrate: () => void;
  settings: AppSettings;
  updateSettings: (s: Partial<AppSettings>) => void;
  journalEntries: JournalEntry[];
  addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt'>) => void;
  deleteJournalEntry: (id: string) => void;
  screenHistory: ScreenType[];
  navigateTo: (screen: ScreenType) => void;
}

const STORAGE_KEY = 'nawfel-save-v2';

const defaultSettings: AppSettings = {
  darkMode: false,
  fontSize: 'normal',
  typewriterSpeed: 25,
  soundEnabled: false,
};

const defaultState: AppState = {
  screen: 'home',
  selectedTomeId: null,
  selectedChapterId: null,
  currentSceneId: null,
  earnedBadges: [],
  completedScenes: [],
  completedChapters: [],
  quizScores: {},
  settings: defaultSettings,
  journalEntries: [],
};

function readStorage(): Partial<AppState> {
  try {
    if (typeof window === 'undefined') return {};
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch { return {}; }
}

function writeStorage(state: AppState) {
  try {
    if (typeof window === 'undefined') return;
    const data = {
      selectedTomeId: state.selectedTomeId,
      selectedChapterId: state.selectedChapterId,
      currentSceneId: state.currentSceneId,
      earnedBadges: state.earnedBadges,
      completedScenes: state.completedScenes,
      completedChapters: state.completedChapters,
      quizScores: state.quizScores,
      settings: state.settings,
      journalEntries: state.journalEntries,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* noop */ }
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);

  const hydrate = useCallback(() => {
    const saved = readStorage();
    const hasData = (saved.earnedBadges?.length ?? 0) > 0 || (saved.completedChapters?.length ?? 0) > 0;
    if (hasData) {
      setState(prev => ({
        ...prev,
        ...saved,
        settings: { ...defaultSettings, ...saved.settings },
        journalEntries: saved.journalEntries || [],
        screen: 'home' as ScreenType,
      }));
    } else if (saved.settings) {
      // Apply settings even without game progress
      setState(prev => ({
        ...prev,
        settings: { ...defaultSettings, ...saved.settings },
      }));
    }
  }, []);

  // Helper: persist + set state
  const updateAndPersist = useCallback((updater: (prev: AppState) => AppState) => {
    setState(prev => {
      const next = updater(prev);
      writeStorage(next);
      return next;
    });
  }, []);

  const navigateTo = useCallback((screen: ScreenType) => {
    setState(prev => ({
      ...prev,
      screen,
      screenHistory: [...prev.screenHistory.slice(-5), prev.screen],
    }));
  }, []);

  const setScreen = useCallback((s: ScreenType) => setState(prev => ({ ...prev, screen: s })), []);
  const selectTome = useCallback((id: string) => setState(prev => ({ ...prev, selectedTomeId: id })), []);
  const selectChapter = useCallback((id: string) => setState(prev => ({ ...prev, selectedChapterId: id })), []);
  const setCurrentScene = useCallback((id: string) => setState(prev => ({ ...prev, currentSceneId: id })), []);
  const earnBadge = useCallback((id: string) => updateAndPersist(prev => ({ ...prev, earnedBadges: prev.earnedBadges.includes(id) ? prev.earnedBadges : [...prev.earnedBadges, id] })), [updateAndPersist]);
  const completeScene = useCallback((id: string) => updateAndPersist(prev => ({ ...prev, completedScenes: prev.completedScenes.includes(id) ? prev.completedScenes : [...prev.completedScenes, id] })), [updateAndPersist]);
  const completeChapter = useCallback((id: string) => updateAndPersist(prev => ({ ...prev, completedChapters: prev.completedChapters.includes(id) ? prev.completedChapters : [...prev.completedChapters, id] })), [updateAndPersist]);
  const setQuizScore = useCallback((chapterId: string, score: number) => updateAndPersist(prev => ({ ...prev, quizScores: { ...prev.quizScores, [chapterId]: Math.max(prev.quizScores[chapterId] || 0, score) } })), [updateAndPersist]);
  const resetProgress = useCallback(() => { setState({ ...defaultState }); try { localStorage.removeItem(STORAGE_KEY); } catch { /* noop */ } }, []);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    updateAndPersist(prev => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, [updateAndPersist]);

  const addJournalEntry = useCallback((entry: Omit<JournalEntry, 'id' | 'createdAt'>) => {
    updateAndPersist(prev => ({
      ...prev,
      journalEntries: [
        ...prev.journalEntries,
        {
          ...entry,
          id: `je-${Date.now()}`,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }, [updateAndPersist]);

  const deleteJournalEntry = useCallback((id: string) => {
    updateAndPersist(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.filter(e => e.id !== id),
    }));
  }, [updateAndPersist]);

  return (
    <AppContext.Provider value={{
      screen: state.screen, setScreen, navigateTo,
      selectedTomeId: state.selectedTomeId, selectTome,
      selectedChapterId: state.selectedChapterId, selectChapter,
      currentSceneId: state.currentSceneId, setCurrentScene,
      earnedBadges: state.earnedBadges, earnBadge,
      completedScenes: state.completedScenes, completeScene,
      completedChapters: state.completedChapters, completeChapter,
      quizScores: state.quizScores, setQuizScore,
      resetProgress, hydrate,
      settings: state.settings, updateSettings,
      journalEntries: state.journalEntries, addJournalEntry, deleteJournalEntry,
      screenHistory: state.screenHistory,
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
