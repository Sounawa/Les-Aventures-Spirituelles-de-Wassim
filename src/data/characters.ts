import { Character } from '@/types/story';

export const characters: Character[] = [
  {
    id: 'nawfel',
    name: 'Nawfel',
    nameAr: 'نوفل',
    role: 'Héros principal',
    description: 'Curieux, courageux mais parfois impulsif. Il porte en lui une soif de connaissance spirituelle qui le pousse à chercher la vérité. Il est le seul de sa fratrie qui peut pénétrer dans son monde intérieur.',
    age: '8 ans (bientôt 9)',
    appearance: 'Garçon de 8 ans, cheveux bruns, yeux grands et curieux, tenue simple, expression déterminée mais innocente',
    color: '#D97706',
    icon: '🌟',
  },
  {
    id: 'mehdi',
    name: 'Mehdi',
    nameAr: 'مهدي',
    role: 'Père de Nawfel — Guide bienveillant',
    description: 'Père aimant et sage, déjà initié au Tassawuf. Il guide sa famille avec douceur et sagesse sur le chemin spirituel. Il accompagne Nawfel dans sa découverte mais laisse Sidi Mu\'adh faire l\'enseignement principal.',
    age: 'Dans la trentaine',
    appearance: 'Homme dans la trentaine, barbe soignée, visage doux et serein, portant parfois un djellaba',
    color: '#059669',
    icon: '🧔',
  },
  {
    id: 'aziza',
    name: 'Aziza',
    nameAr: 'عزيزة',
    role: 'Mère de Nawfel — Cœur de la famille',
    description: 'Mère tendre et pleine de sagesse, elle prie avec une ferveur qui illumine la maison. Elle est aussi initiée au Tassawuf. Elle est le pilier affectif de la famille.',
    age: 'Dans la trentaine',
    appearance: 'Femme voilée, visage chaleureux, yeux brillants de tendresse, souvent représentée en prière ou à la cuisine',
    color: '#DC2626',
    icon: '👩',
  },
  {
    id: 'sidimuadh',
    name: 'Sidi Mu\'adh',
    nameAr: 'سيدي معاذ',
    role: 'Shaykh — Maître spirituel',
    description: 'Le maître spirituel de la famille. Ses yeux portent la lumière de la connaissance. Il guide ceux qui cherchent Allah avec patience et amour. Il est le personnage clé qui enseigne à Nawfel les concepts du Tassawuf. Ses explications sont adaptées au niveau de compréhension d\'un enfant de 8 ans.',
    age: 'Âgé',
    appearance: 'Homme âgé, barbe blanche longue, yeux lumineux, vêtements blancs simples, auréole de lumière subtile',
    color: '#7C3AED',
    icon: '🧓',
  },
  {
    id: 'souhayl',
    name: 'Souhayl',
    nameAr: 'سهيل',
    role: 'Grand frère protecteur',
    description: 'Le grand frère de Nawfel, protecteur et raisonnable. Il veille sur ses frères avec attention et maturité. Il découvrira progressivement le monde spirituel mais n\'y entrera pas de la même manière que Nawfel. Il est le modèle de sagesse fraternelle.',
    age: '9 ans (bientôt 10)',
    appearance: 'Garçon de 9 ans, plus grand que Nawfel, expression mature et bienveillante, posture protectrice',
    color: '#2563EB',
    icon: '🧑',
  },
  {
    id: 'wassim',
    name: 'Wassim',
    nameAr: 'وسيم',
    role: 'Petit frère — Le pur',
    description: 'Le petit frère de Nawfel, innocent et pur. Il possède un don unique appelé "Basira" (vision du cœur) qui lui permet de voir les auras spirituelles des gens et les monstres intérieurs, sans pouvoir entrer dans le monde intérieur. Sa pureté de cœur fait de lui un allié essentiel pour Nawfel.',
    age: '6 ans (bientôt 7)',
    appearance: 'Petit garçon de 6 ans, grands yeux innocents et lumineux, souvent avec son doudou, expression émerveillée',
    color: '#F59E0B',
    icon: '👶',
  },
];

export function getCharacter(id: string): Character | undefined {
  return characters.find(c => c.id === id);
}
