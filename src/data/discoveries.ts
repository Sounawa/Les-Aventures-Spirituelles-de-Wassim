// ─────────────────────────────────────────────────────
// Islamic Discoveries Data — 20 curated items
// Categories: histoire, science, art, geographie, nature
// ─────────────────────────────────────────────────────

export interface Discovery {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'histoire' | 'science' | 'art' | 'geographie' | 'nature';
}

export type DiscoveryCategory = Discovery['category'];

export const discoveryCategoryConfig: Record<DiscoveryCategory, {
  label: string;
  icon: string;
  color: string;        // pill text color
  bg: string;           // pill background
  cardAccent: string;   // subtle card accent (top border or glow)
}> = {
  histoire: {
    label: 'Histoire',
    icon: '📜',
    color: 'text-teal-700 dark:text-teal-300',
    bg: 'bg-teal-100 dark:bg-teal-900/40',
    cardAccent: 'border-t-teal-400 dark:border-t-teal-500',
  },
  science: {
    label: 'Science',
    icon: '🔬',
    color: 'text-emerald-700 dark:text-emerald-300',
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
    cardAccent: 'border-t-emerald-400 dark:border-t-emerald-500',
  },
  art: {
    label: 'Art',
    icon: '🎨',
    color: 'text-rose-700 dark:text-rose-300',
    bg: 'bg-rose-100 dark:bg-rose-900/40',
    cardAccent: 'border-t-rose-400 dark:border-t-rose-500',
  },
  geographie: {
    label: 'Géographie',
    icon: '🗺️',
    color: 'text-amber-700 dark:text-amber-300',
    bg: 'bg-amber-100 dark:bg-amber-900/40',
    cardAccent: 'border-t-amber-400 dark:border-t-amber-500',
  },
  nature: {
    label: 'Nature',
    icon: '🌿',
    color: 'text-green-700 dark:text-green-300',
    bg: 'bg-green-100 dark:bg-green-900/40',
    cardAccent: 'border-t-green-400 dark:border-t-green-500',
  },
};

