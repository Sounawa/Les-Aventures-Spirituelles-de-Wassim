export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  category: 'action' | 'reflection' | 'dhikr' | 'kindness';
  icon: string;
  xp: number;
}

export const dailyChallenges: DailyChallenge[] = [
  // Actions
  { id: 'dc-1', title: 'Souris à quelqu\'un', description: 'Fais sourire au moins une personne aujourd\'hui par un acte de gentillesse.', category: 'kindness', icon: '😊', xp: 10 },
  { id: 'dc-2', title: 'Aide tes parents', description: 'Propose d\'aider tes parents dans une tâche ménagère sans qu\'on te le demande.', category: 'action', icon: '🏠', xp: 15 },
  { id: 'dc-3', title: 'Lis une page du Coran', description: 'Prends 5 minutes pour lire et méditer une page du Coran.', category: 'dhikr', icon: '📖', xp: 20 },
  { id: 'dc-4', title: 'Dis Bismillah', description: 'N\'oublie pas de dire Bismillah avant chaque action aujourd\'hui.', category: 'dhikr', icon: '🤲', xp: 10 },
  { id: 'dc-5', title: 'Nettoie ta chambre', description: 'Range et nettoie ta chambre avec soin, comme si tu préparais un lieu de prière.', category: 'action', icon: '✨', xp: 15 },
  // Reflections
  { id: 'dc-6', title: 'Écris ta gratitude', description: 'Écris 3 choses pour lesquelles tu es reconnaissant envers Allah aujourd\'hui.', category: 'reflection', icon: '📝', xp: 15 },
  { id: 'dc-7', title: 'Pense à tes erreurs', description: 'Réfléchis à un moment où tu as fait une erreur et comment tu pourrais faire mieux.', category: 'reflection', icon: '🪞', xp: 20 },
  { id: 'dc-8', title: 'Observe la nature', description: 'Passe 5 minutes dehors à observer la création d\'Allah. Qu\'est-ce que tu remarques ?', category: 'reflection', icon: '🌿', xp: 10 },
  { id: 'dc-9', title: 'Dessine ton cœur', description: 'Dessine ce que ton cœur ressent aujourd\'hui. Est-il paisible ? Agité ?', category: 'reflection', icon: '🎨', xp: 15 },
  // Dhikr
  { id: 'dc-10', title: '100 fois Salawat', description: 'Récite 100 fois "Allahoumma salli \'ala Muhammad" avec le cœur présent.', category: 'dhikr', icon: '📿', xp: 25 },
  { id: 'dc-11', title: 'Istighfar 100 fois', description: 'Récite "Astaghfirullah" 100 fois en ressentant sincérement le regret.', category: 'dhikr', icon: '💫', xp: 20 },
  { id: 'dc-12', title: 'Dhikr du matin', description: 'Récite les invocations du matin avec concentration et présence du cœur.', category: 'dhikr', icon: '🌅', xp: 25 },
  { id: 'dc-13', title: 'Dhikr du soir', description: 'Récite les invocations du soir avant de dormir, en méditant chaque parole.', category: 'dhikr', icon: '🌙', xp: 25 },
  // Kindness
  { id: 'dc-14', title: 'Donne quelque chose', description: 'Donne un jouet, un livre ou de la nourriture à quelqu\'un qui en a besoin.', category: 'kindness', icon: '🎁', xp: 20 },
  { id: 'dc-15', title: 'Excuse-toi', description: 'Si tu as blessé quelqu\'un, présente-lui des excuses sincères.', category: 'kindness', icon: '💝', xp: 20 },
  { id: 'dc-16', title: 'Complimente quelqu\'un', description: 'Fais un compliment sincère à 3 personnes différentes aujourd\'hui.', category: 'kindness', icon: '🌟', xp: 15 },
  { id: 'dc-17', title: 'Partage ton repas', description: 'Si tu peux, partage une partie de ton repas avec quelqu\'un.', category: 'kindness', icon: '🍽️', xp: 20 },
  { id: 'dc-18', title: 'Prie pour quelqu\'un', description: 'Choisis 3 personnes et fais une dou\'a sincère pour chacune d\'elles.', category: 'dhikr', icon: '🤲', xp: 15 },
  { id: 'dc-19', title: 'Patience test', description: 'Aujourd\'hui, quand quelque chose te contrarie, respire profondément 3 fois avant de réagir.', category: 'action', icon: '🧘', xp: 25 },
  { id: 'dc-20', title: 'Secret de bonté', description: 'Fais une bonne action en secret — que personne ne sache que c\'est toi.', category: 'kindness', icon: '🤫', xp: 30 },
];

// Get challenge based on day of year for consistency
export function getDailyChallenge(): DailyChallenge {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % dailyChallenges.length;
  return dailyChallenges[index];
}

export const categoryLabels: Record<string, { label: string; color: string }> = {
  action: { label: 'Action', color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400' },
  reflection: { label: 'Réflexion', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
  dhikr: { label: 'Dhikr', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
  kindness: { label: 'Gentillesse', color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400' },
};
