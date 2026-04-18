import type { Tome } from '@/types/story';

export const tome5_wassim: Tome = {
  id: 'wassim_tome5',
  number: 5,
  title: 'Le Plus Beau Cadeau',
  titleAr: 'أجمل هدية',
  subtitle: "L'Amour et la Famille",
  description:
    "Wassim veut offrir un cadeau à sa mama. Mais il n'a pas d'argent ! 😢 Avec l'aide de Souhayl, il va découvrir que le plus beau cadeau du monde ne coûte rien : c'est l'amour, un gros câlin, et un beau cœur. ❤️",
  theme: "Al-Hubb wa Al-Usra — L'Amour et la Famille",
  coverImage: '/images/wassim-tome5-cover.png',
  monsters: [],
  spiritualLesson:
    "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » Aimer sa famille, dire « Je t'aime » et faire plaisir à ses parents est la plus belle chose aux yeux d'Allah.",
  chapters: [
    // ============================================================
    // CHAPTER 1 — Un Cadeau pour Mama 🎁
    // ============================================================
    {
      id: 'wt5c1',
      tomeId: 'wassim_tome5',
      number: 1,
      title: 'Un Cadeau pour Mama',
      titleAr: 'هدية لماما',
      scenes: [
        // --- wt5c1s1: Wassim est triste 😢 ---
        {
          id: 'wt5c1s1',
          chapterId: 'wt5c1',
          title: 'Wassim est triste 😢',
          narration: `Ce matin, Wassim est dans sa chambre. 🛏️ Il regarde par la fenêtre. Le soleil brille dehors ! ☀️ Les oiseaux chantent. 🐦 Mais Wassim ne sourit pas.\n\nAujourd'hui, c'est une journée normale. Pas de fête. Pas d'anniversaire. Mais Wassim veut offrir un cadeau à sa mama. ❤️ Parce qu'il l'aime très fort !\n\nIl ouvre sa tirelire. 🐷 Il la retourne. Il secoue. Rien ne tombe. Pas un seul dirham. 😭 Oh non ! Wassim est très triste. Comment offrir un cadeau sans argent ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Je veux un cadeau pour mama. Mais je n'ai pas d'argent ! C'est pas juste ! 😢",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c1s2',
          background: 'bedroom',
        },

        // --- wt5c1s2: Souhayl a une idée ! 💡 ---
        {
          id: 'wt5c1s2',
          chapterId: 'wt5c1',
          title: "Souhayl a une idée ! 💡",
          narration: `Wassim descend l'escalier tout triste. 🪜 Il trouve son grand frère Souhayl dans le salon. 📖 Souhayl lit un grand livre.\n\nWassim s'assoit à côté de lui. Il lui raconte tout. Sa tristesse. Son envie de faire plaisir à mama. Et sa tirelire vide ! 😿\n\nSouhayl ferme son livre. Il sourit à Wassim. 🌟 Il a une lumière dans les yeux. Il dit une phrase très belle.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Souhayl, je veux offrir un cadeau à mama. Mais je n'ai pas d'argent. Tu peux m'aider ? 🙏",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Wassim, je vais te dire un secret. 🤫 Le meilleur cadeau ne coûte rien ! C'est vrai !",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Comment ça ? Un cadeau qui ne coûte rien ? C'est possible ça ? 😲",
              emotion: 'surprised',
            },
            {
              characterId: 'souhayl',
              text: "Oui ! L'amour, un câlin, un dessin, un sourire... Tout ça vaut plus que l'or ! 💛 Mama sera très heureuse !",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c1s3',
          background: 'home',
        },

        // --- wt5c1s3: Wassim réfléchit 🤔 ---
        {
          id: 'wt5c1s3',
          chapterId: 'wt5c1',
          title: 'Wassim réfléchit 🤔',
          narration: `Wassim pose sa main sur son menton. 🤔 Il réfléchit très fort. Ses yeux brillent. Un cadeau gratuit ? Qu'est-ce que ça peut être ?\n\nIl pourrait faire un beau dessin avec ses feutres ! ✏️ Mama adore les dessins ! Ou il pourrait aider mama dans la cuisine ! 👨‍🍳\n\nOu encore... faire un gros câlin très très fort ! 🤗 Ou lui dire « Je t'aime » mille fois ! 💕 Tant d'idées dans sa petite tête ! Wassim est trop mignon.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Un dessin ? Aider dans la cuisine ? Un câlin ? Dire je t'aime ? 🤩 J'ai trop d'idées !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Super Wassim ! 🌟 Choisis avec ton cœur. C'est la meilleure façon de choisir !",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'wt5c1s3_c1',
              text: "Dessiner une belle carte pour mama 🎨",
              nextSceneId: 'wt5c1s4a',
              badgeId: 'ihsan_heart',
              isCorrect: true,
            },
            {
              id: 'wt5c1s3_c2',
              text: "Aider mama dans la cuisine 👨‍🍳",
              nextSceneId: 'wt5c1s4b',
            },
          ],
          background: 'home',
        },

        // --- wt5c1s4a: Le beau dessin de Wassim 🎨 ---
        {
          id: 'wt5c1s4a',
          chapterId: 'wt5c1',
          title: 'Le beau dessin de Wassim 🎨',
          narration: `Wassim court dans sa chambre ! 🏃 Il sort sa boîte de feutres. Il y a toutes les couleurs ! 🌈 Rouge, bleu, jaune, vert, orange...\n\nIl prend une grande feuille blanche. 📄 Il dessine avec beaucoup de soin. D'abord, un grand cœur rouge. ❤️ Ensuite, une jolie maison. 🏠 Et sa famille dedans ! Mama, baba, Souhayl, Nawfel et lui !\n\nIl écrit en grand : « JE T'AIME MAMA ❤️ ». Ses lettres sont un peu tordues. Mais c'est le plus beau dessin du monde ! Parce qu'il est fait avec amour. 💖`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Regarde Souhayl ! J'ai dessiné notre famille ! Et un grand cœur ! Mama va adorer ! 😍",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Masha'Allah Wassim ! C'est magnifique ! 🌟 Tu es un artiste ! Mama va pleurer de joie !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c1s5',
          background: 'bedroom',
          earnedBadgeId: 'ihsan_heart',
          lesson: {
            title: "Al-Ihsan — Faire les choses avec le cœur",
            content:
              "Wassim a dessiné avec son cœur ! 💖 En Islam, al-Ihsan, c'est faire les choses de son mieux, avec amour et sincérité. Même un petit dessin simple devient le plus beau cadeau quand il est fait avec le cœur. Allah regarde nos intentions ! 🤲",
            quote: 'إنما الأعمال بالنيات',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- wt5c1s4b: Le petit chef cuisinier 👨‍🍳 ---
        {
          id: 'wt5c1s4b',
          chapterId: 'wt5c1',
          title: 'Le petit chef cuisinier 👨‍🍳',
          narration: `Wassim court à la cuisine ! 🏃 Il trouve sa mama qui prépare le dîner. Aziza s'occupe des légumes. 🥕🍅\n\n— Mama, je peux t'aider ? demande Wassim. Aziza est surprise ! Ses yeux s'écarquillent. 😲 Un sourire immense apparaît sur son visage.\n\nWassim lave les tomates très doucement. Il mélange la salade. 🥗 Il fait attention à ne rien renverser. Il est tellement concentré ! Sa langue sort un peu. 😋 Mama le regarde avec des yeux pleins d'amour. ❤️`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Mama, je veux t'aider ! Regarde, je lave les tomates ! Je suis un grand chef ! 👨‍🍳",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Oh mon petit Wassim ! 💕 Tu es le plus gentil ! Merci mon amour ! Ça me touche tellement !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Bravo Wassim ! Aider sa maman, c'est la meilleure chose ! Baba sera fier de toi ! 👏",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c1s5',
          background: 'kitchen',
        },

        // --- wt5c1s5: Le plus beau cadeau ❤️ (ENDING CH1) ---
        {
          id: 'wt5c1s5',
          chapterId: 'wt5c1',
          title: 'Le plus beau cadeau ❤️',
          narration: `Souhayl s'assoit avec Wassim. Il lui raconte une histoire magnifique. ✨\n\n— Tu sais Wassim, le Prophète Muhammad ﷺ a dit : « Les actes valent par les intentions. » 🌟 Ça veut dire que c'est ton cœur qui compte ! Pas la taille du cadeau. Pas le prix.\n\nWassim pose sa main sur son cœur. 💓 Il le sent battre. Boum boum. Boum boum. Son cœur est plein d'amour pour sa mama. Et ça, c'est le plus beau cadeau du monde ! Il comprend maintenant. Le vrai cadeau, c'est l'amour qu'on donne. ❤️`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Wassim, le Prophète ﷺ a dit : « Les actes valent par les intentions. » Ce qui compte, c'est ton cœur ! ❤️",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Alors... mon cadeau est beau parce que je l'ai fait avec amour ? 😊",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Oui ! Bravo Wassim ! 🌟 Tu as compris ! L'amour est le plus beau cadeau d'Allah ! 💖",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          lesson: {
            title: "Al-Niyya — La belle intention",
            content:
              "Le Prophète ﷺ a dit : « Les actes ne valent que par les intentions. » 🌟 Ça veut dire que ce que tu fais avec ton cœur vaut plus que ce qui coûte cher ! Wassim n'avait pas d'argent. Mais il avait un grand cœur plein d'amour. Et pour Allah, c'est le plus beau trésor ! 💎",
            quote: 'إنما الأعمال بالنيات',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — La Grande Fête de l'Amour 💕
    // ============================================================
    {
      id: 'wt5c2',
      tomeId: 'wassim_tome5',
      number: 2,
      title: 'La Grande Fête de l\'Amour',
      titleAr: 'عيد الحب الكبير',
      scenes: [
        // --- wt5c2s1: Une soirée magique ✨ ---
        {
          id: 'wt5c2s1',
          chapterId: 'wt5c2',
          title: 'Une soirée magique ✨',
          narration: `C'est le soir. 🌙 La maison est chaude et douce. Des bougies brillent sur la table. 🕯️ Ça sent bon le thé à la menthe et les biscuits au miel ! 🍪\n\nToute la famille est là ! Papa Mehdi, mama Aziza, Souhayl, Nawfel et Wassim. 😊 Ils sont tous assis en cercle sur de grands coussins. 🛋️\nn\nWassim a son dessin caché derrière le dos. 🎨 Ses petites mains tremblent un peu. Il est nerveux. Mais il est aussi très heureux ! ❤️`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Ce soir, on est tous ensemble. C'est le plus beau cadeau pour moi ! Alhamdulillah ! 🤲",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi je suis content ! J'ai une surprise pour mama ! 🎁 Mais chut... c'est un secret ! 🤫",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Oh la la ! Une surprise ? Moi je veux voir ! Dis-nous Wassim ! 😄",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c2s2',
          background: 'home',
        },

        // --- wt5c2s2: Le hadith de papa 📖 ---
        {
          id: 'wt5c2s2',
          chapterId: 'wt5c2',
          title: 'Le hadith de papa 📖',
          narration: `Papa Mehdi sourit à tout le monde. 👨 Il demande à ce que les enfants se rapprochent. Wassim, Souhayl et Nawfel s'assoient autour de lui. 🧸\n\n— Mes chers enfants, dit papa. Je veux vous raconter quelque chose de très important. Écoutez bien avec vos cœurs. 🤲\n\nIl raconte un hadith magnifique du Prophète Muhammad ﷺ. Ses paroles sont douces comme le miel. 🍯 Wassim ouvre grand ses yeux. Il retient chaque mot dans son petit cœur. ❤️`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » 📖",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Le meilleur avec sa famille ? C'est comme être gentil avec toi et mama ? 😊",
              emotion: 'neutral',
            },
            {
              characterId: 'mehdi',
              text: "Oui mon petit ! 🌟 Aider, dire je t'aime, faire plaisir... Tout ça, c'est la meilleure chose !",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Et il a dit aussi : « Soyez bons avec vos parents. » C'est très important dans notre religion. 💕",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c2s3',
          background: 'home',
          lesson: {
            title: "Al-Birr — La bonté envers les parents",
            content:
              "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » 💕 Être gentil avec sa famille, c'est la chose la plus importante en Islam ! Aider maman, écouter papa, faire des câlins... tout ça fait plaisir à Allah ! 🤲",
            quote: 'خيركم خيركم لأهله',
            source: 'Hadith — Sunan At-Tirmidhi',
          },
        },

        // --- wt5c2s3: La surprise de Wassim ! 🎁 ---
        {
          id: 'wt5c2s3',
          chapterId: 'wt5c2',
          title: 'La surprise de Wassim ! 🎁',
          narration: `Wassim prend une grande inspiration. 💨 Ses joues sont toutes rouges. Il sort son dessin de derrière son dos. 🎨\n\n— Mama ! C'est pour toi ! 🎁 Il tend la feuille à Aziza avec ses petites mains tremblantes.\n\nAziza regarde le dessin. Elle voit le grand cœur rouge. ❤️ Elle voit la jolie maison. 🏠 Elle voit toute la famille. Et les mots « JE T'AIME MAMA ». Des larmes coulent sur ses joues. 💧 Mais ce sont des larmes de joie !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Mama ! 🎁 Regarde ! J'ai dessiné notre famille ! Et j'ai écrit JE T'AIME ! C'est pour toi ! ❤️",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Oh... mon... Wassim... 😭 C'est le plus beau cadeau... de toute ma vie... Viens ici mon amour ! 🤗",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Wouah ! C'est trop beau Wassim ! Tu es le meilleur frère du monde ! 👏🌟",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Bravo Wassim ! Je suis si fier de toi ! Tu as un cœur en or ! 💛✨",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c2s4',
          background: 'home',
        },

        // --- wt5c2s4: Le grand câlin de la famille 🤗 ---
        {
          id: 'wt5c2s4',
          chapterId: 'wt5c2',
          title: 'Le grand câlin de la famille 🤗',
          narration: `Mama Aziza serre Wassim très fort dans ses bras. 🤗 Wassim pose sa tête sur le cœur de sa mama. Il entend : boum boum. Boum boum. ❤️\n\nPapa Mehdi les rejoint. Puis Souhayl. Puis Nawfel. Ils font tous un GRAND câlin de famille ! 🫂 Le plus grand câlin du monde !\n\nEnsuite, ils prient tous ensemble. 🤲 Baba Mehdi fait une belle dou'a : « Ya Allah, protège notre famille. Remplis nos cœurs d'amour. Fais-nous les meilleurs pour notre famille. Amin ! » 🤲✨ Et tout le monde dit : AMIN ! 🌟`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Ya Allah, garde notre famille. Remplis nos cœurs d'amour. Amin ! 🤲",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "AMIN ! 🤲 Je suis si heureux ! Ma famille est la plus belle ! ❤️",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Amin ! 🤲 Mon petit Wassim, tu m'as donné le plus beau cadeau. Tu es ma joie ! 💕",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt5c2s5',
          background: 'home',
        },

        // --- wt5c2s5: La lumière de Sidi Mu'adh ✨ (ENDING) ---
        {
          id: 'wt5c2s5',
          chapterId: 'wt5c2',
          title: 'La lumière de Sidi Mu\'adh ✨',
          narration: `Pendant la prière, Wassim ferme les yeux très fort. 🙏 Il sent quelque chose de chaud dans son cœur. Une lumière douce et dorée. ✨\n\nEt là, dans son cœur, il entend une voix douce. C'est Sidi Mu'adh ! 👳 Sa voix est comme un murmure plein d'amour.\n\n— Wassim, mon petit. Tu as offert le plus beau cadeau du monde. L'amour. L'amour envers ta famille est le plus grand acte de foi. Le Prophète ﷺ l'a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » 💕\n\nWassim sourit. Des étoiles brillent dans ses yeux. ✨ Il comprend maintenant. Aimer sa famille, c'est aimer Allah. Et c'est la plus belle chose du monde. ❤️`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Wassim, tu as compris le secret le plus beau ! ✨ Aimer sa famille, c'est la plus grande chose aux yeux d'Allah ! 💕",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Sidi Mu'adh ! Tu es dans mon cœur ! 😍 Je vais toujours aimer ma famille ! Promis ! 🤞❤️",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Bravo mon petit ! 🌟 Souviens-toi : chaque jour, dis « Je t'aime » à tes parents. Fais-le avec ton cœur ! 💖",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Je le ferai ! Tous les jours ! Mama, Papa, je vous aime ! ❤️❤️❤️",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          lesson: {
            title: "Al-Hubb — L'Amour pour la famille",
            content:
              "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur avec sa famille. » 💕\n\nWassim a découvert que le plus beau cadeau ne coûte rien. C'est l'amour ! ❤️\n\nDire « Je t'aime » à mama et papa. Faire un câlin. Aider à la maison. Dessiner un cœur. Ce sont les plus beaux cadeaux pour Allah ! 🤲\n\nN'oublie jamais : ta famille est un cadeau d'Allah. Prends-en soin ! 💖",
            quote: 'خيركم خيركم لأهله',
            source: 'Hadith — Sunan At-Tirmidhi',
          },
        },
      ],
      lessons: [],
    },
  ],
};
