export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {

  // ================================================================
  // TOME 1 — Le Jardin Secret (الحديقة السرية)
  // ================================================================

  wt1c1: [
    { question: "Que découvre Wassim derrière la petite porte verte ?", options: ["Un parc d'attractions", "Un jardin magique avec des fleurs et des papillons", "Une bibliothèque", "Une grotte"], correctIndex: 1, explanation: "Wassim découvre un jardin magique rempli de fleurs de toutes les couleurs, de papillons bleus et dorés, et d'un petit ruisseau ! C'est la création d'Allah ! 🌺🦋" },
    { question: "Que fait Wassim avec son biscuit au miel ?", options: ["Il le mange tout seul", "Il le partage avec le petit chat gris", "Il le jette", "Il le cache"], correctIndex: 1, explanation: "Wassim partage son biscuit avec le petit chat affamé ! En Islam, on doit être gentil avec les animaux. Le Prophète ﷺ adorait les animaux ! 🐱💛" },
    { question: "Que veut dire Alhamdulillah ?", options: ["Bonjour", "Merci Allah !", "Au revoir", "Je t'aime"], correctIndex: 1, explanation: "Alhamdulillah veut dire « Merci Allah ! » ou « Louange à Allah ! ». On le dit pour remercier Allah pour toutes les belles choses qu'Il a créées ! 🌟🤲" },
    { question: "Comment s'appelle le grand frère de Wassim ?", options: ["Nawfel", "Mehdi", "Souhayl", "Sidi Mu'adh"], correctIndex: 2, explanation: "Souhayl est le grand frère de Wassim. Il a 9 ans et il est très sage et gentil. Il aide Wassim à comprendre que tout ce qui est beau vient d'Allah ! 💪" },
  ],

  wt1c2: [
    { question: "Comment s'appelle le vieil homme aux yeux verts ?", options: ["Sidi Ahmad", "Sidi Mu'adh", "Jeddi", "Baba Mehdi"], correctIndex: 1, explanation: "Sidi Mu'adh est un vieil homme très sage. Il a une grande barbe blanche et des yeux verts extraordinaires ! Il apprend à Wassim à dire Alhamdulillah ! 🌿💚" },
    { question: "Pourquoi le Prophète Muhammad ﷺ a-t-il coupé sa manche ?", options: ["Parce qu'elle était sale", "Pour ne pas réveiller un chat qui dormait dessus", "Parce qu'il avait chaud", "Par accident"], correctIndex: 1, explanation: "Le Prophète ﷺ a préféré couper sa manche plutôt que de déveiller son chat Muezza qui dormait dessus ! Il aimait BEAUCOUP les animaux ! 😻💛" },
    { question: "Que dit Wassim avant de s'endormir ?", options: ["Bonne nuit maman", "Alhamdulillah pour tout !", "Je veux jouer", "Une histoire s'il te plaît"], correctIndex: 1, explanation: "Wassim dit Alhamdulillah pour les fleurs, le soleil, le petit chat, Sidi Mu'adh, papa et maman... pour TOUT ! C'est ce qu'un bon musulman fait avant de dormir ! 🌙🤲" },
    { question: "Qui a créé les fleurs, le soleil et les animaux ?", options: ["Souhayl", "Les parents de Wassim", "Allah", "Sidi Mu'adh"], correctIndex: 2, explanation: "C'est Allah qui a créé TOUT ! Les fleurs 🌺, le soleil ☀️, les animaux 🐱... Tout est un cadeau d'Allah ! C'est pour ça qu'on dit Alhamdulillah ! 🌟" },
  ]
};
