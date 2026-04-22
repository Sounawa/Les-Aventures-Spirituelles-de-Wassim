import type { Tome } from '@/types/story';

export const tome1_wassim: Tome = {
  id: 'wassim_tome1',
  number: 1,
  title: 'Le Jardin Secret',
  titleAr: 'الحديقة السرية',
  subtitle: 'La beauté de la création d\'Allah',
  description: 'Wassim découvre un jardin magique rempli de fleurs et d\'animaux, et apprend que toute la nature est un cadeau d\'Allah ! 🌸',
  theme: 'Al-Khalq — La Création',
  coverImage: '/images/wassim-tome1-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Petite Porte Verte (الباب الصغير الأخضر)
    // ============================================================
    {
      id: 'wt1c1',
      tomeId: 'wassim_tome1',
      number: 1,
      title: 'La Petite Porte Verte',
      titleAr: 'الباب الصغير الأخضر',
      scenes: [
        // --- wt1c1s1: Dans la cour ---
        {
          id: 'wt1c1s1',
          chapterId: 'wt1c1',
          title: 'Dans la cour',
          narration: `Il fait très beau aujourd'hui ! ☀️ Le soleil brille sur la cour de la maison de Wassim. Wassim a presque 7 ans. Il joue avec sa petite voiture rouge. 🚗 Vroom ! Vroom !

La cour est jolie. Il y a des fleurs rouges et jaunes dans de grands pots. Un petit oiseau chante sur le mur. 🐦 Tweet ! Tweet ! Wassim sourit. Il aime bien jouer dehors.

Mais soudain... Wassim arrête sa voiture. Il regarde le mur du fond. Il y a quelque chose de nouveau. Une petite porte verte ! 🚪 Elle est cachée derrière un gros pot de fleurs bleues.

Wassim n'a JAMAIS vu cette porte ! Il se lève et marche doucement vers la porte. Son cœur bat un peu plus fort. 💓 Que peut-il bien y avoir derrière ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Oh ! Une petite porte verte ! 🌿 Je ne l\'avais jamais vue !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Je veux savoir ce qu\'il y a derrière ! 🤔',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c1s2',
          background: 'home',
        },

        // --- wt1c1s2: Le jardin magique ---
        {
          id: 'wt1c1s2',
          chapterId: 'wt1c1',
          title: 'Le jardin magique',
          narration: `Wassim pousse la petite porte verte. 🚪 Crique ! La porte s'ouvre ! Et là... WAOUH ! 😍

C'est le plus beau jardin du monde ! 🌺 Il y a des fleurs partout ! Des roses, des tulipes, des tournesols ! De toutes les couleurs ! Rouge, jaune, violet, orange ! 🌈 Un jardin arc-en-ciel !

Des papillons volent autour de Wassim. 🦋 Ils ont de belles ailes bleues et dorées. Des abeilles bourdonnent près des fleurs. 🐝 Bzzz ! Bzzz ! Un petit ruisseau d'eau claire coule doucement. 💦 Glou ! Glou ! L'eau fait des petits bruits amusants.

Wassim est très heureux ! 🥰 Ce jardin est comme un rêve ! Il marche sur l'herbe douce et verte. Il sent les bonnes odeurs des fleurs. 🌸 Miam, ça sent si bon !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'C\'est trop beau ! 😍 Des fleurs partout ! Et des papillons ! 🦋',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'C\'est comme un jardin de rêve ! Je veux rester ici ! ✨',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c1s3',
          background: 'garden',
        },

        // --- wt1c1s3: Le petit chat ---
        {
          id: 'wt1c1s3',
          chapterId: 'wt1c1',
          title: 'Le petit chat',
          narration: `Wassim marche un peu plus loin dans le jardin. Et là, il entend un petit bruit. « Miiiaou... Miiiaou... » 🐱

Un tout petit chat gris est assis près du ruisseau ! 🐾 Il a de grands yeux ronds et dorés. Il regarde Wassim avec ses yeux mignons. Il a l'air un peu triste. Et il a très faim, le pauvre petit chat !

Wassim met sa main dans sa poche. 👋 Oh ! Il a un biscuit au miel ! C'est son goûter. 🍪 Le petit chat renifle l'air et fait « Miiiaou ! » encore plus fort.

Que va faire Wassim ? 🤔`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Oh ! Un petit chat gris ! 🐱 Il a l\'air d\'avoir faim...',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'J\'ai un biscuit au miel dans ma poche ! 🍪',
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 'wt1c1s3_c1',
              text: 'Donner le biscuit au petit chat 🐱🍪 — Il a faim !',
              nextSceneId: 'wt1c1s3a',
              badgeId: 'rahma',
              isCorrect: true,
            },
            {
              id: 'wt1c1s3_c2',
              text: 'Garder le biscuit pour moi 🍪 — J\'ai faim aussi !',
              nextSceneId: 'wt1c1s3b',
            },
          ],
          background: 'garden',
        },

        // --- wt1c1s3a: Le biscuit partagé ---
        {
          id: 'wt1c1s3a',
          chapterId: 'wt1c1',
          title: 'Le biscuit partagé',
          narration: `Wassim casse son biscuit en deux. 🍪 Il donne la plus grosse partie au petit chat. Le chat renifle le biscuit. Puis il commence à manger ! Nom ! Nom ! Nom ! 😋

Le petit chat est TROP content ! Il ronronne très fort. « Rrrron... Rrrron... » 🐱💕 Puis il frotte sa petite tête contre la main de Wassim. C'est sa façon de dire merci !

Wassim rit. Il est si heureux ! Le chat est heureux. Et Wassim a encore la moitié de son biscuit. C'est bien de partager ! Quand on partage, on est encore plus heureux ! 🌟

Le chat gris suit Wassim partout dans le jardin. C'est comme son nouveau copain ! 🐱💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Mange, petit chat ! 🍪 C\'est bon, n\'est-ce pas ?',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Bravo, on a partagé ! 🌟 Je suis content et le chat aussi !',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c1s4',
          background: 'garden',
          earnedBadgeId: 'rahma',
          lesson: {
            title: 'Al-Rahma — La Gentillesse',
            content:
              'Wassim a partagé son biscuit avec le petit chat ! 💛 En Islam, on doit être gentil avec les animaux. Le Prophète Muhammad ﷺ adorait les animaux ! Il disait qu\'on sera récompensé pour chaque acte de gentillesse, même envers un chat ! 🐱',
            quote: 'وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- wt1c1s3b: Le biscuit gardé ---
        {
          id: 'wt1c1s3b',
          chapterId: 'wt1c1',
          title: 'Le biscuit gardé',
          narration: `Wassim garde son biscuit. 🍪 Il le mange tout seul. Nom ! Nom ! C'est bon le biscuit au miel !

Mais le petit chat le regarde. 🐱 Ses grands yeux dorés sont un peu tristes. Il fait « Miiiaou... » tout doucement. Wassim se sent un peu bizarre dans son cœur. 😔

Wassim regarde le chat. Puis il regarde son biscuit. Il réfléchit très fort. Hum... Peut-être qu'il aurait pu partager, quand même ? 🤔`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le biscuit est bon... 🍪 Mais le chat a l\'air triste... 😔',
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: 'La prochaine fois, je partagerai avec lui ! Je le promets ! 🤲',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c1s4',
          background: 'garden',
        },

        // --- wt1c1s4: Souhayl arrive ---
        {
          id: 'wt1c1s4',
          chapterId: 'wt1c1',
          title: 'Souhayl arrive',
          narration: `— Wassim ! Où es-tu ? 📢

Wassim tourne la tête. C'est Souhayl, son grand frère ! Souhayl a 9 ans. Il est grand, gentil et très sage. 💪 Il passe la tête par la petite porte verte.

— Oh ! Qu'est-ce que c'est que cet endroit ? 😮 dit Souhayl en entrant dans le jardin. Ses yeux s'arrondissent. Il regarde les fleurs, les papillons, le petit ruisseau... C'est MAGNIFIQUE !

Le petit chat gris vient se frotter contre les jambes de Souhayl. 🐱 Souhayl sourit et caresse le chat.

— Wassim, dit Souhayl doucement. Tu sais qui a créé ce jardin ? C'est Allah ! 🌟`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Wassim ! Ce jardin est magnifique ! 🌺 Qui t\'a montré la porte ?',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Personne ! Je l\'ai trouvée toute seule ! Et regarde, j\'ai un copain chat ! 🐱',
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: 'Tout ça, c\'est la création d\'Allah ! 🌟 Les fleurs, l\'eau, le chat... Tout ! Allah est le meilleur Créateur !',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c1s5',
          background: 'garden',
        },

        // --- wt1c1s5: Alhamdulillah pour la création ---
        {
          id: 'wt1c1s5',
          chapterId: 'wt1c1',
          title: 'Merci Allah !',
          narration: `Souhayl s'assoit sur l'herbe avec Wassim. Le petit chat dort entre eux deux. 🐱💤

— Wassim, dit Souhayl. Tu vois toutes ces belles choses ? Les fleurs de toutes les couleurs ? 🌺 L'eau claire du ruisseau ? 💦 Les papillons qui volent ? 🦋

— Oui ! C'est trop beau ! dit Wassim.

— Tout ça, c'est un cadeau d'Allah. 🎁 Il a créé les fleurs pour qu'elles soient jolies. Il a créé l'eau pour qu'elle donne la vie. Il a créé les animaux pour qu'ils soient nos copains. Allah est très généreux ! 💛

— Souhayl, qu'est-ce qu'on doit dire ? demande Wassim.

— On dit : ALHAMDULILLAH ! Ça veut dire « Merci Allah ! » 🌟 On dit Alhamdulillah pour chaque cadeau d'Allah. Pour les fleurs. Pour l'eau. Pour le soleil. Pour le petit chat. Pour TOUT ! 🙏

— Alhamdulillah ! dit Wassim très fort. Et il sourit de toutes ses dents. 😁

Bravo, Wassim ! Tu as compris un secret très important : tout ce qui est beau vient d'Allah ! 🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Alhamdulillah pour les fleurs ! 🌺 Alhamdulillah pour le chat ! 🐱',
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: 'Bravo, Wassim ! 🌟 Tu es un petit garçon très reconnaissant ! Allah aime ceux qui disent merci ! 💛',
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          earnedBadgeId: 'shukr',
          lesson: {
            title: 'Al-Shukr — La Gratitude',
            content:
              'Wassim a appris à dire ALHAMDULILLAH ! 🌟 Ce mot veut dire « Louange à Allah » ou « Merci Allah ! ». On doit dire Alhamdulillah pour toutes les belles choses qu\'Allah a créées. Les fleurs, le soleil, l\'eau, les animaux... Tout est un cadeau d\'Allah ! 💛',
            quote: 'إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ أَنْ يَأْكُلَ الْأَكْلَةَ فَيَحْمَدَهُ عَلَيْهَا',
            source: 'Hadith — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Ghafla — L\'oubli', 'Al-Kufr bi al-Ni\'ma — L\'ingratitude'],
  spiritualLesson: 'Rien n\'est beau sans Allah ! 🌟 Chaque fleur, chaque oiseau, chaque goutte d\'eau est un cadeau d\'Allah. Dis toujours : ALHAMDULILLAH ! 🤲💛',
};
