'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { createContext, useContext, type ReactNode } from 'react';
import type { ScreenType } from '@/types/story';
import { getDailyChallenge } from '@/data/dailyChallenges';
import { getUnlockedAchievements, getAchievement, type Achievement } from '@/data/achievements';
export type { Achievement };

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
  screenHistory: ScreenType[];
  bookmarkedScenes: string[];
  dailyStreak: number;
  lastPlayDate: string;
  hasSeenOnboarding: boolean;
  completedChallenges: string[];
  challengeXP: number;
  readingDays: string[];
  playerName: string;
  playerAvatar: string;
  playerColor: string;
  memoryBestScore: number;
  memoryGamesPlayed: number;
  totalDhikr: number;
  totalDhikrSessions: number;
  achievements: string[];
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
  bookmarkedScenes: string[];
  toggleBookmark: (sceneId: string) => void;
  dailyStreak: number;
  lastPlayDate: string;
  updateStreak: () => void;
  hasSeenOnboarding: boolean;
  setHasSeenOnboarding: () => void;
  completedChallenges: string[];
  completeChallenge: (date: string) => void;
  challengeXP: number;
  readingDays: string[];
  playerName: string;
  playerAvatar: string;
  playerColor: string;
  updateProfile: (profile: { playerName?: string; playerAvatar?: string; playerColor?: string }) => void;
  memoryBestScore: number;
  memoryGamesPlayed: number;
  updateMemoryScore: (moves: number) => void;
  totalDhikr: number;
  totalDhikrSessions: number;
  updateDhikrSession: (count: number) => void;
  achievements: string[];
  achievementPopup: Achievement | null;
  dismissAchievement: () => void;
  checkAchievements: () => void;
}

const STORAGE_KEY = 'wassim-save-v1';

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
  screenHistory: [],
  bookmarkedScenes: [],
  dailyStreak: 0,
  lastPlayDate: '',
  hasSeenOnboarding: false,
  completedChallenges: [],
  challengeXP: 0,
  readingDays: [],
  playerName: 'Wassim',
  playerAvatar: '⭐',
  playerColor: 'orange',
  memoryBestScore: 0,
  memoryGamesPlayed: 0,
  totalDhikr: 0,
  totalDhikrSessions: 0,
  achievements: [],
};

function readStorage(): Partial<AppState> {
  try {
    if (typeof window === 'undefined') return {};
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    // Try v3 format first
    const parsed = JSON.parse(raw);
    return parsed;
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
      bookmarkedScenes: state.bookmarkedScenes,
      dailyStreak: state.dailyStreak,
      lastPlayDate: state.lastPlayDate,
      hasSeenOnboarding: state.hasSeenOnboarding,
      completedChallenges: state.completedChallenges,
      challengeXP: state.challengeXP,
      readingDays: state.readingDays,
      playerName: state.playerName,
      playerAvatar: state.playerAvatar,
      playerColor: state.playerColor,
      memoryBestScore: state.memoryBestScore,
      memoryGamesPlayed: state.memoryGamesPlayed,
      totalDhikr: state.totalDhikr,
      totalDhikrSessions: state.totalDhikrSessions,
      achievements: state.achievements,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* noop */ }
}

