import type { Tome } from '@/types/story';
import { tome1_wassim } from './tome1_wassim';
import { tome2_wassim } from './tome2_wassim';
import { tome3_wassim } from './tome3_wassim';
import { tome4_wassim } from './tome4_wassim';
import { tome5_wassim } from './tome5_wassim';

export const tomes: Tome[] = [tome1_wassim, tome2_wassim, tome3_wassim, tome4_wassim, tome5_wassim];

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
