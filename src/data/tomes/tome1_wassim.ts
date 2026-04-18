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

    // ============================================================
    // CHAPTER 2 — Le Vieux Sage du Jardin (الشيخ الحكيم في الحديقة)
    // ============================================================
    {
      id: 'wt1c2',
      tomeId: 'wassim_tome1',
      number: 2,
      title: 'Le Vieux Sage du Jardin',
      titleAr: 'الشيخ الحكيم في الحديقة',
      scenes: [
        // --- wt1c2s1: Sous l'olivier ---
        {
          id: 'wt1c2s1',
          chapterId: 'wt1c2',
          title: 'Sous l\'olivier',
          narration: `Le lendemain, Wassim court vers la petite porte verte ! 🏃 Il veut revoir le jardin magique et le petit chat ! 🐱

Il ouvre la porte. 🚪 Crique ! Le jardin est encore plus beau qu'hier ! Les fleurs sont grandes ouvertes. Le soleil fait briller les gouttes d'eau sur l'herbe. ✨ C'est comme des diamants !

Wassim marche dans le jardin. 🚶 Et soudain, il voit quelqu'un. Sous un grand olivier, un vieil homme est assis sur un tapis. 🧓 Il a une grande barbe blanche. Il porte une djellaba toute blanche.

Mais ses yeux... WOW ! Ses yeux sont VERTS ! 💚 Des yeux verts très brillants, comme des émeraudes ! Le vieil homme sourit à Wassim. C'est un sourire très doux. 🥰`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Oh ! Bonjour Monsieur ! 👋 Qui êtes-vous ?',
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: 'Salam aleykoum, petit Wassim ! 🌿 Je m\'appelle Sidi Mu\'adh. Je suis content de te voir !',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c2s2',
          background: 'garden',
        },

        // --- wt1c2s2: Le Prophète et les animaux ---
        {
          id: 'wt1c2s2',
          chapterId: 'wt1c2',
          title: 'Le Prophète et les animaux',
          narration: `Sidi Mu'adh fait asseoir Wassim à côté de lui. Sous l'olivier, c'est frais et agréable. 🌳 Le petit chat gris vient s'allonger sur les genoux de Wassim. 🐱 Mmmmm... Il ronronne.

— Wassim, dit Sidi Mu'adh. Je vais te raconter une histoire. Tu aimes les histoires ?

— OUI ! J'adore les histoires ! 😍 dit Wassim.

— Eh bien ! Sache que le Prophète Muhammad ﷺ aimait BEAUCOUP les animaux. 🌟 Un jour, il a vu un petit chat qui dormait sur son vêtement. Et tu sais ce qu'il a fait ? Il n'a pas dérangé le chat ! Il a découpé son vêtement autour du chat pour le laisser dormir ! 😻

— C'est trop gentil ! dit Wassim en caressant son petit chat. 💛

— Le Prophète ﷺ disait toujours : soyez gentils avec les animaux ! Ils sont aussi des créatures d'Allah. 🐱🕊️🐝 Allah a créé chaque animal avec amour. Et chaque animal a le droit qu'on soit gentil avec lui.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le Prophète a laissé le chat dormir ? 😻 C\'est le plus gentil !',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Oui ! 🌟 Le Prophète ﷺ était le plus gentil des hommes. Il aimait toute la création d\'Allah. Les chats, les oiseaux, les abeilles... Tout ! 💚',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Moi aussi je veux être gentil comme le Prophète ! 🤲',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c2s3',
          background: 'garden',
        },

        // --- wt1c2s3: Dis Alhamdulillah ! ---
        {
          id: 'wt1c2s3',
          chapterId: 'wt1c2',
          title: 'Dis Alhamdulillah !',
          narration: `Sidi Mu'adh montre les fleurs du jardin à Wassim. 🌸

— Regarde, Wassim. Tu vois ces fleurs ? Qui les a faites si jolies ? C'est Allah ! 🌺 Tu vois le soleil ? Qui le fait briller si fort ? C'est Allah ! ☀️ Tu vois ton petit chat ? Qui l'a fait si mignon ? C'est Allah ! 🐱

Wassim regarde partout avec ses grands yeux. Oui ! Tout est beau ! 💛

— Quand tu vois quelque chose de beau, tu dois dire : ALHAMDULILLAH ! dit Sidi Mu'adh. 🌟

— Alhamdulillah pour les fleurs ! dit Wassim en pointant les roses. 🌹

— Alhamdulillah pour le soleil ! dit Wassim en regardant le ciel. ☀️

— Alhamdulillah pour mon petit chat ! dit Wassim en serrant le chat dans ses bras. 🐱💕

— BRAVO, Wassim ! 🎉 dit Sidi Mu'adh en souriant. Tu as un beau cœur ! Allah est très content de toi quand tu dis merci pour Ses cadeaux ! 🌟

Le petit chat ronronne encore plus fort. Il est content aussi ! 😺`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: 'Alhamdulillah veut dire « Merci Allah ! ». Dis-le chaque fois que tu vois quelque chose de beau ! 🌟 C\'est comme un petit cadeau que tu fais à Allah ! 🎁',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Alhamdulillah ! Alhamdulillah ! Alhamdulillah ! 🌟✨🤲',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c2s4',
          background: 'garden',
          lesson: {
            title: 'Alhamdulillah — Merci Allah !',
            content:
              'ALHAMDULILLAH est un des meilleurs mots du monde ! 🌟 Ça veut dire « Louange à Allah » ou « Merci Allah ! ». Quand on voit une belle chose, on dit Alhamdulillah. Pour les fleurs 🌺, le soleil ☀️, les animaux 🐱, nos parents 👨‍👩‍👧... Pour TOUT ! Chaque fois qu\'on dit Alhamdulillah, Allah est content ! 💛',
            quote: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
            source: 'Coran, Sourate Al-Fatiha (1:2)',
          },
        },

        // --- wt1c2s4: Chez maman ---
        {
          id: 'wt1c2s4',
          chapterId: 'wt1c2',
          title: 'Chez maman',
          narration: `Wassim court à la maison ! 🏃 Ses petites jambes vont très vite ! Il veut tout raconter à sa maman ! 💕

— MAMAN ! MAMAN ! 📢 crie-t-il en entrant dans la cuisine. Maman est en train de préparer le dîner. Ça sent trop bon ! 🍲

— Oui, mon petit Wassim ? Qu'est-ce qu'il y a ? dit maman Aziza avec son doux sourire. 😊

— Maman, j'ai trouvé un jardin MAGIQUE ! Derrière une petite porte verte ! Il y a des fleurs partout ! Des papillons ! 🦋 Un petit chat gris ! 🐱 Et un vieil homme très gentil avec des yeux verts ! Il s'appelle Sidi Mu'adh ! Il m'a appris à dire Alhamdulillah ! 🌟

Maman Aziza s'arrête de cuisiner. Elle s'assoit et regarde Wassim avec ses yeux pleins d'amour. 💛

— Mon petit Wassim... C'est merveilleux ! Sidi Mu'adh est un homme très sage. Tu es très chanceux de l'avoir rencontré. Et bravo d'avoir appris à dire Alhamdulillah ! 🌟

— Alhamdulillah, maman ! dit Wassim en souriant de toutes ses dents. 😁`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Maman ! J\'ai trouvé un jardin magique ! Avec des fleurs et des papillons ! 🌺🦋',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'C\'est magnifique, mon bébé ! 🥰 Allah t\'a fait un beau cadeau !',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'Sidi Mu\'adh est un homme sage. Écoute bien ses conseils, mon Wassim ! 📖',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Oui, maman ! Il m\'a appris à dire Alhamdulillah pour tout ! 🌟',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c2s5',
          background: 'kitchen',
        },

        // --- wt1c2s5: La prière du soir ---
        {
          id: 'wt1c2s5',
          chapterId: 'wt1c2',
          title: 'La prière du soir',
          narration: `Il est l'heure de dormir. 🌙 Wassim met son pyjama. Il est dans son petit lit. La lumière est douce. Les étoiles brillent dehors. ⭐

Maman Aziza vient lui dire bonne nuit. 💕 Elle lui fait un gros câlin. Wassim ferme les yeux et pense au jardin magique.

Il pense aux fleurs colorées. 🌺 Aux papillons qui volent. 🦋 Au petit chat qui ronronne. 🐱 À Sidi Mu'adh et ses yeux verts. 💚

Et puis, Wassim dit tout doucement avant de s'endormir :

— Alhamdulillah pour les fleurs, maman. 🌺 Alhamdulillah pour le soleil. ☀️ Alhamdulillah pour le petit chat. 🐱 Alhamdulillah pour Sidi Mu'adh. Alhamdulillah pour papa et maman. 🤲 Alhamdulillah pour TOUT ! 🌟

Maman Aziza a les larmes aux yeux. De grosses larmes de joie. 😢💛 Elle embrasse Wassim sur le front.

— Allah aime ton cœur, mon petit Wassim. Tu es un enfant merveilleux. 🌟

Et Wassim s'endort avec un grand sourire. 😴💛 Le petit chat gris lui aussi dort dans le jardin, sous l'olivier, tout près de Sidi Mu'adh.

Bonne nuit, Wassim ! Fais de beaux rêves ! 🌙✨

BRAVO ! 🎉 Tu as appris quelque chose de très important : tout ce qui est beau est un cadeau d'Allah. N'oublie JAMAIS de dire ALHAMDULILLAH ! 🌟🤲`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Alhamdulillah pour tout, maman... 🌙🤲 Bonne nuit !',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'Bonne nuit, mon trésor ! 🌟 Allah protège ton cœur gentil ! 💕',
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'bedroom',
          isEnding: true,
          earnedBadgeId: 'ihsan',
          lesson: {
            title: 'Al-Ihsan — Dire Merci de tout son cœur',
            content:
              'Wassim a dit Alhamdulillah avant de dormir ! 🌙🤲 C\'est la chose la plus belle à faire ! Avant de dormir, on pense à tout ce qu\'Allah nous a donné et on dit MERCI ! Allah aime quand on est reconnaissant. Quand tu dis Alhamdulillah avec ton cœur, tu es comme un petit héros ! 🦸‍♂️💛',
            quote: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
            source: 'Coran, Sourate Ibrahim (14:7)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Ghafla — L\'oubli', 'Al-Kufr bi al-Ni\'ma — L\'ingratitude'],
  spiritualLesson: 'Rien n\'est beau sans Allah ! 🌟 Chaque fleur, chaque oiseau, chaque goutte d\'eau est un cadeau d\'Allah. Dis toujours : ALHAMDULILLAH ! 🤲💛',
};
