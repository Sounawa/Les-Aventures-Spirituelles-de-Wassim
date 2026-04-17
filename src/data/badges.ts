import { Badge } from '@/types/story';

export const badges: Badge[] = [
  {
    id: 'sabr',
    name: 'Sabr',
    nameAr: 'الصبر',
    description: 'La Patience — Savoir attendre avec calme et confiance, même quand c\'est difficile.',
    icon: '⏳',
    color: '#059669',
  },
  {
    id: 'ikhlas',
    name: 'Ikhlas',
    nameAr: 'الإخلاص',
    description: 'La Sincérité — Faire les choses uniquement pour Allah, sans chercher la reconnaissance.',
    icon: '💎',
    color: '#7C3AED',
  },
  {
    id: 'tawakkul',
    name: 'Tawakkul',
    nameAr: 'التوكل',
    description: 'La Confiance en Allah — Se confier entièrement à Allah dans toutes les situations.',
    icon: '🕊️',
    color: '#0EA5E9',
  },
  {
    id: 'shukr',
    name: 'Shukr',
    nameAr: 'الشكر',
    description: 'La Gratitude — Remercier Allah pour toutes Ses bénédictions, visibles et invisibles.',
    icon: '🌻',
    color: '#D97706',
  },
  {
    id: 'tawadu',
    name: 'Al-Tawadu\'',
    nameAr: 'التواضع',
    description: 'L\'Humilité — Reconnaître que toute grandeur vient d\'Allah seul.',
    icon: '🌿',
    color: '#10B981',
  },
  {
    id: 'hikma',
    name: 'Al-Hikma',
    nameAr: 'الحكمة',
    description: 'La Sagesse — Comprendre avec le cœur ce que l\'esprit seul ne peut saisir.',
    icon: '📖',
    color: '#6366F1',
  },
  {
    id: 'rahma',
    name: 'Al-Rahma',
    nameAr: 'الرحمة',
    description: 'La Miséricorde — Être doux et compatissant envers toutes les créatures d\'Allah.',
    icon: '💝',
    color: '#EC4899',
  },
  {
    id: 'ihsan',
    name: 'Al-Ihsan',
    nameAr: 'الإحسان',
    description: 'L\'Excellence spirituelle — Adorer Allah comme si on Le voyait, car Lui nous voit.',
    icon: '✨',
    color: '#F59E0B',
  },
];

export function getBadge(id: string): Badge | undefined {
  return badges.find(b => b.id === id);
}
