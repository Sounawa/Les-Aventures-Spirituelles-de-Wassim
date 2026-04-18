import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome2: Tome = {
  id: 'tome2',
  number: 2,
  title: 'Le Miroir de l\'Âme',
  titleAr: 'مرآة الروح',
  subtitle: 'L\'épreuve de l\'orgueil et de la jalousie',
  description:
    "De retour à Chefchaouen après son premier voyage intérieur, Nawfel croise le chemin d'un nouveau camarade dont les talents éveillent en lui un sentiment qu'il n'avait jamais connu : la jalousie. Bientôt, une ombre silencieuse se glisse dans son cœur, tandis qu'une forteresse d'orgueil s'élève dans son monde intérieur. Pour vaincre ces deux nouveaux monstres — Al-Jabbara et Al-Hasad — Nawfel devra apprendre deux vertus essentielles : l'Ikhlas, la sincérité pure, et le Shukr, la gratitude profonde.",
  theme: 'Ikhlas & Shukr — Sincérité et Gratitude',
  coverImage: '/images/tome2-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Faux Miroir (المرآة الكاذبة)
    // ============================================================
    {
      id: 't2c1',
      tomeId: 'tome2',
      number: 1,
      title: 'Le Faux Miroir',
      titleAr: 'المرآة الكاذبة',
      scenes: [
        // --- t2c1s1: Un matin comme les autres ---
        {
          id: 't2c1s1',
          chapterId: 't2c1',
          title: 'Un matin comme les autres',
          narration: `Les ruelles de Chefchaouen baignaient dans cette lumière particulière de l'automne, quand le soleil matinal semble poser un voile doré sur chaque mur bleu et chaque toit de tuiles orangées. Le ciel était d'un bleu si pur qu'on aurait dit qu'Allah l'avait peint Lui-même pendant la nuit, d'un seul coup de pinceau infini. Les escaliers pavés de galets blancs montaient et descendaient entre les maisons comme les veines d'un cœur gigantesque, et Nawfel les gravissait deux par deux, son cartable usé battant contre son dos à chaque pas.\n\nDepuis son premier voyage dans le monde intérieur et ses rencontres avec Sidi Mu'adh, quelque chose avait changé en Nawfel. Il voyait le monde différemment — les fleurs sur les fenêtres lui semblaient plus colorées, le chant des oiseaux plus mélodieux, et même les ruelles qu'il connaissait par cœur lui paraissaient contenir des mystères invisibles. Souhayl avait remarqué ce changement et lui en avait taquiné gentiment, tandis que Wassim, avec sa intuition d'enfant, avait simplement dit : « Tu brilles un peu plus, Nawfel. »\n\nMais Nawfel portait aussi en lui une nervosité nouvelle. Sidi Mu'adh lui avait dit qu'autres monstres l'attendaient dans son monde intérieur, des monstres plus sournois que la colère, plus difficiles à reconnaître. « Tu sauras quand ils viendront, » avait dit le shaykh avec ce sourire qui en disait plus long que mille mots. « Car ils ne frapperont pas avec des griffes. Ils frapperont avec des pensées. »\n\nEn approchant de l'école du village — un petit bâtiment blanc avec un portail bleu et une cour intérieure ombragée de figuiers — Nawfel remarqua un attroupement inhabituel devant la grille. Les enfants murmuraient, les yeux tournés vers un garçon qu'il n'avait jamais vu. Il était debout près du portail, entouré d'une petite foule de camarades curieux, et quelque chose dans son attitude — une assurance tranquille, un sourire facile — attira immédiatement l'attention de Nawfel.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Qui c'est, celui-là ? Je ne l'ai jamais vu à l'école...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s2',
          background: 'school',
        },

        // --- t2c1s2: Le nouveau venu ---
        {
          id: 't2c1s2',
          chapterId: 't2c1',
          title: 'Le nouveau venu',
          narration: `Le garçon s'appelait Samir. Il venait de Tanger, expliqua la maîtresse en l'introduisant dans la classe, et ses parents s'étaient installés à Chefchaouen il y a moins d'une semaine. Il avait le même âge que Nawfel — neuf ans tout juste — mais il y avait en lui une assurance, une aisance qui contrastait avec la timidité que Nawfel ressentait encore parfois.\n\nDès le premier cours de mathématiques, Nawfel comprit que Samir n'était pas un élève ordinaire. La maîtresse écrivit un problème au tableau — un problème que Nawfel avait trouvé difficile la semaine dernière — et Samir leva la main presque avant que la maîtresse n'ait fini d'écrire. Sa réponse fut non seulement correcte, mais il proposa une deuxième méthode de résolution que même la maîtresse n'avait pas envisagée.\n\nLa classe éclata de surprise. Des murmures admiratifs circulaient. « Il est génial ! » chuchotait une fille au premier rang. « C'est le plus fort de la classe, » dit un autre en secouant la tête avec admiration. Nawfel, lui, resta silencieux. Il sentit quelque chose d'étrange naître dans sa poitrine — pas de la colère, non, mais quelque chose de plus froid, plus subtil. Un resserrement, comme si une main invisible venait de presser son cœur.\n\nÀ la récréation, Nawfel regarda Samir de loin. Le nouveau jouait au football avec une grâce naturelle, marquant trois buts consécutifs. Puis, quand le groupe passa devant le mur d'escalade de la cour, Samir grimpa jusqu'au sommet en quelques secondes, là où Nawfel avait mis des semaines à réussir l'année précédente. Chaque exploit de Samir était comme un petit coup de poing dans le cœur de Nawfel — silencieux, invisible aux autres, mais douloureux.\n\nC'est alors que Nawfel le vit. Du coin de l'œil, dans l'ombre du figuier, une silhouette mouvante — noire, presque transparente, comme une tache d'encre dans l'eau. Elle bougeait doucement, et Nawfel réalisa avec horreur qu'elle ne bougeait pas seule : elle bougeait en même temps que lui, comme un reflet déformé dans un miroir brisé.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Samir est vraiment fort, hein ? Il a résolu le problème de maths en deux secondes. C'est impressionnant. On pourrait lui demander de nous aider pour les devoirs, non ?",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Oui... c'est vrai qu'il est fort...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s3',
          background: 'school',
        },

        // --- t2c1s3: L'ombre qui grandit ---
        {
          id: 't2c1s3',
          chapterId: 't2c1',
          title: 'L\'ombre qui grandit',
          narration: `Les jours passèrent, et avec eux, la présence de Samir à l'école devint de plus en plus éclatante. Il excellait dans tout — les mathématiques, la lecture, le sport, et même la calligraphie arabe, cette discipline que Nawfel aimait par-dessus tout et dans laquelle il se croyait le meilleur de la classe. Quand le maître de calligraphie afficha les travaux des élèves au mur, c'est celui de Samir qui reçut la place d'honneur, avec un système d'étoile dorée que tout le monde pouvait voir.\n\nNawfel, qui avait reçu une étoile d'argent pour son propre travail, sentit la main invisible dans sa poitrine se serrer un peu plus. Et l'ombre — cette silhouette noire et mouvante qu'il avait aperçue sous le figuier — grandissait. Elle ne le quittait plus. Nawfel la voyait dans les coins de son champ de vision, comme un spectre silencieux qui le suivait partout. Les autres enfants ne semblaient rien remarquer, mais Nawfel, lui, la sentait. Il la sentait comme on sent un courant d'air froid dans une pièce chauffée — une présence discordante, anormale.\n\nUn soir, en rentrant chez lui, Nawfel passa devant la boutique du vieux cordonnier du quartier. La vitrine était couverte de miroirs de toutes tailles — des miroirs anciens aux cadres en bois sculpté, des miroirs ovales, des miroirs ronds. Et dans l'un d'eux, Nawfel s'arrêta net. Son reflet était là, normal, immobile. Mais juste derrière lui, presque collée à son épaule, l'ombre noire était visible. Elle avait pris forme : un visage pâle aux yeuxvides, une bouche tordue en un rictus silencieux. Et elle grandissait, grandissait à chaque pensée de jalousie qui traversait l'esprit de Nawfel.\n\nNawfel sursauta et s'éloigna en courant, le cœur battant. Il comprenait maintenant. Cette ombre, c'était un monstre — un monstre que Sidi Mu'adh lui avait dit de surveiller. Al-Hasad. الحسد. La jalousie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... ce n'est pas possible... Je ne suis pas jaloux ! Je ne peux pas être jaloux ! Samir est simplement... simplement...",
              emotion: 'scared',
            },
            {
              characterId: 'nawfel',
              text: "Simplement meilleur que moi...",
              emotion: 'sad',
            },
          ],
          choices: [
            {
              id: 't2c1s3_c1',
              text: 'Aller voir Sidi Mu\'adh pour lui parler de cette ombre',
              nextSceneId: 't2c1s4a',
              badgeId: 'ikhlas',
              isCorrect: true,
            },
            {
              id: 't2c1s3_c2',
              text: 'Ignorer l\'ombre et essayer de battre Samir à son propre jeu',
              nextSceneId: 't2c1s4b',
            },
            {
              id: 't2c1s3_c3',
              text: 'Eviter Samir et se retirer en silence',
              nextSceneId: 't2c1s4c',
            },
          ],
          background: 'street',
        },

        // --- t2c1s4a: La sincérité du cœur ---
        {
          id: 't2c1s4a',
          chapterId: 't2c1',
          title: 'La sincérité du cœur',
          narration: `Nawfel courut vers la zawiyah, ses pieds heurtant les pavés des ruelles avec la précipitation d'un cœur affolé. Il avait pris l'habitude, depuis le premier tome, de se rendre auprès de Sidi Mu'adh chaque fois que quelque chose de troublant se produisait dans son monde intérieur, et cette fois, la urgence dans sa poitrine était plus forte que jamais.\n\nLa porte de la zawiyah s'ouvrit avant même qu'il ne frappe, comme toujours. L'intérieur baignait dans la lumière dorée du crépuscule qui filtrait par la fenêtre haute, et l'encens de cèdre emplissait l'air de cette odeur de paix que Nawfel commençait à connaître par cœur. Sidi Mu'adh était assis sur son tapis de prière, ses yeux mi-clos, ses lèvres remuant imperceptiblement dans le dhikr.\n\n— Petit cœur, dit le shaykh sans ouvrir les yeux. Tu es arrivé juste à temps. Je sentais une agitation dans ton âme depuis plusieurs jours.\n\nNawfel s'effondra sur le coussin devant le shaykh, ses yeux brillants de larmes qu'il s'efforçait de retenir. Il raconta tout — Samir, l'ombre noire, le miroir du cordonnier, la sensation horrible d'être rongé de l'intérieur par un sentiment qu'il ne voulait pas nommer.\n\nSidi Mu'adh ouvrit les yeux et posa sa main ridée sur l'épaule de Nawfel. Sa toucher était chaud, réconfortant, comme un rayon de soleil en plein hiver.\n\n— Ce que tu ressens, petit cœur, s'appelle Al-Hasad — la jalousie (الحسد). C'est l'un des monstres les plus dangereux du Nafs, car il se nourrit de l'incapacité à voir les blessings d'Allah chez les autres. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois sec. Mais tu as fait la chose la plus courageuse — tu es venu me voir avec honnêteté. Et cette honnêteté, c'est le premier pas vers l'Ikhlas — la sincérité. Un cœur sincère reconnaît ses faiblesses non pas pour se punir, mais pour se guérir.\n\nNawfel sentit un poids se lever de sa poitrine. Pas entièrement — l'ombre était toujours là — mais suffisamment pour respirer un peu mieux.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Sidi Mu\'adh, je le hais... non, pas lui. Je hais ce que je ressens. Je ne veux pas être jaloux !',
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Le fait que tu dise cela, petit cœur, est déjà une victoire. L'Ikhlas commence par la reconnaissance sincère de ce qui habite ton cœur. Ne fuis pas ce sentiment — observe-le. Quand tu le nommes, il perd son pouvoir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'zawiyah',
          earnedBadgeId: 'ikhlas',
          lesson: {
            title: 'L\'Ikhlas — La sincérité',
            content:
              "L'Ikhlas (الإخلاص) est la sincérité pure, le fait de faire les choses uniquement pour le plaisir d'Allah, sans chercher la louange des autres. Nawfel a montré les premiers signes d'Ikhlas en reconnaissant honnêtement sa jalousie au lieu de la cacher. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois.",
            quote: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- t2c1s4b: La compétition stérile ---
        {
          id: 't2c1s4b',
          chapterId: 't2c1',
          title: 'La compétition stérile',
          narration: `Nawfel serra les poings et décida qu'il ne laisserait pas un nouveau venu le surpasser. Il se mit à étudier plus, à s'entraîner plus, à travailler plus dur que jamais. Mais chaque effort, chaque victoire minuscule, lui laissait un goût amer — car ce n'était plus pour le plaisir d'apprendre qu'il travaillait, mais pour battre Samir. Et même quand il réussissait, il n'était jamais satisfait, car Samir réussissait toujours un peu mieux.\n\nL'ombre grandit encore. Nawfel la voyait désormais même dans sa chambre, lovée dans les coins sombres, ses yeuxvides le fixant avec une patience de prédateur. Elle se nourrissait de chaque pensée envieuse, de chaque comparaison amère, de chaque sourire forcé que Nawfel affichait quand les autres félicitaient Samir.\n\nUn soir, alors qu'il faisait ses devoirs sous la lampe de la table de la cuisine, Nawfel regarda ses mains — elles tremblaient de fatigue. Aziza s'approcha et posa doucement une tasse de thé à la menthe devant lui. Elle le regarda un long moment, et Nawfel comprit, comme toujours, que sa mère voyait au-delà des apparences.\n\n— Mon chéri, dit Aziza d'une voix douce, tu travailles trop. Ce n'est pas le travail qui me préoccupe — c'est la raison pour laquelle tu travailles. Ton cœur est lourd, Nawfel. Je peux le sentir.\n\nLes mots de sa mère frappèrent Nawfel comme une gifle silencieuse. Il baissa la tête et, pour la première fois depuis des jours, les larmes coulèrent librement sur ses joues.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon petit, rappelle-toi ce que disait le Prophète — qu'Allah ne regarde ni vos corps ni vos formes, mais Il regarde vos cœurs. Si tu travailles pour éclipser quelqu'un, ton cœur se vide de sa lumière. Si tu travailles pour Allah, ton cœur se remplit.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Mais maman... Samir est meilleur que moi en tout. Je n'arrive pas à ne pas le voir...",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'home',
        },

        // --- t2c1s4c: Le silence amer ---
        {
          id: 't2c1s4c',
          chapterId: 't2c1',
          title: 'Le silence amer',
          narration: `Nawfel choisit le repli. Il s'assit au fond de la classe, évita de lever la main, et se mit à parler de moins en moins. Quand Samir répondait correctement à une question, Nawfel baissait les yeux. Quand les autres élèves l'invitaient à jouer, il trouvait une excuse — un devoir, un livre à lire, un mal de tête. Le monde autour de lui semblait s'assombrir, comme si quelqu'un avait baissé le contraste de la réalité.\n\nL'ombre, en revanche, prospérait. Privé de la lumière du contact humain, privé de la chaleur de l'amitié, le cœur de Nawfel devenait un terrain fertile pour Al-Hasad. Le monstre ne disait rien — il n'en avait pas besoin. Il se contentait d'être là, silencieux et sombre, et sa simple présence suffisait à empoisonner chaque pensée de Nawfel.\n\nSouhayl remarqua le changement avec l'attention aiguisée qui caractérisait le grand frère. Un soir, alors que Nawfel se couchait sans manger — ce qui ne lui arrivait jamais — Souhayl vint s'asseoir au bord de son lit.\n\n— Nawfel, dit-il doucement. Je ne sais pas ce qui se passe, mais tu n'es plus toi-même. Tu te caches, tu te tais, tu t'effaces. Ce n'est pas toi. Tu es quelqu'un de lumineux, et depuis quelque temps, tu laisses quelqu'un d'autre éteindre ta lumière. Parle-moi. S'il te plaît.\n\nNawfel resta silencieux un long moment. Puis, dans un murmure à peine audible, il dit :\n\n— Je crois qu'il y a un monstre en moi, Souhayl. Et je ne sais pas comment le combattre.\n\nSouhayl ne rit pas. Il ne chercha pas à minimiser. Il posa simplement sa main sur celle de son petit frère et dit : Demain, nous allons voir Sidi Mu'adh.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel, tu n'as pas besoin d'être le meilleur pour avoir de la valeur. Papa nous a toujours dit que chaque personne porte en elle une lumière unique. La lumière de Samir ne peut pas éteindre la tienne.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c1s5',
          background: 'bedroom',
        },

        // --- t2c1s5: La porte intérieure ---
        {
          id: 't2c1s5',
          chapterId: 't2c1',
          title: 'La porte intérieure',
          narration: `Que Nawfel soit allé voir Sidi Mu'adh de lui-même, qu'il ait été guidé par sa mère ou par Souhayl, le résultat fut le même : le shaykh l'attendait, comme toujours, assis sur son tapis dans la lumière dorée de la zawiyah. L'encens de cèdre flottait dans l'air, et les panneaux de calligraphie sur les murs semblaient briller d'une lueur propre, comme si les versets du Coran vibraient d'une vie invisible.\n\nSidi Mu'adh écouta Nawfel en silence, ses yeux sombres et lumineux fixés sur le visage du garçon. Quand Nawfel eut fini de parler — des mots qui sortaient dans un désordre d'émotions, de la jalousie à la honte, de la confusion à la peur — le shaykh resta un instant silencieux, puis il sourit. Pas un sourire de moquerie, ni même de réconfort. Un sourire de reconnaissance, comme s'il voyait en Nawfel quelque chose de précieux.\n\n— Petit cœur, dit-il finally, ce que tu rencontres n'est pas un ennemi extérieur. C'est Al-Hasad (الحسد) — la jalousie — et elle est née de ton propre Nafs. Mais ne te décourage pas. Le fait que tu la voies, que tu la nommes, que tu viennes me la confier — tout cela prouve que ton cœur est en train de s'éveiller. Le Problème n'est pas d'avoir Al-Hasad en soi. Le problème est de l'ignorer.\n\nLe shaykh se leva et marcha vers une armoire en bois que Nawfel n'avait jamais remarquée. Il en sortit un petit miroir — pas plus grand que la paume d'une main — encadré d'argent gravé de motifs arabes. Il le posa devant Nawfel.\n\n— Ce miroir est spécial, petit cœur. Il ne montre pas ton visage. Il montre ton cœur. Quand tu seras prêt, tu devras le regarder. Mais d'abord, il y a quelque chose d'autre que tu dois affronter. Quelque chose de plus grand, de plus lourd. L'ombre de la jalousie n'est que le serviteur d'un maître bien plus puissant. Son nom est Al-Jabbara (الجبّارة) — le Tyran de l'orgueil. Et il t'attend dans ton monde intérieur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Jabbara ? L'orgueil ? Mais je ne suis pas orgueilleux...",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "L'orgueil, petit cœur, est le plus trompeur de tous les monstres. Il ne se montre jamais tel qu'il est. Il se cache derrière des pensées comme « je mérite mieux » ou « ce n'est pas juste » ou « pourquoi lui et pas moi ? ». Ces pensées semblent raisonnables, n'est-ce pas ? Mais derrière chacune d'elles se cache Al-Jabbara, le roi des illusions.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          lesson: {
            title: 'La jalousie et ses racines',
            content:
              "Al-Hasad (الحسد) — la jalousie — est l'un des péchés du cœur les plus destructeurs en Islam. Le Prophète صلى الله عليه وسلم a dit que la jalousie consume les bonnes actions comme le feu consume le bois sec. La jalousie naît de l'incapacité à reconnaître les blessings d'Allah chez autrui, et sa racine la plus profonde est l'orgueil — le sentiment que l'on mérite plus que ce que l'on a reçu.",
            quote: 'إياكم والحسد فإن الحسد يأكل الحسنات كما تأكل النار الحطب',
            source: 'Hadith — Sunan Abi Dawud',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — La Forteresse de l'Orgueil (حصن الكبرياء)
    // ============================================================
    {
      id: 't2c2',
      tomeId: 'tome2',
      number: 2,
      title: 'La Forteresse de l\'Orgueil',
      titleAr: 'حصن الكبرياء',
      scenes: [
        // --- t2c2s1: Le retour dans le monde intérieur ---
        {
          id: 't2c2s1',
          chapterId: 't2c2',
          title: 'Le retour dans le monde intérieur',
          narration: `Cette nuit-là, Nawfel s'endormit en récitant la sourate Al-Falaq, comme Sidi Mu'adh le lui avait appris — une sourate qui demande la protection d'Allah contre le mal des créatures et contre l'envie des envieux. Les mots coulaient sur ses lèvres comme de l'eau fraîche sur des pierres chaudes, et peu à peu, le sommeil vint, doux et lourd, comme un voile de soie posé sur ses yeux.\n\nQuand il ouvrit les yeux, il n'était plus dans sa chambre. Le monde intérieur s'était transformé depuis sa dernière visite. Le jardin merveilleux aux arbres dorés et aux fleurs chantantes était toujours là, mais quelque chose avait changé — une ombre lointaine, une lourdeur dans l'air, comme si un nuage invisible pendait au-dessus de ce paradis. Les feuilles d'or des arbres étaient un peu moins brillantes, les fleurs chantaient un peu moins fort, et au loin, là où autrefois s'étendait un horizon de lumière, une immense silhouette sombre se dressait.\n\nC'était une forteresse. Une forteresse colossale, plus grande que n'importe quoi que Nawfel avait jamais vu — plus grande que la mosquée du village, plus grande que les montagnes du Rif elles-mêmes. Elle était faite d'un obsidienne noire et brillante, et ses murs montaient si haut qu'ils semblaient percer le ciel. Des tours massives s'élevaient à chaque coin, surmontées de dômes sombres d'où s'échappaient des volutes de fumée pourpre. Au sommet de la forteresse, un trône colossal était visible, et sur ce trône, Nawfel sentit qu'une présence immense le guettait.\n\nLe chemin de lumière blanche qui menait autrefois à la porte du cœur était toujours là, mais il ne menait plus qu'à un carrefour. À gauche, le chemin menait vers la forteresse noire. À droite, un sentier sinueux descendait vers une vallée baignée d'une lumière étrange, verdâtre et laiteuse. Et tout droit, au centre, le miroir que Sidi Mu'adh lui avait donné brillait, planté dans le sol comme une stèle ancienne, attendant d'être regardé.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Cette forteresse... elle n'était pas là la dernière fois. Qu'est-ce que c'est ?",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't2c2s2',
          background: 'inner_world',
        },

        // --- t2c2s2: Al-Jabbara ---
        {
          id: 't2c2s2',
          chapterId: 't2c2',
          title: 'Al-Jabbara',
          narration: `Nawfel approcha de la forteresse, attiré par une force qu'il ne pouvait ni comprendre ni résister. Plus il s'en approchait, plus la forteresse semblait grandir, comme si elle se nourrissait de sa propre peur. Les murs d'obsidienne étaient couverts de gravures — des visages, des figures, des scènes qui représentaient des triomphes et des défaites, des couronnes et des chaînes. Et parmi ces gravures, Nawfel reconnut des fragments de sa propre vie : son premier prix de calligraphie, le jour où il avait été le premier de la classe, le sourire fier de son père.\n\nLa porte de la forteresse s'ouvrit avec un grondement sourd, et Nawfel pénétra dans un hall immense dont le plafond disparaissait dans l'obscurité. Des torches de feu vert brûlaient le long des murs, projetant des ombres dansantes qui ressemblaient à des silhouettes humaines courbées sous le poids de quelque chose d'invisible.\n\nEt là, au bout du hall, assis sur un trône fait d'ossements dorés et de pétales fanés, se trouvait Al-Jabbara. Il était immense — trois fois la taille de Nawfel, peut-être plus. Son armure était faite d'un métal noir et rouge, couverte de runes qui brûlaient d'un éclat sombre. Son casque était sculpté en forme de couronne, et son visage — oh, son visage — ressemblait à une version déformée, agrandie, monstrueuse du visage de Nawfel lui-même. Les mêmes yeux, mais agrandis et brûlants d'une fierté malsaine. Le même nez, mais busqué et arrogant. Et la bouche — une bouche tordue en un sourire qui n'avait rien de joyeux.\n\n— Bienvenue, Nawfel, dit Al-Jabbara d'une voix qui résonnait comme le tonnerre dans une caverne. Je suis le Seigneur de cette Forteresse. Je suis la part de toi qui sait que tu mérites le meilleur. Je suis la voix qui te dit que tu es supérieur. Pourquoi te caches-tu ? Pourquoi te diminues-tu ? Lève-toi. Prends ce qui t'appartient.\n\nChaque mot d'Al-Jabbara résonnait dans la poitrine de Nawfel comme une note de musique séduisante — fausse, dangereuse, mais terriblement belle.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu... tu es moi ? C'est pas possible...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't2c2s3',
          background: 'inner_world',
        },

        // --- t2c2s3: Les murmures du Tyran ---
        {
          id: 't2c2s3',
          chapterId: 't2c2',
          title: 'Les murmures du Tyran',
          narration: `Al-Jabbara descendit de son trône avec une lenteur calculée, chaque pas faisant trembler le sol sous les pieds de Nawfel. L'armure du monstre claquait comme un battement d'ailes, et les runes gravées sur le métal pulsaients d'un éclat pourpre, comme des veines remplies de sang toxique. Nawfel sentait son propre cœur battre à l'unisson avec ces pulsations, comme si le monstre et lui partageaient le même rythme vital.\n\n— Tu n'es pas comme les autres, Nawfel, murmura Al-Jabbara en se penchant vers lui. Son souffle était chaud et sentait le métal brûlé. Tu as été choisi par Allah, non ? Tu as vu le jardin merveilleux. Tu as parlé à la voix mystérieuse. Tu as appris les secrets du Nafs avec Sidi Mu'adh. Alors dis-moi — pourquoi les autres enfants reçoivent-ils des étoiles que toi ne reçois pas ? Pourquoi un inconnu comme Samir vient-il s'emparer de ce qui devrait t'appartenir ?\n\nLes mots étaient venx. Chacun d'entre eux trouvait un écho dans un coin sombre du cœur de Nawfel — un coin qu'il n'aimait pas regarder, un coin où des pensées jalouses et orgueilleuses s'entassaient depuis des semaines, depuis des mois peut-être, depuis toujours.\n\nAl-Jabbara leva sa main gantée de fer noir et désigna le hall immense. Nawfel regarda et vit, avec un frisson d'horreur, que les ombres courbées le long des murs n'étaient pas des figurines abstraites. C'étaient des versions miniature de lui-même — des Nawfel enchaînés, courbés, écrasés sous le poids de sentiments qu'il ne voulait pas reconnaître. L'un portait un masque de contentement forcé. Un autre serrait les poings de rage. Un troisième pleurait en silence dans un coin.\n\n— Voilà ce que tu deviendras si tu continues à te soumettre, dit Al-Jabbara avec ce sourire horrible. Regarde ces versions faibles de toi. Est-ce ça que tu veux être ? Non. Tu veux être le premier. Le meilleur. Le plus fort. Et je suis ici pour te donner cette force.\n\nL'ombre d'Al-Hasad apparut alors, glissant silencieusement des murs pour venir se lover aux pieds d'Al-Jabbara. Les deux monstres se regardèrent, et Nawfel comprit : Al-Hasad n'était qu'un serviteur, un outil entre les mains du véritable maître de la forteresse — l'orgueil.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... ce n'est pas vrai ! Je ne veux pas être le meilleur pour moi ! Je veux juste... juste...",
              emotion: 'determined',
            },
          ],
          choices: [
            {
              id: 't2c2s3_c1',
              text: 'Résister : « Mon value ne vient pas de moi, mais d\'Allah »',
              nextSceneId: 't2c2s4a',
              isCorrect: true,
            },
            {
              id: 't2c2s3_c2',
              text: 'Écouter les murmures — peut-être qu\'Al-Jabbara a raison',
              nextSceneId: 't2c2s4b',
            },
            {
              id: 't2c2s3_c3',
              text: 'Fuir la forteresse en courant',
              nextSceneId: 't2c2s4c',
            },
          ],
          background: 'inner_world',
        },

        // --- t2c2s4a: Le premier pas de l'humilité ---
        {
          id: 't2c2s4a',
          chapterId: 't2c2',
          title: 'Le premier pas de l\'humilité',
          narration: `Nawfel serra les poings, ferma les yeux, et prit la plus grande inspiration de sa vie. Le souffle de la prière monta du plus profond de son être — non pas des mots appris par cœur, mais un appel sincère, brut, né de la douleur et de la volonté.\n\n— Mon value ne vient pas de moi, dit Nawfel d'une voix qui tremblait mais qui ne se brisait pas. Tout ce que j'ai — mon intelligence, mes talents, même ma capacité à voir ce monde intérieur — tout ça vient d'Allah. Si Samir est meilleur que moi dans certaines choses, c'est qu'Allah a choisi de lui donner ces blessings, et ce n'est pas à moi de les convoiter ou de les envier. Alhamdulillah pour tout.\n\nLe silence qui suivit fut total. Même les torches de feu vert semblèrent vaciller, comme si le vent de la vérité passait dans le hall. Puis, lentement, quelque chose d'extraordinaire se produisit. Al-Jabbara recula d'un pas. Pour la première fois, le monstre colossal n'avait pas l'air invincible. Son armure craqua légèrement, et les runes sur sa surface pulsèrent plus faiblement, comme si le sang toxique dans ses veines commençait à se refroidir.\n\n— Tu oses ? siffla Al-Jabbara, et pour la première fois, sa voix portait non plus de la puissance, mais de la surprise — presque de la peur. Tu oses prononcer ce mot ? Tu oses remercier ?\n\nAl-Hasad, l'ombre de la jalousie, recula aussi, se contractant comme une tache d'encre qui s'évapore sous le soleil. Nawfel sentit une chaleur monter dans sa poitrine — pas la chaleur brûlante de l'orgueil, mais une chaleur douce, comme celle d'un foyer en hiver. La première lueur de l'Ikhlas.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "شكراً لله — Alhamdulillah. Ce sont les mots les plus puissants de l'univers, petit cœur. Quand tu dis Alhamdulillah avec sincérité, les montagnes tremblent et les monstres reculent.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c2s5',
          background: 'inner_world',
          earnedBadgeId: 'shukr',
          lesson: {
            title: 'Le Shukr — La gratitude',
            content:
              "Le Shukr (الشكر) est la gratitude envers Allah pour toutes Ses blessings. Le Prophète صلى الله عليه وسلم a dit que celui qui ne remercie pas les gens ne remercie pas Allah. Quand Nawfel prononce Alhamdulillah avec sincérité, il brise le pouvoir d'Al-Jabbara car la gratitude est l'antidote direct de l'orgueil.",
            quote: 'لئن شكرتم لأزيدنكم',
            source: 'Coran, Sourate Ibrahim (14:7)',
          },
        },

        // --- t2c2s4b: La séduction de l'orgueil ---
        {
          id: 't2c2s4b',
          chapterId: 't2c2',
          title: 'La séduction de l\'orgueil',
          narration: `Les mots d'Al-Jabbara étaient comme du nectar empoisonné — sucrés, envoûtants, impossibles à résister. Nawfel sentit son cœur fléchir, comme une tour de sable sous la marée. Peut-être que le monstre avait raison. Peut-être qu'il méritait d'être le meilleur. Peut-être que tout cela — les compliments, les prix, les regards admiratifs — était son droit légitime, et que Samir n'était qu'un voleur venu s'emparer de ce qui lui appartenait.\n\nAl-Jabbara sourit — un sourire de triomphe, large et terrible — et fit un geste de la main. Le hall s'illumina d'une lumière pourpre, et Nawfel vit des images flotter devant lui : lui-même sur un podium, tenant un trophée, applaudissements. Lui-même debout devant la classe, montrant sa calligraphie. Lui-même regardant Samir depuis le haut d'une montagne de succès.\n\n— Voilà ce que tu peux avoir, murmura Al-Jabbara. Tout ça. Et plus encore. Il suffit de m'écouter. Il suffit de croire que tu es supérieur. Car tu l'es, Nawfel. Tu l'es.\n\nMais au milieu de cette séduction éblouissante, quelque chose clochait. Les images étaient belles, mais elles étaient froides — sans chaleur, sans joie réelle, sans amour. Et les applaudissements dans la vision sonnaient creux, comme des claps dans une salle vide. Nawfel sentit, au fond de lui, que la victoire qu'Al-Jabbara promettait n'était pas une vraie victoire. C'était une prison dorée. C'était le triomphe de l'égo contre l'âme.\n\nLa forteresse commençait à se refermer sur lui, ses murs se rapprochant lentement, comme les parois d'un estomac qui digère sa proie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est... c'est beau, mais... c'est vide. Il n'y a personne. Pas maman, pas papa, pas Souhayl, pas Wassim... C'est seul. C'est terriblement seul.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't2c2s5',
          background: 'inner_world',
        },

        // --- t2c2s4c: La fuite éperdue ---
        {
          id: 't2c2s4c',
          chapterId: 't2c2',
          title: 'La fuite éperdue',
          narration: `Nawfel tourna les talons et courut. Il courut comme il n'avait jamais couru, ses pieds nus heurtant le sol froid du hall, son cœur battant si fort qu'il résonnait dans tout son corps comme un tambour de guerre. Les murs de la forteresse semblaient s'allonger, les couloirs se multiplier, et chaque porte qu'il franchissait le menait dans un nouveau hall, identique au précédent, avec Al-Jabbara assis sur son trône au bout, souriant.\n\n— Tu ne peux pas fuir ton propre cœur, Nawfel, dit la voix du monstre, et elle venait de partout à la fois — des murs, du plafond, du sol, de l'intérieur même de sa poitrine. Où que tu ailles, je serai là. Car je suis toi. La part de toi qui refuse de voir ses faiblesses. La part de toi qui se croit supérieure. La part de toi qui oublie que tout vient d'Allah.\n\nNawfel trébucha et tomba. Ses genoux heurtèrent le sol avec violence, et il resta là, à genoux, haletant, les yeux brillants de larmes de frustration. Autour de lui, les ombres des versions prisonnières de lui-même le regardaient avec des yeux suppliants, comme s'il était le seul à pouvoir les libérer.\n\nAlors qu'il était à terre, épuisé, une lumière apparut. Pas la lumière pourpre d'Al-Jabbara, non — une lumière douce, blanche et dorée, comme celle du premier jardin. Elle filtrait par une fissure dans le mur, fine comme un cheveu, mais si intense que Nawfel sentit immédiatement son calme revenir. Il comprit, avec la clarté soudaine d'un rêve lucide, que fuir n'était pas la solution. Il fallait se lever. Il fallait affronter. Pas avec la force des bras, mais avec la force du cœur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne fuirai plus. Je ne peux pas fuir mon propre cœur. Mais je ne céderai pas non plus.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't2c2s5',
          background: 'inner_world',
        },

        // --- t2c2s5: Le conseil du shaykh dans le rêve ---
        {
          id: 't2c2s5',
          chapterId: 't2c2',
          title: 'Le conseil du shaykh dans le rêve',
          narration: `Quand Nawfel se releva, Sidi Mu'adh était là. Pas le vrai Sidi Mu'adh — Nawfel savait qu'il dormait toujours dans son lit à Chefchaouen — mais une projection du shaykh, une présence spirituelle qui brillait d'une lumière douce dans les ténèbres de la forteresse. Le vieil homme portait sa djellaba blanche et son turban immaculé, et son visage rayonnait de cette sérénité qui transcende les mondes.\n\n— Tu as vu Al-Jabbara, dit le shaykh d'une voix qui résonnait dans le hall comme un écho dans une cathédrale. Et tu as vu son armure, sa forteresse, son pouvoir. Mais écoute-moi bien, petit cœur : cette forteresse est construite sur du sable. Elle semble invincible, mais elle repose sur une seule chose — la croyance que tu es l'auteur de tes propres talents. Le jour où tu comprendras que tout vient d'Allah, le jour où tu diras « الحمد لله » — Alhamdulillah — non pas comme une formule, mais comme une vérité profonde inscrite dans chaque cellule de ton être, ce jour-là, la forteresse s'effondrera.\n\nLe shaykh désigna le miroir planté dans le sol au carrefour, visible même de l'intérieur de la forteresse.\n\n— Tu devras regarder dans ce miroir, Nawfel. Non pas pour voir ton visage, mais pour voir ton cœur tel qu'il est — avec ses lumières et ses ombres, ses forces et ses faiblesses. C'est l'épreuve la plus difficile, car aucun être humain n'aime voir ses propres défauts. Mais c'est aussi l'épreuve la plus libératrice. Car quand tu te vois tel que tu es, sans mensonge ni excuse, tu deviens libre — libre de choisir qui tu veux devenir.\n\nSidi Mu'adh tendit la main à Nawfel et l'aida à se lever. Son toucher était chaud, réconfortant, et Nawfel sentit la peur reculer comme les ombres devant le lever du soleil.\n\n— Souviens-toi, petit cœur : l'orgueil est un voile. La gratitude est la clé. Et la sincérité est la lumière qui dissipe toute obscurité.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Quand le serviteur dit الحمد لله d'un cœur sincère, Allah dit : « Mon serviteur sait que tout vient de Moi. Je lui accorde encore plus. » C'est la promesse divine, petit cœur. La gratitude attire la grâce.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... je suis prêt pour le miroir. Je veux voir la vérité.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: 'L\'orgueil et ses illusions',
            content:
              "Al-Jabbara (الجبّارة) représente l'orgueil — Al-Kibr (الكبر) — que le Prophète صلى الله عليه وسلم a décrit comme le dernier péché dont les gens se repentiront. L'orgueil est un voile si épais qu'il empêche de voir les blessings d'Allah. La forteresse d'Al-Jabbara est construite sur la croyance illusoire que nos talents nous appartiennent, alors qu'ils sont tous des dons d'Allah.",
            quote: 'لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر',
            source: 'Hadith — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — L'Épreuve du Miroir (امتحان المرآة)
    // ============================================================
    {
      id: 't2c3',
      tomeId: 'tome2',
      number: 3,
      title: 'L\'Épreuve du Miroir',
      titleAr: 'امتحان المرآة',
      scenes: [
        // --- t2c3s1: Le miroir spirituel ---
        {
          id: 't2c3s1',
          chapterId: 't2c3',
          title: 'Le miroir spirituel',
          narration: `Nawfel quitta la forteresse d'Al-Jabbara et retrouva le carrefour. La forteresse se dressait toujours derrière lui, immense et menaçante, mais elle semblait un peu moins sombre qu'avant, comme si la lumière du monde intérieur avait gagné un peu de terrain. Le miroir que Sidi Mu'adh lui avait donné — le miroir d'argent aux motifs arabes — brillait devant lui, planté dans le sol comme une stèle millénaire.\n\nEn s'approchant, Nawfel remarqua que la surface du miroir n'était pas lisse comme celle d'un miroir ordinaire. Elle était vivante — ondulante, mouvante, comme la surface d'un lac dans un vent léger. Et elle ne reflétait pas le monde extérieur. Quand Nawfel regarda au-dessus de l'objet, il ne vit pas son propre visage — il vit le ciel du monde intérieur, avec ses étoiles dansantes et ses nuages dorés. Le miroir ne montrait pas le dehors. Il montrait le dedans.\n\nAutour du miroir, le sentier était bordé de fleurs que Nawfel n'avait jamais vues — des fleurs d'un blanc pur, aux pétales translucides comme du verre fin, qui émettaient une lumière douce et régulière, comme des lanternes. Leur parfum était indescriptible — pas sucré comme le jasmin, pas boisé comme le cèdre, mais quelque chose d'entièrement nouveau, quelque chose qui rappelait la paix, cette paix que l'on sent parfois au fond d'une prière sincère.\n\nNawfel s'arrêta devant le miroir et posa ses mains sur le cadre d'argent. Le métal était tiède, presque chaud, comme si le miroir avait une température corporelle. Il sentit une vibration douce remonter le long de ses bras, traverser ses épaules, descendre dans son cœur — et son cœur répondit par un battement fort, clair, conscient.\n\n— Je suis prêt, murmura-t-il. Montre-moi.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Montre-moi mon cœur. Montre-moi qui je suis vraiment.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't2c3s2',
          background: 'inner_world',
        },

        // --- t2c3s2: Le premier reflet ---
        {
          id: 't2c3s2',
          chapterId: 't2c3',
          title: 'Le premier reflet',
          narration: `La surface du miroir ondula une dernière fois, puis se stabilisa. Nawfel regarda et, pendant un instant qui dura une éternité, il ne vit rien. Puis, lentement, une image commença à se former — floue d'abord, puis de plus en plus nette, comme une photographie qui se développe.\n\nIl se vit lui-même. Pas le Nawfel du monde réel — non, le Nawfel de l'âme. Un garçon debout dans un paysage que Nawfel reconnut : c'était la cour de l'école. Et dans cette cour, Samir était en train de recevoir un prix, entouré de camarades qui applaudissaient. Et le Nawfel du miroir — le reflet de son âme — avait le visage déformé par une expression que Nawfel reconnut immédiatement car il l'avait sentie mille fois sans jamais oser la nommer : la jalousie pure, noire, toxique, qui crispait les traits du reflet et durcissait ses yeux.\n\nNawfel recula d'un pas. Son cœur se serra. Il ne voulait pas voir ça. Il ne voulait pas croire que c'était lui. Mais le miroir ne mentait pas. Le miroir ne jugeait pas. Il montrait simplement la vérité, avec une impartialité cruelle et bienveillante à la fois.\n\nPuis le reflet changea. Le paysage devint le hall de la forteresse d'Al-Jabbara, et Nawfel se vit assis sur le trône noir, l'armure du Tyran sur les épaules, le sourire arrogant aux lèvres. Des silhouettes courbées l'entouraient — les versions prisonnières de lui-même — et il les regardait avec mépris, comme un roi regarde ses sujets.\n\nC'était l'orgueil. Son orgueil. La part la plus sombre de son âme, révélée dans toute son horreur par le miroir spirituel. Nawfel sentit ses genoux trembler. Des larmes coulèrent sur ses joues, non pas de tristesse, mais de la reconnaissance douloureuse de la vérité.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est... c'est moi ? Tout ça... c'est en moi ?",
              emotion: 'sad',
            },
          ],
          choices: [
            {
              id: 't2c3s2_c1',
              text: 'Accepter la vérité et rester devant le miroir',
              nextSceneId: 't2c3s3a',
              isCorrect: true,
            },
            {
              id: 't2c3s2_c2',
              text: 'Détourner le regard — c\'est trop difficile à voir',
              nextSceneId: 't2c3s3b',
            },
          ],
          background: 'inner_world',
        },

        // --- t2c3s3a: La vérité qui libère ---
        {
          id: 't2c3s3a',
          chapterId: 't2c3',
          title: 'La vérité qui libère',
          narration: `Nawfel ne bougea pas. Il resta debout devant le miroir, les larmes coulant librement sur ses joues, regardant le reflet de son âme avec une honnêteté qu'il n'avait jamais connue. Chaque détail du miroir lui brûlait les yeux — le visage jaloux, la posture orgueilleuse, les silhouettes prisonnières — mais il ne détourna pas le regard. Il savait, d'une certitude qui venait du plus profond de son être, que fuir la vérité ne ferait que renforcer le pouvoir des monstres.\n\nEt alors, quelque chose de remarquable se produisit. Le miroir commença à changer. Le reflet orgueilleux et jaloux se mit à trembler, comme si une main invisible l'effaçait. Les couleurs sombres s'estompèrent, remplacées par des teintes plus douces — du bleu, du doré, du blanc. Le paysage de la forteresse se transforma en un jardin, et le Nawfel du miroir, libéré de ses chaînes d'orgueil, apparut tel qu'il était vraiment : un garçon au cœur pur, marqué par des défauts mais aussi par des qualités — de la curiosité, du courage, de la tendresse.\n\nLe miroir montra ensuite d'autres images : Nawfel aidant Wassim à faire ses devoirs. Nawfel partageant son goûter avec un camarade qui avait oublié le sien. Nawfel priant avec ferveur, son front posé sur le tapis, ses lèvres murmurant les noms d'Allah avec une sincérité absolue. Nawfel dessinant une calligraphie non pas pour être le meilleur, mais parce qu'il aimait la beauté des lettres arabes.\n\nCes images étaient la vérité aussi — la vérité complète, pas seulement la partie sombre. Le miroir ne montrait pas seulement les défauts de Nawfel. Il montrait aussi sa lumière. Et en voyant les deux ensemble — l'ombre et la lumière — Nawfel comprit quelque chose de fondamental : il n'était ni un saint ni un monstre. Il était un être humain, avec des défauts à transformer et des qualités à cultiver. Et c'était suffisant.\n\nAl-Hasad, l'ombre de la jalousie, qui s'était approchée en silence, se figea. Le miroir lui renvoyait sa propre image — une ombre vide, sans substance — et l'ombre sembla rétrécir, perdre de son pouvoir, comme une tache d'encre qui s'évapore sous la lumière du soleil.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je vois. Je vois tout. Mes défauts et mes qualités. Et je choisis de ne pas avoir honte, parce que c'est en les voyant que je peux les transformer.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't2c3s4',
          background: 'inner_world',
          lesson: {
            title: 'Le miroir du cœur — Muhasaba',
            content:
              "La Muhasaba (المحاسبة) est l'examen de conscience en Islam. Le grand savant Al-Ghazali disait que le cœur est comme un miroir : il doit être nettoyé chaque jour pour refléter la lumière d'Allah. Voir ses propres défauts n'est pas une faiblesse — c'est le premier pas vers la purification du cœur (Tazkiyat al-Qalb).",
            quote: 'حيّ على الفلاح — Venez au salut',
            source: "L'appel à la prière (Adhan) — « Le salut se trouve dans le succès spirituel »",
          },
        },

        // --- t2c3s3b: Le voile de la dénégation ---
        {
          id: 't2c3s3b',
          chapterId: 't2c3',
          title: 'Le voile de la dénégation',
          narration: `Nawfel détourna les yeux. Il ne pouvait pas supporter ce qu'il voyait — ce visage déformé par la jalousie, cette posture orgueilleuse, cette version de lui-même qu'il ne voulait pas reconnaître. Ses larmes se transformèrent en frustration, et il frappa le sol du poing.\n\n— Non ! Ce n'est pas moi ! Ce n'est PAS moi ! cria-t-il, et sa voix résonna dans le monde intérieur avec une écho désespéré.\n\nLe miroir trembla, puis son reflet devint flou, instable, indéchiffrable. Les images disparurent, remplacées par une surface grisâtre et morte. Le miroir s'était éteint — non pas parce qu'il avait menti, mais parce que Nawfel avait refusé de regarder.\n\nMais en refusant de voir ses défauts, Nawfel avait aussi refusé de voir ses qualités. La lumière qu'il portait en lui s'affaiblit, et Al-Hasad, l'ombre de la jalousie, qui s'était approchée en silence, en profita pour grandir. Elle s'étendit sur le miroir comme une pellicule noire, le recouvrant entièrement, et Nawfel comprit avec horreur qu'il venait de se priver de l'outil le plus puissant pour combattre les monstres.\n\nSidi Mu'adh apparut alors, sa projection spirituelle brillant faiblement dans l'obscurité croissante.\n\n— Petit cœur, dit-il doucement mais fermement. Détourner le regard de tes défauts ne les fait pas disparaître. Au contraire — les défauts que tu refuses de voir grandissent dans l'ombre, comme des mauvaises herbes dans un jardin non entretenu. Courage. Regarde. La vérité libère, même quand elle fait mal. Surtout quand elle fait mal.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Le Prophète صلى الله عليه وسلم disait : « Le sage est celui qui se juge lui-même et agit en conséquence. » Se juger soi-même, c'est regarder dans le miroir avec honnêteté. Pas pour se condamner, mais pour se purifier.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c3s4',
          background: 'inner_world',
        },

        // --- t2c3s4: La lumière et l'ombre ---
        {
          id: 't2c3s4',
          chapterId: 't2c3',
          title: 'La lumière et l\'ombre',
          narration: `Que Nawfel ait regardé le miroir avec courage ou qu'il ait d'abord détourné les yeux avant de se ressaisir, le moment était venu d'agir. Le monde intérieur tremblait, comme si la terre elle-même ressentait le combat qui se préparait. Au loin, la forteresse d'Al-Jabbara pulsait d'un éclat sombre, ses tours crachant des volutes de fumée pourpre dans le ciel du monde intérieur. Al-Hasad rampait aux pieds de la forteresse, attendant les ordres de son maître.\n\nMais Nawfel avait changé. Le miroir avait fait son œuvre — même si le processus avait été douloureux, même s'il avait d'abord voulu fuir, il avait finalement vu la vérité. Et la vérité, comme l'avait dit Sidi Mu'adh, libère. Nawfel n'était plus le garçon jaloux et orgueilleux qu'il était quelques heures auparavant. Il était toujours Nawfel — avec ses défauts, ses faiblesses, ses moments de lâcheté — mais il les connaissait maintenant, et cette connaissance lui donnait une force qu'il n'avait jamais eue.\n\nLes fleurs blanches autour du miroir s'illuminèrent d'un éclat nouveau, et leur parfum se fit plus intense, remplissant l'air d'une odeur de pureté qui repoussait l'ombre d'Al-Hasad. Nawfel regarda ses mains et vit qu'elles brillaient légèrement — pas d'une lumière éclatante, mais d'une lueur douce, comme celle d'une bougie dans une pièce sombre. C'était la lumière de la reconnaissance sincère, la première lueur de l'Ikhlas.\n\nIl se tourna vers la forteresse et, pour la première fois depuis qu'il était entré dans son monde intérieur, il ne ressentit ni peur ni envie. Il ressentit quelque chose de plus profond, de plus durable — le désir sincère de se purifier, non pas pour être meilleur que Samir, non pas pour recevoir des compliments, mais pour plaire à Allah. Un désir nu, sans ornement, sans ego. Le début du véritable Ikhlas.\n\nLe chemin vers la forteresse s'illumina devant lui, et Nawfel s'avança, le cœur léger malgré l'obscurité qui l'entourait.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne vais pas te détruire, Al-Jabbara. Sidi Mu'adh m'a appris que tu es une partie de moi. Mais je vais te transformer. L'énergie de l'orgueil deviendra la fierté légitime d'être un serviteur d'Allah.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: 'L\'examen de conscience — Muhasaba',
            content:
              "La Muhasaba (المحاسبة) est un pilier du cheminement spirituel en Islam. Omar ibn al-Khattab disait : « Jugez-vous vous-mêmes avant d'être jugés. Pesez vos actions avant qu'elles ne soient pesées pour vous. » Voir ses propres défauts avec honnêteté n'est pas une faiblesse — c'est la plus grande des forces, car seule la vérité peut libérer le cœur.",
            quote: 'حاسبوا أنفسكم قبل أن تحاسبوا',
            source: "Hadith rapporté par At-Tirmidhi",
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Le Cœur Sincère (القلب الصادق)
    // ============================================================
    {
      id: 't2c4',
      tomeId: 'tome2',
      number: 4,
      title: 'Le Cœur Sincère',
      titleAr: 'القلب الصادق',
      scenes: [
        // --- t2c4s1: L'enseignement de l'Ikhlas ---
        {
          id: 't2c4s1',
          chapterId: 't2c4',
          title: 'L\'enseignement de l\'Ikhlas',
          narration: `Nawfel se retrouva dans la zawiyah, mais ce n'était pas un rêve — il était réellement là, assis en face de Sidi Mu'adh dans la lumière chaude du matin qui filtrait par la fenêtre. Comment était-il arrivé là ? Nawfel ne savait pas. Peut-être que les frontières entre le monde intérieur et le monde réel n'étaient pas aussi fixes qu'il l'avait cru.\n\nSidi Mu'adh avait posé devant lui le miroir d'argent, et à côté du miroir, un petit bol en cuivre rempli d'eau. L'eau était parfaitement claire, immobile, comme une vitre liquide.\n\n— Petit cœur, commença le shaykh, tu as vu la forteresse d'Al-Jabbara, tu as regardé dans le miroir, et tu as survécu. C'est déjà un exploit remarquable. Mais maintenant, tu dois apprendre la leçon la plus importante de ce voyage — la leçon de l'Ikhlas.\n\nSidi Mu'adh plongea le doigt dans le bol d'eau et en sortit une goutte qu'il laissa tomber sur la surface du miroir. La goutte s'étala, parfaite, transparente, et le miroir la refléta avec une netteté absolue.\n\n— Regarde cette goutte. Elle ne cherche pas à être une rivière. Elle ne cherche pas à être un océan. Elle est simplement une goutte d'eau, et elle remplit parfaitement son rôle. C'est cela, l'Ikhlas — faire ce que tu fais avec sincérité totale, sans chercher à être autre chose que ce que tu es, sans chercher la reconnaissance des autres, sans comparer ta goutte avec l'océan de quelqu'un d'autre. Quand tu fais ta calligraphie, fais-la pour la beauté de l'acte, pas pour la star sur le mur. Quand tu aides ton frère, aide-le par amour, pas pour qu'on te dise que tu es gentil. Quand tu pries, prie pour Allah seul, pas pour que les autres te voient prier.\n\nNawfel écouta, les yeux fixés sur la goutte d'eau, et quelque chose se rangea dans son cœur — comme si un meuble avait enfin trouvé sa place dans une pièce en désordre.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "L'Ikhlas est le secret des secrets, petit cœur. Le Prophète صلى الله عليه وسلم a dit qu'il y aura des gens qui seront les premiers à entrer en Enfer, et ils seront ceux qui ont fait de bonnes actions — mais pas avec sincérité. Ils ont fait ces actions pour que les gens les voient et les louent. Et la louange des hommes est un fuel qui s'épuise très vite.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Alors quand je suis jaloux de Samir... c'est parce que je fais les choses pour la louange des gens et non pour Allah ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement, petit cœur. La jalousie naît quand ton cœur est attaché à l'approbation des humains au lieu d'être attaché à l'approbation d'Allah. Détache ton cœur des gens, et attache-le à Allah. La jalousie disparaîtra d'elle-même, comme l'ombre disparaît quand le soleil se lève.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c4s2',
          background: 'zawiyah',
          lesson: {
            title: 'L\'Ikhlas — La sincérité pure',
            content:
              "L'Ikhlas (الإخلاص) signifie faire chaque acte uniquement pour le plaisir d'Allah, sans rien attendre des gens. C'est la qualité la plus élevée du cœur, car elle purifie toutes les autres actions. Le Prophète صلى الله عليه وسلم a dit que la première chose qui sera jugée le Jour du Jugement sera la prière, et Allah regardera si elle a été faite avec Ikhlas ou pour être vue des gens.",
            quote: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- t2c4s2: L'école du lendemain ---
        {
          id: 't2c4s2',
          chapterId: 't2c4',
          title: 'L\'école du lendemain',
          narration: `Le lendemain matin, Nawfel se réveilla avec une sensation qu'il n'avait pas ressentie depuis longtemps — la légèreté. Pas une légèreté insouciante, non, mais une légèreté profonde, comme si un poids invisible avait été levé de sa poitrine pendant la nuit. Il s'habilla, descendit à la cuisine, mangea son msemen en silence pendant que Wassim racontait un rêve à voix haute et Souhayl corrigeait ses devoirs d'arabe.\n\nEn marchant vers l'école, Nawfel repensa aux paroles de Sidi Mu'adh : « Détache ton cœur des gens, et attache-le à Allah. » Chaque pas était une prière silencieuse, et Nawfel sentait qu'avec chaque pas, l'ombre d'Al-Hasad s'affaiblissait un peu plus.\n\nÀ l'école, Samir était déjà là, assis au premier rang, son sourire facile aux lèvres. Quand il vit Nawfel, il leva la main et lui fit un signe amical. Nawfel hésita une fraction de seconde — l'ancien lui aurait souri poliment tout en resserrant les poings dans sa poche. Mais le Nawfel d'aujourd'hui fit quelque chose de différent. Il sourit. Vraiment. Un sourire qui venait du cœur.\n\n— Salam Samir ! dit Nawfel en s'asseyant à côté de lui. Tu veux qu'on fasse les devoirs ensemble à la récréation ?\n\nSamir regarda Nawfel avec surprise, puis son visage s'illumina. — Oui ! Avec plaisir ! J'ai vu ta calligraphie l'autre jour — c'est vraiment beau, Nawfel. J'aimerais beaucoup apprendre.\n\nCes mots simples — sincères, désarmés — frappèrent Nawfel comme une bénédiction. Il sentit la main invisible dans sa poitrine se desserrer pour de bon, et l'ombre d'Al-Hasad, qui l'avait suivi jusqu'ici, recula d'un pas, puis deux, puis disparut dans la lumière du matin.`,
          dialogues: [
            {
              characterId: 'samir',
              text: "Merci, Nawfel ! Tu sais, moi aussi j'ai regardé ta calligraphie. Les autres disent que je suis meilleur, mais honnêtement, tu as un style que je n'arrive pas à reproduire. Ta lettre « ba » est magnifique.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Merci, Samir. Vraiment, merci. Et... je voulais te dire quelque chose. Je suis désolé si j'ai été distant ces derniers temps. J'apprends encore à être un bon ami.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't2c4s3',
          background: 'classroom',
        },

        // --- t2c4s3: La transformation ---
        {
          id: 't2c4s3',
          chapterId: 't2c4',
          title: 'La transformation',
          narration: `Les jours qui suivirent furent comme un printemps précoce dans le cœur de Nawfel. Il s'appliquait à chaque action avec une intention renouvelée — non plus pour être le meilleur, mais pour faire de son mieux pour Allah. Quand il faisait sa calligraphie, il ne regardait plus les étoiles sur le mur. Il regardait les lettres, la beauté des courbes, le mouvement du calame sur le papier, et il remerciait Allah de lui avoir donné cette capacité. Quand il jouait au football, il ne cherchait plus à marquer plus de buts que Samir. Il jouait pour le plaisir du jeu, pour la camaraderie, pour la joie simple de courir dans la cour de l'école.\n\nLe changement ne passa pas inaperçu. Aziza, qui observait son fils avec l'attention d'une mère qui voit au-delà des apparences, remarqua que Nawfel dormait mieux, mangeait mieux, riait plus souvent. Mehdi, lors d'un dîner familial, posa sa main sur l'épaule de Nawfel et dit simplement : « Je suis fier de toi, mon fils. Non pas de ce que tu accomplis, mais de qui tu deviens. » Et ces mots, venant de son père, valaient plus que toutes les étoiles du monde.\n\nWassim, lui, avait quelque chose de spécial à dire. Un soir, en se couchant, il attrapa le bras de Nawfel et chuchota :\n\n— Nawfel... l'ombre est partie. Je la voyais avant — une ombre noire qui te suivait partout. Maintenant, elle n'est plus là. Ton cœur brille, Nawfel. Il brille vraiment.\n\nNawfel serra son petit frère contre lui et le couvrit de baisers. Wassim, avec sa Basira — sa vision du cœur — avait confirmé ce que Nawfel savait déjà dans son for intérieur : les monstres de la jalousie et de l'orgueil s'affaiblissaient. Mais la bataille n'était pas terminée. Il lui restait une dernière chose à faire — retourner dans son monde intérieur et affronter Al-Jabbara une dernière fois, non pas pour le détruire, mais pour le transformer.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel, y'a un truc qui brille autour de toi maintenant. C'est comme une lumière douce. Comme la lumière de la mosquée pendant le Ramadan.",
              emotion: 'surprised',
            },
            {
              characterId: 'aziza',
              text: "Alhamdulillah. Mon cœur est rempli de gratitude, mes enfants. Votre père et moi, nous demandons à Allah chaque jour de protéger vos cœurs. Et Il répond, comme Il répond toujours, à ceux qui Lui demandent avec sincérité.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't2c4s4',
          background: 'home',
        },

        // --- t2c4s4: Le dernier affrontement ---
        {
          id: 't2c4s4',
          chapterId: 't2c4',
          title: 'Le dernier affrontement',
          narration: `Cette nuit-là, Nawfel entra dans son monde intérieur avec une détermination tranquille. Pas la détermination fiévreuse de celui qui veut se prouver quelque chose, mais la détermination douce de celui qui sait ce qu'il doit faire et le fait pour la bonne raison.\n\nLa forteresse d'Al-Jabbara se dressait toujours au loin, mais elle avait changé. Les murs d'obsidienne, autrefois noirs et brillants, étaient maintenant fissurés, et des traînées de lumière dorée filtraient par les crevasses comme du soleil à travers des nuages déchirés. Les tours tremblaient légèrement, et le feu vert des torches avait perdu de son éclat, remplacé par une lueur mourante, comme une bougie à la fin de sa vie.\n\nNawfel marcha vers la forteresse et la porte s'ouvrit avant qu'il ne touche. Le hall était vide — les silhouettes prisonnières avaient disparu. Sur le trône d'osseaux dorés, Al-Jabbara était assis, mais il avait rapetissé. Plus du tout la créature colossale des premiers jours — il était maintenant de la taille de Nawfel, son armure cabossée, ses runes éteintes, son visage déformé portant non plus de l'arrogance, mais de la peur.\n\n— Tu es revenu, dit Al-Jabbara d'une voix qui n'avait plus rien de tonitruant. Tu as changé, Nawfel. Tu n'es plus celui que je connaissais.\n\n— Je suis toujours Nawfel, répondit-il doucement. Mais je ne suis plus celui que tu contrôlais. Je sais maintenant que tout ce que j'ai est un don d'Allah. Et quand on le sait vraiment, vraiment, au plus profond de son cœur, l'orgueil n'a plus de prise.\n\nAl-Jabbara regarda Nawfel longuement. Puis, lentement, son armure commença à se désagréger. Les plaques de métal noir tombèrent une à une, révélant ce qui se cachait dessous — non pas un monstre, mais un enfant. Un enfant aux traits déformés, marqué par la tristesse et la solitude, mais un enfant tout de même. L'enfant orgueilleux qui vivait en Nawfel, la part de lui qui avait besoin d'être le meilleur pour se sentir aimé.\n\nNawfel comprit. Ce n'était pas un ennemi à vaincre. C'était une partie blessée de lui-même qui avait besoin d'être guérie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne te détruis pas. Tu es une partie de moi. Mais tu ne me contrôles plus. L'énergie que tu utilisais pour l'orgueil, je vais la transformer. Tu seras ma fierté — non pas la fierté de l'ego, mais la fierté légitime d'être un serviteur d'Allah.",
              emotion: 'determined',
            },
            {
              characterId: 'nawfel',
              text: "Je ne suis pas meilleur que les autres, et les autres ne sont pas meilleurs que moi. Nous sommes tous des créations d'Allah, chacune avec ses blessings uniques. Alhamdulillah pour tout.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c4s5',
          background: 'inner_world',
        },

        // --- t2c4s5: Le cœur transformé ---
        {
          id: 't2c4s5',
          chapterId: 't2c4',
          title: 'Le cœur transformé',
          narration: `La forteresse d'Al-Jabbara s'effondra. Pas dans un fracas dramatique, non — elle se dissout lentement, paisiblement, comme un château de sable à marée montante. Les murs d'obsidienne se transformèrent en lumière, les tours sombres devinrent des piliers dorés, le trône d'osseaux se changea en un lit de fleurs blanches. L'enfant qui se cachait sous l'armure d'Al-Jabbara sourit — un sourire triste mais soulagé — et fondit dans la lumière du monde intérieur, retournant à sa place dans le cœur de Nawfel, transformé, apaisé.\n\nAl-Hasad, l'ombre de la jalousie, apparut une dernière fois. Elle était minuscule maintenant — à peine plus grande qu'une ombre d'insecte — et elle tremblait face à la lumière qui émanait de Nawfel. Nawfel ne la chassa pas. Il la regarda avec compassion, car il comprenait maintenant qu'elle aussi était une partie de lui — la part qui avait peur de ne pas être assez, qui souffrait de se comparer aux autres.\n\n— Tu n'as plus besoin d'exister sous cette forme, dit Nawfel doucement. Ta jalousie n'était que la voix de ma peur de ne pas être aimé. Mais je sais maintenant que l'amour d'Allah ne dépend pas de mes accomplissements. Il dépend de mon cœur. Et mon cœur, aujourd'hui, est sincère.\n\nAl-Hasad trembla une dernière fois, puis elle aussi se dissout dans la lumière. Le monde intérieur retrouva sa splendeur — les arbres dorés brillèrent d'un éclat renouvelé, les fleurs chantantes reprirent leur mélodie, et le ciel violet se couvrit d'étoiles si nombreuses qu'elles formaient des constellations en forme de mots arabes : « إخلاص » — Ikhlas — et « شكر » — Shukr.\n\nLe miroir au carrefour brilla d'une lumière nouvelle, et quand Nawfel regarda à l'intérieur, il vit non plus les scènes de jalousie et d'orgueil, mais un cœur — son cœur — qui battait d'un rythme régulier et paisible, irradiant une lumière douce et constante, comme un phare dans la nuit. Le cœur sincère. Le cœur reconnaissant. Le cœur en paix.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "اللهم إني أعوذ بك أن أشرك بك وأنا أعلم، وأستغفرك لما لا أعلم — Ô Allah, je me réfugie auprès de Toi contre l'association à Toi alors que je sais, et je Te demande pardon pour ce que je ne sais pas.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't2c4s6',
          background: 'inner_world',
          earnedBadgeId: 'ikhlas',
        },

        // --- t2c4s6: Le retour à Chefchaouen ---
        {
          id: 't2c4s6',
          chapterId: 't2c4',
          title: 'Le retour à Chefchaouen',
          narration: `Nawfel ouvrit les yeux. La lumière de l'aube filtrait à travers les volets en bois sculpté de la chambre, dessinant des arabesques dorées sur les murs blancs. Le coq du voisin chantait, les pigeons roucoulaient sur le rebord de la fenêtre, et au loin, on entendait l'appel à la prière du Fajr qui montait depuis le minaret de la mosquée du quartier, portant dans la fraîcheur de l'air matinal les paroles sacrées : « الله أكبر — Allah est le plus Grand. »\n\nNawfel resta immobile un instant, les yeux ouverts, fixant le plafond. Son cœur battait d'un rythme nouveau — calme, régulier, paisible. Il sentait en lui une sérénité qu'il n'avait jamais connue, une plénitude qui ne dépendait d'aucune circonstance extérieure. Pas le triomphe d'avoir battu quelqu'un. Pas la satisfaction d'avoir reçu une étoile. Juste la paix profonde de savoir qui il était et pour qui il vivait.\n\nIl se leva, fit ses ablutions avec une attention nouvelle, comme si chaque goutte d'eau était un cadeau, et pria le Fajr avec une concentration qu'il n'avait jamais eue. Chaque mot de la prière résonnait dans son cœur comme une note de musique dans une salle parfaite, et quand il prononça « إياك نعبد وإياك نستعين — C'est Toi que nous adorons et c'est de Toi que nous implorons l'aide, » il sentit que ces mots n'étaient plus une simple formule — ils étaient la vérité de sa vie.\n\nAprès la prière, Wassim apparut dans l'encadrement de la porte, ses yeux encore mi-clos de sommeil. Il regarda Nawfel et sourit.\n\n— Nawfel, dit-il doucement. Tu as encore plus de lumière qu'avant. C'est comme si... comme si ton cœur était devenu une lampe.\n\nNawfel sourit, s'agenouilla et prit Wassim dans ses bras.\n\n— C'est parce qu'on ne vit pas pour soi-même, petit frère. On vit pour Allah. Et quand on comprend ça, le cœur devient la plus belle des lampes. Viens, on va aller prier ensemble. Et après, on prend le petit-déjeuner. Maman a fait des msemen.\n\nLes deux frères marchèrent main dans la main vers la cuisine, et dans le monde intérieur de Nawfel, le cœur sincère continuait de briller, inaltérable, comme une étoile qui ne s'éteint jamais.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Nawfel, viens t'asseoir. J'ai quelque chose à te lire — une lettre que Sidi Mu'adh m'a confiée pour toi. Il dit que tu as accompli quelque chose de rare. Quelque chose que très peu de cœurs parviennent à faire.",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Alhamdulillah, mon fils. Tu commences à comprendre ce que signifie être un vrai serviteur d'Allah. Et souviens-toi : ce n'est pas une destination, c'est un chemin. Chaque jour, tu devras choisir la sincérité. Chaque jour, tu devras choisir la gratitude. Mais tu sais maintenant comment faire. Et c'est le plus beau des cadeaux.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          lesson: {
            title: 'Le cœur sincère — Al-Qalb As-Sadiq',
            content:
              "Le deuxième tome enseigne deux vertus fondamentales : l'Ikhlas (الإخلاص — la sincérité) et le Shukr (الشكر — la gratitude). Nawfel a appris que la jalousie naît de l'attachement à l'approbation des humains, et que l'orgueil naît de l'oubli que tout vient d'Allah. En reconnectant son cœur à sa Source, il a transformé ses monstres intérieurs non pas par la destruction, mais par la reconnaissance et l'amour. C'est le cœur sincère — Al-Qalb As-Sadiq — qui est le but ultime du cheminement spirituel.",
            quote: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            source: 'Coran, Sourate Ar-Ra\'d (13:28)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Jabbara — Le Tyran de l\'orgueil (الجبّارة)', 'Al-Hasad — L\'Ombre jalouse (الحسد)'],
  spiritualLesson:
    "Le deuxième tome enseigne que la jalousie (Al-Hasad/الحسد) et l'orgueil (Al-Kibr/الكبر) sont les visettes les plus subtiles du Nafs Al-Ammara. Nawfel apprend à les vaincre non pas par la force brute, mais par l'Ikhlas (la sincérité) et le Shukr (la gratitude) — en reconnectant chaque action à Allah et en reconnaissant que tous les talents sont des dons divins. Le miroir spirituel lui apprend la Muhasaba (l'examen de conscience), et la transformation d'Al-Jabbara lui enseigne que les monstres intérieurs ne doivent pas être détruits mais transformés.",
};
