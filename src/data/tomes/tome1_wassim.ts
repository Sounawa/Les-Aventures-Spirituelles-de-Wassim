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

    // ============================================================
    // CHAPTER 3 — L'Oiseau Tombé du Nid (العصفور الساقط من العش)
    // ============================================================
    {
      id: 'wt1c3',
      tomeId: 'wassim_tome1',
      number: 3,
      title: 'L\'Oiseau Tombé du Nid',
      titleAr: 'العصفور الساقط من العش',
      scenes: [
        // --- wt1c3s1: Un bruit bizarre ---
        {
          id: 'wt1c3s1',
          chapterId: 'wt1c3',
          title: 'Un bruit bizarre',
          narration: `C'est le matin ! ☀️ Wassim se réveille tout de suite ! Il a hâte de retourner dans le jardin magique ! 🏃

Il prend son petit déjeuner vite fait. 🥛🥐 Miam ! Et il court vers la petite porte verte ! 🚪 Crique !

Le jardin est encore plus beau ce matin ! 💦 Des petites gouttes de rosée brillent sur les fleurs. Des abeilles butinent. 🐝 Bzzz ! Le petit chat gris vient droit vers Wassim en courant ! 🐱 Miiiaou !

Wassim caresse son copain chat. 💛 Mais soudain... il entend un drôle de bruit.

« Piou... Piou... Piou... » 🐣

C'est un tout petit bruit. Très faible. Ça vient de derrière le grand buisson de roses ! 🌹 Wassim tend l'oreille. Quelque chose a besoin d'aide !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Un bruit bizarre... « Piou... Piou... » 🐣 Qu\'est-ce que c\'est ?',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Viens, petit chat ! On va voir ensemble ! 🐱🔍',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s2',
          background: 'garden',
        },

        // --- wt1c3s2: Le petit oiseau ---
        {
          id: 'wt1c3s2',
          chapterId: 'wt1c3',
          title: 'Le petit oiseau',
          narration: `Wassim pousse doucement les branches du buisson. 🌹 Et là, il voit quelque chose qui lui serre le cœur. 😢

Un TOUT PETIT oiseau est par terre ! 🐦 Il est tout jaune avec un petit bec orange. Il a des plumes toutes douces mais il tremble. Il a froid ! 🥶

Wassim regarde en haut. Là, dans l'arbre, il y a un nid ! 🪹 Un nid fait avec des brindilles et des feuilles. Le petit oiseau est tombé de son nid ! 😮

— Oh non ! Le pauvre petit ! dit Wassim. 💔 Le petit oiseau ouvre grand son bec. « Piou... Piou... » Il a faim. Et il a peur. Il appelle sa maman !

Deux gros oiseaux volent au-dessus. Ce sont ses parents ! 🐦🐦 Ils tournent en rond et font beaucoup de bruit. Ils sont inquiets pour leur bébé ! 😟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Oh non ! Un petit oiseau est tombé ! 😢 Il tremble de froid !',
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: 'Regarde ! Ses parents volent au-dessus ! Ils cherchent leur bébé ! 🐦🐦',
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s3',
          background: 'garden',
        },

        // --- wt1c3s3: Que faire ? ---
        {
          id: 'wt1c3s3',
          chapterId: 'wt1c3',
          title: 'Que faire ?',
          narration: `Wassim regarde le petit oiseau. Puis il regarde le nid en haut de l'arbre. 🌳 L'arbre est GRAND. Très grand. Le nid est tout en haut.

Le petit chat s'approche et renifle l'oiseau. 🐱👃 Wassim se méfie. Il met sa main entre le chat et l'oiseau. Non, non ! Pas de ça !

— Doucement, petit chat ! L'oiseau n'est pas à manger ! C'est notre ami ! 🐱✋

Mais comment faire pour remettre l'oiseau dans son nid ? Wassim est petit. L'arbre est grand. 😟

Wassim réfléchit très fort. Il peut :
- Appeler Souhayl pour l'aider 💪
- Essayer tout seul de grimper 🧗

Que va choisir Wassim ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'L\'arbre est trop grand pour moi seul ! 😟 Mais le petit oiseau a besoin d\'aide !',
              emotion: 'scared',
            },
            {
              characterId: 'wassim',
              text: 'Je dois faire quelque chose ! Qu\'est-ce que je vais faire ? 🤔',
              emotion: 'determined',
            },
          ],
          choices: [
            {
              id: 'wt1c3s3_c1',
              text: 'Appeler Souhayl à l\'aide 📢 — Ensemble on est plus forts !',
              nextSceneId: 'wt1c3s4a',
              badgeId: 'sabr',
              isCorrect: true,
            },
            {
              id: 'wt1c3s3_c2',
              text: 'Grimper tout seul sur l\'arbre 🧗 — Je peux le faire !',
              nextSceneId: 'wt1c3s4b',
            },
          ],
          background: 'garden',
        },

        // --- wt1c3s4a: Appeler Souhayl ---
        {
          id: 'wt1c3s4a',
          chapterId: 'wt1c3',
          title: 'Souhayl à la rescousse',
          narration: `Wassim court vers la maison ! 🏃💨

— SOUHAYL ! SOUHAYL ! VITE ! 📢

Souhayl arrive en courant. Il a un livre à la main. 👦📖

— Qu'est-ce qu'il y a, Wassim ?! 😮

— Il y a un petit oiseau tombé de son nid ! Il a froid ! Il a peur ! Ses parents volent au-dessus ! On doit l'aider ! S'il-te-plaît ! 🐦😢

Souhayl regarde son petit frère. Wassim a les yeux brillants de larmes. Son cœur est gros. 💛

— Ne t'inquiète pas, dit Souhayl. On va l'aider ensemble. 🌟

Wassim se sent mieux. Il n'est pas tout seul ! Avec Souhayl, ils peuvent tout ! 💪`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Ne t\'inquiète pas, petit frère ! 🌟 On va le sauver ensemble !',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Merci Souhayl ! 💛 Je savais que tu m\'aiderais !',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s5',
          background: 'garden',
          earnedBadgeId: 'sabr',
          lesson: {
            title: 'As-Sabr — La Patience',
            content:
              'Wassim a eu PATIENCE ! 💛 Il n\'a pas paniqué. Il a réfléchi et il a demandé de l\'aide. En Islam, la patience c\'est très important ! Le Prophète ﷺ disait que la patience est une lumière. ⏳ Quand on a un problème, on ne se dépêche pas. On réfléchit. Et on demande de l\'aide à Allah et aux autres ! 🤲',
            quote: 'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',
            source: 'Coran, Sourate Az-Zumar (39:10)',
          },
        },

        // --- wt1c3s4b: Grimper seul ---
        {
          id: 'wt1c3s4b',
          chapterId: 'wt1c3',
          title: 'L\'arbre est trop grand',
          narration: `Wassim essaie de grimper à l'arbre ! 🧗 Il met ses petites mains sur l'écorce. Il met son pied sur une branche basse. Il monte un peu... un peu plus...

Mais l'arbre est trop grand ! 😟 Wassim n'arrive qu'au milieu. Le nid est tout en haut. Il ne peut pas y aller tout seul !

Wassim redescend. 😔 Il regarde le petit oiseau qui tremble. « Piou... Piou... »

— Je suis désolé, petit oiseau... dit Wassim. Je suis trop petit...

Mais Wassim ne se décourage pas ! 💪 Il court vers la maison pour chercher Souhayl ! Il a appris quelque chose : parfois, on ne peut pas faire les choses tout seul. Et ce n'est pas grave ! Demander de l'aide, c'est être intelligent ! 🧠`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Oh non... L\'arbre est trop grand pour moi ! 😟',
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: 'Je vais chercher Souhayl ! Ensemble on sera plus forts ! 💪🏃',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s5',
          background: 'garden',
        },

        // --- wt1c3s5: L'opération sauvetage ---
        {
          id: 'wt1c3s5',
          chapterId: 'wt1c3',
          title: 'L\'opération sauvetage',
          narration: `Souhayl et Wassim retournent ensemble au jardin. 🚶👦 Souhayl porte le petit oiseau très doucement dans ses mains. 🐦💛

Wassim montre l'arbre à Souhayl. Souhayl regarde le nid en haut.

— Ok, dit Souhayl. Moi, je vais grimper. Et toi, Wassim, tu vas me guider depuis en bas. Tu me dis si je vais dans la bonne direction ! 👀

— D'accord ! dit Wassim. Je suis tes yeux ! 👀✨

Souhayl commence à grimper. 🧗 Branche après branche. Il monte, il monte, il monte... Wassim regarde en bas.

— Plus haut, Souhayl ! Un peu à gauche ! 📍 dit Wassim.

— C'est bon ? demande Souhayl.

— OUI ! Le nid est juste là, au-dessus de ta tête ! 🪹

Souhayl tend la main. Il pose le petit oiseau DÉLICATEMENT dans le nid. 🐦🪹 Le petit oiseau est à la maison ! Il fait « Piou ! Piou ! » tout joyeux ! 🎉

Les parents volent vers le nid ! 🐦🐦 Ils font des cercles de joie dans le ciel ! Ils sont si contents de retrouver leur bébé ! 💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Plus haut ! À gauche ! Le nid est juste là ! 🪹📍',
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: 'Je le pose dans le nid... Doucement... C\'est fait ! 🐦✨',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'YES ! On l\'a sauvé ! 🎉 Les parents sont contents ! Regarde comme ils volent ! 🐦🐦💛',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s6',
          background: 'garden',
        },

        // --- wt1c3s6: La leçon de Sidi Mu'adh ---
        {
          id: 'wt1c3s6',
          chapterId: 'wt1c3',
          title: 'La leçon de Sidi Mu\'adh',
          narration: `— Mashallah ! 💚

Une voix douce résonne derrière eux. Wassim et Souhayl se retournent. C'est Sidi Mu'adh ! 🧓 Il est assis sous l'olivier, comme toujours. Son sourire est plus grand que jamais.

— Vous avez sauvé un oiseau, mes petits. C'est un acte magnifique ! 💚

Wassim est si fier ! 🌟

— Sidi Mu'adh ! J'ai vu le petit oiseau tombé et j'ai eu envie de pleurer ! 😢 Mais Souhayl m'a aidé et on l'a remis dans son nid !

— C'est bien, Wassim. Tu as fait preuve de RAHMA — miséricorde — envers l'oiseau. 💝 Et tu as fait preuve de SABR — patience — en attendant l'aide de ton frère. ⏳

— Qu'est-ce que c'est, Sabr ? demande Wassim.

— Sabr, c'est la patience ! 💚 C'est ne pas se dépêcher quand c'est difficile. C'est attendre calmement. C'est faire les choses avec douceur, même quand on a envie de pleurer. Le Prophète ﷺ a dit : « Celui qui n'est pas patient avec les petits, ne sera pas patient avec les grands. » 🌟

Wassim sourit. Il serre la main de Souhayl. 💛 Ensemble, ils sont plus forts !`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: 'Sabr, la patience, est très importante ! ⏳ Quand tu es patient, Allah est avec toi ! 💚',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Alors être patient, c\'est être fort ? 💪',
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: 'OUI ! La patience, c\'est la plus grande force ! 🌟 Le Prophète ﷺ a dit que la patience est une lumière ! ✨',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c3s7',
          background: 'garden',
          lesson: {
            title: 'As-Sabr — La Patience',
            content:
              'Wassim a été patient ! 💛 Il n\'a pas abandonné le petit oiseau. Il a réfléchi, demandé de l\'aide, et ensemble avec Souhayl, ils ont réussi ! ⏳ Le Prophète ﷺ disait : « La patience est une lumière. » Quand tu es patient, Allah est avec toi ! 🌟',
            quote: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ',
            source: 'Coran, Sourate Al-Baqara (2:45)',
          },
        },

        // --- wt1c3s7: Le soir à la maison ---
        {
          id: 'wt1c3s7',
          chapterId: 'wt1c3',
          title: 'Le soir à la maison',
          narration: `Ce soir, Wassim est assis avec toute la famille. 🏡 Papa Mehdi est rentré de la madrasa. Il a un beau sourire. 🧔

— Wassim, ta maman m'a raconté ce que tu as fait pour le petit oiseau ! 💚 C'est un acte de bonté magnifique ! Le Prophète ﷺ serait très fier de toi !

— VRAI, papa ?! 😍 dit Wassim les yeux brillants.

— Vrai ! 💛 Tu sais, le Prophète ﷺ a raconté qu'une femme est allée en Paradis parce qu\'elle avait donné à boire à un chien assoiffé. Imagine ! Un simple acte de gentillesse... et le Paradis ! 🌟

— WOW ! dit Wassim. Moi aussi je veux aller au Paradis ! 🏰

— Continue à être gentil, Wassim. Continue à être patient. Continue à dire Alhamdulillah. Et un jour, inshallah, tu seras au Paradis ! 🌟🤲

Wassim serre son papa très fort. 💛 Puis il serre sa maman. Puis Souhayl. Puis même le petit chat qui est venu se coucher sur ses genoux. 🐱💕

— Alhamdulillah pour ma famille ! dit Wassim. Et Alhamdulillah pour le petit oiseau ! 🐦💛

Ce soir, Wassim s'endort avec le sourire le plus grand du monde. 😴🌟 Il a appris quelque chose de TROP bien : être gentil, c'est être fort ! 💪💛

BRAVO, Wassim ! 🎉 Tu es un vrai héros ! 🦸‍♂️✨`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: 'Wassim, je suis fier de toi ! 💚 Le Prophète ﷺ aimait les animaux. Tu es sur le bon chemin ! 🌟',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Merci papa ! 💛 Je veux être gentil comme le Prophète pour toute ma vie ! 🤲',
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'hikma',
          lesson: {
            title: 'Al-Hikma — La Sagesse du cœur',
            content:
              'Wassim a appris que la vraie force, c\'est la gentillesse et la patience ! 💛 Le Prophète ﷺ a dit qu\'une femme est allée au Paradis juste parce qu\'elle a donné à boire à un chien. 🐕 Chaque acte de bonté compte chez Allah ! Même les plus petits ! 🌟 Sois gentil avec tout le monde et tout le monde : les gens, les animaux, les plantes... Et Allah sera gentil avec toi ! 💚',
            quote: 'فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
            source: 'Coran, Sourate Az-Zalzala (99:7)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Le Trésor du Jardin (كنز الحديقة)
    // ============================================================
    {
      id: 'wt1c4',
      tomeId: 'wassim_tome1',
      number: 4,
      title: 'Le Trésor du Jardin',
      titleAr: 'كنز الحديقة',
      scenes: [
        // --- wt1c4s1: Un matin spécial ---
        {
          id: 'wt1c4s1',
          chapterId: 'wt1c4',
          title: 'Un matin spécial',
          narration: `Wassim est dans le jardin depuis quelques jours maintenant. 🌸 Chaque matin, il vient voir le petit chat 🐱 et les fleurs. 🌺

Mais aujourd'hui, quelque chose est DIFFÉRENT ! 🌟

En marchant dans le jardin, Wassim voit une lumière qui brille derrière les rosiers. ✨ Non, pas une seule lumière... DES LUMIÈRES ! Des petites lumières dorées qui dansent comme des étoiles ! ⭐✨⭐

Le petit chat s'arrête. Ses poils se hérissent. Il regarde les lumières avec ses grands yeux dorés. 🐱👀

— Woaaaah... murmure Wassim. C'est MAGIQUE ! ✨

Les petites lumières dorées volent vers Wassim ! Elles tournent autour de lui ! Une lui chatouille le nez ! 😄Une autre se pose sur son épaule ! C'est comme des fées, mais en lumière ! ✨🧚

Wassim rit de toutes ses forces ! 😂 C'est trop drôle et trop beau !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'WAOUH ! Des lumières dorées ! ✨ Elles volent ! Elles dansent ! 🌟',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Chaton, tu vois ça ?! 🐱✨ C\'est le plus beau truc du MONDE ! 😍',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s2',
          background: 'garden',
        },

        // --- wt1c4s2: Sidi Mu'adh et le secret ---
        {
          id: 'wt1c4s2',
          chapterId: 'wt1c4',
          title: 'Sidi Mu\'adh et le secret',
          narration: `Les lumières guident Wassim plus loin dans le jardin. 🌟 Il les suit avec le petit chat. 🐱✨ Et là, il arrive dans un endroit qu'il n'avait JAMAIS vu !

C'est une petite clairière. 🌿 Au centre, il y a un ARBRE MAGNIFIQUE ! 🌳 C'est le plus bel arbre que Wassim ait jamais vu ! Ses feuilles sont dorées et lumineuses. Ses racines brillent comme si on avait jeté de la poudre d'étoiles dessus ! ✨🌳⭐

Et sous l'arbre... Sidi Mu'adh est là ! 🧓 Il sourit comme s'il attendait Wassim.

— Ah ! Te voilà enfin, petit Wassim ! 💚

— Sidi Mu'adh ! Vous étiez au courant ? 😮

— Bien sûr ! Les lumières ne se montrent qu'aux cœurs purs. Et Allah m'a dit que tu viendrais aujourd'hui. 🌟

Wassim ouvre grand ses yeux. 😮 Allah lui a parlé de lui ?! LUI ?!`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: 'Assieds-toi, Wassim. Aujourd\'hui, je vais te montrer un secret très spécial ! 🌟',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Un secret ?! MOI ?! 😍 Quel secret ?!',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s3',
          background: 'garden',
        },

        // --- wt1c4s3: Les cinq trésors ---
        {
          id: 'wt1c4s3',
          chapterId: 'wt1c4',
          title: 'Les cinq trésors',
          narration: `Sidi Mu'adh touche le tronc de l'arbre doré. ✨🌳 Et soudain... WOW ! Cinq FLEURS géantes poussent devant eux ! 🌺🌺🌺🌺🌺

Chaque fleur est d'une couleur différente :
- Une fleur ROUGE 🌹
- Une fleur BLEUE 🌸
- Une fleur VERTE 🌿
- Une fleur DORÉE 🌻
- Une fleur BLANCHE 🤍

— Wassim, dit Sidi Mu'adh. Chaque fleur est un TRÉSOR ! 💎 Pas un trésor avec de l'or et des diamants. Non ! Un trésor BEAUCOUP plus précieux ! 🌟

— Plus précieux que l'or ?! 😮 demande Wassim.

— OUI ! Mille fois plus précieux ! 💚 Ce sont les trésors du cœur. Ceux qui font de toi un super héros !

Les yeux de Wassim brillent comme des étoiles ! ⭐ Il est prêt à découvrir les trésors !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Un trésor plus précieux que l\'or ?! 😮 J\'adore les trésors ! Dis-moi, Sidi Mu\'adh !',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Patience, petit Wassim ! ⏳ Écoute bien, et tu comprendras ! 💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s4',
          background: 'garden',
        },

        // --- wt1c4s4: La fleur rouge ---
        {
          id: 'wt1c4s4',
          chapterId: 'wt1c4',
          title: 'La fleur rouge — Al-Rahma',
          narration: `Sidi Mu'adh touche la fleur ROUGE. 🌹 Elle brille d'une lumière rouge chaude. ❤️✨

— Le premier trésor s'appelle AL-RAHMA ! 🌹 La MISÉRICORDE !

— C'est quoi, la miséricorde ? demande Wassim.

— C'est être doux et gentil avec tout le monde ! 💝 Quand tu as donné ton biscuit au petit chat... ça, c'était Al-Rahma ! 🐱

— Oh ! Alors je l'ai déjà ?! 😃

— OUI ! 💚 Et chaque fois que tu es gentil, cette fleur grandit un peu plus ! Regarde ! 🌹✨

La fleur rouge pulse et brille ! Wassim sent une chaleur douce dans son cœur. ❤️

— Al-Rahma, c'est comme un manteau chaud pour le cœur des autres ! 💝 Quand tu es gentil, tu réchauffes le cœur de quelqu'un. Et tu sais quoi ? Le Prophète ﷺ était appelé « Rahma lil-'Alamin » — « Miséricorde pour les mondes » ! 🌟

— Rahma lil-'Alamin... répète Wassim doucement. C'est trop beau ! 😍`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Al-Rahma ! La miséricorde ! 💝 Je veux être doux comme le Prophète ! 🌟',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Chaque acte de gentillesse fait grandir ta fleur rouge ! Continue, Wassim ! 🌹💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s5',
          background: 'garden',
        },

        // --- wt1c4s5: La fleur bleue ---
        {
          id: 'wt1c4s5',
          chapterId: 'wt1c4',
          title: 'La fleur bleue — As-Sabr',
          narration: `Maintenant, Sidi Mu'adh touche la fleur BLEUE. 🌸 Une lumière bleue douce l'entoure. 💙✨

— Le deuxième trésor s'appelle AS-SABR ! 🌸 La PATIENCE !

— Ah ! La patience ! Je connais ! dit Wassim. Quand j\'ai attendu Souhayl pour sauver l\'oiseau !

— Exactement ! 💚 Tu as été patient au lieu de paniquer. As-Sabr, c'est attendre calmement quand c\'est difficile. ⏳

La fleur bleue se met à briller. Wassim se sent CALME. Tranquille. Comme l'eau du ruisseau. 💦

— Tu sais, Wassim, la patience est la clé de tout ! 🗝️ Avec la patience, on peut tout supporter. Le Prophète ﷺ a dit : « Celui qui est patient, Allah est avec lui. » 🌟

— Allah est avec moi ?! 😍 dit Wassim.

— OUI ! Quand tu es patient, Allah est TOUJOURS avec toi ! 💚 Pas seulement à tes côtés, mais dans ton cœur ! 💙`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'As-Sabr ! Quand je suis patient, Allah est avec moi ?! 💙😍',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'OUI ! Allah aime les patients ! ⏳ Ta fleur bleue est magnifique ! 🌸💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s6',
          background: 'garden',
        },

        // --- wt1c4s6: La fleur verte ---
        {
          id: 'wt1c4s6',
          chapterId: 'wt1c4',
          title: 'La fleur verte — Al-Shukr',
          narration: `Sidi Mu'adh touche la fleur VERTE. 🌿 Une lumière verte fraîche l'entoure. 💚✨

— Le troisième trésor s'appelle AL-SHUKR ! 🌿 La GRATITUDE !

— Al-Shukr ! Ça veut dire Alhamdulillah ! dit Wassim tout de suite ! 🌟

— BRAVO ! 💚 Tu te souviens ! Al-Shukr, c\'est dire MERCI à Allah pour TOUT ! Pour les fleurs, le soleil, la pluie, tes parents, tes frères, les animaux... TOUT ! 🌟

La fleur verte grandit et grandit ! 🌿✨ Wassim sent une joie immense dans son cœur ! C'est comme un feu d'artifice de bonheur ! 🎆💛

— Le Coran dit : « Si vous êtes reconnaissants, Je vous donnerai encore plus ! » 📖 Quand tu dis merci à Allah, Il te donne ENCORE PLUS ! 🎁

— VRAI ?! Mais alors, je dois dire Alhamdulillah TOUT LE TEMPS ! dit Wassim.

— Exactement, petit héros ! 💚🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Al-Shukr ! Alhamdulillah pour TOUT ! 🌿💛 Je vais dire merci tout le temps !',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Quand tu es reconnaissant, Allah te donne encore plus ! C\'est Sa promesse ! 🎁💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s7',
          background: 'garden',
        },

        // --- wt1c4s7: La fleur dorée ---
        {
          id: 'wt1c4s7',
          chapterId: 'wt1c4',
          title: 'La fleur dorée — Al-Ikhlas',
          narration: `Sidi Mu'adh touche la fleur DORÉE. 🌻 Une lumière dorée éblouissante l'entoure ! ✨💛

— Le quatrième trésor s'appelle AL-IKHLAS ! 🌻 La SINCÉRITÉ !

— La sincérité ? C'est quoi ? demande Wassim en plissant les yeux. 🤔

— C'est faire les bonnes choses UNIQUEMENT pour Allah ! 💎 Pas pour que les gens disent « bravo ». Pas pour avoir des cadeaux. Mais parce que tu AIME faire le bien pour Allah ! 🌟

Wassim réfléchit... 🤔

— C'est comme quand j\'aide le chat... je ne le fais pas pour qu\'on me dise merci. Je le fais parce que j\'aime le chat et qu\'Allah veut qu\'on soit gentil ! 🐱💛

— PARFAIT, Wassim ! 🎉 Tu as compris ! Quand tu fais quelque chose de bien uniquement pour Allah, c\'est le plus beau cadeau que tu puisses Lui faire ! 🎁✨

La fleur dorée brille comme un petit soleil ! ☀️ Wassim ferme les yeux et sent la chaleur dans son cœur. 💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Al-Ikhlas ! Faire le bien juste pour Allah ! 💎 Pas pour les compliments !',
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: 'C\'est le trésor le plus pur, Wassim ! Quand ton cœur est sincère, Allah le voit ! 💛🌟',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s8',
          background: 'garden',
        },

        // --- wt1c4s8: La fleur blanche ---
        {
          id: 'wt1c4s8',
          chapterId: 'wt1c4',
          title: 'La fleur blanche — At-Tawakkul',
          narration: `Enfin, Sidi Mu'adh touche la dernière fleur. La fleur BLANCHE. 🤍 Une lumière blanche pure et douce l'entoure. ✨🤍

— Et le dernier trésor... le plus important... s'appelle AT-TAWAKKUL ! 🤍 La CONFIANCE EN ALLAH !

— La confiance en Allah ? 🤲 demande Wassim tout doucement.

— OUI ! C\'est savoir que Allah s\'occupe de toi. TOUJOURS. 💚 Quand tu es triste, Allah est là. Quand tu as peur, Allah est là. Quand tu ne sais pas quoi faire, Allah a déjà la réponse ! 🌟

Wassim sent quelque chose de spécial. Une PAIX immense. Comme un gros câlin venu du ciel. 🤲☁️

— Tu te souviens du petit oiseau tombé ? Tu avais peur pour lui. Mais tu as FAIT CONFIANCE. Tu as cherché de l\'aide. Et Allah a tout arrangé ! 🐦💛

— C\'est vrai ! dit Wassim avec des yeux brillants. Allah s\'est occupé de l\'oiseau ! 🐦✨

— AT-TAWAKKUL, c\'est être comme un petit oiseau qui quitte son nid pour la première fois. Il a peur... mais il sait qu\'Allah tiendra ses ailes ! 🕊️💚`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'At-Tawakkul ! Confiance en Allah ! 🤲 Même quand j\'ai peur, Allah est là ! 🤍',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'C\'est le plus beau trésor, Wassim ! Confie-toi à Allah et Il te guidera ! 🕊️💚🌟',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s9',
          background: 'garden',
          lesson: {
            title: 'At-Tawakkul — La Confiance en Allah',
            content:
              'At-Tawakkul, c\'est confier tout à Allah ! 🤲 Quand tu es triste, peur, ou perdu, Allah est TOUJOURS avec toi ! 🌟 Le Prophète ﷺ a dit : « Si vous vous fiez à Allah comme il se doit, Il vous donnera votre nourriture comme Il la donne aux oiseaux : ils partent le ventre vide et reviennent le ventre plein ! » 🕊️💚',
            quote: 'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },

        // --- wt1c4s9: Le jardin en fête ---
        {
          id: 'wt1c4s9',
          chapterId: 'wt1c4',
          title: 'Le jardin en fête',
          narration: `Quand Sidi Mu'adh a fini de parler, quelque chose de MAGNIFIQUE arrive ! ✨🌸

Les CINQ FLEURS commencent à briller ENSEMBLE ! 🌹💙🌿🌻🤍 Elles éclairent tout le jardin ! Les lumières dorées volent partout ! Les papillons dansent ! 🦋 Les oiseaux chantent ! 🐦 La terre tremble doucement ! ✨

Et puis... un ARC-EN-CIEL apparaît au-dessus de l'arbre doré ! 🌈 Non pas un arc-en-ciel normal... un arc-en-ciel de LUMIÈRE ! Avec les 5 couleurs des 5 trésors ! 🌹💙🌿🌻🤍

Le petit chat fait le plus beau « Miiiaou ! » de sa vie ! 🐱✨

Wassim est bouche bée. 😮 Il n'a jamais rien vu d'aussi beau ! Ses yeux brillent de larmes de joie ! 😢💛

— Sidi Mu'adh... c'est le plus beau moment de ma vie ! chuchote-t-il.

— Non, Wassim. Le plus beau moment, c\'est celui qui vient. 🌟 Ce n\'est que le début de ton aventure ! 💚

Wassim sourit. Son cœur est plein. VRAIMENT plein. Comme une jarre de miel qui déborde ! 🍯💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'C\'est MAGIQUE ! ✨🌈 Les cinq fleurs brillent ! 🌹💙🌿🌻🤍',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Ton cœur est un jardin, Wassim ! 🌸 Cultive ces cinq trésors et il fleurira pour toujours ! 💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt1c4s10',
          background: 'garden',
        },

        // --- wt1c4s10: Le serment de Wassim ---
        {
          id: 'wt1c4s10',
          chapterId: 'wt1c4',
          title: 'Le serment de Wassim',
          narration: `Le soir tombe doucement. 🌅 Le soleil est orange et rose. Le jardin devient calme. Les petites lumières dorées s'endorment une à une. ✨💤

Sidi Mu'adh prend les mains de Wassim dans les siennes. 🤲💚

— Wassim, veux-tu faire une promesse ? demande-t-il doucement.

— Oui, Sidi Mu'adh ! Je veux ! 💛

— Promets-moi de garder ces cinq trésors dans ton cœur :

🌹 Al-Rahma — être gentil avec tout le monde 💝
💙 As-Sabr — être patient quand c'est difficile ⏳
🌿 Al-Shukr — dire Alhamdulillah pour tout 🌟
🌻 Al-Ikhlas — faire le bien seulement pour Allah 💎
🤍 At-Tawakkul — faire confiance en Allah toujours 🤲

Wassim serre les mains de Sidi Mu'adh très fort. 💪

— JE TE LE PROMETS, Sidi Mu'adh ! 🌟 Je garderai ces cinq trésors dans mon cœur pour TOUJOURS ! 💛

Sidi Mu'adh sourit. Ses yeux verts brillent de fierté. 💚

— Je sais que tu le feras, petit héros. 🌟 Maintenant, rentre chez toi. Ta maman t'attend.

Wassim court vers la maison, le cœur débordant de joie ! 🏃💛 Le petit chat court à côté de lui. 🐱✨

Il a les cinq trésors du cœur ! Il est le plus riche des enfants ! 🎉💎

FIN DU TOME 1 ! 🌟
Bravo, Wassim ! Tu as appris les plus beaux secrets du cœur ! 💛🤲✨

Mais attention... ton aventure ne fait que COMMENCER ! 📖🌈`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Je le promets ! Al-Rahma ! As-Sabr ! Al-Shukr ! Al-Ikhlas ! At-Tawakkul ! 🌹💙🌿🌻🤲',
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: 'Mashallah, Wassim ! Tu es un enfant extraordinaire ! 🌟 Que Allah te protège toujours ! 💚🤲',
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'Les Cinq Trésors du Cœur 💎',
            content:
              'Wassim a découvert les 5 trésors les plus précieux du monde ! 💎\n\n🌹 Al-Rahma — La Miséricorde : être gentil 💝\n💙 As-Sabr — La Patience : attendre calmement ⏳\n🌿 Al-Shukr — La Gratitude : dire Alhamdulillah 🌟\n🌻 Al-Ikhlas — La Sincérité : faire le bien pour Allah 💎\n🤍 At-Tawakkul — La Confiance : se confier à Allah 🤲\n\nCes 5 trésors sont dans TON cœur aussi ! Cultive-les chaque jour et tu seras le plus riche des enfants ! 🌟💛',
            quote: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
            source: 'Coran, Sourate Ash-Sharh (94:6)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Ghafla — L\'oubli', 'Al-Kufr bi al-Ni\'ma — L\'ingratitude', 'Al-\'Ajl — La précipitation', 'Al-Riyaa — L\'ostentation'],
  spiritualLesson: 'Ton cœur est un jardin ! 🌸 Cultive les cinq trésors : Al-Rahma (la gentillesse), As-Sabr (la patience), Al-Shukr (la gratitude), Al-Ikhlas (la sincérité), et At-Tawakkul (la confiance en Allah) ! 💎🌹💙🌿🌻🤲',
};
