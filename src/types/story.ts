export interface Character {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  description: string;
  age?: string;
  appearance: string;
  color: string;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  icon: string;
  color: string;
}

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  badgeId?: string;
  isCorrect?: boolean;
}

export interface Dialogue {
  characterId: string;
  text: string;
  emotion?: 'neutral' | 'happy' | 'sad' | 'angry' | 'surprised' | 'wise' | 'scared' | 'determined';
}

export interface Lesson {
  title: string;
  content: string;
  quote: string;
  source: string;
}

export interface Scene {
  id: string;
  chapterId: string;
  title: string;
  narration: string;
  dialogues: Dialogue[];
  choices: Choice[];
  nextSceneId?: string;
  background: 'bedroom' | 'garden' | 'zawiyah' | 'kitchen' | 'school' | 'inner_world' | 'desert' | 'golden_city' | 'oasis' | 'door' | 'battle' | 'home' | 'street' | 'classroom';
  isEnding?: boolean;
  lesson?: Lesson;
  earnedBadgeId?: string;
}

export interface Chapter {
  id: string;
  tomeId: string;
  number: number;
  title: string;
  titleAr: string;
  scenes: Scene[];
  lessons: Lesson[];
}

export interface Tome {
  id: string;
  number: number;
  title: string;
  titleAr: string;
  subtitle: string;
  description: string;
  theme: string;
  coverImage: string;
  chapters: Chapter[];
  monsters: string[];
  spiritualLesson: string;
}

export type ScreenType =
  | 'home'
  | 'tome_select'
  | 'chapter_select'
  | 'story'
  | 'character_gallery'
  | 'badge_collection'
  | 'lesson'
  | 'quiz'
  | 'settings';

export interface GameState {
  currentScreen: ScreenType;
  selectedTomeId: string | null;
  selectedChapterId: string | null;
  currentSceneId: string | null;
  earnedBadges: string[];
  completedScenes: string[];
  completedChapters: string[];
  completedTomes: string[];
  choicesMade: Record<string, string>;
  settings: {
    typewriterSpeed: number;
    soundEnabled: boolean;
    fontSize: 'normal' | 'large' | 'xlarge';
  };
  // Navigation history for back button
  screenHistory: ScreenType[];
}
