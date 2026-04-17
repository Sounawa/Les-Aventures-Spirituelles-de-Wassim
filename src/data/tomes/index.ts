import type { Tome } from '@/types/story';
import { tome1_souhayl } from './tome1_souhayl';
import { tome2_souhayl } from './tome2_souhayl';
import { tome3_souhayl } from './tome3_souhayl';
import { tome4_souhayl } from './tome4_souhayl';
import { tome5_souhayl } from './tome5_souhayl';

export const tomes: Tome[] = [tome1_souhayl, tome2_souhayl, tome3_souhayl, tome4_souhayl, tome5_souhayl];

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
