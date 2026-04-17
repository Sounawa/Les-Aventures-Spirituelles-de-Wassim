import type { Tome } from '@/types/story';
import { tome1 } from './tome1';

export const tomes: Tome[] = [tome1];

export function getTome(id: string): Tome | undefined {
  return tomes.find(t => t.id === id);
}

export function getChapter(tomeId: string, chapterId: string) {
  const tome = getTome(tomeId);
  return tome?.chapters.find(c => c.id === chapterId);
}

export function getScene(tomeId: string, chapterId: string, sceneId: string) {
  const chapter = getChapter(tomeId, chapterId);
  return chapter?.scenes.find(s => s.id === sceneId);
}
