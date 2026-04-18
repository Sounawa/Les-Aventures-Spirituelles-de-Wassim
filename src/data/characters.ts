import { Character } from '@/types/story';

export const characters: Character[] = [
  {
    id: 'souhayl',
    name: 'Souhayl',
    nameAr: 'سهيل',
    role: 'Héros principal',
    description: "Curieux, mature et réfléchi. Il porte en lui une soif de savoir et de compréhension qui le pousse à chercher la vérité dans chaque situation. Souhayl approche le monde avec la patience et la rigueur d'un futur savant. Il est le gardien de la bibliothèque secrète sous la Qarawiyyin.",
    age: '9 ans (bientôt 10)',
    appearance: 'Garçon de 9 ans, cheveux noirs et bouclés, yeux bruns profonds et curieux, bonnet blanc, tenue simple et soignée, expression réfléchie mais déterminée',
    color: '#3B82F6',
    icon: '🌟',
  },
  {
    id: 'nawfel',
    name: 'Nawfel',
    nameAr: 'نوفل',
    role: 'Frère cadet',
    description: "Frère cadet de Souhayl, courageux mais parfois impulsif. Il admire son grand frère et veut le suivre partout. Nawfel possède un cœur pur et une capacité à voir au-delà des apparences que même Souhayl lui envie parfois.",
    age: '7 ans',
    appearance: 'Garçon de 7 ans, cheveux bruns, yeux grands et curieux, tenue simple, expression déterminée mais innocente',
    color: '#D97706',
    icon: '🧑',
  },
  {
    id: 'mehdi',
    name: 'Mehdi',
    nameAr: 'مهدي',
    role: 'Père — Guide bienveillant',
    description: "Père aimant et sage, professeur à la madrasa Bou Inania de Fès. Il enseigne la grammaire arabe et les fondements du fiqh. Il guide sa famille avec douceur et sagesse sur le chemin du savoir et de la foi.",
    age: 'Dans la trentaine',
    appearance: 'Homme dans la trentaine, barbe taillée avec soin, visage doux et serein, djellaba beige, babouches en cuir brun',
    color: '#059669',
    icon: '🧔',
  },
  {
    id: 'aziza',
    name: 'Aziza',
    nameAr: 'عزيزة',
    role: 'Mère — Cœur de la famille',
    description: "Mère tendre et pleine de sagesse, elle prie avec une ferveur qui illumine la maison. Ses mots sont toujours justes et son intuition maternelle est infaillible. Elle descend d'une longue lignée de savants de Fès et porte en elle la mémoire de la bibliothèque cachée.",
    age: 'Dans la trentaine',
    appearance: "Femme voilée, hijab vert olive, visage chaleureux et lumineux, yeux brillants de tendresse et d'intelligence, souvent à la cuisine ou en prière",
    color: '#E11D48',
    icon: '👩',
  },
  {
    id: 'sidimuadh',
    name: 'Sidi Mu\'adh',
    nameAr: 'سيدي معاذ',
    role: 'Shaykh — Maître spirituel et savant',
    description: "Le maître spirituel de la famille et gardien de la bibliothèque secrète sous la Qarawiyyin. Ses yeux verts extraordinaires portent la lumière de siècles de savoir. Il initie Souhayl aux histoires des plus grands savants de l'Islam à travers un manuscrit magique qui fait revivre les mémoires du passé.",
    age: 'Âgé',
    appearance: "Homme âgé, barbe blanche comme la laine, yeux verts d'émeraude extraordinaires, djellaba blanche immaculée, auréole de lumière subtile",
    color: '#7C3AED',
    icon: '🧓',
  },
  {
    id: 'wassim',
    name: 'Wassim',
    nameAr: 'وسيم',
    role: 'Petit frère — Le pur',
    description: "Le plus jeune de la famille, innocent et lumineux. Wassim possède un don naturel pour percevoir la sincérité chez les gens. Sa pureté de cœur fait de lui un allié précieux pour Souhayl, même s'il est trop jeune pour comprendre les mystères de la bibliothèque.",
    age: '6 ans (bientôt 7)',
    appearance: 'Petit garçon de 6 ans, grands yeux innocents et lumineux, joues rondes, souvent avec un jouet ou son doudou, expression émerveillée',
    color: '#EAB308',
    icon: '👶',
  },
];

export function getCharacter(id: string): Character | undefined {
  return characters.find(c => c.id === id);
}
