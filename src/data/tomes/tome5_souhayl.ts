import type { Tome } from '@/types/story';

export const tome5_souhayl: Tome = {
  id: 'souhayl_tome5',
  number: 5,
  title: 'Le Livre des Vivants',
  titleAr: 'كتاب الأحياء',
  subtitle: "La Sagesse de l'Héritage",
  description:
    "Dans ce tome final, Souhayl reçoit la plus grande révélation : sa propre grand-mère paternelle, Aïcha, fut autrefois gardienne de la bibliothèque. Sidi Mu'adh prépare sa succession. À travers une dernière rencontre avec le Prophète Muhammad ﷺ dans un rêve, Souhayl comprend que le savoir véritable est celui qui transforme le cœur. Il devient le nouveau gardien principal, prêt à transmettre le flambeau.",
  theme: "Al-Hikma — La Sagesse et l'Héritage",
  coverImage: '/images/souhayl-tome5-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Secret de Grand-Mère (سر الجدة)
    // ============================================================
    {
      id: 'st5c1',
      tomeId: 'souhayl_tome5',
      number: 1,
      title: 'Le Secret de Grand-Mère',
      titleAr: 'سر الجدة',
      scenes: [
        // --- st5c1s1: Un appel grave ---
        {
          id: 'st5c1s1',
          chapterId: 'st5c1',
          title: 'Un appel grave',
          narration: `L'air de Fès ce matin-là portait une odeur inhabituelle — un mélange de pluie fraîche sur la terre sèche et d'encens de benjoin qui montait de quelque part dans la médina, comme si les habitants sentaient que quelque chose de grand allait se produire et que les cœurs devaient être préparés. Souhayl marchait seul dans les ruelles pavées, son cartable sur l'épaule, ses pas résonnant sur les galets noirs et blancs. Il avait grandi depuis sa première visite à la bibliothèque — ses épaules s'étaient élargies, sa démarche était plus assurée, et ses yeux, toujours aussi curieux, portaient désormais une profondeur que seuls les enfants qui ont vu l'invisible peuvent avoir.\n\nDepuis des mois, il fréquentait la bibliothèque souterraine régulièrement. Sidi Mu'adh lui avait enseigné l'histoire des grands savants de l'Islam — l'Imam Malik, Fatima Al-Fihri, Ibn Khaldoun, Al-Ghazali, Ibn Sina — et chaque leçon était comme un voyage dans le temps, une plongée dans un océan de sagesse dont les vagues ne cessaient jamais de se former. Souhayl avait appris à lire la calligraphie ancienne, à identifier les différents styles de reliure, à comprendre les chaînes de transmission des hadiths. Mais surtout, il avait appris que le savoir n'était pas seulement dans les livres — il était dans le cœur de celui qui les lisait avec sincérité.\n\nCe matin, cependant, quelque chose était différent. En passant devant la porte de fer forgé près du mur ouest de la Qarawiyyin, Souhayl sentit une vibration plus forte que d'habitude — non pas un murmure cette fois, mais un appel, clair et pressant, comme si les pierres elles-mêmes criaient son nom. La porte vibrait légèrement sous ses doigts, et l'escalier descendant brillait d'une lumière plus intense, presque dorée, comme si le soleil lui-même avait décidé de pénétrer sous terre pour illuminer ce qui allait se passer.\n\nSouhayl descendit les marches familières, son cœur battant un rythme qu'il ne reconnaissait pas — ni peur, ni excitation, mais quelque chose de plus profond, comme le sentiment qu'on éprouve la veille d'une grande fête sacrée, ce mélange de recueillement et d'anticipation qui fait trembler l'âme. Les lampes à huile sur les murs brillaient plus fort à son passage, chacune s'allumant comme une bougie qu'on allume pour un invité de marque.\n\nAu fond de la salle circulaire, Sidi Mu'adh l'attendait. Mais ce n'était pas le Sidi Mu'adh habituel, assis sereinement sur son tapis de prière, un livre ouvert sur les genoux. Le vieillard était debout, adossé à l'étagère centrale, et son visage portait une expression que Souhayl n'avait jamais vue — une gravité solennelle, tempérée par une tendresse infinie, comme celle d'un père qui doit annoncer à son enfant la nouvelle la plus importante de sa vie. Ses yeux verts, d'ordinaire si calmes, brillaient d'une lueur troublée, et ses mains, croisées devant lui, tremblaient légèrement.\n\n— Souhayl, dit-il d'une voix plus basse que d'habitude, assieds-toi. Ce que j'ai à te dire aujourd'hui est la chose la plus importante que tu entendras jamais dans cette bibliothèque. Peut-être la plus importante de toute ta vie.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, qu'est-ce qui se passe ? Vous avez l'air... différent ce matin. La bibliothèque aussi — elle vibre comme jamais auparavant.",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce que ce jour est annoncé depuis bien longtemps, mon enfant. La bibliothèque le sait. Les pierres le savent. Et moi, je l'attendais depuis le premier jour où tu as franchi cette porte. Assieds-toi et écoute avec ton cœur, pas seulement avec tes oreilles.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s2',
          background: 'inner_world',
        },

        // --- st5c1s2: Le portrait d'Aïcha ---
        {
          id: 'st5c1s2',
          chapterId: 'st5c1',
          title: "Le portrait d'Aïcha",
          narration: `Sidi Mu'adh marcha lentement vers le fond de la bibliothèque, vers une section que Souhayl n'avait jamais explorée — un alcôve caché derrière un rideau de soie bleu marine brodé de fils d'or en forme d'étoiles et de croissants. Le vieillard écarta le rideau de la main, et Souhayl découvrit un petit espace circulaire, éclairé par une seule lampe qui pendait du plafond comme une étoile captive, dont la lumière tombait sur un pupitre en bois de cèdre sculpté de motifs floraux d'une délicatesse infinie.\n\nSur le pupitre reposait un cadre en argent aux reflets ancien, dont les bords étaient ornés d'une calligraphie coufique si fine qu'elle ressemblait à de la dentelle de métal. À l'intérieur du cadre, un portrait — non pas une peinture, mais une image qui semblait vivante, animée d'une lumière intérieure, comme si quelqu'un avait capturé l'essence même de la personne représentée et l'avait enfermée dans ce cadre pour l'éternité.\n\nSouhayl s'approcha et son souffle se coupa. Le portrait représentait une femme d'âge mûr, aux cheveux blancs coiffés avec élégance sous un voile de soie verte, au visage ovale et aux traits réguliers qui dégageaient une autorité naturelle et une douceur immense. Mais ce qui saisit Souhayl au cœur, ce furent les yeux — des yeux d'un brun profond et chaud, des yeux qui souriaient même quand les lèvres étaient sérieuses, des yeux qu'il avait vus toute sa vie, chaque jour, dans le miroir de sa propre chambre, dans le reflet des fontaines de la médina, dans le regard de son propre père.\n\n— C'est... murmura-t-il, sa voix ne parvenant pas à sortir normalement de sa gorge.\n\n— Oui, dit Sidi Mu'adh doucement. C'est ta grand-mère paternelle. Aïcha Benali, née Aïcha Berrada. Ta grand-mère, Souhayl. Elle fut gardienne de cette bibliothèque pendant plus de quarante ans, bien avant que ton père ne naisse, bien avant que moi-même n'en devienne le protecteur. Elle fut l'une des plus grandes gardiennes que cette bibliothèque ait jamais connues.\n\nSouhayl sentit ses genoux trembler. Il posa sa main sur le bord du pupitre pour ne pas tomber, et ses yeux se remplirent de larmes qu'il ne chercha pas à retenir. Sa grand-mère Aïcha — il l'avait connue, bien sûr, il avait des souvenirs d'elle, une femme âgée au sourire doux qui lui donnait des dattes en lui racontant des histoires du temps jadis. Elle était morte quand il avait cinq ans, et il se souvenait de son odeur — l'encens et le jasmin — et de ses mains, douces et ridées, qui caressaient ses cheveux le soir avant qu'il ne s'endorme.\n\n— Mais... mais personne ne m'a jamais parlé de ça, dit Souhayl d'une voix étouffée. Même pas Baba. Comment est-ce possible ?\n\n— Ton père et ta mère le savaient, répondit Sidi Mu'adh. Ta mère le savait parce que ta grand-mère Aïcha le lui avait dit, et ton père le savait parce qu'il avait grandi dans cette vérité — sa propre mère était gardienne, et il avait vu les signes dès son enfance. Mais ils ont fait un choix, Souhayl. Un choix difficile mais sage. Ils ont décidé de ne rien te dire, de te laisser découvrir la bibliothèque par toi-même, de te laisser entendre l'appel du savoir avec ton propre cœur.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Lalla Aïcha... ma grand-mère était gardienne ? Mais pourquoi personne ne m'a jamais rien dit ? J'ai grandi sans savoir que le sang des gardiens coulait dans mes veines !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce que le savoir qui est donné est oublié, mon enfant, mais le savoir qui est découvert est gravé dans le cœur pour toujours. Ta grand-mère Aïcha l'avait demandé elle-même avant de partir : « Ne dites rien à l'enfant. Laissez les pierres lui parler. Laissez le manuscrit le trouver. Laissez-le choisir le chemin avec son propre cœur. » C'était sa dernière volonté, Souhayl, et tes parents l'ont respectée avec une patience admirable.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Elle avait demandé ça ? Lalla Aïcha savait que je... qu'un jour...",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Elle le savait. Les gardiens voient loin, Souhayl — plus loin que le temps présent. Ta grand-mère voyait en toi, avant même ta naissance, le prochain gardien. Elle a prié pour toi toute sa vie, et ses prières accompagnent encore chacun de tes pas dans cette bibliothèque. Regarde — là, sur le pupitre, à côté du portrait.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s3',
          background: 'inner_world',
        },

        // --- st5c1s3: La confrontation ---
        {
          id: 'st5c1s3',
          chapterId: 'st5c1',
          title: 'La confrontation',
          narration: `Sur le pupitre, à côté du portrait d'Aïcha, reposait un petit carnet à la couverture de cuir brun, usé par le temps mais encore solide, dont les pages étaient remplies d'une écriture fine et régulière — l'écriture de sa grand-mère. Souhayl reconnut immédiatement les lettres inclinées et délicates, car sa mère conservait encore des lettres que Lalla Aïcha lui avait écrites, et Souhayl les avait regardées des dizaines de fois, fasciné par la beauté de chaque mot.\n\nIl ouvrit le carnet avec des mains tremblantes. La première page portait une date — il y a plus de cinquante ans — et une invocation : « Bismillah ar-Rahman ar-Rahim. Ô Allah, fais de moi une gardienne digne de ce dépôt sacré. Fais que ma main préserve ce que mon cœur a appris, et que ma vie soit un pont entre le passé et l'avenir du savoir. » En dessous, une ligne plus personnelle : « Un jour, mon petit-fils lira ces mots. Qu'Allah le guide sur le chemin de la sagesse. »\n\nSouhayl ferma le carnet contre sa poitrine et le serra si fort que ses jointures blanchirent. Les larmes coulaient librement sur ses joues maintenant, et il ne cherchait plus à les cacher. Des larmes de surprise, de gratitude, de tristesse — tristesse de n'avoir jamais su, de n'avoir jamais pu poser ces questions à sa grand-mère de son vivant, de n'avoir jamais pu lui dire qu'il comprenait maintenant pourquoi elle lui racontait ces histoires, pourquoi elle lui donnait des dattes avec une tendresse si particulière, pourquoi ses yeux brillaient d'une fierté indicible quand il apprenait à lire.\n\nSidi Mu'adh posa sa main sur l'épaule de Souhayl et resta silencieux un long moment, laissant le garçon vivre son émotion sans interruption. Les lampes de la bibliothèque oscillaient doucement, comme si elles aussi pleuraient avec lui, et un parfum de jasmin et de cèdre — l'odeur de Lalla Aïcha — emplit la salle comme un souvenir vivant.\n\n— Va trouver ton père ce soir, dit finalement Sidi Mu'adh. Pose-lui les questions que tu as sur le cœur. Il a porté ce secret pendant des années, Souhayl, et ce n'est pas un fardeau léger que de cacher à son propre fils l'héritage de sa lignée. Il mérite que tu lui parles avec le même amour que ta grand-mère aurait eu pour toi.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "« Un jour, mon petit-fils lira ces mots... » Elle savait. Elle savait tout. Et Baba... il a gardé ça pendant toutes ces années. Sidi Mu'adh, pourquoi n'ont-ils pas fini par me le dire ? J'aurais aimé connaître cette vérité plus tôt.",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Demande-leur ce soir, Souhayl. Ils ont leurs raisons, et ces raisons sont profondes, sincères et remplies d'amour. Va, mon enfant. Et souviens-toi : la confiance est la fondation de toute chose. Sans elle, même la plus belle des maisons s'effondre.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st5c1s3_c1',
              text: "Retrouver son père avec douceur — la confiance demande de l'écoute",
              nextSceneId: 'st5c1s4a',
              badgeId: 'amana',
              isCorrect: true,
            },
            {
              id: 'st5c1s3_c2',
              text: "Demande des explications avec émotion — il a le droit de comprendre",
              nextSceneId: 'st5c1s4b',
            },
          ],
          background: 'inner_world',
        },

        // --- st5c1s4a: La confiance des parents ---
        {
          id: 'st5c1s4a',
          chapterId: 'st5c1',
          title: 'La confiance des parents',
          narration: `Souhayl rentra à la maison ce soir-là avec le carnet de sa grand-mère serré contre sa poitrine comme un trésor qu'il craignait de perdre. Le ciel au-dessus de Fès était d'un violet profond, traversé de nuages dorés par le soleil couchant, et le muezzin appelait à la prière du Maghrib avec une voix qui résonnait dans toute la médina comme un fil d'or tendu entre les minarets.\n\nEn franchissant le seuil de la maison, Souhayl trouva son père dans le salon, assis sur le tapis de prière, son chapelet entre les doigts, les yeux mi-clos. Mehdi Benali avait quarante-deux ans, une barbe poivre et sel soigneusement taillée, et des yeux — les mêmes yeux bruns et chaleureux que Souhayl avait vus dans le portrait de Lalla Aïcha — qui s'ouvrirent dès que son fils entra. Il n'avait pas besoin de parler. En voyant le carnet de cuir brun que Souhayl tenait dans ses mains tremblantes, il comprit tout. Son visage se décomposa un instant — une fraction de seconde où la surprise, la tristesse et la fierté se mêlèrent — puis il se reprit et sourit, un sourire qui ressemblait étrangement à celui de sa propre mère.\n\n— Tu as trouvé le carnet, dit-il doucement. Sidi Mu'adh t'a montré le portrait.\n\nSouhayl s'assit en face de son père, les jambes croisées, le carnet entre eux sur le tapis. Aziza apparut dans l'encadrement de la porte, un verre de thé à la menthe à la main, et son visage s'illumina d'un sourire triste et heureux à la fois — elle avait attendu ce moment pendant des années, et sa patience était sur le point d'être récompensée. Nawfel et Wassim, attirés par la gravité de l'atmosphère, s'approchèrent silencieusement et s'assirent près de leur mère, les yeux grands ouverts.\n\n— Baba, dit Souhayl d'une voix calme mais tremblante, pourquoi ne m'avez-vous jamais rien dit ? Je comprends que Lalla Aïcha ait demandé de me laisser découvrir la bibliothèque seul. Mais elle est partie depuis des années. Vous auriez pu me parler après. J'aurais aimé savoir que je portais en moi l'héritage d'une gardienne. J'aurais aimé savoir que mes racines plongent dans cette terre sacrée.\n\nMehdi posa son chapelet et prit le carnet entre ses mains. Il le feuilleta lentement, ses yeux s'arrêtant sur certaines pages, et Souhayl vit des larmes se former dans les yeux de son père — son père qui ne pleurait jamais, son père qui était fort comme les murailles de la médina, son père qui portait le monde sur ses épaules sans jamais se plaindre.\n\n— Mon fils, dit Mehdi d'une voix épaissie par l'émotion, ta grand-mère était la personne la plus sage que j'aie jamais connue. Quand elle m'a dit, sur son lit de mort, qu'elle avait été gardienne de la bibliothèque, qu'elle avait protégé les manuscrits pendant quarante ans, qu'elle avait prié pour que son petit-fils reprenne le flambeau — j'ai été submergé. Et quand elle m'a demandé de ne rien te dire, de te laisser trouver ton propre chemin vers le savoir, j'ai promis. Parce qu'une promesse faite à une mère mourante est un pacte sacré — un amana que seul Allah peut juger.\n\nAziza s'assit à côté de son mari et posa sa main sur la sienne.\n\n— Nous avons eu si peur, ajouta-t-elle. Peur de te trop influencer, peur que tu acceptes cette responsabilité par devoir envers nous plutôt que par amour du savoir. Chaque fois que tu partais explorer la médina, chaque fois que tu posais des questions sur la Qarawiyyin, mon cœur battait si fort... Mais nous avions foi en toi, Souhayl. Nous savions que le sang de ta grand-mère coulait dans tes veines et que, tôt ou tard, le chemin te mènerait là où tu devais aller.\n\nSouhayl regarda son père, sa mère, puis ses frères Nawfel et Wassim qui observaient la scène sans comprendre pleinement mais en sentant l'importance. Puis il regarda le carnet de Lalla Aïcha, ouvert sur la page où sa grand-mère avait écrit : « Un jour, mon petit-fils lira ces mots. »\n\n— Je vous pardonne, dit-il simplement. Et je vous remercie. Vous m'avez donné le plus beau cadeau — le cadeau de choisir par moi-même. C'est la plus grande forme de confiance qu'un parent puisse offrir à son enfant. Lalla Aïcha avait raison. Le savoir que j'ai découvert par moi-même est gravé dans mon cœur pour toujours. Et personne ne pourra jamais me l'enlever.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Ta grand-mère Aïcha était ma mère, Souhayl. Et ma mère, même malade, même affaiblie, était plus forte que n'importe qui. Elle m'a dit : « Ne dis rien à l'enfant. Laisse les pierres de Fès lui murmurer le secret. S'il est digne, il entendra. S'il entend, il viendra. Et s'il vient, il sera le gardien que j'ai prié pour qu'il devienne. » Comment aurais-je pu désobéir à ma mère, mon fils ? Comment aurais-je pu trahir la confiance — l'amana — qu'elle m'a accordée ?",
              emotion: 'sad',
            },
            {
              characterId: 'aziza',
              text: "C'était dur, Souhayl. Chaque nuit, je priais pour que tu trouves le chemin. Ton père et moi en parlions, tard le soir, à voix basse, et nous demandions à Allah de te guider. Et Il t'a guidé, mon fils. Regarde où tu es aujourd'hui. Regarde ce que tu es devenu. Ta grand-mère sourirait si elle te voyait.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Lalla Aïcha... la gardienne ? Notre propre grand-mère ? C'est vrai ça ? C'est comme dans les histoires !",
              emotion: 'surprised',
            },
            {
              characterId: 'wassim',
              text: "Et moi ? Moi aussi j'ai le sang de Lalla Aïcha ? Je pourrais être gardien aussi un jour ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Le sang de Lalla Aïcha coule dans nos veines, Wassim. Mais le plus important, ce n'est pas le sang — c'est le cœur. Un cœur sincère vaut plus que mille lignées. Et toi, tu as le plus beau des cœurs.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'amana',
          lesson: {
            title: "Al-Amana — Le dépôt sacré de la confiance",
            content:
              "Le mot arabe « amana » (أمانة) signifie le dépôt sacré, la confiance, la responsabilité qu'on reçoit et qu'on doit protéger. Dans ce chapitre, Souhayl découvre que ses parents ont porté le secret de sa grand-mère comme un amana — une confiance sacrée qu'ils n'ont pas trahie, même quand cela était difficile. Le Prophète ﷺ a dit que la confiance sera la première chose que les gens perdront le Jour du Jugement. La protéger est donc l'un des plus grands actes de foi. Souhayl apprend aussi que la confiance fonctionne dans les deux sens : ses parents lui ont fait confiance en le laissant découvrir le chemin par lui-même, et il leur rend cette confiance en pardonnant leur silence.",
            quote: 'إن الأمانة نادت من قعر بيتها...',
            source: 'Hadith — Musnad Ahmad',
          },
        },

        // --- st5c1s4b: Le droit de comprendre ---
        {
          id: 'st5c1s4b',
          chapterId: 'st5c1',
          title: 'Le droit de comprendre',
          narration: `Souhayl rentra à la maison ce soir-là avec le carnet de sa grand-mère serré contre sa poitrine, le cœur gonflé d'émotions contradictoires — de la fierté pour son héritage, de la gratitude pour sa grand-mère, mais aussi une pointe de frustration, un sentiment d'injustice qu'il essayait de maîtriser sans y parvenir complètement. Il avait neuf ans, bientôt dix, et il avait appris une chose importante au cours de ses aventures dans la bibliothèque : la vérité est un droit, et celui qui la retient, même avec les meilleures intentions du monde, prive l'autre de sa liberté.\n\nEn franchissant le seuil de la maison, il trouva son père dans le salon. Mehdi leva les yeux, vit le carnet, et son visage pâlit légèrement — un changement si subtil que seul un enfant qui connaît son père par cœur aurait pu le remarquer. Souhayl s'assit en face de lui et posa le carnet entre eux sans un mot.\n\n— Baba, dit-il, et sa voix tremblait malgré ses efforts pour rester calme. J'ai découvert la vérité aujourd'hui. Lalla Aïcha était gardienne de la bibliothèque. Et vous le saviez. Vous le saviez tous les deux. Vous avez gardé ce secret pendant des années — des années, Baba ! — pendant que moi, je cherchais, je découvrais, je me demandais pourquoi les pierres murmuraient mon nom. Et vous, vous saviez tout et vous ne me disiez rien.\n\nMehdi baissa la tête. Ses épaules, si larges et si solides, s'affaissèrent un instant sous le poids de la vérité révélée, et Souhayl vit son père — son héros, son modèle, l'homme le plus fort qu'il connaisse — vaciller comme un arbre sous un vent soudain.\n\n— Mon fils... commença Mehdi.\n\n— Non, Baba. Laisse-moi finir. Je ne suis pas en colère. Je suis... blessé. Blessé de ne pas avoir su. Blessé de n'avoir pas pu poser ces questions à Lalla Aïcha de son vivant. Blessé de realiser que chaque fois que vous me regardiez en silence, vous portiez un secret qui m'aurait rendu plus fort si je l'avais connu. Lalla Aïcha a peut-être eu ses raisons. Mais elle n'est plus là, Baba. Et vous, vous auriez pu me parler.\n\nUn silence lourd tomba sur la pièce. Aziza apparut dans l'encadrement de la porte, ses mains posées sur ses hanches, ses yeux brillants de larmes contenues. Nawfel et Wassim, sensibles à la tension, se blottirent contre leur mère.\n\n— Tu as raison, dit Mehdi finalement, et sa voix se brisa comme une branche sèche. Tu as raison, Souhayl. Nous aurions dû te le dire. Après le décès de ta grand-mère, j'ai hésité pendant des mois, et puis la peur a pris le dessus — peur de te décevoir, peur que le poids de cet héritage soit trop lourd pour tes épaules, peur de changer la manière dont tu me regardais. J'ai eu tort. Le secret n'a protégé personne — il a seulement retardé ce qui était inévitable. Ton cœur était prêt, et moi, j'étais trop lâche pour le voir.\n\nSouhayl regarda son père, et derrière les larmes qui brouillaient sa vue, il vit quelque chose qu'il n'avait jamais vu — la vulnérabilité d'un homme qui avoue sa faiblesse devant son enfant. Et dans cette vulnérabilité, Souhayl trouva quelque chose de plus précieux que n'importe quelle vérité : l'humilité. Son père, ce géant, ce pilier, s'abaissait devant lui non pas par faiblesse, mais par amour — l'amour d'un parent qui reconnaît son erreur et demande pardon à son enfant.\n\n— Je vous pardonne, Baba. Et toi aussi, maman. Personne n'est parfait, et vous avez fait de votre mieux. Mais promettez-moi une chose : à partir de maintenant, plus de secrets entre nous. L'amana — la confiance — va dans les deux sens.\n\nMehdi serra son fils dans ses bras, et les deux hommes pleurèrent ensemble, le père et le fils, reliés par le sang de Lalla Aïcha et par la promesse d'un avenir sans ombre entre eux.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Tu as raison, Souhayl. J'ai eu tort de garder le silence si longtemps. J'ai laissé la peur me dicter ma conduite au lieu de la confiance. Ta grand-mère me pardonne, j'espère. Et toi, mon fils, peux-tu pardonner à un vieux père qui a voulu te protéger mais a fini par te blesser ?",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Je vous pardonne, Baba. L'amana, la confiance, va dans les deux sens. Vous m'avez donné le droit de découvrir par moi-même, et je vous donne le droit de vous tromper. Nous sommes une famille, et les familles se pardonnent.",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "C'est la plus belle chose que j'aie entendue, Souhayl. Ta grand-mère serait si fière de toi. Elle disait toujours : « Le vrai savoir, c'est de savoir pardonner. » Tu as appris sa leçon mieux que n'importe quel livre ne pourrait l'enseigner.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'st5c1s4a',
          background: 'home',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Rêve du Prophète (حلم النبي)
    // ============================================================
    {
      id: 'st5c2',
      tomeId: 'souhayl_tome5',
      number: 2,
      title: 'Le Rêve du Prophète',
      titleAr: 'حلم النبي',
      scenes: [
        // --- st5c2s1: Le manuscrit sacré ---
        {
          id: 'st5c2s1',
          chapterId: 'st5c2',
          title: 'Le manuscrit sacré',
          narration: `Trois nuits après la révélation sur sa grand-mère, Souhayl descendit à la bibliothèque avec un cœur différent — plus léger, plus ouvert, comme si le poids du secret familial qui pesait sur lui depuis des années sans qu'il le sache venait enfin de se dissiper dans l'air de la médina. Les ruelles de Fès lui semblaient plus lumineuses, les étoiles plus nombreuses, et le parfum des orangers du jardin de la maison voisine plus enivrant que jamais.\n\nSidi Mu'adh l'attendait au centre de la salle circulaire, mais cette fois, il n'était pas seul. Devant lui, sur une table basse recouverte d'un tissu brodé de fils d'or et d'argent, reposait un manuscrit que Souhayl n'avait jamais vu — et qui, immédiatement, lui coupa le souffle. Le livre était relativement petit, pas plus grand qu'un cahier d'école, mais il irradiait une lumière si intense que Souhayl dut plisser les yeux pour le regarder. Sa couverture n'était ni en cuir ni en soie, mais semblait faite d'une matière que Souhayl ne pouvait pas identifier — à la fois solide et fluide, brillante et douce, comme si quelqu'un avait capturé la lumière de la lune et lui avait donné une forme tangible.\n\nSur la couverture, en lettres d'or pur qui brillaient de leur propre éclat, une seule phrase était inscrite : « صلى الله عليه وسلم — Sallallahu 'alayhi wa sallam — Que la paix et les bénédictions d'Allah soient sur lui. »\n\n— Souhayl, dit Sidi Mu'adh d'une voix que Souhayl n'avait jamais entendue auparavant — une voix qui tremblait, non pas de faiblesse, mais de révérence, comme celle d'un homme qui se tient devant quelque chose d'infiniment plus grand que lui. Ce manuscrit est le plus ancien de tous ceux que cette bibliothèque contient. Il est plus ancien que les pierres de la Qarawiyyin, plus ancien que la médina elle-même, plus ancien même que le Maroc tel que nous le connaissons. Il a été écrit de la main d'un Compagnon du Prophète ﷺ, qui l'a confié aux premiers savants de Fès en leur disant : « Gardez-le. Un jour, un enfant viendra le lire, et quand il le lira, il verra ce que personne d'autre ne peut voir. »\n\nSouhayl sentit ses mains trembler à l'idée de toucher un tel trésor. Un manuscrit écrit par un Compagnon du Prophète ﷺ — un homme qui avait marché aux côtés du Messager d'Allah, qui avait prié derrière lui, qui avait bu de sa main, qui avait entendu sa voix de ses propres oreilles. Le simple fait de se trouver à un mètre de ce livre faisait trembler chaque cellule de son corps.\n\n— Sidi Mu'adh... murmura-t-il, que... que contient-il ?\n\n— Un rêve, répondit le vieillard. Le plus beau de tous les rêves. Le Prophète ﷺ a dit : « Le croyant verra son Seigneur au Paradis, et il verra le Prophète ﷺ dans son sommeil. » Ce manuscrit permet à celui qui le lit avec un cœur pur de vivre cette seconde promesse — de voir le Prophète ﷺ dans un rêve. Pas un rêve ordinaire, Souhayl. Un rêve vrai — un rêve que le Prophète ﷺ lui-même a promis à ceux qui l'aiment sincèrement.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Voir le Prophète ﷺ dans un rêve ? C'est... c'est possible ? Mais je ne suis qu'un enfant. Je ne suis pas digne d'une telle grâce...",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Le Prophète ﷺ a dit : « Quiconque me voit dans un rêve me verra tel que je suis, car Satan ne peut prendre mon apparence. » Ce n'est pas une question de mérite, Souhayl. C'est une question d'amour. Et ton cœur, mon enfant, est rempli d'un amour sincère pour le Messager d'Allah — je le vois dans chaque mot que tu prononces, dans chaque prosternation que tu fais, dans chaque larme que tu verses en écoutant ses histoires. Tu es prêt.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c2s2',
          background: 'inner_world',
        },

        // --- st5c2s2: Le voyage intérieur ---
        {
          id: 'st5c2s2',
          chapterId: 'st5c2',
          title: 'Le voyage intérieur',
          narration: `Souhayl prit le manuscrit entre ses mains. La couverture était tiède, d'une chaleur vivante et douce qui ressemblait à la chaleur d'un sein maternel, et il sentit les lettres dorées vibrer sous ses doigts comme les cordes d'un instrument joué par des mains invisibles. Il ouvrit le livre avec une dévotion qu'il n'avait jamais ressentie auparavant — pas même la première fois qu'il avait ouvert le Coran — et les pages intérieures se dévoilèrent dans un éclat de lumière blanche.\n\nLe texte n'était pas en arabe ordinaire. Les lettres arabes, yes, étaient là, calligraphiées avec la plus grande élégance, mais elles brillaient, chacune, d'une lumière propre, et les mots formaient des ondes, des vagues de sens qui ne se limitaient pas à l'intellect mais qui inondaient le cœur, l'âme, l'esprit tout entier. Souhayl lut les premiers mots — « Bismillah ar-Rahman ar-Rahim. Ya Rabb, montre-moi Ton Prophète. Montre-moi la face la plus belle que la création ait jamais portée. » — et il sentit le monde autour de lui se dissoudre.\n\nLa bibliothèque disparut. Les murs de pierre, les colonnes de marbre, les étagères de cèdre, les lampes dorées — tout s'effaça comme de l'encre dans l'eau, et Souhayl se retrouva dans un espace d'une blancheur pure, sans murs, sans plafond, sans sol, un espace qui n'était ni à l'intérieur ni à l'extérieur, mais qui semblait être le cœur même de la lumière. Il n'avait pas froid, il n'avait pas chaud, il n'avait ni faim ni soif, et son corps, s'il avait encore un corps, semblait fait de cette même lumière éblouissante.\n\nEt puis, lentement, la blancheur commença à se teinter. D'abord d'un jaune très doux, comme le premier rayon du soleil à l'aube. Puis d'un doré chaud, comme le miel versé sur du cuivre. Puis d'une lumière si chaleureuse, si accueillante, si remplie d'amour que Souhayl sentit ses genoux fléchir et ses larmes couler sans qu'il puisse les retenir. C'était une lumière qui n'éblouissait pas les yeux mais qui illuminait l'âme, une lumière qui ne brûlait pas mais qui réchauffait, une lumière qui ne terrorisait pas mais qui apaisait — la lumière de la miséricorde divine, al-Rahma.\n\nDans cette lumière, une silhouette apparut. Elle marchait vers Souhayl avec une lenteur infinie, et chaque pas faisait trembler l'espace comme un tambour qui bat le rythme de l'éternité. La silhouette était celle d'un homme de taille moyenne, ni trop grand ni trop petit, à la peau dorée et lumineuse, aux cheveux noirs et légèrement ondulés qui tombaient sur ses épaules, à la barbe épaisse et soigneusement entretenue qui encadrait un visage d'une beauté que Souhayl n'avait jamais vue — une beauté qui n'était pas seulement physique mais qui irradiait de l'intérieur, comme si chaque cellule de cet homme était un joyau qui reflétait la lumière d'Allah.\n\nSes yeux. Ses yeux étaient d'un noir profond, un noir qui contenait des galaxies entières, et dans ces yeux, Souhayl vit tout — l'amour, la miséricorde, la patience, la sagesse, la tendresse, la force, l'humilité — toutes les qualités que l'être humain peut posséder, réunies dans un seul regard, un seul regard qui suffisait pour remplir le cœur de Souhayl pour l'éternité.\n\nSouhayl tomba en prosternation. Non pas parce qu'on le lui avait demandé, non pas par habitude, mais parce que son corps tout entier, son âme tout entière, se prosterna naturellement, instinctivement, comme une fleur se tourne vers le soleil. Son front toucha un sol qu'il ne voyait pas mais qui était plus doux que la soie, et des larmes inondèrent ses yeux tandis qu'il murmurait : « As-salamu 'alayka, ya Rasulullah — Que la paix soit sur toi, ô Messager d'Allah. »\n\nEt une voix répondit. Pas une voix forte, pas une voix qui tonne — une voix douce, plus douce que le miel, plus douce que la brise du soir, plus douce que le chant d'un oiseau au printemps. Une voix qui contenait toute la miséricorde du ciel et toute la tendresse de la terre :\n\n— Wa 'alaykum as-salam, ya Souhayl. Que la paix soit sur toi aussi, mon enfant.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "As-salamu 'alayka, ya Rasulullah... ﷺ C'est vraiment vous ? Je ne rêve pas ? Mon cœur va exploser de bonheur...",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce que tu vis est la grâce d'Allah, Souhayl. Le Prophète ﷺ apparaît en rêve à ceux qui l'aiment. Écoute chaque mot qu'il te dira, car ses paroles sont des perles que l'éternité ne pourra jamais ternir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st5c2s3',
          background: 'inner_world',
        },

        // --- st5c2s3: La leçon d'Al-Ihsan ---
        {
          id: 'st5c2s3',
          chapterId: 'st5c2',
          title: 'La leçon d\'Al-Ihsan',
          narration: `Le Prophète Muhammad ﷺ s'assit, et Souhayl s'assit en face de lui, son cœur battant si fort qu'il l'entendait comme un tambour dans sa poitrine. L'espace autour d'eux avait changé — la blancheur avait fait place à un jardin d'une beauté surnaturelle, aux fleurs que Souhayl ne connaissait pas, aux couleurs qu'il n'avait jamais vues, aux parfums qui ne ressemblaient à rien sur terre. Des rivières d'eau claire coulaient entre des arbres dont les troncs étaient en or et les feuilles en soie verte, et des oiseaux chantaient des mélodies qui semblaient être les noms d'Allah répétés en une infinité de tonalités.\n\n— Souhayl, dit le Prophète ﷺ, et le simple fait d'entendre son nom prononcé par cette voix fit pleurer Souhayl à nouveau. Ne pleure pas, mon enfant. Les larmes sont précieuses, mais aujourd'hui, je veux que tu écoutes avec ton cœur.\n\nSouhayl essuya ses yeux de la manche de sa djellaba — car dans ce rêve, il portait une djellaba blanche comme celle des hommes de Fès — et leva la tête vers le Prophète ﷺ. Son visage était tourné vers lui avec une bienveillance infinie, et ses lèvres souriaient d'un sourire qui aurait pu illuminer l'univers entier.\n\n— Tu as appris beaucoup de choses dans la bibliothèque, n'est-ce pas, Souhayl ? Tu as appris le Coran, les hadiths, le fiqh, l'histoire des savants. Tu as appris à lire les manuscrits anciens, à comprendre les chaînes de transmission, à naviguer dans l'océan du savoir. Et tout cela est bien — très bien. Mais il y a une chose que tu n'as pas encore apprise, une chose qui est plus importante que tout le savoir du monde réuni.\n\n— Quoi, ya Rasulullah ? demanda Souhayl, la voix tremblante.\n\n— Al-Ihsan, répondit le Prophète ﷺ. L'excellence. La perfection dans l'adoration. As-tu entendu le hadith de Jibril ?\n\n— Oui, répondit Souhayl. L'ange Jibril est venu vous trouver sous la forme d'un homme, et il vous a demandé : « Qu'est-ce que l'Islam ? Qu'est-ce que l'Iman ? Qu'est-ce que l'Ihsan ? » Et vous avez répondu : « L'Ihsan, c'est que tu adores Allah comme si tu Le voyais, et si tu ne Le vois pas, sache que Lui te voit. »\n\nLe Prophète ﷺ sourit — un sourire si large, si lumineux, que le jardin entier sembla en fleurir davantage.\n\n— Tu as bien mémorisé le hadith, Souhayl. Mais l'as-tu compris ? As-tu compris ce que signifie adorer Allah comme si tu Le voyais ?\n\nSouhayl réfléchit. Il réfléchit profondément, comme il ne l'avait jamais fait, et les mots vinrent lentement, portés par une certitude qu'il sentait naître dans son cœur.\n\n— Je crois que... cela signifie que chaque prière, chaque acte de bonté, chaque moment de notre vie doit être fait avec tout notre être. Pas seulement avec notre corps, pas seulement avec nos mots, mais avec notre cœur tout entier. Comme si Allah était juste devant nous — parce qu'Il l'est, même si nos yeux ne Le voient pas.\n\nLe Prophète ﷺ posa sa main bénie sur la tête de Souhayl, et une chaleur indescriptible envahit le garçon de la tête aux pieds — une chaleur qui n'était pas physique mais spirituelle, qui purifiait, qui apaisait, qui remplissait chaque recoin de son être d'une lumière dorée.\n\n— C'est cela, mon enfant. L'Ihsan, c'est le savoir du cœur. Tu as appris le savoir de l'esprit — et c'est bien. Mais le savoir qui ne transforme pas le cœur est comme un arbre sans fruits : il a des branches et des feuilles, mais il ne nourrit personne. Le véritable savant est celui dont le savoir le rend plus doux, plus patient, plus aimant, plus humble. Pas plus fier, pas plus dur, pas plus arrogant. Le savoir, Souhayl, est une lumière. Et une lumière ne doit jamais brûler — elle doit éclairer.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ya Rasulullah, comment puis-je pratiquer l'Ihsan dans ma vie de tous les jours ? Je suis un enfant. Je fais des erreurs. Je me fâche parfois avec mes frères. Je suis impatient. Comment adorer Allah avec excellence quand je ne suis pas parfait ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Le Prophète ﷺ a dit : « Les meilleurs d'entre vous sont ceux qui ont les meilleures moralités. » L'Ihsan, ce n'est pas la perfection divine — c'est l'effort humain vers la perfection. Chaque fois que tu choisis la bonté au lieu de la colère, la patience au lieu de la précipitation, le pardon au lieu de la rancœur — c'est de l'Ihsan.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st5c2s3_c1',
              text: "Promettre au Prophète ﷺ de vivre chaque jour avec Ihsan — l'excellence du cœur",
              nextSceneId: 'st5c2s4',
              badgeId: 'ilm',
              isCorrect: true,
            },
            {
              id: 'st5c2s3_c2',
              text: "Demander au Prophète ﷺ de prier pour lui afin d'avoir la force de pratiquer l'Ihsan",
              nextSceneId: 'st5c2s4',
              badgeId: 'ilm',
              isCorrect: true,
            },
          ],
          background: 'inner_world',
        },

        // --- st5c2s4: Le réveil transformé ---
        {
          id: 'st5c2s4',
          chapterId: 'st5c2',
          title: 'Le réveil transformé',
          narration: `Le Prophète ﷺ se leva et Sourit une dernière fois à Souhayl — un sourire que le garçon savait qu'il porterait dans son cœur pour le reste de sa vie, un sourire qui contenait tout l'amour que l'univers pouvait contenir, comprimé dans un seul instant de grâce.\n\n— Souhayl, dit le Prophète ﷺ, tu portes en toi l'héritage de ta grand-mère, le sang des gardiens, et la lumière du savoir. Mais n'oublie jamais que le plus grand des savoirs est de savoir que tu ne sais rien sans Allah. Reste humble, reste doux, reste sincère. Et quand tu seras le gardien principal de la bibliothèque — car ce jour viendra, et il est plus proche que tu ne le crois — souviens-toi de cette leçon : le savoir qui ne sert qu'à soi-même est comme de l'eau stockée qui ne nourrit personne. Le véritable savoir est celui que l'on partage, que l'on transmet, que l'on donne gratuitement, comme un arbre qui donne ses fruits à tous ceux qui passent sans distinction.\n\nPuis le Prophète ﷺ disparut. Non pas comme une bougie qui s'éteint, mais comme un lever de soleil — son absence laissa derrière elle une lumière plus belle encore que sa présence, une lumière qui envahit chaque fibre de l'être de Souhayl et qui ne le quitterait plus jamais.\n\nSouhayl ouvrit les yeux. Il était dans la bibliothèque souterraine, allongé sur son tapis de prière, le manuscrit sacré posé sur sa poitrine, ses joues trempées de larmes. Sidi Mu'adh était assis en face de lui, silencieux, son visage illuminé d'une paix surnaturelle, et Souhayl comprit que le vieillard avait prié pendant tout le temps que le rêve avait duré — prié pour que la vision soit pure, prié pour que le cœur de Souhayl soit prêt, prié pour que la grâce d'Allah descende sur cet enfant comme la pluie descend sur une terre assoiffée.\n\n— Tu l'as vu, murmura Sidi Mu'adh. Ce n'était pas nécessaire de me le dire. Je le vois sur ton visage. La lumière du Prophète ﷺ est sur toi, Souhayl. Elle restera avec toi pour toujours.\n\nSouhayl resta immobile un long moment, les yeux ouverts, fixant le plafond voûté couvert de mosaïques bleues et dorées. Le silence de la bibliothèque n'était plus un silence vide — c'était un silence plein, un silence qui contenait des milliers de voix, des milliers de prières, des milliers de générations de savants et de croyants qui avaient traversé ces murs avant lui. Et parmi ces voix, il distinguait clairement celle de sa grand-mère Aïcha, douce et ferme à la fois, qui murmurait : « Mon petit-fils a vu le Prophète ﷺ. Mon petit-fils comprend. Alhamdulillah. »\n\nSouhayl se releva lentement, referma le manuscrit sacré avec une tendresse infinie, et le reposa sur la table. Puis il tourna vers Sidi Mu'adh un visage transformé — non pas changé dans ses traits, mais irradiant d'une lumière intérieure qui n'y était pas avant, la lumière de l'Ihsan, la lumière de l'excellence, la lumière de celui qui a compris que le savoir véritable est celui qui transforme le cœur.\n\n— Sidi Mu'adh, dit-il d'une voix calme et claire, je suis prêt maintenant. Pour tout. Pour ce que vous avez à me demander. Pour ce que le destin a écrit pour moi. Je ne sais pas ce qui m'attend, mais je sais une chose : le Prophète ﷺ m'a dit que le jour de ma succession approchait. Je suis prêt à recevoir ce dépôt sacré — cet amana — et à le porter avec tout ce que j'ai, avec tout ce que je suis, avec tout ce que je serai.\n\nSidi Mu'adh ferma les yeux, et deux larmes descendirent le long de ses joues ridées — des larmes de gratitude, de soulagement, et d'une joie si profonde qu'elle ressemblait à la paix.\n\n— Alhamdulillah, murmura-t-il. Louange à Allah qui a guidé tes pas, Souhayl. Louange à Allah qui t'a montré la voie. Le moment est proche, mon enfant. Très proche.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, le Prophète ﷺ m'a enseigné l'Ihsan. Il m'a dit que le savoir qui ne transforme pas le cœur est comme un arbre sans fruits. Je veux être un arbre qui donne des fruits, Sidi. Un arbre dont l'ombre protège ceux qui ont soif de savoir. Est-ce que je serai digne de cet héritage ?",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu es déjà digne, Souhayl. Ta grand-mère le savait depuis ta naissance. Le Prophète ﷺ l'a confirmé ce soir. Et moi, je le sais depuis le premier jour où tu as franchi cette porte avec un cœur aussi pur que l'eau de Zamzam. L'Ihsan n'est pas une destination — c'est un chemin. Et tu as déjà mis le pied sur ce chemin. Alhamdulillah. Louange à Allah, le Seigneur des mondes.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'ilm',
          lesson: {
            title: 'Al-Ihsan — L\'excellence dans l\'adoration',
            content:
              "Dans le célèbre Hadith de Jibril, le Prophète ﷺ a défini l'Ihsan comme « adorer Allah comme si tu Le voyais, et si tu ne Le voyais pas, sache que Lui te voit. » L'Ihsan est le plus haut degré de la foi — c'est la conscience permanente de la présence d'Allah dans chaque moment de la vie. Ce n'est pas seulement prier avec concentration, c'est vivre chaque instant avec excellence : être bon avec ses parents, patient avec ses frères, honnête dans ses études, généreux avec ses amis. Le savoir véritable, comme le Prophète ﷺ l'a enseigné à Souhayl, est celui qui transforme le cœur et qui se manifeste dans les actes.",
            quote: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
            source: 'Hadith de Jibril — Sahih Muslim',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — Le Nouveau Gardien (الحارس الجديد)
    // ============================================================
    {
      id: 'st5c3',
      tomeId: 'souhayl_tome5',
      number: 3,
      title: 'Le Nouveau Gardien',
      titleAr: 'الحارس الجديد',
      scenes: [
        // --- st5c3s1: La préparation ---
        {
          id: 'st5c3s1',
          chapterId: 'st5c3',
          title: 'La préparation',
          narration: `Le lendemain du rêve, Souhayl se réveilla avant le Fajr — avant même que le premier rayon de lumière ne perce l'horizon de Fès. Il resta allongé dans l'obscurité de sa chambre, les yeux ouverts, écoutant le silence de la maison et le chant lointain du coq du voisin, et il repensa à chaque détail de sa vision. Le jardin surnaturel, les fleurs impossibles, les rivières d'eau claire, les arbres d'or — et surtout, le visage du Prophète ﷺ, ce visage qui contenait toute la beauté de la création, ce sourire qui aurait pu guérir les cœurs les plus brisés.\n\nIl se leva, fit ses ablutions avec une attention qu'il n'avait jamais eue auparavant — chaque goutte d'eau semblait différente, plus pure, plus vivante — et pria le Fajr avec une concentration totale, comme si Allah était vraiment là, juste devant lui, le regardant avec miséricorde. C'était l'Ihsan. Il le comprenait maintenant. Non pas comme un concept abstrait appris dans un livre, mais comme une réalité vivante qui transformait chaque acte du quotidien.\n\nAprès la prière, Souhayl prit le carnet de sa grand-mère Aïcha et le relut, cherchant des indices, des messages, quelque chose qui pourrait lui préparer le cœur pour ce que Sidi Mu'adh avait appelé « le moment ». Il parcourut les pages une par une, et il découvrit, vers la fin du carnet, une page qu'il n'avait pas vue la première fois — une page pliée en deux, scellée avec un petit fil rouge. Avec des mains tremblantes, il défait le fil et ouvrit la page.\n\nL'écriture de sa grand-mère y était plus grande que d'habitude, comme si elle avait voulu que les mots soient faciles à lire, faciles à comprendre, faciles à retenir. Souhayl lut : « Mon bien-aimé petit-fils, quand tu liras ces mots, le moment sera venu. Sidi Mu'adh te confiera la gardiennage de la bibliothèque. Accepte-la, mon enfant. Accepte-la non pas par orgueil, non pas par ambition, mais par amour — amour du savoir, amour d'Allah, amour de tous ceux qui, avant toi, ont protégé ces manuscrits avec leur vie. Et souviens-toi : un gardien ne possède pas le savoir — il le sert. Un gardien ne domine pas les livres — il les protège. Un gardien ne retient pas la connaissance — il la partage. C'est cela, être gardien. C'est cela, être humain. Je prie pour toi, mon Souhayl. Je prie pour que tu sois meilleur que moi, plus sage que moi, plus aimant que moi. Car c'est cela, le véritable héritage : chaque génération doit être meilleure que la précédente. Ta grand-mère qui t'aime depuis avant ta naissance. »\n\nSouhayl referma le carnet et le serra contre son cœur. Les larmes coulaient sur ses joues, mais c'étaient des larmes de gratitude, de reconnaissance, d'amour — l'amour d'un petit-fils pour une grand-mère qu'il n'avait pas assez connue mais dont l'héritage vivait dans chaque fibre de son être.\n\nIl descendit à la bibliothèque. Sidi Mu'adh l'attendait, et cette fois, il n'était pas seul dans la salle circulaire. Tout avait été préparé — les lampes brillaient d'un éclat particulier, les étagères avaient été soigneusement arrangées, un grand tapis de prière had been disposé au centre de la salle, et sur ce tapis, posés sur un tissu blanc brodé de fils d'or, plusieurs objets sacrés attendaient : le manuscrit du Prophète ﷺ, une clé ancienne en cuivre, le chapelet de Lalla Aïcha, et un miroir circulaire encadré d'argent.\n\n— Souhayl, dit Sidi Mu'adh d'une voix solennelle, le jour est venu. Ce soir, au Maghrib, la cérémonie de succession aura lieu. Ta famille sera présente. Ta mère, ton père, tes frères — tous verront la bibliothèque pour la première fois. Et toi, tu recevras ce qui t'a été destiné depuis avant ta naissance : la gardiennage de la bibliothèque de la Qarawiyyin.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, Nawfel et Wassim... ils vont voir la bibliothèque ? Ils vont connaître le secret ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Le secret n'était pas destiné à être éternel, mon enfant. Il devait être protégé jusqu'à ce que le bon moment vienne — et ce moment est ce soir. Nawfel et Wassim sont tes frères. Ils portent aussi le sang de Lalla Aïcha. Ils méritent de voir ce que tu as vu, de comprendre ce que tu as compris, de participer à l'héritage que ta grand-mère a protégé pendant quarante ans. Un gardien ne marche jamais seul — il est entouré de ceux qui l'aiment et le soutiennent.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Lalla Aïcha a écrit une lettre pour moi. Scellée avec un fil rouge, à la fin de son carnet. Elle m'a dit d'accepter la gardiennage, pas par orgueil, mais par amour. Elle a dit qu'un gardien ne possède pas le savoir — il le sert. Je ferai cela, Sidi Mu'adh. Je le promets.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st5c3s2',
          background: 'inner_world',
        },

        // --- st5c3s2: La découverte des frères ---
        {
          id: 'st5c3s2',
          chapterId: 'st5c3',
          title: 'La découverte des frères',
          narration: `Au moment de la prière du Maghrib, alors que le ciel de Fès se teignait de violet et d'or et que les minarets de la médina se découpaient comme des épées de lumière contre l'horizon, Souhayl se tint devant la porte de fer forgé avec sa famille entière. Son père, Mehdi, avait revêtu sa plus belle djellaba blanche et son visage portait une sérénité que Souhayl ne lui avait jamais vue — la sérénité d'un homme qui voit le cercle se refermer, la promesse de sa mère enfin accomplie. Aziza, sa mère, portait un hijab d'un blanc immaculé et ses yeux brillaient de fierté et d'émotion.\n\nNawfel, le frère de huit ans, se tenait droit comme un piquet, essayant de paraître courageux, mais ses yeux trahissaient une excitation qu'il ne pouvait pas contenir. Ses mains étaient serrées sur son pantalon et il se dandinnait d'un pied sur l'autre, impatient de découvrir ce que son grand frère lui avait si longtemps caché.\n\nWassim, le plus petit, six ans à peine, tenait la main de sa mère et fixait la porte de fer avec de grands yeux ronds remplis d'émerveillement et un peu de peur — la peur mêlée de curiosité que ressentent les enfants devant l'inconnu, cette peur qui disparaît dès que la magie opère.\n\nSouhayl tira la porte. Elle s'ouvrit sans effort, comme si elle avait attendu ce moment depuis des siècles, et l'escalier descendant s'illumina devant eux, chaque marche brillant comme un barreau d'or dans la pénombre. Les lampes à huile s'allumèrent les unes après les autres au passage de la famille, créant un chemin de lumière qui ressemblait à une allée de mariage — une allée qui menait non pas à une noce, mais à une rencontre sacrée avec le savoir.\n\nWassim fut le premier à s'arrêter au bas de l'escalier. Sa bouche s'ouvrit mais aucun son n'en sortit. Ses yeux, grands ouverts, allaient des étagères colossales aux colonnes de marbre, des mosaïques du plafond au bassin octogonal, et il lâcha la main de sa mère pour avancer seul, à petits pas hésitants, comme un explorateur qui découvre un continent inconnu.\n\n— C'est... murmura-t-il d'une voix à peine audible. C'est la plus belle chose que j'ai jamais vue. C'est comme le château des mille et une nuits. Mais en vrai.\n\nNawfel, moins impressionné par la beauté que par l'ampleur du lieu, tourna sur lui-même pour compter les étagères, abandonnant rapidement — il y en avait trop. Il s'approcha de la plus proche et effleura du doigt le dos d'un manuscrit relié en cuir rouge, et quand il sentit la chaleur du cuir sous sa peau, il recula d'un pas, stupéfait.\n\n— Les livres sont chauds ! s'exclama-t-il. Souhayl, les livres sont chauds ! C'est comme s'ils étaient vivants !\n\n— Ils le sont, répondit Souhayl avec un sourire. Chaque manuscrit ici porte en lui la voix de celui qui l'a écrit, la prière de celui qui l'a protégé, et l'espoir de celui qui le lira un jour. Ils ne sont pas seulement chauds, Nawfel — ils respirent.\n\nAziza s'assit sur le bord du bassin octogonal et posa sa main dans l'eau, dont la surface reflétait les lampes dorées comme un miroir liquide. Mehdi se tenait debout près de la porte, les bras croisés, et Souhayl vit, dans les yeux de son père, un mélange de nostalgie et de fierté — la nostalgie de l'enfant qu'il avait été, qui avait visité cette bibliothèque avec sa propre mère, et la fierté du père qui voyait son fils aîné devenir l'homme que sa lignée attendait.\n\n— Maman, dit Wassim en tirant la manche d'Aziza, Lalla Aïcha était gardienne ici ? Notre vraie grand-mère ? Elle a marché exactement là où je marche maintenant ?\n\n— Oui, mon bébé, répondit Aziza en le caressant. Elle a marché ici pendant quarante ans. Elle a protégé chaque livre, chaque manuscrit, chaque page. Et maintenant, c'est ton grand frère Souhayl qui continuera son œuvre. N'est-ce pas magnifique ?\n\nWassim hocha la tête vigoureusement, ses boucles noires rebondissant sur son front, et il murmura avec toute la sincérité que son cœur de six ans pouvait contenir : « Jazakallah, Lalla Aïcha. Merci d'avoir protégé les livres. »\n\nSidi Mu'adh, qui observait la scène depuis le fond de la bibliothèque, essuya une larme discrète et sourit. Les pierres de la bibliothèque vibrèrent doucement, comme si elles aussi accueillaient cette nouvelle famille dans leur cœur de pierre.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Souhayl, tu as gardé ça pour toi tout ce temps ? Cette bibliothèque est sous la Qarawiyyin ? C'est la chose la plus incroyable que j'aie jamais vue ! Pourquoi tu ne m'as rien dit avant ?",
              emotion: 'surprised',
            },
            {
              characterId: 'souhayl',
              text: "Je ne pouvais pas, Nawfel. Ce n'était pas mon secret à garder — c'était un amana, un dépôt sacré que Lalla Aïcha avait confié à Baba et à maman. Mais maintenant, le secret est levé. Vous êtes ici, vous voyez, vous comprenez. Et à partir de ce soir, vous ferez partie de cette histoire.",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Est-ce qu'il y a un livre avec des images de dinosaures ? Ou des histoires de pirates ? J'aime bien les pirates.",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Wassim, mon petit, cette bibliothèque contient quelque chose de bien plus précieux que les dinosaures et les pirates — elle contient le savoir des plus grands savants que l'humanité ait portés. Mais qui sait ? Peut-être qu'un jour, Souhayl te trouvera un manuscrit qui raconte des histoires extraordinaires.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'st5c3s3',
          background: 'inner_world',
        },

        // --- st5c3s3: La cérémonie de succession ---
        {
          id: 'st5c3s3',
          chapterId: 'st5c3',
          title: 'La cérémonie de succession',
          narration: `Sidi Mu'adh se leva lentement et marcha vers le centre de la bibliothèque, là où le grand tapis de prière avait été disposé. Tout le monde se tut immédiatement — même Wassim, qui ne savait pas ce qui se passait mais sentait que ce moment exigeait un silence absolu. Les lampes de la bibliothèque s'atténuèrent doucement, puis se rallumèrent avec une intensité nouvelle, et la salle circulaire se mit à vibrer d'une énergie invisible mais palpable, comme si chaque manuscrit, chaque page, chaque lettre gravée dans les murs participait à la cérémonie.\n\n— Nous sommes rassemblés ce soir, commença Sidi Mu'adh d'une voix qui remplissait l'espace comme le son d'un cor, pour accomplir un rite qui a été accompli des dizaines de fois au cours des siècles — le passage de la gardiennage. Cette bibliothèque, mes chers, n'est pas seulement un lieu de savoir. C'est un être vivant, un cœur qui bat sous la terre de Fès depuis plus de mille ans. Elle a eu de nombreux gardiens — des hommes, des femmes, des jeunes, des vieux — et chacun a apporté sa lumière, sa sagesse, son amour. Ce soir, la lumière passe à un nouveau gardien.\n\nIl se tourna vers Souhayl. Le garçon se tenait debout devant sa famille, droit comme un minaret, ses yeux brillants de détermination, ses mains légèrement tremblantes mais sa voix assurée. Il portait la djellaba blanche que sa mère avait préparée pour l'occasion, et sur son front, une petite trace de terre provenant de sa prosternation du Maghrib.\n\n— Souhayl Benali, dit Sidi Mu'adh en tendant la clé ancienne en cuivre. Cette clé a été forgée il y a plus de mille ans par les premiers artisans de Fès, à partir du métal d'une épée offerte par un savant venu de Bagdad. Elle n'ouvre aucune porte matérielle — elle ouvre le cœur de la bibliothèque. Quand tu la tiendras, les manuscrits te reconnaîtront comme leur gardien, et les pierres te répondront quand tu leur parleras.\n\nSouhayl prit la clé. Elle était lourde — beaucoup plus lourde qu'elle ne semblait — et tiède, d'une chaleur qui ressemblait à la main de sa grand-mère. Ses doigts s'enfermèrent autour du cuivre, et il sentit une vibration remonter le long de son bras, traverser son épaule, envahir sa poitrine, et s'installer dans son cœur comme une seconde pulsation.\n\n— Lalla Aïcha, continua Sidi Mu'adh en prenant le chapelet de la grand-mère. Ce chapelet a compté les dhikr de ta grand-mère pendant quarante ans — les Subhan'Allah, les Alhamdulillah, les Allahu Akbar qui ont protégé cette bibliothèque par la baraka de la rémemberation d'Allah. En te le remettant, je te remets son héritage spirituel. Ne le pose jamais, Souhayl. Laisse-le pendre à ton cou ou dans ta poche, et chaque fois que tes doigts le toucheront, souviens-toi de celle qui l'a porté avant toi.\n\nSouhayl prit le chapelet et le passa autour de son cou. Les perles, usées par quarante ans d'utilisation, étaient douces sous ses doigts, et il sentit, en les touchant, une vague de paix l'envahir — la paix de Lalla Aïcha, la paix d'une vie consacrée au savoir et à la prière.\n\n— Enfin, dit Sidi Mu'adh en prenant le miroir circulaire encadré d'argent, regarde-toi, Souhayl.\n\nSouhayl regarda dans le miroir. Il vit son propre visage — un visage d'enfant de neuf ans, presque dix, aux yeux bruns et sérieux, aux cheveux noirs et bouclés. Mais dans le miroir, son visage n'était pas seul. Derrière lui, floue mais présente, une silhouette se dessinait — une femme âgée au voile vert, aux yeux qui souriaient, aux mains croisées sur la poitrine. Lalla Aïcha. Sa grand-mère. Elle était là, dans le miroir, derrière son petit-fils, comme elle l'avait été toute sa vie — présente, protectrice, aimante.\n\nSouhayl sourit à travers ses larmes, et dans le miroir, Lalla Aïcha sourit aussi.\n\n— Tu es le gardien maintenant, Souhayl, dit Sidi Mu'adh. La bibliothèque est à toi — non pas pour que tu la possèdes, mais pour que tu la serves. Protège-la, nourris-la, partage-la. Et quand le jour viendra où ton propre cœur te dira de chercher un successeur, souviens-toi de ce soir, de cette émotion, de cette promesse. Le flambeau passe de main en main, de génération en génération, et il ne s'éteint jamais — parce que la lumière du savoir ne s'éteint jamais tant qu'il y a un cœur pur pour la porter.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Souhayl Benali, je te nomme Gardien de la Bibliothèque de la Qarawiyyin. Par le sang de Lalla Aïcha, par la grâce du Prophète ﷺ, par la volonté d'Allah le Très-Haut. Acceptes-tu ce dépôt sacré — cet amana — et promets-tu de le porter avec honneur, sincérité et humilité ?",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Je l'accepte, Sidi Mu'adh. Je le promets devant Allah, devant ma famille, devant ma grand-mère Lalla Aïcha, et devant tous les gardiens qui m'ont précédé. Je promets de protéger ce savoir, de le nourrir, de le partager. Je promets de servir cette bibliothèque comme un serviteur sert son maître — avec dévotion, patience et amour. Wa Allahu musta'an — et c'est Allah qu'il faut demander de l'aide.",
              emotion: 'determined',
            },
            {
              characterId: 'mehdi',
              text: "Ma mère serait fière. Non — ma mère EST fière. Je la sens, Souhayl. Je la sens dans l'air de cette bibliothèque, dans la chaleur de cette clé, dans la lumière de ces lampes. Ta grand-mère Aïcha est ici, ce soir, et elle sourit.",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Mon fils... mon grand garçon... Tu portes maintenant un héritage qui traversera les siècles. Que Allah te bénisse, te protège et illumine ton chemin de Sa lumière.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'st5c3s3_c1',
              text: "Inviter Nawfel et Wassim à devenir ses assistants — le savoir se partage",
              nextSceneId: 'st5c3s4a',
              badgeId: 'hikma',
              isCorrect: true,
            },
            {
              id: 'st5c3s3_c2',
              text: "Demander à Sidi Mu'adh de rester comme guide — la sagesse a besoin d'un mentor",
              nextSceneId: 'st5c3s4b',
              badgeId: 'hikma',
              isCorrect: true,
            },
          ],
          background: 'inner_world',
        },

        // --- st5c3s4a: Le flambeau transmis ---
        {
          id: 'st5c3s4a',
          chapterId: 'st5c3',
          title: 'Le flambeau transmis',
          narration: `Souhayl se tourna vers ses frères. Nawfel se tenait debout, le dos droit, les yeux brillants d'une fierté qu'il essayait de cacher sous un air d'indifférence — mais Souhayl connaissait son frère et voyait bien que ses mains tremblaient et que sa lèvre inférieure frémissait. Wassim, lui, était assis par terre, les jambes croisées, et contemplait la bibliothèque avec des yeux si grands qu'ils semblaient contenir tout l'univers.\n\n— Nawfel, Wassim, dit Souhayl. Je ne serais pas le gardien que je dois être si je marchais seul. Lalla Aïcha l'a écrit dans son carnet : « Un gardien ne marche jamais seul — il est entouré de ceux qui l'aiment et le soutiennent. » Vous êtes mes frères. Vous portez le même sang, le même héritage, la même promesse. Je veux que vous soyez mes assistants. Nawfel, tu seras le Gardien des Mots — tu apprendras les langues, les calligraphies, les traductions. Et Wassim, tu seras le Gardien des Cœurs — tu accueilleras ceux qui viendront ici, tu leur feras sentir que ce lieu est un foyer, pas une forteresse.\n\nNawfel ouvrit la bouche, la referma, puis l'ouvrit à nouveau. Ses yeux brillèrent d'une lueur que Souhayl avait rarement vue — une lueur de reconnaissance, d'orgueil fraternel et d'une joie si pure qu'elle semblait faite de lumière liquide.\n\n— Le Gardien des Mots, répéta-t-il doucement, comme si le titre lui avait été taillé sur mesure. J'accepte, Souhayl. Je serai digne de ce titre. Et je te le promets — un jour, je connaîtrai toutes les langues de tous les manuscrits de cette bibliothèque.\n\nWassim bondit sur ses pieds et se jeta dans les bras de Souhayl avec une énergie de six ans qui fit sourire tout le monde, même Sidi Mu'adh.\n\n— Le Gardien des Cœurs ! cria-t-il. C'est moi ! Je suis le Gardien des Cœurs ! Et je vais faire beaucoup de thé pour les visiteurs, parce que le thé, ça réchauffe le cœur, c'est maman qui le dit !\n\nL'éclat de rire qui parcourut la bibliothèque résonna dans les murs de pierre comme une cascade de joie. Même les lampes semblaient rire — leur lumière dansait, oscille, créait des ombres joyeuses sur les mosaïques du plafond. Aziza pressa ses mains l'une contre l'autre et murmura « Masha'Allah » avec des yeux brillants de larmes. Mehdi posa sa main sur l'épaule de Sidi Mu'adh et inclina la tête en signe de respect et de gratitude.\n\n— Souhayl, dit Sidi Mu'adh, tu as compris la première leçon de la sagesse — al-Hikma — : le pouvoir ne se conserve pas en le retenant, mais en le donnant. En partageant la gardiennage avec tes frères, tu ne l'as pas divisée — tu l'as multipliée. C'est cela, la véritable sagesse. Le savoir est comme une flamme : si tu la partage, elle ne diminue pas — elle éclaire davantage.\n\nLa cérémonie se termina dans la douceur. La famille Benali, assise en cercle autour du bassin octogonal, partagea des dattes et du thé à la menthe que Aziza avait eu la présence d'esprit d'apporter dans un thermos. Les enfants riaient, les parents souriaient, et Sidi Mu'adh, pour la première fois depuis que Souhayl le connaissait, racontait des histoires de sa propre jeunesse — des histoires de son maître, du gardien qui l'avait formé, de la vieille femme qui lui avait appris à relier les manuscrits avec de la soie et de la colle de gara.\n\nEt au milieu de tout cela, Souhayl tenait la clé de cuivre dans une main et le chapelet de Lalla Aïcha dans l'autre, et il sentait, dans son cœur, quelque chose de nouveau — quelque chose de grand, de lumineux, d'indestructible. La sagesse. Non pas la sagesse des livres, mais la sagesse du cœur — celle qui sait que le véritable trésor n'est pas ce qu'on possède, mais ce qu'on donne ; que la véritable force n'est pas celle qui domine, mais celle qui protège ; et que le véritable savoir n'est pas celui qui remplit la tête, mais celui qui transforme la vie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Souhayl... personne ne m'avait jamais fait confiance comme ça. Le Gardien des Mots... Je serai le meilleur, tu verras. Je traduirai chaque manuscrit de cette bibliothèque. Je ferai connaître ces trésors au monde entier.",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Et moi, le Gardien des Cœurs ! Je vais faire sourire tout le monde ! Et je garderai les livres au chaud ! Parce que les livres aiment la chaleur, c'est ça ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Oui, Wassim. Les livres aiment la chaleur — la chaleur des cœurs qui les lisent avec amour. Et toi, tu as le cœur le plus chaud que je connaisse.",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Al-Hikma, la sagesse, est la couronne du savoir. Sans elle, le savoir est une épée sans fourreau — dangereuse et sans direction. Mais avec elle, le savoir devient une lumière qui guide, une eau qui désaltère, un arbre qui donne des fruits. Souhayl, tu as reçu ce soir trois trésors : l'amana de ta grand-mère, l'ilm du Prophète ﷺ, et la hikma de cette cérémonie. Porte-les toujours avec toi, et transmets-les à ceux qui viendront après toi.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'hikma',
          lesson: {
            title: 'Al-Hikma — La sagesse de l\'héritage',
            content:
              "La sagesse — Al-Hikma — est le couronnement de tout le chemin parcouru par Souhayl. Après avoir appris le savoir (Al-'Ilm), découvert la confiance (Al-Amana) et compris l'excellence spirituelle (Al-Ihsan), Souhayl reçoit la sagesse suprême : celle de partager. En faisant de ses frères ses assistants, il prouve que la véritable grandeur ne consiste pas à tout garder pour soi, mais à distribuer la lumière. Le savoir est comme une flamme : plus on la partage, plus elle brille. L'Imam Al-Ghazali disait que la sagesse est « l'action du savoir » — le savoir qui reste dans les livres ne sert à personne ; le savoir qui vit dans les cœurs et se manifeste dans les actes, voilà la véritable sagesse.",
            quote: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st5c3s4b: Le maître et l'élève ---
        {
          id: 'st5c3s4b',
          chapterId: 'st5c3',
          title: 'Le maître et l\'élève',
          narration: `Souhayl se tourna vers Sidi Mu'adh. Le vieillard se tenait devant lui, ses yeux verts brillant dans la lumière dorée de la bibliothèque, et Souhayl vit, pour la première fois, quelque chose qu'il n'avait jamais remarqué — la fatigue. Non pas une fatigue physique, mais une fatigue de l'âme, celle d'un homme qui a porté un fardeau pendant très longtemps et qui attendait, avec une patience infinie, le moment où il pourrait le poser.\n\n— Sidi Mu'adh, dit Souhayl. Je suis le gardien maintenant. Mais un gardien sans guide est comme un navire sans boussole. Je vous demande — non, je vous supplie — de rester avec moi. Pas comme un maître qui enseigne, mais comme un compagnon qui marche à mes côtés. Votre sagesse est irremplaçable, votre présence est une bénédiction, et je ne veux pas faire un seul pas sur ce chemin sans vous.\n\nSidi Mu'adh resta silencieux un long moment. Ses yeux verts se remplirent de larmes — des larmes qu'il avait retenues pendant des années, des décennies peut-être, et qui coulèrent enfin, librement, sur ses joues ridées. Puis il sourit, et son sourire illuminait la bibliothèque entière, comme il le faisait le premier jour où Souhayl l'avait vu.\n\n— Souhayl, dit-il doucement, tu viens de me donner le plus beau cadeau qu'un vieillard puisse recevoir — la preuve que sa vie n'a pas été vaine. Oui, je resterai. Pas pour toujours — car chaque chose a son terme, et mon terme est plus proche que le tien — mais assez longtemps pour te transmettre ce que les livres ne peuvent pas enseigner : les silences, les regards, les gestes, les intuitions. Le savoir des mains, Souhayl. Le savoir du cœur.\n\nAziza posa sa main sur son propre cœur, émue par cette scène. Mehdi inclina la tête, reconnaissant la bonté immense de Sidi Mu'adh. Nawfel sourit en silence. Et Wassim, qui ne comprenait pas toute la profondeur du moment mais sentait sa beauté, murmura tout bas : « Sidi Mu'adh, vous pouvez rester aussi longtemps que vous voulez. Et je vous ferai du thé. Parce que le thé, ça réchauffe le cœur. »\n\nSidi Mu'adh éclata de rire — un rire clair, joyeux, qui résonna dans la bibliothèque comme un écho de tous les rires qu'elle avait entendus au cours des siècles.\n\n— Merci, petit Wassim. Le thé de ton cœur sera toujours le bienvenu. Et maintenant, dit-il en se tournant vers toute la famille, levons nos mains et prions ensemble. Prions pour Lalla Aïcha, pour Souhayl, pour cette bibliothèque, et pour tous les savants qui, avant nous, ont consacré leur vie à la lumière du savoir.\n\nTous levèrent les mains. Les lampes de la bibliothèque oscillèrent doucement, les pierres vibrèrent d'une gratitude silencieuse, et les mots de la prière montèrent vers le plafond voûté comme des oiseaux dorés s'envolant vers le ciel : « Allahoumma barik fi 'ilmihim, wa zid fi rizqihim, wa-j'alhum min warathati Jannatih — Ô Allah, bénis leur savoir, augmente leur subsistance, et fais d'eux des héritiers de Ton Paradis. »\n\nEt au milieu de la prière, Souhayl sentit la clé de cuivre vibrer dans sa main, le chapelet de Lalla Aïcha pulser contre sa poitrine, et une voix — douce, lointaine, mais parfaitement claire — murmurer dans son cœur : « Bien fait, mon petit-fils. Bien fait. Le savoir est éternel, et tu es maintenant le gardien de son éternité. »`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Je resterai, Souhayl. Le temps qu'Allah me donnera. Et quand mon heure viendra, tu ne seras pas seul — car le savoir a ses propres anges, et cette bibliothèque a ses propres gardiens invisibles. Tu n'as jamais marché seul, et tu ne marcheras jamais seul. Telle est la promesse d'Allah à ceux qui servent Son savoir.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Telle est la promesse d'Allah. Et telle est ma promesse à vous, à Lalla Aïcha, à mes parents, à mes frères, et à tous ceux qui viendront après moi : le savoir ne s'éteindra jamais tant qu'il y aura un cœur pour le porter. Wa sallallahu 'ala nabiyyina Muhammad. Et que la prière et la paix soient sur notre Prophète Muhammad ﷺ.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st5c3s4a',
          background: 'inner_world',
        },
      ],
      lessons: [],
    },
  ],
  monsters: [],
  spiritualLesson:
    'Le savoir véritable est celui qui transforme le cœur. Al-Amana (la confiance), Al-Ihsan (l\'excellence spirituelle) et Al-Hikma (la sagesse) sont les trois piliers du gardien. Le savoir ne s\'hérite pas — il se mérite, se vit et se partage. Comme une flamme, plus on le donne, plus il brille. Le dernier mot appartient à l\'éternité : « وَقُل رَّبِّ زِدْنِي عِلْمًا — Ô mon Seigneur, augmente-moi en savoir. »',
};
