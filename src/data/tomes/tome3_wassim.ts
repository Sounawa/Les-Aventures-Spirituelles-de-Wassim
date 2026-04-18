import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome3_wassim: Tome = {
  id: 'wassim_tome3',
  number: 3,
  title: 'Le Petit Voyage',
  titleAr: 'الرحلة الصغيرة',
  subtitle: 'La patience et la gratitude en famille',
  description:
    "Aujourd'hui, c'est un grand jour ! Wassim et sa famille partent en voyage pour aller voir Jeddi et Jedda à la campagne. Mais le trajet est long... très long ! Wassim va apprendre que la patience (Sabr) et la gratitude (Shukr) rendent chaque moment plus beau. 🚗✨",
  theme: 'As-Sabr wa Shukr — La patience et la gratitude',
  coverImage: '/images/wassim-tome3-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — En route chez Jeddi et Jedda 🚗
    // ============================================================
    {
      id: 'wt3c1',
      tomeId: 'wassim_tome3',
      number: 1,
      title: 'En route chez Jeddi et Jedda',
      titleAr: 'في الطريق إلى الجد والجدة',
      scenes: [
        // --- wt3c1s1: On prépare la voiture ! ---
        {
          id: 'wt3c1s1',
          chapterId: 'wt3c1',
          title: 'On prépare la voiture ! 🚗',
          narration: `C'est le matin. Le soleil brille très fort ! ☀️ Wassim saute partout dans la maison. Il est TROP excité ! Aujourd'hui, la famille part chez Jeddi et Jedda !

Baba Mehdi charge le coffre de la voiture. Il met les valises, les coussins, et le grand plat de couscous que Maman Aziza a préparé. 🍲

Souhayl, le grand frère, aide calmement. Nawfel court en tous sens avec son sac à dos. Et Wassim ? Il ne tient pas en place ! 🏃‍♂️`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Baba ! Baba ! On y va MAINTENANT ?! Je suis prêt ! Je suis prêt ! 🤩",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Patience, mon petit Wassim ! Bismillah, on part dans quelques minutes ! 😊",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Wassim, viens m'aider à chercher ton doudou. Tu ne voudrais pas l'oublier, non ? 😉",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c1s2',
          background: 'home',
        },

        // --- wt3c1s2: On est ARRIVÉS ? ---
        {
          id: 'wt3c1s2',
          chapterId: 'wt3c1',
          title: 'On est ARRIVÉS ? 🤔',
          narration: `Tout le monde est dans la voiture ! 🚗 Maman est à côté de Baba. Souhayl et Nawfel sont derrière. Wassim est au milieu avec son doudou.

La voiture roule. Wassim regarde par la fenêtre. Il voit les maisons, les arbres, les gens dans la rue.

Et puis... 10 minutes passent. Wassim commence à bouger sur son siège. 🙄

— Baba, on est arrivés ? 🤔

— Non, mon chéri. C'est encore loin.

Wassim soupire très fort. Trop fort ! 😮‍💨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Mais Baba ! C'est TROP long ! Mes jambes sont fatiguées ! On est ARRIVÉS ? 😫",
              emotion: 'sad',
            },
            {
              characterId: 'mehdi',
              text: "Wassim, il faut être patient. La patience, c'est important en Islam. Tu te souviens du mot « Sabr » ? 💚",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Mon petit cœur, profite du voyage ! Regarde par la fenêtre, tu vas voir des choses belles ! 🌸",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Moi non plus je n'arrive pas à rester tranquille ! C'est trop long ! 😤",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c1s3',
          background: 'street',
          lesson: {
            title: 'As-Sabr — La patience 🌿',
            content:
              "En Islam, la patience s'appelle « Sabr » (الصبر). C'est savoir attendre sans se plaindre. Le Prophète ﷺ a dit : « La patience est une lumière. » Être patient, ce n'est pas ne rien ressentir. C'est choisir de rester calme quand c'est difficile. C'est une très grande qualité ! 🌟",
            quote: 'إنما الصبر عند الصدمة الأولى',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },

        // --- wt3c1s3: Les montagnes magiques ---
        {
          id: 'wt3c1s3',
          chapterId: 'wt3c1',
          title: 'Les montagnes magiques ⛰️',
          narration: `La voiture continue de rouler. Wassim croise les bras. Il bouge ses pieds. Il soupire encore.

Mais soudain... WOW ! 😍

Dehors, de GRANDES montagnes apparaissent ! Elles sont si hautes qu'elles touchent le ciel ! Elles sont vertes, marron, et au sommet, il y a un petit peu de neige blanche ! ⛰️❄️

Souhayl tape doucement sur l'épaule de Wassim.

— Regarde, petit frère ! C'est magnifique !

Wassim ouvre grand ses yeux. Il n'a JAMAIS vu des montagnes aussi belles ! Il ouvre la bouche comme un petit poisson ! 🐟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Souhayl ! Regarde ! Les montagnes ! Elles sont ENORMES ! Masha'Allah ! 😍⛰️",
              emotion: 'surprised',
            },
            {
              characterId: 'souhayl',
              text: "Oui ! C'est la création d'Allah. Il a créé les montagnes pour nous. Subhanallah ! ✨",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Tu vois, Wassim ? Quand on est patient, Allah nous montre de belles choses ! 💚",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c1s4',
          background: 'desert',
        },

        // --- wt3c1s4: Le choix de Wassim ---
        {
          id: 'wt3c1s4',
          chapterId: 'wt3c1',
          title: 'Que fait Wassim ? 🤔',
          narration: `Wassim regarde les montagnes. Elles sont vraiment très belles ! 🏔️

Mais au fond de lui, il a encore envie de se plaindre. La route est longue. Ses jambes sont coincées. Il a un peu faim aussi. 🤤

Souhayl lui dit : « Wassim, tu as un choix à faire. » 💭

Qu'est-ce que Wassim va faire ?`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Wassim, tu peux continuer à te plaindre... Ou tu peux essayer de profiter du voyage ! Regarde les nuages, les oiseaux, les arbres... Allah a tout créé pour toi ! 🌳🐦",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Moi je veux arriver VITE ! Je suis trop impatient ! 😤",
              emotion: 'angry',
            },
          ],
          choices: [
            {
              id: 'wt3c1s4_c1',
              text: "Regarder par la fenêtre et profiter de la vue ! 😊",
              nextSceneId: 'wt3c1s5a',
              badgeId: 'sabr',
              isCorrect: true,
            },
            {
              id: 'wt3c1s4_c2',
              text: "Continuer à se plaindre : « Baba, c'est trop loooong ! » 😫",
              nextSceneId: 'wt3c1s5b',
            },
          ],
          background: 'street',
        },

        // --- wt3c1s5a: Wassim regarde la nature ---
        {
          id: 'wt3c1s5a',
          chapterId: 'wt3c1',
          title: 'La beauté est partout ! 🌻',
          narration: `Wassim décide de regarder par la fenêtre. Il prend une grande inspiration. Et il regarde. VRAIMENT regarder. 👀

Il voit un troupeau de moutons dans un champ ! 🐑 Ils sont blancs et moelleux. Ils mangent l'herbe en paix.

Il voit un grand arbre tout seul au bord de la route. Ses branches bougent doucement avec le vent. 🌳

Il voit des oiseaux qui volent très haut. Ils dessinent des formes dans le ciel bleu. 🐦

Wassim sourit. C'est beaucoup mieux que de se plaindre ! Le voyage n'est pas si long, en fait ! 💚`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Souhayl ! J'ai vu un mouton qui fait un saut ! Et un oiseau rouge ! Et un arbre ENORME ! 🐑🐦🌳",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Bravo Wassim ! Tu es patient comme un grand ! C'est ça le vrai Sabr ! Je suis fier de toi ! 🌟",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Mon bébé grandit ! Allah est content de toi quand tu es patient ! 💚✨",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c1s6',
          background: 'desert',
          earnedBadgeId: 'sabr',
          lesson: {
            title: 'Sabr — La patience est une lumière ! ⏳💚',
            content:
              "Wassim a choisi d'être patient ! En Islam, « Sabr » (الصبر) est une grande qualité. Le Prophète ﷺ a dit que la patience est une lumière. Quand on est patient, Allah nous montre de belles choses qu'on n'aurait pas vues sinon. Wassim a vu les moutons, les oiseaux et l'arbre parce qu'il a choisi le Sabr ! 🌟",
            quote: 'والصبر ضياء',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- wt3c1s5b: Wassim se plaint encore ---
        {
          id: 'wt3c1s5b',
          chapterId: 'wt3c1',
          title: 'Le trajet paraît long... 😫',
          narration: `Wassim croise les bras. Il fronce les sourcils. Il dit :

— Baba ! C'est trop long ! Je m'ennuie ! 😫

Le trajet semble encore PLUS long. Chaque minute dure une heure. Wassim ne regarde même pas dehors.

Mais Souhayl ne se fâche pas. Il met sa main sur l'épaule de Wassim.

— Petit frère, je comprends. Mais essaie juste une chose. Regarde par la fenêtre pendant 1 minute. Juste 1 petite minute. D'accord ? 🕐`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "D'accord... 1 minute. Mais pas plus ! 😤",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "C'est tout ce que je demande. Al-hamdu lillah, même les petites minutes comptent ! 😊",
              emotion: 'neutral',
            },
            {
              characterId: 'mehdi',
              text: "Wassim, le Prophète ﷺ nous apprend à être patients. La patience rapporte beaucoup de bien ! 💚",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c1s6',
          background: 'street',
        },

        // --- wt3c1s6: L'arrêt à la rivière ---
        {
          id: 'wt3c1s6',
          chapterId: 'wt3c1',
          title: "L'arrêt à la rivière ! 💦",
          narration: `Soudain, Baba arrête la voiture ! 🚗

— On s'arrête ici ! C'est une surprise ! 😊

Devant eux, il y a une RIVIÈRE ! 💦 L'eau est claire et fraîche. Elle brille au soleil. Des petits poissons nagent dedans ! 🐟

Wassim descend de la voiture en courant ! Il met ses pieds dans l'eau. Ooh ! C'est froid ! Mais c'est SUPER bien ! 😍

Souhayl fait des ricochets avec des cailloux. Nawfel éclabousse tout le monde. Maman rit. Baba prend des photos. 📸

Wassim est trop content ! Il remercie Allah dans son cœur. 💚`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Baba ! C'est MAGIQUE ! L'eau, les poissons, les cailloux ! J'adore ! 💦🐟😍",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Tu vois, Wassim ? On a été patients et Allah nous a donné cette pause magnifique ! Alhamdulillah ! 🤲",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "C'est vrai... Si on n'avait pas été patients, on n'aurait pas vu la rivière ! Alhamdulillah ! 💚",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "C'est ça le Sabr, Wassim ! La patience apporte toujours quelque chose de beau ! Tu as compris ! 🌟",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          lesson: {
            title: 'Sabr wa Alhamdulillah — Patience et gratitude ! 🌿🤲',
            content:
              "Wassim a appris une leçon importante ! La patience (Sabr — الصبر) et la gratitude (Shukr — الشكر) vont ensemble. Quand on est patient, Allah nous donne de belles surprises. Et quand on est reconnaissant, on dit « Alhamdulillah » — merci Allah ! Le Prophète ﷺ a dit : « Qu'est-ce que l'étonnement de la affaire du croyant ? Tout est bien pour lui ! » 🌟",
            quote: 'عجبا لأمر المؤمن إن أمره كله خير',
            source: 'Hadith — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — La Maison de Jeddi 🏠
    // ============================================================
    {
      id: 'wt3c2',
      tomeId: 'wassim_tome3',
      number: 2,
      title: 'La Maison de Jeddi',
      titleAr: 'بيت الجد',
      scenes: [
        // --- wt3c2s1: On est arrivés ! ---
        {
          id: 'wt3c2s1',
          chapterId: 'wt3c2',
          title: 'On est arrivés ! 🏠',
          narration: `Enfin ! La voiture s'arrête devant une jolie maison blanche. 🏠 Il y a des fleurs partout ! Des rosiers, des jasmins, des grandes plantes vertes ! 🌺🌸

La porte s'ouvre. Jeddi et Jedda sont là ! 🥰

Wassim court vers Jeddi. Il saute dans ses bras ! Jeddi le soulève tout haut. Wassim rit très fort ! 🤣

Jedda fait plein de bisous à tout le monde. Elle a préparé du thé à la menthe ! ☕ Miam !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "JEDDI ! JEDDA ! Je vous ai trop manqué ! Regardez, j'ai grandi ! 🥰💪",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Papa, maman ! On est arrivés sains et saufs ! Alhamdulillah ! 🤲",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Jeddi ! Tu m'as amené des cadeaux ? Dis, tu m'as amené des cadeaux ? 🎁😉",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Nawfel ! Ce n'est pas poli de demander des cadeaux comme ça ! 😄",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c2s2',
          background: 'home',
        },

        // --- wt3c2s2: L'histoire de Jeddi ---
        {
          id: 'wt3c2s2',
          chapterId: 'wt3c2',
          title: "L'histoire de Jeddi 📖",
          narration: `Après le thé, tout le monde s'assoit dans le jardin. 🌳 Les enfants sont autour de Jeddi. Ils adorent ses histoires !

Wassim s'assoit sur les genoux de Jeddi. Il est bien. 👶

— Jeddi, raconte-nous une histoire ! S'il te plaît ! 🙏

Jeddi sourit. Ses yeux brillent. Il dit :

— Je vais vous raconter une histoire du Prophète Muhammad ﷺ. Vous savez qu'il était le plus patient des hommes ? 🌟

Wassim ouvre grand ses yeux. Il ADORE les histoires du Prophète ! 😍`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Jeddi, raconte-nous comment le Prophète ﷺ était patient ! 📖",
              emotion: 'neutral',
            },
            {
              characterId: 'wassim',
              text: "Oui oui oui ! Je veux entendre ! 🙋‍♂️",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c2s3',
          background: 'garden',
        },

        // --- wt3c2s3: Le Prophète patient ---
        {
          id: 'wt3c2s3',
          chapterId: 'wt3c2',
          title: 'Le Prophète si patient 🌙',
          narration: `Jeddi commence son histoire. Sa voix est douce comme une berceuse. 🌙

— Un jour, une femme est venue voir le Prophète ﷺ. Elle lui parlait méchamment. Elle lui disait des mots pas gentils. Tous les jours ! 🥺

Mais le Prophète ﷺ ne s'est JAMAIS fâché. Pas une seule fois ! Il la regardait avec gentillesse. Il lui souriait. Il lui disait : « Que la paix soit avec toi. » 💚

Un jour, la femme a compris. Elle a vu que le Prophète ﷺ était toujours gentil. Elle a eu honte. Et elle est devenue musulmane ! 🤲

Wassim est bouche bée. 🐟

— Waow ! Il n'a jamais crié ? Même pas un tout petit peu ? 😲

— Non, mon petit. JAMAIS. C'est pour ça qu'Allah l'aime tant. Le Prophète ﷺ nous a dit : « Celui qui est patient, Allah l'aime. » 🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Jeddi... Moi parfois je crie quand Nawfel m'énerve... 😢",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Moi aussi, Wassim. Mais on essaie d'être comme le Prophète ﷺ. C'est pour ça qu'on fait des efforts ! 💪",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "D'accord, Souhayl ! Je vais essayer d'être patient ! Comme le Prophète ﷺ ! 🌟💚",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c2s4',
          background: 'garden',
          lesson: {
            title: 'Le meilleur exemple 🌟',
            content:
              "Le Prophète Muhammad ﷺ était le plus patient des hommes ! Même quand les gens étaient méchants avec lui, il restait gentil et calme. Le Coran dit : « Tu es d'une moralité éminente. » (Sourate Al-Qalam 68:4). C'est pour ça qu'il est notre meilleur exemple ! On essaie tous d'être comme lui ! 💚🌟",
            quote: 'وإنك لعلى خلق عظيم',
            source: 'Coran, Sourate Al-Qalam (68:4)',
          },
        },

        // --- wt3c2s4: Le grand dîner ---
        {
          id: 'wt3c2s4',
          chapterId: 'wt3c2',
          title: 'Le grand dîner ! 🍽️',
          narration: `Jedda appelle tout le monde pour le dîner. 🍽️

La table est GÉANTE ! Il y a du couscous, du tajine de poulet, des légumes, de la salade, des dattes, et... des COOKIES ! 🍪🍪🍪

Des cookies au chocolat ! Les préférés de Wassim ! 😍

Les yeux de Wassim brillent. Il en veut TOUT pour lui. Mais il se rappelle ce que Souhayl lui a dit dans la voiture...

« La gratitude, c'est partager avec ceux qu'on aime. » 🤲

Que va faire Wassim ? 🤔`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "MAMA regarde ! Des COOKIES ! Au chocolat ! C'est mon préféré ! 🍪😍",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Oui mon chéri. Jedda les a faits spécialement pour toi ! 🥰",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Moi aussi j'en veux ! Pas beaucoup, juste... TOUS ! 😄🍪",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'wt3c2s4_c1',
              text: "Partager les cookies avec tout le monde ! 🍪💚",
              nextSceneId: 'wt3c2s5a',
              badgeId: 'shukr',
              isCorrect: true,
            },
            {
              id: 'wt3c2s4_c2',
              text: "Garder tous les cookies pour soi 😈🍪",
              nextSceneId: 'wt3c2s5b',
            },
          ],
          background: 'kitchen',
        },

        // --- wt3c2s5a: Wassim partage ! ---
        {
          id: 'wt3c2s5a',
          chapterId: 'wt3c2',
          title: 'Les cookies pour tous ! 🍪💚',
          narration: `Wassim prend le plateau de cookies. Il regarde tout le monde autour de la table. 🤲

Il donne un cookie à Baba. Un cookie à Maman. Un à Souhayl. Un à Nawfel. Un à Jeddi. Un à Jedda. 🍪

Et il en garde un pour lui ! 😊

Tout le monde sourit. Jeddi le regarde avec des yeux brillants de fierté.

— Bravo Wassim ! Tu es généreux ! C'est ça la vraie gratitude ! 🌟

Wassim est fier. Son petit cookie est le meilleur cookie du monde ! Parce qu'il l'a partagé avec ceux qu'il aime. 💚`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Voilà ! Un pour chacun ! Alhamdulillah pour cette belle soirée et cette bonne nourriture ! 🤲💚",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Mon petit Wassim ! Tu me fais pleurer de joie ! Allah est content de toi ! 🥹💚",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "C'est SUPER Wassim ! Tu as partagé ! C'est ça l'Islam : aimer et partager ! 🌟",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Merci Wassim ! Ton cookie est délicieux ! Tu es le meilleur petit frère du monde ! 😋💛",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c2s6',
          background: 'kitchen',
          earnedBadgeId: 'shukr',
          lesson: {
            title: 'Ash-Shukr — La gratitude 🌻🤲',
            content:
              "Wassim a partagé ses cookies ! C'est ça la vraie gratitude, « Ash-Shukr » (الشكر) ! En Islam, remercier Allah, c'est profiter de Ses cadeaux ET les partager. Le Prophète ﷺ a dit : « Celui qui ne remercie pas les gens ne remercie pas Allah. » Partager rend tout le monde heureux ! 💚🌟",
            quote: 'لا يشكر الله من لا يشكر الناس',
            source: 'Hadith — Sunan Abi Dawud',
          },
        },

        // --- wt3c2s5b: Wassim garde tout pour lui ---
        {
          id: 'wt3c2s5b',
          chapterId: 'wt3c2',
          title: "L'enquête de Nawfel 😄",
          narration: `Wassim prend TOUS les cookies. Il les met devant lui. Il les cache avec ses bras. 😈🍪

Mais Nawfel le regarde. Puis Souhayl. Puis Maman.

Wassim regarde ses cookies. Il y en a beaucoup. Trop pour lui seul. Et tout le monde le regarde avec de grands yeux tristes. 😢

Le cœur de Wassim se serre un tout petit peu. Il se rappelle les mots de Jeddi : le Prophète ﷺ partageait toujours...

Hmm... peut-être qu'il a fait un petit erreur ? 🤔`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Wassim... Tu n'es pas content que je mange un cookie ? 😢🍪",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Wassim, tu te souviens de ce que Jeddi a dit ? Le Prophète ﷺ partageait avec tout le monde ! 😊",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Oh... Tu as raison Souhayl. Désolé Nawfel, voici un cookie pour toi ! Et pour tout le monde ! 💚",
              emotion: 'neutral',
            },
            {
              characterId: 'aziza',
              text: "C'est bien mon petit ! Tu as corrigé ton erreur. Allah pardonne et Il est Miséricordieux ! 💚✨",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt3c2s6',
          background: 'kitchen',
        },

        // --- wt3c2s6: Le dua de Jeddi ---
        {
          id: 'wt3c2s6',
          chapterId: 'wt3c2',
          title: 'Le dua de Jeddi 🤲🌙',
          narration: `C'est l'heure de dormir. 🌙 Le ciel est plein d'étoiles. Wassim est dans son petit lit chez Jeddi et Jedda.

Les couvertures sont douces. La maison est calme. Wassim est content. 💚

Jeddi vient s'asseoir près de lui. Il met sa main sur la tête de Wassim.

— Wassim, veux-tu que je fasse un dua pour toi ?

Wassim hoche la tête très fort. Oui oui oui ! 🙋‍♂️

Jeddi ferme les yeux. Il dit des mots doux :

— Allahoumma, protège Wassim. Rends-le patient et reconnaissant. Remplis son cœur de lumière et d'amour. Amin ! 🤲💚

Wassim ferme les yeux aussi. Il sent la main chaude de Jeddi. Il se sent en sécurité. Il se sent aimé.

Et il murmure : Amin ! 🌙✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Jeddi... aujourd'hui j'ai appris quelque chose. La patience, ça rend les belles choses encore plus belles ! Et la famille, c'est le meilleur cadeau d'Allah ! 🤲💚",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Je suis fier de toi, Wassim. Tu es un vrai grand maintenant ! Tu as appris le Sabr et le Shukr ! 🌟",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Bonsoir tout le monde. Je vous aime. Alhamdulillah pour cette belle journée ! 💚😴🌙",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'bedroom',
          isEnding: true,
          lesson: {
            title: "Al-'Ayala — La famille est une bénédiction ! 🏠💚",
            content:
              "Wassim a passé une belle journée avec sa famille ! En Islam, la famille est un grand cadeau d'Allah. Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui est le meilleur envers sa famille. » Être patient avec sa famille, partager avec eux, et les aimer... c'est ça le vrai bonheur ! Alhamdulillah ! 🌟🤲",
            quote: 'خيركم خيركم لأهله',
            source: 'Hadith — Sunan At-Tirmidhi',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: [],
  spiritualLesson:
    'La patience (As-Sabr) et la gratitude (Ash-Shukr) sont les deux clés du bonheur. Quand on est patient, Allah nous montre la beauté du monde. Quand on est reconnaissant, chaque instant devient un cadeau. Et la famille est le plus beau de tous les cadeaux. Alhamdulillah ! 💚🌟',
};