// Migrate from v2 to v3 format
function migrateFromV2() {
  try {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem('nawfel-save-v2');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Migrate: add new fields with defaults
    const migrated = {
      ...parsed,
      bookmarkedScenes: [],
      dailyStreak: 0,
      lastPlayDate: '',
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    localStorage.removeItem('nawfel-save-v2');
    return migrated;
  } catch { return null; }
}

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const [achievementPopup, setAchievementPopup] = useState<Achievement | null>(null);
  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const hydrate = useCallback(() => {
    let saved = readStorage();
    // Try migration from v2
    if (!saved || Object.keys(saved).length === 0) {
      const migrated = migrateFromV2();
      if (migrated) saved = migrated;
    }

    const hasData = (saved.earnedBadges?.length ?? 0) > 0 || (saved.completedChapters?.length ?? 0) > 0;
    if (hasData) {
      setState(prev => ({
        ...prev,
        ...saved,
        settings: { ...defaultSettings, ...saved.settings },
        journalEntries: saved.journalEntries || [],
        bookmarkedScenes: saved.bookmarkedScenes || [],
        dailyStreak: saved.dailyStreak || 0,
        lastPlayDate: saved.lastPlayDate || '',
        hasSeenOnboarding: saved.hasSeenOnboarding || false,
        completedChallenges: saved.completedChallenges || [],
        challengeXP: saved.challengeXP || 0,
        readingDays: saved.readingDays || [],
        playerName: saved.playerName || 'Wassim',
        playerAvatar: saved.playerAvatar || '⭐',
        playerColor: saved.playerColor || 'orange',
        memoryBestScore: saved.memoryBestScore || 0,
        memoryGamesPlayed: saved.memoryGamesPlayed || 0,
        totalDhikr: saved.totalDhikr || 0,
        totalDhikrSessions: saved.totalDhikrSessions || 0,
        achievements: saved.achievements || [],
        screen: 'home' as ScreenType,
      }));
    } else if (saved.settings || saved.hasSeenOnboarding) {
      setState(prev => ({
        ...prev,
        ...(saved.settings ? { settings: { ...defaultSettings, ...saved.settings } } : {}),
        hasSeenOnboarding: saved.hasSeenOnboarding || false,
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
  const resetProgress = useCallback(() => {
    setState({ ...defaultState });
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('nawfel-save-v2');
      localStorage.removeItem('souhayl-save-v1');
    } catch { /* noop */ }
  }, []);

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

  const toggleBookmark = useCallback((sceneId: string) => {
    updateAndPersist(prev => ({
      ...prev,
      bookmarkedScenes: prev.bookmarkedScenes.includes(sceneId)
        ? prev.bookmarkedScenes.filter(id => id !== sceneId)
        : [...prev.bookmarkedScenes, sceneId],
    }));
  }, [updateAndPersist]);

  const updateProfile = useCallback((profile: { playerName?: string; playerAvatar?: string; playerColor?: string }) => {
    updateAndPersist(prev => ({
      ...prev,
      ...(profile.playerName !== undefined && { playerName: profile.playerName }),
      ...(profile.playerAvatar !== undefined && { playerAvatar: profile.playerAvatar }),
      ...(profile.playerColor !== undefined && { playerColor: profile.playerColor }),
    }));
  }, [updateAndPersist]);

  const updateMemoryScore = useCallback((moves: number) => {
    updateAndPersist(prev => ({
      ...prev,
      memoryGamesPlayed: prev.memoryGamesPlayed + 1,
      memoryBestScore: prev.memoryBestScore === 0 ? moves : Math.min(prev.memoryBestScore, moves),
    }));
  }, [updateAndPersist]);

  const updateDhikrSession = useCallback((count: number) => {
    updateAndPersist(prev => ({
      ...prev,
      totalDhikr: prev.totalDhikr + count,
      totalDhikrSessions: prev.totalDhikrSessions + 1,
    }));
  }, [updateAndPersist]);

  const dismissAchievement = useCallback(() => {
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
      popupTimerRef.current = null;
    }
    setAchievementPopup(null);
  }, []);

  const checkAchievementsFn = useCallback(() => {
    const s = stateRef.current;
    const unlockedIds = getUnlockedAchievements({
      completedChapters: s.completedChapters,
      completedChallenges: s.completedChallenges,
      earnedBadges: s.earnedBadges,
      totalDhikr: s.totalDhikr,
      totalDhikrSessions: s.totalDhikrSessions,
      memoryBestScore: s.memoryBestScore,
      memoryGamesPlayed: s.memoryGamesPlayed,
      dailyStreak: s.dailyStreak,
      readingDays: s.readingDays,
      quizScores: s.quizScores,
      journalEntries: s.journalEntries,
      challengeXP: s.challengeXP,
    });

    const prevIds = s.achievements;
    const newIds = unlockedIds.filter(id => !prevIds.includes(id));

    if (newIds.length > 0) {
      const updatedAchievements = [...prevIds, ...newIds];
      updateAndPersist(prev => ({ ...prev, achievements: updatedAchievements }));

      // Show popup for the first new achievement
      const firstNew = getAchievement(newIds[0]);
      if (firstNew) {
        setAchievementPopup(firstNew);
        if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
        popupTimerRef.current = setTimeout(() => {
          setAchievementPopup(null);
          popupTimerRef.current = null;
        }, 4000);
      }
    }
  }, [updateAndPersist]);

  // Auto-check achievements after relevant state changes
  const updateDhikrSessionWithCheck = useCallback((count: number) => {
    updateDhikrSession(count);
    setTimeout(() => checkAchievementsFn(), 100);
  }, [updateDhikrSession, checkAchievementsFn]);

  const updateMemoryScoreWithCheck = useCallback((moves: number) => {
    updateMemoryScore(moves);
    setTimeout(() => checkAchievementsFn(), 100);
  }, [updateMemoryScore, checkAchievementsFn]);

  const setHasSeenOnboarding = useCallback(() => {
    updateAndPersist(prev => ({ ...prev, hasSeenOnboarding: true }));
  }, [updateAndPersist]);

  const completeChallenge = useCallback((date: string) => {
    updateAndPersist(prev => ({
      ...prev,
      completedChallenges: prev.completedChallenges.includes(date)
        ? prev.completedChallenges
        : [...prev.completedChallenges, date],
      challengeXP: prev.completedChallenges.includes(date)
        ? prev.challengeXP
        : prev.challengeXP + getDailyChallenge().xp,
    }));
  }, [updateAndPersist]);

  const completeChallengeWithCheck = useCallback((date: string) => {
    completeChallenge(date);
    setTimeout(() => checkAchievementsFn(), 100);
  }, [completeChallenge, checkAchievementsFn]);

  const completeChapterWithCheck = useCallback((id: string) => {
    completeChapter(id);
    setTimeout(() => checkAchievementsFn(), 100);
  }, [completeChapter, checkAchievementsFn]);

  const updateProfileWithCheck = useCallback((profile: { playerName?: string; playerAvatar?: string; playerColor?: string }) => {
    updateProfile(profile);
    setTimeout(() => checkAchievementsFn(), 100);
  }, [updateProfile, checkAchievementsFn]);

  const updateStreak = useCallback(() => {
    updateAndPersist(prev => {
      const today = getTodayString();
      const yesterday = getYesterdayString();

      if (prev.lastPlayDate === today) return prev; // Already counted today

      let newStreak = prev.dailyStreak;
      if (prev.lastPlayDate === yesterday) {
        newStreak += 1;
      } else if (prev.lastPlayDate !== today) {
        newStreak = 1;
      }

      return {
        ...prev,
        dailyStreak: newStreak,
        lastPlayDate: today,
        readingDays: prev.readingDays.includes(today)
          ? prev.readingDays
          : [...prev.readingDays, today],
      };
    });
  }, [updateAndPersist]);

  return (
    <AppContext.Provider value={{
      screen: state.screen, setScreen, navigateTo,
      selectedTomeId: state.selectedTomeId, selectTome,
      selectedChapterId: state.selectedChapterId, selectChapter,
      currentSceneId: state.currentSceneId, setCurrentScene,
      earnedBadges: state.earnedBadges, earnBadge,
      completedScenes: state.completedScenes, completeScene,
      completedChapters: state.completedChapters,
      quizScores: state.quizScores, setQuizScore,
      resetProgress, hydrate,
      settings: state.settings, updateSettings,
      journalEntries: state.journalEntries, addJournalEntry, deleteJournalEntry,
      screenHistory: state.screenHistory,
      bookmarkedScenes: state.bookmarkedScenes, toggleBookmark,
      dailyStreak: state.dailyStreak, lastPlayDate: state.lastPlayDate, updateStreak,
      hasSeenOnboarding: state.hasSeenOnboarding, setHasSeenOnboarding,
      completedChallenges: state.completedChallenges, completeChallenge: completeChallengeWithCheck, challengeXP: state.challengeXP,
      readingDays: state.readingDays,
      playerName: state.playerName, playerAvatar: state.playerAvatar, playerColor: state.playerColor, updateProfile: updateProfileWithCheck,
      memoryBestScore: state.memoryBestScore, memoryGamesPlayed: state.memoryGamesPlayed, updateMemoryScore: updateMemoryScoreWithCheck,
      totalDhikr: state.totalDhikr, totalDhikrSessions: state.totalDhikrSessions, updateDhikrSession: updateDhikrSessionWithCheck,
      achievements: state.achievements,
      achievementPopup, dismissAchievement, checkAchievements: checkAchievementsFn,
      completeChapter: completeChapterWithCheck,
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
