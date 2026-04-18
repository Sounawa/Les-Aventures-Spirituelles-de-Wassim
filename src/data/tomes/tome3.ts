import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome3: Tome = {
  id: 'tome3',
  number: 3,
  title: 'Le Désert de l\'Épreuve',
  titleAr: 'صحراء الابتلاء',
  subtitle: 'Nawfel affronte l\'avarice et la colère au cœur du désert spirituel',
  description:
    "Des semaines ont passé depuis le premier voyage intérieur de Nawfel, et le jardin merveilleux de son cœur semble s'être asséché. À Chefchaouen, entre les ruelles bleues et les leçons de Sidi Mu'adh, le jeune garçon découvre que le cheminement spirituel n'est pas un long fleuve tranquille. Deux nouveaux monstres l'attendent dans un désert brûlant : Al-Bukhl, le ver de l'avarice qui amasse toute la lumière du cœur, et Al-Ghadab Al-Akbar, la Colère Invincible qui consume tout sur son passage. Pour survivre, Nawfel devra apprendre la leçon la plus difficile de toutes : l'humilité.",
  theme: 'Al-Tawadu\' & Al-Karam — Humilité et Générosité',
  coverImage: '/images/tome3-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Sécheresse du Cœur (جفاف القلب)
    // ============================================================
    {
      id: 't3c1',
      tomeId: 'tome3',
      number: 1,
      title: 'La Sécheresse du Cœur',
      titleAr: 'جفاف القلب',
      scenes: [
        // --- t3c1s1: Un matin différent ---
        {
          id: 't3c1s1',
          chapterId: 't3c1',
          title: 'Un matin différent',
          narration: `Les semaines avaient filé comme des grains de sable entre les doigts, et quelque chose avait changé dans la maison Benali, quelque chose de subtil, d'insaisissable, comme une couleur qui s'estompe lentement d'un tableau qu'on regarde tous les jours sans vraiment le voir. Nawfel s'assit au bord de son lit, les yeux mi-clos, et sentit aussitôt cette sensation étrange — un vide, une sécheresse au creux de sa poitrine, comme si le petit jardin intérieur qu'il avait autrefois visité avait été frappé d'une longue et silencieuse sécheresse.\n\nDehors, Chefchaouen brillait sous un soleil d'été impitoyable. Les murs blancs et bleus étincelaient, les escaliers pavés renvoyaient une lumière crue qui obligait les passants à plisser les yeux. Un âne chargé de paniers de figues fraîches descendait lentement la rue principale, guidé par un vieil homme au visage tanné par le soleil et le vent. Le marché du matin était en pleine effervescence — les voix des marchands criaient les prix des pastèques, des dattes fraîches et du fromage de chèvre, tandis que les femmes en haïk blanc circulaient entre les étals comme des fantômes gracieux.\n\nMais Nawfel ne trouvait aucune joie dans cette lumière éclatante. Depuis plusieurs jours, ses prières lui semblaient plates, comme de l'eau sans saveur. Les mots du Coran glissaient sur sa langue sans toucher son cœur. Même le dhikr, ces invocations que Sidi Mu'adh lui avait enseignées et qu'il récitait chaque soir, ne produisait plus en lui cette chaleur familière, cette douce quiétude qui l'apaisait autrefois.\n\nIl y avait un mot que Sidi Mu'adh avait prononcé un jour, un mot que Nawfel n'avait pas vraiment compris à l'époque mais qui lui revenait maintenant en mémoire comme un écho lointain : Qabd — la contraction, le resserrement. Le shaykh avait dit que le cœur du croyant connaît parfois des périodes de sécheresse, comme la terre connaît la sécheresse, et que ces moments étaient en réalité des épreuves de l'amour divin, des tests de patience envoyés par Allah pour voir si le serviteur resterait fidèle même quand la douceur disparaît.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel, tu viens ? L'école ne va pas attendre. Et maman a dit qu'il fallait aider Wassim à boutonner sa chemise.",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Oui... j'arrive. Juste une seconde.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s2',
          background: 'bedroom',
        },

        // --- t3c1s2: L'école du village ---
        {
          id: 't3c1s2',
          chapterId: 't3c1',
          title: "L'école du village",
          narration: `L'école du village de Chefchaouen n'était pas grande — deux salles de classe, une cour pavée où poussaient un olivier centenaire et quelques lauriers-roses, et un petit minaret en briques rouges qui servait de repère visuel à toute la vallée. Mais ce matin, Nawfel la trouvait encore plus étroite, plus étouffante que d'habitude. Les murs blancs semblaient se rapprocher, et le bourdonnement des voix de ses camarades lui donnait mal à la tête.\n\nLe maître, un homme sec et exigeant du nom de Moulay Hicham, dictait une leçon de grammaire arabe que Nawfel aurait normalement trouvée intéressante. Les mots de la langue sacrée, les racines trilitères, les déclinaisons complexes — tout cela le passionnait d'ordinaire. Mais aujourd'hui, chaque mot glissait sur son esprit comme de l'eau sur la pierre, sans laisser de trace. Son cahier restait ouvert sur une page blanche, et son stylo, posé en travers du bureau, n'avait pas écrit une seule ligne.\n\nÀ la récréation, ses amis l'invitèrent à jouer au football dans la cour, mais Nawfel déclina d'un geste las. Il s'assit à l'ombre de l'olivier, le dos contre le tronc rugueux, et fixa le ciel d'un bleu implacable. C'est là que Wassim vint le rejoindre, son petit visage soucieux collé contre le sien, ses grands yeux lumineux fixant son grand frère avec cette prescience étrange qui le caractérisait.\n\nWassim possédait ce don que Sidi Mu'adh appelait la Basira — la vision du cœur. Il ne pouvait pas pénétrer dans le monde intérieur comme Nawfel, mais il percevait les couleurs de l'âme, les nuances invisibles de l'esprit. Et en ce moment, ce qu'il voyait chez Nawfel le troublait profondément.\n\n— Ton cœur est tout gris, dit Wassim d'une voix petite et sérieuse. Avant, il était tout doré et lumineux. Maintenant, il ressemble au sable quand il n'y a plus d'eau. Nawfel... tu es malade ?`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Ton cœur est tout gris, Nawfel. Avant il était tout doré. Maintenant il ressemble au sable quand il n'y a plus d'eau. Tu es malade ?",
              emotion: 'sad',
            },
            {
              characterId: 'nawfel',
              text: "Non, Wassim, je ne suis pas malade. C'est juste que... c'est compliqué. Les choses ne sont plus comme avant.",
              emotion: 'sad',
            },
            {
              characterId: 'wassim',
              text: "Tu devrais parler à Sidi Mu'adh. Lui, il sait soigner les cœurs.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s3',
          background: 'school',
        },

        // --- t3c1s3: Retour à la zawiyah ---
        {
          id: 't3c1s3',
          chapterId: 't3c1',
          title: 'Retour à la zawiyah',
          narration: `Ce soir-là, après la prière du Maghrib, Mehdi emmena Nawfel à la zawiyah de Sidi Mu'adh. La route habituelle leur sembla plus longue que d'habitude, les ruelles plus sombres, les ombres plus épaisses. Nawfel marchait en silence, les yeux baissés, les sandales claquant doucement sur les pavés humides de la rosée du soir. Son père ne disait rien non plus, mais sa présence — solide, chaude, rassurante — était comme un rempart contre le vide qui menaçait d'engloutir le cœur du garçon.\n\nLa zawiyah était exactement comme Nawfel se la rappelait : le bois de cèdre, l'encens, les tapis berbères, les panneaux de calligraphie, et cette lumière oblique qui descendait de la petite fenêtre en hauteur comme un cadeau du ciel. Mais Nawfel ne ressentit pas cette fois le même émerveillement que lors de sa première visite. Son cœur restait fermé, hermétique, comme une porte rouillée que plus rien ne pouvait ouvrir.\n\nSidi Mu'adh les attendait, assis sur son tapis de prière dans la même posture immobile que toujours. Quand Nawfel s'assit devant lui, le shaykh ne lui demanda pas comment il allait. Il ne lui dit pas non plus que tout allait s'arranger. Il le regarda longuement, avec ces yeux qui voyaient l'invisible, et puis il sourit — un sourire si doux, si immense, que Nawfel sentit quelque chose frémir au fond de lui, comme une étincelle dans les cendres d'un feu éteint.\n\n— Ah, dit Sidi Mu'adh d'une voix murmureuse, te revoilà, petit cœur. Tu es venu me voir parce que ton cœur est devenu comme un désert, n'est-ce pas ? Ne t'inquiète pas. Ce que tu ressens est non seulement normal, mais nécessaire. Dans la voie spirituelle — la Tariqa — il y a des moments d'expansion et des moments de contraction. Le Prophète ﷺ a dit que le cœur du croyant est entre deux des doigts du Tout Miséricordieux, et Il le retourne comme Il le souhaite. Ta sécheresse n'est pas un abandon d'Allah. C'est une épreuve — une Ibtila'. Et l'épreuve, petit cœur, est la preuve que Allah t'aime.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... mes prières sont vides. Le Coran ne me touche plus. Même le dhikr... je le dis, mais c'est comme si les mots ne vont nulle part. J'ai peur d'avoir fait quelque chose de mal.",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu n'as rien fait de mal, petit cœur. Ce que tu vis s'appelle Qabd — la contraction du cœur. C'est une station du voyage spirituel, une vallée que traverse tout chercheur de vérité. Les Soufis disent : « Si tu goûtes à la douceur de la prière un jour, et que le lendemain tu ne la goûtes plus, ne désespère pas. Continue, car Allah te teste. »",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Une épreuve ? Mais pourquoi Allah m'éprouverait-Il ? Je ne suis qu'un enfant.",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Allah éprouve ceux qu'Il aime, Nawfel. Un orfèvre ne purifie l'or que en le passant dans le feu. Et plus l'or est précieux, plus le feu doit être fort. Tu es précieux aux yeux d'Allah, et cette sécheresse va te rendre encore plus fort — si tu la traverses avec patience.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s4',
          background: 'zawiyah',
        },

        // --- t3c1s4: La leçon du désert ---
        {
          id: 't3c1s4',
          chapterId: 't3c1',
          title: 'La leçon du désert',
          narration: `Sidi Mu'adh se leva et marcha lentement vers la fenêtre en hauteur de la zawiyah. De là, on apercevait les toits de Chefchaouen et, au-delà, les montagnes du Rif qui se découpaient contre un ciel de nuit parsemé d'étoiles. Le shaykh resta un long moment silencieux, contemplant l'horizon comme s'il y lisait quelque chose que personne d'autre ne pouvait voir.\n\nPuis il se retourna vers Nawfel, et son visage portait une expression que le garçon n'avait jamais vue chez lui — quelque chose entre la gravité et la tendresse, comme un père qui doit envoyer son enfant au loin.\n\n— Cette nuit, petit cœur, dit le shaykh, tu vas retourner dans ton monde intérieur. Mais ce que tu y verras sera différent du jardin que tu as visité la première fois. Le paysage intérieur change avec l'état de ton cœur, et en ce moment, ton cœur est en sécheresse. Tu verras un désert — un vaste désert de sable doré sous un ciel de feu. N'aie pas peur. Le désert n'est pas vide. Il est plein de leçons que l'oasis ne peut pas t'enseigner.\n\nSidi Mu'adh prit la main de Nawfel et ferma les yeux. Sa voix devint un murmure, presque un chant, une incantation ancienne dont les mots arabes résonnaient comme des gouttes d'eau dans une caverne souterraine.\n\n— Rappelle-toi, petit cœur : dans le désert, le voyageur ne survit pas en courant. Il survit en marchant, un pas après l'autre, avec patience et confiance en Allah. L'eau que tu cherches ne se trouve pas au bout du désert. Elle se trouve en toi — dans ta capacité à être patient, à être généreux même quand tu n'as rien, à rester humble même quand ton ego te crie de t'enorgueillir. Ce sont ces qualités que le désert va tester. Sois prêt.\n\nNawfel sentit ses paupières devenir lourdes. Les murs de la zawiyah commencèrent à vaciller, à se dissoudre, comme une peinture à l'eau sous la pluie. La dernière chose qu'il vit avant de sombrer dans le sommeil fut le visage de Sidi Mu'adh, ses yeux brillant d'une lueur d'or tendu, et ses lèvres qui murmuraient une invocation que Nawfel connaissait par cœur : « Allahoumma ya muqallibal-qulub, thabbit qalbi 'ala dinik — Ô Allah, Toi qui retournes les cœurs, affermis mon cœur sur Ta religion. »`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Cette nuit, tu vas retourner dans ton monde intérieur. Mais tu verras un désert, pas un jardin. Le paysage change avec ton cœur, Nawfel. N'aie pas peur — le désert est plein de leçons que l'oasis ne peut pas t'enseigner.",
              emotion: 'wise',
            },
            {
              characterId: 'mehdi',
              text: "Sidi Mu'adh... est-ce sûr ? Mon fils est encore si jeune.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Mehdi, Allah ne met sur le cœur d'aucun serviteur un fardeau qu'il ne peut porter. Nawfel est prêt. Il l'a toujours été. C'est nous qui devons lui faire confiance.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s5',
          background: 'zawiyah',
        },

        // --- t3c1s5: Le désert intérieur ---
        {
          id: 't3c1s5',
          chapterId: 't3c1',
          title: 'Le désert intérieur',
          narration: `Nawfel ouvrit les yeux et se retrouva debout au milieu d'un désert d'une immensité à couper le souffle. Le sable s'étendait dans toutes les directions, une mer dorée et infinie, ondulée de dunes hautes comme des vagues figées dans le temps. Le ciel au-dessus de lui n'était pas bleu — il était d'un jaune orangé brûlant, comme si le soleil et le ciel n'en faisaient qu'un, une voûte incandescente qui faisait trembler l'air et déformer l'horizon en mirages fantomatiques.\n\nCe n'était plus le jardin merveilleux de son premier voyage. Les arbres dorés avaient disparu, les fleurs chantantes s'étaient fanées, la porte avec « قلب » gravé dessus s'était effacée comme un rêve sous le soleil. À la place, il y avait ce désert — aride, silencieux, terrifiant dans sa beauté implacable. Nawfel sentit la chaleur lui brûler la peau, dessécher sa gorge. Chaque respiration était un effort, chaque battement de cœur un tambour qui résonnait dans le vide.\n\nMais au milieu de cette immensité stérile, Nawfel remarqua quelque chose. À ses pieds, dans le sable, il y avait des traces — des empreintes de pas anciennes, à moitié enfouies par le vent. Quelqu'un d'autre était passé ici avant lui. Les traces formaient un chemin sinueux qui serpentait entre les dunes, et Nawfel, poussé par un instinct qu'il ne pouvait pas nommer, décida de les suivre.\n\nÀ mesure qu'il avançait, le vent se leva, soufflant des nuages de sable fin qui lui piquaient le visage et lui remplissaient les yeux. Nawfel plissa les paupières, leva sa main pour protéger son visage, et continua à marcher. La sécheresse du désert reflétait la sécheresse de son cœur, et Nawfel comprit avec une clarté soudaine que ce paysage n'était pas un lieu extérieur — c'était lui-même, son propre intérieur vu de l'extérieur, avec toute sa solitude, sa peur et sa soif.\n\n— Il faut marcher, murmura-t-il pour se donner du courage. Un pas après l'autre. Comme Sidi Mu'adh l'a dit. Un pas après l'autre.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Un pas après l'autre... Bismillah...",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't3c1s6',
          background: 'desert',
        },

        // --- t3c1s6: La sablifère de la soif ---
        {
          id: 't3c1s6',
          chapterId: 't3c1',
          title: 'La sablifère de la soif',
          narration: `Le chemin d'empreintes mena Nawfel au sommet d'une dune immense, et de là, il vit quelque chose qui le glaça jusqu'aux os malgré la chaleur accablante. Au pied de la dune, dans une cuvette naturelle entre les vagues de sable, se trouvait ce qui ressemblait à une oasis — des palmiers, de l'eau claire, de l'ombre fraîche. Mais quelque chose n'allait pas. L'eau était entourée d'une sorte de barrière invisible, et les palmiers, bien que verts et luxuriants, avaient un éclat étrange, presque métallique, comme s'ils n'étaient pas tout à fait réels.\n\nNawfel descendit la dune en courant, la soif lui brûlant la gorge, le désir d'eau pure le consumant. Mais à mesure qu'il approchait, il vit la vérité. L'oasis était gardée. Non pas par une sentinelle humaine, mais par une créature — ou plutôt, par une absence, un vide vivant, une entité faite de manque et de rétention. Elle était assise au milieu de l'eau comme un crapaud énorme fait de sable noir, et autour d'elle, des volutes de lumière liquide s'enroulaient et disparaissaient dans son corps informe, avalant chaque goutte, chaque rayon, chaque souffle de vie.\n\nL'eau de l'oasis, Nawfel le comprit, ne s'évaporait pas naturellement. Elle était bue, absorbée, engloutie par cette chose — cette chose qui ne prenait que, qui ne donnait jamais, qui accumulait sans partage. Les palmiers étaient verts parce qu'ils absorbaient la lumière que la créature ne pouvait pas voler, mais même leurs racines semblaient luttent, blanches et tendues, comme des doigts qui cherchent désespérément l'eau que le monstre leur refusait.\n\n— Qui es-tu ? cria Nawfel, sa voix se perdant dans l'immensité du désert.\n\nLa créature tourna lentement sa tête — si l'on pouvait appeler cela une tête. Elle n'avait pas de visage, pas d'yeux, juste une ouverture noire, un trou béant qui ressemblait à une gueule et d'où s'échappa un son grave, guttural, comme le grondement lointain d'un tremblement de terre.\n\n— Je suis ce que tu refuses de voir en toi, dit la voix. Je suis Al-Bukhl — l'Avarice, le Hoarding Worm, البخل. Et cette eau... cette lumière... tout cela est à moi. À moi seul.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Rends-moi l'eau ! L'eau n'appartient pas à un seul être ! C'est un don d'Allah !",
              emotion: 'angry',
            },
          ],
          choices: [
            {
              id: 't3c1s6_c1',
              text: "Essayer de forcer le passage pour atteindre l'eau",
              nextSceneId: 't3c2s1',
            },
            {
              id: 't3c1s6_c2',
              text: "Rester immobile et observer Al-Bukhl, chercher sa faiblesse",
              nextSceneId: 't3c2s1',
              badgeId: 'sabr',
              isCorrect: true,
            },
          ],
          background: 'desert',
          isEnding: true,
          lesson: {
            title: 'Al-Qabd — La contraction du cœur',
            content:
              "La sécheresse spirituelle (Qabd) est une épreuve commune sur le chemin de la connaissance d'Allah. Les grands maîtres spirituels, comme Ibn Ata'illah al-Iskandari, enseignent que ces moments de vide ne sont pas des punitions mais des tests d'amour. Le voyageur sincère continue à prier et à faire le dhikr même quand il ne ressent rien, car sa foi repose sur la certitude et non sur les sentiments.",
            quote: 'إن لله أقواماً اختصهم بالبلاء لأذاقهم حلاوة الإيمان',
            source: 'Hadith rapporté par At-Tirmidhi',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Vermine de l'Avarice (دودة البخل)
    // ============================================================
    {
      id: 't3c2',
      tomeId: 'tome3',
      number: 2,
      title: 'Le Vermine de l\'Avarice',
      titleAr: 'دودة البخل',
      scenes: [
        // --- t3c2s1: Face à Al-Bukhl ---
        {
          id: 't3c2s1',
          chapterId: 't3c2',
          title: 'Face à Al-Bukhl',
          narration: `Al-Bukhl ondulait au milieu du bassin d'eau claire, son corps de sable noir pulsant comme un cœur malade. Plus Nawfel le regardait, plus la créature semblait grandir, se nourrir de l'eau et de la lumière qu'elle engloutissait sans cesse. Autour d'elle, les palmiers penchaient leurs frondes comme des suppliants, leurs racines blanches arrachées du sol par la soif que le ver leur infligeait.\n\nNawfel s'avança prudemment, ses pieds nus s'enfonçant dans le sable brûlant. Le monstre le remarqua et tourna vers lui son ouverture béante, ce trou sans fond qui servait de bouche et d'yeux à la fois. De cette ouverture s'échappa une odeur âcre — l'odeur de la pourriture, du manque, de tout ce qui se fane quand on refuse de le partager.\n\n— Ah, dit Al-Bukhl d'une voix qui faisait vibrer le sable, un visiteur. Tu veux de mon eau, n'est-ce pas ? Tu veux boire, tu veux te rafraîchir, tu veux que je partage ce que j'ai amassé. Mais pourquoi le ferais-je ? Je l'ai ramassé goutte par goutte, rayon par rayon. C'est à moi. Je le mérite.\n\nNawfel sentit monter en lui une émotion qu'il connaissait bien — la colère. La même colère qu'il avait appris à reconnaître dans le premier tome de son voyage. Mais cette fois, elle était différente. Elle n'était pas brûlante et explosive. Elle était froide, raisonnée, presque logique — et c'est cela qui la rendait plus dangereuse.\n\nCar Nawfel, en regardant Al-Bukhl, reconnut quelque chose en lui. Il reconnut cette voix qui lui disait parfois : « Ne donne pas ton dernier biscuit à Wassim, garde-le pour toi. Ne prête pas ton stylo au camarade qui a oublié le sien, il va le casser. Ne partage pas ce que tu as, car tu n'as pas assez pour toi. » Cette voix n'était pas celle d'un monstre extérieur. C'était une voix qui venait de l'intérieur de son propre cœur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu... tu es moi, n'est-ce pas ? Tu es cette voix qui me dit de tout garder pour moi...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s2',
          background: 'desert',
        },

        // --- t3c2s2: Le murmure de l'égoïsme ---
        {
          id: 't3c2s2',
          chapterId: 't3c2',
          title: 'Le murmure de l\'égoïsme',
          narration: `Al-Bukhl émit un son qui ressemblait à un rire, un rire sans joie, un rire de sable qui coule, de chose qui s'effrite. Son corps noir se dilata, et Nawfel vit avec horreur que le ver tirait de son propre corps des objets — des morceaux de lumière cristallisée, des gouttes d'eau suspendues comme des diamants, des pétales de couleurs, des notes de musique figées dans des bulles translucides. C'étaient les choses précieuses que le ver avait accumulées au fil du temps, toutes ces merveilles qu'il avait volées à l'oasis et qu'il stockait dans ses entrailles sombres sans jamais les utiliser, sans jamais en profiter.\n\n— Regarde, dit Al-Bukhl avec satisfaction. Regarde tout ce que j'ai. C'est beau, n'est-ce pas ? Et c'est tout à moi. Si je le partageais, il n'y en aurait plus pour moi. Si je donnais une goutte d'eau, j'aurais soif. Si je donnais un rayon de lumière, je serais dans le noir. Donner, c'est perdre. Garder, c'est survivre. C'est la loi du désert.\n\nNawfel sentit les paroles du ver résonner en lui comme un écho troublant. Il y avait une logique perverse dans ce que disait Al-Bukhl — une logique que le monde extérieur lui avait déjà enseignée. Il avait vu des enfants à l'école qui refusaient de partager leurs goûters. Il avait entendu des adultes parler de « garder ce qui est à soi ». Il avait même parfois ressenti cette impulsion lui-même, cette petite voix mesquine qui disait : « Pourquoi donner quand on peut garder ? »\n\nMais quelque chose d'autre montait en lui, quelque chose de plus profond que la peur et plus fort que la logique du ver. C'était un souvenir — le visage de sa mère Aziza quand elle partageait le dernier morceau de pain avec un voisin dans le besoin, sans hésitation, sans regret, avec un sourire qui illuminait tout son être. C'était l'image de Sidi Mu'adh qui distribuait des dattes aux enfants du village après chaque leçon, ses mains ridées donnant avec une générosité qui semblait inépuisable.\n\nCes images parlaient plus fort que les paroles d'Al-Bukhl. Elles disaient que donner n'était pas perdre. Elles disaient que la vraie richesse n'était pas ce qu'on accumule, mais ce qu'on partage.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Ce n'est pas vrai ! Donner, ce n'est pas perdre ! Maman, elle donne tout le temps, et elle n'est jamais pauvre !",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s3',
          background: 'desert',
        },

        // --- t3c2s3: L'épreuve de la générosité ---
        {
          id: 't3c2s3',
          chapterId: 't3c2',
          title: "L'épreuve de la générosité",
          narration: `Al-Bukhl se contracta brusquement, son corps noir pulsant d'une lumière malveillante, et le paysage autour de Nawfel changea. Les dunes de sable se transformèrent, s'aplatirent, devinrent le décor familier de la cuisine familiale. Nawfel se retrouva assis à la table du petit-déjeuner, exactement comme dans la réalité. Devant lui, un beau plateau de msemen dorés et une coupe de lait tiède. Tout était parfait, sauf qu'il n'y avait qu'une seule portion.\n\n— Voici ton épreuve, dit la voix d'Al-Bukhl qui résonnait maintenant depuis les murs de la cuisine. Tu as faim. Tu as soif. Ce repas est pour toi seul. Vas-tu le garder ou vas-tu le partager ? Souviens-toi : si tu le donnes, tu n'auras plus rien. Si tu le gardes, tu seras rassasié. Le choix est simple.\n\nNawfel regarda le msemen. La vapeur qui s'en dégageait sentait si bon — la farine fraîche, le beurre fondu, le miel. Sa bouche se remplit de salive et son estomac gargouilla bruyamment. C'était une faim vraie, pas une illusion. Son corps en avait besoin.\n\nPuis la porte de la cuisine s'ouvrit. Wassim entra, ses grands yeux innocents fixant le plateau de msemen avec une faim que Nawfel pouvait lire comme dans un livre ouvert. Derrière lui, Souhayl apparut, fatigué, les cheveux en désordre — il n'avait rien mangé non plus. Les deux frères regardèrent Nawfel, attendant.\n\nNawfel sentit le poids du choix s'abattre sur ses épaules comme un manteau de plomb. Al-Bukhl lui murmurait à l'oreille : « Garde-le. C'est toi qui l'as trouvé. C'est ton droit. » Mais une autre voix, plus douce, plus profonde, venant du plus profond de son cœur, lui disait autre chose : « Ce qui est à toi n'est vraiment à toi que quand tu le donnes. Car la vraie propriété, c'est Allah qui la détient. Tout le reste est un prêt. »`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel... tu as du msemen ? J'ai si faim...",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Ne t'inquiète pas, petit. Si Nawfel a mangé, c'est bien. On trouvera autre chose.",
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 't3c2s3_c1',
              text: "Partager le msemen avec ses frères — la générosité est plus forte que la faim",
              nextSceneId: 't3c2s4a',
              badgeId: 'tawadu',
              isCorrect: true,
            },
            {
              id: 't3c2s3_c2',
              text: "Hésiter, manger d'abord puis partager les restes",
              nextSceneId: 't3c2s4b',
            },
            {
              id: 't3c2s3_c3',
              text: "Tout garder pour soi — on a si faim...",
              nextSceneId: 't3c2s4c',
            },
          ],
          background: 'kitchen',
        },

        // --- t3c2s4a: Le pain partagé ---
        {
          id: 't3c2s4a',
          chapterId: 't3c2',
          title: 'Le pain partagé',
          narration: `Nawfel prit le plateau et, sans hésiter, le posa au centre de la table. Il prit les msemen et les coupa en trois parts égales, en distribuant une à Wassim, une à Souhayl et en gardant la dernière pour lui. Le geste était simple, presque banal, mais dans le monde intérieur où ils se trouvaient, il eut un effet surnaturel.\n\nAu moment où Nawfel tendit sa part à Wassim, le visage du petit garçon s'illumina d'un sourire si radieux, si pur, que la lumière qui en émanait fit trembler les murs de la cuisine. Souhayl, de son côté, posa sa main sur l'épaule de Nawfel et la serra doucement, avec cette gratitude silencieuse que seuls les frères savent exprimer.\n\nAutour d'eux, quelque chose de magique se produisit. Le msemen qu'ils mangeaient, bien que divisé en trois, semblait plus abondant que lorsqu'il était entier. Chaque bouchée était un festin, chaque saveur décuplée, chaque gorgée de lait plus fraîche et plus douce que tout ce que Nawfel avait jamais goûté. C'était le miracle du partage — la Baraka, cette bénédiction invisible qui multiplie ce que l'on donne avec un cœur sincère.\n\nEt derrière la fenêtre de la cuisine, Nawfel aperçut Al-Bukhl. Le ver noir avait reculé, son corps pulsant faiblement, comme s'il perdait de sa substance. L'avarice ne peut pas survivre face à la générosité — elle se dissout comme le sel dans l'eau douce. Mais elle ne meurt pas. Elle se cache, attend, et se prépare à revenir sous une autre forme.\n\nLa voix de Sidi Mu'adh résonna dans l'esprit de Nawfel, claire comme un appel à la prière : « Al-Karam — la générosité — n'est pas un acte, petit cœur. C'est un état du cœur. Quand tu donnes avec joie, sans calcul et sans regret, tu ne perds rien. Tu gagnes l'amour d'Allah et le sourire de ceux qui te sont chers. C'est cela, la vraie richesse. »`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "C'est le meilleur msemen que j'ai jamais mangé, Nawfel ! Merci, merci beaucoup !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Tu es un bon frère, Nawfel. Papa et maman seraient fiers de toi.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s5',
          background: 'kitchen',
          earnedBadgeId: 'tawadu',
          lesson: {
            title: "Al-Tawadu' — L'humilité",
            content:
              "Al-Tawadu' (التواضع) signifie se considérer comme égal aux autres, sans s'élever au-dessus de quiconque. L'humilité ne signifie pas se rabaisser — c'est reconnaître que tout ce que l'on a vient d'Allah. En partageant son repas sans hésitation, Nawfel a démontré que son cœur est plus grand que son ego. Le Prophète ﷺ a dit : « Personne n'est humble par humilité pour Allah sans qu'Allah ne l'élève. »",
            quote: 'ما تواضع أحد لله إلا رفعه الله',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- t3c2s4b: Le partage tardif ---
        {
          id: 't3c2s4b',
          chapterId: 't3c2',
          title: 'Le partage tardif',
          narration: `Nawfel hésita. Son estomac gargouillait, le msemen sentait si bon, et cette petite voix — la voix d'Al-Bukhl — lui murmurait que ce serait bien de manger d'abord, de rassasier sa propre faim avant de penser aux autres. Il prit un morceau de msemen et le porta à sa bouche. Mais au moment de mordre, quelque chose l'arrêta — le regard de Wassim.\n\nCe regard. Ces grands yeux lumineux, remplis non pas de reproche mais de confiance, d'amour pur et inconditionnel. Wassim ne demandait rien. Il ne suppliait pas. Il regardait simplement son grand frère avec cette certitude naïve que Nawfel ferait le bon choix. Et ce regard, comme une flèche de lumière, transperça le mur de l'égoïsme que Nawfel était en train de construire autour de son cœur.\n\nNawfel reposa le msemen. Ses mains tremblaient légèrement. Puis, d'une voix douce et un peu honteuse, il coupa le pain en trois parts et les distribua. Ce n'était pas un geste parfait — il y avait eu de l'hésitation, un instant où l'égoïsme avait failli gagner — mais c'était un geste honnête. Et dans le monde intérieur, l'honnêteté vaut plus que la perfection.\n\nLe msemen divisé en trois était bon, mais Nawfel sentait que quelque chose manquait. La Baraka était là, mais atténuée, comme une lumière filtrée à travers un voile. Al-Bukhl, derrière la fenêtre, ne recula pas autant qu'il l'aurait fait si Nawfel avait partagé immédiatement. Le ver sourit — si un ver peut sourire — et disparut lentement dans le sable, non pas vaincu mais simplement en retrait, attendant une autre occasion.\n\nLa voix de Sidi Mu'adh murmura : « Tu as bien fait, petit cœur. Mais souviens-toi : la générosité véritable est celle qui est donnée avant que la faim ne te pousse. C'est donner avec le sourire, sans calcul, sans attendre. C'est cela, Al-Karam. »`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Merci, Nawfel. C'est gentil de ta part de partager.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s5',
          background: 'kitchen',
        },

        // --- t3c2s4c: Le mur de l'égoïsme ---
        {
          id: 't3c2s4c',
          chapterId: 't3c2',
          title: 'Le mur de l\'égoïsme',
          narration: `Nawfel prit le msemen et le garda devant lui, le serrant contre sa poitrine comme un trésor. « C'est à moi, » murmura-t-il, et les mots sortirent avec une facilité qui le terrifia. La voix d'Al-Bukhl était devenue la sienne.\n\nWassim le regarda, et pour la première fois depuis que Nawfel le connaissait, la lumière de ses yeux s'éteignit. Pas complètement — jamais complètement, car Wassim portait en lui une pureté que même la tristesse ne pouvait éteindre — mais elle diminua, comme une étoile qui se cache derrière un nuage. Souhayl, lui, ne dit rien. Il tourna simplement le dos et sortit de la cuisine en silence, et ce silence était plus cruel que n'importe quel cri.\n\nNawfel mangea son msemen. Mais à chaque bouchée, le pain devenait plus sec, plus dur, plus amer. Le lait tournait dans sa coupe. Le miel avait perdu sa douceur. Il mangeait, mais il ne se rassasiait pas. Plus il consommait, plus le vide en lui s'élargissait, comme un trou noir qui engloutit tout sans jamais se remplir.\n\nAutour de lui, les murs de la cuisine commencèrent à se refermer. Le plafond descendait, le sol montait, et Nawfel comprit avec horreur qu'il était en train d'être englouti par son propre égoïsme. Al-Bukhl, derrière la fenêtre, avait triplé de taille. Son corps noir pulsait de satisfaction, et ses entrailles regorgeaient de la lumière et de l'eau que Nawfel venait de lui offrir en refusant de partager.\n\n— Merci, dit Al-Bukhl avec sa voix de sable. Merci de me nourrir. Ton égoïsme est mon festin. Continue, continue à garder tout pour toi. Plus tu accumules, plus je deviens fort.\n\nLa cuisine disparut et Nawfel se retrouva de nouveau dans le désert, seul, sous le ciel de feu, avec le poids de sa honte écrasant ses épaules comme un montagne de sable.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... ce n'est pas vrai... je ne suis pas comme ça...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s5',
          background: 'desert',
        },

        // --- t3c2s5: Les enseignements du désert ---
        {
          id: 't3c2s5',
          chapterId: 't3c2',
          title: 'Les enseignements du désert',
          narration: `Le désert avait changé. Les dunes de sable n'étaient plus stériles et mortes — elles palpitaient d'une vie souterraine, comme si quelque chose coulait sous la surface, quelque chose de chaud et de lumineux. Nawfel, assis au sommet d'une dune, les genoux ramenés contre sa poitrine, fixait l'horizon où le soleil couchant tirait des traînées de pourpre et d'or sur le ciel du désert.\n\nIl repensait à Al-Bukhl, à cette voix qui lui disait de tout garder pour lui, à la facilité terrifiante avec laquelle il avait cédé — ou failli céder — à cette tentation. Ce n'était pas un monstre extérieur, pas une bête à combattre avec une épée ou un bouclier. C'était une partie de lui-même, un visage de son propre Nafs, et le combat devait se mener à l'intérieur de son cœur.\n\nLa voix de Sidi Mu'adh monta à nouveau dans son esprit, douce et claire, comme une source d'eau fraîche au milieu du désert.\n\n— Ce que tu as appris ce soir, Nawfel, est une des leçons les plus importantes du voyage spirituel. L'avarice — Al-Bukhl — n'est pas seulement le refus de donner de l'argent ou de la nourriture. C'est aussi le refus de donner son temps, son écoute, son sourire, son pardon. C'est le sentiment que l'on mérite tout et que les autres ne méritent rien. Et le remède contre l'avarice, le Prophète ﷺ nous l'a enseigné : c'est Al-Karam — la générosité. Mais une générosité qui vient du cœur, pas par obligation. Une générosité qui te fait sourire quand tu donnes, pas qui te fait grimacer quand tu perds.\n\nNawfel ferma les yeux et récita doucement : « Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn — Ô Allah, je cherche refuge auprès de Toi contre l'inquiétude et la tristesse, la faiblesse et la paresse, l'avarice et la lâcheté. » Les mots anciens le bercèrent comme une chanson d'enfance, et pour la première fois depuis des semaines, Nawfel sentit quelque chose remuer dans son cœur — pas la douceur d'autrefois, mais quelque chose de plus rude, de plus fort : la détermination.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "L'avarice n'est pas seulement le refus de donner de l'argent, Nawfel. C'est aussi le refus de donner son temps, son écoute, son sourire, son pardon. Le remède, c'est Al-Karam — la générosité qui vient du cœur.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c2s6',
          background: 'desert',
          isEnding: true,
          lesson: {
            title: 'Al-Bukhl et Al-Karam — L\'avarice et la générosité',
            content:
              "Le Prophète ﷺ a dit : « L'homme dit : « Mon argent, mon argent ! » Mais de son argent, il n'a que trois choses : ce qu'il a mangé et qu'il a épuisé, ce qu'il a porté et qui s'est usé, et ce qu'il a donné en charité et qu'il a conservé. » La vraie richesse n'est pas dans l'accumulation mais dans le partage, car seul ce qui est donné subsiste.",
            quote: 'ما نقصت صدقة من مال',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- t3c2s6: Le vent qui se lève ---
        {
          id: 't3c2s6',
          chapterId: 't3c2',
          title: 'Le vent qui se lève',
          narration: `Un vent se leva soudainement au-dessus des dunes — un vent chaud, puissant, chargé de sable et d'une énergie étrange qui faisait vibrer l'air tout autour de Nawfel. Le garçon ouvrit les yeux et regarda vers l'horizon. Ce qu'il vit le glaça malgré la chaleur : à l'ouest, là où le soleil venait de se coucher, une colonne de fumée rouge et noire s'élevait du désert comme un brasier gigantesque. La fumée tourbillonnait, s'enroulait sur elle-même, prenant des formes qui ressemblaient à des visages déformés par la rage.\n\nLe sable sous les pieds de Nawfel devint brûlant. L'air lui brûla les poumons. Et du cœur de cette colonne de feu monta un son — un rugissement, un hurlement, un cri de colère si intense que Nawfel sentit son propre cœur se serrer, comme si une main invisible l'étreignait.\n\n— Oh non, murmura Nawfel en reculant d'un pas. C'est... c'est quoi ça ?\n\nLa voix de Sidi Mu'adh résonna, mais cette fois elle portait une urgence que Nawfel n'avait jamais entendue auparavant.\n\n— C'est Al-Ghadab Al-Akbar, petit cœur. La Grande Colère. الغضب الأكبر. C'est le monstre que tu as déjà rencontré une fois — tu te souviens ? La colère du premier voyage. Mais celle-ci est plus forte, plus ancienne, plus profonde. Elle se nourrit de tout ce qui ne va pas dans ta vie : les frustrations, les injustices, les déceptions. Et elle va te mettre à l'épreuve d'une manière que tu n'imagines pas. Prépare-toi.\n\nLa colonne de feu s'approchait, grandissait, engloutissant les dunes sur son passage. Nawfel sentit la chaleur monter en lui — non pas la chaleur du désert, mais une chaleur intérieure, un feu qui couvait dans son propre cœur et qui menaçait de se transformer en une chose terrible.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh ! Aidez-moi !",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Je suis avec toi, Nawfel. Mais ce combat, tu dois le mener toi-même. Souviens-toi : la colère est un feu. Tu ne l'éteins pas avec le feu. Tu l'éteins avec l'eau de la patience et le vent de l'humilité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c3s1',
          background: 'desert',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — Le Feu Intérieur (النار الداخلية)
    // ============================================================
    {
      id: 't3c3',
      tomeId: 'tome3',
      number: 3,
      title: 'Le Feu Intérieur',
      titleAr: 'النار الداخلية',
      scenes: [
        // --- t3c3s1: Le réveil brûlant ---
        {
          id: 't3c3s1',
          chapterId: 't3c3',
          title: 'Le réveil brûlant',
          narration: `Nawfel se réveilla en sursaut, le cœur palpitant, les draps trempés de sueur. Le petit matin filtrait à travers les volets en bois, mais la lumière semblait différente — plus dure, plus crue, comme si le soleil lui-même était en colère. Nawfel resta immobile un long moment, essayant de calmer le tumulte de son esprit, de séparer le rêve de la réalité.\n\nMais ce qui s'était passé dans le désert n'était pas un simple rêve. Nawfel le sentait dans chaque fibre de son corps — la chaleur de la colère qui avait couvé en lui pendant son sommeil, l'odeur âcre du ver de l'avarice, le goût amer du msemen égoïste. Tout cela était réel, d'une réalité plus profonde que celle du monde physique.\n\nLa journée qui suivit fut un cauchemar en plein jour. À l'école, Moulay Hicham, le maître, rendit les copies de la dictée hebdomadaire, et Nawfel découvrit avec stupeur qu'il avait obtenu l'une des plus mauvaises notes de la classe. Des fautes d'orthographe partout, des lettres mal formées, des phrases incomplètes — comme si sa main avait refusé d'écrire ce que son esprit lui dictait. Nawfel fixa sa copie, les joues brûlantes de honte, et sentit quelque chose monter en lui — une chaleur familière, rouge et noire, la chaleur de la colère.\n\nPourquoi ? Pourquoi cette note ? Il avait travaillé, il avait révisé, il avait fait de son mieux. C'était injuste. Le maître n'avait pas vu ses efforts. Le système était truqué. Les autres élèves ne méritaient pas de meilleures notes que lui. Chaque pensée alimentait le feu, chaque pensée ajoutait une bûche à l'incendie qui brûlait dans sa poitrine.\n\nPuis, à la récréation, vint le pire. Kamal, un garçon de sa classe, le plus grand et le plus fort, s'approcha de lui dans la cour avec un sourire moqueur. « Alors, Nawfel, la star des mauvaises notes ! Tu vas nous écrire un poème sur tes fautes ? » Les autres enfants rirent, et le rire résonna dans la tête de Nawfel comme un écho du rugissement d'Al-Ghadab Al-Akbar.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "La ferme, Kamal ! Tu n'as pas le droit de te moquer de moi !",
              emotion: 'angry',
            },
          ],
          choices: [
            {
              id: 't3c3s1_c1',
              text: "Se lever et crier sur Kamal, le menace de représailles",
              nextSceneId: 't3c3s2a',
            },
            {
              id: 't3c3s1_c2',
              text: "Prendre une grande inspiration et s'éloigner en silence",
              nextSceneId: 't3c3s2b',
              badgeId: 'sabr',
              isCorrect: true,
            },
          ],
          background: 'school',
        },

        // --- t3c3s2a: L'explosion ---
        {
          id: 't3c3s2a',
          chapterId: 't3c3',
          title: "L'explosion",
          narration: `Nawfel se leva d'un bond, ses poings serrés, le visage déformé par une rage qu'il ne contrôlait plus. Il s'élança vers Kamal avec un hurlement qui fit reculer tous les enfants de la cour. Ses mains trouvèrent la poitrine du grand garçon et le poussèrent avec une force que Nawfel ne se connaissait pas. Kamal trébucha, tomba dans le sable de la cour, et Nawfel se retrouva debout au-dessus de lui, le souffle court, les yeux injectés de sang.\n\nAutour de lui, le silence. Les enfants regardaient Nawfel comme s'il venait de se transformer en quelqu'un d'autre — quelqu'un de dangereux. Souhayl, qui jouait au football de l'autre côté de la cour, lâcha le ballon et courut vers son petit frère, le visage blanc de stupéfaction.\n\n— Nawfel ! Arrête ! Qu'est-ce que tu fais ?!\n\nMais Nawfel ne l'entendait pas. Le seul son qu'il percevait était le rugissement d'Al-Ghadab Al-Akbar, qui montait de l'intérieur de lui comme un volcan en éruption. Son cœur battait si fort qu'il éclatait, ses mains tremblaient, et une vague de chaleur rouge lui montait du ventre à la tête. Il sentit que s'il ne se contrôlait pas, il allait frapper Kamal — vraiment frapper, avec toute sa force — et cette certitude le terrifiait plus que tout.\n\nC'est dans cet instant de terreur — terreur de soi-même, terreur de ce qu'il était capable de devenir — que Nawfel entendit une voix. Pas celle d'Al-Ghadab, pas celle de Sidi Mu'adh, mais une voix plus petite, plus fragile, qui venait du plus profond de son cœur ébranlé : « Ce n'est pas moi. Ce n'est pas moi qui veux faire ça. C'est la colère. C'est elle qui me fait faire ça. Et je ne veux pas être elle. Je ne veux pas être le feu. Je veux être l'eau. »`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel ! Écoute-moi ! Regarde-moi ! Ce n'est pas toi ! Respire ! Respire !",
              emotion: 'angry',
            },
            {
              characterId: 'nawfel',
              text: "Je... je ne veux pas... je ne veux pas lui faire du mal...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't3c3s3',
          background: 'school',
        },

        // --- t3c3s2b: Le silence du fort ---
        {
          id: 't3c3s2b',
          chapterId: 't3c3',
          title: 'Le silence du fort',
          narration: `Nawfel ferma les yeux. Il prit une inspiration profonde — la plus profonde de sa vie — et retint son souffle pendant un long moment. Autour de lui, Kamal et les autres enfants attendaient, curieux, moqueurs, prêts à rire encore plus fort si Nawfel montrait la moindre faiblesse.\n\nMais Nawfel ne dit rien. Il ouvrit les yeux, regarda Kamal avec un calme qui surprit tout le monde — y compris Kamal lui-même — et se tourna calmement pour s'éloigner. Pas de mots. Pas de cris. Pas de gestes. Juste le silence, et le pas d'un garçon qui choisit de ne pas laisser la colère le diriger.\n\nLe silence de Nawfel était plus puissant que n'importe quel cri. Kamal le regarda s'éloigner, son sourire moqueur se figeant sur son visage, remplacé par une expression de confusion et, curieusement, de respect. Les autres enfants échangèrent des regards perplexes. Certains d'entre eux s'attendaient à une bagarre, à du sang, à des larmes. Ils n'avaient pas vu ça venir — ce calme absolu, cette maîtrise de soi qui dépassait tout ce qu'un enfant de huit ans était censé être capable de manifester.\n\nSouhayl apparut à côté de Nawfel et lui posa la main sur l'épaule sans rien dire. Il n'avait pas besoin de parler — le geste suffisait. Deux frères, côte à côte, marchant dans la cour de l'école sous le soleil de Chefchaouen, portés par un silence qui en disait plus long que tous les discours du monde.\n\nÀ l'intérieur de Nawfel, quelque chose remua. Le feu d'Al-Ghadab Al-Akbar couvait encore, mais il était contenu, maîtrisé — non pas éteint, car Nawfel sentait qu'il n'avait pas le pouvoir d'éteindre la colère par lui-même — mais canalisé, comme l'eau d'une rivière que l'on guide dans un lit étroit pour l'empêcher de déborder.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Tu as bien fait, Nawfel. Très bien fait. Je suis fier de toi.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't3c3s3',
          background: 'school',
          earnedBadgeId: 'sabr',
        },

        // --- t3c3s3: Le retour au désert ---
        {
          id: 't3c3s3',
          chapterId: 't3c3',
          title: 'Le retour au désert',
          narration: `Cette nuit-là, Nawfel retourna dans son monde intérieur. Mais le désert n'était plus le même. Les dunes de sable étaient devenues rouges, baignées par la lumière d'un ciel d'incendie. La chaleur était suffocante, oppressante, comme si l'air lui-même brûlait. Et au centre de ce désert en flammes se dressait une créature que Nawfel avait déjà rencontrée dans un cauchemar ancien — mais sous une forme si amplifiée, si terrifiante, qu'elle en devenait méconnaissable.\n\nAl-Ghadab Al-Akbar — la Grande Colère. الغضب الأكبر.\n\nC'était un titan fait de fumée noire et de braises rouges, haut comme trois hommes, avec des yeux qui étaient deux foyers ardents et une bouche qui était un gouffre de lave incandescente. Chaque respiration du monstre projetait des gerbes d'étincelles, chaque mouvement faisait trembler le sol comme lors d'un tremblement de terre. Autour de lui, le sable fondait et se transformait en verre noir, créant une mer de cristal sombre qui reflétait les flammes du ciel.\n\n— Tu m'as reconnu, dit Al-Ghadab d'une voix qui faisait vibrer les os de Nawfel. Tu m'as reconnu parce que je suis en toi depuis toujours. Je suis le premier cri que tu as poussé en naissant. Je suis le tremblement de tes poings quand on t'inflige une injustice. Je suis le feu qui monte à ta tête quand on se moque de toi, quand on te frappe, quand on te trahit. Je suis la colère, Nawfel, et je suis la chose la plus puissante qui existe dans ton cœur.\n\nNawfel recula d'un pas. Le monstre avança. Nawfel recula encore, et encore, jusqu'à ce que ses talons touchent le bord d'une dune de verre noir. Il était coincé. La panique monta en lui comme un raz-de-marée, et avec la panique, la colère — car la peur et la colère sont sœurs, elles se nourrissent l'une de l'autre dans un cercle vicieux qui ne finit jamais.\n\nMais Nawfel se souvint. Il se souvint de Sidi Mu'adh, de ses paroles, de ses enseignements. Il se souvint de la leçon du feu et de l'eau. Et il fit ce que le shaykh lui avait dit de faire dans les moments de détresse — il ferma les yeux, posa sa main sur son cœur, et prononça les mots que le Prophète ﷺ enseignait à ceux qui étaient en colère : « A'udhu billahi minash-Shaytanir-rajim — Je cherche refuge auprès d'Allah contre Satan le lapidé. »`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu n'es pas la chose la plus puissante, Al-Ghadab. La chose la plus puissante en moi, c'est la confiance en Allah.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't3c3s4',
          background: 'battle',
        },

        // --- t3c3s4: L'eau de la patience ---
        {
          id: 't3c3s4',
          chapterId: 't3c3',
          title: "L'eau de la patience",
          narration: `Quand Nawfel prononça ces mots, quelque chose d'extraordinaire se produisit. Sous ses pieds, là où le sable avait fondu en verre noir, une fissure apparut — fine d'abord, puis s'élargissant lentement, creusant son chemin à travers le cristal sombre. De cette fissure jaillit un filet d'eau, clair et frais, qui coula doucement sur le verre brûlant en émettant un sifflement de vapeur.\n\nAl-Ghadab recula d'un pas. Ses yeux de braises se plissèrent, et Nawfel vit pour la première fois quelque chose dans le regard du monstre — non pas de la peur, car la peur est une émotion humaine, mais de l'incompréhension. Le géant de feu ne comprenait pas. L'eau était son ennemie mortel, et pourtant elle coulait d'une fissure que Nawfel n'avait pas créée — elle venait de l'intérieur de lui, de son propre cœur.\n\nLe filet d'eau devint un ruisseau, puis un petit cours d'eau, puis une rivière qui s'étendit entre Nawfel et Al-Ghadab, créant une frontière liquide que le feu ne pouvait pas franchir. Nawfel regarda cette eau avec émerveillement. Elle était douce, apaisante, tiède comme du lait maternel. Et dans son reflet, il vit quelque chose qui le fit pleurer — il vit le visage de sa mère Aziza, et ce visage souriait, les yeux brillants de larmes et de fierté.\n\nLa voix de Sidi Mu'adh monta à nouveau, portée par le vent du désert : « La colère, Nawfel, est comme un feu. Le Prophète ﷺ a dit : « Si l'un de vous est en colère alors qu'il est debout, qu'il s'assoit. S'il est en colère alors qu'il est assis, qu'il se couche. » Pourquoi ? Parce que changer de posture brise le mouvement de la colère. La colère est une énergie en mouvement, et si tu arrêtes le mouvement, tu affaiblis le feu. Mais le vrai remède, le remède ultime, c'est l'humilité — Al-Tawadu'. Car la colère naît de l'ego, et l'ego meurt dans l'humilité. »\n\nAl-Ghadab hurla de rage et lança une gerbe de flammes par-dessus la rivière. Mais les flammes s'éteignirent avant de toucher Nawfel, transformées en vapeur inoffensive par l'eau de la patience. Le monstre recula encore, rapetissant, diminuant, son corps de fumée et de braises se décomposant petit à petit.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La colère naît de l'ego, Nawfel, et l'ego meurt dans l'humilité. Quand tu te sens en colère, change ta posture, change ta pensée, et surtout, souviens-toi que tu n'es pas plus grand qu'un autre aux yeux d'Allah.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c3s5',
          background: 'battle',
        },

        // --- t3c3s5: Le choix final du désert ---
        {
          id: 't3c3s5',
          chapterId: 't3c3',
          title: 'Le choix final du désert',
          narration: `Al-Ghadab Al-Akbar était à genoux maintenant, son corps colossal réduit à une forme floue de fumée et de braises mourantes. Le monstre haletait — si un être de feu peut haleter — et ses yeux de braises, autrefois arrogants et dominants, brillaient maintenant d'une lueur qui ressemblait à de la peur, ou peut-être à de la tristesse.\n\n— Tu ne peux pas me détruire, murmura Al-Ghadab d'une voix de cendres. Je suis une partie de toi. Si tu me détruis, tu te détruis aussi.\n\nNawfel s'avança jusqu'au bord de la rivière d'eau claire. De l'autre côté, le monstre attendait, réduit, vulnérable, et Nawfel sentit quelque chose d'étrange — non pas de la haine, non pas du triomphe, mais de la compassion. Car Nawfel voyait maintenant ce que les flammes du monstre lui cachaient : derrière la rage, derrière la destruction, il y avait de la souffrance. Al-Ghadab n'était pas né de la méchanceté. Il était né de la douleur — de la douleur d'un enfant qui se sent incompris, attaqué, seul face à un monde qui ne le voit pas.\n\n— Je ne veux pas te détruire, dit Nawfel doucement. Sidi Mu'adh m'a appris que l'on ne détruit pas les parties de soi-même. On les transforme. Tu es de la colère, c'est vrai. Mais la colère, c'est aussi le feu qui me donne le courage de me défendre, l'énergie qui me pousse à combattre l'injustice. Je ne veux pas éteindre ton feu. Je veux apprendre à le contrôler.\n\nLa fumée d'Al-Ghadab commença à changer de couleur. Le noir devint gris, puis blanc, puis doré. Les braises rouges se transformèrent en étincelles dorées, comme les lumières dansantes du jardin magique de son premier voyage. Le monstre se redressa, non pas comme un titan de feu, mais comme une silhouette lumineuse, une forme douce et tiède qui ressemblait à une lanterne allumée dans la nuit du désert.\n\n— Merci, dit une voix qui n'était plus celle du monstre mais une voix douce, presque enfantine. Merci de ne pas m'avoir abandonnée. La colère transformée devient la force. Le feu maîtrisé devient la lumière. Et toi, Nawfel, tu es devenu celui qui ne fuit ni le feu ni le vent, mais qui apprend à danser avec eux.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne te détruis pas. Je te transforme. C'est ce que Sidi Mu'adh m'a appris.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s1',
          background: 'desert',
          isEnding: true,
          lesson: {
            title: "Al-Ghadab — Transformer la colère",
            content:
              "Le Prophète ﷺ a dit : « La forte colère n'est pas de la force. La forte colère est celle qui se maîtrise au moment où on en est capable. » La colère n'est pas intrinsèquement mauvaise — c'est une énergie. Transformée par la patience et l'humilité, elle devient le courage, la justice, la force de caractère. Le but n'est pas de supprimer la colère mais de la dompter, comme un cavalier dompte son cheval.",
            quote: 'ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب',
            source: 'Hadith — Sahih al-Bukhari & Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — L'Oasis de l'Humilité (واحة التواضع)
    // ============================================================
    {
      id: 't3c4',
      tomeId: 'tome3',
      number: 4,
      title: "L'Oasis de l'Humilité",
      titleAr: 'واحة التواضع',
      scenes: [
        // --- t3c4s1: La transformation du désert ---
        {
          id: 't3c4s1',
          chapterId: 't3c4',
          title: 'La transformation du désert',
          narration: `Le désert changeait autour de Nawfel comme un tableau qui se repeint lui-même. Les dues de sable rouge fondu se calmaient, reprenaient leur couleur dorée d'origine, et la température — suffocante un instant plus tôt — baissait doucement pour devenir tiède, puis fraîche, puis délicieusement agréable, comme la brise du soir sur les montagnes du Rif.\n\nLes rivières d'eau claire que la patience avait fait jaillir du sol s'élargissaient, se rejoignaient, formaient des cours d'eau sinueux qui serpentaient entre les dunes en les transformant peu à peu. Le sable mort devenait de la terre fertile, d'un brun riche et humide, et partout où l'eau passait, la vie renaissait. Des brins d'herbe poussaient, verts et tendres, puis des fleurs sauvages — des coquelicots rouges, des soucis dorés, des lavandes violettes dont le parfum envahit le désert tout entier.\n\nNawfel marchait au milieu de cette métamorphose, les pieds nus sur une terre qui redevenait vivante sous ses pas. Il sentait que chaque pas qu'il faisait était un acte de création, comme si sa présence elle-même suffisait à transformer le paysage. Mais il comprit aussi que ce n'était pas lui qui faisait ce miracle — c'était le travail de son cœur, un cœur qui avait traversé l'épreuve du désert et qui en ressortait purifié, comme l'or qui sort de la fournaise.\n\nEt puis il la vit.\n\nAu bout d'un chemin de fleurs sauvages et d'herbe fraîche, là où le désert avait été le plus aride, une oasis se dressait comme une promesse tenue. Des palmiers d'un vert émeraude gracieux, un bassin d'eau cristalline miroitait sous un ciel qui n'était plus de feu mais d'un bleu profond et paisible. Des oiseaux invisibles chantaient dans les palmiers, et une brise légère portait le parfum du jasmin et de la menthe. C'était plus beau que le jardin magique de son premier voyage, car Nawfel savait maintenant ce qu'il avait fallu traverser, ce qu'il avait fallu perdre et retrouver pour mériter ce lieu de paix.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est... c'est magnifique... C'est mon cœur. C'est mon cœur qui est devenu ça.",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s2',
          background: 'oasis',
        },

        // --- t3c4s2: Sidi Mu'adh à l'oasis ---
        {
          id: 't3c4s2',
          chapterId: 't3c4',
          title: "Sidi Mu'adh à l'oasis",
          narration: `Au centre de l'oasis, assis sur un tapis de prière posé sur l'herbe fraîche, Sidi Mu'adh attendait. Son visage rayonnait d'une lumière qui n'avait rien à voir avec le soleil — c'était la lumière de la fierté spirituelle, celle qu'un maître ressent quand son élève a traversé une épreuve et en est ressorti grandi.\n\nAutour de lui, les palmiers formaient un cercle naturel, et leurs frondes, agitées par la brise, produisaient un bruit doux et régulier qui ressemblait au dhikr — le rappel constant d'Allah, murmuré par la création tout entière. L'eau du bassin était si claire que Nawfel pouvait y voir son propre reflet, et il remarqua avec étonnement que son visage avait changé — les traits étaient les mêmes, mais l'expression avait gagné en profondeur, en sérénité. Il y avait dans ses yeux quelque chose de nouveau, une lueur douce et stable qui n'y était pas avant.\n\n— Bienvenue à l'oasis de ton cœur, petit cœur, dit Sidi Mu'adh en lui faisant signe de s'asseoir. Tu as traversé le désert de l'épreuve — صحراء الابتلاء — et tu es arrivé ici, à ce lieu que les Soufis appellent Maqam As-Sabr, la Station de la Patience. Ce que tu as vécu n'était pas un jeu, Nawfel. Chaque dune que tu as gravie, chaque pas brûlant que tu as fait, chaque combat que tu as mené contre Al-Bukhl et Al-Ghadab — tout cela était réel. Car le monde intérieur est plus réel que le monde extérieur. C'est dans le cœur que se joue la véritable bataille de l'existence.\n\nNawfel s'assit devant le shaykh, les jambes croisées, et pour la première fois depuis des semaines, son cœur se remplit d'une douceur qu'il avait crue perdue à jamais. C'était la douceur du retour — le retour à la maison, le retour à soi, le retour à Allah.\n\n— Sidi Mu'adh, dit Nawfel d'une voix tremblante d'émotion, j'ai failli perdre le combat. J'ai failli céder à la colère. J'ai failli tout garder pour moi. Comment est-ce que j'ai réussi ? Ce n'est pas moi qui suis fort. C'est... c'est autre chose.\n\nSidi Mu'adh sourit de ce sourire immense qui illuminait tout son visage.\n\n— Tu as réussi, petit cœur, non pas parce que tu es fort, mais parce que tu es humble. C'est cela, le secret de l'oasis. L'humilité — Al-Tawadu' — est la clé qui ouvre toutes les portes du cœur. Quand tu te crois grand, tu deviens petit. Quand tu te reconnais petit, Allah te rend grand. C'est le plus grand paradoxe de la voie spirituelle, et c'est aussi sa plus grande vérité.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Tu as réussi parce que tu es humble. L'humilité — Al-Tawadu' — est la clé qui ouvre toutes les portes du cœur. Quand tu te crois grand, tu deviens petit. Quand tu te reconnais petit, Allah te rend grand.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Et les monstres, Sidi Mu'adh ? Al-Bukhl et Al-Ghadab... ils vont revenir ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Oui, petit cœur. Ils reviendront. Al-Bukhl ne meurt jamais — l'avarice dort, attend, et revient sous de nouvelles formes. Al-Ghadab ne s'éteint pas — la colère couve et resurgit aux moments où tu t'y attends le moins. Mais maintenant, tu les connais. Et connaître son ennemi, c'est déjà avoir remporté la moitié de la bataille.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s3',
          background: 'oasis',
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: "Al-Tawadu' — La clé de l'oasis",
            content:
              "L'humilité en Islam ne signifie pas se rabaisser ou se détester. C'est la connaissance juste de soi-même — reconnaître que toute bonté vient d'Allah et que seul Ses dons nous élèvent. Le Prophète ﷺ était le plus humble des hommes malgré son rang. Il disait : « Ne me vantez pas comme les chrétiens ont vanté le fils de Marie. Je ne suis qu'un serviteur. Dites : serviteur d'Allah et Son messager. »",
            quote: 'ومن يتوكل على الله فهو حسبه',
            source: 'Coran, Sourate At-Talaq (65:3) — approfondissement du Tawakkul',
          },
        },

        // --- t3c4s3: Le choix de l'oasis ---
        {
          id: 't3c4s3',
          chapterId: 't3c4',
          title: "Le choix de l'oasis",
          narration: `Sidi Mu'adh se leva et désigna le bassin d'eau cristalline au centre de l'oasis. Nawfel regarda l'eau — elle était si pure, si limpide, qu'elle reflétait le ciel avec une perfection absolue. Pas une ride, pas une ondulation. C'était un miroir parfait, et dans ce miroir, Nawfel pouvait voir non seulement son propre visage, mais aussi quelque chose d'autre — une lumière qui pulsait doucement au fond du bassin, comme un cœur qui bat sous l'eau.\n\n— Cette oasis est ton cœur, dit Sidi Mu'adh. Mais comme tout cœur, elle a besoin d'être entretenue. L'eau ne reste pure que si on la renouvelle. Les palmiers ne restent verts que si on les arrose. L'humilité, Nawfel, n'est pas un acquis — c'est une pratique quotidienne. Chaque matin, en te levant, rappelle-toi que tout ce que tu as est un cadeau. Chaque soir, en te couchant, remercie Allah pour ce que tu as pu donner.\n\nLe shaykh tendit à Nawfel deux choses : une petite coupe d'argent et un sac de graines.\n\n— Cette coupe, dit-il, représente le Tawakkul — la confiance en Allah. Chaque fois que tu doutes, que tu as peur, que tu te sens seul, remplis cette coupe d'eau de l'oasis et bois. L'eau te rappellera que Celui qui a créé cette oasis peut créer des oasis partout — même dans le désert le plus aride. Et ce sac de graines représente Al-Karam — la générosité. Plante-les autour de l'oasis. Chaque graine qui pousse sera un acte de bonté que tu auras accompli dans le monde réel.\n\nNawfel prit la coupe et le sac de graines avec des mains tremblantes d'émotion. Il sentait le poids de la responsabilité qui lui était confiée — non pas un fardeau, mais un honneur, une mission, un purpose que son cœur avait cherché sans le savoir pendant toutes ces semaines de sécheresse.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... je vais faire de mon mieux. Je vais prendre soin de cette oasis. Je vais arroser ces graines chaque jour. Promis.",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "Je sais, petit cœur. Et n'oublie jamais : la plus grande des graines, c'est un mot gentil. Un sourire donné gratuitement. Un pardon offert sans qu'on te le demande. Ce sont les graines qui produisent les plus beaux palmiers.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't3c4s3_c1',
              text: "Boire à la coupe de Tawakkul et planter les graines immédiatement",
              nextSceneId: 't3c4s4a',
              isCorrect: true,
            },
            {
              id: 't3c4s3_c2',
              text: "Garder la coupe et les graines pour plus tard — le moment ne semble pas encore venu",
              nextSceneId: 't3c4s4b',
            },
          ],
          background: 'oasis',
        },

        // --- t3c4s4a: Les graines de lumière ---
        {
          id: 't3c4s4a',
          chapterId: 't3c4',
          title: 'Les graines de lumière',
          narration: `Nawfel porta la coupe d'argent à ses lèvres et but. L'eau de l'oasis était fraîche, douce, et au moment où elle toucha sa langue, Nawfel sentit quelque chose d'extraordinaire — une vague de chaleur bienfaisante qui se diffusa depuis sa gorge jusqu'aux extrémités de son corps, comme si le soleil l'avait embrassé de l'intérieur. C'était le goût du Tawakkul — non pas une idée abstraite, pas un concept théologique, mais une sensation concrète, physique, une certitude plantée au plus profond de son être : Allah est là, Allah a toujours été là, et Allah ne l'abandonnera jamais.\n\nPuis Nawfel s'agenouilla au bord du bassin et commença à planter les graines. Il les enfonça une par une dans la terre fraîche de l'oasis, ses petites mains patiemment façonnant des petits trous, déposant les graines, les recouvrant de terre. C'était un geste simple, répétitif, presque méditatif, et à chaque graine plantée, Nawfel prononçait une invocation : « Bismillah — Au nom d'Allah. Allahoumma ij'alha hadyatan wa rahmatan — Ô Allah, fais que ce soit une guidance et une miséricorde. »\n\nEt les graines grandirent. Pas immédiatement, pas comme par magie, mais doucement, naturellement, comme les choses vraies grandissent dans le monde réel. Des tiges vertes émergèrent de la terre, puis des feuilles, puis des bourgeons qui s'ouvrirent en fleurs d'une beauté surnaturelle — des fleurs que Nawfel n'avait jamais vues, même dans le jardin magique de son premier voyage. Elles étaient faites de lumière pure, chaque pétale brillant d'un éclat qui ressemblait à celui des étoiles.\n\nSidi Mu'adh contempla la scène avec des yeux brillants de larmes — des larmes de joie, des larmes qu'un homme de son âge et de sa sagesse ne versait que très rarement.\n\n— Tu vois, Nawfel, murmura-t-il, la générosité engendre la lumière. Chaque acte de bonté que tu fais dans le monde réel — chaque smile que tu offres, chaque mot gentil que tu dis, chaque pardon que tu accordes — plante une graine dans ton cœur. Et ces graines, avec le temps, se transforment en un jardin. Non pas un jardin ordinaire, mais un jardin dont les fleurs éclairent non seulement ton propre cœur, mais aussi le cœur de ceux qui t'entourent. Tu es devenu un jardinier de lumière, petit cœur. Et c'est le plus beau métier du monde.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La générosité engendre la lumière. Chaque acte de bonté plante une graine dans ton cœur. Tu es devenu un jardinier de lumière, Nawfel. Et c'est le plus beau métier du monde.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Un jardinier de lumière... J'aime bien ce nom. Je veux être ça pour toujours.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s5',
          background: 'oasis',
        },

        // --- t3c4s4b: Les graines gardées ---
        {
          id: 't3c4s4b',
          chapterId: 't3c4',
          title: 'Les graines gardées',
          narration: `Nawfel regarda la coupe d'argent et le sac de graines dans ses mains, et quelque chose en lui hésita. Pas l'égoïsme — pas encore — mais une prudence, une retenue, une petite voix qui disait : « Attendons. Le moment n'est pas encore venu. Gardons ces choses pour quand nous en aurons vraiment besoin. »\n\nIl glissa la coupe et les graines dans ses poches et regarda Sidi Mu'adh avec un sourire timide. Le shaykh ne dit rien. Il ne gronda pas, ne reprocha pas. Il regarda simplement Nawfel avec ses yeux lumineux, et dans ce regard, Nawfel lut une chose qu'il ne s'attendait pas à voir — non pas de la déception, mais de la patience. La patience infinie d'un maître qui sait que l'élève apprend aussi à travers ses hésitations.\n\n— Les graines sont à toi, Nawfel, dit doucement Sidi Mu'adh. Elles ne périssent pas si tu les gardes un moment. Mais souviens-toi : une graine plantée produit mille graines. Une graine gardée n'en produit qu'une. Le choix t'appartient, et le choix est toujours tien.\n\nL'oasis restait belle autour d'eux, mais Nawfel sentait qu'il manquait quelque chose — une densité, une profusion de fleurs et de parfums qui aurait dû être là et qui ne l'était pas. Les graines dans sa poche pesaient légèrement, et Nawfel se demanda si ce poids n'était pas, en fin de compte, plus lourd que le poids de l'oasis tout entière.\n\nIl promit silencieusement de planter les graines bientôt. Mais bientôt, dans le monde spirituel comme dans le monde réel, est un mot dangereux. Car bientôt se transforme facilement en demain, et demain en un jour lointain, et un jour lointain en jamais. C'est la leçon qu'Al-Bukhl avait essayé de lui enseigner — la leçon de la rétention, du report, du « plus tard » qui ne vient jamais. Nawfel la comprenait maintenant, du moins en partie, et cette compréhension était le début d'une autre transformation.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Une graine plantée produit mille graines. Une graine gardée n'en produit qu'une. Le choix t'appartient toujours, Nawfel.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s5',
          background: 'oasis',
        },

        // --- t3c4s5: Le retour à Chefchaouen ---
        {
          id: 't3c4s5',
          chapterId: 't3c4',
          title: 'Le retour à Chefchaouen',
          narration: `Nawfel ouvrit les yeux et retrouva le monde réel. La lumière de l'aube filtrait à travers les volets en bois de la chambre familiale, dessinant des rectangles dorés sur le sol de terre cuite. Le chant du muezzin montait de la petite mosquée du quartier, appelant les fidèles à la prière du Fajr — la prière de l'aube, la plus pure de toutes les prières, celle qui est faite dans le silence du monde endormi.\n\nNawfel se leva lentement, ses muscles engourdis par le sommeil mais son esprit vif et alerte comme jamais. Il regarda ses frères — Souhayl, endormi dans le lit voisin, son visage paisible de grand frère protecteur, et Wassim, blotti contre lui, son doudou serré contre sa poitrine, ses boucles d'enfant dispersées sur l'oreiller. Nawfel sentit monter en lui une vague d'amour si intense qu'il eut envie de pleurer.\n\nIl se souvint des graines. Les graines de la générosité que Sidi Mu'adh lui avait données. Elles n'étaient pas physiques — elles n'existaient que dans son cœur, dans son monde intérieur. Mais leur pouvoir était réel. Et Nawfel savait exactement quelle était la première graine qu'il allait planter.\n\nIl sortit du lit sans bruit, marcha jusqu'au lit de Wassim, et déposa un baiser sur le front de son petit frère. Puis il fit de même pour Souhayl. Deux baisers silencieux, deux actes de bonté, deux graines plantées dans le jardin de son cœur.\n\nEn bas, dans la cuisine, il entendit sa mère Aziza qui préparait le petit-déjeuner. Le son de ses pas légers, le clapotis de l'eau, le frémissement de la théière — tous ces bruits familiers lui semblaient plus beaux que n'importe quelle musique. Nawfel descendit l'escalier, le cœur léger, et quand il entra dans la cuisine, il fit quelque chose qu'il n'avait jamais fait auparavant : il s'approcha d'Aziza, la serra dans ses bras et murmura :\n\n— Maman... je t'aime. Merci pour tout. Pour le pain que tu partages. Pour le sourire que tu donnes. Pour tout.\n\nAziza se figea un instant, surprise, puis ses yeux s'illuminèrent de larmes de joie. Elle posa ses mains sur les épaules de Nawfel, le regarda longuement, et sourit — un sourire qui contenait tout l'amour d'une mère, toute la sagesse des siècles, toute la bénédiction d'Allah.\n\n— Mon cœur, dit-elle doucement, tu es béni. Alhamdulillah. Va faire tes ablutions, le Fajr va commencer. Et sache que ta mère est fière de toi. Plus que tu ne pourrais l'imaginer.\n\nDehors, les murs de Chefchaouen blanchissaient sous les premiers rayons du soleil, et le bleu des ruelles semblait plus profond, plus lumineux que jamais — comme si le village tout entier avait bu à l'oasis du cœur de Nawfel et s'en trouvait transformé.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon cœur, tu es béni. Alhamdulillah. Va faire tes ablutions, le Fajr va commencer. Ta mère est fière de toi.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Maman... je t'aime. Merci pour tout.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't3c4s6',
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: "L'Ibtila' — L'épreuve comme bénédiction",
            content:
              "Le voyage à travers le désert de l'épreuve a enseigné à Nawfel que la sécheresse spirituelle est une étape nécessaire du cheminement. Les grands maîtres du Tassawuf, comme Imam Al-Ghazali, enseignent que les épreuves sont des cadeaux déguisés — elles dépouillent le cœur de ses attachements illusoires et le ramènent à l'essentiel : la confiance en Allah, la patience dans l'adversité, la générosité malgré le manque, et l'humilité face à la grandeur divine.",
            quote: 'وبشر الصابرين * الذين إذا أصابتهم مصيبة قالوا إنا لله وإنا إليه راجعون',
            source: 'Coran, Sourate Al-Baqarah (2:155-156)',
          },
        },

        // --- t3c4s6: La prière de l'aube ---
        {
          id: 't3c4s6',
          chapterId: 't3c4',
          title: 'La prière de l\'aube',
          narration: `Nawfel fit ses ablutions avec une attention qu'il n'avait jamais connue auparavant. Chaque goutte d'eau sur ses mains, sur son visage, sur ses bras, lui semblait porter un message — un message de purification, de renouveau, de renaissance. L'eau coulait sur sa peau comme une promesse, comme si chaque ablution lavait non seulement son corps mais aussi les traces de la sécheresse, de l'avarice et de la colère que le désert avait laissées en lui.\n\nIl se dirigea vers la petite mosquée du quartier, dont le minaret en briques rouges se dressait contre un ciel qui passait du violet à l'or. Les ruelles de Chefchaouen étaient désertes à cette heure — seuls les chats et les premiers oiseaux les occupaient, et les murs bleus et blancs resplendissaient d'une pureté qui prenait le souffle.\n\nÀ l'intérieur de la mosquée, quelques fidèles étaient déjà en prière. Le sol était recouvert de tapis verts et rouges, et l'air sentait le bois, l'encens et cette odeur particulière des lieux saints — un mélange de tranquillité et de sacralité que l'on ne trouve nulle part ailleurs. Nawfel prit place dans le dernier rang, conformément à la tradition, et commença sa prière.\n\nEt c'est là que ça arriva.\n\nQuand Nawfel se prosterna — quand son front toucha le sol dans le Soujud, le plus humble de toutes les postures de la prière — il sentit quelque chose qu'il n'avait jamais ressenti auparavant. Une douceur ineffable, une paix qui dépassait toute compréhension, une présence divine qui l'entourait comme un manteau de lumière. Les mots de sa prière — « Subhana Rabbiyal-A'la — Gloire à mon Seigneur le Très-Haut » — coulaient de ses lèvres comme du miel, et Nawfel sentit que chaque syllabe montait vers le ciel et revenait à lui sous forme de bénédiction.\n\nLes larmes coulèrent sur ses joues et tombèrent sur le tapis de prière. Elles n'étaient pas des larmes de tristesse, ni de douleur. C'étaient des larmes de gratitude, des larmes que le cœur verse quand il retrouve son chemin, quand il revient à la maison après un long et difficile voyage.\n\nLa sécheresse était terminée. Le désert avait fleuri. Et Nawfel, prosterné sur le sol de la petite mosquée de Chefchaouen, comprit la leçon ultime que le désert lui avait enseignée : la plus grande des victoires n'est pas celle qu'on remporte sur les autres, mais celle qu'on remporte sur soi-même. Et la plus grande des richesses n'est pas celle qu'on accumule, mais celle qu'on donne.\n\nAlhamdulillah. Louange à Allah. Toujours. Pour tout.`,
          dialogues: [],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          lesson: {
            title: "Sabr, Tawakkul, Tawadu' — Les trois piliers du désert",
            content:
              "Le troisième tome a approfondi trois vertus essentielles : le Sabr (la patience active face à la sécheresse spirituelle), le Tawakkul (la confiance en Allah renforcée par l'épreuve), et le Tawadu' (l'humilité qui transforme la colère en force et l'avarice en générosité). Nawfel a appris que le désert n'est pas un châtiment mais un enseignant, que les monstres intérieurs ne sont pas des ennemis à détruire mais des parties de soi à transformer, et que l'oasis de la paix se trouve au bout du chemin de l'humilité.",
            quote: 'إن مع العسر يسرا',
            source: 'Coran, Sourate Ash-Sharh (94:6) — « Certes, avec la difficulté vient la facilité. »',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Bukhl — البخل (L\'Avarice)', 'Al-Ghadab Al-Akbar — الغضب الأكبر (La Grande Colère)'],
  spiritualLesson:
    "Le troisième tome enseigne que la sécheresse spirituelle (Qabd) est une épreuve d'amour, que l'avarice (Al-Bukhl) se vainc par la générosité (Al-Karam), que la colère (Al-Ghadab) se transforme par la patience (Sabr) et l'humilité (Al-Tawadu'). Nawfel découvre que le désert du cœur n'est pas un lieu de mort mais de purification, et que l'oasis de la paix se gagne non pas en fuyant les monstres intérieurs, mais en les affrontant avec humilité et confiance en Allah. Le badge de ce tome, Al-Tawadu', rappelle que la plus grande des forces est celle de se reconnaître petit devant la grandeur divine.",
};
