import type { Tome } from '@/types/story';

export const tome4_wassim: Tome = {
  id: 'wassim_tome4',
  number: 4,
  title: 'Les Animaux du Paradis',
  titleAr: 'حيوانات الجنة',
  subtitle: 'La Bonté envers les Animaux en Islam',
  description:
    "Wassim découvre un petit oiseau tombé de son nid, puis un chat affamé à la mosquée. Avec Sidi Mu'adh, il apprend que la bonté envers les animaux est très aimée par Allah. ﷺ",
  theme: 'Ar-Rahma li al-Hayawan — La Miséricorde envers les Animaux',
  coverImage: '/images/wassim-tome4-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Petit Oiseau 🐦
    // ============================================================
    {
      id: 'wt4c1',
      tomeId: 'wassim_tome4',
      number: 1,
      title: 'Le Petit Oiseau',
      titleAr: 'العصفور الصغير',
      scenes: [
        // --- wt4c1s1: Un petit oiseau par terre ---
        {
          id: 'wt4c1s1',
          chapterId: 'wt4c1',
          title: 'Un petit oiseau par terre',
          narration: `Wassim joue dans le jardin avec son ballon 🌈. Le soleil brille et les fleurs sentent bon. Soudain, il entend un petit bruit. « Tsi-tsi-tsi… » 🐦\n\nWassim regarde par terre. Oh non ! Un tout petit oiseau est couché dans l'herbe. Il a des plumes jaunes et un petit bec pointu. Il tremble beaucoup. 😢\n\nWassim s'accroupit doucement. Il regarde en haut. Le nid est tout en haut de l'arbre ! Le petit oiseau est tombé. Il a peur. Il appelle sa maman.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Oh non ! Petit oiseau, tu es tombé ! 😢 Ne t'inquiète pas, je vais t'aider !",
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: 'Mais le nid est tout en haut… Je suis trop petit pour y aller tout seul ! 😿',
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c1s2',
          background: 'garden',
        },

        // --- wt4c1s2: Appeler Souhayl à l'aide ---
        {
          id: 'wt4c1s2',
          chapterId: 'wt4c1',
          title: 'Appeler Souhayl à l\'aide',
          narration: `Wassim court vers la maison. Il ouvre la porte en courant. 💨 « Souhayl ! Souhayl ! Viens vite ! »\n\nSouhayl arrive en courant. « Qu'est-ce qu'il y a, Wassim ? » Il voit le visage inquiet de son petit frère. 😟\n\nWassim lui explique tout. « Un petit oiseau est tombé de l'arbre ! Il tremble. Il faut le remettre dans son nid ! » 🐥\n\nSouhayl sourit. « C'est très gentil de vouloir l'aider, Wassim. Allah aime ceux qui sont bons avec les animaux. Viens, on va l'aider ensemble ! » 💪`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Souhayl ! Un oiseau est tombé ! Il est tout petit et il a peur ! 😰',
              emotion: 'scared',
            },
            {
              characterId: 'souhayl',
              text: 'Ne t\'inquiète pas ! Allah aime ceux qui aident les animaux. On va le sauver ensemble, frérot ! 🤝',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Super ! On est la meilleure équipe du monde ! 💪🌟',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c1s3',
          background: 'home',
        },

        // --- wt4c1s3: Remettre l'oiseau dans son nid ---
        {
          id: 'wt4c1s3',
          chapterId: 'wt4c1',
          title: 'Remettre l\'oiseau dans son nid',
          narration: `Souhayl prend une petite échelle dans le garage. Il la pose contre le grand arbre. 🪜\n\nWassim monte tout doucement. Ses petites mains tiennent bien les barreaux. Son cœur bat très fort. Boum boum boum ! 💓\n\nEn haut, il voit le nid. Il y a deux autres petits oiseaux dedans ! Et la maman oiseau tourne autour en criant. « Cui-cui ! » 😊\n\nWassim prend le petit oiseau tout doucement. Comme un bébé. Très, très doucement. Puis il le pose dans le nid, à côté de ses frères. 🥹`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Monte doucement, Wassim. Tiens bien. Je suis juste derrière toi ! 🪜',
              emotion: 'neutral',
            },
            {
              characterId: 'wassim',
              text: 'Je l\'ai ! Je le remets dans le nid… Doucement… Doucement… Et voilà ! Il est avec ses frères ! 🐦🎉',
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: 'Bravo Wassim ! Tu es très courageux ! 🌟 La maman oiseau est contente !',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c1s4',
          background: 'garden',
        },

        // --- wt4c1s4: Que faire maintenant ? ---
        {
          id: 'wt4c1s4',
          chapterId: 'wt4c1',
          title: 'Que faire maintenant ?',
          narration: `Wassim descend de l'échelle. Il regarde le nid en haut de l'arbre. Le petit oiseau est avec sa famille maintenant. 😊\n\nMais Wassim se pose une question. Il veut être sûr que l'oiseau va bien. Que doit-il faire ? 🤔\n\nSouhayl lui dit : « C'est à toi de choisir, Wassim. Mais souviens-toi de ce que Sidi Mu'adh nous dit toujours : les animaux sont des créatures d'Allah. On doit les protéger ! » 🕌`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Souhayl, est-ce que le petit oiseau va bien ? Je veux qu\'il soit heureux ! 🥺',
              emotion: 'worried',
            },
            {
              characterId: 'souhayl',
              text: 'Si tu prends soin de lui, Allah prendra soin de toi ! C\'est une promesse ! 🤲',
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'wt4c1s4_c1',
              text: 'Vérifier l\'oiseau tous les jours pour être sûr qu\'il va bien 💛',
              nextSceneId: 'wt4c1s5a',
              badgeId: 'rahma_animal',
              isCorrect: true,
            },
            {
              id: 'wt4c1s4_c2',
              text: 'Laisser l\'oiseau tranquille et aller jouer 🏃',
              nextSceneId: 'wt4c1s5b',
            },
          ],
          background: 'garden',
        },

        // --- wt4c1s5a: La maman nourrit son bébé (choix bon) ---
        {
          id: 'wt4c1s5a',
          chapterId: 'wt4c1',
          title: 'La maman nourrit son bébé',
          narration: `Le lendemain, Wassim court au jardin. Il lève les yeux. Et là… MAGIQUE ! 🪄\n\nLa maman oiseau donne à manger à son petit ! Elle lui apporte des insectes dans son bec. Le petit oiseau ouvre grand la bouche. « Cui-cui ! » Il a très faim ! 😋\n\nLes jours passent. Wassim vient regarder tous les matins. Le petit oiseau grandit. Il grandit, grandit, grandit ! Ses plumes deviennent belles. 🌟\n\nUn jour, le petit oiseau sort du nid. Il bat des ailes. Et il vole ! Il vole très haut dans le ciel ! 🦅\n\nWassim saute de joie. « Bravo petit oiseau ! Tu voles ! 🎉 » Il est si fier ! Il a sauvé une vie. Et ça, c'est la plus belle chose du monde.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Il vole ! Il vole ! Bravo petit oiseau ! 🦅🎉 Je suis si content !',
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: 'Tu es formidable, Wassim ! Tu as eu de la patience et de la gentillesse. Le Prophète ﷺ serait très fier de toi ! 😊',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Vraiment ? Le Prophète ﷺ aime les animaux aussi ? 😳💛',
              emotion: 'surprised',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          earnedBadgeId: 'rahma_animal',
          lesson: {
            title: 'La Bonté envers les Animaux',
            content:
              'Bravo Wassim ! 🌟 Tu as sauvé un petit oiseau ! En Islam, être gentil avec les animaux est très important. Le Prophète Muhammad ﷺ a dit qu\'une femme est entrée au Paradis parce qu\'elle avait donné à boire à un chien assoiffé. Même un tout petit acte de bonté compte beaucoup pour Allah ! 💛',
            quote: 'عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ قَالَ: بَيْنَمَا رَجُلٌ يَمْشِي فَاشْتَدَّ عَلَيْهِ الْعَطَشُ فَنَزَلَ بِئْرًا فَشَرِبَ مِنْهَا ثُمَّ خَرَجَ فَإِذَا كَلْبٌ يَلْهَثُ',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },

        // --- wt4c1s5b: Revenir aider l'oiseau (choix moins bon) ---
        {
          id: 'wt4c1s5b',
          chapterId: 'wt4c1',
          title: 'Le petit oiseau a besoin de toi',
          narration: `Wassim va jouer. Il oublie le petit oiseau. 🏃 Mais le soir, il entend un bruit. « Cui… cui… » 😢\n\nLe petit oiseau pleure encore ! Wassim se sent tout drôle dans son cœur. Il sait qu'il doit aider. 💛\n\nLe lendemain, Wassim court voir le nid. Oh ! La maman oiseau est là ! Elle nourrit son petit. Tout va bien ! 😊\n\nMais Wassim apprend une leçon : quand on aide quelqu'un, il faut continuer jusqu'à ce que tout soit bien. Pas juste une fois ! 🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'J\'aurais dû vérifier avant ! La prochaine fois, je serai plus courageux ! 💪',
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: 'Ce n\'est pas grave, Wassim. L\'important c\'est que tu es revenu ! Allah voit ta bonne intention ! 🤲',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c1s5a',
          background: 'garden',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Chat de la Mosquée 🐱
    // ============================================================
    {
      id: 'wt4c2',
      tomeId: 'wassim_tome4',
      number: 2,
      title: 'Le Chat de la Mosquée',
      titleAr: 'قط المسجد',
      scenes: [
        // --- wt4c2s1: Un chat tout seul ---
        {
          id: 'wt4c2s1',
          chapterId: 'wt4c2',
          title: 'Un chat tout seul',
          narration: `Wassim va à la mosquée avec Sidi Mu'adh. C'est un beau jour de vendredi. Le soleil brille doucement. ☀️\n\nDevant la porte de la mosquée, Wassim voit quelque chose. Un chat ! Un petit chat orange avec des taches blanches. 🐱\n\nLe chat est assis tout seul. Il a l'air triste. Ses moustaches tremblent. Il miaule doucement. « Miaou… miaou… » 😿\n\nWassim s'accroupit. « Pauvre petit chat… Tu as faim, n'est-ce pas ? » Son cœur est tout petit. Il veut aider ce chat. 💔`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Regarde Sidi Mu\'adh ! Un chat tout seul ! Il a l\'air triste et il a faim ! 😿',
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: 'Tu as un bon cœur, Wassim. Le Prophète ﷺ aimait beaucoup les chats. Viens, je vais te raconter une histoire. 📖',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c2s2',
          background: 'zawiyah',
        },

        // --- wt4c2s2: L'histoire du chat du Prophète ---
        {
          id: 'wt4c2s2',
          chapterId: 'wt4c2',
          title: 'L\'histoire du chat du Prophète',
          narration: `Sidi Mu'adh s'assoit sur un banc. Wassim s'assoit à côté de lui. Le chat vient se blottir près de leurs pieds. 🐱\n\n« Tu sais, Wassim, le Prophète Muhammad ﷺ avait un chat. Il s'appelait Muezza. 🐈 Le Prophète l'aimait tellement ! Un jour, Muezza dormait sur la manche de sa robe. »\n\n« Et le Prophète a préféré couper sa manche plutôt que de réveiller son chat ! 😍 Il ne voulait pas le déranger pendant son sommeil. Voilà combien il aimait les animaux ! »\n\nWassim ouvre grand les yeux. « Waouh ! Le Prophète a coupé sa robe pour un chat ?! 😲 C'est trop beau ! »\n\n« Oui, mon petit ! Le Prophète ﷺ a dit : « La bonté envers les animaux est une prière. » » 🤲`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: 'Le Prophète ﷺ avait un chat nommé Muezza. Il l\'aimait tellement qu\'il a coupé sa robe plutôt que de le réveiller ! 😍',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Waouh ! Même pour un petit chat ? Le Prophète ﷺ est le plus gentil ! 💛',
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: 'Qui est bon envers les animaux, Allah est bon envers lui. Souviens-toi toujours de ça, Wassim ! 🌟',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c2s3',
          background: 'zawiyah',
        },

        // --- wt4c2s3: Donner à manger et à boire ---
        {
          id: 'wt4c2s3',
          chapterId: 'wt4c2',
          title: 'Donner à manger et à boire',
          narration: `Wassim rentre vite chez lui. Il court dans la cuisine. « Maman ! Maman ! J'ai besoin d'aide ! » 💨\n\nIl prend un bol et le remplit d'eau fraîche. Puis il prend des morceaux de pain. Aziza sourit. « C'est pour le chat, n'est-ce pas ? » 😊\n\n« Oui ! » dit Wassim. Il court retourner à la mosquée avec son trésor. 💧🍞\n\nIl pose le bol d'eau par terre. Le chat boit ! « Glou-glou-glou ! » Puis il mange le pain. « Miam miam ! » 🐱\n\nLe chat lève ses yeux vers Wassim. Ses yeux brillent. C'est comme s'il disait « Choukran ! Merci ! » 🤲`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Maman, donne-moi de l\'eau et du pain pour le chat de la mosquée ! Il a faim ! 🥺',
              emotion: 'determined',
            },
            {
              characterId: 'aziza',
              text: 'Voilà mon chéri. Tu es comme le Prophète ﷺ. Tu as un cœur rempli de bonté ! 💛',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Regarde ! Il boit ! Il mange ! Il est content ! Bravo petit chat ! 🐱🎉',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c2s4',
          background: 'zawiyah',
        },

        // --- wt4c2s4: Un ami fidèle ---
        {
          id: 'wt4c2s4',
          chapterId: 'wt4c2',
          title: 'Un ami fidèle',
          narration: `Le chat a fini de manger. Il s'étire. Il fait ses griffes. Puis… il vient vers Wassim ! 🐱💨\n\nIl frotte sa tête contre la jambe de Wassim. « Rrrr-rrrr » C'est le ronronnement du chat. Ça veut dire « je suis content » ! 😻\n\nWassim rit de joie. « Il m'aime ! Le chat m'aime ! » Il caresse doucement sa fourrure. Elle est si douce ! 🌟\n\nLes gens de la mosquée regardent et sourient. « C'est Wassim ! Il prend soin du chat maintenant ! » 😊\n\nSidi Mu'adh arrive et dit : « Tu vois, Wassim ? Quand tu es gentil, les animaux le sentent. Et Allah le voit aussi. » 💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Il ronronne ! Il est content ! On est amis maintenant ! 🐱💛',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Les animaux connaissent les gens bons. Ton cœur est pur, Wassim. Allah est fier de toi ! 🌟',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt4c2s5',
          background: 'zawiyah',
        },

        // --- wt4c2s5: La plus belle leçon ---
        {
          id: 'wt4c2s5',
          chapterId: 'wt4c2',
          title: 'La plus belle leçon',
          narration: `Le soleil se couche sur la mosquée. Le ciel devient orange et rose. C'est magnifique ! 🌅\n\nWassim s'assoit à côté du chat. Le chat dort sur ses genoux. Il fait des petits bruits en dormant. « Rrrr… rrrr… » 😴\n\nSidi Mu'adh s'assoit aussi. « Wassim, aujourd'hui tu as appris quelque chose de très important. »\n\n« En Islam, tous les animaux sont des créatures d'Allah. 🐱🐦🐜 Les grands et les petits. Les chats, les oiseaux, même les fourmis ! Allah les a tous créés et Il nous demande d'être gentils avec eux. »\n\n« Le Prophète ﷺ a dit : « Il n'y a pas un musulman qui plante un arbre ou sème une graine, sans qu'un oiseau, un humain ou un animal n'en mange, sans que cela ne lui soit compté comme une aumône. » » 🌳\n\nWassim sourit. Il regarde le petit oiseau dans l'arbre. Il regarde le chat sur ses genoux. Il regarde le ciel. 💛\n\n« Sidi Mu'adh, je vais être gentil avec TOUS les animaux ! Pour toujours ! » 🌟🤲`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Je serai gentil avec tous les animaux ! Les oiseaux, les chats, tout ! 💛',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Qui est bon envers les animaux, Allah est bon envers lui. Tu as un cœur d\'or, Wassim ! Allah vous aime, toi et tous les animaux ! 🌟🤲',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Choukran, Sidi Mu\'adh ! C\'est la plus belle journée de ma vie ! 🥰',
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          earnedBadgeId: 'rahma_animal',
          lesson: {
            title: 'La Miséricorde envers les Animaux',
            content:
              "Super Wassim ! 🌟 Tu as pris soin d'un oiseau ET d'un chat ! En Islam, la bonté envers les animaux est très importante. Le Prophète Muhammad ﷺ adorait les animaux. Son chat Muezza dormait sur sa robe et il a préféré couper sa manche que de le réveiller ! Une femme est entrée au Paradis juste pour avoir donné à boire à un chien assoiffé. N'oublie jamais : être gentil avec les animaux, c'est comme prier Allah ! 🐱🐦💛",
            quote: 'مَنْ رَحِمَ دَابَّةً رَحِمَهُ اللَّهُ — Celui qui est miséricordieux envers une créature, Allah est miséricordieux envers lui.',
            source: 'Hadith — rapporté par Bukhari',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: [],
  spiritualLesson:
    'La bonté envers les animaux est une porte vers le Paradis. Le Prophète ﷺ a montré par son exemple que chaque créature d\'Allah mérite respect et tendresse. Un acte de gentillesse envers un animal, même le plus petit, est compté comme une bonne action auprès d\'Allah. 💛',
};
