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

  // ================================================================
  // TOME 2 — Les Étoiles Parlantes (النجوم المتكلمة)
  // ================================================================

  wt2c1: [
    { question: "Pourquoi Wassim n'arrive-t-il pas à dormir ?", options: ["Il a mangé trop de bonbons", "Il a peur du noir", "Il est trop content", "Il a mal aux pieds"], correctIndex: 1, explanation: "Wassim a peur du noir ! 😟 Mais maman Aziza vient le rassurer. Elle lui montre les étoiles et lui dit qu'Allah veille toujours sur lui ! 🌙" },
    { question: "Que veut dire SubhanAllah ?", options: ["Merci Allah", "Allah est parfait !", "Je t'aime Allah", "Allah est grand"], correctIndex: 1, explanation: "SubhanAllah veut dire « Gloire à Allah » ou « Allah est parfait ! ». On le dit quand on voit quelque chose de beau comme les étoiles ! ⭐✨" },
    { question: "Que fait Wassim à la fin du chapitre ?", options: ["Il cache sous la couverture", "Il ferme les yeux et fait confiance à Allah", "Il appelle Souhayl", "Il allume la lumière"], correctIndex: 1, explanation: "Wassim ferme les yeux et fait confiance à Allah ! C'est le Tawakkul : faire confiance à Allah même dans le noir ! Allah ne dort jamais et Il veille sur nous ! 🤲" },
    { question: "Qui console Wassim quand il a peur du noir ?", options: ["Souhayl", "Nawfel", "Maman Aziza", "Sidi Mu'adh"], correctIndex: 2, explanation: "C'est maman Aziza qui vient rassurer Wassim ! Elle lui montre les étoiles et lui dit que Allah est toujours avec lui, même dans le noir ! 💕🌙" },
  ],

  // ================================================================
  // TOME 3 — Le Petit Voyage (الرحلة الصغيرة)
  // ================================================================

  wt3c1: [
    { question: "Où la famille va-t-elle en voiture ?", options: ["À la plage", "Chez Jeddi et Jedda à la campagne", "À l'école", "Au parc"], correctIndex: 1, explanation: "La famille part chez Jeddi et Jedda (le grand-père et la grand-mère) à la campagne ! Wassim est TROP excité ! 🚗✨" },
    { question: "Que veut dire Sabr (الصبر) ?", options: ["La force", "La patience", "La vitesse", "La joie"], correctIndex: 1, explanation: "Sabr veut dire la patience ! C'est savoir attendre sans se plaindre. Le Prophète ﷺ a dit que la patience est une lumière ! 🌿💚" },
    { question: "Que voit Wassim par la fenêtre de la voiture ?", options: ["Des magasins", "Des montagnes immenses avec de la neige !", "Des écoles", "Des hôpitaux"], correctIndex: 1, explanation: "Wassim voit de GRANDES montagnes avec un peu de neige blanche au sommet ! C'est magnifique ! C'est la création d'Allah ! ⛰️❄️" },
    { question: "Que fait la famille à la rivière ?", options: ["Ils pêchent", "Wassim met ses pieds dans l'eau et Souhayl fait des ricochets", "Ils nagent", "Ils dorment"], correctIndex: 1, explanation: "Wassim met ses pieds dans l'eau fraîche ! Souhayl fait des ricochets ! Tout le monde est content ! C'est la récompense de la patience ! 💦🐟" },
  ],

  // ================================================================
  // TOME 4 — Les Animaux du Paradis (حيوانات الجنة)
  // ================================================================

  wt4c1: [
    { question: "Que trouve Wassim dans le jardin ?", options: ["Un ballon", "Un petit oiseau tombé de son nid", "Un chat", "Un trésor"], correctIndex: 1, explanation: "Wassim trouve un petit oiseau tombé de son nid ! Il tremble et il a peur. Wassim veut l'aider ! 🐦💛" },
    { question: "Qui aide Wassim à remettre l'oiseau dans son nid ?", options: ["Nawfel", "Maman", "Souhayl", "Jeddi"], correctIndex: 2, explanation: "Souhayl aide Wassim ! Il prend une échelle et Wassim monte tout doucement pour remettre l'oiseau avec ses frères. C'est du courage ! 🪜🐦" },
    { question: "Que se passe-t-il quelques jours plus tard ?", options: ["L'oiseau part", "L'oiseau apprend à voler ! 🦅", "L'oiseau tombe encore", "L'oiseau dort"], correctIndex: 1, explanation: "Le petit oiseau grandit et un jour... il sort du nid, bat des ailes et VOLE très haut dans le ciel ! Wassim est si fier ! 🦅🎉" },
    { question: "Que dit le Prophète ﷺ sur la bonté envers les animaux ?", options: ["Ce n'est pas important", "Être gentil avec les animaux est très important pour Allah", "Seulement les gros animaux comptent", "Seulement les chats comptent"], correctIndex: 1, explanation: "Le Prophète ﷺ dit qu'être gentil avec les animaux est très important ! Une femme est entrée au Paradis juste pour avoir donné à boire à un chien assoiffé ! 💛" },
  ],

  // ================================================================
  // TOME 5 — Le Plus Beau Cadeau (أجمل هدية)
  // ================================================================

  wt5c1: [
    { question: "Pourquoi Wassim est-il triste au début du tome 5 ?", options: ["Il a perdu son doudou", "Il veut offrir un cadeau à mama mais n'a pas d'argent", "Il est malade", "Il a perdu"], correctIndex: 1, explanation: "Wassim veut offrir un cadeau à mama parce qu'il l'aime très fort ! ❤️ Mais sa tirelire est vide... Pas un seul dirham ! 😢" },
    { question: "Que dit Souhayl à Wassim ?", options: ["Achète un cadeau", "Le meilleur cadeau ne coûte rien !", "Demande de l'argent à papa", "Oublie le cadeau"], correctIndex: 1, explanation: "Souhayl dit : « Le meilleur cadeau ne coûte rien ! L'amour, un câlin, un dessin... ça vaut plus que l'or ! » 💛 C'est vrai ! Le Prophète ﷺ l'a dit aussi !" },
    { question: "Que dessine Wassim pour mama ?", options: ["Un chat", "Un cœur, une maison et toute la famille avec « JE T'AIME MAMA » ❤️", "Une étoile", "Un arbre"], correctIndex: 1, explanation: "Wassim dessine un grand cœur rouge, une jolie maison, et toute la famille : mama, baba, Souhayl, Nawfel et lui ! Il écrit JE T'AIME MAMA ! 🎨💖" },
    { question: "Que veut dire « Les actes ne valent que par les intentions » ?", options: ["Seuls les gros cadeaux comptent", "C'est ton cœur qui compte, pas la taille du cadeau !", "L'argent c'est le plus important", "Les dessins ne comptent pas"], correctIndex: 1, explanation: "Ça veut dire que c'est ton cœur qui compte ! Wassim n'avait pas d'argent mais il avait un grand cœur plein d'amour. Et pour Allah, c'est le plus beau trésor ! 💎💛" },
  ],
};
