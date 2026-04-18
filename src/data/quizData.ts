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

  wt2c2: [
    { question: "Que font les étoiles dans le rêve de Wassim ?", options: ["Elles chantent", "Elles lui parlent !", "Elles dansent", "Elles dorment"], correctIndex: 1, explanation: "Les étoiles parlent à Wassim ! ⭐ Elles lui disent qu'Allah l'aime très fort, plus fort que toutes les étoiles réunies ! 💕✨" },
    { question: "Combien de prières par jour en Islam ?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "Il y a 5 prières par jour ! Fajr 🌅, Dhuhr ☀️, Asr 🏫, Maghrib 🌇 et Isha 🌙. La lune apprend à Wassim à les retenir avec ses 5 doigts ! 🤲" },
    { question: "Que signifie la prière (Salah) ?", options: ["C'est un jeu", "C'est parler avec Allah", "C'est chanter", "C'est dormir"], correctIndex: 1, explanation: "La prière (Salah) c'est parler avec Allah ! 🤲 On peut Lui demander tout ce qu'on veut et Lui dire qu'on L'aime ! C'est le moment le plus important de la journée ! 💕" },
    { question: "Que fait Wassim quand il se réveille le matin ?", options: ["Il pleure", "Il court raconter son rêve à Souhayl", "Il retourne dormir", "Il regarde la télé"], correctIndex: 1, explanation: "Wassim court raconter son rêve magique à Souhayl ! Les étoiles parlaient, la lune lui a appris les 5 prières ! Souhayl est fier de lui ! 🌟" },
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

  wt3c2: [
    { question: "Que raconte Jeddi aux enfants ?", options: ["Une histoire de fantômes", "Une histoire du Prophète Muhammad ﷺ", "Un film", "Une blague"], correctIndex: 1, explanation: "Jeddi raconte une histoire magnifique du Prophète Muhammad ﷺ ! Il était le plus patient des hommes ! Même quand les gens étaient méchants, il restait gentil ! 📖🌟" },
    { question: "Que fait Wassim avec les cookies au chocolat ?", options: ["Il les mange tous seul", "Il les partage avec tout le monde ! 💚", "Il les cache", "Il les donne au chat"], correctIndex: 1, explanation: "Wassim partage les cookies avec toute la famille ! Un pour baba, maman, Souhayl, Nawfel, Jeddi, Jedda et un pour lui ! C'est ça la vraie gratitude ! 🍪💛" },
    { question: "Que veut dire Shukr (الشكر) ?", options: ["La patience", "La gratitude / dire merci", "Le courage", "La gentillesse"], correctIndex: 1, explanation: "Shukr veut dire la gratitude ! C'est dire merci à Allah pour Ses cadeaux. Et partager ces cadeaux avec ceux qu'on aime ! 🌻🤲" },
    { question: "Que dit le Prophète ﷺ sur la famille ?", options: ["La famille n'est pas importante", "Le meilleur d'entre vous est le meilleur avec sa famille", "Seul le travail compte", "Les amis sont plus importants"], correctIndex: 1, explanation: "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » La famille est le plus beau cadeau d'Allah ! 🏠💚" },
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

  wt4c2: [
    { question: "Comment s'appelle le chat du Prophète Muhammad ﷺ ?", options: ["Minou", "Muezza", "Félix", "Garfield"], correctIndex: 1, explanation: "Le chat du Prophète ﷺ s'appelait Muezza ! 🐈 Il l'aimait tellement qu'il a coupé sa manche plutôt que de réveiller son chat ! 😻" },
    { question: "Que fait Wassim pour le chat de la mosquée ?", options: ["Il le chasse", "Il lui donne de l'eau et du pain", "Il l'ignore", "Il le prend chez lui"], correctIndex: 1, explanation: "Wassim court chez lui, prend un bol d'eau fraîche et du pain, et court retourner à la mosquée pour nourrir le chat ! Le chat boit et mange ! 🐱💧🍞" },
    { question: "Que fait le chat après avoir mangé ?", options: ["Il part", "Il frotte sa tête contre Wassim et ronronne", "Il pleure", "Il dort"], correctIndex: 1, explanation: "Le chat vient vers Wassim et frotte sa tête contre sa jambe ! « Rrrr-rrrr » c'est le ronronnement du bonheur ! Le chat est devenu son ami ! 😻💛" },
    { question: "Qu'enseigne Sidi Mu'adh à Wassim à la fin ?", options: ["À cuisiner", "À être gentil avec TOUS les animaux pour toujours", "À chanter", "À courir vite"], correctIndex: 1, explanation: "Sidi Mu'adh dit que TOUS les animaux sont des créatures d'Allah. Les chats, les oiseaux, même les fourmis ! Être gentil avec eux, c'est comme prier Allah ! 🌟🤲" },
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

  wt5c2: [
    { question: "Que fait mama Aziza quand elle voit le dessin de Wassim ?", options: ["Elle rit", "Elle pleure de joie et fait un gros câlin à Wassim", "Elle le met au frigo", "Elle le jette"], correctIndex: 1, explanation: "Maman Aziza a les larmes aux yeux ! Des larmes de joie ! 😭❤️ Elle serre Wassim très fort dans ses bras et dit que c'est le plus beau cadeau de sa vie !" },
    { question: "Que dit le hadith de papa Mehdi ?", options: ["Mangez bien", "Le meilleur d'entre vous est celui qui est le meilleur avec sa famille", "Dormez tôt", "Jouez dehors"], correctIndex: 1, explanation: "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » Être gentil avec sa famille, c'est la chose la plus importante ! 💕" },
    { question: "Qu'est-ce que la famille pour Wassim ?", options: ["Rien de spécial", "Le plus beau cadeau d'Allah ! 🏠💚", "Juste des gens", "Des ennemis"], correctIndex: 1, explanation: "Pour Wassim, la famille est le plus beau cadeau d'Allah ! Il dit : « Ma famille est la plus belle ! Je vous aime ! » ❤️ C'est la plus grande chose aux yeux d'Allah !" },
    { question: "Que promet Wassim à la fin de l'histoire ?", options: ["De ne plus dessiner", "De dire « Je t'aime » à ses parents TOUS les jours ! 💖", "De dormir plus", "De manger moins de cookies"], correctIndex: 1, explanation: "Wassim promet de dire « Je t'aime » à ses parents tous les jours ! C'est la plus belle promesse ! Sidi Mu'adh lui dit que aimer sa famille, c'est aimer Allah ! 💕🌟" },
  ],
};
