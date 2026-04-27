import type { Tome } from '@/types/story';

export const tome2_wassim: Tome = {
  id: 'wassim_tome2',
  number: 2,
  title: 'La Bibliothèque Secrète',
  titleAr: 'المكتبة السرية',
  subtitle: 'La lumière du savoir',
  description:
    "Wassim, maintenant âgé de 7 ans, retourne au jardin magique et découvre un passage secret qui le mène à une bibliothèque cachée sous la mosquée Qarawiyyin ! Là, il rencontre les plus grands savants de l'histoire de l'Islam et apprend que la connaissance est la plus belle des lumières ! 📚✨",
  theme: "Al-'Ilm — La Connaissance",
  coverImage: '/images/wassim-tome2-cover.png',
  monsters: [
    "Al-Ghafla — L\'oubli",
    "Al-Kufr bi al-Ni\'ma — L\'ingratitude",
    "Al-\'Ajl — La précipitation",
    "Al-Riyaa — L\'ostentation",
  ],
  spiritualLesson: "La connaissance est la plus grande richesse. Cherche le savoir du berceau jusqu\'à la tombe, et partage-le avec générosité.",
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Livre Magique (الكتاب السحري)
    // ============================================================
    {
      id: 'wt2c1',
      tomeId: 'wassim_tome2',
      number: 1,
      title: 'Le Livre Magique',
      titleAr: 'الكتاب السحري',
      scenes: [
        // --- wt2c1s1: Un an plus tard ---
        {
          id: 'wt2c1s1',
          chapterId: 'wt2c1',
          title: 'Un an plus tard',
          narration: `Bismillah ! ☀️ Wassim a maintenant 7 ans ! 🎂 Joyeux anniversaire, Wassim ! Il est plus grand, plus fort et plus curieux qu'avant !

C'est le matin. Wassim est dans sa chambre. 🏠 Il regarde par la fenêtre. Dehors, les ruelles de Fès sont pleines de vie ! Des marchands vendent des oranges et des dattes. 🍊🌿 Des enfants rient en jouant. 🎉

— Wassim ! Petit-déjeuner ! 📢 appelle maman Aziza depuis la cuisine.

Wassim descend l'escalier en sautillant. 🏃 Il a hâte de voir tout le monde ! À table, Souhayl lit un gros livre. 📖 Nawfel, son petit frère, mange ses galettes en faisant du bruit. 🥟

— Souhayl, tu lis encore ? dit Wassim en s'asseyant.

— Oui ! dit Souhayl sans lever les yeux. C'est un livre d'histoire. Il raconte comment Fès était la capitale du savoir ! Il y avait des milliers de livres ici ! 📚

— Des milliers ?! 😮 dit Wassim.

— Oui ! La bibliothèque de la Qarawiyyin était la plus grande du monde ! 🌟

La Qarawiyyin... Wassim a déjà entendu ce nom. Papa Mehdi en parle souvent. C'est là qu'il enseigne !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'La Qarawiyyin ? C\'est là où papa travaille ? 📖',
              emotion: 'neutral',
            },
            {
              characterId: 'souhayl',
              text: 'Oui ! C\'est la plus ancienne université du monde ! 💡 Et Fès était remplie de savants extraordinaires !',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'J\'aimerais savoir tout ça moi aussi ! 🤩',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s2',
          background: 'home',
        },

        // --- wt2c1s2: Papa et la Qarawiyyin ---
        {
          id: 'wt2c1s2',
          chapterId: 'wt2c1',
          title: 'Papa et la Qarawiyyin',
          narration: `Après le petit-déjeuner, papa Mehdi prépare ses affaires pour aller à la madrasa. 🧔 Il porte sa belle djellaba verte et son turban blanc. Il a l'air très digne !

— Papa ! dit Wassim en tirant doucement la manche de son père. Souhayl dit que la Qarawiyyin est la plus ancienne université du monde ! C'est vrai ? 📚

Papa Mehdi sourit. Il s'accroupit pour être à la hauteur de Wassim. 💛

— C'est tout à fait vrai, mon fils ! 💚 La Qarawiyyin a été fondée il y a plus de mille ans ! C'était le plus grand centre de savoir du monde entier ! Des savants venaient de partout pour étudier ici. D'Afrique, d'Europe, d'Asie... 🌍

— Et ils lisaient des livres ? demande Wassim.

— Oh oui ! BEAUCOUP de livres ! dit papa Mehdi. Les livres étaient comme des trésors ! 📖✨ Chaque livre contenait un monde de connaissances. Les mathématiques, l'astronomie, la médecine, la philosophie, le Coran... Tout !

— Waouh... murmure Wassim. Les livres sont des trésors ? 📚✨

— Oui, mon fils. Le Prophète ﷺ a dit : « Cherchez la connaissance même en Chine ! » 🌟 Ça veut dire que la connaissance est si précieuse qu'on doit la chercher partout, même très loin !

Wassim est émerveillé. 🤩 Il regarde ses mains. Il sait lire maintenant ! Il a appris à l'école ! Les lettres arabes sont comme de petites œuvres d'art. ✍️ Est-ce que lui aussi pourra trouver des trésors dans les livres ?`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: 'La connaissance, Wassim, c\'est la plus grande richesse du monde ! 💚 Même l\'or et l\'argent ne valent pas la connaissance !',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Plus riche que l\'or ?! 😮 VRAIMENT ?!',
              emotion: 'surprised',
            },
            {
              characterId: 'mehdi',
              text: 'Vraiment ! L\'or peut être volé, mais la connaissance reste toujours dans ton cœur ! 📖✨',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s3',
          background: 'home',
          lesson: {
            title: "Al-'Ilm — La Connaissance",
            content:
              "En Islam, la connaissance est la chose la plus précieuse ! 💚 Le Prophète ﷺ a dit : « Cherchez la connaissance du berceau jusqu'à la tombe ! » 📚 Ça veut dire qu'on doit apprendre TOUTE SA VIE ! Pas seulement à l'école, mais TOUS LES JOURS ! Lire, comprendre, réfléchir... C'est la plus grande aventure du monde ! 🌟",
            quote: 'اطْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ',
            source: 'Hadith —Attribué au Prophète ﷺ',
          },
        },

        // --- wt2c1s3: Retour au jardin magique ---
        {
          id: 'wt2c1s3',
          chapterId: 'wt2c1',
          title: 'Retour au jardin magique',
          narration: `Après l'école, Wassim court vers la petite porte verte ! 🏃 Il n'a pas retourné au jardin magique depuis longtemps. Il a grandi. Il est plus grand maintenant. Ses jambes sont plus longues. Il court plus vite !

Il pousse la petite porte verte. 🚪 Crique !

Le jardin est TOUJOURS là ! 😍 Wassim est si content ! Les fleurs sont encore plus belles qu'avant ! 🌺 Il y a des roses rouges, des tulipes jaunes, des lavandes violettes... Le jardin est comme un tableau de couleurs ! 🌈

Le petit ruisseau coule toujours. 💦 Glou ! Glou ! Les papillons volent. 🦋 Les abeilles bourdonnent. 🐝

Et puis... « MIIIAOU ! » 🐱

Le petit chat gris ! Il est devenu un peu plus grand ! Il court vers Wassim et saute dans ses bras ! 🐱💕

— Oh ! Tu m'as reconnu ! dit Wassim en riant. Tu m'as manqué, chaton ! 💛

Le chat ronronne. Rrrron... Rrrron... 💕

Wassim marche dans le jardin avec le chat. Tout est familier et en même temps... DIFFÉRENT. 🤔 Il y a un chemin nouveau qu'il n'avait jamais vu ! Un petit chemin de pierres dorées qui scintillent ! ✨

Le chemin mène loin dans le jardin, vers un endroit que Wassim n'a jamais exploré !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le jardin ! Il est encore plus beau ! 🌺✨ Et toi, chaton, tu as grandi aussi ! 🐱',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Regarde ! Un chemin de pierres dorées ! Où est-ce que ça mène ? 🤔✨',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s4',
          background: 'garden',
        },

        // --- wt2c1s4: Le livre qui brille ---
        {
          id: 'wt2c1s4',
          chapterId: 'wt2c1',
          title: 'Le livre qui brille',
          narration: `Wassim suit le chemin de pierres dorées. ✨ Le petit chat le suit. 🐱 Petits pas après petits pas, ils avancent dans le jardin.

Le chemin les mène à un endroit MAGNIFIQUE ! 😍

C'est un petit kiosque en marbre blanc, tout en rond. 🏛️ Des roses grimpantes l'entourent. 🌹 Et au centre du kiosque, sur un pupitre en bois sculpté, il y a... UN LIVRE ! 📖

Mais ce n'est pas un livre normal ! Ce livre BRILLE ! ✨✨✨ Il émet une lumière dorée et douce, comme la lumière du soleil couchant. Ses pages sont faites d'un parchemin jaune pâle et les lettres sur la couverture sont écrites en OR ! 💛

Wassim s'approche doucement. Son cœur bat très fort. 💓 Le chat s'assied près de ses pieds et regarde le livre aussi.

Sur la couverture, Wassim lit les mots écrits en lettres dorées :

✨ « Kitab Al-'Ilm — Le Livre de la Connaissance » ✨

— Un livre qui brille... murmure Wassim. 😮

Et soudain... le livre s'OUVRE tout seul ! 📖✨ Les pages tournent lentement, comme si le vent les faisait tourner. Et une douce voix résonne dans le kiosque ! 🗣️💫`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'WAOUH ! Un livre qui BRILLE ! ✨📖 C\'est MAGIQUE !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Chaton, tu vois ça ? Les lettres sont en OR ! 💛 Est-ce que le livre va parler ? 🤔',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s5',
          background: 'garden',
        },

        // --- wt2c1s5: La voix du livre ---
        {
          id: 'wt2c1s5',
          chapterId: 'wt2c1',
          title: 'La voix du livre',
          narration: `La voix du livre est douce et chaude, comme la voix d'une maman qui raconte une histoire le soir. 🌙📖

— Assalamou alaykoum, petit Wassim ! 🌟 Je suis le Livre de la Connaissance. Je t'attends depuis très longtemps !

Wassim ouvre grand ses yeux. 😮 Le livre... PARLE ! Il PARLE vraiment !

— Tu... tu m'attendais ? MOI ? dit Wassim.

— Oui, toi ! 💚 dit le livre. Je suis le guide de ceux qui cherchent le savoir. Je ne me montre qu'aux cœurs curieux et purs. Et ton cœur, Wassim, est rempli de curiosité ! 🌟

Le livre tourne ses pages. Des lettres dorées s'envolent et dansent autour de Wassim ! ✨✨ C'est magnifique !

— Wassim, dit le livre. Tu as appris les cinq trésors du cœur dans ce jardin : Al-Rahma, As-Sabr, Al-Shukr, Al-Ikhlas et At-Tawakkul. 🌹💙🌿🌻🤲 Tu te souviens ?

— Oui ! dit Wassim en souriant. La gentillesse, la patience, la gratitude, la sincérité et la confiance ! 💛

— Parfait ! 💚 Ces trésors t'ont préparé pour un nouveau voyage. Un voyage encore plus extraordinaire ! Sous la terre, il y a un endroit MAGIQUE. Une bibliothèque SECRÈTE ! 📚✨

— Une bibliothèque secrète ?! 😍 dit Wassim en sautillant.

— Oui ! Mais pour y entrer, tu dois résoudre une énigme ! 🧩 Es-tu prêt, Wassim ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le livre PARLE ! 😍✨ C\'est incroyable ! Oui, je suis prêt !',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Je me souviens de tous les trésors ! La gentillesse, la patience, la gratitude... 💛 Je suis prêt pour l\'énigme ! 🧩',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s6',
          background: 'garden',
        },

        // --- wt2c1s6: L'énigme du livre ---
        {
          id: 'wt2c1s6',
          chapterId: 'wt2c1',
          title: "L'énigme du livre",
          narration: `Le livre se met à briller encore plus fort ! ✨ Ses pages tournent très vite et s'arrêtent sur une page où il y a une énigme écrite en lettres dorées ! 🧩

La voix du livre lit l'énigme à voix haute :

✨ « Je suis plus légère qu'une plume, mais personne ne peut me porter. Je suis plus précieuse que l'or, mais on ne peut pas me toucher avec les mains. Je grandis quand on me donne, et je diminue quand on me garde pour soi. Les Prophètes m'ont cherchée, les savants m'ont aimée, et Allah m'a ordonnée dans le Coran. Qui suis-je ? » ✨

Wassim réfléchit très fort. 🤔 Il plisse les yeux. Il tapote sa tempe avec son doigt. Le chat tourne autour de lui. 🐱

Plus légère qu'une plume... Plus précieuse que l'or... Ça grandit quand on la donne... Les Prophètes l'ont cherchée... Allah l'a ordonnée...

Wassim sourit ! 😊 Il pense à ce que papa lui a dit ce matin. Et à ce que Sidi Mu'adh lui avait appris dans le jardin !

Est-ce que tu sais la réponse, toi ? 🤔✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Plus légère qu\'une plume... Plus précieuse que l\'or... 🤔 Hmm...',
              emotion: 'neutral',
            },
            {
              characterId: 'wassim',
              text: 'Les Prophètes l\'ont cherchée... Allah l\'a ordonnée... Je crois que je sais ! 💡✨',
              emotion: 'surprised',
            },
          ],
          choices: [
            {
              id: 'wt2c1s6_c1',
              text: "Al-'Ilm — La Connaissance ! 📚✨ — Parce qu'on peut la chercher partout, elle grandit quand on la partage !",
              nextSceneId: 'wt2c1s7a',
              badgeId: 'ilm',
              isCorrect: true,
            },
            {
              id: 'wt2c1s6_c2',
              text: "L'or et les diamants ! 💎 — Parce qu'ils sont précieux !",
              nextSceneId: 'wt2c1s7b',
            },
          ],
          background: 'garden',
        },

        // --- wt2c1s7a: La bonne réponse ---
        {
          id: 'wt2c1s7a',
          chapterId: 'wt2c1',
          title: 'BRAVO, Wassim !',
          narration: `— AL-'ILM ! LA CONNAISSANCE ! s'écrie Wassim. 📚✨

Le livre se met à briller comme UN SOLEIL ! ☀️✨✨✨ Des étoiles dorées s'envolent de ses pages ! Le jardin entier est illuminé ! ⭐🌟💫

— BRAVO, WASSIM ! 🎉 dit le livre avec une voix joyeuse. C'est la bonne réponse ! Tu es vraiment intelligent ! 💚

— C'est ça, n'est-ce pas ?! dit Wassim en sautillant de joie ! 😍

— OUI ! La connaissance est plus légère qu'une plume — elle est dans ton esprit ! Elle est plus précieuse que l'or — l'or se finit, la connaissance reste ! Elle grandit quand on la partage — plus tu enseignes, plus tu apprends ! Les Prophètes l'ont cherchée — le Prophète ﷺ disait « Cherchez la connaissance ! » Et Allah l'a ordonnée dans le Coran — « Lis ! Au nom de ton Seigneur ! » 📖✨

Le livre ferme lentement. Puis il s'élève dans les airs ! 📖✨ Il flotte au-dessus de Wassim et le guide vers un endroit du jardin qu'il n'a jamais vu.

— Suis-moi, Wassim ! dit le livre. 🌟 Je vais te montrer le chemin vers la bibliothèque secrète ! 📚

Le petit chat court devant. 🐱 Wassim suit le livre lumineux. Son aventure est sur le point de commencer ! 🌟

BRAVO, Wassim ! 🎉 Tu as résolu l'énigme du Livre de la Connaissance ! 📚✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'YES ! J\'ai trouvé ! 💚📚 La connaissance ! La plus grande richesse du monde !',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Livre magique, emmène-moi à la bibliothèque secrète ! Je suis prêt ! 🌟',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s1',
          background: 'garden',
          earnedBadgeId: 'ilm',
          lesson: {
            title: "Al-'Ilm — La Connaissance est une lumière",
            content:
              "BRAVO ! 🎉 Wassim a découvert que la connaissance est le plus grand trésor ! 💚 En Islam, le PREMIER mot que le Coran a révélé est « IQRA' » — « LIS ! » 📖 Le Prophète ﷺ a dit : « La connaissance est la lumière que Allah met dans le cœur. » Quand tu apprends, tu deviens plus lumineux ! ✨ Et la chose la plus belle : quand tu partages ce que tu sais avec les autres, ta connaissance grandit encore plus ! 💛📚",
            quote: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
            source: 'Coran, Sourate Al-Alaq (96:1)',
          },
        },

        // --- wt2c1s7b: La mauvaise réponse ---
        {
          id: 'wt2c1s7b',
          chapterId: 'wt2c1',
          title: 'Pas tout à fait...',
          narration: `— L'or et les diamants ? dit Wassim. 💎

Le livre brille un peu moins fort. 😔 Il tremble doucement, comme pour dire « pas tout à fait... ».

— Non, Wassim... dit le livre doucement. 💚 L'or et les diamants sont précieux, c'est vrai. Mais ils ne grandissent pas quand on les donne ! Si tu donnes une pièce d'or, tu as moins d'or ! Mais si tu donnes la connaissance... tu en as PLUS ! 📚✨

Wassim réfléchit. 🤔 Hmm... C'est vrai ! Quand on apprend quelque chose et qu'on l'enseigne à quelqu'un d'autre, tout le monde sait ! La connaissance grandit !

— Et les Prophètes ne cherchaient pas l'or... dit Wassim en réfléchissant. Ils cherchaient quelque chose de plus important ! 🤔

— Exactement ! 💚 dit le livre. Réfléchis encore, Wassim. Qu'est-ce qui est dans ta tête et dans ton cœur ? Qu'est-ce qui est lumière ? ✨

Wassim ferme les yeux. Il pense à ce que papa lui a dit : « La connaissance est plus précieuse que l'or ! » 💛

Et soudain... 💡

— AL-'ILM ! LA CONNAISSANCE ! s'écrie Wassim ! 📚✨

— BRAVO, WASSIM ! 🎉 dit le livre en brillant comme un soleil ! Tu as trouvé ! Viens, suis-moi ! Je vais te montrer le chemin de la bibliothèque secrète ! 🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Ah non, ce n\'est pas ça... 🤔 Réfléchissons, Wassim !',
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: "AL-'ILM ! La connaissance ! 📚✨ J'ai trouvé ! Papa avait raison !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s1',
          background: 'garden',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Passage Secret (النفق السري)
    // ============================================================
    {
      id: 'wt2c2',
      tomeId: 'wassim_tome2',
      number: 2,
      title: 'Le Passage Secret',
      titleAr: 'النفق السري',
      scenes: [
        // --- wt2c2s1: La porte cachée ---
        {
          id: 'wt2c2s1',
          chapterId: 'wt2c2',
          title: 'La porte cachée',
          narration: `Le livre lumineux guide Wassim à travers le jardin. 📖✨ Il vole au-dessus de lui comme une lanterne magique ! Le petit chat court à côté de Wassim. 🐱 Ses pattes font tic-tac-tic-tac sur les pierres dorées.

Ils arrivent devant un vieux mur couvert de lierre vert. 🌿 Le lierre est si épais qu'on ne voit même pas le mur ! Wassim regarde autour de lui. Il n'y a RIEN ici. Juste un mur...

— Ici ? dit Wassim en regardant le livre. Il n'y a rien !

Le livre brille plus fort et éclaire le mur. ✨ Et là... Wassim voit quelque chose ! Dans le lierre, il y a une PORTE ! 🚪 Une petite porte en bois sculpté, avec des étoiles et des croissants gravés dessus ! ⭐🌙

C'est une porte ancienne. TRÈS ancienne. Le bois est sombre et les sculptures sont usées par le temps. Mais les étoiles et les croissants brillent quand le livre s'en approche ! ✨

— Cette porte, dit le livre, mène au passage secret. 🌿 Elle a été construite il y a très, très longtemps. Seuls les cœurs purs peuvent l'ouvrir.

Le livre descend et se pose devant la porte. Ses pages tournent. Et une lumière dorée sort du livre et entre dans les sculptures de la porte ! ✨🚪

CLAC ! CLAC ! CLAC !

La porte s'ouvre lentement ! 😮 Derrière, il y a... un escalier ! Un escalier qui descend dans les profondeurs de la terre ! 🕳️✨

Wassim regarde dans le noir. C'est profond. Très profond. Un petit courant d'air frais monte de l'escalier. 💨 Il sent une odeur de vieux parchemin et d'encens. 📜

— Tu as peur, Wassim ? demande le livre doucement.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Une porte cachée ! ✨🚪 Et un escalier qui descend sous la terre ! 😮',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Un petit peu peur... 💨 Mais j\'ai mon chaton avec moi ! Et toi, le livre magique ! 🐱📖',
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 'wt2c2s1_c1',
              text: 'Descendre l\'escalier avec courage ! 🧗✨ — Allah est avec moi !',
              nextSceneId: 'wt2c2s2',
              badgeId: 'tawakkul',
              isCorrect: true,
            },
            {
              id: 'wt2c2s1_c2',
              text: 'Revenir plus tard... 😟 — C\'est trop sombre en bas !',
              nextSceneId: 'wt2c2s2b',
            },
          ],
          background: 'garden',
        },

        // --- wt2c2s2: Le passage secret ---
        {
          id: 'wt2c2s2',
          chapterId: 'wt2c2',
          title: 'Le passage secret',
          narration: `Wassim prend une grande respiration. 💪 Il regarde le ciel. ✨

— Bismillah ! dit Wassim fort et clair. 🤲

Il pose son pied sur la première marche. L'escalier est en pierre. C'est froid sous ses pieds. 🧱 Le petit chat le suit. 🐱 Ses yeux dorés brillent dans le noir comme deux petites lanternes ! ✨

Marche après marche, Wassim descend. Le livre lumineux flotte devant lui et éclaire le chemin. 📖🔦 Les murs de l'escalier sont en pierre ancienne. Il y a des dessins gravés dessus. Des étoiles ⭐, des lunes 🌙, des mots en arabe calligraphié ✍️...

Wassim descend, descend, descend... Il compte les marches. 10... 20... 30... 40... 💭

Et puis, il arrive en bas ! 🏛️

WOW ! 😍

Il est dans un long couloir souterrain ! Mais ce n'est pas un couloir normal ! Les murs sont recouverts de MOSAÏQUES ! 🎨 Des bleus, des blancs, des dorés... Comme dans les vieilles mosquées de Fès ! Et sur le plafond, des milliers de petites étoiles lumineuses brillent ! ✨⭐✨ C'est comme marcher sous un ciel étoilé !

— Masha'Allah... murmure Wassim. C'est... c'est BEAU ! 😍

Le couloir est très long. Wassim marche. Le chat marche. Le livre flotte devant eux. 📖✨ Et le couloir s'illumine au passage de Wassim, comme si sa présence donnait vie à la lumière ! 💚

Mais au bout du couloir, il y a quelque chose d'étrange... Une porte immense en métal doré ! 🚪✨ Et devant la porte, quelqu'un attend... 👤`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Bismillah ! Je descends ! 💪🤲 Allah est avec moi !',
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: 'Regarde, chaton ! Des étoiles sur le plafond ! C\'est comme un ciel souterrain ! ✨⭐',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s3',
          background: 'inner_world',
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'At-Tawakkul — La Confiance en Allah',
            content:
              'Wassim a fait confiance à Allah et il est descendu dans le passage secret ! 💚 Quand on est dans le noir ou quand on a peur, on dit « Bismillah ! » et on fait confiance à Allah ! 🤲 Allah est TOUJOURS avec nous, même quand on ne Le voit pas ! Le Prophète ﷺ a dit : « Si vous faisiez confiance à Allah comme les oiseaux font confiance, Il vous nourrirait comme Il les nourrit. » 🐦💛',
            quote: 'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },

        // --- wt2c2s2b: Revenir plus tard ---
        {
          id: 'wt2c2s2b',
          chapterId: 'wt2c2',
          title: 'Un peu de courage !',
          narration: `Wassim recule d'un pas. 😟 C'est vrai que l'escalier est sombre et profond. Son cœur bat fort. 💓

Mais le livre lumineux descend vers lui et sa lumière réchauffe son visage. 📖✨

— Wassim, dit le livre doucement. La peur est normale. Même les plus grands savants ont eu peur ! 💚 Mais sais-tu ce qui est plus fort que la peur ?

— Non... dit Wassim.

— La confiance ! At-Tawakkul ! ✨ Quand tu fais confiance à Allah, tu n'as plus besoin d'avoir peur. Car Allah est TOUJOURS avec toi ! 🤲

Le petit chat vient frotter sa tête contre la jambe de Wassim. 🐱💕 Miiiaou... Il lui dit : « N'aie pas peur, je suis là ! »

Wassim regarde le chat. Puis le livre lumineux. Puis l'escalier. 💪

— Tu as raison ! dit Wassim. Bismillah ! 🤲 Je suis fort parce qu'Allah est avec moi !

Et Wassim descend l'escalier avec courage ! 🧗✨ Bravo, Wassim !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'J\'ai un peur... 😟 Mais non ! Je suis courageux ! Bismillah ! 💪🤲',
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: 'Viens, chaton ! On y va ensemble ! 🐱💚',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s3',
          background: 'garden',
        },

        // --- wt2c2s3: Le gardien de la porte ---
        {
          id: 'wt2c2s3',
          chapterId: 'wt2c2',
          title: 'Le gardien de la porte',
          narration: `Devant la porte dorée, un personnage mystérieux attend. 👤 Il est grand. Il porte un long manteau bleu nuit avec des étoiles brodées. 🌙 Il a une couronne de lumière sur la tête. 👑✨ Et son visage est caché par un voile de soie argentée. On ne voit que ses yeux... qui brillent comme deux lunes ! 🌙🌙

Le petit chat s'arrête net. Ses poils se hérissent. 🐱 pilo pilo ! Il grogne doucement. 😺

— Ne crains rien, petit chat, dit l'homme d'une voix profonde et douce. Je suis le Gardien du Savoir. 🌟 Je protège la bibliothèque secrète depuis plus de mille ans.

Wassim serre les poings. 💪 Il a un peu peur, mais il se souvient des mots du livre : la confiance en Allah !

— Bonjour, Monsieur le Gardien ! dit Wassim bravement. 🤲 Je m'appelle Wassim. J'ai 7 ans. Je suis venu chercher la connaissance ! 📚

Le Gardien le regarde avec ses yeux lunaires. 🌙 Puis... il sourit. 😊

— Wassim... dit-il lentement. Je te connais. On m'a parlé de toi. Tu as trouvé les cinq trésors du cœur dans le jardin magique. 🌹💙🌿🌻🤲 Mais le savoir ne s'ouvre pas si facilement. Pour entrer dans la bibliothèque, tu dois me prouver que tu as gardé ces trésors dans ton cœur !

— D'accord ! dit Wassim. Posez-moi vos questions ! 📝

Le Gardien lève la main. ✋ Et la porte dorée derrière lui commence à briller ! ✨🚪`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Je suis venu chercher la connaissance, Monsieur ! 📚 Je suis prêt ! 💪',
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: 'Posez-moi vos questions ! Je me souviens des cinq trésors ! 💛🌹💙🌿🌻',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s4',
          background: 'inner_world',
        },

        // --- wt2c2s4: L'épreuve de la gentillesse ---
        {
          id: 'wt2c2s4',
          chapterId: 'wt2c2',
          title: "L'épreuve de la gentillesse",
          narration: `Le Gardien lève un doigt. ☝️

— Première question, Wassim. 💚

Le couloir se transforme ! ✨ Wassim n'est plus dans le passage souterrain. Il est dans un JARDIN ! Un jardin magnifique ! 🌺 Mais au milieu du jardin, il y a un petit garçon qui pleure. 😢💦

— Le petit garçon a perdu son jouet, dit le Gardien. Il est triste. Que vas-tu faire, Wassim ?

Wassim regarde le petit garçon. Il pleure tellement ! 😢 Son jouet est tombé dans le petit ruisseau. L'eau l'emporte doucement... 💦🧸

Le cœur de Wassim serre. 💔 Il sait ce que c'est de perdre quelque chose qu'on aime ! Il se souvient du petit oiseau tombé du nid. Il se souvient du chat qui avait faim. 💛

Que doit faire Wassim ? 🤔`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le petit garçon pleure ! 😢 Son jouet est dans l\'eau !',
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: 'Je dois l\'aider ! Personne ne doit pleurer tout seul ! 💛',
              emotion: 'determined',
            },
          ],
          choices: [
            {
              id: 'wt2c2s4_c1',
              text: 'Aider le petit garçon à récupérer son jouet ! 💛🧸 — Al-Rahma ! La gentillesse !',
              nextSceneId: 'wt2c2s5',
              badgeId: 'rahma',
              isCorrect: true,
            },
            {
              id: 'wt2c2s4_c2',
              text: 'Continuer son chemin — ce n\'est pas mon jouet 😐',
              nextSceneId: 'wt2c2s5b',
            },
          ],
          background: 'garden',
        },

        // --- wt2c2s5: La réponse gentille ---
        {
          id: 'wt2c2s5',
          chapterId: 'wt2c2',
          title: 'La réponse gentille',
          narration: `Wassim court vers le petit garçon ! 🏃💛

— Ne pleure pas ! dit Wassim. Je vais t'aider ! 💛

Wassim marche dans le ruisseau. 💦 L'eau est fraîche mais pas trop froide. Il tend la main... Allonge le bras... Et IL ATTRAPE LE JOUET ! 🧸✨

— Voilà ! dit Wassim en donnant le jouet au petit garçon. Tiens ! 🎁

Le petit garçon arrête de pleurer. Son visage s'illumine ! 😊

— Merci ! Merci beaucoup ! dit le petit garçon.

Et soudain... le petit garçon ET le jardin disparaissent ! ✨ Wassim est de retour dans le couloir ! Le Gardien le regarde avec un sourire.

— BRAVO, Wassim. 💚 Tu as choisi Al-Rahma — la gentillesse. Tu n'as pas laissé quelqu'un pleurer tout seul. Le savoir n'a pas de valeur sans gentillesse. Un savant qui n'est pas gentil est comme une lampe sans lumière ! 🕯️

— Merci ! dit Wassim en souriant. 💛

Le Gardien lève deux doigts. ✌️

— Deuxième question...`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Voilà ton jouet ! 🧸 Ne pleure plus ! 💛',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'La gentillesse, c\'est la première chose à avoir ! Avant même le savoir ! 💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s6',
          background: 'inner_world',
          earnedBadgeId: 'rahma',
        },

        // --- wt2c2s5b: Le chemin sans gentillesse ---
        {
          id: 'wt2c2s5b',
          chapterId: 'wt2c2',
          title: 'Le chemin sans gentillesse',
          narration: `Wassim hésite. Il regarde le petit garçon qui pleure. 😢 Son cœur lui dit d'aider, mais il veut continuer son chemin...

Mais Wassim s'arrête. Il se souvient du chat à qui il a donné son biscuit. 🍪 Et du petit oiseau qu'il a sauvé avec Souhayl. 🐦

— Non ! dit Wassim fort. Je ne peux pas laisser quelqu'un pleurer ! 💛

Il court vers le petit garçon et récupère son jouet dans le ruisseau ! 💦🧸 Le petit garçon sourit ! 😊

Le jardin disparaît. Wassim est de retour devant le Gardien. 🌟

— Tu as hésité, Wassim, dit le Gardien. Mais ton cœur t'a guidé vers la gentillesse. C'est bien ! 💚 Le cœur est la meilleure boussole. N'oublie jamais : la gentillesse est plus importante que le savoir. Un savant sans gentillesse est comme une lampe éteinte. 🕯️

— Je m'en souviendrai ! dit Wassim. 💛

— Bien ! Deuxième question... ✌️`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Non ! Je ne peux pas l\'abandonner ! 💛 Viens, je vais t\'aider !',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s6',
          background: 'inner_world',
        },

        // --- wt2c2s6: L'épreuve de la patience ---
        {
          id: 'wt2c2s6',
          chapterId: 'wt2c2',
          title: "L'épreuve de la patience",
          narration: `Le couloir change encore ! ✨ Wassim se retrouve devant une énorme porte en pierre. 🚪 Elle est verrouillée. Il y a un cadenas avec un code à 4 chiffres. 🔢

Au-dessus du cadenas, une inscription :

✨ « La patience est la clé du paradis. » ✨

Et quatre symboles sont gravés sur la porte : une fleur 🌹, une goutte d'eau 💧, un livre 📖, et une étoile ⭐.

Le Gardien apparaît. 🌙

— Pour ouvrir cette porte, tu dois être PATIENT. Le code apparaîtra... mais pas tout de suite ! Tu dois attendre. ⏳

Wassim regarde la porte. Il attend. ⏳ Une minute... Deux minutes... C'est long ! Il commence à être impatient ! 😤

— C'est long ! Je veux savoir ! dit Wassim.

— La vraie connaissance prend du temps, Wassim, dit le Gardien. Les grands savants ne sont pas devenus savants en un jour ! Ibn Sina a passé des ANNÉES à étudier ! Al-Ghazali a passé des ANNÉES à réfléchir ! La patience est le secret du savoir ! ⏳📚

Wassim prend une grande respiration. 💨 Il ferme les yeux. Il pense à Sidi Mu'adh sous son olivier. Il pense au mot « Sabr » — la patience. ⏳

Et lentement, le code apparaît sur le cadenas : 1... 4... 3... 7... 🔢✨

Wassim tourne le cadenas. CLAC ! La porte s'ouvre ! 🚪

— BRAVO ! 💚 dit le Gardien. Tu as été patient ! La patience est la clé de tout ! ⏳🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'J\'attendrai ! ⏳ La patience est la clé ! Les savants ont été patients, moi aussi ! 💪📚',
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: 'Le code apparaît ! 1... 4... 3... 7 ! CLAC ! La porte est ouverte ! 🚪✨',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c2s7',
          background: 'inner_world',
          lesson: {
            title: 'As-Sabr — La Patience dans le savoir',
            content:
              'Wassim a été patient ! ⏳ En Islam, la patience est la clé de TOUT ! Surtout pour apprendre ! 📚 Les grands savants musulmans comme Ibn Sina et Al-Ghazali ont passé des ANNÉES à étudier ! On ne devient pas savant en un jour ! Le Prophète ﷺ a dit : « La patience est une lumière. » ✨ Quand tu étudies et que c\'est difficile, sois patient ! Allah récompense les patients ! 💛',
            quote: 'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',
            source: 'Coran, Sourate Az-Zumar (39:10)',
          },
        },

        // --- wt2c2s7: La porte s'ouvre ---
        {
          id: 'wt2c2s7',
          chapterId: 'wt2c2',
          title: 'La porte s\'ouvre',
          narration: `La porte en pierre s'ouvre avec un grand bruit : BOOOOM ! 🚪💥

Et là... 😮

Une lumière DOUCE et CHAUDE sort de la porte ! ✨ Pas une lumière normale. Une lumière qui réchauffe le cœur. Une lumière qui sent bon l'encens, le miel et les roses ! 🌹🍯🕯️

Le Gardien fait un pas de côté. 🌙

— Tu as réussi les épreuves, Wassim. 💚 Tu as montré que tu as un cœur gentil et patient. Le savoir est en sécurité avec toi.

— Merci, Monsieur le Gardien ! 🤲 dit Wassim.

— Mais surtout, Wassim... dit le Gardien en baissant la voix. N'oublie JAMAIS ceci : la connaissance que tu vas découvrir est un AMANAH — un dépôt sacré. 🤲 Ce n'est pas pour toi seul. C'est pour que tu la partages avec le monde entier. Un savoir qui n'est pas partagé est comme un trésor enterré sous la terre. 📚✨

— Je comprends ! dit Wassim en hochant la tête. 💛

— Va maintenant, Wassim. La bibliothèque t'attend. 🌟

Wassim entre dans la lumière. ✨ Le petit chat le suit. 🐱 Le livre lumineux flotte devant lui. 📖

Et la porte se referme doucement derrière eux... 🚪✨

BRAVO, Wassim ! 🎉 Tu as traversé le passage secret ! Tu es sur le point de découvrir la BIBLIOTHÈQUE DES LUMIÈRES ! 📚✨🌟`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'La connaissance est un dépôt sacré ! Je dois la partager ! 📚✨ Je le promets ! 🤲',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Allons-y, chaton ! La bibliothèque nous attend ! 🐱🌟',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s1',
          background: 'golden_city',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Bibliothèque des Lumières (مكتبة الأنوار)
    // ============================================================
    {
      id: 'wt2c3',
      tomeId: 'wassim_tome2',
      number: 3,
      title: 'La Bibliothèque des Lumières',
      titleAr: 'مكتبة الأنوار',
      scenes: [
        // --- wt2c3s1: La bibliothèque magique ---
        {
          id: 'wt2c3s1',
          chapterId: 'wt2c3',
          title: 'La bibliothèque magique',
          narration: `Wassim ouvre les yeux. Et il reste BOUCHE BÉE. 😮💫

DEVANT LUI, la PLUS GRANDE et la PLUS BELLE bibliothèque du monde ! 📚✨ C'est un gigantesque espace souterrain ! Le plafond est si haut qu'on dirait qu'il touche le ciel ! Et sur le plafond, des milliers d'étoiles brillent ! ⭐✨⭐

Il y a des étagères partout ! Des centaines ! Des MILLIERS d'étagères ! 📚📚📚 Remplies de livres ! Des livres de toutes les tailles, de toutes les couleurs ! Des petits livres rouges, des grands livres bleus, des livres verts avec des lettres dorées... 📖📘📗

Au centre de la bibliothèque, il y a une immense fontaine en marbre. 💦 L'eau qui en sort est LUMINEUSE ! Elle brille d'une lumière bleue et argentée ! ✨ Et l'eau chante doucement... une mélodie ancienne et belle. 🎵

Des escaliers magnifiques montent et descendent vers des galeries remplies de livres. 🏛️ Des lustres en cristal illuminent chaque recoin. 🌟

Et le plus incroyable... Il y a des IMAGES flottantes dans l'air ! ✨ Des silhouettes lumineuses, transparentes comme de la fumée dorée. Elles se promènent entre les étagères. Elles lisent des livres. Elles discutent. 👥✨

— Ce sont les fantômes ? demande Wassim. 👻

Le livre lumineux rit doucement. 📖😊

— Non, Wassim ! Ce sont les APPARITIONS des grands savants ! 💚 Leurs âmes brillent ici depuis des siècles ! Ils sont venus te rencontrer !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'C\'est... c\'est le plus bel endroit du MONDE ! 📚✨ De partout ! Des milliers de livres !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Les silhouettes lumineuses... Ce sont les savants ?! 😮✨ Je vais rencontrer de VRAIS savants ?!',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s2',
          background: 'golden_city',
        },

        // --- wt2c3s2: Fatima al-Fihri ---
        {
          id: 'wt2c3s2',
          chapterId: 'wt2c3',
          title: 'Fatima al-Fihri',
          narration: `Une silhouette lumineuse s'approche de Wassim. ✨ C'est une femme ! 👩 Elle porte une djellaba blanche et un voile fin. Son visage est souriant et ses yeux brillent d'une lueur dorée. 🌟

— Assalamou alaykoum, petit Wassim ! 💚 dit-elle d'une voix douce comme de la soie.

— Wa alaykoum salam ! dit Wassim poliment. 🤲 Qui êtes-vous, Madame ?

— Je m'appelle Fatima al-Fihri. 💛

Wassim ouvre grand ses yeux ! 😮 Fatima al-Fihri ! Il a entendu ce nom ! Papa lui en a parlé !

— TU es Fatima al-Fihri ?! Celle qui a fondé la Qarawiyyin ?! 😍

— Oui, mon petit ! 💚 dit Fatima en souriant. Il y a très, très longtemps, j'étais une femme de Fès. J'avais hérité d'une grande richesse de mon père. Et tu sais ce que j'ai fait avec tout cet argent ?

— Non... dit Wassim.

— Je l'ai donné pour construire la plus grande université du monde ! 🏛️✨ La Qarawiyyin ! J'ai utilisé ma richesse pour le SAVOIR ! Car la connaissance, Wassim, c'est la richesse qui ne se perd JAMAIS ! 📚

Fatima fait un geste et des images lumineuses apparaissent. ✨ Wassim voit la Qarawiyyin en train d'être construite ! Les ouvriers posent les pierres une par une ! 🏗️ Les calligraphes écrivent sur les murs ! ✍️

— J'ai voulu créer un endroit où TOUT LE MONDE pouvait apprendre, dit Fatima. Les hommes et les femmes. Les riches et les pauvres. Car le savoir n'appartient à personne. Il appartient à tous ! 💛

Wassim est ému. 😢 Une femme a construit la plus grande université du monde !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Madame Fatima ! C\'est vous qui avez créé la Qarawiyyin ?! 😍 C\'est INCROYABLE !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Vous avez donné tout votre argent pour le savoir ? 💛 C\'est le plus bel acte de générosité !',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s3',
          background: 'golden_city',
          lesson: {
            title: 'Fatima al-Fihri — La femme qui a construit une université',
            content:
              'Fatima al-Fihri était une femme EXTRAORDINAIRE ! 💚 Elle a vécu à Fès il y a plus de 1000 ans. Avec sa richesse, elle a construit la QARAWIYYIN, la plus ancienne université du monde ! 🏛️ Elle a montré que les femmes aussi peuvent changer le monde par le savoir ! En Islam, les hommes ET les femmes doivent chercher la connaissance ! 📚 Le Prophète ﷺ a dit : « Chercher la connaissance est un devoir pour chaque Musulman et chaque Musulmane. » 🌟',
            quote: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
            source: 'Hadith — Ibn Majah',
          },
        },

        // --- wt2c3s3: Ibn Sina ---
        {
          id: 'wt2c3s3',
          chapterId: 'wt2c3',
          title: 'Ibn Sina',
          narration: `Une autre silhouette lumineuse s'avance ! ✨ C'est un homme avec une longue barbe et des yeux très brillants. 👨‍🏫 Il porte un turban et un manteau vert foncé.

— Assalamou alaykoum, Wassim ! 💚 Je suis Ibn Sina.

— IBN SINA ?! 😮 dit Wassim. Le docteur ? Celui qui a écrit le livre de la médecine ?

— Oui ! 😊 dit Ibn Sina en riant. On m'appelait aussi Avicenne. J'ai vécu il y a mille ans. J'étais médecin, philosophe, mathématicien... 📚 Mais sais-tu pourquoi je suis devenu savant ?

— Non... dit Wassim.

— Parce que je LISAIS TOUS LES JOURS ! 📖✨ Quand j'étais petit, j'avais ton âge ! J'ai lu TOUT ce que je pouvais trouver ! Les livres de mathématiques, les livres de médecine, les livres d'astronomie... Je lisais la NUIT ! 🌙

Ibn Sina fait apparaître des images lumineuses. ✨ Wassim voit un petit garçon, assis sous une lampe, en train de lire un livre TRES GRAND ! 📖 Le petit garçon lit, lit, lit... et les lettres s'envolent du livre et entrent dans sa tête ! ✨🧠

— J'ai écrit le « Canon de la Médecine », dit Ibn Sina fièrement. C'est un livre qui a été utilisé pendant des CENTAINES d'années dans toutes les universités du monde ! Les médecins en Europe, en Asie, en Afrique... tout le monde l'utilisait ! 🌍

— WOW ! dit Wassim. Et tu étais musulman ?

— Bien sûr ! 💚 L'Islam m'a appris que la science est un don d'Allah. Et quand Allah te donne un don, tu dois l'utiliser pour aider les gens ! 💛 Guérir les malades, comprendre le monde, aider les autres... c'est ça, être savant ! 🩺📚

— C'est magnifique ! dit Wassim. Moi aussi je veux lire beaucoup et aider les gens ! 📖✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Tu lisais TOUS LES JOURS ?! 📖 Même la nuit ?! 🌙 Moi aussi je veux lire comme toi !',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'La science est un don d\'Allah ! 💚 Je dois l\'utiliser pour aider les gens ! 🩺',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s4',
          background: 'golden_city',
        },

        // --- wt2c3s4: Al-Ghazali ---
        {
          id: 'wt2c3s4',
          chapterId: 'wt2c3',
          title: 'Al-Ghazali',
          narration: `Une troisième silhouette apparaît. ✨ C'est un homme plus âgé avec une longue barbe blanche et des yeux très profonds, comme des puits de sagesse. 👁️ Il porte un manteau simple en laine. Pas de bijoux. Pas de luxe. Juste la simplicité.

— Wassim, dit-il doucement. Je suis Abu Hamid Al-Ghazali.

— Al-Ghazali ! dit Wassim. Papa m'a parlé de vous ! Vous êtes le Hujjat al-Islam ! La preuve de l'Islam ! 🌟

Al-Ghazali sourit doucement. 😊

— On m'a donné ce titre, oui. Mais sais-tu quel est le plus grand livre que j'ai écrit ? 📖

— Hmm... Un livre de sciences ? De maths ? De médecine ? demande Wassim.

— Non ! dit Al-Ghazali. Le plus grand livre que j'ai écrit s'appelle « Ihya Ulum al-Din » — « La Revivification des Sciences de la Religion ». 💚

Al-Ghazali s'approche de Wassim et s'assoit à côté de lui. 🧓

— Wassim, dit-il. Il y a deux sortes de savoir. Le savoir de la TÊTE et le savoir du CŒUR. 🧠💕 Le savoir de la tête, c'est les mathématiques, les sciences, l'histoire... C'est bien ! C'est très bien ! 📚 Mais le savoir du cœur, c'est encore plus important ! C'est connaître Allah. C'est savoir pourquoi on est sur cette terre. C'est savoir comment être un bon musulman. 💚

— Le savoir du cœur... murmure Wassim. 🤔

— Oui ! 💚 Al-Ghazali pose sa main sur son cœur. Quand tu apprends quelque chose de nouveau, demande-toi toujours : est-ce que ça me rapproche d'Allah ? Est-ce que ça me rend meilleur ? Si oui, alors c'est le meilleur savoir ! 🌟

Wassim pose sa petite main sur son cœur. 💓 Oui... Il comprend ! Le savoir, ce n'est pas juste des mots dans la tête. C'est de la lumière dans le cœur ! ✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le savoir de la tête ET le savoir du cœur ? 🧠💕 Je n\'avais jamais pensé à ça !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Le vrai savoir est celui qui me rapproche d\'Allah ! 💚 Je vais m\'en souvenir ! 🤲',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s5',
          background: 'golden_city',
          lesson: {
            title: 'Al-Ghazali — Le savoir du cœur',
            content:
              'Al-Ghazali était l\'un des plus grands savants de l\'Islam ! 💚 Il a enseigné qu\'il y a DEUX sortes de savoir : le savoir de la tête (les sciences, les maths, l\'histoire) et le savoir du cœur (connaître Allah, être bon, être sincère). 🧠💕 Les DEUX sont importants ! Mais le savoir du cœur est le PLUS important ! 🌟 Le Prophète ﷺ a dit : « La connaissance est dans le cœur. » Apprends, mais apprends avec ton cœur ! 💚📚',
            quote: 'مَنْ عَلِمَ نَفْسَهُ عَلِمَ رَبَّهُ',
            source: 'Sagesse islamique',
          },
        },

        // --- wt2c3s5: Ibn Khaldun ---
        {
          id: 'wt2c3s5',
          chapterId: 'wt2c3',
          title: 'Ibn Khaldun',
          narration: `Une quatrième silhouette s'avance ! ✨ C'est un homme imposant avec une grande barbe et un regard perçant. 👴 Il a l'air d'un explorateur !

— Wassim ! Je suis Ibn Khaldun ! 💪

— Ibn Khaldun ! 😮 dit Wassim. Papa dit que vous étiez le père de l'histoire !

— C'est ce qu'on dit ! 😄 dit Ibn Khaldun avec un grand rire. J'ai vécu il y a longtemps. J'ai voyagé partout ! En Afrique du Nord, au Moyen-Orient, en Espagne... 🌍 J'ai rencontré des rois, des savants, des guerriers... Et tu sais ce que j'ai appris ?

— Quoi ? dit Wassim, curieux.

— J'ai appris que les CIVILISATIONS naissent et meurent ! 📖✨ Comme les fleurs ! 🌺 Elles poussent, elles fleurissent, puis elles fanent. Mais il y a un secret pour qu'elles durent longtemps...

— Quel secret ? 🤔

— LE SAVOIR ! 💚 dit Ibn Khaldun. Les civilisations qui durent sont celles qui INVESTISSENT dans le savoir ! Les livres, les écoles, les bibliothèques... Quand un peuple apprend, il reste fort ! 📚💪

Ibn Khaldun fait apparaître des images lumineuses. ✨ Wassim voit de grandes villes, des marchés animés, des écoles pleines d'enfants... Puis les images changent et montrent des bibliothèques en feu... 😢

— Quand les gens arrêtent d'apprendre, la civilisation s'affaiblit, dit Ibn Khaldun. C'est pour ça que le savoir est le trésor le plus précieux ! 📚✨

— Mais COMMENT on apprend ? demande Wassim.

— En LECTANT ! 📖 En OBSERVANT ! 👀 En RÉFLÉCHISSANT ! 🤔 Et surtout... en ÉCRIVANT ! ✍️ Quand tu écris ce que tu as appris, le savoir reste pour toujours !`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Vous avez voyagé partout ?! 🌍 C\'est comme une aventure ! J\'aimerais voyager comme vous !',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Le savoir fait durer les civilisations ! 💪📚 Alors lire, c\'est comme construire un monde meilleur ! ✨',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s6',
          background: 'golden_city',
        },

        // --- wt2c3s6: La salle secrète ---
        {
          id: 'wt2c3s6',
          chapterId: 'wt2c3',
          title: 'La salle secrète',
          narration: `Après avoir rencontré les quatre grands savants, Wassim se promène dans la bibliothèque avec le petit chat. 🐱📚✨ Il est tellement émerveillé ! Chaque étagère est un trésor !

Mais soudain, le livre lumineux s'arrête. 📖✨

— Wassim, dit le livre. Il y a une salle que je veux te montrer. La salle la plus importante de toute la bibliothèque. 🌟

— La plus importante ? 😮 dit Wassim. Il y a PLUS grand que tout ça ?

— Oui ! Suis-moi ! 📖

Le livre guide Wassim vers le fond de la bibliothèque. Il y a un petit escalier en colimaçon. 🌀 Wassim monte les marches. Le chat monte aussi. 🐱

Et en haut... il y a une petite porte en bois de cèdre. 🚪 La porte sent bon le bois et l'encens. 🌿

Wassim pousse la porte. ✨

À l'intérieur, c'est une toute petite pièce ronde. 🏛️ Mais elle est MAGIQUE ! Au centre, il y a un pupitre en marbre blanc. Et sur le pupitre, il y a un livre OUVERT. 📖

Les murs de la pièce sont couverts de versets du Coran en lettres dorées ! ✨ Wassim reconnaît certains versets ! Et au plafond, un dessin magnifique représente la Kaaba à La Mecque ! 🕋

— Cette salle, dit le livre, est la Salle du Savoir Sacré. 🌟 C'est ici que les savants venaient pour prier et lire le Coran. C'est ici que le savoir rencontre la foi. 💚

Wassim s'approche du livre ouvert sur le pupitre. Et il lit la première sourate : 📖

✨ « Bismillahir Rahmanir Rahim... Alhamdulillahi Rabbil Alamin... » ✨

Les lettres se mettent à briller ! ✨ Le Coran est VIVANT dans cette salle ! Wassim sent une chaleur douce dans son cœur. 💓💛`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'La Salle du Savoir Sacré ! 🌟 C\'est le Coran qui brille ! ✨📖 Les lettres sont VIVANTES !',
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: 'Bismillah... Alhamdulillah... 🤲 Le savoir rencontre la foi ici... 💚 Je le sens dans mon cœur !',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c3s7',
          background: 'zawiyah',
          lesson: {
            title: "Le Coran — La source de tout savoir",
            content:
              'Le Coran est le PLUS GRAND livre du monde ! 📖✨ C\'est la parole d\'Allah ! Le PREMIER mot révélé est « IQRA\' » — « LIS ! » 📚 Allah nous ordonne de lire, d\'apprendre, de comprendre ! Le savoir commence avec le Coran ! Quand tu lis le Coran avec ton cœur, chaque lettre est une lumière ! ✨ Le Prophète ﷺ a dit : « Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent. » 💚📖',
            quote: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ',
            source: 'Coran, Sourate Al-Alaq (96:1-2)',
          },
        },

        // --- wt2c3s7: Sidi Mu'adh ---
        {
          id: 'wt2c3s7',
          chapterId: 'wt2c3',
          title: 'Sidi Mu\'adh arrive !',
          narration: `— Mashallah, Wassim ! 💚

Wassim se retourne. 😮 Devant lui, dans la porte de la Salle du Savoir Sacré, il y a quelqu'un de familier...

SIDI MU'ADH ! 🧓💚

— SIDI MU'ADH ! 😍 dit Wassim en courant vers lui. Vous êtes ici ?!

— Oui, mon petit Wassim ! 💚 dit Sidi Mu'adh avec son doux sourire. Je suis le gardien de cette bibliothèque. Tout ça... c'est moi qui l'ai construit, il y a très, très longtemps. 📚✨

— VOUS ?! 😮 dit Wassim émerveillé.

— Oui ! dit Sidi Mu'adh. J'ai consacré toute ma vie au savoir. J'ai rassemblé les livres les plus précieux du monde et je les ai gardés ici, en sécurité. 📚 Et j'ai attendu... attendu... qu'un enfant au cœur pur vienne les découvrir.

— Et cet enfant, c'est MOI ?! 😍 dit Wassim.

— Oui, Wassim ! 💚 Tu as les cinq trésors du cœur : la gentillesse, la patience, la gratitude, la sincérité et la confiance. 🌹💙🌿🌻🤲 Et maintenant, tu es prêt pour le sixième trésor !

— Le sixième trésor ?! ✨ Quel est le sixième trésor ?! 😍

— Al-'ILM ! LA CONNAISSANCE ! 💚📚 dit Sidi Mu'adh. C'est le trésor qui contient tous les autres ! Quand tu as la connaissance, tu sais comment être gentil, comment être patient, comment être reconnaissant, comment être sincère et comment faire confiance à Allah ! Le savoir est le PLUS GRAND trésor ! 📖✨

Wassim sent des larmes de joie dans ses yeux. 😢💛 Il serre Sidi Mu'adh dans ses bras.

— Merci, Sidi Mu'adh ! Merci de m'avoir montré tout ça ! 🤲✨

— Ce n'est pas fini, Wassim, dit Sidi Mu'adh en souriant. 🌟 Demain, tu vas recevoir un cadeau très spécial ! Le Sceau du Savant ! 📜`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Sidi Mu\'adh ! Vous êtes le gardien de la bibliothèque ! 📚✨ C\'est MAGNIFIQUE !',
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: 'Le sixième trésor est Al-\'Ilm — la Connaissance ! 💚📚 Le savoir contient TOUS les autres trésors ! 🌟',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Le Sceau du Savant ?! 📜 C\'est quoi ?! 😍',
              emotion: 'surprised',
            },
          ],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          earnedBadgeId: 'hikma',
          lesson: {
            title: 'Al-Hikma — La Sagesse des savants',
            content:
              "Wassim a rencontré les plus grands savants de l'Islam ! 💚 Fatima al-Fihri, Ibn Sina, Al-Ghazali et Ibn Khaldun ! 📚 Chacun lui a appris quelque chose : Fatima a montré que le savoir est pour tout le monde, Ibn Sina a montré qu'on doit lire chaque jour, Al-Ghazali a montré que le savoir du cœur est le plus important, et Ibn Khaldun a montré que le savoir rend les civilisations fortes ! 🌟 Le Prophète ﷺ a dit : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite le chemin vers le Paradis. » 📚💛",
            quote: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
            source: 'Hadith — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Le Sceau du Savant (ختم العالم)
    // ============================================================
    {
      id: 'wt2c4',
      tomeId: 'wassim_tome2',
      number: 4,
      title: "Le Sceau du Savant",
      titleAr: 'ختم العالم',
      scenes: [
        // --- wt2c4s1: De retour à la maison ---
        {
          id: 'wt2c4s1',
          chapterId: 'wt2c4',
          title: 'De retour à la maison',
          narration: `Wassim remonte le passage secret avec le petit chat. 🐱✨ Le livre lumineux le guide. La lumière de la bibliothèque s'éloigne doucement derrière lui. 📚🌟

Il arrive en haut de l'escalier et pousse la porte du jardin. 🚪 Le soleil du soir l'accueille ! ☀️ Le jardin magique est bathé d'une lumière dorée et chaude. 🌅

Wassim regarde ses mains. 💭 Est-ce que tout ça était un rêve ? La bibliothèque... Les savants... Fatima al-Fihri... Ibn Sina... Al-Ghazali... Ibn Khaldun... 📚

Le petit chat ronronne et frotte sa tête contre la main de Wassim. 🐱💕 Non, ce n'était pas un rêve ! C'était RÉEL !

Wassim court à la maison ! 🏃💨

— MAMAN ! PAPA ! 📢

Tout le monde est dans le salon. 🏡 Papa Mehdi lit le Coran. 📖 Maman Aziza tricote. Souhayl fait ses devoirs. 📝 Nawfel joue avec ses blocs. 🧱

— Wassim ! Où étais-tu ? dit maman Aziza. 😊

— Maman ! Papa ! dit Wassim, haletant. J'ai trouvé une BIBLIOTHÈQUE SECRÈTE sous la terre ! Et j'ai rencontré Fatima al-Fihri ! Et Ibn Sina ! Et Al-Ghazali ! Et Ibn Khaldun ! Et Sidi Mu'adh est le gardien ! 😍📚

Tout le monde regarde Wassim. 😮 Puis papa Mehdi sourit. 💛

— Mon fils... dit papa Mehdi. Tu as découvert la Bibliothèque des Lumières ! 💚 C'est un endroit que seuls les cœurs purs peuvent voir. Ton grand-père me l'avait montré quand j'avais ton âge...`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'J\'ai rencontré les PLUS GRANDS savants ! Fatima al-Fihri ! Ibn Sina ! 😍📚',
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: 'La Bibliothèque des Lumières... 💚 Mon père me l\'avait montrée aussi ! C\'est un héritage de notre famille ! 📚✨',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c4s2',
          background: 'home',
        },

        // --- wt2c4s2: La leçon de papa ---
        {
          id: 'wt2c4s2',
          chapterId: 'wt2c4',
          title: 'La leçon de papa',
          narration: `Papa Mehdi met son Coran sur la table. 📖 Il regarde Wassim avec ses yeux pleins d'amour et de fierté. 💛

— Assieds-toi, Wassim. 🪑 Je vais te raconter quelque chose.

Wassim s'assoit. Souhayl et Nawfel s'approchent aussi. 🧒👦 Maman Aziza s'assied près de Wassim. 💕

— Ton grand-père, dit papa Mehdi, était un homme de savoir. 📚 Il passait ses journées à la bibliothèque de la Qarawiyyin. Il connaissait des milliers de livres par cœur ! Et il m'a appris une chose très importante...

— Quoi, papa ? 🤔 dit Wassim.

— Il m'a dit : « Mehdi, le savoir est comme une lumière. ✨ Si tu la gardes pour toi, elle éclaire seulement ta chambre. Mais si tu la partages, elle éclaire le MONDE ENTIER ! 🌍 »

— Éclairer le monde... murmure Wassim. 🤔✨

— Oui ! 💚 dit papa Mehdi. C'est pour ça que j'enseigne à la madrasa ! C'est pour ça que je partage le savoir avec mes élèves ! Parce que la connaissance qui n'est pas partagée est comme une lampe sous un bol. 💡 Elle ne sert à personne !

Wassim comprend ! 💡 Oui ! La connaissance est faite pour être PARTAGÉE ! Comme le biscuit qu'il a partagé avec le chat ! 🍪 Comme la gentillesse qu'il a partagée avec le petit garçon ! 💛

— Papa, dit Wassim. Je veux partager ce que j'ai appris ! Avec Souhayl, Nawfel, mes amis... Avec tout le monde ! 🌍

— C'est ça, mon fils ! 💚 dit papa Mehdi en le serrant dans ses bras. C'est ça, être un vrai savant ! 📚✨`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: 'Le savoir est comme une lumière ! Si tu le gardes, il éclaire ta chambre. Si tu le partages, il éclaire le monde ! 🌍✨',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Je veux partager le savoir avec tout le monde ! 💚📚 Comme papa à la madrasa !',
              emotion: 'determined',
            },
            {
              characterId: 'aziza',
              text: 'Mon petit Wassim devient un grand garçon ! 🥰 Je suis si fière de toi ! 💛',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c4s3',
          background: 'home',
          lesson: {
            title: 'Partager le savoir — La lumière qui grandit',
            content:
              'Le savoir doit être PARTAGÉ ! 📚✨ Quand tu apprends quelque chose de bien, partage-le avec les autres ! Avec tes frères, tes sœurs, tes amis ! 💛 Le Prophète ﷺ a dit : « Que Allah illumine le visage de celui qui entend ma parole et la transmet telle qu\'il l\'a entendue. » 🌟 Enseigner aux autres, c\'est comme allumer une bougie avec une autre bougie : la lumière ne diminue JAMAIS ! Elle grandit ! ✨🕯️',
            quote: 'بَلِّغُوا عَنِّي وَلَوْ آيَةً',
            source: 'Hadith — Sahih Bukhari',
          },
        },

        // --- wt2c4s3: Wassim enseigne ---
        {
          id: 'wt2c4s3',
          chapterId: 'wt2c4',
          title: 'Wassim enseigne !',
          narration: `Le lendemain, à l'école, Wassim a une idée ! 💡✨

La maîtresse demande à la classe :

— Qui veut raconter une histoire ? 📖

Toute la classe lève la main ! ✋ Wassim lève sa main très haut ! ✋✋

— Wassim ?

Wassim se lève. Son cœur bat un peu fort. 💓 Devant toute la classe, c'est impressionnant ! Mais il respire profondément. 💨

— Je vais vous raconter l'histoire de Fatima al-Fihri ! dit Wassim. 😊

Et Wassim commence à raconter ! 📖✨ Il raconte comment une femme de Fès a utilisé toute sa richesse pour construire la plus grande université du monde ! La Qarawiyyin ! 🏛️ Il raconte comment Ibn Sina lisait tous les jours et comment il a écrit le livre de médecine ! 🩺 Il raconte comment Al-Ghazali a dit que le savoir du cœur est le plus important ! 💚

Les enfants écoutent avec des yeux GRANDS OUVERTS ! 😮✨

— WAOUH ! C'est VRAI tout ça ? dit une petite fille.

— OUI ! dit Wassim. Et le Prophète ﷺ a dit que chercher la connaissance est un devoir pour chaque musulman et chaque musulmane ! 💚

La maîtresse sourit. 😊

— BRAVO, Wassim ! C'est magnifique ! 🎉 Tu es comme un petit professeur ! 👨‍🏫

Wassim est si fier ! 💛 Et le plus beau... il a PARTAGÉ le savoir ! Comme papa lui a dit ! ✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Je vais vous raconter l\'histoire de Fatima al-Fihri ! 📖📚 Elle a construit une université !',
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: 'Le savoir du cœur est le plus important ! Et on doit le PARTAGER ! 💚✨',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c4s4',
          background: 'classroom',
        },

        // --- wt2c4s4: La soirée en famille ---
        {
          id: 'wt2c4s4',
          chapterId: 'wt2c4',
          title: 'La soirée en famille',
          narration: `Le soir, toute la famille est réunie. 🏡 Papa Mehdi, maman Aziza, Souhayl, Nawfel et Wassim. 💛 Maman a préparé un délicieux tajine ! 🍲 Miam !

Après le dîner, Wassim prend une grande décision. 💪

— Papa, maman, Souhayl, Nawfel ! dit Wassim. Je veux vous enseigner quelque chose ! 📚

— NOUS ? 😮 dit Nawfel en riant. Mais c'est TOI l'élève !

— Oui, mais Sidi Mu'adh m'a appris quelque chose ! dit Wassim. 🌟

Wassim se lève au milieu du salon. Il fait comme un petit professeur ! 👨‍🏫 Ses mains bougent. Ses yeux brillent. Il est SÉRIEUX !

— Ce que j'ai appris, dit Wassim, c'est qu'il y a SIX trésors du cœur ! 💚

— SIX ?! 😮 dit Souhayl. Mais l'année dernière, il y en avait cinq !

— Oui ! dit Wassim. Les cinq du jardin : Al-Rahma, As-Sabr, Al-Shukr, Al-Ikhlas et At-Tawakkul. 🌹💙🌿🌻🤲 ET le sixième : AL-'ILM ! LA CONNAISSANCE ! 📚✨

— WAOUH ! dit Nawfel. 👀

— Le savoir, dit Wassim, est le trésor qui contient tous les autres ! Avec le savoir, tu sais comment être gentil, patient, reconnaissant, sincère et confiant ! Et le plus important... le savoir doit être PARTAGÉ ! 💚🌍

Tout le monde applaudit ! 👏👏👏

— BRAVO, WASSIM ! 🎉 dit maman Aziza avec des larmes de joie. 😢💛

— Mon petit frère est un savant ! dit Souhayl en riant. 🤓

— Moi aussi je veux être savant ! dit Nawfel. 💪

— Inshallah, vous le serez TOUS LES DEUX ! 💚 dit papa Mehdi.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Il y a SIX trésors du cœur ! Et le sixième, c\'est AL-\'ILM ! La Connaissance ! 📚✨',
              emotion: 'determined',
            },
            {
              characterId: 'nawfel',
              text: 'MOI AUSSI je veux être savant ! 💪 Et trouver la bibliothèque secrète !',
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: 'Je suis fier de toi, Wassim ! 🤓💚 Tu es un vrai petit savant ! 📚',
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c4s5',
          background: 'home',
        },

        // --- wt2c4s5: Le Sceau du Savant ---
        {
          id: 'wt2c4s5',
          chapterId: 'wt2c4',
          title: 'Le Sceau du Savant',
          narration: `Après la prière du soir, 🕌 Wassim va au jardin magique. 🌸 La petite porte verte l'attend. 🚪 Il entre. Le jardin est magnifique sous la lumière de la lune. 🌙✨

Le livre lumineux l'attend dans le kiosque en marbre. 📖 Et Sidi Mu'adh est là aussi ! 🧓💚

— Wassim, dit Sidi Mu'adh. Tu as bien agi. Tu as partagé le savoir avec ta famille et tes amis. Tu as compris la leçon la plus importante de toutes.

— Quelle leçon ? 🤔 demande Wassim.

— Que le savoir n'a de valeur que quand il est partagé. 📚✨ Un savant qui garde le savoir pour lui n'est pas un vrai savant. Un vrai savant EST CELUI QUI ENSEIGNE ! 💚

Sidi Mu'adh ouvre le livre lumineux. 📖 Et de ses pages, un objet sort lentement... ✨

C'est un SCEAU ! 📜✨ Un petit sceau doré avec une étoile gravée dessus. Et des lettres arabes qui brillent : « Al-'Ilm » — « La Connaissance » 💚📚

— Wassim, dit Sidi Mu'adh. Je te donne le SCEAU DU SAVANT ! 🌟 C'est un badge d'honneur. Il montre que tu as compris que la connaissance est le plus grand trésor. Porte-le avec fierté ! 💚

Wassim prend le sceau. Il brille dans ses petites mains ! ✨ Ses yeux sont pleins de larmes de joie. 😢💛

— Merci, Sidi Mu'adh ! Merci pour TOUT ! 🤲✨

Le petit chat ronronne. 🐱💕 Les étoiles brillent au-dessus du jardin. ⭐🌟 La fontaine chante doucement. 💦🎵

C'est un moment MAGIQUE ! ✨🌟💫`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Le Sceau du Savant ! 📜✨ C\'est le plus beau cadeau du monde ! Merci, Sidi Mu\'adh ! 🤲',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Porte-le avec fierté, Wassim ! 💚 Et n\'oublie JAMAIS : la connaissance est la lumière du cœur ! 📚✨',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Je le promets ! Je lirai, j\'apprendrai, et je partagerai ! Pour toute ma vie ! 💚🌟',
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c4s6',
          background: 'garden',
        },

        // --- wt2c4s6: La fin... et le début ---
        {
          id: 'wt2c4s6',
          chapterId: 'wt2c4',
          title: 'La fin... et le début !',
          narration: `Wassim rentre à la maison avec le Sceau du Savant dans sa poche. 📜✨ Il est si heureux ! 😍

Il se couche. 🌙 Maman Aziza vient lui dire bonne nuit. 💕

— Maman, dit Wassim tout doucement. J'ai une chose à dire.

— Oui, mon trésor ? 🥰

— Je dis ALHAMDULILLAH pour le savoir ! 📚 Alhamdulillah pour les livres ! Alhamdulillah pour les savants ! Alhamdulillah pour Sidi Mu'adh ! Alhamdulillah pour papa, maman, Souhayl et Nawfel ! Alhamdulillah pour mon petit chat ! 🐱 Et ALHAMDULILLAH pour TOUT ! 🌟🤲

Maman Aziza sourit. 😊💛 Elle embrasse Wassim sur le front.

— Allah aime ton cœur, Wassim. Tu es un enfant merveilleux. 🌟

Wassim ferme les yeux. 😴 Il rêve de la bibliothèque magique. Des livres qui volent. Des savants qui sourient. Des étoiles qui chantent. 📚✨⭐

Et dans son rêve, Sidi Mu'adh lui dit :

— Wassim... ce n'est que le début. 🌟 Il y a encore tant à découvrir ! Le monde est rempli de merveilles et de savoirs ! Chaque jour est une nouvelle aventure ! Chaque livre est un nouveau monde ! Continue à lire, continue à apprendre, continue à partager ! 💚📚

Et Wassim sourit dans son sommeil. 😊🌙

Demain, il lira un nouveau livre. ✨ Et après-demain, un autre. Et encore un autre. Car le savoir n'a PAS de fin ! C'est une aventure pour TOUTE LA VIE ! 📚🌟💛

BRAVO, WASSIM ! 🎉 Tu as complété le Tome 2 ! Tu as découvert le sixième trésor du cœur : AL-'ILM — LA CONNAISSANCE ! 📚✨

Tu as reçu le SCEAU DU SAVANT ! 📜💛

Maintenant, tu sais que le savoir est le plus grand trésor du monde ! Lis, apprends, comprends ! Et surtout... PARTAGE ! 💚🌍

Que Allah illumine ton chemin, petit Wassim ! 🌟🤲

***

✨ FIN DU TOME 2 — LA BIBLIOTHÈQUE SECRÈTE ✨

📚 𝘉𝘪𝘴𝘮𝘪𝘭𝘭𝘢𝘩. 𝘐𝘲𝘳𝘢'. 𝘛𝘰𝘶𝘵𝘦 𝘭𝘢 𝘤𝘰𝘯𝘯𝘢𝘪𝘴𝘴𝘢𝘯𝘤𝘦 𝘷𝘪𝘦𝘯𝘵 𝘥'𝘈𝘭𝘭𝘢𝘩. ✨`,
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Alhamdulillah pour le savoir ! 📚 Alhamdulillah pour tout ! 🌟🤲',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'Bonne nuit, mon petit savant ! 🌙💡 Que Allah illumine ton cœur pour toujours ! 💚✨',
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: 'Ce n\'est que le début, Wassim ! Le savoir n\'a pas de fin ! 📚🌟 Continue sur ce chemin ! 💚',
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'ilm',
          lesson: {
            title: "Al-'Ilm — La Connaissance est pour la vie !",
            content:
              "BRAVO, Wassim ! 🎉 Tu as découvert le SIXIÈME trésor du cœur : AL-'ILM — LA CONNAISSANCE ! 💚📚 Tu as appris que le savoir est le plus grand trésor du monde ! Plus précieux que l'or ! Tu as rencontré les plus grands savants de l'Islam : Fatima al-Fihri, Ibn Sina, Al-Ghazali et Ibn Khaldun ! 🌟 Tu as appris que le savoir doit être PARTAGÉ ! ✨ Et surtout, tu as appris que le premier mot du Coran est « IQRA' » — « LIS ! » 📖 Le Prophète ﷺ a dit : « Cherchez la connaissance du berceau jusqu'à la tombe ! » N'arrête JAMAIS d'apprendre ! Chaque jour est un nouveau livre ! Chaque livre est un nouveau monde ! 💚📚🌟",
            quote: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',
            source: 'Coran, Sourate Az-Zumar (39:9)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: [
    "Al-Jahl — L'ignorance",
    'Al-Kibr — L\'orgueil intellectuel',
    'Al-Ghafla — L\'oubli du savoir',
    "Al-Bukhl bi al-'Ilm — L'avareté du savoir",
  ],
  spiritualLesson:
    "Le savoir est la lumière du cœur ! 💚📚 Cherche la connaissance du berceau jusqu'à la tombe ! Lis chaque jour ! Apprends chaque jour ! Et surtout, PARTAGE ce que tu sais ! Car la connaissance qui n'est pas partagée est comme une lampe sous un bol. Le Prophète ﷺ a dit : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite le chemin vers le Paradis. » 🌟📖",
};