export const discoveries: Discovery[] = [
  // ── Histoire (4 items) ──
  {
    id: 'd1',
    icon: '🕌',
    title: 'La première université du monde',
    description: "L'Université Al-Qarawiyyin à Fès, fondée en 859 par Fatima Al-Fihri, est la plus ancienne université encore en activité !",
    category: 'histoire',
  },
  {
    id: 'd2',
    icon: '🌍',
    title: "L'âge d'or de Bagdad",
    description: "Au 8e siècle, Bagdad était la capitale intellectuelle du monde. Sa Maison de la Sagesse contenait des millions de livres traduits du grec, du perse et de l'indien.",
    category: 'histoire',
  },
  {
    id: 'd3',
    icon: '🗺️',
    title: 'Le plus grand empire',
    description: "L'Empire ottoman, fondé en 1299, a été l'un des plus grands de l'histoire, s'étendant sur l'Afrique du Nord, le Moyen-Orient et l'Europe du Sud-Est.",
    category: 'histoire',
  },
  {
    id: 'd4',
    icon: '🏰',
    title: "Les châteaux du Maroc",
    description: "Les kasbahs du Maroc, comme Aït Benhaddou, sont de magnifiques forteresses en terre crue. Elles ont été utilisées comme décors dans des films comme Gladiator !",
    category: 'histoire',
  },

  // ── Science (6 items) ──
  {
    id: 'd5',
    icon: '🔢',
    title: 'Les chiffres arabes',
    description: "Les chiffres qu'on utilise aujourd'hui (0, 1, 2, 3…) ont été inventés par les mathématiciens arabes et indiens. Le zéro en particulier a révolutionné les maths !",
    category: 'science',
  },
  {
    id: 'd6',
    icon: '⭐',
    title: "Les étoiles et l'Islam",
    description: "Beaucoup d'étoiles portent des noms arabes ! Bételgeuse, Rigel, Aldebaran, Deneb… Les astronomes musulmans ont catalogué plus de 1000 étoiles au Moyen Âge.",
    category: 'science',
  },
  {
    id: 'd7',
    icon: '📚',
    title: 'Ibn Sina (Avicenne)',
    description: "Ibn Sina a écrit le Canon de la Médecine, un livre utilisé comme référence médicale en Europe pendant plus de 500 ans !",
    category: 'science',
  },
  {
    id: 'd8',
    icon: '🧮',
    title: "Al-Khawarizmi, père de l'algèbre",
    description: "Le mot « algèbre » vient du livre d'Al-Khawarizmi : Al-Jabr. Ce mathématicien persan du 9e siècle a aussi donné son nom au mot « algorithme » !",
    category: 'science',
  },
  {
    id: 'd9',
    icon: '🔭',
    title: "Ibn al-Haytham et l'optique",
    description: "Ce savant du 10e siècle a expliqué comment fonctionne la vision humaine. Il a prouvé que la lumière entre dans l'œil et non l'inverse !",
    category: 'science',
  },
  {
    id: 'd10',
    icon: '✈️',
    title: 'Abbas Ibn Firnas, le premier vol',
    description: "En 875, le savant andalou Abbas Ibn Firnas a tenté de voler avec des ailes en bois et en soie ! Il a plané pendant quelques minutes.",
    category: 'science',
  },

  // ── Art (4 items) ──
  {
    id: 'd11',
    icon: '🏛️',
    title: "L'Alhambra de Grenade",
    description: "L'Alhambra, chef-d'œuvre de l'architecture islamique en Espagne, est décorée de motifs géométriques si complexes que les scientifiques les étudient encore !",
    category: 'art',
  },
  {
    id: 'd12',
    icon: '🎨',
    title: "L'art de la calligraphie arabe",
    description: "La calligraphie arabe est l'un des plus beaux arts islamiques. Il existe plus de 20 styles différents, comme le naskh, le koufique et le thuluth !",
    category: 'art',
  },
  {
    id: 'd13',
    icon: '💎',
    title: "L'architecture des mosquées",
    description: "Les mosquées sont reconnaissables à leurs dômes et minarets. La Mosquée Bleue d'Istanbul possède plus de 20 000 carreaux de céramique à la main !",
    category: 'art',
  },
  {
    id: 'd14',
    icon: '✨',
    title: "Les motifs géométriques islamiques",
    description: "L'art islamique utilise des motifs géométriques infinis car il décourage les images de personnes. Ces motifs représentent l'infini et l'unité d'Allah.",
    category: 'art',
  },

  // ── Géographie (3 items) ──
  {
    id: 'd15',
    icon: '🧭',
    title: 'Al-Idrissi et la cartographie',
    description: "Le géographe marocain Al-Idrissi a créé en 1154 l'une des cartes les plus précises du monde médiéval, utilisée par les navigateurs pendant des siècles.",
    category: 'geographie',
  },
  {
    id: 'd16',
    icon: '🌊',
    title: 'La navigation arabe',
    description: "Les marins arabes utilisaient un instrument appelé kamal pour mesurer la hauteur des étoiles et se repérer en mer, bien avant la boussole européenne !",
    category: 'geographie',
  },
  {
    id: 'd17',
    icon: '🏜️',
    title: 'Le Maroc, pays des contrastes',
    description: "Le Maroc possède des paysages incroyables : les montagnes de l'Atlas, le désert du Sahara, les forêts de cèdres et les plages de l'Atlantique !",
    category: 'geographie',
  },

  // ── Nature (3 items) ──
  {
    id: 'd18',
    icon: '🍯',
    title: 'Le miel dans le Coran',
    description: "Le Coran appelle le miel « une guérison pour les gens » (16:69). Le Prophète Muhammad (ﷺ) recommandait de consommer du miel pour rester en bonne santé.",
    category: 'nature',
  },
  {
    id: 'd19',
    icon: '🌊',
    title: 'La mer dans le Coran',
    description: "Le Coran mentionne la mer plus de 40 fois ! Allah dit qu'Il a créé « tout ce qui vit dans l'eau » (24:45) et que les vagues portent des bateaux.",
    category: 'nature',
  },
  {
    id: 'd20',
    icon: '🌅',
    title: 'Les montagnes dans le Coran',
    description: "Le Coran compare les montagnes à des « piquets » qui stabilisent la Terre (78:7). Les géologues modernes confirment que les racines des montagnes ancrent la croûte terrestre !",
    category: 'nature',
  },
];

/**
 * Returns a day-seeded shuffled subset of discoveries.
 * Ensures a fresh but stable daily order.
 */
export function getShuffledDiscoveries(count: number = 20): Discovery[] {
  const shuffled = [...discoveries];
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = ((seed * (i + 1)) % (i + 1) + i + 1) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
