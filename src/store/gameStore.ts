import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { ScreenType, GameState } from '@/types/story';

interface GameStore extends GameState {
  // Navigation
  setScreen: (screen: ScreenType) => void;
  goBack: () => void;
  selectTome: (tomeId: string) => void;
  selectChapter: (chapterId: string) => void;
  setCurrentScene: (sceneId: string) => void;

  // Progression
  completeScene: (sceneId: string) => void;
  completeChapter: (chapterId: string) => void;
  completeTome: (tomeId: string) => void;
  earnBadge: (badgeId: string) => void;
  makeChoice: (sceneId: string, choiceId: string) => void;

  // Settings
  setTypewriterSpeed: (speed: number) => void;
  toggleSound: () => void;
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;

  // Reset
  resetProgress: () => void;
  // Hydration
  _hasHydrated: boolean;
  _setHasHydrated: (state: boolean) => void;
}

const initialState: GameState = {
  currentScreen: 'home',
  selectedTomeId: null,
  selectedChapterId: null,
  currentSceneId: null,
  earnedBadges: [],
  completedScenes: [],
  completedChapters: [],
  completedTomes: [],
  choicesMade: {},
  settings: {
    typewriterSpeed: 30,
    soundEnabled: false,
    fontSize: 'normal',
  },
  screenHistory: [],
};

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      ...initialState,
      _hasHydrated: false,
      _setHasHydrated: (state) => set({ _hasHydrated: state }),

      setScreen: (screen) =>
        set((state) => ({
          currentScreen: screen,
          screenHistory: [...state.screenHistory, state.currentScreen],
        })),

      goBack: () =>
        set((state) => {
          const history = [...state.screenHistory];
          const prevScreen = history.pop() || 'home';
          return {
            currentScreen: prevScreen,
            screenHistory: history,
          };
        }),

      selectTome: (tomeId) => set({ selectedTomeId: tomeId }),
      selectChapter: (chapterId) => set({ selectedChapterId: chapterId }),
      setCurrentScene: (sceneId) => set({ currentSceneId: sceneId }),

      completeScene: (sceneId) =>
        set((state) => ({
          completedScenes: state.completedScenes.includes(sceneId)
            ? state.completedScenes
            : [...state.completedScenes, sceneId],
        })),

      completeChapter: (chapterId) =>
        set((state) => ({
          completedChapters: state.completedChapters.includes(chapterId)
            ? state.completedChapters
            : [...state.completedChapters, chapterId],
        })),

      completeTome: (tomeId) =>
        set((state) => ({
          completedTomes: state.completedTomes.includes(tomeId)
            ? state.completedTomes
            : [...state.completedTomes, tomeId],
        })),

      earnBadge: (badgeId) =>
        set((state) => ({
          earnedBadges: state.earnedBadges.includes(badgeId)
            ? state.earnedBadges
            : [...state.earnedBadges, badgeId],
        })),

      makeChoice: (sceneId, choiceId) =>
        set((state) => ({
          choicesMade: { ...state.choicesMade, [sceneId]: choiceId },
        })),

      setTypewriterSpeed: (speed) =>
        set((state) => ({
          settings: { ...state.settings, typewriterSpeed: speed },
        })),

      toggleSound: () =>
        set((state) => ({
          settings: { ...state.settings, soundEnabled: !state.settings.soundEnabled },
        })),

      setFontSize: (size) =>
        set((state) => ({
          settings: { ...state.settings, fontSize: size },
        })),

      resetProgress: () => set(initialState),
    }),
    {
      name: 'souhayl-adventures-storage',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') return localStorage;
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({
        currentScreen: state.currentScreen,
        selectedTomeId: state.selectedTomeId,
        selectedChapterId: state.selectedChapterId,
        currentSceneId: state.currentSceneId,
        earnedBadges: state.earnedBadges,
        completedScenes: state.completedScenes,
        completedChapters: state.completedChapters,
        completedTomes: state.completedTomes,
        choicesMade: state.choicesMade,
        settings: state.settings,
        screenHistory: state.screenHistory,
      }),
      onRehydrateStorage: () => (state) => {
        state?._setHasHydrated(true);
      },
    }
  )
);
