import type { Tome } from '@/types/story';

export const tome5: Tome = {
  id: 'tome5',
  number: 5,
  title: 'Al-Mutma\'inna',
  titleAr: 'النفس المطمئنة',
  subtitle: 'Le voyage ultime vers la paix du cœur',
  description:
    "Le moment est venu. Après avoir traversé les épreuves de la colère, de l'avidité, de l'ostentation et de la confusion, Nawfel doit affronter l'ultime bataille — celle qui se déroule au cœur même de son être. Al-Nafs Al-Ammara Suprême, le maître suprême de l'ego, règne sur une forteresse impénétrable construite avec chaque peur, chaque attachement, chaque désir que Nawfel a jamais porté. Mais cette fois, Sidi Mu'adh lui révélera un secret ancien : les monstres ne doivent pas être détruits — ils doivent être transformés. C'est l'essence d'Al-Ihsan, l'excellence spirituelle, le plus haut niveau du cheminement. Le voyage de Nawfel touche à sa fin, et la paix du cœur attend.",
  theme: 'L\'ultime épreuve — la transformation complète du Nafs',
  coverImage: '/images/tome5-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — L'Appel Final (الدعوة الأخيرة)
    // ============================================================
    {
      id: 't5c1',
      tomeId: 'tome5',
      number: 1,
      title: "L'Appel Final",
      titleAr: 'الدعوة الأخيرة',
      scenes: [
        // --- t5c1s1: Une nuit sans lune ---
        {
          id: 't5c1s1',
          chapterId: 't5c1',
          title: 'Une nuit sans lune',
          narration: `La nuit était tombée sur Chefchaouen comme un voile de soie noire, sans une seule étoile pour percer l'obscurité. Nawfel était assis au bord de son lit, les yeux grands ouverts, incapable de dormir. Depuis des semaines, il ressentait quelque chose d'étrange — pas de la peur, pas de l'anxiété, mais une vibration profonde, comme si son cœur était accordé à une fréquence que ses oreilles ne pouvaient pas entendre.\n\nC'était un appel. Silencieux, insistants, et pourtant d'une douceur immense. Il venait de l'intérieur — de ce lieu mystérieux qu'il avait appris à connaître au fil de ses voyages dans son monde intérieur. Mais cette fois, l'appel était différent de tous ceux qu'il avait reçus auparavant. Il ne s'agissait pas d'une urgence, ni d'un cri de détresse. C'était une invitation. Un rendez-vous.\n\nLe vent souffla doucement à travers la fenêtre entrouverte, apportant avec lui le parfum des jasmins du jardin et une mélodie lointaine que Nawfel ne pouvait pas identifier. Il ferma les yeux et tendit l'oreille. La mélodie se rapprocha — c'était le son d'un tambourin, ou peut-être d'un cœur qui bat, ou peut-être des deux à la fois. Et avec le son vint une voix, pas dans ses oreilles mais dans sa poitrine, une voix qu'il connaissait mieux que la sienne propre.\n\n« Petit cœur... il est temps. »\n\nLes mots de Sidi Mu'adh résonnèrent dans tout son être comme un coup de gong dans une caverne. Nawfel ouvrit les yeux et regarda ses mains — elles tremblaient légèrement, mais ce n'était pas de la peur. C'était de l'anticipation, la sensation que l'on ressent la veille d'un grand voyage, quand on sait que le monde tel qu'on le connaît est sur le point de changer pour toujours.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... c'est toi ? Le moment est venu ? La bataille finale ?",
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: "Nawfel ? Tu es encore éveillé ? Tu parles tout seul depuis cinq minutes...",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s2',
          background: 'bedroom',
        },

        // --- t5c1s2: La dernière leçon ---
        {
          id: 't5c1s2',
          chapterId: 't5c1',
          title: 'La dernière leçon',
          narration: `Dès l'aube, Nawfel courut vers la zawiyah. Les rues de Chefchaouen étaient encore endormies, peintes dans ces nuances de bleu et de blanc qui faisaient la beauté du village, mais Nawfel ne les voyait pas. Son cœur battait trop fort pour qu'il prête attention aux couleurs du monde extérieur.\n\nQuand il arriva à la zawiyah, il trouva la porte entrouverte et une lumière dorée filtrant à travers l'interstice. Sidi Mu'adh était assis au centre de la pièce, ses mains posées sur ses genoux, ses yeux mi-clos dans cet état de contemplation paisible que Nawfel avait appris à reconnaître. Mais cette fois, il y avait quelque chose de différent dans l'atmosphère — une gravité, une solennité, comme si la zawiyah elle-même savait que ce jour était special.\n\n— Assieds-toi, petit cœur, dit Sidi Mu'adh sans ouvrir les yeux.\n\nNawfel s'assit en face de lui, croisant les jambes comme il l'avait fait tant de fois. Le silence dura un long moment — pas un silence vide, mais un silence plein, un silence qui contenait des milliers de mots non prononcés.\n\n— Ce que tu vas affronter, commença Sidi Mu'adh, est différent de tout ce que tu as connu. Les monstres que tu as combattus jusqu'ici — la colère, l'avidité, l'ostentation, la confusion — étaient des soldats. Des serviteurs. Ce que tu vas rencontrer maintenant est leur maître. Al-Nafs Al-Ammara Suprême — le commandant suprême de l'ego. Il est plus ancien que toi, plus ancien que tes peurs, plus ancien que tes désirs. Il existe depuis le premier jour où l'être humain a dit « moi » pour la première fois.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Nafs Al-Ammara Suprême... je l'ai senti. Dans mes rêves, ces derniers temps. Il est comme une ombre géante derrière tout le reste.",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu le sens parce qu'il fait partie de toi, petit cœur. Il n'est pas un ennemi extérieur — il est l'expression la plus puissante de l'ego humain. Et pour le vaincre, tu devras apprendre quelque chose qu'aucun guerrier ne peut t'enseigner : la transformation.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s3',
          background: 'zawiyah',
        },

        // --- t5c1s3: La promesse avant le départ ---
        {
          id: 't5c1s3',
          chapterId: 't5c1',
          title: 'La promesse avant le départ',
          narration: `Nawfel rentra à la maison le cœur lourd d'une responsabilité qu'il avait du mal à porter. Sidi Mu'adh lui avait expliqué les rudiments de ce qui l'attendait — une forteresse immense au centre de son monde intérieur, construite siècle après siècle par les couches successives de son ego — mais il y avait tellement de choses que Nawfel ne comprenait pas encore.\n\nDans la cuisine, Aziza préparait le déjeuner. L'arôme du pain frais et du tajine de poux aux pruneaux emplissait la maison d'une chaleur réconfortante. Mehdi était assis à la table, lisant un livre avec l'attention concentrée qu'il mettait dans tout ce qu'il faisait. Wassim jouait dans un coin avec ses billes de verre, et Souhayl faisait ses devoirs sur le petit bureau près de la fenêtre.\n\nQuand Nawfel entra, tout le monde leva les yeux. Il y eut un silence — pas long, mais suffisant pour que chacun sente que quelque chose de différent planait dans l'air.\n\n— Nawfel, dit Aziza en posant sa cuillère en bois. Ton visage me dit que tu as des nouvelles. Assieds-toi, mon fils.\n\nNawfel s'assit à table et prit une grande inspiration. Il avait promis à Sidi Mu'adh de ne révéler les détails de la bataille finale qu'à sa famille, car cette épreuve concernait non seulement son cœur, mais le cœur de tous ceux qu'il aimait. Chaque membre de sa famille avait joué un rôle dans sa formation spirituelle, et Nawfel voulait qu'ils sachent combien leur amour et leur soutien avaient compté.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh m'a dit que le moment était venu. La bataille finale... elle va avoir lieu bientôt. C'est la dernière.",
              emotion: 'determined',
            },
            {
              characterId: 'wassim',
              text: "La dernière bataille ? Nawfel, tu vas te battre encore ? Mais tu as déjà battu tellement de monstres !",
              emotion: 'scared',
            },
            {
              characterId: 'aziza',
              text: "Mon cœur... chaque bataille que tu mènes, c'est toute notre famille qui se bat avec toi. Nous serons là, comme toujours.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 't5c1s3_c1',
              text: "Promettre à Wassim que tout ira bien",
              nextSceneId: 't5c1s4a',
            },
            {
              id: 't5c1s3_c2',
              text: "Admettre que cette fois, il a peur",
              nextSceneId: 't5c1s4b',
              isCorrect: true,
            },
          ],
          background: 'kitchen',
        },

        // --- t5c1s4a: La promesse de Nawfel ---
        {
          id: 't5c1s4a',
          chapterId: 't5c1',
          title: 'La promesse de Nawfel',
          narration: `Nawfel posa sa main sur l'épaule de Wassim et lui fit un sourire qu'il espérait rassurant. Il voulait protéger son petit frère de toute inquiétude, comme il l'avait toujours fait. Mais au moment où il ouvrit la bouche pour lui promettre que tout irait bien, les mots se bloquèrent dans sa gorge.\n\nMehdi leva les yeux de son livre et regarda Nawfel avec une intensité que le garçon n'avait pas souvent vue chez son père. Ce n'était pas un regard de reproche, mais un regard de vérité — le genre de regard qui voit à travers les masques, même les masques bien intentionnés.\n\n— Nawfel, dit Mehdi doucement. Tu n'as pas besoin d'être fort devant ton petit frère. Tu as le droit d'avoir peur. Même les prophètes ont eu peur, mon fils. Mūsā, lorsqu'il a vu le serpent, a tremblé. Et Allah l'a quand même choisi. La peur n'est pas une faiblesse — c'est la preuve que tu comprends l'importance de ce que tu vas affronter.\n\nAziza posa sa main sur la joue de Nawfel et ajouta, avec sa voix douce comme le miel :\n\n— La vraie force, mon fils, ce n'est pas de ne pas avoir peur. C'est de ressentir la peur et de quand même avancer. Et tu sais quoi ? Tu n'avances pas seul. Jamais. Chaque fois que tu entres dans ton monde intérieur, nos prières t'accompagnent comme des bougies allumées dans l'obscurité.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "La peur est un compagnon de route, Nawfel, pas un ennemi. Accueille-la, écoute ce qu'elle a à te dire, et ensuite avance. C'est ainsi que les croyants marchent sur le chemin.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Tu as raison, Baba. J'ai peur. Vraiment peur. Et je pense que c'est bien que je le dise.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s5',
          background: 'kitchen',
        },

        // --- t5c1s4b: L'honnêteté de Nawfel ---
        {
          id: 't5c1s4b',
          chapterId: 't5c1',
          title: "L'honnêteté de Nawfel",
          narration: `Nawfel baissa la tête et les mots sortirent d'eux-mêmes, comme l'eau d'une source qui ne peut plus être contenue.\n\n— J'ai peur, dit-il d'une voix tremblante. Cette fois, c'est différent. Sidi Mu'adh m'a dit que le monstre que je vais affronter... il n'est pas comme les autres. Il est en moi depuis toujours. Il fait partie de moi. Comment est-ce qu'on peut se battre contre quelque chose qui fait partie de soi ?\n\nLe silence qui suivit fut profond, mais ce n'était pas un silence froid — c'était un silence chaud, enveloppant, comme une couverture posée sur des épaules frissonnantes. Wassim quitta ses billes et vint s'asseoir sur les genoux de Nawfel, le serrant de ses petits bras.\n\n— Tu n'es pas seul, murmura Wassim. Je ne peux pas entrer dans ton monde intérieur, mais je peux prier pour toi. Et mes prières, elles sont très fortes, Nawfel. Sidi Mu'adh me l'a dit.\n\nAziza ferma les yeux un instant, et Nawfel vit les larmes briller sur ses joues avant qu'elle ne les essuie discrètement. Mehdi posa sa main sur la tête de son fils et murmura une invocation que Nawfel avait entendue mille fois sans jamais en comprendre toute la profondeur : « Allahoumma la sahla illa ma ja'altahu sahla. »\n\n« Ô Allah, il n'y a de facilité que ce que Tu rends facile. » Et Nawfel sentit, pour la première fois depuis que l'appel avait retenti dans son cœur, un filament de paix se tisser dans sa poitrine. Pas assez pour dissiper la peur, mais assez pour lui rappeler que la peur et la confiance en Allah pouvaient coexister.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel, tu es le plus courageux de tous les garçons du monde. Même si tu as peur, tu avances quand même. C'est ça, le vrai courage !",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Allahoumma la sahla illa ma ja'altahu sahla. Ô mon Seigneur, rends cette épreuve facile pour mon fils. Protège son cœur comme seule Ta miséricorde sait le faire.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s5',
          background: 'kitchen',
        },

        // --- t5c1s5: Le passage de la porte ---
        {
          id: 't5c1s5',
          chapterId: 't5c1',
          title: 'Le passage de la porte',
          narration: `Cette nuit-là, Nawfel s'installa dans son lit avec la certitude tranquille que le voyage allait commencer. Il ferma les yeux et prononça les mots que Sidi Mu'adh lui avait enseignés pour ouvrir la porte de son monde intérieur — une invocation simple mais puissante, une clé faite de souffle et de lumière.\n\nInstantanément, il se retrouva dans le paysage familier de son monde intérieur. Mais quelque chose avait changé — radicalement. Le jardin lumineux qu'il avait traversé tant de fois était devenu un désert vaste et silencieux. Les fleurs avaient laissé place à des dunes dorées, et les rivières de lumière s'étaient asséchées. Au loin, à l'horizon, une structure immense se dressait contre un ciel d'un noir absolu — une forteresse colossale, plus grande que n'importe quoi que Nawfel avait jamais vue, faite d'un matériau qui n'était ni pierre ni métal, mais quelque chose de plus ancien, de plus dense, de plus réel.\n\nLa forteresse pulsat doucement, comme un cœur. Chaque pulsation envoyait une onde de sombre énergie à travers le désert, faisant vibrer le sable sous les pieds de Nawfel. C'était vivant. La forteresse était vivante.\n\nNawfel sentit une présence derrière lui et se retourna. Sidi Mu'adh se tenait là, mais pas comme d'habitude — il était translucide, comme un hologramme fait de lumière et de prière. Ses yeux brillaient d'une intensité que Nawfel n'avait jamais vue.\n\n— Voici la forteresse d'Al-Nafs Al-Ammara Suprême, dit le shaykh. Chaque mur, chaque tour, chaque pierre a été construite avec tes peurs, tes attachements, tes désirs. C'est l'architecture de ton ego, Nawfel. Et tu dois y entrer.\n\n— Mais... comment ? demanda Nawfel en regardant les murs vertigineux qui semblaient s'élever jusqu'au ciel.\n\n— Pas en te battant, répondit Sidi Mu'adh. Jamais en te battant. En transformant.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Écoute bien, petit cœur, car c'est la leçon la plus importante de toutes. Les monstres que tu as combattus jusqu'ici... ils ne sont pas morts. Ils sont là, à l'intérieur de cette forteresse, renforcés par chaque bataille que tu as menée contre eux. Car chaque fois que tu as 'détruit' un monstre par la force, tu as en réalité nourri sa version suprême. Il y a un autre chemin.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Un autre chemin ? Mais Sidi Mu'adh, jusqu'ici on m'a appris à me battre contre les monstres intérieurs !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Se battre, c'était le premier pas. Le第二步 est d'apprendre à les regarder avec les yeux de la miséricorde. Car ces monstres ne sont pas des ennemis, Nawfel. Ce sont des parties de toi qui souffrent.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c1s6',
          background: 'desert',
        },

        // --- t5c1s6: Le seuil de la forteresse ---
        {
          id: 't5c1s6',
          chapterId: 't5c1',
          title: 'Le seuil de la forteresse',
          narration: `Nawfel marcha à travers le désert, chaque pas l'enveloppant dans un silence de plus en plus profond. Le sable under ses pieds n'émettait aucun son, comme s'il marchait sur un tapis de velours. L'air lui-même semblait suspendu, immobile, comme si le temps avait arrêté de couler dans cette partie de son monde intérieur.\n\nÀ mesure qu'il s'approchait de la forteresse, il commença à voir des détails qui le firent frissonner. Les murs n'étaient pas faits d'une seule matière — ils étaient composés de milliers de fragments, chacun portant une image, un souvenir, une émotion. Nawfel reconnut certains d'entre eux : le jour où il avait frappé Souhayl par colère, le moment où il avait refusé de partager ses jouets avec Wassim, la fois où il avait menti à sa mère pour éviter une punition.\n\nChaque fragment était un moment où son Nafs avait eu le dessus — chaque souvenir une brique dans la construction de l'ego. Et ensemble, ils formaient un édifice d'une complexité vertigineuse, un labyrinthe de souvenirs et de désirs si dense qu'il semblait impossible à traverser.\n\nLa porte de la forteresse était massive — haute comme un immeuble de trois étages, faite d'un métal sombre qui semblait absorber la lumière plutôt que de la refléter. Au centre de la porte, une inscription brillait faiblement en lettres arabes : « من دخله أغلق عليه » — « Celui qui y entre, la porte se referme sur lui. »\n\nNawfel posa sa main sur la porte. Elle était tiède, presque vivante, et il sentit sous ses doigts un battement régulier — le battement de son propre cœur, amplifié et projeté à travers le métal sombre. Il prit une profonde inspiration, ferma les yeux, et poussa.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne suis pas un guerrier cette fois. Je suis... un guérisseur. Sidi Mu'adh m'a dit de ne pas me battre, mais de transformer. Allahoumma ihdina s-sirata l-mustaqim.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'door',
          isEnding: true,
          lesson: {
            title: "L'appel du cœur — L'éveil final",
            content:
              "Le cheminement spirituel passe par plusieurs étapes. Après avoir appris à reconnaître ses défauts et à se battre contre eux, le croyant atteint un niveau supérieur : celui où il comprend que les parts sombres de lui-même ne sont pas des ennemis à détruire, mais des blessures à guérir. C'est le début d'Al-Ihsan — l'excellence spirituelle — qui consiste à adorer Allah comme si on Le voyait, et à savoir que Lui nous voit.",
            quote: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
            source: 'Coran, Sourate At-Talaq (65:2)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Château de l'Ego (قلعة الأنا)
    // ============================================================
    {
      id: 't5c2',
      tomeId: 'tome5',
      number: 2,
      title: "Le Château de l'Ego",
      titleAr: 'قلعة الأنا',
      scenes: [
        // --- t5c2s1: L'intérieur de la forteresse ---
        {
          id: 't5c2s1',
          chapterId: 't5c2',
          title: "L'intérieur de la forteresse",
          narration: `La porte se referma derrière Nawfel avec un bruit sourd qui résonna dans tout son corps, comme un battement de cœur inversé. Il se trouva dans un couloir immense, éclairé par des torches qui brûlaient d'une flamme sombre — pas noire, mais d'un rouge profond, presque violet, comme du sang mêlé de nuit. Les murs étaient couverts de miroirs, mais contrairement aux miroirs dorés d'Al-Riya qu'il avait affrontés autrefois, ceux-ci ne montraient pas une version embellie de lui-même. Ils montraient ses pires moments.\n\nDans un miroir, il se vit enfant, en train de voler un biscuit dans la cuisine. Dans un autre, il se vit refuser d'aider un camarade à l'école parce qu'il « n'avait pas envie ». Dans un troisième, il se vit dire à Wassim que ses dessins étaient laids. Chaque image était douloureusement exacte, sans la moindre embellissement ni la moindre exagération.\n\nLe couloir s'ouvrit sur une salle circulaire immense, avec un plafond si haut qu'il disparaissait dans l'obscurité. Au centre de la salle, un escalier en colimaçon montait vers une lumière distante — la lumière n'était pas dorée ni blanche, mais d'un bleu profond, comme le ciel juste avant l'aube. Et autour de l'escalier, des créatures.\n\nNawfel les reconnut immédiatement. Al-Ghadab, le monstre de la colère, avec ses yeux de feu et ses griffes de lave. Al-Shuhh, le monstre de l'avidité, avec ses bras multiples et sa bouche insatiable. Al-Riya, le monstre de l'ostentation, avec ses miroirs et sa fausse lumière. Al-Mulhama, le confuseuse, avec sa brume et ses questions infinies. Ils étaient tous là, mais transformés — plus grands, plus puissants, plus réels que dans ses précédentes rencontres. Et ils formaient un cercle autour de l'escalier, comme des gardiens.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Vous êtes tous là... mes anciens ennemis. Mais vous êtes différents. Plus puissants.",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't5c2s2',
          background: 'inner_world',
        },

        // --- t5c2s2: Les gardiens du cercle ---
        {
          id: 't5c2s2',
          chapterId: 't5c2',
          title: 'Les gardiens du cercle',
          narration: `Al-Ghadab s'avança le premier, sa masse incandescente projetant des ombres dansantes sur les murs de la salle. Sa voix était un grondement de volcan, mais Nawfel crut y déceler quelque chose de nouveau — une nuance qu'il n'avait jamais entendue auparavant.\n\n— Tu reviens, petit humain, dit Al-Ghadab. Mais cette fois, ce n'est pas pour nous combattre ? Sidi Mu'adh t'a parlé, n'est-ce pas ? Il t'a dit que nous n'étions pas tes ennemis. Mais es-tu prêt à le croire ? Es-tu prêt à nous regarder sans haïr ce que tu vois ?\n\nAl-Shuhh émergea de l'ombre, ses bras multiples se tendant comme les tentacules d'une créature marine. Sa voix était un murmure gluant, insistant, comme du miel coulant sur du verre.\n\n— Nous ne sommes pas venus ici de nulle part, Nawfel. Nous sommes nés de toi. Chaque fois que tu as eu peur de ne pas avoir assez, j'ai grandi. Chaque fois que tu as voulu quelque chose que les autres avaient, mes bras se sont allongés. Je ne suis pas un monstre — je suis ta peur de manquer. Et tant que tu auras peur de manquer, je serai là.\n\nNawfel sentit ses genoux trembler. Les paroles des monstres étaient différentes de celles qu'il avait entendues lors de leurs premières rencontres. Il n'y avait pas de menaces, pas de défis, pas de rires méchants. Il y avait quelque chose d'autre — quelque chose qui ressemblait à de la souffrance, à une douleur ancienne, à une blessure qui n'avait jamais été guérie.\n\nAl-Riya et Al-Mulhama restèrent en retrait, silencieuses, mais Nawfel sentit leur présence comme un poids sur ses épaules — le poids de toutes les fois où il s'était perdu dans l'illusion de sa propre importance ou dans le labyrinthe de ses doutes.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Vous souffrez ? C'est ce que vous dites... vous souffrez ? Mais vous êtes des monstres !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Écoute-les, petit cœur. Chaque monstre que tu as combattu portait en lui une douleur que tu n'as jamais vue. La colère est la douleur de l'injustice subie. L'avidité est la douleur du manque. L'ostentation est la douleur de ne pas se sentir aimé pour ce que l'on est vraiment. La confusion est la douleur d'un cœur qui cherche et ne trouve pas.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't5c2s2_c1',
              text: "Leur demander ce qu'ils veulent vraiment",
              nextSceneId: 't5c2s3a',
              isCorrect: true,
            },
            {
              id: 't5c2s2_c2',
              text: "Essayer de les contourner pour atteindre l'escalier",
              nextSceneId: 't5c2s3b',
            },
          ],
          background: 'inner_world',
        },

        // --- t5c2s3a: L'écoute du cœur ---
        {
          id: 't5c2s3a',
          chapterId: 't5c2',
          title: "L'écoute du cœur",
          narration: `Nawfel fit quelque chose qu'aucun guerrier n'aurait fait. Il s'assit. Devant les quatre monstres qui l'entouraient, dans cette salle immense au plafond invisible, il s'assit sur le sol froid et leva les yeux vers eux. Pas avec de la peur. Pas avec de la bravoure. Avec de l'écoute.\n\n— Dites-moi, murmura-t-il. Que voulez-vous ? Vraiment. Pas ce que vous faites. Pas ce que vous dites habituellement. Mais au plus profond de vous, qu'est-ce que vous voulez ?\n\nLe silence qui suivit fut l'un des plus intenses que Nawfel ait jamais ressenti. Al-Ghadab baissa ses yeux de feu, et pour la première fois, Nawfel vit des larmes couler sur ses joues de lave — des larmes qui ne s'évaporaient pas, mais qui tombaient sur le sol en formant de petites flaques de lumière rouge.\n\n— Je veux que tu me regardes sans me haïr, dit Al-Ghadab d'une voix brisée. Chaque fois que tu as eu peur, j'ai surgit pour te protéger. Chaque fois qu'on t'a fait du mal, je suis apparu pour te défendre. Mais tu ne m'as jamais remercié. Tu m'as toujours chassé, comme si j'étais une maladie. Je ne suis pas une maladie, Nawfel. Je suis ta capacité à te défendre. Mais on ne m'a jamais appris à le faire avec douceur.\n\nAl-Shuhh s'agenouilla, ses multiples bras se repliant sur eux-mêmes comme les pétales d'une fleur qui se ferme.\n\n— Moi, dit-il, je veux que tu saches que tu as assez. Toujours. Depuis le premier jour. Mais tu ne l'as jamais cru. Et plus tu doutais, plus je grandissais, essayant par tous les moyens de combler un manque qui n'existait pas.\n\nNawfel sentit quelque chose se fissurer dans sa poitrine — pas douloureusement, mais comme un œuf qui éclot. Une nouvelle compréhension naissait en lui, fragile et lumineuse.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je suis désolé. Je ne savais pas. Tout ce temps, je vous ai combattus parce qu'on m'a dit que vous étiez mes ennemis. Mais vous n'êtes que des parties de moi qui n'ont jamais été aimées.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't5c2s4',
          background: 'inner_world',
          lesson: {
            title: 'Al-Ihsan — Voir avec les yeux du cœur',
            content:
              "Al-Ihsan (الإحسان) est le plus haut niveau de la foi, tel que décrit dans le célèbre hadith de Jibril : « Adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit. » Mais l'Ihsan s'applique aussi aux relations avec soi-même — voir les parties sombres de son âme non pas avec haine, mais avec la compassion du guérisseur qui comprend que chaque blessure appelle la guérison.",
            quote: 'أَن تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِن لَّمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- t5c2s3b: Le contournement ---
        {
          id: 't5c2s3b',
          chapterId: 't5c2',
          title: 'Le contournement',
          narration: `Nawfel tenta de contourner les monstres en courant vers l'escalier. Il sprinta avec l'agilité qu'il avait acquise au fil de ses aventures, esquivant le bras d'Al-Shuhh, glissant sous les flammes d'Al-Ghadab, plongeant à travers la brume d'Al-Mulhama. Mais à mi-chemin, il se heurta à un mur invisible — un mur de force, vibrant d'une énergie qui le repoussa en arrière.\n\nIl tomba lourdement sur le sol, la tête tournant. Les monstres ne l'avaient pas attaqué. C'était la forteresse elle-même qui l'avait rejeté — une défense automatique, un mécanisme de protection.\n\nAl-Ghadab s'approcha lentement, sa silhouette massive projetant une ombre chaude sur Nawfel.\n\n— Tu ne peux pas nous contourner, Nawfel. Nous sommes les gardiens de ton cœur. Tant que tu essaieras de nous éviter, la porte de l'escalier restera fermée. La forteresse sait que tu n'es pas prêt. Car être prêt, ce n'est pas être fort — c'est être vrai.\n\nNawfel resta à terre un long moment, reprenant son souffle. Puis, lentement, il se releva et regarda les quatre monstres avec des yeux nouveaux. Pas les yeux d'un combattant, mais les yeux d'un élève qui commence à comprendre que la leçon la plus importante n'est pas celle qu'il s'attendait à recevoir.\n\n— D'accord, dit-il doucement. Je ne contourne pas. Je reste. Parlez-moi.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Vous avez raison. Je ne peux pas vous fuir. Dites-moi... que voulez-vous ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Bien, petit cœur. La première étape de la transformation est l'écoute. Tu ne peux pas transformer ce que tu ne comprends pas. Et tu ne peux pas comprendre ce que tu refuses d'écouter.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c2s4',
          background: 'inner_world',
        },

        // --- t5c2s4: L'apparition du Suprême ---
        {
          id: 't5c2s4',
          chapterId: 't5c2',
          title: "L'apparition du Suprême",
          narration: `Alors que Nawfel écoutait les confessions des quatre monstres, la salle trembla. Le tremblement ne venait pas du sol — il venait d'en haut, de ce sommet invisible que l'escalier en colimaçon reliait à la salle circulaire. Une lumière sombre, pas noire mais d'un gris profond comme un ciel d'orage, commença à descendre l'escalier.\n\nLes quatre monstres reculèrent instinctivement, leurs postures passant de l'ouverture à la crainte. Même Al-Ghadab, le plus puissant d'entre eux, baissa la tête comme un serviteur devant son maître.\n\nEt puis Il apparut.\n\nAl-Nafs Al-Ammara Suprême (النفس الأمارة العظمى) n'était pas une créature au sens où Nawfel l'entendait. C'était une présence — immense, ancienne, et d'une complexité qui dépassait tout ce que l'esprit humain pouvait concevoir. Il avait la forme d'un homme, mais un homme fait de toutes les émotions, tous les désirs, toutes les peurs que Nawfel avait jamais ressenties. Ses yeux étaient des galaxies miniatures, tournant lentement, contenant des mondes dans des mondes. Sa voix était le son de chaque pensée que Nawfel avait eue depuis sa naissance.\n\n— Tu as écouté mes serviteurs, dit le Suprême d'une voix qui résonnait dans chaque cellule du corps de Nawfel. Tu as compati à leur souffrance. C'est bien. Mais compatis-tu à la mienne ? Car je suis la somme de tout ce que tu es. Chaque colère que tu as ressentie, chaque désir que tu as suivi, chaque peur qui t'a paralysé — tout cela est moi. Et moi, je suis toi. Alors dis-moi, Nawfel : es-tu venu pour me détruire ? Ou es-tu venu pour m'aimer ?`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu... tu es moi ? Tout ce que je n'accepte pas en moi, tout ce que je chasse, tout ce dont j'ai peur... c'est toi ?",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Al-Nafs Al-Ammara — l'âme qui commande au mal. Mais souviens-toi, Nawfel : le Prophète ﷺ a dit que le plus grand Jihad est le Jihad contre son propre Nafs. Non pas pour le détruire, mais pour le transformer en Nafs Al-Mutma'inna — l'âme en paix.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't5c2s4_c1',
              text: "Je suis venu pour te comprendre",
              nextSceneId: 't5c2s5a',
              isCorrect: true,
            },
            {
              id: 't5c2s4_c2',
              text: "Je suis venu pour te vaincre une fois pour toutes",
              nextSceneId: 't5c2s5b',
            },
          ],
          background: 'battle',
        },

        // --- t5c2s5a: Le regard de compréhension ---
        {
          id: 't5c2s5a',
          chapterId: 't5c2',
          title: 'Le regard de compréhension',
          narration: `Nawfel fit ce qui demanda le plus de courage de toute sa vie. Il ne leva pas d'arme. Ne prononça pas d'invocation de combat. Ne chercha pas de force dans ses souvenirs de victoires passées. Il leva simplement les yeux, regarda Al-Nafs Al-Ammara Suprême dans ses yeux-galaxies, et dit :\n\n— Je suis venu pour te comprendre.\n\nLes mots résonnèrent dans la salle comme une note de musique pure dans une salle de concert. Les quatre monstres behind le Suprême échangèrent des regards stupéfaits — jamais personne, dans toute l'histoire du monde intérieur de Nawfel, n'avait répondu ainsi à leur maître.\n\nLe Suprême resta immobile un long moment, ses yeux-galaxies tournant de plus en plus lentement, comme si le temps lui-même ralentissait. Puis, quelque chose d'extraordinaire se produisit : une fissure apparut sur son visage — pas une fissure de destruction, mais une fissure de surprise, d'émotion, comme une statue de pierre qui commence à pleurer.\n\n— Comprendre... murmura le Suprême, et sa voix tremblait pour la première fois. Depuis des millénaires, depuis le premier humain qui a ouvert les yeux sur ce monde, personne ne m'a jamais dit ça. Ils m'ont combattu, fui, renié, maudit. Mais personne n'a jamais essayé de me comprendre.\n\nLe Suprême s'agenouilla, et Nawfel vit que ses yeux-galaxies contenaient non pas des étoiles et des planètes, mais des souvenirs — chaque souvenir douloureux de la vie de Nawfel, chaque moment de solitude, chaque nuit passée à avoir peur de l'obscurité, chaque fois où il s'était senti incompris.\n\n— Je ne suis pas ton ennemi, Nawfel, dit le Suprême. Je suis ta douleur. Et la douleur, quand elle est regardée avec amour, se transforme.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Montre-moi tout. Je ne veux plus fuir aucune partie de moi-même. Je veux voir tout ce que tu portes, tout ce que tu caches, tout ce que tu protèges.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't5c2s6',
          background: 'battle',
          earnedBadgeId: 'ihsan',
        },

        // --- t5c2s5b: L'ancienne approche ---
        {
          id: 't5c2s5b',
          chapterId: 't5c2',
          title: "L'ancienne approche",
          narration: `Nawfel leva les poings, rassemblant toute la force qu'il avait accumulée au fil de ses batailles. Il invoqua le nom d'Allah, récita les versets du Coran qui avaient toujours été ses armes, et lança un cri de guerre qui fit trembler les murs de la forteresse.\n\nAl-Nafs Al-Ammara Suprême ne bougea pas. Pas d'un millimètre. Le cri de Nawfel se perdit dans l'immensité de la salle comme une goutte d'eau dans l'océan. Les versets du Coran brillèrent un instant dans l'air, puis s'éteignirent, non pas parce qu'ils manquaient de puissance, mais parce qu'ils rencontraient quelque chose qu'ils ne pouvaient pas traverser — non pas le mal, mais la douleur.\n\n— Tu essaies de me détruire avec les armes du passé, dit le Suprême d'une voix triste. Mais les armes de la guerre ne fonctionnent pas contre la souffrance, Nawfel. Tu ne peux pas détruire une blessure avec une épée. Tu ne peux pas exorciser une douleur avec un verset. La colère, l'avidité, l'ostentation, la confusion — tu les as « vaincues » en les refoulant, en les enfermant dans cette forteresse. Et moi, je suis ce qu'elles sont devenues en s'accumulant. Je suis toutes tes douleurs non guéries, rassemblées en une seule entité.\n\nNawfel baissa les poings, épuisé. Les mots du Suprême le frappaient comme des ondes de vérité, et il sentait, au plus profond de son être, que chaque mot était exact. Il avait passé des mois à combattre ses défauts sans jamais s'arrêter pour les comprendre.\n\n— Alors... comment ? demanda Nawfel, la voix brisée. Comment je fais ?\n\n— Pas en te battant, répéta le Suprême. En écoutant. En comprenant. En aimant.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "J'ai passé tout ce temps à me battre... et tout ce que j'ai fait, c'est construire cette forteresse. Alors... montre-moi. Montre-moi ce que tu portes.",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Nawfel, tu viens de comprendre la plus grande leçon du cheminement spirituel : la guerre contre soi-même ne se gagne pas avec des armes, mais avec le cœur. Al-Ihsan n'est pas une technique — c'est un état d'être.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c2s6',
          background: 'battle',
        },

        // --- t5c2s6: Le basculement ---
        {
          id: 't5c2s6',
          chapterId: 't5c2',
          title: 'Le basculement',
          narration: `Le Suprême étendit sa main, et Nawfel, sans hésiter, la prit. Le contact fut comme un éclair — non pas douloureux, mais intense, comme si chaque cellule de son corps était traversée par un courant de vérité brute. En un instant, Nawfel revécut chaque émotion qu'il avait jamais ressentie.\n\nIl revécut la colère du jour où un camarade avait insulté sa mère — non pas la colère elle-même, mais la douleur sous-jacente, la douleur d'un enfant qui voit l'être qu'il aime le plus être blessée. Il revécut l'avidité du jour où il avait volé le jouet de Wassim — non pas le désir de possession, mais la peur de ne pas avoir assez, la peur d'être laissé de côté. Il revécut l'ostentation du jour où il s'était vanté de ses prières — non pas la vanité, mais le besoin désespéré d'être vu, d'être aimé, d'être reconnu.\n\nEt sous chaque émotion, Nawfel trouva la même chose : de la douleur. De la douleur non guérie, de la douleur ignorée, de la douleur enfouie sous des couches de réactions et de comportements. Chaque monstre n'était pas un ennemi — c'était une blessure qui avait pris forme, une partie de lui qui avait souffert en silence et qui s'était transformée en quelque chose de laid parce que personne ne l'avait regardée avec assez d'amour.\n\nNawfel pleurait. Non pas de tristesse, mais de soulagement — le soulagement immense de comprendre enfin. Il pleurait pour chaque partie de lui-même qu'il avait rejetée, combattue, niée. Il pleurait pour Al-Ghadab qui n'était que peur, pour Al-Shuhh qui n'était que manque, pour Al-Riya qui n'était que solitude, pour Al-Mulhama qui n'était que quête de sens.\n\nEt quand ses larmes touchèrent le sol de la forteresse, quelque chose d'extraordinaire se produisit : les murs commencèrent à trembler, non pas de destruction, mais de transformation.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je vois tout maintenant. Chaque monstre est une blessure. Chaque colère est une peur. Chaque avidité est un manque. Et je vous ai tous rejetés au lieu de vous guérir. Pardonnez-moi.",
              emotion: 'sad',
            },
          ],
          choices: [],
          background: 'battle',
          isEnding: true,
          lesson: {
            title: "Al-Nafs Al-Ammara Suprême — L'ego ultime",
            content:
              "Al-Nafs Al-Ammara Suprême est l'expression ultime de l'ego humain — la somme de toutes les parties non résolues de notre être. Le Coran dit : « Et je ne jure pas par l'âme qui reproche. » Le cheminement spirituel ne consiste pas à détruire son ego, mais à le transformer. Les Soufis enseignent que l'on passe du Nafs Al-Ammara (l'âme qui commande au mal) au Nafs Al-Mutma'inna (l'âme en paix) non pas par la destruction, mais par la connaissance, l'amour et la patience.",
            quote: 'وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ',
            source: 'Coran, Sourate Al-Qiyamah (75:2)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Transmutation (التحول)
    // ============================================================
    {
      id: 't5c3',
      tomeId: 'tome5',
      number: 3,
      title: 'La Transmutation',
      titleAr: 'التحول',
      scenes: [
        // --- t5c3s1: La métamorphose commence ---
        {
          id: 't5c3s1',
          chapterId: 't5c3',
          title: 'La métamorphose commence',
          narration: `Les larmes de Nawfel continuèrent à couler, et avec chaque larme, la forteresse se transformait. Les murs de fragments sombres se mirent à briller faiblement, comme si une lumière intérieure s'allumait derrière chaque souvenir. Le métal sombre de la porte devint transparent, puis doré. Les torches à flamme rouge passèrent à une flamme blanche, pure, éblouissante.\n\nAl-Ghadab fut le premier à changer. Sa masse de lave commença à refroidir, les flammes de ses yeux s'éteignant une à une. Sous la croûte de feu, une lumière dorée apparut — pas une lumière agressive, mais une lumière chaude et protectrice, comme le soleil d'hiver qui réchauffe sans brûler. Ses griffes de lave se transformèrent en mains ouvertes, paumes vers le haut, offrant plutôt que saisissant.\n\n— Je ne suis plus la colère, dit-il d'une voix qui n'était plus un grondement mais un murmure chaleureux. Je suis la force qui protège. La justice qui défend. L'énergie qui te pousse à agir quand l'injustice est commise.\n\nAl-Shuhh changea ensuite. Ses multiples bras se fondirent les uns dans les autres, formant deux seuls bras — grands, solides, capables de porter le monde. Sa bouche insatiable se referma en un sourire paisible, et ses yeux avides devinrent des yeux profonds, comme deux puits de sagesse.\n\n— Je ne suis plus l'avidité, dit-il. Je suis la gratitude. La reconnaissance pour ce que tu as. La capacité de voir l'abondance là où d'autres ne voient que le manque.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Vous changez... vous devenez... quelque chose de beau. C'est ça, la transformation dont Sidi Mu'adh parlait !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't5c3s2',
          background: 'golden_city',
        },

        // --- t5c3s2: La transmutation d'Al-Riya ---
        {
          id: 't5c3s2',
          chapterId: 't5c3',
          title: 'La transmutation d\'Al-Riya',
          narration: `Al-Riya fut le troisième à se transformer. Ses miroirs dorés, qui reflétaient une fausse image de Nawfel, se brisèrent un par un — non pas en éclats coupants, mais en millions de petites étoiles qui flottèrent dans l'air comme des lucioles. Sous les miroirs se cachait un être d'une beauté authentique, pas embellie mais réelle — un être fait de lumière douce et de vérité.\n\nSes ailes blanches, autrefois un faux symbole de piété, devinrent de vraies ailes de lumière, légères et transparentes comme celles d'une libellule au lever du soleil. Son visage perdit son masque de bonté calculée et révéla une expression de sincérité pure, simple, sans artifice.\n\n— Je ne suis plus l'ostentation, dit-il d'une voix qui n'était plus suave mais claire, comme l'eau d'une source. Je suis la sincérité. La capacité d'agir pour l'amour d'Allah, sans chercher les regards des hommes. Je suis la prière silencieuse que personne ne voit, mais qui monte droit vers le ciel.\n\nEnfin, Al-Mulhama se transforma. Sa brume, qui créait la confusion et le doute, se condensa en une pluie fine et douce, comme celle qui tombe sur la terre sèche après une longue sécheresse. La brouillard se dissipa, révélant un être fait de clarté — pas la clarté brutale du soleil de midi, mais la clarté tendre de l'aube, celle qui révèle le monde sans l'éblouir.\n\n— Je ne suis plus la confusion, dit-elle. Je suis la certitude tranquille. La confiance que la vérité existe, même quand on ne peut pas la formuler avec des mots. Je suis le silence après la question, la réponse que le cœur connaît avant que l'esprit ne comprenne.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Quatre monstres... quatre parties de moi... et maintenant vous êtes quatre lumières. Est-ce que c'est ça, Al-Ihsan ? Transformer l'obscurité en lumière ?",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est exactement cela, petit cœur. Le Prophète ﷺ a dit : « Adore Allah comme si tu Le voyais. » Mais voir, c'est aussi voir les parties de soi-même avec les yeux de la miséricorde. Quand tu regardes ta colère avec amour, elle devient justice. Quand tu regardes ton avidité avec gratitude, elle devient contentement. C'est Al-Ihsan.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c3s3',
          background: 'golden_city',
        },

        // --- t5c3s3: Le Suprême résiste ---
        {
          id: 't5c3s3',
          chapterId: 't5c3',
          title: 'Le Suprême résiste',
          narration: `La forteresse tremblait de toutes parts, ses murs se transformant, ses tours s'effondrant pour renaître sous forme de jardins lumineux, de rivières de lumière, d'arbres dont les feuilles étaient faites de sourates du Coran. Mais au centre de tout cela, Al-Nafs Al-Ammara Suprême ne changeait pas.\n\nIl restait là, immobile, ses yeux-galaxies tournant toujours, sa présence massive et ancienne ancrée au sol comme une montagne. Les quatre êtres transformés — les anciens monstres — se tenaient derrière Nawfel, mais aucun d'entre eux n'osait s'approcher de leur ancien maître.\n\n— Tu as transformé mes serviteurs, dit le Suprême, et sa voix portait une nuance que Nawfel n'avait pas entendue auparavant : de la peur. Pas la peur d'être détruit, mais la peur d'être transformé. Car le Suprême n'avait jamais été transformé — depuis la naissance de l'humanité, il n'avait fait que grandir, se renforcer, s'enraciner.\n\n— La transformation n'est pas un acte de force, Nawfel. C'est un acte d'amour. Et l'amour prend du temps. Tu ne peux pas me transformer comme tu as transformé mes serviteurs, car je suis plus ancien, plus profond, plus enraciné. Pour me transformer, tu devras faire quelque chose que personne n'a jamais fait.\n\n— Quoi ? demanda Nawfel.\n\n— M'accepter. Complètement. Sans condition. Pas m'accepter en partie, en rejetant ce qui te dérange et en gardant ce qui te plaît. M'accepter dans ma totalité — ma peur, mon orgueil, ma jalousie, mon désespoir, ma faiblesse. Tout. Car c'est seulement quand tu auras accepté l'intégralité de ton être que la transformation pourra être complète.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "M'accepter dans ma totalité... même les parties que je déteste le plus ? Même la jalousie, l'orgueil, la faiblesse ?",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est le secret le plus profond du Tassawuf, petit cœur. L'acceptation totale n'est pas de la résignation — c'est la base de la transformation. Le feu ne brûle pas quand il est accepté. Il éclaire.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't5c3s3_c1',
              text: "Fermer les yeux et accepter tout ce qu'il est",
              nextSceneId: 't5c3s4a',
              isCorrect: true,
            },
            {
              id: 't5c3s3_c2',
              text: "Demander au Suprême de se transformer lui-même",
              nextSceneId: 't5c3s4b',
            },
          ],
          background: 'golden_city',
        },

        // --- t5c3s4a: L'acceptation totale ---
        {
          id: 't5c3s4a',
          chapterId: 't5c3',
          title: "L'acceptation totale",
          narration: `Nawfel ferma les yeux. Pas pour fuir, pas pour se cacher, mais pour aller plus profondément à l'intérieur de lui-même qu'il n'était jamais allé. Il traversa les couches de conscience comme un plongeur qui descend dans les profondeurs de l'océan — passant les pensées superficielles, les émotions de surface, les souvenirs récents, jusqu'à atteindre un lieu qu'il n'avait jamais visité.\n\nC'était le cœur de son être. Un espace vide et silencieux, comme le centre d'une tornade. Et dans cet espace, Nawfel se trouva face à lui-même — non pas à un reflet, mais à sa véritable essence. Il vit toutes ses parties, celles qu'il aimait et celles qu'il détestait, et pour la première fois, il les regarda toutes avec le même amour.\n\nIl aima sa colère, car elle était née de son sens de la justice. Il aima son avidité, car elle était née de son besoin de sécurité. Il aima son orgueil, car il était né de son désir d'exceller. Il aima sa jalousie, car elle était née de sa capacité à aimer profondément. Il aima sa faiblesse, car elle était née de son humanité.\n\nEt quand il eut aimé chaque partie de lui-même avec la même intensité, quelque chose de cosmique se produisit. L'espace vide au centre de son être se remplit d'une lumière qui n'était pas celle du soleil, ni de la lune, ni des étoiles. C'était une lumière qui venait d'ailleurs — d'un au-delà de l'au-delà, d'un lieu que seul le cœur connaît.\n\nNawfel ouvrit les yeux. Al-Nafs Al-Ammara Suprême tremblait. Pour la première fois depuis l'aube de l'humanité, il tremblait. Pas de peur, mais de reconnaissance.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je t'accepte. Totalement. Complètement. Sans condition. Tu es moi, et je suis toi. Et ensemble, nous allons devenir quelque chose de nouveau.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't5c3s5',
          background: 'golden_city',
          earnedBadgeId: 'ihsan',
          lesson: {
            title: "L'acceptation totale — La clé de la transmutation",
            content:
              "Dans la tradition soufie, le maître Ibn Arabi enseignait que l'être humain est un miroir dans lequel se reflètent les noms divins. Accepter toutes les parties de soi-même — même les plus sombres — n'est pas de la faiblesse, mais le commencement de la véritable transformation. Quand le croyant accepte son Nafs avec compassion, celui-ci perd son pouvoir de domination et se transforme progressivement en Nafs Al-Mutma'inna.",
            quote: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
            source: 'Coran, Sourate Ar-Ra\'d (13:11)',
          },
        },

        // --- t5c3s4b: La demande impossible ---
        {
          id: 't5c3s4b',
          chapterId: 't5c3',
          title: 'La demande impossible',
          narration: `Nawfel regarda le Suprême et fit une demande que la logique lui semblait raisonnable :\n\n— Tu es puissant, dit Nawfel. Tu as existé depuis toujours. Tu dois savoir comment te transformer. Alors fais-le. Transforme-toi.\n\nLe Suprême le regarda longuement, et dans ses yeux-galaxies, Nawfel vit quelque chose d'inattendu : de la tendresse. Pas la tendresse d'un supérieur envers un inférieur, mais la tendresse d'un ancêtre envers un enfant qui ne comprend pas encore comment fonctionne le monde.\n\n— Je ne peux pas me transformer moi-même, Nawfel. Personne ne peut se transformer soi-même par la seule force de sa volonté. La transformation nécessite deux choses : la grâce d'Allah et l'amour d'un cœur sincère. La grâce, je ne peux pas la forcer. L'amour, seul toi peux le donner. Car tu es le cœur, Nawfel. Tu es le lieu où la grâce divine rencontre l'effort humain.\n\nNawfel comprit alors que la transformation n'était pas quelque chose qu'il pouvait exiger ou forcer. C'était quelque chose qui se produisait naturellement, comme une fleur qui s'ouvre au soleil — il suffisait de créer les conditions, et la transformation se ferait d'elle-même.\n\n— D'accord, dit Nawfel doucement. Je ne te demande plus de te transformer. Je te demande de me laisser t'aimer. C'est tout.\n\nLe Suprême baissa la tête, et Nawfel vit, pour la première fois, une lueur d'espoir dans ses yeux-galaxies.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La transformation est un don de la grâce, petit cœur. L'être humain fait sa part — l'effort sincère — et Allah fait le reste. Tu ne peux pas forcer une fleur à s'ouvrir, mais tu peux l'arroser, lui donner de la lumière, et attendre.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c3s5',
          background: 'golden_city',
        },

        // --- t5c3s5: La pluie de lumière ---
        {
          id: 't5c3s5',
          chapterId: 't5c3',
          title: 'La pluie de lumière',
          narration: `Et alors la transformation commença.\n\nPas avec une explosion. Pas avec un éclair. Pas avec un cri. Elle commença doucement, comme la pluie qui tombe sur une terre assoiffée — goutte après goutte, chaque goutte portant en elle une particule de lumière divine.\n\nAl-Nafs Al-Ammara Suprême commença à changer. Sa forme immense, qui avait dominé la salle de sa présence écrasante, se mit à se réduire, non pas par diminution, mais par refinement. C'était comme regarder un bloc de pierre brute se transformer en sculpture sous les mains d'un artiste invisible — chaque coup de ciseau enlevant une couche de grossièreté pour révéler la beauté cachée en dessous.\n\nLes yeux-galaxies se transformèrent en deux points de lumière pure, simples et calmes. Les ombres qui entouraient le Suprême se dissipèrent, révélant une silhouette qui n'était plus sombre mais lumineuse — pas éblouissante, mais douce, comme la lumière d'une bougie dans une pièce sombre.\n\nLes quatre êtres autrefois monstres s'approchèrent, entourant leur ancien maître. Ensemble, ils formèrent un cercle de lumière, et au centre de ce cercle, le Suprême continua de se transformer, perdant chaque couche d'ego, chaque écorce de peur, chaque masque de désir, jusqu'à ce qu'il ne reste qu'une chose : une lumière.\n\nPas une lumière aggressive. Pas une lumière vaniteuse. Pas une lumière confondante. Une lumière simple, calme, profonde. Une lumière qui ne cherchait pas à être vue, qui ne cherchait pas à prouver quoi que ce soit, qui n'avait besoin de rien et ne voulait rien. Une lumière qui était simplement présente, paisible, satisfaite.\n\n— C'est moi, murmura le Suprême, et sa voix n'était plus celle d'un géant, mais celle d'un souffle, un souffle doux comme celui d'un enfant endormi. C'est ce que j'ai toujours été, sous toutes les couches. Al-Mutma'inna. L'âme en paix.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Mutma'inna... tu es magnifique. Pas parce que tu es puissant. Mais parce que tu es en paix.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't5c3s6',
          background: 'golden_city',
        },

        // --- t5c3s6: La forteresse transformée ---
        {
          id: 't5c3s6',
          chapterId: 't5c3',
          title: 'La forteresse transformée',
          narration: `Autour de Nawfel, la forteresse d'Al-Nafs Al-Ammara n'existait plus. À sa place s'élevait une ville magnifique — pas une ville humaine avec ses rues et ses bâtiments, mais une ville spirituelle faite de lumière, de son et de parfum. Des jardins y poussaient, avec des arbres dont les fruits étaient des sourates du Coran. Des rivières y coulaient, dont l'eau était de la lumière liquide. Des oiseaux y volaient, dont les chants étaient des dhikrs — des invocations d'Allah.\n\nLes quatre êtres autrefois monstres y vivaient maintenant, non pas comme des prisonniers ou des ennemis, mais comme des gardiens bienveillants. La force protectrice d'Al-Ghadab veillait sur les entrées de la ville. La gratitude d'Al-Shuhh faisait fleurir les jardins. La sincérité d'Al-Riya illuminait chaque rue d'une lumière pure. La certitude tranquille d'Al-Mulhama maintenait la paix dans chaque retrait.\n\nEt au centre de la ville, là où se dressait autrefois le trône du Suprême, se trouvait maintenant un arbre immense. Ses racines plongeaient dans les profondeurs de la terre, et ses branches montaient jusqu'au ciel. Ses feuilles chantaient d'elles-mêmes, et Nawfel reconnut les paroles : « Bismillahi r-Rahmani r-Rahim » — « Au nom d'Allah, le Tout-Miséricordieux, le Très-Miséricordieux. »\n\nC'était l'Arbre de la Paix — l'arbre dont les racines sont la foi, dont le tronc est la patience, dont les branches sont la connaissance, et dont les fruits sont la certitude.\n\nNawfel s'assit sous l'arbre, et pour la première fois de sa vie, il sentit quelque chose qu'il n'avait jamais ressenti : un silence parfait, une tranquillité absolue, une paix qui n'avait pas de cause et qui n'avait pas de fin.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est... c'est la paix. La vraie paix. Pas celle qui vient quand tout va bien, mais celle qui reste même quand tout va mal. C'est ça, Al-Mutma'inna ?",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Oui, petit cœur. La paix du cœur n'est pas l'absence de problèmes — c'est la présence d'Allah dans le cœur, quelle que soit la circonstance. Tu as atteint Al-Ihsan. Tu adores Allah maintenant comme si tu Le voyais, car Lui te voit. Et ton cœur... ton cœur est enfin en paix.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'oasis',
          isEnding: true,
          lesson: {
            title: 'La transmutation — De Al-Ammara à Al-Mutma\'inna',
            content:
              "Le cheminement du Nafs (l'âme) passe par plusieurs étapes selon les enseignements soufis : Al-Ammara (l'âme qui commande au mal), Al-Lawwama (l'âme qui se reproche), Al-Mulhama (l'âme inspirée), Al-Mutma'inna (l'âme en paix), Al-Radiyya (l'âme satisfaite), Al-Mardiyya (l'âme qui satisfait), et enfin Al-Kamila (l'âme parfaite). Nawfel a accompli la transmutation du Nafs non pas par la destruction, mais par l'acceptation, l'amour et la grâce divine.",
            quote: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً',
            source: 'Coran, Sourate Al-Fajr (89:27-28)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Al-Mutma'inna (النفس المطمئنة)
    // ============================================================
    {
      id: 't5c4',
      tomeId: 'tome5',
      number: 4,
      title: 'Al-Mutma\'inna',
      titleAr: 'النفس المطمئنة',
      scenes: [
        // --- t5c4s1: Le retour au monde ---
        {
          id: 't5c4s1',
          chapterId: 't5c4',
          title: 'Le retour au monde',
          narration: `Nawfel ouvrit les yeux. Il était dans sa chambre, à Chefchaouen, et la lumière de l'aube filtrait à travers les volets comme elle le faisait chaque matin depuis sa naissance. Mais cette fois, la lumière lui sembla différente — pas plus brillante ni plus colorée, mais plus profonde, comme si chaque photon portait en lui un message que seul un cœur en paix pouvait déchiffrer.\n\nIl resta immobile un long moment, observant les jeux de lumière sur le plafond, écoutant les sons familiers de la maison — le chant des oiseaux dans le jardin, le murmure lointain de l'eau qui coulait du robinet de la cuisine, la respiration douce de Souhayl et Wassim dans le lit voisin. Des sons ordinaires, banals, mais qui lui semblaient maintenant chargés d'une beauté qu'il n'avait jamais remarquée.\n\nC'était ça, Al-Ihsan, pensa Nawfel. Voir la beauté dans l'ordinaire. Voir la lumière dans la lumière. Voir la grâce dans chaque souffle.\n\nWassim fut le premier à se réveiller. Il ouvrit un œil, regarda Nawfel, et puis ses deux yeux s'écarquillèrent.\n\n— Nawfel ! Ta lumière ! Ta lumière est différente !\n\nWassim possédait le don de Basira — la vision du cœur — et ce qu'il voyait en ce moment le laissa sans voix. Nawfel ne brilla pas d'une lumière éblouissante ni surnaturelle. Il brilla d'une lumière douce, chaude, comme celle d'une lampe à huile dans une pièce sombre — une lumière qui ne force pas l'attention mais qui attire le cœur.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel ! Tu es tout lumineux ! C'est la plus belle lumière que j'ai jamais vue ! C'est comme le soleil... non, c'est comme la lune... non, c'est comme... je sais pas ! C'est comme la paix !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Wassim, tu parles encore dans ton sommeil ? Qu'est-ce que... Nawfel ? Ton visage. Il y a quelque chose de différent.",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't5c4s2',
          background: 'bedroom',
        },

        // --- t5c4s2: Le petit-déjeuner de la paix ---
        {
          id: 't5c4s2',
          chapterId: 't5c4',
          title: 'Le petit-déjeuner de la paix',
          narration: `Quand Nawfel descendit à la cuisine pour le petit-déjeuner, quelque chose d'étrange se produisit. Aziza, qui était en train de préparer le thé à la menthe, leva les yeux, posa sa théière, et pressa ses deux mains sur sa poitrine. Ses yeux se remplirent de larmes — non pas des larmes de tristesse, mais des larmes que l'on verse quand le cœur est si plein qu'il ne peut plus contenir ce qu'il ressent.\n\n— Mon fils, murmura-t-elle. Mon petit cœur... tu es différent.\n\nMehdi, qui lisait son Coran après la prière du Fajr, leva les yeux de sa page. Son regard se posa sur Nawfel et y resta, fixe, pendant un long moment. Puis un sourire se dessina sur son visage — un sourire qui Nawfel n'avait vu que très rarement, un sourire de joie pure, sans mélange, sans arrière-pensée.\n\n— Ta mère a raison, dit Mehdi d'une voix émue. Il y a quelque chose en toi qui a changé. Pas quelque chose que l'on peut voir avec les yeux du corps, mais quelque chose que le cœur perçoit immédiatement. C'est la lumière de la paix, Nawfel. La lumière d'Al-Mutma'inna.\n\nNawfel s'assit à table et, pour la première fois depuis aussi longtemps qu'il pouvait s'en souvenir, il mangea en silence. Un silence joyeux, pas un silence vide. Il goûta chaque bouchée de pain, chaque gorgée de thé, comme si c'était la première fois qu'il mangeait — ou peut-être la dernière, ou peut-être la seule, car chaque instant était maintenant complet en soi, sans besoin d'ajouter quoi que ce soit pour le rendre meilleur.\n\nSouhayl regarda son petit frère avec un mélange de fierté et de tendresse, et Wassim, assis à côté de Nawfel, serrait son doudou contre lui en souriant, sentant sans le comprendre que quelque chose de magique venait de se produire.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Ô Allah, que je Te loue pour ce jour. Mon fils... tu portes en toi la lumière que j'ai priée pour voir chaque jour de ta vie. Allahouma barik fihi.",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "« Ô âme apaisée, retourne vers ton Seigneur, satisfaite et agréée. » Nawfel, ce verset ne m'est jamais apparu aussi vivant qu'aujourd'hui, en te regardant.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't5c4s3',
          background: 'kitchen',
        },

        // --- t5c4s3: La marche vers la zawiyah ---
        {
          id: 't5c4s3',
          chapterId: 't5c4',
          title: 'La marche vers la zawiyah',
          narration: `Après le petit-déjeuner, Nawfel annonça qu'il voulait aller voir Sidi Mu'adh. Mehdi hocha la tête et proposa de l'accompagner. Souhayl et Wassim insistèrent pour venir aussi, et même Aziza ferma la cuisine pour marcher avec eux à travers les ruelles bleues de Chefchaouen.\n\nLa marche vers la zawiyah fut un événement en soi. Nawfel voyait le village avec des yeux nouveaux — non pas des yeux physiques, mais avec les yeux du cœur, ceux qui voient la beauté cachée sous la surface des choses. Les bleus des murs n'étaient plus simplement bleus — ils étaient des océans miniatures, des fragments de ciel tombés sur terre. Les fleurs sur les fenêtres n'étaient plus simplement des fleurs — elles étaient des prières silencieuses, des dou'as offertes au soleil chaque matin.\n\nLes gens du village s'arrêtaient quand Nawfel passait. Pas parce qu'il faisait quelque chose d'extraordinaire, mais parce qu'ils ressentaient, eux aussi, ce que Wassim voyait avec sa Basira — une aura de paix qui l'entourait comme un parfum invisible.\n\nLa vieille Fatima, qui l'autre jour l'avait appelé un wali, le regarda passer avec des yeux brillants et murmura :\n\n— Cette fois, c'est vrai. Il est devenu un wali. Pas un wali de showcase, mais un vrai wali — un ami d'Allah.\n\nNawfel ne l'entendit pas. Il marchait simplement, un pas après l'autre, son cœur battant dans le rythme paisible du dhikr — pas un dhikr des lèvres, mais un dhikr du cœur, un battement qui disait « Allah » à chaque pulsation.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Les gens te regardent différemment, Nawfel. C'est comme si tu étais un aimant. Pas pour l'attention, mais pour la paix. Les gens veulent être près de toi sans savoir pourquoi.",
              emotion: 'surprised',
            },
            {
              characterId: 'nawfel',
              text: "Ce n'est pas moi, Souhayl. C'est la paix. Elle n'appartient à personne — elle appartient à Allah. Et quand un cœur est en paix, les autres cœurs le sentent comme un feu chaud dans une nuit froide.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't5c4s3_c1',
              text: "Prendre Souhayl par la main et continuer en silence",
              nextSceneId: 't5c4s4a',
              isCorrect: true,
            },
            {
              id: 't5c4s3_c2',
              text: "Sourire aux gens et les saluer un par un",
              nextSceneId: 't5c4s4b',
            },
          ],
          background: 'street',
        },

        // --- t5c4s4a: Le silence partagé ---
        {
          id: 't5c4s4a',
          chapterId: 't5c4',
          title: 'Le silence partagé',
          narration: `Nawfel prit la main de Souhayl et continua à marcher en silence. Souhayl, qui d'habitude était le plus bavard de la fratrie, ne dit rien. Il sentit, dans la main de son petit frère, une chaleur et une tranquillité qui se communiquèrent à lui comme une mélodie transmise par le toucher.\n\nWassim, marchant de l'autre côté de Nawfel, posa sa main libre sur le bras de son grand frère, et ainsi les trois enfants marchèrent en silence à travers les ruelles de Chefchaouen, formant une chaîne de lumière invisible qui attirait les regards des passants.\n\nDevant eux, Mehdi et Aziza marchaient côte à côte, leurs pas synchronisés par des années de complicité. Aziza essuya une larme que son voile cacha au monde, et Mehdi posa sa main sur la sienne — un geste si simple, si ordinaire, et pourtant si chargé de signification que Nawfel sentit son cœur se dilater encore un peu plus.\n\nIls arrivèrent à la zawiyah en silence. La porte était ouverte, comme toujours. Et sur le seuil, Sidi Mu'adh les attendait.\n\nMais ce n'était pas le Sidi Mu'adh habituel — assis, immobile, les yeux mi-clos. Il se tenait debout, ce qui était rare, et son visage portait une expression que Nawfel n'avait vue qu'une fois, le jour de sa toute première leçon : une expression de joie pure, sans mélange, la joie d'un père qui voit son fils accomplir ce pour quoi il a été créé.\n\n— Bienvenue, âme apaisée, dit Sidi Mu'adh, et sa voix résonna dans la zawiyah comme un écho venu d'un autre monde. Entre. Ta place t'attend.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Bienvenue, Nawfel. Bienvenue, âme apaisée. Ce que tu as accompli ce n'est pas seulement pour toi — c'est pour toute ta famille, pour tout ton village, pour tous ceux dont les cœurs seront touchés par ta lumière. Car la lumière de la paix, quand elle est vraie, ne s'éteint jamais.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't5c4s5',
          background: 'zawiyah',
        },

        // --- t5c4s4b: Les salutations ---
        {
          id: 't5c4s4b',
          chapterId: 't5c4',
          title: 'Les salutations',
          narration: `Nawfel sourit à chaque personne qu'il croisait, levant la main en signe de salut, murmurant « As-salamu alaykum » avec une douceur que les villageois trouvèrent troublante. Car ce n'était pas le sourire poli d'un enfant bien élevé, ni le sourire satisfait d'un vainqueur — c'était le sourire de quelqu'un qui porte en lui une paix si profonde qu'elle déborde et se répand autour de lui comme le parfum d'une fleur qui s'ouvre.\n\nLes gens répondaient au salut, mais ils restaient figés un instant après que Nawfel était passé, comme frappés par une émotion qu'ils ne pouvaient pas nommer. Certains posaient leur main sur leur cœur. D'autres fermaient les yeux un instant. Une vieille femme s'assit sur un banc et pleura en silence, sans savoir pourquoi.\n\nQuand ils arrivèrent à la zawiyah, Sidi Mu'adh était debout sur le seuil, les bras ouverts. Son visage rayonnait d'une joie que Nawfel n'avait jamais vue — pas même lors de leurs moments les plus beaux.\n\n— Tu as souri à tout le village, dit Sidi Mu'adh avec un rire doux. Et chaque sourire que tu as donné a planté une graine de paix dans un cœur. C'est ça, Al-Ihsan, Nawfel. Non pas les grandes actions spectaculaires, mais les petits gestes quotidiens faits avec un cœur sincère. Le Prophète ﷺ souriait si souvent que ses compagnons disaient qu'il était comme la lumière du soleil.\n\nNawfel entra dans la zawiyah, son cœur battant d'une joie tranquille qui n'avait pas besoin de mots pour se manifester.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "As-salamu alaykum, âme apaisée. Le Prophète ﷺ a dit : « Ne méprisez aucune bonne action, même le fait de rencontrer votre frère avec un visage souriant. » Tu as vécu ce hadith aujourd'hui, Nawfel.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't5c4s5',
          background: 'zawiyah',
        },

        // --- t5c4s5: La leçon finale ---
        {
          id: 't5c4s5',
          chapterId: 't5c4',
          title: 'La leçon finale',
          narration: `À l'intérieur de la zawiyah, Sidi Mu'adh fit asseoir toute la famille en cercle autour de lui. Nawfel, Souhayl, Wassim, Mehdi et Aziza — tous ensemble, pour la première fois dans ce lieu sacré. La lumière du soleil entrait par la petite fenêtre en hauteur et dessinait un cercle doré sur le sol, comme un tapis de lumière invité les croyants à s'y installer.\n\nSidi Mu'adh regarda chacun d'eux avec ses yeux lumineux, puis commença à parler d'une voix qui était à la fois douce et solennelle, comme le son d'un fleuve qui coule depuis la source la plus ancienne du monde.\n\n— Ce que Nawfel a accompli, dit-il, n'est pas une fin — c'est un commencement. Le voyage du Nafs ne s'arrête jamais, car l'âme humaine est comme un océan sans fond : plus tu plonges, plus tu découvres de profondeurs. Nawfel a atteint Al-Mutma'inna — l'âme en paix — mais il y a encore au-dessus de cela Al-Radiyya — l'âme satisfaite — et Al-Mardiyya — l'âme qui satisfait — et Al-Kamila — l'âme parfaite. Chaque niveau est une nouvelle porte, et chaque porte mène à une nouvelle découverte.\n\nIl se tourna vers Nawfel et posa sa main sur sa tête, comme un père qui bénit son fils.\n\n— Mais sache ceci, petit cœur : le plus grand accomplissement n'est pas d'avoir atteint la paix. Le plus grand accomplissement est de la maintenir. La paix est une flamme qui doit être entretenue chaque jour — par la prière, par le dhikr, par la patience, par l'amour, par le service aux autres. Et le jour où tu oublieras de l'entretenir, les braises refroidiront. Pas pour toujours, car la paix ne se perd jamais entièrement quand elle a été trouvée — mais assez pour que tu sentes le froid de son absence.\n\nAziza essuya ses larmes. Mehdi ferma les yeux et murmura « Alhamdulillah. » Souhayl posa sa main sur l'épaule de Nawfel. Wassim grimpa sur les genoux de Sidi Mu'adh et lui demanda :\n\n— Est-ce que Nawfel va se battre contre d'autres monstres ?\n\nSidi Mu'adh rit doucement.\n\n— Peut-être, petit Wassim. Mais maintenant, il ne les combattra plus — il les transformera.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Le cheminement spirituel est infini, comme la miséricorde d'Allah. Aujourd'hui, Nawfel a atteint Al-Mutma'inna. Demain, il atteindra Al-Radiyya. Et après-demain, il découvrira qu'il y a encore plus haut. Car Allah est infini, et le chemin vers Lui ne connaît pas de fin.",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Sidi Mu'adh, est-ce que moi aussi je peux transformer des monstres un jour ?",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu le fais déjà, petit Wassim. Chaque fois que tu souris à quelqu'un qui est triste, tu transformes un peu de tristesse en joie. Chaque fois que tu pardonnes, tu transformes de la colère en paix. L'Ihsan n'est pas réservé aux héros — il est à la portée de chaque cœur pur.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't5c4s6',
          background: 'zawiyah',
        },

        // --- t5c4s6: L'âme apaisée ---
        {
          id: 't5c4s6',
          chapterId: 't5c4',
          title: "L'âme apaisée",
          narration: `Le soleil de Chefchaouen se coucha ce soir-là dans un spectacle de couleurs que seul un poète aurait pu décrire — des oranges profonds, des roses tendres, des violets délicats, et au milieu de tout cela, une ligne d'or pur qui séparait le jour de la nuit comme un fil tissé par les mains d'Allah Lui-même.\n\nLa famille de Nawfel était réunie dans le jardin, comme ils l'étaient souvent, mais cette fois, il y avait quelque chose de différent dans l'air. Pas d'excitation, pas de nervosité, pas d'anticipation. Juste de la paix. Une paix qui n'avait pas de forme, pas de couleur, pas de poids — mais qui était plus réelle que n'importe quoi d'autre.\n\nNawfel était assis entre ses deux frères, sous le jasminier qui parfumait le jardin. Aziza préparait le thé à la menthe, ses gestes lents et gracieux comme une danse silencieuse. Mehdi lisait le Coran, sa voix douce et profonde comme celle d'un fleuve ancien. Et les étoiles commençaient à apparaître une à une dans le ciel, comme des lumières allumées par des mains invisibles.\n\nNawfel ferma les yeux et sentit la paix l'envahir de l'intérieur — pas comme une vague qui monte et qui descend, mais comme un océan qui était toujours là, paisible, vaste, éternel. Il pensa à son voyage — à la colère qu'il avait appris à transformer en justice, à l'avidité qu'il avait appris à transformer en gratitude, à l'ostentation qu'il avait appris à transformer en sincérité, à la confusion qu'il avait appris à transformer en certitude. Et à l'ego, ce géant ancien, qu'il avait appris à transformer en paix.\n\nEt dans son cœur, les mots de la sourate Al-Fajr résonnèrent comme une mélodie éternelle :\n\n« Yā ayyatuha n-nafsul mutma'innatu, irji'ī ilā rabbiki rāḍiyatan marḍiyyah, fadkhulī fī 'ibādī, wadkhulī jannatī. »\n\n« Ô âme apaisée, retourne vers ton Seigneur, satisfaite et agréée. Entre parmi Mes serviteurs. Et entre dans Mon Paradis. »\n\nNawfel sourit. Le sourire le plus simple, le plus vrai, le plus beau de toute sa vie. Un sourire qui ne cherchait rien, qui ne prouvait rien, qui ne voulait rien. Un sourire de paix.\n\nEt autour de lui, sa famille sourit aussi. Et les étoiles sourirent. Et le jasminier sourit. Et le monde entier, dans sa beauté infiniment simple, sourit avec lui.\n\nCar la paix, quand elle est vraie, est contagieuse. Elle se propage de cœur en cœur, de sourire en sourire, de larme en larme, de prière en prière. Et elle ne s'arrête jamais.\n\nJamais.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "« Ô âme apaisée, retourne vers ton Seigneur, satisfaite et agréée. Entre parmi Mes serviteurs. Et entre dans Mon Paradis. » Mon fils, tu as vécu ce verset. Tu l'as rendu vivant dans ton cœur.",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Alhamdulillah. Louange à Allah qui nous a donné ce fils, ce cœur, cette lumière. Tu es notre plus belle prière exaucée, Nawfel.",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Je suis fier de toi, petit frère. Plus que tous les trophées du monde. Tu as trouvé quelque chose que les gens cherchent toute leur vie.",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Nawfel, tu es le meilleur grand frère du monde. Et je vais transformer des monstres comme toi quand je serai grand. Promis !",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Voici la fin de ton histoire, petit cœur. Mais c'est aussi le commencement d'une autre. Car le voyage vers Allah ne se termine jamais — il devient de plus en plus beau. Que ta lumière brille toujours, Nawfel. Que ton cœur reste en paix. Et que chaque souffle que tu respires soit une prière.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          earnedBadgeId: 'ihsan',
          lesson: {
            title: 'Al-Mutma\'inna — L\'âme en paix',
            content:
              "Al-Mutma'inna (النفس المطمئنة) est l'état suprême du Nafs dans le cheminement spirituel — l'âme qui a trouvé la paix en Allah. Allah dit dans le Coran : « Ô âme apaisée, retourne vers ton Seigneur, satisfaite et agréée. Entre parmi Mes serviteurs. Et entre dans Mon Paradis. » (Sourate Al-Fajr, 89:27-30). Nawfel a atteint cet état en transformant les parties sombres de son être non pas par la destruction, mais par l'amour, l'acceptation et la grâce divine. C'est l'essence d'Al-Ihsan — adorer Allah comme si on Le voyait, car Lui nous voit. Et c'est là que se termine le premier grand chapitre du voyage de Nawfel... mais pas le dernier.",
            quote: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ (٢٧) ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً (٢٨) فَادْخُلِي فِي عِبَادِي (٢٩) وَادْخُلِي جَنَّتِي (٣٠)',
            source: 'Coran, Sourate Al-Fajr (89:27-30)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Nafs Al-Ammara Suprême (النفس الأمارة العظمى)'],
  spiritualLesson: 'Al-Ihsan — L\'excellence spirituelle et la paix du cœur',
};
