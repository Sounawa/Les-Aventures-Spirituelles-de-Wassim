import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome1_souhayl: Tome = {
  id: 'souhayl_tome1',
  number: 1,
  title: 'La Bibliothèque Perdue',
  titleAr: 'المكتبة المفقودة',
  subtitle: 'Le chemin du Savoir et de la Sagesse',
  description:
    "Au cœur de la millénaire médina de Fès, un garçon de neuf ans nommé Souhayl El Amrani découvre une entrée cachée vers une bibliothèque engloutie sous la mosquée Qarawiyyin. Guidé par le vieux sage Sidi Ibrahim, il apprend que la quête du savoir est un devoir sacré en Islam, que chaque livre est un trésor et que la vraie sagesse commence par le respect de ceux qui enseignent. Entre les récits d'Imam Malik et de Fatima Al-Fihri, Souhayl entame un voyage extraordinaire à travers la mémoire du monde islamique.",
  theme: "Al-'Ilm wa al-Hikma — Le Savoir et la Sagesse",
  coverImage: '/images/souhayl-tome1-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Mur qui Parle (الجدار الذي يتكلم)
    // ============================================================
    {
      id: 'st1c1',
      tomeId: 'souhayl_tome1',
      number: 1,
      title: 'Le Mur qui Parle',
      titleAr: 'الجدار الذي يتكلم',
      scenes: [
        // --- st1c1s1: Un matin à Fès ---
        {
          id: 'st1c1s1',
          chapterId: 'st1c1',
          title: 'Un matin à Fès',
          narration: `Le soleil de Fès se levait doucement au-dessus des toits de terre cuite, peignant les murailles ocre de la médina d'une lumière dorée et tiède qui ressemblait à du miel versé sur du sable fin. Les ruelles étroites, si étroites que deux personnes pouvaient à peine marcher de front, s'animaient peu à peu du bruit de la ville qui s'éveillait. Des marchands ouvraient leurs boutiques en poussant de lourdes portes en bois de cèdre, des ânes chargés de paniers d'oranges et de grenades avançaient d'un pas prudent sur les pavés usés par des siècles de passages, et des femmes voilées de blanc se rendaient à la source publique, leurs jarres en poterie rouge balancées sur la hanche.\n\nSouhayl El Amrani marchait devant son père sur le chemin de la madrasa, son cartable en toile bleue battant doucement contre son dos à chaque pas. Il avait neuf ans, des cheveux noirs et bouclés qui s'échappaient de sous un petit bonnet blanc, et des yeux d'un brun profond qui semblaient toujours observer le monde avec une curiosité insatiable. C'était un garçon silencieux, de ceux qui préfèrent écouter que parler, et dont le regard, même enfantin, portait déjà une gravité inhabituelle.\n\nSon père, Youssef El Amrani, était professeur à la madrasa Bou Inania, où il enseignait la grammaire arabe et les fondements du fiqh aux enfants de la médina. C'était un homme au visage rectangulaire, à la barbe taillée avec soin et au sourire indulgent. Il portait une djellaba beige et des babouches en cuir brun qui claquaient régulièrement sur les pavés. Ses mains, larges et calleuses, avaient l'habitude de tenir la craie et les livres, et Souhayl les trouvait belles — belles comme les mains de ceux qui travaillent avec patience et amour.\n\nEn passant devant la grande place Seffarine, où les dinandiers frappaient le cuivre depuis des générations, Souhayl s'arrêta un instant. Le son des marteaux sur le métal — « clang, clang, clang » — résonnait dans la morning comme le battement d'un cœur géant. Son père posa sa main sur son épaule.\n\n— Écoute, Souhayl. Tu entends ce son ? Chaque coup de marteau est comme une lettre d'un mot, et chaque mot est comme une brique dans un mur. C'est ainsi que l'on construit le savoir — un coup à la fois, une lettre à la fois, avec patience et constance.\n\nSouhayl hocha la tête, mais ses yeux étaient ailleurs. Depuis quelques jours, quelque chose d'étrange se produisait chaque fois qu'il passait près de la Qarawiyyin — la plus ancienne université du monde encore en activité. Il sentait une vibration, un frémissement dans l'air, comme si les pierres anciennes elles-mêmes essayaient de lui murmurer un secret.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Baba, est-ce que tu as déjà ressenti quelque chose de... bizarre... près de la Qarawiyyin ? Comme une voix qui viendrait des murs ?',
              emotion: 'neutral',
            },
            {
              characterId: 'youssef',
              text: "Bizarre, non. Mais sacré, oui. La Qarawiyyin n'est pas qu'un bâtiment, mon fils. C'est un lieu béni depuis plus de mille ans. Les prières, les études, les larmes des savants — tout cela a imprégné ces pierres. Si tu sens quelque chose, c'est peut-être qu'Allah veut te montrer quelque chose. Reste attentif.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s2',
          background: 'street',
        },

        // --- st1c1s2: La porte mystérieuse ---
        {
          id: 'st1c1s2',
          chapterId: 'st1c1',
          title: 'La porte mystérieuse',
          narration: `Après les cours du matin, Souhayl prit un chemin détourné pour rentrer chez lui. Au lieu de suivre la rue principale qui menait au quartier des tanneurs, il tourna dans une ruelle étroite qu'il affectionnait, bordée de murs en torchis couverts de mousse verte et surplombée de fenêtres en bois sculpté d'où pendaient des cages à oiseaux. Le sol était pavé de galets noirs et blancs formant des motifs géométriques complexes, et Souhayl aimait marcher en suivant les lignes avec ses pieds, comme s'il résolvait un puzzle géant.\n\nIl arriva devant le mur ouest de la Qarawiyyin — un mur immense, haut de plusieurs mètres, construit en pierre de taille et en briques roses vieillies par le temps. Des graffiti anciens en arabe, en calligraphie coufique, étaient gravés dans la pierre, et Souhayl s'arrêta pour les lire, comme il le faisait souvent. La plupart étaient des invocations — « Bismillah », « Allahoumma salli ala Muhammad », « Ya 'Alim, arfa'ni 'ilman » — Ô Toi qui sais, élève-moi en savoir.\n\nC'est alors qu'il la vit. À gauche du mur, à moitié cachée par un pot de bégonias rouges et une pile de planches en bois, une petite porte qu'il n'avait jamais remarquée. Elle était en fer forgé, noire, recouverte de rouille, et si étroite qu'un adulte aurait dû se pencher pour passer. Son heurtoir avait la forme d'un livre ouvert, et Souhayl sentit son cœur accélérer en le regardant.\n\nMais ce n'était pas la porte elle-même qui le troubla le plus. C'était ce qu'il entendait. Ou plutôt, ce qu'il croyait entendre. Un murmure, presque imperceptible, qui semblait venir de derrière la porte. Non pas une voix humaine, mais quelque chose de plus ancien, de plus profond — comme le bruit d'un fleuve souterrain, ou le frémissement de milliers de pages que le vent feuillette dans un immense livre. Et à travers le murmure, des mots se détachaient, flous mais distincts : « اقرأ — Lis... اقرأ — Lis... »\n\nSouhayl posa sa main sur la porte. Le fer était froid sous ses doigts, mais il sentit aussi une chaleur très lointaine, comme si un feu brûlait de l'autre côté. Son cœur battait si fort qu'il l'entendait dans ses tempes. Il devait prendre une décision.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Iqra »... Lis... Qui me dit de lire ? Cette porte... personne ne l'a jamais vue ?",
              emotion: 'surprised',
            },
          ],
          choices: [
            {
              id: 'st1c1s2_c1',
              text: "Tirer la porte et entrer — le savoir appelle",
              nextSceneId: 'st1c1s3a',
              badgeId: 'ilm',
              isCorrect: true,
            },
            {
              id: 'st1c1s2_c2',
              text: "Observer la porte plus attentivement avant de décider",
              nextSceneId: 'st1c1s3b',
              badgeId: 'sabr_ilm',
              isCorrect: true,
            },
            {
              id: 'st1c1s2_c3',
              text: "Partir et revenir plus tard avec son père",
              nextSceneId: 'st1c1s3c',
            },
          ],
          background: 'street',
        },

        // --- st1c1s3a: L'appel du savoir ---
        {
          id: 'st1c1s3a',
          chapterId: 'st1c1',
          title: "L'appel du savoir",
          narration: `Souhayl tira la porte. Le fer grinça, rouillé par des siècles de silence, et lentement, difficilement, l'ouverture se fit. Un courant d'air chaud et parfumé s'en échappa — un parfum que Souhayl n'avait jamais senti auparavant, un mélange de parchemin vieilli, d'encens, de cèdre et de quelque chose d'autre qu'il ne pouvait pas nommer mais qui lui fit penser à l'intérieur d'une mosquée au moment de la prière du Fajr, quand le monde entier est plongé dans la paix.\n\nUn escalier descendant apparaît dans la pénombre, taillé dans la roche et pavé de marbre blanc veiné de bleu. Des lampes à huile, accrochées au mur à intervalles réguliers, brillaient d'une lumière dorée qui n'avait pas besoin de flamme — elles irradiaient, comme des lanternes de lumière pure. Souhayl descendit un pas, puis deux, puis trois. Chaque pas l'emmenait plus profondément sous la terre, et avec chaque pas, le murmure grandissait, devenant plus clair, plus distinct.\n\n« اقرأ باسم ربك الذي خلق — Lis au nom de ton Seigneur qui a créé » résonnait le murmure, et Souhayl reconnut avec un frisson les premiers mots de la révélation coranique. Ce n'était pas une voix humaine qui parlait — c'étaient les pierres elles-mêmes, les murs, l'air, tout cet endroit souterrain qui récitait les versets sacrés avec la voix grave et douce de l'éternité.\n\nAu bas de l'escalier, Souhayl déboucha dans une salle circulaire d'une beauté à couper le souffle. Des colonnes de marbre soutenaient un plafond voûté couvert de mosaïques bleues et dorées représentant des étoiles et des constellations. Au centre de la salle, un grand bassin octogonal reflétait la lumière des lampes, et autour du bassin, disposés sur des étagères en bois de cèdre qui montaient jusqu'au plafond, des milliers de livres — des manuscrits anciens reliés en cuir, en soie, en parchemin — dormaient dans un silence sacré.\n\nEt au milieu de tout cela, assis sur un tapis de prière, le dos droit, un livre ouvert sur les genoux, un vieillard attendait.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Subhanallah... C\'est... c\'est une bibliothèque ! Souterraine ! Sous la Qarawiyyin !',
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'inner_world',
          earnedBadgeId: 'ilm',
          lesson: {
            title: "Talab al-'Ilm — La quête du savoir",
            content:
              "En Islam, la quête du savoir est un devoir sacré. Le Prophète ﷺ a dit : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. » Souhayl a entendu le premier mot de la révélation — « Iqra » (Lis) — et a répondu à l'appel. Chaque pas vers le savoir est un pas vers Allah.",
            quote: 'اقرأ باسم ربك الذي خلق',
            source: 'Coran, Sourate Al-Alaq (96:1)',
          },
        },

        // --- st1c1s3b: La porte des patient ---
        {
          id: 'st1c1s3b',
          chapterId: 'st1c1',
          title: 'La porte des patients',
          narration: `Souhayl ne toucha pas à la porte. Il s'assit sur le sol pavé de galets, les jambes croisées, exactement comme il le faisait pendant les prières, et il observa. Il observa le heurtoir en forme de livre ouvert, les motifs de la ferronnerie — des entrelacs arabesques, des fleurs de lys stylisées, une calligraphie à moitié effacée par la rouille qu'il ne pouvait pas déchiffrer. Il observa les murs autour de la porte, cherchant des indices, des marques, quelque chose qui pourrait lui expliquer pourquoi cette porte semblait l'appeler.\n\nLa patience de Souhayl fut récompensée. Au bout de quelques minutes, il remarqua que la lumière du soleil, en frappant le mur à un angle précis, éclairait une inscription gravée dans la pierre au-dessus de la porte. Les lettres arabes, fines et délicates, étaient presque invisibles dans la lumière directe, mais dans ce rayon oblique de fin de matinée, elles brillaient comme de l'or liquide. Souhayl se rapprocha et lut, les lèvres remuant silencieusement :\n\n« من سلك طريقا يلتمس فيه علما سهل الله له طريقا إلى الجنة — Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. »\n\nSon cœur s'arrêta un instant. C'était un hadith — un hadith qu'il avait appris à la madrasa avec son père. Et en dessous, une deuxième ligne, plus petite : « Cette porte ne s'ouvre que pour celui qui cherche avec sincérité. »\n\nSouhayl posa sa main sur la poitrine, sentant son cœur battre sous sa paume. Puis, avec respect, il tira la porte. Elle s'ouvrit sans effort cette fois, sans grincement, comme si elle avait attendu qu'il soit prêt. L'escalier descendant s'ouvrit devant lui, éclairé par des lampes dorées qui brillaient sans flamme.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Celui qui cherche avec sincérité... » Baba m'a toujours dit que le savoir ne se donne qu'à ceux qui le cherchent vraiment. Je vais descendre.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'inner_world',
          earnedBadgeId: 'sabr_ilm',
          lesson: {
            title: 'Sabr fi Talab al-Ilm — La patience dans la quête du savoir',
            content:
              "Le savoir ne se révèle pas à celui qui se précipite. Souhayl a choisi d'observer avant d'agir, et sa patience lui a permis de découvrir l'inscription sacrée au-dessus de la porte. Le Prophète ﷺ a enseigné que celui qui est patient dans l'apprentissage recevra la meilleure des récompenses. L'observation attentive et la réflexion sont les premières étapes du chemin vers le savoir.",
            quote: 'إنما العلم بالتعلم وإنما الحلم بالتحلم',
            source: 'Hadith — Sunan Ad-Darimi',
          },
        },

        // --- st1c1s3c: Le chemin détourné ---
        {
          id: 'st1c1s3c',
          chapterId: 'st1c1',
          title: 'Le chemin détourné',
          narration: `Souhayl recula d'un pas. Son cœur lui disait d'entrer, mais sa raison, celle d'un garçon de neuf ans élevé dans le respect des règles, lui commandait de ne pas. On ne pénètre pas dans des endroits inconnus tout seul. On ne force pas des portes mystérieuses. On demande d'abord. C'est ce que sa mère lui avait toujours enseigné : « La sagesse commence par savoir quand ne pas agir. »\n\nIl s'éloigna de la porte en courant, ses babouches claquant sur les pavés de la ruelle, et ne s'arrêta que lorsqu'il atteignit le bord de la place Seffarine, haletant, le cœur battant. Le son des dinandiers le calma — « clang, clang, clang » — et Souhayl reprit son souffle en regardant les artisans marteler le cuivre avec une régularité parfaite. Chaque coup était identique au précédent. Patience. Précision. Répétition. C'était comme ça qu'on forgeait le savoir — pas en se précipitant, mais en frappant avec méthode.\n\nMais le murmure ne le quitta pas. Pendant toute la journée — à la madrasa, à la maison, au dîner avec sa famille — Souhayl sentit les mots « اقرأ — Lis » résonner dans sa poitrine comme un écho lointain mais insistant. Il ne dormit pas bien cette nuit-là, se tournant et se retournant dans son lit, et quand il ferma les yeux, il voyait la petite porte de fer forgé et son heurtoir en forme de livre ouvert.\n\nLe lendemain matin, il en parla à son père pendant le petit-déjeuner. Youssef posa son thé et regarda son fils avec une attention soudaine et intense qui coupa court à tout le reste de la conversation dans la pièce. Fatima, la mère, arrêta de verser le lait. Même Ines, la petite sœur de six ans, cessa de jouer avec ses cubes de bois pour lever les yeux vers son grand frère.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Baba, j'ai trouvé une porte près de la Qarawiyyin. C'est bizarre... j'entends des mots qui viennent de derrière. Des mots en arabe. Comme « Iqra ». Je crois qu'il y a quelque chose là-dessous.",
              emotion: 'neutral',
            },
            {
              characterId: 'youssef',
              text: "Souhayl... c'est un signe important. Ce que tu décris, cette porte, ce murmure... Mon fils, tu as peut-être été choisi pour quelque chose de grand. Mais la prudence est aussi une vertu. Nous irons ensemble.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s4',
          background: 'home',
        },

        // --- st1c1s4: Sidi Ibrahim ---
        {
          id: 'st1c1s4',
          chapterId: 'st1c1',
          title: 'Sidi Ibrahim',
          narration: `Le vieillard assis au centre de la bibliothèque souterraine leva les yeux de son livre. Son visage était un paysage de rides profondes, comme les sillons d'un champ labouré par des générations de laboureurs. Sa barbe, blanche comme la laine des moutons de l'Atlas, tombait sur sa poitrine et reposait sur une djellaba blanche d'une propreté immaculée malgré l'âge apparent des lieux. Mais ce qui frappa le plus Souhayl, ce furent ses yeux — des yeux d'un vert extraordinaire, d'un vert qui n'existait pas dans la nature, un vert entre l'émeraude et la lumière, comme si on avait capturé la couleur du premier printemps du monde et qu'on l'avait enfermée dans deux prunelles.\n\nLe vieillard sourit, et son sourire illumina la salle entière. Pas une illumination physique — les lampes ne changèrent pas d'intensité — mais une illumination du cœur, une chaleur qui envahit Souhayl de la tête aux pieds et qui le fit se sentir, pour la première fois de sa vie, parfaitement à sa place.\n\n— Bienvenue, Souhayl El Amrani, dit le vieillard d'une voix douce et claire, comme l'eau d'une source qui coule sur des galets lisses. Je suis Sidi Ibrahim. Je t'attendais. Assieds-toi, mon enfant. Tu as beaucoup de questions, et le temps, ici, est un ami.\n\nSouhayl s'assit en tailleur devant le vieillard, exactement comme il le faisait à la madrasa. Ses yeux allaient du visage de Sidi Ibrahim aux milliers de livres qui l'entouraient, et il sentait que chaque livre, chaque manuscrit, chaque page dans cette bibliothèque contenait un univers entier de savoir. Son cœur débordait de questions, mais il se tut, attendant que le sage parle. C'était ce que son père lui avait appris : le savoir commence par le silence.\n\n— Tu as entendu l'appel, continua Sidi Ibrahim en refermant délicatement son livre. L'appel du savoir. C'est le premier signe, Souhayl. Le premier des nombreux signes qui t'accompagneront sur le chemin de la connaissance. Sache que cette bibliothèque n'est pas une bibliothèque ordinaire. Elle existe depuis des siècles, cachée sous la Qarawiyyin, protégée par les prières des savants et la baraka de ceux qui ont consacré leur vie au savoir. Elle ne se révèle qu'à ceux dont le cœur est pur et dont l'intention est sincère.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Bienvenue, Souhayl El Amrani. Je t'attendais. Tu as entendu l'appel du savoir — le premier signe que ton cœur est prêt pour le voyage le plus beau qui soit : celui de la connaissance.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Sidi Ibrahim... comment savez-vous mon nom ? Et cette bibliothèque... elle est sous la Qarawiyyin ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Les pierres de Fès parlent à ceux qui savent écouter. Ton nom m'a été murmuré par ces mêmes pierres il y a bien longtemps. Oui, cette bibliothèque est sous la Qarawiyyin. Elle est le cœur caché du savoir — la racine dont l'arbre visible n'est que la branche. Tout ce qui a été enseigné là-haut est né ici, dans ces manuscrits. Et toi, Souhayl, tu as été choisi pour en être le gardien.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s5',
          background: 'inner_world',
        },

        // --- st1c1s5: Le devoir du savoir ---
        {
          id: 'st1c1s5',
          chapterId: 'st1c1',
          title: 'Le devoir du savoir',
          narration: `Sidi Ibrahim se leva lentement, avec la douceur des vieillards qui ont appris que chaque mouvement est un cadeau, et marcha vers l'une des étagères colossales. Ses doigts effleurèrent les dos des manuscrits comme un musicien effleure les touches d'un piano — avec tendresse, avec respect, avec l'intimité de celui qui connaît chaque livre par cœur. Il en retira un, petit, relié en cuir vert émeraude, et le posa devant Souhayl.\n\n— Ouvre-le, dit-il doucement.\n\nSouhayl prit le manuscrit entre ses mains. Il était plus léger qu'il ne l'avait imaginé, et sa couverture était tiède, comme si le livre était vivant. Il l'ouvrit avec précaution, craignant de abîmer les pages jaunies par le temps. L'intérieur était rédigé en calligraphie naskh d'une élégance extraordinaire — chaque lettre était un petit chef-d'œuvre, tracé avec une encre noire qui n'avait pas pâli malgré les siècles.\n\n— Lis la première ligne, dit Sidi Ibrahim.\n\nSouhayl déchiffra lentement, de ses yeux d'enfant de neuf ans : « طلب العلم فريضة على كل مسلم — La recherche du savoir est une obligation pour chaque musulman. »\n\nSidi Ibrahim acquiesça, ses yeux verts brillant d'une lueur qui ressemblait à la fierté d'un grand-père voyant son petit-fils faire ses premiers pas.\n\n— C'est un hadith du Prophète ﷺ, Souhayl. Le tout premier hadith que tu dois graver dans ton cœur. Le savoir n'est pas un luxe, pas un passe-temps, pas une activité optionnelle. C'est une obligation — un farida. Allah a créé l'être humain et lui a donné l'intelligence, et avec cette intelligence vient le devoir de la nourrir. Un esprit qui ne se nourrit pas de savoir se flétrit comme une plante privée d'eau. Et un cœur qui ne comprend pas la création d'Allah ne peut pas vraiment L'aimer.\n\nSouhayl sentit chaque mot se déposer dans son cœur comme une graine dans une terre fertile. Le concept était simple — le savoir est obligatoire — mais sa portée immense. Ce n'était pas seulement les mathématiques ou l'arabe qu'il devait apprendre. C'était tout. Le savoir de la foi, le savoir du monde, le savoir du cœur. Tout était relié, et chaque connaissance le rapprochait un peu plus de Celui qui est Al-'Alim — le Savant par excellence.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Une obligation... Baba m'a toujours dit d'étudier sérieusement, mais je ne savais pas que c'était aussi important que la prière...",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "C'est aussi important, mon enfant. Le Prophète ﷺ a dit : « Les anges étendent leurs ailes par satisfaction pour celui qui cherche le savoir. » Quand tu ouvres un livre pour apprendre, Souhayl, les anges sont avec toi. Chaque page que tu tournes est une prière. Chaque mot que tu comprends est une prosternation. C'est cela, la grandeur du savoir en Islam.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s6',
          background: 'inner_world',
          lesson: {
            title: "Faridat al-'Ilm — L'obligation du savoir",
            content:
              "Le Prophète ﷺ a dit : « La recherche du savoir est une obligation pour chaque musulman. » En Islam, le savoir n'est pas un simple passe-temps — c'est un devoir religieux. L'intelligence est un don d'Allah, et ne pas la nourrir serait comme recevoir un trésor et le cacher sous terre. Quiconque étudie avec sincérité est accompagné par les anges.",
            quote: 'طلب العلم فريضة على كل مسلم',
            source: 'Hadith — Sunan Ibn Majah',
          },
        },

        // --- st1c1s6: Le retour à la maison ---
        {
          id: 'st1c1s6',
          chapterId: 'st1c1',
          title: 'Le retour à la maison',
          narration: `Souhayl remonta l'escalier de la bibliothèque souterraine avec la sensation de porter un secret immense dont le poids, au lieu de l'écraser, le faisait se sentir plus léger. La porte de fer se referma derrière lui avec un clic doux, presque affectueux, et le mur ouest de la Qarawiyyin retrouva son apparence banale — un vieux mur couvert de mousse, devant lequel personne ne s'arrêtait jamais.\n\nEn marchant vers la maison, Souhayl voyait la médina avec des yeux nouveaux. Les ruelles qu'il parcourait chaque jour lui semblaient soudain pleines de mystères qu'il n'avait jamais remarqués. Les inscriptions arabes gravées au-dessus des portes — « Masha'Allah », « Alhamdulillah », « Ya Hafiz » — n'étaient plus de simples décorations. C'étaient des messages, des enseignements, des fragments de savoir gravés dans la pierre par des générations de croyants. Chaque gravure était un livre miniature, et chaque porte était une page d'une histoire millénaire.\n\nQuand il arriva chez lui, la maison sentait le pain au levain et le tajine de poulet aux olives que sa mère préparait pour le dîner. Ines courut à sa rencontre dans le couloir, ses petites jambes de six ans tapant sur les carreaux zellige, ses joues rondes rougies par le jeu.\n\nFatima, la mère, était dans la cuisine, ses mains habiles tournant les semoules pour le couscous. Elle portait un hijab d'un vert olive qui encadrait un visage doux et lumineux, et ses yeux — les mêmes yeux bruns et profonds que Souhayl — se posèrent sur son fils avec cette attention particulière que seules les mères possèdent, cette capacité à voir au-delà des mots et des apparences.\n\n— Tu as l'air différent ce soir, mon grand, dit-elle en posant un plat de salade sur la table. Quelque chose s'est passé. Ton regard brille d'une manière que je ne connais pas encore.\n\nSouhayl hésita. Sidi Ibrahim lui avait dit que la bibliothèque était un secret, un lieu protégé. Mais sa mère... sa mère avait ce don de voir la vérité dans les yeux de ses enfants. Impossible de lui mentir.`,
          dialogues: [
            {
              characterId: 'ines',
              text: "Souhayl ! Souhayl ! Tu étais où ? Moi je t'ai attendu pour jouer aux dames ! Tu m'avais promis !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Désolé Ines, j'ai été retenu. Demain, je te le promets, on joue aux dames après les cours.",
              emotion: 'neutral',
            },
            {
              characterId: 'fatima',
              text: "Mon grand, tu as marché longtemps dans les ruelles ce soir. Ton père m'a dit que tu avais trouvé quelque chose près de la Qarawiyyin. Veux-tu m'en parler ?",
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 'st1c1s6_c1',
              text: "Tout raconter à sa mère — elle mérite sa confiance",
              nextSceneId: 'st1c1s7a',
              badgeId: 'sidq',
              isCorrect: true,
            },
            {
              id: 'st1c1s6_c2',
              text: "Garder le secret pour protéger la bibliothèque",
              nextSceneId: 'st1c1s7b',
            },
          ],
          background: 'home',
        },

        // --- st1c1s7a: La confiance de la mère ---
        {
          id: 'st1c1s7a',
          chapterId: 'st1c1',
          title: 'La confiance de la mère',
          narration: `Souhayl s'assit à la table de la cuisine, ses mains posées à plat sur le bois ciré, et raconta tout. La porte, le mur, le murmure, les mots « Iqra », l'escalier descendant, la bibliothèque immense avec ses milliers de manuscrits, et surtout, Sidi Ibrahim — le vieillard aux yeux verts dont le sourire illuminait les cœurs. Il parla longuement, avec des mots qui venaient du plus profond de lui, comme un fleuve qui coule naturellement vers la mer.\n\nFatima l'écouta sans l'interrompre une seule fois. Ses mains avaient cessé de préparer la cuisine et elle tenait une cuillère en bois immobile au-dessus du couscous, oubliant complètement le dîner. Ines, assise sur un tabouret près du comptoir, écoutait avec de grands yeux émerveillés, sa bouche grande ouverte, ses cubes de bois oubliés à ses pieds.\n\nQuand Souhayl eut fini, un long silence s'installa dans la cuisine. On n'entendait que le chant du canari dans sa cage près de la fenêtre et le bruit lointain du muezzin qui appelait à la prière du Maghrib depuis le minaret le plus proche.\n\nFatima posa sa cuillère et s'essuya les mains dans son tablier. Puis elle fit quelque chose qui surprit Souhayl — elle sourit. Pas un sourire de surprise ou d'inquiétude, mais un sourire de reconnaissance profonde, comme si elle venait de recevoir une nouvelle qu'elle attendait depuis longtemps.\n\n— Mon fils, dit-elle d'une voix tremblante d'émotion, ton grand-père maternel me parlait souvent d'une bibliothèque cachée sous la Qarawiyyin. Il disait qu'elle avait été fondée par les premiers savants de Fès pour protéger les manuscrits des destructions et des guerres, et qu'elle ne se révélait qu'aux cœurs purs. Il disait aussi que, un jour, quelqu'un de notre famille la retrouverait. Je ne pensais pas que ce serait mon propre fils.\n\nDes larmes brillèrent dans les yeux de Fatima, mais c'étaient des larmes de joie, des larmes de gratitude envers Allah qui avait choisi la lignée de leur famille pour ce destin extraordinaire.`,
          dialogues: [
            {
              characterId: 'fatima',
              text: "Souhayl, tu dois honorer ce cadeau. Le savoir est un amana — un dépôt sacré. Ce que Sidi Ibrahim va t'enseigner, tu devras le préserver, le transmettre, le vivre chaque jour. Promets-moi une chose : ne recherche jamais le savoir pour te vanter ou pour éclipser les autres. Recherche-le uniquement pour Allah, pour comprendre Sa création et mieux Le servir.",
              emotion: 'wise',
            },
            {
              characterId: 'ines',
              text: "Moi aussi je veux voir la bibliothèque ! Y a-t-il des livres avec des images ? Des histoires de princesses ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Ines, c'est un lieu sacré. Peut-être qu'un jour... Mais pour l'instant, c'est un secret entre moi, Sidi Ibrahim, et Allah. Je te le promets, maman, je chercherai le savoir uniquement pour Allah.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'sidq',
          lesson: {
            title: 'Al-Sidq — La sincérité dans la quête',
            content:
              "Souhayl a choisi de tout dire à sa mère avec honnêteté. L'Islam enseigne que le savoir doit être recherché avec une intention pure — uniquement pour la face d'Allah (l'Ikhlas). La mère de Souhayl, Fatima, lui rappelle que le savoir est un Amana (un dépôt sacré) qui ne doit ni être utilisé pour la vantardise, ni caché par orgueil, mais partagé avec humilité.",
            quote: 'إنما الأعمال بالنيات',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st1c1s7b: Le poids du secret ---
        {
          id: 'st1c1s7b',
          chapterId: 'st1c1',
          title: 'Le poids du secret',
          narration: `Souhayl secoua la tête et dit que tout allait bien, qu'il s'était simplement perdu dans ses pensées en marchant. Mais en prononçant ces mots, il sentit quelque chose d'inconfortable dans sa poitrine — un léger resserrement, comme si une corde invisible se resserrait autour de son cœur. Le secret était là, entre lui et sa mère, et Souhayl réalisa que garder un secret à une personne qui voit la vérité dans vos yeux était aussi futile que d'essayer de cacher le soleil avec sa main.\n\nFatima ne dit rien. Elle posa sa main sur la joue de Souhayl, le regarda longuement, et lui sourit — un sourire qui disait clairement : « Je sais que tu me caches quelque chose, et c'est ton droit. Quand tu seras prêt, tu me le diras. »\n\nInes, qui avait observé la scène avec l'intelligence intuitive des enfants, tira la manche de Souhayl.\n\n— Frérot, dit-elle à voix basse, tu mens. Je le sais parce que tes oreilles deviennent rouges quand tu mens. Maman aussi le sait. Mais c'est OK. Je vais garder ton secret aussi.\n\nSouhayl regarda sa petite sœur, stupéfait par sa perspicacité. Puis il regarda sa mère, qui retournait à sa cuisine avec un calme apparent, et il comprit qu'il y a des secrets qu'on garde non pas par méfiance, mais par prudence — et que les personnes qui nous aiment véritablement respectent cette prudence sans la juger.\n\nCe soir-là, Souhayl ne dormit pas. Il repensa aux paroles de Sidi Ibrahim, au hadith sur l'obligation du savoir, et il murmura dans l'obscurité de sa chambre : « Allahoumma arfa'ni 'ilman — Ô Allah, augmente-moi en savoir. » Les mots flottèrent dans l'air comme des lucioles, et Souhayl sentit qu'ils étaient entendus.`,
          dialogues: [
            {
              characterId: 'ines',
              text: "Frérot, tes oreilles sont rouges. Tu mens à maman. Mais moi je ne dirai rien. C'est notre secret, d'accord ?",
              emotion: 'neutral',
            },
            {
              characterId: 'souhayl',
              text: "Merci, Ines. Tu es plus sage que tu ne le crois. Un jour, je t'expliquerai tout.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 'st1c1s7a',
          background: 'home',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — La Salle des Manuscrits (قاعة المخطوطات)
    // ============================================================
    {
      id: 'st1c2',
      tomeId: 'souhayl_tome1',
      number: 2,
      title: 'La Salle des Manuscrits',
      titleAr: 'قاعة المخطوطات',
      scenes: [
        // --- st1c2s1: Le deuxième visite ---
        {
          id: 'st1c2s1',
          chapterId: 'st1c2',
          title: 'Le deuxième visite',
          narration: `Trois jours s'étaient écoulés depuis la découverte de la bibliothèque, et pour Souhayl, chaque journée avait été une épreuve de patience. Il allait à la madrasa le matin, faisait ses devoirs l'après-midi, aidait sa mère à la maison le soir, et dans tout cela, son esprit n'était jamais tout à fait là — il était toujours sous la Qarawiyyin, dans cette salle circulaire baignée de lumière dorée, entouré de milliers de manuscrits qui attendaient d'être lus.\n\nLe quatrième jour, après la prière du Asr, Souhayl prit le chemin de la bibliothèque. Son cœur battait d'excitation et de crainte mêlées — l'excitation de retrouver ce lieu magique, la crainte de découvrir que tout cela n'avait été qu'un rêve, un mirage de son imagination d'enfant.\n\nLa porte de fer était toujours là, à moitié cachée par le pot de bégonias. Souhayl la tira, et elle s'ouvrit avec la même facilité que la première fois, comme si elle l'avait attendu. L'escalier descendant s'illumina au passage de ses pieds, et le murmure sacré reprit — « اقرأ — Lis... اقرأ — Lis... »\n\nSidi Ibrahim était exactement à la même place, assis sur son tapis de prière, un autre livre ouvert sur ses genoux. Mais cette fois, un deuxième tapis était disposé à côté de lui, et sur ce tapis, un coussin brodé de motifs arabesques et une petite table basse en bois d'olivier sur laquelle étaient posés un encrier, un calame (un roseau taillé pour écrire), et un carnet vierge en papier de soie.\n\n— Tu es revenu, dit Sidi Ibrahim avec ce sourire qui éclairait les cœurs. Je savais que tu reviendrais. Le savoir, Souhayl, est comme l'eau d'une source — il ne cesse de couler, et celui qui a soif revient toujours. Assieds-toi. Aujourd'hui commence ton véritable apprentissage.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le savoir est comme l'eau d'une source — il ne cesse de couler, et celui qui a soif revient toujours. Souhayl, aujourd'hui commence ton véritable apprentissage. Je vais te raconter l'histoire d'un homme qui a changé le cours du savoir islamique pour toujours.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Qui, Sidi ? Quelqu'un de Fès ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Non. De Médine. Un homme dont le nom est prononcé dans chaque cercle d'étude du monde musulman depuis plus de mille deux cents ans. L'Imam Malik Ibn Anas.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c2s2',
          background: 'inner_world',
        },

        // --- st1c2s2: L'histoire d'Imam Malik ---
        {
          id: 'st1c2s2',
          chapterId: 'st1c2',
          title: "L'histoire d'Imam Malik",
          narration: `Sidi Ibrahim ferma son livre et regarda Souhayl avec une intensité qui força le garçon à se redresser sur son coussin, comme si le regard du sage était une main invisible qui le soulevait.\n\n— Écoute bien, Souhayl, car ce que je vais te raconter est l'un des récits les plus importants de toute l'histoire du savoir en Islam. Malik Ibn Anas est né à Médine vers l'an 93 de l'Hégire — il y a plus de douze siècles — dans une famille d'apprentis savants. Médine, à cette époque, n'était pas la grande métropole qu'elle est aujourd'hui. C'était une ville paisible, ombragée de palmiers, où les Compagnons du Prophète ﷺ vivaient encore, et où les récits du Messager d'Allah circulaient de bouche en bouche comme l'eau d'une rivière souterraine.\n\n— Imagine, Souhayl, continua Sidi Ibrahim en levant un doigt, un garçon de ton âge qui ne passe pas sa journée à jouer, mais qui va chaque matin à la mosquée du Prophète ﷺ pour s'asseoir aux pieds des plus grands savants de son temps. Malik apprit le Coran par cœur avant l'âge de dix ans. Il mémorisa des milliers de hadiths. Il étudia le fiqh — la jurisprudence islamique — avec une dévotion que ses professeurs eux-mêmes trouvaient extraordinaire. Mais ce qui fit de Malik un géant du savoir, ce n'était pas seulement son intelligence — c'était sa méthode.\n\nSidi Ibrahim se leva et marcha vers l'une des étagères. Il en retira un manuscrit relié en cuir noir, dont les pages étaient couvertes d'une calligraphie dense et serrée. Il le posa devant Souhayl.\n\n— Regarde, dit-il. C'est une copie du Muwatta de l'Imam Malik — le tout premier livre de hadiths compilé dans l'histoire de l'Islam. Malik ne s'est pas contenté d'apprendre par cœur. Il a voyagé, posé des questions, vérifié chaque récit, chaque chaîne de transmission, chaque détail. Il passait parfois des années à vérifier un seul hadith avant de l'accepter dans son livre. Tu comprends, Souhayl ? La précision du savoir est plus importante que la quantité. Mieux vaut connaître une seule vérité avec certitude que mille informations sans vérification.\n\nSouhayl regarda le manuscrit avec des yeux brillants d'admiration. Les lettres arabes dansaient sur la page comme des cavaliers sur un champ de bataille, organisées, disciplinées, chacune à sa place exacte. Il sentait que ce livre, malgré son âge, vivait encore — que les mots de l'Imam Malik résonnaient à travers les siècles avec la même force qu'au premier jour.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Des années pour vérifier un seul hadith ? Mais c'est si long !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "C'est justement là sa grandeur, Souhayl. L'Imam Malik disait : « Je ne prends pas la parole de quiconque dans la religion, même si je l'estime, tant que je n'ai pas vérifié sa fiabilité. » Le savoir ne se reçoit pas comme un cadeau emballé — il se conquiert avec patience, vérification et humilité. C'est cela qui a fait de son livre un pilier de la connaissance islamique pendant plus de mille ans.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c2s3',
          background: 'inner_world',
        },

        // --- st1c2s3: L'Adab du savoir ---
        {
          id: 'st1c2s3',
          chapterId: 'st1c2',
          title: "L'Adab du savoir",
          narration: `Sidi Ibrahim retourna s'asseoir et croisa ses jambes avec la lenteur cérémonieuse des hommes sages qui ne font rien sans signification. Ses yeux verts se posèrent sur Souhayl avec une douceur qui était aussi une exigence — l'exigence silencieuse de celui qui sait que les leçons les plus importantes sont celles qu'on reçoit en silence.\n\n— Maintenant que tu connais l'Imam Malik, dit-il, je dois te parler de quelque chose d'aussi important que le savoir lui-même : l'Adab. L'Adab, Souhayl, est un mot arabe qu'on traduit souvent par « politesse » ou « bienséance », mais sa signification est bien plus profonde. L'Adab, c'est l'étiquette du savoir — la manière dont un élève doit se comporter envers son maître, envers le savoir lui-même, et envers tous ceux qui partagent ce chemin.\n\nSidi Ibrahim leva un doigt délicat, ridé par l'âge mais parfait dans sa gestuelle.\n\n— Premier Adab : le respect du maître. Quand tu apprends auprès de quelqu'un, Souhayl, cet homme est comme ton père en savoir. Tu ne le contestes pas avec insolence, tu ne parles pas quand il parle, et tu ne tournes jamais le dos à lui. L'Imam Malik disait : « Je ne me suis jamais permis de marcher devant mon maître, ni de parler avant lui, ni de poser une question tant qu'il n'avait pas fini d'expliquer. »\n\nIl leva un deuxième doigt.\n\n— Deuxième Adab : la sincérité dans l'apprentissage. Tu étudies pour comprendre et pour appliquer, pas pour impressionner. Si tu apprends une sourate du Coran, apprends-la pour qu'elle transforme ton cœur, pas pour que les gens disent « Masha'Allah, Souhayl récite bien. »\n\nUn troisième doigt.\n\n— Troisième Adab : la gratitude envers ceux qui t'enseignent. Chaque chose que tu apprends, quelqu'un a pris le temps de te la transmettre. Ton père, ta mère, tes professeurs à la madrasa — ils sont des cadeaux d'Allah. Ne les oublie jamais.\n\nSouhayl écoutait, fasciné. Chaque mot de Sidi Ibrahim semblait ouvrir une porte dans son esprit, et derrière chaque porte, il y avait une pièce qu'il ne savait pas exister — une pièce remplie de lumière et de compréhension.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Ibrahim, est-ce que Baba était un bon élève quand il était jeune ?",
              emotion: 'happy',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Ton père ? Oh, Souhayl, ton père était l'un des meilleurs élèves que j'aie jamais vus. Il avait la même soif de savoir que toi, mais il avait aussi quelque chose de rare : il posait toujours des questions. Pas des questions pour se montrer intelligent, non. Des questions nées d'une vraie curiosité, d'un désir sincère de comprendre. C'est la marque d'un savant véritable, Souhayl — celui qui pose les bonnes questions avec humilité.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st1c2s3_c1',
              text: "Poser une question à Sidi Ibrahim pour mieux comprendre",
              nextSceneId: 'st1c2s4a',
              badgeId: 'adab',
              isCorrect: true,
            },
            {
              id: 'st1c2s3_c2',
              text: "Écouter en silence et méditer les enseignements",
              nextSceneId: 'st1c2s4b',
            },
          ],
          background: 'inner_world',
        },

        // --- st1c2s4a: La question du disciple ---
        {
          id: 'st1c2s4a',
          chapterId: 'st1c2',
          title: 'La question du disciple',
          narration: `Souhayl leva la main, comme il le faisait à la madrasa, puis retint son geste — ce n'était pas une salle de classe, c'était une bibliothèque millénaire, et les règles ici étaient différentes. Il prit une inspiration et parla avec le respect que son père lui avait appris.\n\n— Sidi Ibrahim, comment savoir si une chose qu'on apprend est vraie ou fausse ? Il y a tellement de livres ici... Est-ce que tout ce qui est écrit est vrai ?\n\nSidi Ibrahim écarquilla ses yeux verts, et pour la première fois depuis que Souhayl l'avait rencontré, il rit — un rire doux, comme le son d'un cours d'eau sur des pierres lisses. Ce n'était pas un rire de moquerie, mais un rire de joie pure, la joie du maître qui voit son élève poser sa première vraie question.\n\n— Ah, Souhayl ! s'exclama-t-il en tapotant le genou du garçon avec affection. Voilà la question qu'un vrai chercheur de savoir doit poser ! Cette question est plus précieuse que mille réponses non sollicitées. Écoute bien, car je vais te révéler l'un des secrets les plus importants de toute la tradition islamique : l'Isnad.\n\nLe vieillard se leva et, de sa main ridée mais d'une précision chirurgicale, traça dans l'air une ligne imaginaire.\n\n— L'Isnad, c'est la chaîne de transmission. Imagine que tu apprennes un hadith. Tu ne le prends pas dans un livre et tu ne le répètes pas aveuglément. Tu vérifies : qui a écrit ce livre ? Qui l'a enseigné à l'auteur ? Qui l'a enseigné à ce dernier ? Et ainsi de suite, de maître en maître, jusqu'à la source première — le Prophète ﷺ lui-même, ou un Compagnon qui l'a entendu de sa propre bouche. C'est comme une chaîne de montagne : chaque maillon doit être solide pour que toute la chaîne tienne. Si un seul maillon est faible — un rapporteur douteux, une mémoire défaillante, un mensonge — toute la chaîne se brise.\n\nSouhayl écarquilla les yeux. Le concept était brillant dans sa simplicité, et en même temps vertigineux dans ses implications. Chaque savant, depuis des siècles, devait vérifier chaque mot, chaque récit, avec une rigueur scientifique qui n'avait rien à envier aux méthodes des chercheurs modernes.\n\n— C'est pour cela, continua Sidi Ibrahim, que les musulmans ont été les pionniers de la méthode scientifique. L'Isnad, mon enfant, est la première méthode de vérification de l'information de l'histoire de l'humanité. Bien avant que l'Occident n'invente le « peer review » — l'évaluation par les pairs — les savants musulmans vérifiaient chaque information, chaque récit, avec un système si rigoureux qu'il n'a jamais été égalé.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "C'est incroyable ! Donc chaque hadith a une sorte de... de fichier de vérification, avec des noms et des dates et des témoins ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Exactement, Souhayl ! C'est exactement cela. Chaque hadith a sa chaîne — son Isnad — et des générations de savants ont consacré leur vie à vérifier ces chaînes. Des hommes comme Al-Bukhari, Muslim, Ibn Hibban, et des milliers d'autres, ont passé des dizaines d'années à voyager dans le monde musulman pour interviewer les rapporteurs de hadiths, vérifier leur mémoire, leur honnêteté, leur piété. C'est un héritage qui n'a pas d'équivalent dans l'histoire de la connaissance humaine.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c2s5',
          background: 'inner_world',
          earnedBadgeId: 'adab',
          lesson: {
            title: "Al-Adab wa al-Isnad — L'étiquette et la chaîne du savoir",
            content:
              "L'Adab (الأدب) est le code de conduite du chercheur de savoir : respect du maître, sincérité dans l'apprentissage, gratitude envers ceux qui enseignent. L'Isnad (الإسناد) est la chaîne de transmission qui garantit l'authenticité de chaque enseignement. Ensemble, ils forment les piliers de la méthodologie scientifique islamique — la plus ancienne méthode de vérification de l'information de l'histoire humaine.",
            quote: 'إنما العلم بالتعلم وإنما الحلم بالتحلم',
            source: 'Hadith — Sunan Ad-Darimi',
          },
        },

        // --- st1c2s4b: Le silence du disciple ---
        {
          id: 'st1c2s4b',
          chapterId: 'st1c2',
          title: 'Le silence du disciple',
          narration: `Souhayl ne posa pas de question. Il resta assis, immobile, les yeux mi-clos, laissant les paroles de Sidi Ibrahim se déposer en lui comme la neige se dépose sur un champ en hiver — lentement, silencieusement, couvrant tout d'un manteau blanc et paisible. Chaque mot du sage trouvait sa place dans son esprit, s'articulant avec les connaissances qu'il avait déjà acquises à la madrasa, construisant un édifice de compréhension dont il n'avait pas mesuré la profondeur.\n\nSidi Ibrahim observa le jeune garçon avec une approbation silencieuse. Le silence de Souhayl n'était pas le silence de l'indifférence ou de l'incompréhension — c'était le silence de la méditation, celui d'un esprit qui digère ce qu'il a reçu, comme la terre digère la pluie avant de faire pousser les fleurs.\n\n— Tu as choisi le silence, dit finalement le sage avec un sourire tendre. C'est aussi une forme de sagesse. L'Imam Al-Shafi'i, un autre grand savant de notre tradition, disait : « Celui qui ne se tait pas pendant la leçon n'entend rien. » Le silence, Souhayl, n'est pas un vide — c'est un espace. Un espace où la compréhension naît et grandit.\n\nLe sage se leva et marcha vers l'étagère. Il en retira un manuscrit relié en soie bleue, plus petit que les autres, et le posa devant Souhayl.\n\n— Puisque tu sais écouter avec patience, je vais te confier quelque chose. Ce manuscrit contient les enseignements de l'Imam Malik sur l'Isnad — la chaîne de transmission du savoir. Lis-le quand tu seras prêt. Mais souviens-toi : le savoir ne se hâte pas, comme un arbre ne se hâte pas de grandir. Chaque chose a son moment.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "L'Imam Al-Shafi'i disait : « Celui qui ne se tait pas pendant la leçon n'entend rien. » Ton silence, Souhayl, est le silence d'un esprit qui comprend que le savoir a besoin de temps pour s'enraciner.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c2s5',
          background: 'inner_world',
        },

        // --- st1c2s5: La première lecture ---
        {
          id: 'st1c2s5',
          chapterId: 'st1c2',
          title: 'La première lecture',
          narration: `Souhayl tenait le manuscrit entre ses mains comme on tient un oiseau blessé — avec douceur, avec crainte de le faire du mal, avec le désir intense de le voir s'envoler. Ses doigts tremblaient légèrement quand il en toucha la couverture de soie bleue, et il sentit, comme la première fois, que le livre était tiède, vivant, comme s'il avait un cœur qui battait sous ses pages anciennes.\n\nIl l'ouvrit avec précaution, et les premières lignes apparurent dans une calligraphie d'une clarté remarquable. L'encre noire sur le papier de soie crémeux semblait aussi fraîche que si elle avait été tracée la veille, et Souhayl lut, à voix haute, transformant chaque mot en un bijou sonore :\n\n« بسم الله الرحمن الرحيم — Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. De la part du serviteur nécessiteux envers son Seigneur, Malik Ibn Anas, à son élève bien-aimé : Sache que le savoir est un héritage des Prophètes, et que les Prophètes n'ont laissé ni dinar ni dirham — ils n'ont laissé que le savoir. Celui qui le prend a pris une part généreuse. »\n\nSouhayl s'arrêta. Ses yeux se mouillèrent. Il ne savait pas pourquoi ces mots précis lui faisaient tant d'effet — il avait lu des milliers de phrases dans sa vie d'élève, des poèmes, des hadiths, des versets coraniques — mais celles-ci portaient en elles un poids particulier, comme si l'Imam Malik lui-même, à travers les siècles, lui parlait directement, de maître à élève.\n\n— Les Prophètes n'ont laissé ni dinar ni dirham... murmura Souhayl. Ils n'ont laissé que le savoir...\n\nSidi Ibrahim acquiesça, ses yeux verts brillant d'une lueur humide.\n\n— Tu commences à comprendre, Souhayl. L'argent se dépense et finit par disparaître. Les biens se détériorent et finissent par se casser. Mais le savoir ? Le savoir grandit quand tu le partages. Plus tu donnes du savoir, plus tu en reçois. C'est le seul trésor qui augmente quand on le dépense. C'est pour cela que les Prophètes ﷺ n'ont pas laissé de richesses matérielles — ils ont laissé le seul trésor qui ne meurt jamais : la connaissance d'Allah et de Sa création.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Ibrahim... est-ce que moi aussi, un jour, je pourrai être un savant ? Un vrai ? Comme l'Imam Malik ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Souhayl, chaque savant a commencé exactement comme toi — un enfant avec un cœur curieux et une question dans les yeux. L'Imam Malik avait neuf ans quand il a commencé ses études. Tu as neuf ans. Le reste dépend d'une seule chose : ta persévérance. Le savant n'est pas celui qui sait tout — le savant est celui qui ne cesse jamais d'apprendre.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c2s6',
          background: 'inner_world',
          lesson: {
            title: "Ilm al-Anbiya' — L'héritage des Prophètes",
            content:
              "L'Imam Malik a dit : « Les Prophètes n'ont laissé ni dinar ni dirham — ils n'ont laissé que le savoir. » Le savoir est le seul trésor qui augmente quand on le partage. Contrairement à l'argent qui se dépense et disparaît, la connaissance grandit à mesure qu'on la transmet. C'est pour cela que les Prophètes ont fait du savoir leur héritage le plus précieux.",
            quote: 'إن الأنبياء لم يورثوا دينارا ولا درهما إنما ورثوا العلم',
            source: 'Hadith — Sunan Abi Dawud et Tirmidhi',
          },
        },

        // --- st1c2s6: Le serment du bibliothécaire ---
        {
          id: 'st1c2s6',
          chapterId: 'st1c2',
          title: 'Le serment du bibliothécaire',
          narration: `Quand Souhayl remonta à la surface ce soir-là, la médina de Fès s'embrasait des couleurs du crépuscule. Le ciel à l'ouest était un tableau de lumières — orange, rose, pourpre et or — qui se reflétait dans les murs ocre de la vieille ville comme si les pierres elles-mêmes étaient en feu. Les minarets de la ville lancèrent l'appel à la prière du Maghrib, et leurs voix se superposèrent dans une harmonie parfaite qui faisait vibrer l'air comme les cordes d'un oud géant.\n\nSouhayl s'arrêta dans la ruelle et ferma les yeux, laissant la calligraphie sonore de l'adhan l'envelopper. Il sentait chaque mot se déposer dans son cœur — « Allahu Akbar — Allah est le plus Grand », « Ashhadu an la ilaha illa Allah — Je témoigne qu'il n'y a de divinité qu'Allah », « Hayya 'ala as-salah — Venez à la prière ». Et au milieu de cette beauté, Souhayl fit une prière silencieuse, née du plus profond de lui :\n\n— Allahoumma, fais de moi un de ceux qui cherchent Ton savoir avec sincérité. Fais de moi un de ceux qui comprennent que chaque connaissance vient de Toi. Et fais de moi un gardien de Ta lumière.\n\nLa prière flotta dans l'air du crépuscule comme une offrande invisible, et Souhayl sentit, avec une certitude qu'il ne pouvait pas expliquer, qu'elle avait été entendue.\n\nEn rentrant chez lui, il trouva son père dans la salle de séjour, assis sur un tapis de prière, le Coran ouvert sur ses genoux, récitant silencieusement. Youssef leva les yeux quand Souhayl entra, et pendant un instant, père et fils se regardèrent en silence — un silence chargé de significations que les mots ne pouvaient pas porter.\n\n— Tu as changé, mon fils, dit Youssef doucement. Quelque chose en toi a grandi aujourd'hui. Je le vois dans tes yeux, dans ta démarche, dans ta manière de respirer. C'est le savoir, Souhayl. C'est la lumière du savoir qui commence à briller en toi. Protège-la. Nourris-la. Et souviens-toi toujours : la plus grande des sciences est de savoir que l'on ne sait rien.\n\nSouhayl s'agenouilla devant son père et, pour la première fois de sa vie, il comprit que le savoir n'était pas seulement dans les livres — il était aussi dans les yeux de ceux qui nous aiment, dans les mots de ceux qui nous enseignent, et dans le silence de ceux qui prient pour nous.`,
          dialogues: [
            {
              characterId: 'youssef',
              text: "La plus grande des sciences est de savoir que l'on ne sait rien. C'est Al-Jahal bi al-Jahal — connaître sa propre ignorance. Quand tu sais que tu ignores, Souhayl, tu deviens capable d'apprendre. C'est le début de toute sagesse.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Baba... merci. Merci de m'avoir appris à lire, à écouter, à poser des questions. Sans toi, je n'aurais jamais trouvé la bibliothèque.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          lesson: {
            title: 'Al-Jahal bi al-Jahal — Connaître sa propre ignorance',
            content:
              "L'Imam Al-Shafi'i a dit : « Celui qui ne se tait pas pendant la leçon n'entend rien. » Et un autre sage a dit : « La plus grande des sciences est de savoir que l'on ne sait rien. » Reconnaître son ignorance est le premier pas vers le savoir véritable. Celui qui croit tout savoir ne peut plus rien apprendre. Souhayl découvre que l'humilité intellectuelle est le fondement de toute connaissance.",
            quote: 'قل رب زدني علما',
            source: 'Coran, Sourate Ta-Ha (20:114)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Lampe du Savoir (مصباح العلم)
    // ============================================================
    {
      id: 'st1c3',
      tomeId: 'souhayl_tome1',
      number: 3,
      title: 'La Lampe du Savoir',
      titleAr: 'مصباح العلم',
      scenes: [
        // --- st1c3s1: Le livre scellé ---
        {
          id: 'st1c3s1',
          chapterId: 'st1c3',
          title: 'Le livre scellé',
          narration: `Une semaine s'était écoulée depuis la dernière visite de Souhayl à la bibliothèque, et chaque jour, il étudiait avec une ferveur nouvelle. À la madrasa, ses professeurs remarquèrent un changement frappant — Souhayl posait des questions plus profondes, lisait avec plus d'attention, et semblait comprendre les concepts les plus abstraits avec une facilité qui surprenait même les plus expérimentés. Son père, Youssef, observait ces changements avec un mélange de fierté et de prudence, sachant que le savoir sans humilité est comme un arbre sans racines.\n\nCe matin-là, quand Souhayl descendit l'escalier de la bibliothèque, il trouva Sidi Ibrahim debout devant une armoire en bois de cèdre qu'il n'avait jamais vue auparavant. L'armoire était haute comme un homme adulte, sculptée de motifs géométriques et floraux d'une complexité extraordinaire, et fermée par un cadenas en laiton dont la clé avait la forme d'une étoile à huit branches.\n\n— Souhayl, dit le sage en se tournant vers lui, il est temps de te révéler le trésor le plus précieux de cette bibliothèque.\n\nSidi Ibrahim fit tourner la clé étoilée dans le cadenas. Un clic métallique résonna dans la salle comme un gong, et les portes de l'armoire s'ouvrirent lentement, révélant un livre unique, posé sur un coussin de velours rouge. Le livre était plus grand que les autres manuscrits, relié en cuir doré incrusté de pierres précieuses — lapis-lazuli, turquoise, cornaline — et fermé par un sceau de cire rouge portant une inscription arabe :\n\n« لا يفتح إلا بالحق — Ne s'ouvre que par la Vérité. »\n\n— Ce livre, dit Sidi Ibrahim d'une voix solennelle, est le Livre de la Sagesse. Il contient les enseignements des plus grands savants de l'Islam — ceux qui n'ont pas seulement accumulé des connaissances, mais qui ont transformé ces connaissances en lumière pour les cœurs. Mais il ne s'ouvre pas par la force. Il ne s'ouvre que pour celui qui a compris la différence entre le savoir et la sagesse.\n\nSouhayl regarda le livre avec des yeux brillants de désir et de crainte mêlés. Il sentait que ce livre était différent des autres — qu'il contenait non pas de l'information, mais de la transformation.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Ce livre contient les enseignements de ceux qui n'ont pas seulement accumulé des connaissances, mais qui les ont transformées en lumière pour les cœurs. Il ne s'ouvre que pour celui qui a compris la différence entre le savoir et la sagesse.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "La différence entre le savoir et la sagesse ? Mais... c'est pas la même chose ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Non, mon enfant. Le savoir, c'est de savoir que la tomate est un fruit. La sagesse, c'est de ne pas la mettre dans un fruit salad. La blague est simple, mais la leçon est profonde. Le savoir sans sagesse est comme une lampe sans huile — elle existe, mais elle n'éclaire personne.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s2',
          background: 'inner_world',
        },

        // --- st1c3s2: Fatima Al-Fihri ---
        {
          id: 'st1c3s2',
          chapterId: 'st1c3',
          title: 'Fatima Al-Fihri',
          narration: `Sidi Ibrahim prit le Livre de la Sagesse avec une révérence qui frôlait la vénération et le posa sur la table entre lui et Souhayl. Puis il commença à parler, et sa voix prit une résonance particulière, comme si les murs de la bibliothèque eux-mêmes l'aidaient à raconter.\n\n— Pour comprendre la différence entre le savoir et la sagesse, je vais te raconter l'histoire d'une femme, Souhayl. Pas un homme — une femme. Et pas n'importe quelle femme : la fondatrice de l'université dans laquelle tu te trouves en ce moment même.\n\nSouhayl écarquilla les yeux.\n\n— La Qarawiyyin a été fondée par une femme ?!\n\n— Oui, dit Sidi Ibrahim avec un sourire fier. Fatima bint Muhammad Al-Fihri. Elle vivait à Fès au neuvième siècle — il y a plus de mille deux cents ans. Son père, Muhammad Al-Fihri, était un marchand très riche originaire de Kairouan, en Tunisie. Quand il mourut, il laissa à ses deux filles, Fatima et sa sœur Maryam, une immense fortune.\n\nSidi Ibrahim marqua une pause, laissant le silence de la bibliothèque souligner l'importance de ce qui allait suivre.\n\n— La plupart des gens, Souhayl, si elles recevaient une telle fortune, achèteraient des palais, des terres, des bijoux. Mais Fatima Al-Fihri n'a rien fait de tout cela. Elle a pris tout son argent — chaque dirham, chaque dinar — et elle a fait construire la plus grande mosquée-université du monde musulman. Elle a utilisé sa richesse non pas pour elle-même, mais pour les autres. C'est cela, la sagesse : savoir que la valeur d'une chose ne se mesure pas à ce qu'elle te rapporte, mais à ce qu'elle apporte aux autres.\n\nLa Qarawiyyin, continua le sage, n'était pas seulement une mosquée. C'était un lieu où l'on enseignait le Coran, le fiqh, la grammaire, la médecine, l'astronomie, les mathématiques, la musique et la philosophie. Des savants du monde entier venaient à Fès pour étudier dans cette université — des hommes comme Ibn Khaldoun, Al-Idrissi, Maimonide, et même des savants chrétiens et juifs. Fatima Al-Fihri a créé un lieu où le savoir n'avait ni frontière ni barrière — où chaque esprit assoiffé pouvait venir boire à la source de la connaissance.\n\nSouhayl sentit quelque chose se transformer en lui. L'histoire de cette femme, qui avait vécu il y a plus de mille ans dans la même ville que lui, dans les mêmes ruelles, sous le même ciel, lui faisait l'effet d'un pont invisible jeté à travers les siècles. Il n'était pas seulement un élève dans une bibliothèque — il était l'héritier d'une tradition millénaire.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Elle a donné TOUT son argent ? Même pas un petit peu pour elle ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Tout. C'est cela, l'Ihsan — l'excellence. Fatima Al-Fihri a atteint le plus haut degré de sagesse : préférer les autres à soi-même. Et sa récompense ? Regarde autour de toi, Souhayl. Plus de mille deux cents ans plus tard, son nom est prononcé dans chaque cours d'histoire du monde. Les palais des rois se sont effondrés, mais la Qarawiyyin est toujours debout. Voilà la différence entre le savoir qui remplit les poches et la sagesse qui remplit l'éternité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s3',
          background: 'inner_world',
          lesson: {
            title: 'Hikmat Fatima Al-Fihri — La sagesse de la fondatrice',
            content:
              "Fatima Al-Fihri a fondé l'université Al-Qarawiyyin à Fès au IXe siècle, en utilisant toute sa fortune pour construire un lieu de savoir. Son histoire enseigne que la véritable sagesse ne réside pas dans l'accumulation de richesses pour soi-même, mais dans le service aux autres par le savoir. Les palais des rois s'effondrent, mais les institutions fondées pour la connaissance perdurent à travers les siècles.",
            quote: 'ومن أوتى الحكمة فقد أوتى خيرا كثيرا',
            source: 'Coran, Sourate Al-Baqarah (2:269)',
          },
        },

        // --- st1c3s3: Le miroir du cœur ---
        {
          id: 'st1c3s3',
          chapterId: 'st1c3',
          title: 'Le miroir du cœur',
          narration: `Sidi Ibrahim se leva et, avec la précaution d'un homme qui manipule un univers fragile, il brisa le sceau de cire rouge du Livre de la Sagesse. Le sceau se fendit en deux avec un son cristallin — « tssss » — comme si la cire elle-même était soulagée d'avoir accompli sa mission. Le livre s'ouvrit lentement, de lui-même, page après page, révélant des feuillets d'une blancheur immaculée sur lesquels étaient tracés des caractères arabes d'une beauté surnaturelle.\n\nMais ce n'étaient pas des mots ordinaires. En les regardant de plus près, Souhayl vit que les lettres n'étaient pas noires, mais changeaient de couleur — passant du doré au bleu, du bleu au vert, du vert au violet — comme si chaque mot était un prisme qui décomposait la lumière en toutes les couleurs du savoir.\n\n— Lis la première page, dit Sidi Ibrahim d'une voix qui tremblait légèrement, comme si lui-même, malgré toute sa sagesse, était impressionné par ce qu'il voyait.\n\nSouhayl inclina la tête et lut : « Le savoir est un miroir. Quand tu l'acquiers, il ne montre pas ton visage — il montre ton cœur. Si ton cœur est pur, le miroir te montrera la vérité. Si ton cœur est troublé, le miroir te montrera tes défauts. Ne fuis pas ce que tu vois — accepte-le, et utilise le savoir pour corriger ce qui doit être corrigé. C'est cela, la sagesse. »\n\nSouhayl leva les yeux du livre et regarda Sidi Ibrahim. Le vieillard acquiesça, ses yeux verts brillant de fierté.\n\n— Tu comprends maintenant, Souhayl ? La différence entre le savoir et la sagesse ? Le savoir, c'est le miroir. La sagesse, c'est le courage de regarder ce que le miroir te montre. Beaucoup de gens acquièrent des connaissances — ils lisent des livres, ils mémorisent des faits, ils passent des examens — mais ils n'ont pas le courage de se regarder dans le miroir du savoir. Ils utilisent leur intelligence pour se vanter, pour dominer les autres, pour nourrir leur ego. Le savoir devient une arme au lieu d'être une lumière.\n\nLe sage posa sa main ridée sur l'épaule de Souhayl.\n\n— Mais toi, Souhayl, tu as quelque chose de rare. Tu as un cœur qui écoute. Et un cœur qui écoute est le meilleur réceptacle pour le savoir. Le Prophète ﷺ a dit : « La sagesse est la chose perdue du croyant — il la prend partout où il la trouve. » Cherche la sagesse partout, Souhayl. Dans les livres, oui, mais aussi dans les regards de ta mère, dans les conseils de ton père, dans les jeux de ta petite sœur Ines, et même dans le silence de cette bibliothèque.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Le savoir est un miroir qui montre le cœur... Sidi Ibrahim, est-ce que c'est pour ça que certains gens très instruits font des choses mauvaises ? Parce qu'ils ont peur de regarder dans le miroir ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Exactement, Souhayl. L'Imam Al-Ghazali a dit : « Le savant sans action est comme l'abeille sans miel. » Et l'abeille sans miel est une abeille qui a oublié sa raison d'être. Le savoir doit transformer celui qui le possède, pas seulement son esprit, mais son cœur, ses actions, ses relations avec les autres. Sinon, ce n'est pas du savoir — c'est de l'information. Et l'information sans sagesse est comme une épée entre les mains d'un enfant.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s4',
          background: 'inner_world',
        },

        // --- st1c3s4: L'épreuve ---
        {
          id: 'st1c3s4',
          chapterId: 'st1c3',
          title: "L'épreuve",
          narration: `La lumière dans la bibliothèque changea subtilement. Les lampes dorées vacillèrent, puis s'intensifièrent, projetant des ombres dansantes sur les murs. Souhayl sentit l'air devenir plus dense, plus chargé, comme avant un orage, et Sidi Ibrahim se redressa, ses yeux verts devenant soudainement plus lumineux, plus perçants.\n\n— Il est temps pour ton épreuve, Souhayl, dit le sage d'une voix grave.\n\nLe mot « épreuve » frappa le cœur de Souhayl comme une pierre dans l'eau. Son premier instinct fut la peur — la peur de l'échec, la peur de décevoir, la peur de ne pas être à la hauteur. Mais aussitôt, les mots du Livre de la Sagesse remontèrent à sa mémoire : « Le savoir est un miroir. » Et un miroir, par définition, ne ment pas.\n\n— Qu'est-ce que je dois faire ? demanda Souhayl d'une voix qu'il força d'être stable.\n\nSidi Ibrahim pointa du doigt le bassin octogonal au centre de la salle. L'eau, habituellement calme et reflective, commençait à remuer, comme si un souffle venait du fond. Puis, lentement, des images apparurent à la surface de l'eau — pas des reflets du plafond ou des lampes, mais des scènes, des fragments de la vie de Souhayl lui-même.\n\nIl se vit à la madrasa, un jour où un camarade plus petit avait oublié son cahier et que Souhayl avait refusé de le lui prêter — non pas par méchanceté, mais parce qu'il voulait être le seul à avoir les bonnes réponses. Il se vit à la maison, un soir où il avait menti à sa mère en disant qu'il n'avait pas de devoirs pour pouvoir jouer avec ses amis. Il se vit au marché, où il avait gardé la monnaie que le vendeur de dattes lui avait rendue par erreur sans rien dire.\n\nChaque image était un miroir, et chaque miroir montrait une imperfection. Pas des imperfections énormes — pas de crimes ni de trahisons — mais de petites failles, des fissures dans le cœur, des moments où l'égoïsme, la paresse ou la malhonnêteté avaient pris le dessus, même brièvement.\n\nSouhayl sentit la honte monter à ses joues. Il voulut détourner le regard, mais la surface de l'eau le retint — littéralement — comme si l'eau elle-même refusait de le laisser fuir.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Je... je n'ai pas été parfait. J'ai menti, j'ai été égoïste, j'ai triché... Sidi Ibrahim, je ne mérite pas d'être ici.",
              emotion: 'sad',
            },
          ],
          choices: [
            {
              id: 'st1c3s4_c1',
              text: "Accepter ses imperfections avec humilité et demander pardon",
              nextSceneId: 'st1c3s5a',
              badgeId: 'tawadu',
              isCorrect: true,
            },
            {
              id: 'st1c3s4_c2',
              text: "Se justifier — ces erreurs arrivent à tout le monde",
              nextSceneId: 'st1c3s5b',
            },
            {
              id: 'st1c3s4_c3',
              text: "Se détourner du bassin et refuser de regarder",
              nextSceneId: 'st1c3s5c',
            },
          ],
          background: 'inner_world',
        },

        // --- st1c3s5a: L'humilité du savant ---
        {
          id: 'st1c3s5a',
          chapterId: 'st1c3',
          title: "L'humilité du savant",
          narration: `Souhayl ferma les yeux, prit une grande inspiration, et quand il les rouvrit, il regarda l'eau du bassin sans détourner le regard. Il regarda chaque image, chaque souvenir, chaque faille de son cœur avec une honnêteté brutale — sans se justifier, sans chercher d'excuses, sans minimiser. Oui, il avait été égoïste. Oui, il avait menti. Oui, il avait gardé la monnaie du vendeur de dattes. Et oui, ce n'était pas bien.\n\nPuis, avec une voix tremblante mais sincère, il murmura :\n\n— Astaghfirullah... Je demande pardon à Allah pour chaque fois où j'ai fermé mon cœur à la vérité. Je demande pardon pour chaque fois où j'ai choisi l'égoïsme au lieu de la générosité. Je demande pardon pour chaque fois où j'ai utilisé le savoir pour moi-même au lieu de le partager.\n\nÀ mesure qu'il parlait, quelque chose d'extraordinaire se produisit. Les images dans le bassin ne disparurent pas — elles se transformèrent. L'image de Souhayl refusant son cahier se mua en une image de Souhayl partageant ses notes avec un sourire. L'image du mensonge devint une image de Souhayl avouant la vérité à sa mère, qui lui souriait avec tendresse. L'image de la monnaie gardée devint une image de Souhayl courant après le vendeur pour lui rendre son argent.\n\nLe bassin se calma, et la surface de l'eau devint d'une clarté parfaite — un miroir si pur que Souhayl put voir, non pas son visage, mais son cœur. Et son cœur, malgré ses imperfections, brillait d'une lumière douce et chaude, comme une lampe à huile dans une pièce sombre.\n\nSidi Ibrahim sourit — un sourire si large et si lumineux que toute la bibliothèque sembla s'illuminer.\n\n— Voilà, dit-il. C'est cela, l'épreuve. Pas l'épreuve de la perfection — personne n'est parfait excepté Allah. L'épreuve de l'honnêteté envers soi-même. Tu as regardé tes défauts sans fuir, tu les as reconnus sans te justifier, et tu as demandé pardon avec sincérité. Souhayl, tu viens de passer le seuil le plus difficile du chemin du savoir : le seuil de l'humilité.\n\nLe Livre de la Sagesse, posé sur la table, s'ouvrit d'un cran de plus, révélant une nouvelle page sur laquelle était écrit en lettres dorées :\n\n« أنت مؤهل — Tu es digne. »`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "L'épreuve du savoir n'est pas celle de la perfection — c'est celle de l'honnêteté. Tu as regardé tes défauts sans fuir, et c'est le premier pas de la sagesse. L'Imam Al-Ghazali a dit : « Celui qui se connaît lui-même connaît son Seigneur. » Tu viens de faire un pas immense sur ce chemin, Souhayl.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s6',
          background: 'inner_world',
          earnedBadgeId: 'tawadu',
          lesson: {
            title: "Al-Tawadu' — L'humilité dans le savoir",
            content:
              "L'humilité (Al-Tawadu') est la vertu cardinale du chercheur de savoir. Le Prophète ﷺ a dit : « Celui qui s'humilie pour Allah d'un degré, Allah l'élève d'un degré. » Souhayl a appris que reconnaître ses propres imperfections n'est pas une faiblesse, mais la plus grande des forces. Le savoir véritable ne rend pas orgueilleux — il rend humble.",
            quote: 'من تواضع لله رفعه الله',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- st1c3s5b: Les excuses ---
        {
          id: 'st1c3s5b',
          chapterId: 'st1c3',
          title: 'Les excuses',
          narration: `Souhayl croisa les bras et fronça les sourcils, cherchant dans son esprit des explications, des justifications. C'était naturel — l'ego humain cherche toujours à se protéger, à se défendre, à trouver des raisons qui rendent ses actions excusables.\n\n— Tout le monde fait des erreurs, dit-il d'une voix qu'il voulait assurée. Ce n'est pas comme si j'avais fait quelque chose de grave. Refuser un cahier, c'est pas un crime. Mentir à sa mère, tous les enfants le font. Et la monnaie du vendeur... c'était un centime, pas une fortune.\n\nLes images dans le bassin ne changèrent pas. Elles restèrent là, immobiles, témoins silencieux d'un cœur qui refusait de se regarder en face. Sidi Ibrahim ne dit rien pendant un long moment. Son silence était plus éloquent que n'importe quel discours.\n\n— Souhayl, dit-il finalement d'une voix douce mais ferme, l'Imam Malik disait : « Ne regarde pas la petitesse de ton péché — regarde la grandeur de Celui devant qui tu désobéis. » Chaque petite erreur est comme une fissure dans un barrage. Une fissure seule ne fait pas couler l'eau. Mais cent fissures... mille fissures... et le barrage se brise.\n\nSouhayl baissa la tête. Les mots du sage étaient comme une douche froide — désagréables au premier instant, mais purificateurs.\n\n— Le chemin du savoir, continua Sidi Ibrahim, commence par le Tawadu — l'humilité. Sans humilité, le savoir est comme de l'eau dans un panier troué — tu la verses, mais elle ne reste pas. Réfléchis à cela, Souhayl. Et reviens quand tu seras prêt à regarder le miroir sans chercher d'excuses.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "L'Imam Malik disait : « Ne regarde pas la petitesse de ton péché — regarde la grandeur de Celui devant qui tu désobéis. » Le savoir sans humilité est comme l'eau dans un panier troué — tu la verses, mais elle ne reste pas.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s5a',
          background: 'inner_world',
        },

        // --- st1c3s5c: Le refus du miroir ---
        {
          id: 'st1c3s5c',
          chapterId: 'st1c3',
          title: 'Le refus du miroir',
          narration: `Souhayl tourna la tête. Il ne voulait pas voir. Les images dans le bassin étaient trop douloureuses, trop vraies, trop proches de la vérité qu'il essayait d'ignorer depuis des mois — la vérité qu'il n'était pas aussi bon qu'il aimait à le croire, qu'il n'était pas aussi sage qu'il en avait l'air, que derrière le visage sérieux et appliqué qu'il montrait au monde se cachait un garçon ordinaire, avec des défauts ordinaires.\n\nMais en tournant la tête, il vit quelque chose d'inattendu. Le mur de la bibliothèque, juste à côté du bassin, était couvert de miroirs — pas un, mais des dizaines de miroirs de toutes tailles et de toutes formes, enchâssés dans des cadres en bois sculpté. Et dans chaque miroir, Souhayl se voyait — non pas son visage, mais son cœur. Chaque miroir montrait une imperfection différente, un angle différent de son âme qu'il n'avait jamais regardé.\n\nIl ne pouvait pas fuir. Le miroir était partout — dans le bassin, dans les murs, dans les murs de la bibliothèque, et surtout, dans son propre cœur. Car le miroir du savoir n'est pas un objet extérieur — c'est la conscience elle-même, cette voix intérieure qui sait toujours la vérité, même quand on la couvre de couches de déni et d'excuses.\n\nSidi Ibrahim posa sa main sur l'épaule de Souhayl avec une douceur infinie.\n\n— Tu ne peux pas fuir ton propre cœur, mon enfant. Personne ne le peut. Mieux vaut le regarder maintenant, avec courage, que de passer sa vie à détourner les yeux. Souhayl, le courage n'est pas l'absence de peur — c'est la décision de regarder malgré la peur. Regarde. Accepte. Et pardonne-toi, comme Allah pardonne à ceux qui se repentent sincèrement.\n\nSouhayl ferma les yeux, prit une respiration profonde, et lentement, courageusement, il tourna la tête vers le bassin.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le courage n'est pas l'absence de peur — c'est la décision de regarder malgré la peur. Souviens-toi de ce hadith : « Sois dans ce monde comme un étranger ou un voyageur. » Ce monde est une épreuve, et le miroir du savoir fait partie de cette épreuve. Tourne-toi, Souhayl. Tourne-toi et regarde.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st1c3s5a',
          background: 'inner_world',
        },

        // --- st1c3s6: Le gardien de la lumière ---
        {
          id: 'st1c3s6',
          chapterId: 'st1c3',
          title: 'Le gardien de la lumière',
          narration: `Le Livre de la Sagesse se referma doucement, son sceau de cire rouge se reformant de lui-même comme une blessure qui guérit. Sidi Ibrahim le replaça dans l'armoire de cèdre et tourna la clé étoilée. Puis il se tourna vers Souhayl, et dans ses yeux verts, Souhayl lut quelque chose qu'il n'avait jamais vu auparavant — une fierté profonde, mêlée de tendresse, de reconnaissance et d'une pointe de tristesse, comme celle d'un maître qui sait que son élève a grandi et qu'il ne pourra plus le garder indéfiniment sous son aile.\n\n— Souhayl El Amrani, dit le sage d'une voix solennelle, tu as passé les trois épreuves de la bibliothèque. La première : le courage de chercher le savoir — tu as répondu à l'appel de la porte. La deuxième : le respect du savoir — tu as appris l'Adab, l'Isnad, et l'histoire des grands savants. La troisième : l'humilité devant le savoir — tu as regardé tes imperfections avec honnêteté et tu as demandé pardon.\n\nSidi Ibrahim tendit la main à Souhayl et l'aida à se lever. Puis il détacha de son propre cou un pendentif en argent — une lampe à huile miniature, finement ciselée, qui brillait d'une lumière douce et chaude.\n\n— Je te confie cette lampe, Souhayl. Elle est le symbole du gardien de la bibliothèque. Ce n'est pas un titre, ni une récompense — c'est une responsabilité. Chaque fois que tu viendras ici, la lampe t'éclairera. Chaque fois que tu partageras le savoir avec sincérité, elle brillera un peu plus. Et chaque fois que tu oublieras l'humilité, elle s'éteindra, te rappelant que le savoir sans sagesse n'est que ténèbres décorées.\n\nSouhayl prit le pendentif entre ses mains. Il était léger, presque impondérable, mais Souhayl sentit qu'il portait un poids immense — le poids de la responsabilité, le poids de la tradition, le poids de tous les savants qui avaient marché sur ce chemin avant lui.\n\n— Sidi Ibrahim, dit-il d'une voix émue, je serai un bon gardien. Je le promets. Par Allah, je promets de chercher le savoir avec sincérité, de le partager avec générosité, et de ne jamais oublier que tout vient de Lui.\n\nSidi Ibrahim sourit, et ses yeux verts brillèrent comme deux étoiles dans le crépuscule de la bibliothèque.\n\n— Je sais, dit-il simplement. Je le savais depuis le premier jour où tes pieds ont foulé cet escalier. Car tu as en toi, Souhayl El Amrani, la plus précieuse des qualités pour un chercheur de savoir : tu as la soif. Et celui qui a soif trouve toujours la source.\n\nSouhayl remonta les marches de la bibliothèque pour la dernière fois de cette première visite, le pendentif en argent pressé contre sa poitrine. Quand il déboucha dans la ruelle, la nuit était tombée sur Fès, et les étoiles scintillaient dans le ciel comme les lettres d'un Coran écrit sur du velours noir. Le minaret de la Qarawiyyin se dressait devant lui, majestueux et silencieux, et Souhayl comprit, avec une certitude qui illuminait son cœur, que sous ses fondations, des milliers de livres attendaient patiemment qu'il revienne.\n\nIl pressa le pendentif contre sa poitrine et murmura, les yeux levés vers les étoiles : « Bismillah. Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. C'est le début. »`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Tu as la soif, Souhayl. Et le Prophète ﷺ a dit : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. » Tu as emprunté ce chemin. Garde-le toujours ouvert dans ton cœur. La bibliothèque t'attendra, et moi aussi.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Bismillah. C'est le début. Le début d'un très long chemin. Mais je suis prêt, Sidi Ibrahim. Avec l'aide d'Allah, je suis prêt.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: "Tariq al-'Ilm — Le chemin du Savoir",
            content:
              "Souhayl a accompli les trois étapes du premier voyage du savoir : le courage de chercher (Talab), le respect de la tradition (Adab), et l'humilité devant la vérité (Tawadu'). Il a reçu le pendentif du gardien — symbole de la responsabilité que porte tout chercheur de savoir. Le chemin est long, mais comme dit le Prophète ﷺ : « Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. »",
            quote: 'من سلك طريقا يلتمس فيه علما سهل الله له طريقا إلى الجنة',
            source: 'Hadith — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Jahl — الجهل (L\'Ignorance)', 'Al-Kibr al-Ilmi — الكبر العلمي (L\'Orgueil intellectuel)'],
  spiritualLesson:
    "Le premier tome de Souhayl enseigne que la quête du savoir (Talab al-'Ilm) est un devoir sacré en Islam. Souhayl découvre que le savoir véritable ne se résume pas à l'accumulation d'informations — il nécessite l'Adab (le respect et l'étiquette), l'Isnad (la rigueur dans la vérification), et surtout le Tawadu' (l'humilité). À travers les histoires de l'Imam Malik et de Fatima Al-Fihri, il apprend que les plus grands savants de l'Islam n'étaient pas seulement intelligents — ils étaient humbles, patients et sincères. Le pendentif du gardien symbolise la responsabilité qui accompagne toute connaissance : celle de la préserver, de la partager et de ne jamais l'utiliser pour l'ego.",
};
