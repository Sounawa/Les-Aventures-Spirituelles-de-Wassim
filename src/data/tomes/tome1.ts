import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome1: Tome = {
  id: 'tome1',
  number: 1,
  title: "L'Éveil",
  titleAr: 'الصحوة',
  subtitle: 'Le voyage intérieur de Nawfel',
  description:
    "Dans un petit village au pied des montagnes du Rif, un garçon de huit ans découvre que son cœur recèle un monde invisible. Entre rêves mystérieux et l'enseignement d'un sage shaykh, Nawfel apprend que le plus grand des combats est celui que l'on mène contre soi-même. Ce premier tome l'initie aux trois états du Nafs et au premier des monstres intérieurs : la colère.",
  theme: 'Tawakkul & Sabr — Foi et Patience',
  coverImage: '/images/tome1-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Rêve Étrange (الحلم الغريب)
    // ============================================================
    {
      id: 't1c1',
      tomeId: 'tome1',
      number: 1,
      title: 'Le Rêve Étrange',
      titleAr: 'الحلم الغريب',
      scenes: [
        // --- t1c1s1: Une nuit particulière ---
        {
          id: 't1c1s1',
          chapterId: 't1c1',
          title: 'Une nuit particulière',
          narration: `La maison de la famille Benali était plongée dans un silence doux, ce genre de silence qui ne se trouve qu'au cœur de la nuit, quand le monde entier semble retenir son souffle. Dehors, le ciel de Chefchaouen était parsemé d'étoiles si nombreuses qu'on aurait dit que Allah avait déversé un sac de diamants sur un velours bleu foncé. Le vent soufflait doucement entre les ruelles blanches et bleues du village, portant avec lui le parfum des jasmins qui grimpaient le long des murettes anciennes.\n\nNawfel, allongé dans son lit étroit, fixait le plafond de sa petite chambre qu'il partageait avec ses deux frères. Souhayl, l'aîné de dix ans, dormait déjà dans le lit voisin, son visage paisible illuminé par la lune qui filtrait à travers les volets en bois sculpté. Wassim, le plus jeune à six ans, était blotti contre lui, sa main petite serrée sur le coin de la couverture, comme s'il tenait quelque chose de précieux.\n\nNawfel, lui, ne trouvait pas le sommeil. Il y avait quelque chose de différent ce soir, une étrange sensation, comme si l'air lui-même vibrait d'une énergie invisible. Son cœur battait un peu plus vite que d'habitude, non pas de peur, mais d'une attente qu'il ne pouvait pas nommer. Il se tourna sur le côté, fermant les yeux, et commença à réciter doucement la sourate Al-Fatiha, comme sa mère Aziza lui avait appris à le faire chaque soir avant de dormir. Les mots familiers coulaient sur ses lèvres comme de l'eau fraîche, et peu à peu, la fatigue finit par l'emporter. Ses paupières devinrent lourdes, et le monde réel commença à s'effacer doucement, laissant place à quelque chose d'entièrement nouveau.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Bismillah... Allahoumma bismika amoutou wa ahya...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s2',
          background: 'bedroom',
        },

        // --- t1c1s2: Le jardin magique ---
        {
          id: 't1c1s2',
          chapterId: 't1c1',
          title: 'Le jardin magique',
          narration: `Nawfel se retrouva debout, non pas dans sa chambre, mais dans un jardin d'une beauté surnaturelle qui lui coupa le souffle. Tout autour de lui s'étendait un paysage qui ne ressemblait à rien de ce qu'il avait jamais vu, même dans les plus beaux livres que possédait l'école du village. Le sol sous ses pieds était d'un vert émeraude si profond qu'il semblait lumineux de lui-même, comme si la terre elle-même était vivante et respirait.\n\nDes arbres immenses s'élevaient vers un ciel qui n'était ni bleu ni noir, mais d'un violet doré, parsemé de lumières dansantes qui ressemblaient à des étoiles, mais qui bougeaient et tournoyaient comme des lucioles géantes. Les feuilles de ces arbres n'étaient pas vertes : elles étaient faites d'or fin, et quand le vent — un vent chaud et parfumé — les faisait frissonner, elles produisaient un son délicat, une mélodie cristalline qui ressemblait au doux tintement de milliers de petites clochettes.\n\nAu centre de ce jardin merveilleux, des fleurs d'une taille extraordinaire poussaient en cercles parfaits. Leurs pétales étaient de toutes les couleurs imaginables et certaines qu'on ne pouvait même pas décrire avec des mots. Et ces fleurs chantaient. Oui, elles chantaient vraiment. Chaque pétale, en s'ouvrant et en se refermant doucement, émettait une note de musique si pure, si douce, que Nawfel sentit des larmes de joie monter à ses yeux sans savoir pourquoi.\n\nMais ce qui attira le plus son attention, c'était la grande porte qui se dressait au bout d'un chemin de lumière blanche. Elle était immense, faite d'un bois sombre veiné d'or et d'argent, et elle irradiait une chaleur qui ressemblait à celle d'un foyer en hiver. Au-dessus de la porte, gravé dans une calligraphie d'une beauté à couper le souffle, un mot brillait d'une lumière propre, comme un soleil miniature : « قلب » — le cœur. Nawfel sentit que cette porte était importante, qu'elle attendait quelque chose de lui, ou plutôt, qu'elle attendait lui.`,
          dialogues: [],
          choices: [],
          nextSceneId: 't1c1s3',
          background: 'inner_world',
        },

        // --- t1c1s3: La voix mystérieuse ---
        {
          id: 't1c1s3',
          chapterId: 't1c1',
          title: 'La voix mystérieuse',
          narration: `Alors que Nawfel avançait lentement sur le chemin de lumière, ses pieds nus effleurant le sol tiède et vivant, une voix se fit entendre. Elle ne venait d'aucune direction précise. Elle semblait naître de partout à la fois — du ciel, de la terre, des arbres dorés, des fleurs chantantes — comme si le jardin entier parlait d'une seule et même voix.\n\nC'était une voix douce, infiniment douce, mais qui portait en elle une profondeur qui faisait trembler légèrement l'air autour de Nawfel. Ce n'était pas une voix d'homme ni de femme, pas tout à fait. C'était quelque chose de plus ancien, de plus vaste, comme le murmure de l'océan quand la nuit est calme et que les vagues caressent le rivage sans se presser.\n\n— Nawfel... dit la voix, et Nawfel frissonna de la tête aux pieds, car elle prononçait son nom comme personne ne l'avait jamais fait, avec une tendresse et une connaissance qui dépassaient tout ce qu'il avait connu.\n\nLe garçon s'arrêta net. Son cœur battait si fort qu'il l'entendait dans ses oreilles. Devant lui, la grande porte avec « قلب » gravé dessus pulse doucement, comme un cœur vivant, et la lumière qui en émanait semblait l'appeler, l'inviter à avancer. Mais quelque chose en lui — un instinct, une intuition — lui disait qu'il devait choisir comment répondre à cette invitation. Ce choix, même s'il ne le savait pas encore, serait le premier d'une longue série de choix qui allaient définir qui il allait devenir.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Qui... qui es-tu ? Où suis-je ?',
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't1c1s3_c1',
              text: "S'avancer courageusement vers la voix et la porte",
              nextSceneId: 't1c1s4a',
              badgeId: 'tawakkul',
              isCorrect: true,
            },
            {
              id: 't1c1s3_c2',
              text: "Attendre patiemment sans bouger, en silence",
              nextSceneId: 't1c1s4b',
              badgeId: 'sabr',
              isCorrect: true,
            },
            {
              id: 't1c1s3_c3',
              text: "Reculer, cette situation est trop étrange",
              nextSceneId: 't1c1s4c',
            },
          ],
          background: 'inner_world',
        },

        // --- t1c1s4a: Le cœur qui s'ouvre ---
        {
          id: 't1c1s4a',
          chapterId: 't1c1',
          title: 'Le cœur qui s\'ouvre',
          narration: `Nawfel prit une grande inspiration, sentant l'air parfumé du jardin remplir ses poumons, et il fit un pas en avant. Puis un autre. Puis un autre encore. Chaque pas semblait plus léger que le précédent, comme si le jardin lui-même le portait, l'encourageait à avancer. La peur n'avait pas disparu — elle était toujours là, tapie dans un coin de son esprit — mais Nawfel avait pris la décision de ne pas l'écouter. Et c'était suffisant.\n\nÀ mesure qu'il approchait de la porte, la chaleur qui en émanait augmenta, mais c'était une chaleur bienfaisante, comme celle d'un rayon de soleil en plein hiver, ou celle des bras de sa mère quand il revait d'être petit. Les caractères « قلب » au-dessus de la porte commencèrent à briller plus intensément, et Nawfel distingua, dans leur lumière dorée, ce qui ressemblait à des arabesques infinies, des motifs qui se déplaçaient et se transformaient comme les vagues de la mer.\n\nLa voix parla de nouveau, et cette fois, Nawfel sentit que les mots ne venaient pas seulement de l'extérieur mais résonnaient à l'intérieur de lui, dans son propre cœur.\n\n— Tu as choisi de venir vers moi avec courage, petit cœur. Sache que le courage n'est pas l'absence de peur. Le courage, c'est avancer malgré la peur, en faisant confiance à Celui qui a tout créé. C'est cela, le Tawakkul — la confiance totale en Allah. Quand tu te sens petit et perdu, souviens-toi que Celui qui a créé les étoiles et les océans ne t'abandonnera jamais. Tu es plus précieux à Ses yeux que tu ne pourrais jamais l'imaginer.\n\nNawfel sentit ses yeux se mouiller de larmes. Il ne comprenait pas tout ce que la voix disait, mais il sentait que chaque mot était vrai, d'une vérité qui venait du plus profond de l'univers.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je n'ai pas peur. Enfin... si, un peu. Mais je veux savoir.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'Le Tawakkul — La confiance en Allah',
            content:
              "Le Tawakkul, c'est placer sa confiance totale en Allah. Ce n'est pas de la passivité — c'est faire de son mieux tout en sachant que c'est Allah qui décide de l'issue. Nawfel a avancé malgré sa peur parce que son cœur portait en lui la certitude qu'il n'était jamais seul.",
            quote: 'ومن يتوكل على الله فهو حسبه',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },

        // --- t1c1s4b: Les noms d'Allah ---
        {
          id: 't1c1s4b',
          chapterId: 't1c1',
          title: "Les noms d'Allah",
          narration: `Nawfel décida de ne pas bouger. Il s'assit sur le sol tiède, ses jambes croisées, exactement comme il le faisait pendant les prières, et il attendit. Il n'avait aucune idée de ce qui allait se passer, mais quelque chose au fond de lui lui disait que la patience était la bonne réponse. Le temps, dans ce jardin, semblait différent — les secondes s'étiraient comme du miel chaud, et chaque instant contenait une plénitude que Nawfel n'avait jamais ressentie.\n\nAlors qu'il attendait, immobile et silencieux, les caractères « قلب » au-dessus de la porte commencèrent à changer. Le mot se transforma lentement, et Nawfel vit apparaître, l'un après l'autre, les plus beaux noms qu'il ait jamais lus : Ar-Rahman — le Tout Miséricordieux, Ar-Rahim — le Très Miséricordieux, Al-Wadud — le plein d'amour, As-Sabur — le Patient, Al-Hakim — le Sage. Chaque nom apparaissait dans une lumière différente, et Nawfel sentait que chacun d'entre eux résonnait dans une partie différente de son corps, comme si son cœur était un instrument de musique et que les noms d'Allah en jouaient les cordes.\n\nLa voix se fit entendre de nouveau, et elle semblait sourire — oui, Nawfel pouvait sentir le sourire dans la voix, même s'il n'en voyait pas le visage.\n\n— Tu as choisi la patience, petit cœur, et c'est un choix que très peu de gens de ton âge sont capables de faire. Le Sabr — la patience — n'est pas simplement attendre sans rien faire. C'est attendre avec le cœur ouvert, avec l'espoir intact, en sachant que la promesse d'Allah est vraie. Ceux qui sont patients recevront la meilleure des récompenses, car Allah est avec ceux qui font preuve de patience. Les noms que tu vois sur cette porte sont les clés de ton cœur. Un jour, tu apprendras à les utiliser.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "J'attends. Je sais que quelque chose de beau va venir.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
          earnedBadgeId: 'sabr',
          lesson: {
            title: 'Le Sabr — La patience',
            content:
              "Le Sabr est l'une des plus grandes vertus en Islam. Ce n'est pas de la résignation, mais une patience active et pleine d'espoir. Nawfel a choisi d'attendre avec confiance, et sa patience a été récompensée par la révélation des noms d'Allah sur la porte de son cœur.",
            quote: 'إنما يوفي الصابرون أجرهم بغير حساب',
            source: 'Coran, Sourate Az-Zumar (39:10)',
          },
        },

        // --- t1c1s4c: La leçon de la peur ---
        {
          id: 't1c1s4c',
          chapterId: 't1c1',
          title: 'La leçon de la peur',
          narration: `Nawfel recula d'un pas, puis deux, puis trois. Son cœur battait à tout rompre et ses jambes tremblaient comme des brindilles dans le vent. Ce jardin était trop beau, cette voix trop étrange, cette porte trop imposante. Tout cela dépassait ce qu'un garçon de son âge pouvait comprendre, et la peur — la vraie peur, celle qui vous noue le ventre et vous serre la gorge — prit le dessus.\n\nÀ mesure qu'il reculait, quelque chose de terrible se produisit. Les fleurs chantantes se mirent à se faner, leurs pétales colorés tombant un à un sur le sol comme des larmes silencieuses. Les arbres dorés perdirent leur éclat, leurs feuilles devenant ternes et grises. Le ciel violet se couvrit de nuages sombres, et la mélodie cristalline qui emplissait le jardin se transforma en un silence oppressant, lourd et froid.\n\nLa voix parla une dernière fois, et cette fois, elle portait une tristesse infinie, comme celle d'une mère qui regarde son enfant se perdre.\n\n— La peur, petit cœur, est le plus grand voile entre toi et la vérité. Quand tu laisses la peur te guider, tu éteins la lumière autour de toi. Mais ne t'inquiète pas — même ceux qui reculent peuvent revenir. La porte du cœur reste ouverte pour ceux qui sont prêts à revenir avec courage.\n\nLe jardin devint noir, et Nawfel sentit qu'il tombait dans un sommeil encore plus profond, emporté par des rêves vides et froids.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... c'est trop... je ne suis pas prêt pour ça...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s5',
          background: 'inner_world',
        },

        // --- t1c1s5: Le réveil ---
        {
          id: 't1c1s5',
          chapterId: 't1c1',
          title: 'Le réveil',
          narration: `Nawfel ouvrit les yeux en sursaut. La lumière grise de l'aube filtrait à travers les volets en bois de la chambre, dessinant des lignes dorées sur les murs blancs. Son cœur battait encore vite, et pendant un instant, il ne sut pas où il était. Puis la réalité revint : les murs familiers de sa chambre, la couverture froissée sur son lit, et la respiration régulière de Wassim qui dormait encore profondément à côté de lui.\n\nMais quelque chose avait changé. Nawfel le sentait d'une manière qu'il ne pouvait pas expliquer, comme si une porte invisible s'était entrouverte quelque part à l'intérieur de lui et que de la lumière en filtrait encore. Il porta la main à sa poitrine et resta un instant immobile, écoutant son propre cœur, cherchant à retrouver l'écho de cette voix mystérieuse.\n\nSoudain, une main le toucha à l'épaule. Nawfel sursauta et tourna la tête. Souhayl était assis sur le bord de son propre lit, les yeux mi-clos mais un sourire espiègle aux lèvres. Il avait l'air de s'amuser beaucoup.\n\nDe l'autre côté de la chambre, Wassim commença à remuer dans son lit. Il ouvrit un œil, puis l'autre, et ses yeux s'illuminèrent immédiatement quand il vit que ses deux frères étaient déjà réveillés. Il s'assit d'un bond, ses cheveux en bataille, et regarda Nawfel avec une curiosité insatiable.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Hé, le rêveur ! Tu parlais dans ton sommeil. Tu disais des trucs bizarres, genre « la porte » et « le cœur ». Tu allais voir quoi cette nuit ?",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi j'ai fait un rêve bizarre ! Y'avait un jardin tout doré et des fleurs qui chantaient ! C'était trop beau, Nawfel !",
              emotion: 'surprised',
            },
            {
              characterId: 'nawfel',
              text: 'Tu... tu as vu le même jardin ? C\'est pas possible...',
              emotion: 'surprised',
            },
          ],
          choices: [
            {
              id: 't1c1s5_c1',
              text: "Tout raconter à ses frères — ils méritent de savoir",
              nextSceneId: 't1c1s6a',
            },
            {
              id: 't1c1s5_c2',
              text: "Garder le secret — c'est peut-être une affaire d'adultes",
              nextSceneId: 't1c1s6b',
            },
          ],
          background: 'bedroom',
        },

        // --- t1c1s6a: Confidences fraternelles ---
        {
          id: 't1c1s6a',
          chapterId: 't1c1',
          title: 'Confidences fraternelles',
          narration: `Nawfel prit une grande inspiration et commença à parler. Les mots sortirent d'eux-mêmes, comme un fleuve qui a été bloqué trop longtemps et qui finit par trouver une brèche. Il raconta tout — le jardin merveilleux avec ses arbres dorés et ses fleurs chantantes, le chemin de lumière, la grande porte avec « قلب » gravé dessus, et surtout, la voix. Cette voix douce et profonde qui avait prononcé son nom comme personne d'autre ne l'avait jamais fait.\n\nSouhayl l'écouta en silence, les bras croisés, le visage sérieux. C'était son rôle d'aîné — écouter d'abord, analyser ensuite. Il fronça les sourcils à plusieurs reprises, et Nawfel put voir que son frère jonglait entre le scepticisme naturel d'un garçon de dix ans et le soutien indéfectible qu'il portait à son petit frère.\n\nWassim, lui, n'avait aucun scepticisme. Ses yeux brillaient d'excitation, et à chaque détail du rêve, il poussait un petit cri de admiration, serrant les genoux contre sa poitrine comme s'il regardait le plus beau des spectacles. Quand Nawfel mentionna les fleurs qui chantaient, Wassim frappa dans ses mains avec enthousiasme.\n\nCe qui surprit le plus Nawfel, c'est que Wassim confirma certains détails que lui seul aurait dû connaître — la couleur exacte du ciel, la sensation du sol sous les pieds, le parfum de l'air. Les deux frères se regardèrent, émerveillés et troublés, comme si un fil invisible les reliait dans ce monde de rêves.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Attends, attends. Tu me dis qu'une voix t'a appelé par ton nom ? Dans un rêve ? Et Wassim aurait vu la même chose ? C'est quand même très bizarre, Nawfel. Mais... je te crois. Je ne sais pas pourquoi, mais je te crois.",
              emotion: 'neutral',
            },
            {
              characterId: 'wassim',
              text: "Et les fleurs ! Les fleurs qui chantaient ! C'est ça que j'ai vu aussi ! Nawfel, on doit retourner dans ce jardin ! C'est le plus bel endroit du monde !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s7',
          background: 'bedroom',
        },

        // --- t1c1s6b: Un secret gardé ---
        {
          id: 't1c1s6b',
          chapterId: 't1c1',
          title: 'Un secret gardé',
          narration: `Nawfel secoua la tête et murmura qu'il ne s'était rien passé de spécial, juste un rêve un peu étrange, rien de plus. Mais en disant ces mots, il sentit quelque chose de désagréable dans sa poitrine — un poids, comme s'il portait une pierre invisible. Le secret était là, tapi entre lui et ses frères, et Nawfel réalisa pour la première fois de sa vie que garder un secret pouvait être aussi lourd que de le révéler.\n\nSouhayl le regarda un long moment, comme s'il lisait au-delà des mots. Il ne dit rien, mais son regard disait clairement : « Je sais que tu mens, mais je ne vais pas te forcer à parler. » Wassim, lui, avait l'air déçu, comme un enfant à qui on refuse un jouet. Il baissa la tête et se recoucha en silence.\n\nNawfel resta seul avec son secret, et pendant que ses frères se rendormaient ou faisaient semblant de le faire, il repensa à la voix du jardin. Elle lui avait dit que la peur était un voile. Et maintenant, en choisissant de garder ce secret par peur d'être incompris, il sentait qu'il tissait un nouveau voile autour de lui. Une leçon silencieuse, mais une leçon tout de même.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "D'accord. Si tu changes d'avis, tu sais où me trouver. Je suis ton grand frère, Nawfel. C'est mon travail de te protéger, même de tes propres secrets.",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't1c1s7',
          background: 'bedroom',
        },

        // --- t1c1s7: Le petit-déjeuner ---
        {
          id: 't1c1s7',
          chapterId: 't1c1',
          title: 'Le petit-déjeuner',
          narration: `La cuisine de la maison Benali sentait le pain frais et le miel d'eucalyptus que le père de Mehdi rapportait chaque semaine du marché du village. La table était dressée avec soin — coupes de lait tiède, bols de msemen dorés, plats de zaalouk aux aubergines, et une théière d'argent d'où s'échappait un filet de vapeur parfumée à la menthe fraîche.\n\nMehdi, le père, était assis à sa place habituelle, à la tête de la table. C'était un homme au visage doux et au regard profond, dont la barbe grisonnante et le sourire bienveillant en disaient long sur sa sagesse. Il lisait le Coran sur son téléphone, comme chaque matin, ses lèvres remuant silencieusement. Aziza, la mère, vaquait entre la cuisine et la table, ses mains habiles disposant les plats avec une grâce naturelle, son hijab d'un bleu lavande encadrant un visage illuminé par la bonté.\n\nQuand Nawfel descendit avec ses frères, il trouva ses parents déjà éveillés, comme toujours. L'atmosphère était chaude, familiale, rassurante. Mais Nawfel portait toujours en lui le poids de la nuit passée. Il regarda son père, hésitant, puis se rappela ce que Souhayl avait dit — « Je suis ton grand frère, c'est mon travail de te protéger » — et Nawfel comprit qu'il y avait quelqu'un de encore plus qualifié pour cela.\n\nNawfel s'assit, prit une bouchée de msemen, et d'une voix qu'il tenta de rendre la plus naturelle possible, commença à raconter son rêve. Au début, ses mots étaient hésitants, mais à mesure qu'il parlait, l'histoire prit forme et conviction. Son père écoutait avec une attention totale, ses mains posées à plat sur la table, ses yeux brillants d'une lueur que Nawfel n'avait jamais vue auparavant — ni peur, ni incrédulité, mais de la reconnaissance, comme si Mehdi attendait ce moment depuis longtemps.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon chéri, tu veux un peu plus de lait ? Tu as l'air fatigué ce matin. As-tu bien dormi ?",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: 'Maman, papa... j\'ai besoin de vous raconter quelque chose. Cette nuit, j\'ai fait un rêve. Enfin... je ne sais pas si c\'était vraiment un rêve.',
              emotion: 'determined',
            },
            {
              characterId: 'mehdi',
              text: "Ce n'est pas un simple rêve, mon fils. Sidi Mu'adh nous a parlé de cela. Il disait que certains cœurs sont choisis par Allah pour voir ce que les yeux ordinaires ne peuvent pas voir. Allah a choisi ton cœur, Nawfel. Il y a un chemin qui s'ouvre devant toi, un chemin intérieur. Ce soir, après la prière du Maghrib, je t'emmènerai voir quelqu'un qui pourra t'aider à comprendre.",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Mon petit... tu es béni. Alhamdulillah. Mais surtout, n'aie pas peur. Celui qui t'a montré ce jardin ne te montrera rien qui puisse te faire du mal.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: 'Les signes divins',
            content:
              "Dans la tradition islamique, les rêves véridiques (ru'yâ ṣâdiqah) sont considérés comme une des quarante-six parties de la prophétie. Ils sont un moyen par lequel Allah guide Ses serviteurs. Un enfant avec un cœur pur peut recevoir de tels signes, et il est du devoir des parents de l'accompagner avec sagesse.",
            quote: 'الرؤيا الصالحة من الله',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Conseil du Shaykh (مجلس الشيخ)
    // ============================================================
    {
      id: 't1c2',
      tomeId: 'tome1',
      number: 2,
      title: 'Le Conseil du Shaykh',
      titleAr: 'مجلس الشيخ',
      scenes: [
        // --- t1c2s1: Le chemin de la zawiyah ---
        {
          id: 't1c2s1',
          chapterId: 't1c2',
          title: 'Le chemin de la zawiyah',
          narration: `Après la prière du Dhuhr, Mehdi prit Nawfel par la main et ils sortirent de la maison. Le soleil de l'après-midi baignait les ruelles de Chefchaouen d'une lumière dorée et chaleureuse, transformant chaque mur bleu en un morceau de ciel tombé sur terre. Les escaliers pavés montaient et descendaient entre les maisons blanches, et Nawfel, qui connaissait chaque coin du village par cœur, remarqua que son père prenait un chemin qu'ils n'empruntaient jamais d'habitude.\n\nIls passèrent devant la petite mosquée du quartier, dont le minaret en briques rouges se dressait fièrement contre le ciel, puis tournèrent dans une ruelle étroite bordée de pots de géraniums rouges. Un chat tacheté les regarda passer depuis le rebord d'une fenêtre, ses yeux verts mi-clos dans la lumière chaude. Plus loin, une vieille femme portant un haïk blanc leur sourit et murmura « As-salamu alaykum » à voix basse en passant.\n\nNawfel sentait la main de son père, large et chaleureuse, et cette chaleur le rassurait. Il avait mille questions — où allaient-ils ? Qui était ce Sidi Mu'adh dont son père avait parlé ? Était-ce un docteur ? Un professeur ? Un savant ? — mais il se tut, respectant le silence que son père semblait chercher. Il y avait quelque chose de sacré dans cette promenade, comme si chaque pas les rapprochait non seulement d'une destination physique, mais d'un seuil invisible.\n\n— Tu vas rencontrer quelqu'un de très spécial, dit finalement Mehdi sans se retourner. Quelqu'un qui comprend les choses que les autres ne voient pas. Sois respectueux, écoute bien, et surtout, laisse ton cœur ouvert. Ne juge pas ce que tu vas entendre avec ton intellect d'enfant, mais reçois-le avec ton âme.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Papa, c\'est loin ? Et Sidi Mu\'adh... il sait des choses sur les rêves ?',
              emotion: 'neutral',
            },
            {
              characterId: 'mehdi',
              text: "Il sait des choses sur beaucoup de choses, mon fils. Et surtout, il sait lire les cœurs. Concentre-toi sur ta respiration en marchant. Chaque pas est une prière silencieuse.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s2',
          background: 'street',
        },

        // --- t1c2s2: La zawiyah ---
        {
          id: 't1c2s2',
          chapterId: 't1c2',
          title: 'La zawiyah',
          narration: `La zawiyah se trouvait au bout d'un chemin pavé de galets, à l'écart des ruelles animées du village. C'était un bâtiment ancien, plus ancien que n'importe quelle autre maison que Nawfel avait vue, avec des murs en terre cuite qui avaient pris, avec les siècles, une couleur ocre chaude comme le sable du désert au crépuscule. Une porte en bois massif, sculptée de motifs géométriques islamiques d'une finesse extraordinaire, en marquait l'entrée.\n\nMehdi frappa trois coups légers, et la porte s'ouvrit lentement, sans bruit, comme si elle avait attendu leur arrivée. Nawfel fut immédiatement frappé par l'atmosphère qui s'en dégageait. L'intérieur de la zawiyah sentait le bois de cèdre, l'encens, et quelque chose d'autre — une odeur ancienne et douce que Nawfel ne pouvait pas nommer mais qui lui fit instantanément penser à la paix, à cette paix profonde que l'on ressent parfois au milieu de la nuit quand tout le monde dort.\n\nLa salle principale était simple mais d'une beauté saisissante. Des tapis berbères aux motifs rouges et ocres couvraient le sol, et des coussins étaient disposés en cercle le long des murs. Sur les murs, des panneaux de calligraphie arabe — des versets du Coran et des invocations — étaient accrochés dans des cadres en bois sculpté. Une petite fenêtre en hauteur laissait pénétrer un rayon de lumière oblique qui dessinait un rectangle doré sur le sol, et dans cette lumière, des particules de poussière dansaient comme des étoiles miniature.\n\nAu fond de la salle, un vieil homme était assis en tailleur sur un tapis de prière, son dos droit, ses mains posées sur ses genoux. Il portait une djellaba blanche immaculée et un turban blanc qui encadrait un visage rayonnant de sérénité. Ses yeux étaient mi-clos, et ses lèvres remuaient imperceptiblement — il était en train de faire le dhikr, la rappel d'Allah.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Voici la zawiyah de Sidi Mu'adh. Marche doucement, parle bas. C'est un lieu sacré.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "C'est si calme ici, papa... On entend presque le silence.",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s3',
          background: 'zawiyah',
        },

        // --- t1c2s3: Sidi Mu'adh ---
        {
          id: 't1c2s3',
          chapterId: 't1c2',
          title: 'Sidi Mu\'adh',
          narration: `Le vieil homme ouvrit les yeux. Nawfel sentit immédiatement que ce regard n'était pas un regard ordinaire. C'était un regard qui voyait au-delà des apparences, au-delà du visage, au-delà des mots — un regard qui voyait directement l'âme. Nawfel eut l'impression, pendant un instant vertigineux, que Sidi Mu'adh pouvait voir le jardin magique, la porte avec « قلب » et même la voix mystérieuse, comme si tout cela était écrit sur son front en caractères invisibles.\n\nSidi Mu'adh était très vieux — ses cheveux et sa barbe étaient blancs comme la neige, et son visage était sillonné de rides qui ressemblaient à des chemins tracés sur une carte ancienne. Mais ses yeux, ses yeux étaient autre chose. D'un brun si foncé qu'ils étaient presque noirs, ils brillaient d'une lumière intérieure, d'une clarté qui n'avait rien à voir avec la lumière du soleil ou d'une lampe. C'était la lumière de la foi, pensa Nawfel, sans savoir pourquoi ce mot lui venait à l'esprit.\n\nLe shaykh leva la main — une main fine et ridée, mais d'une douceur infinie — et invita Mehdi et Nawfel à s'asseoir devant lui. Son sourire, quand il se tourna vers Nawfel, était comme le premier rayon de soleil après une longue nuit d'hiver.\n\n— Bienvenue, petit cœur, dit-il d'une voix qui résonnait doucement dans la salle, comme un écho dans une caverne de cristal. Je t'attendais. Ton père m'a parlé de ton rêve, et je peux te dire, Nawfel, que ce n'était pas un rêve ordinaire. C'était une invitation — une invitation à entreprendre le plus important des voyages. Pas un voyage à travers les montagnes ou les océans, non. Un voyage à l'intérieur de ton propre cœur. As-tu envie de savoir ce qui t'attend là-dedans ?`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Bienvenue, petit cœur. Je t'attendais. Ton rêve n'était pas ordinaire — c'était une invitation. Allah a choisi ton cœur pour un voyage extraordinaire, un voyage à l'intérieur de toi-même.",
              emotion: 'wise',
            },
            {
              characterId: 'mehdi',
              text: "Sidi Mu'adh, c'est un honneur. Mon fils a reçu ce rêve la nuit dernière. Wassim, le petit, semble avoir vu des choses similaires.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce n'est pas étonnant. Les cœurs purs entre les frères se résonnent. Le lien du sang dans la foi est un fil de lumière. Mais pour l'instant, concentrons-nous sur Nawfel. Il y a des choses que ce petit cœur doit apprendre.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Monsieur... euh... Sidi Mu'adh... qu'est-ce qu'il y a dans mon cœur ? Pourquoi j'ai vu cette porte ?",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s4',
          background: 'zawiyah',
        },

        // --- t1c2s4: Les trois états du Nafs ---
        {
          id: 't1c2s4',
          chapterId: 't1c2',
          title: "Les trois états du Nafs",
          narration: `Sidi Mu'adh sourit et désigna un coussin devant lui. Nawfel s'assit, les jambes croisées, imitant sans le savoir la posture du shaykh. Mehdi s'assit derrière son fils, silencieux et respectueux, comme un élève qui assiste à une leçon réservée.\n\n— Pour comprendre ce que tu as vu dans ton rêve, petit cœur, commença Sidi Mu'adh, il faut d'abord comprendre quelque chose de fondamental. Tu sais ce qu'est un cœur, n'est-ce pas ? Pas le cœur qui bat dans ta poitrine — celui-là, les médecins le connaissent bien. Non, je parle du cœur spirituel, le qalb, celui dont la porte porte le nom dans ton rêve. Ce cœur-là est comme une maison, et dans cette maison, il y a un hôte permanent que l'on appelle le Nafs — l'âme, le moi, la part de toi qui ressent, qui désire, qui parfois te pousse à faire des choses que tu regrettes ensuite.\n\nNawfel hocha la tête, les yeux écarquillés. Sidi Mu'adh avait cette capacité rare de parler de choses complexes avec des mots si simples que même un enfant de huit ans pouvait les comprendre.\n\n— Le Nafs, continua le shaykh en levant un doigt, a trois états. Trois étages dans la maison de ton cœur. Le premier état, c'est An-Nafs Al-Ammara — l'âme qui commande le mal. Imagine que tu as un petit monstre en toi qui te crie toujours « Fais ça ! Prends ça ! Frappe ! » C'est la voix de la colère, de la jalousie, de l'égoïsme. Elle est forte, elle est bruyante, et elle ne recule jamais. La plupart des gens passent toute leur vie à écouter cette voix sans même s'en rendre compte.\n\nSidi Mu'adh leva un deuxième doigt.\n\n— Le deuxième état, c'est An-Nafs Al-Lawwama — l'âme qui se reproche. C'est quand tu commences à remarquer que ce petit monstre te dit de faire des choses que tu sais être mauvaises. Tu fais une bêtise, et ensuite, ton cœur te dit « Pourquoi as-tu fait ça ? Tu aurais dû faire mieux. » C'est une voix de conscience, et c'est un bon signe — ça veut dire que ton cœur commence à s'éveiller.\n\nLe shaykh leva un troisième doigt, et son visage s'illumina d'un sourire lumineux.\n\n— Et le troisième état, le plus beau de tous, c'est An-Nafs Al-Mutma'inna — l'âme en paix. C'est quand ton cœur a trouvé la paix, la vraie paix, celle qui ne dépend pas de ce qui se passe autour de toi. Plus rien ne peut te troubler, parce que tu sais que Allah est avec toi. Quand tu atteins cet état, petit cœur, tu deviens comme un lac immobile dont la surface reflète parfaitement le ciel — tu reflètes la beauté d'Allah dans tout ce que tu fais.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Alors... les monstres dont j'ai entendu parler... c'est An-Nafs Al-Ammara ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement, petit cœur. Les monstres intérieurs ne sont pas des créatures externes. Ils sont des parties de ton propre Nafs. La colère, la jalousie, l'orgueil, l'avidité — ce sont les visages d'Al-Ammara. Le voyage que tu vas entreprendre, c'est de traverser ces trois états, de combattre ces monstres non pas pour les détruire, mais pour les transformer.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Les transformer ? On ne les détruit pas ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Non, petit cœur. Tu ne détruis pas une partie de toi-même. La colère, par exemple, est une énergie. Si tu la laisses diriger ta vie, elle est destructive. Mais si tu apprends à la dompter et à la diriger, elle peut devenir ta force. C'est comme le feu — il peut brûler une maison ou cuire un repas. Tout dépend de qui le contrôle.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s5',
          background: 'zawiyah',
          lesson: {
            title: 'Les trois états du Nafs',
            content:
              "Selon l'enseignement spirituel islamique, le Nafs (l'âme) traverse trois états principaux : An-Nafs Al-Ammara (l'âme qui commande le mal), An-Nafs Al-Lawwama (l'âme qui se reproche), et An-Nafs Al-Mutma'inna (l'âme en paix). Le but du cheminement spirituel est de passer du premier au troisième état.",
            quote: 'وَنَفْسٍ وَمَا سَوَّاهَا * فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا',
            source: 'Coran, Sourate Ash-Shams (91:7-8)',
          },
        },

        // --- t1c2s5: Les monstres intérieurs ---
        {
          id: 't1c2s5',
          chapterId: 't1c2',
          title: 'Les monstres intérieurs',
          narration: `Sidi Mu'adh se leva lentement, ses vieux genoux craquant légèrement, et marcha vers une étagère en bois contre le mur. Il en sortit un vieux livre relié en cuir, dont les pages étaient jaunies par le temps mais encore intactes. Il l'ouvrit délicatement, comme on manipule une chose infiniment précieuse, et le posa devant Nawfel.\n\nLes pages étaient couvertes de dessins à l'encre noire — des illustrations qui ressemblaient à celles des vieux manuscrits arabes que Nawfel avait parfois vus dans les livres de son école. Mais ces dessins étaient différents. Ils représentaient des créatures étranges et terrifiantes : un monstre fait de fumée noire et rouge avec des yeux de braises, une créature rampante couverte d'écailles d'or et de jade, un être multiple aux mille visages qui changeaient sans cesse, et une silhouette massive, sombre et implacable, qui semblait absorber la lumière autour d'elle.\n\n— Ce sont les monstres intérieurs, dit Sidi Mu'adh en posant son doigt sur les illustrations. Ils ne sont pas réels dans le sens où tu pourrais les toucher avec tes mains. Ils sont réels dans ton cœur, dans ton esprit. Chacun d'entre eux représente un défaut de l'âme — quelque chose que tout être humain porte en lui, peu importe son âge.\n\n— Le premier, celui fait de fumée noire et rouge, c'est Al-Ammara sous sa forme de colère. C'est le plus courant et le plus dangereux. La colère est comme un feu — si tu ne la contrôles pas, elle consume tout sur son passage : tes amitiés, ta paix, ta dignité.\n\n— Le deuxième, la créature aux écailles, c'est l'avidité — le désir insatiable d'avoir toujours plus, de posséder, d'accumuler. Elle est sournoise et patiente.\n\n— Le troisième, aux mille visages, c'est la jalousie. Elle te montre ce que les autres ont et te murmure que tu le mérites plus qu'eux. Elle est destructive parce qu'elle attaque les liens les plus précieux — l'amitié, la fraternité.\n\nSidi Mu'adh ferma le livre et regarda Nawfel droit dans les yeux.\n\n— Le Prophète, que la paix soit sur lui, a dit un jour à ses compagnons qui revenaient d'une grande bataille : « Vous êtes revenus de la petite guerre pour entrer dans la grande. » Et quand ils lui demandèrent de quelle grande guerre il parlait, il répondit : « Le plus grand jihad est le jihad contre soi-même. »`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... est-ce que je vais devoir me battre contre tous ces monstres ?",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Pas tous en même temps, petit cœur. Tu vas les rencontrer un par un. Chaque combat t'apprendra quelque chose. Et rappelle-toi : le plus grand jihad est le jihad contre soi-même. C'est la parole du Prophète, paix et bénédiction sur lui. Tu ne combats pas pour détruire, mais pour comprendre et transformer.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s6',
          background: 'zawiyah',
        },

        // --- t1c2s6: Les armes spirituelles ---
        {
          id: 't1c2s6',
          chapterId: 't1c2',
          title: 'Les armes spirituelles',
          narration: `Nawfel regarda ses propres mains, comme pour vérifier qu'il n'avait pas d'épée ou de bouclier. Comment pouvait-il se battre contre des monstres — même des monstres spirituels — avec ses simples mains d'enfant de huit ans ? Sidi Mu'adh, comme s'il avait lu dans ses pensées, laissa échapper un rire doux, un rire qui faisait trembler légèrement la poussière dorée dans le rayon de lumière.\n\n— Ne cherche pas d'épée, petit cœur, dit-il. Les armes dont tu auras besoin ne sont pas faites de fer ou d'acier. Elles sont faites de quelque chose de beaucoup plus puissant. Le Prophète Moussa n'a pas vaincu Pharaon avec une armée. Il a vaincu Pharaon avec la foi. Le Prophète Muhammad, paix sur lui, n'a pas conquis les cœurs avec des armes. Il les a conquis avec la miséricorde.\n\nSidi Mu'adh compta sur les doigts de sa main ridée, comme un maître d'école qui énumère les leçons les plus importantes.\n\n— Ta première arme, c'est le dhikr — le rappel d'Allah. Quand tu prononces le nom d'Allah avec sincérité, c'est comme si tu allumais une lampe dans une pièce sombre. L'obscurité ne peut pas rester là où il y a de la lumière. Ta deuxième arme, c'est la patience — le Sabr. Quand un monstre te provoque, tu ne réagis pas. Tu attends. Tu respires. Tu laisses la tempête passer. Ta troisième arme, c'est l'Ikhlas — la sincérité. Tout ce que tu fais, tu le fais pour Allah, pas pour te montrer, pas pour impressionner les autres. Et ta quatrième arme, c'est l'humilité. Plus tu es petit à tes propres yeux, plus Allah t'élève.\n\n— Avec ces quatre armes, petit cœur, tu es plus puissant que n'importe quel monstre. Parce que ces armes ne viennent pas de toi — elles viennent d'Allah. Et ce qui vient d'Allah ne peut jamais être vaincu.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Mais Sidi Mu'adh... je suis qu'un enfant. Je ne sais même pas faire le dhikr correctement.",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu n'as pas besoin d'être un adulte pour invoquer Allah, Nawfel. La sincérité d'un enfant vaut plus que les longues prières d'un hypocrite. Le dhikr, c'est simple : répète avec ton cœur, pas seulement avec ta langue. « La ilaha illa Allah » — il n'y a de divinité qu'Allah. Ces mots sont la plus puissante des armes.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s7',
          background: 'zawiyah',
        },

        // --- t1c2s7: Le choix du cheminement ---
        {
          id: 't1c2s7',
          chapterId: 't1c2',
          title: 'Le choix du cheminement',
          narration: `Sidi Mu'adh se tourna vers Nawfel et posa ses deux mains sur les épaules du garçon. Ses mains étaient légères comme des plumes, mais Nawfel sentit un poids derrière ce toucher — le poids de quelque chose de sacré, d'important, d'irréversible. Le shaykh le regarda longuement, et Nawfel vit dans ses yeux une question silencieuse, une porte qui s'ouvrait et qui ne se refermerait pas.\n\n— Maintenant, petit cœur, je ne peux pas faire ce choix pour toi. Personne ne le peut. C'est ton cœur qui doit décider. Ce voyage que je t'ai décrit n'est pas un jeu. Tu vas rencontrer des parties de toi-même qui te feront peur. Tu vas devoir affronter tes propres faiblesses, tes propres défauts. Parfois, tu voudras abandonner. Parfois, tu te sentiras seul et perdu.\n\n— Mais je te promets une chose : à chaque étape, tu seras accompagné. Allah ne laisse jamais seul celui qui se tourne vers Lui. Tu as ta famille, tu as tes frères, et tu auras toujours la zawiyah comme refuge. Alors, dis-moi, Nawfel — es-tu prêt à entreprendre ce voyage ?`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Le choix t'appartient, Nawfel. Personne ne peut marcher ce chemin à ta place. Mais sache que si tu choisis de le faire, tu ne seras jamais seul. Allah est avec les patients, et Il est avec ceux qui sont sincères.",
              emotion: 'wise',
            },
            {
              characterId: 'mehdi',
              text: "Quoi que tu décides, mon fils, je suis fier de toi. Et ta mère aussi. Nous serons toujours là pour toi.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 't1c2s7_c1',
              text: "Accepter immédiatement — je suis prêt !",
              nextSceneId: 't1c2s8a',
              badgeId: 'ikhlas',
              isCorrect: true,
            },
            {
              id: 't1c2s7_c2',
              text: "Demander du temps pour réfléchir",
              nextSceneId: 't1c2s8b',
              badgeId: 'sabr',
              isCorrect: true,
            },
          ],
          background: 'zawiyah',
        },

        // --- t1c2s8a: L'engagement ---
        {
          id: 't1c2s8a',
          chapterId: 't1c2',
          title: "L'engagement",
          narration: `Nawfel sentit quelque chose se lever dans sa poitrine — pas de la peur cette fois, mais une détermination qu'il n'avait jamais connue. C'était comme un feu, mais un feu qui ne brûlait pas, un feu qui éclairait. Il regarda Sidi Mu'adh droit dans les yeux — chose qu'il n'osait jamais faire avec les adultes — et dit d'une voix qui tremblait légèrement mais qui portait une conviction étonnante pour son âge :\n\n— Je suis prêt, Sidi Mu'adh. Je veux faire ce voyage. Je veux comprendre ce qu'il y a dans mon cœur. Même si c'est difficile. Même si j'ai peur.\n\nSidi Mu'adh sourit — un sourire si large et si lumineux que toute la zawiyah sembla s'illuminer un peu plus. Il posa sa main sur la tête de Nawfel et murmura une invocation que le garçon ne comprit pas entièrement, mais dont il sentit la bénédiction comme une eau fraîche sur un front brûlant.\n\n— Bien, petit cœur. Bien. L'Ikhlas — la sincérité — est en toi. Je le vois dans tes yeux. Avant de partir, je vais te donner ton première pratique. Ce soir, avant de dormir, tu vas réciter « La ilaha illa Allah » cent fois. Pas vite — lentement. En ressentant chaque mot. Pose ta main sur ton cœur et sens-le vibrer. C'est ta première arme, Nawfel. Utilise-la bien.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je suis prêt, Sidi Mu'adh. Je veux comprendre ce qu'il y a dans mon cœur.",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "Ton cœur est sincère, petit cœur. C'est la plus belle des qualités. Ce soir, avant de dormir, tu réciteras « La ilaha illa Allah » cent fois, lentement, avec ton cœur. C'est ton arme et ton bouclier.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s9',
          background: 'zawiyah',
          earnedBadgeId: 'ikhlas',
          lesson: {
            title: "L'Ikhlas — La sincérité",
            content:
              "L'Ikhlas, c'est faire les choses uniquement pour Allah, sans chercher l'approbation des autres. Nawfel a accepté le voyage non pas pour se montrer ou pour impressionner, mais parce que son cœur était sincère. C'est cette sincérité qui rend chaque acte d'adoration précieux aux yeux d'Allah.",
            quote: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',
            source: 'Coran, Sourate Al-Bayyinah (98:5)',
          },
        },

        // --- t1c2s8b: La sagesse du temps ---
        {
          id: 't1c2s8b',
          chapterId: 't1c2',
          title: 'La sagesse du temps',
          narration: `Nawfel baissa la tête et fixa le sol, ses mains serrées l'une contre l'autre sur ses genoux. Il ne savait pas quoi dire. Son cœur battait fort et sa gorge était serrée. Il voulait dire oui, il sentait que c'était la bonne réponse, mais quelque chose en lui — peut-être la peur, peut-être la sagesse, il ne savait pas lequel — lui disait qu'il avait besoin de temps. De temps pour digérer tout ce qu'il avait entendu, de temps pour comprendre.\n\n— Sidi Mu'adh... murmura-t-il en gardant les yeux baissés. C'est beaucoup de choses. Beaucoup trop pour un seul jour. Est-ce que... est-ce que je peux avoir du temps pour y penser ?\n\nUn silence s'installa. Nawfel aurait voulu se fondre dans le tapis. Il avait peur d'avoir déçu le shaykh, peur d'avoir déçu son père. Mais quand il leva enfin les yeux, il vit quelque chose d'inattendu sur le visage de Sidi Mu'adh — non pas de la déception, mais une joie profonde, une fierté même.\n\n— Ah, petit cœur ! s'exclama Sidi Mu'adh en frappant dans ses mains. Demander du temps, c'est peut-être la chose la plus sage que tu aies faite aujourd'hui ! Le Prophète, paix sur lui, a dit : « Celui qui est lent et précis est meilleur que celui qui est pressé et négligent. » Le Sabr ne s'applique pas seulement face aux épreuves — il s'applique aussi face aux grandes décisions. Tu es sage au-delà de ton âge, Nawfel. Prends tout le temps qu'il te faut.\n\nEt puis, avec un clin d'œil complice, il ajouta :\n\n— Mais avant cela, je vais quand même te donner ta première pratique. Ce soir, avant de dormir, récitez « La ilaha illa Allah » cent fois. Même si tu n'as pas encore décidé, commence à préparer ton cœur. Le dhikr ouvre des portes que l'intellect seul ne peut pas ouvrir.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Sidi Mu\'adh... c\'est beaucoup de choses en un seul jour. Est-ce que je peux réfléchir un peu avant de répondre ?',
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est la chose la plus sage que tu aies pu dire ! Prendre son temps face à une grande décision, c'est du vrai Sabr. Le Prophète a dit que la lenteur et la précision sont meilleures que la précipitation. Tu es sage, Nawfel. Mais commence quand même ton dhikr ce soir — cent fois « La ilaha illa Allah » avant de dormir. C'est la première porte à ouvrir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c2s9',
          background: 'zawiyah',
          earnedBadgeId: 'sabr',
        },

        // --- t1c2s9: Le retour ---
        {
          id: 't1c2s9',
          chapterId: 't1c2',
          title: 'Le retour',
          narration: `Le soleil avait commencé à descendre vers l'horizon, peignant le ciel de Chefchaouen en teintes orange et roses. Mehdi et Nawfel marchaient côte à côte dans les ruelles du village, et Nawfel sentait que chaque pas était différent de celui du matin. C'était le même chemin, les mêmes murs bleus, les mêmes escaliers pavés — mais tout semblait plus lumineux, plus signifiant, comme si une couche de réalité supplémentaire avait été ajoutée au monde.\n\nNawfel portait en lui les mots de Sidi Mu'adh comme un trésor. Les trois états du Nafs, les monstres intérieurs, les armes spirituelles — tout cela tournait dans sa tête, non pas comme une leçon d'école qu'il devait mémoriser, mais comme des graines plantées dans un terreau fertile, attendant de germer. Et le dhikr — cent fois « La ilaha illa Allah » avant de dormir. Ce soir, pour la première fois, Nawfel allait prier non pas parce qu'on le lui avait demandé, mais parce que son cœur le désirait.\n\nMehdi posa sa main sur l'épaule de son fils et lui sourit. Ce sourire disait tout ce que les mots ne pouvaient pas dire — la fierté, l'amour, la confiance. Nawfel lui rendit son sourire, et ensemble, ils marchèrent vers la maison où Aziza les attendait avec le repas du Maghrib, Souhayl avec ses questions, et Wassim avec ses rêves dorés.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Tu as bien fait, Nawfel. Quoi que tu aies choisi — tout de suite ou plus tard — tu as bien fait. Sidi Mu'adh est fier de toi, et moi aussi. Ce soir, n'oublie pas ton dhikr.",
              emotion: 'happy',
            },
            {
              characterId: 'nawfel',
              text: "Je ne l'oublierai pas, papa. Je le sens dans mon cœur. Quelque chose a changé aujourd'hui, non ?",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Oui, mon fils. Quelque chose a changé. Et c'est seulement le début.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'street',
          isEnding: true,
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Porte du Cœur (باب القلب)
    // ============================================================
    {
      id: 't1c3',
      tomeId: 'tome1',
      number: 3,
      title: 'La Porte du Cœur',
      titleAr: 'باب القلب',
      scenes: [
        // --- t1c3s1: La nuit du dhikr ---
        {
          id: 't1c3s1',
          chapterId: 't1c3',
          title: 'La nuit du dhikr',
          narration: `La nuit tombait sur Chefchaouen comme un voile de soie violette, et les lumières des maisons s'allumaient une à une dans les ruelles, comme des étoiles qui descendaient du ciel pour se poser sur terre. Nawfel était dans sa chambre, assis sur son lit, les jambes croisées, et il regardait par la fenêtre les derniers rayons du soleil disparaître derrière les toits du village.\n\nDans le lit voisin, Wassim dormait déjà, sa bouche entrouverte, un sourire sur le visage. Souhayl n'était pas encore rentré — il était chez un ami pour un devoir de classe — et la chambre était plongée dans un silence que seuls les bruits lointains du village venaient troubler : le chant d'un muezzin au loin, l'aboiement d'un chien, le murmure d'une conversation derrière un mur.\n\nNawfel ferma les yeux et posa sa main sur sa poitrine, exactement comme Sidi Mu'adh le lui avait montré. Sous sa paume, il sentait son cœur battre — boum, boum, boum — un rythme régulier et rassurant qui lui rappela que la vie coulait en lui, que chaque battement était un cadeau, un souffle de plus offert par le Créateur.\n\nIl inspira profondément, retenant l'air quelques secondes, puis l'expira lentement, comme Sidi Mu'adh lui avait appris. Puis il commença. Pas à voix haute — à voix basse, presque à murmure. Les mots sortirent de ses lèvres comme une prière ancienne, comme s'il les connaissait depuis toujours.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "La ilaha illa Allah... La ilaha illa Allah... La ilaha illa Allah...",
              emotion: 'neutral',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s2',
          background: 'bedroom',
        },

        // --- t1c3s2: La récitation ---
        {
          id: 't1c3s2',
          chapterId: 't1c3',
          title: 'La récitation',
          narration: `Nawfel continua à réciter, comptant sur ses doigts. Dix. Vingt. Trente. À chaque répétition, il sentait quelque chose changer en lui — pas physiquement, non, mais spirituellement. C'était comme si chaque « La ilaha illa Allah » était une goutte d'eau qui tombait dans un lac et qui créait des ondes de plus en plus larges. Quarante. Cinquante.\n\nLes mots commençaient à prendre un sens qu'il n'avait jamais ressenti auparavant. « La ilaha » — il n'y a de divinité. Chaque fois qu'il prononçait ces mots, il sentait quelque chose se détacher de lui — des pensées inutiles, des peurs infondées, des désirs superficiels, comme des feuilles mortes arrachées par le vent. « Illa Allah » — sauf Allah. Et chaque fois qu'il ajoutait cette deuxième partie, il sentait quelque chose d'autre se remplacer — une lumière, une chaleur, une certitude, comme si chaque mot reconstruisait quelque chose à l'intérieur de lui.\n\nSoixante. Soixante-dix. La pièce autour de lui commença à changer. Pas soudainement — doucement, progressivement, comme si la réalité elle-même s'assouplissait, devenait malléable, comme de la cire chaude. Les murs de la chambre perdirent leur solidité, devenant translucides, puis transparents, puis invisibles. Le plafond s'effaça pour laisser place au ciel violet et étoilé du jardin magique. Le sol sous lui devint tiède et vivant, recouvert de cette herbe émeraude lumineuse qu'il avait déjà foulée.\n\nQuatre-vingts. Quatre-vingt-dix. Cent. Nawfel prononça la dernière répétition d'une voix qui n'était plus tout à fait la sienne — une voix plus profonde, plus résonante, comme si son cœur lui-même parlait à travers ses lèvres. Et à la dernière syllabe, la transition se compléta. Nawfel n'était plus dans sa chambre. Il était de retour dans le jardin. Mais cette fois, quelque chose était différent. La grande porte — celle avec « قلب » gravé dessus — n'était plus fermée. Elle était entrouverte. Et à travers l'interstice, une lumière dorée et infinie filtrait, si intense que Nawfel dut plisser les yeux.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "La ilaha illa Allah... La ilaha illa Allah... Je suis de retour... le jardin... la porte est ouverte !",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s3',
          background: 'bedroom',
        },

        // --- t1c3s3: Le retour au jardin ---
        {
          id: 't1c3s3',
          chapterId: 't1c3',
          title: 'Le retour au jardin',
          narration: `Le jardin était différent de ce que Nawfel s'en souvenait. Il était plus vaste, plus profond, plus vivant. Les arbres dorés avaient grandi depuis sa dernière visite — leurs troncs étaient plus larges, leurs branches plus hautes, et leurs feuilles d'or chantaient une mélodie plus riche, plus complexe, comme un orchestre qui aurait ajouté de nouveaux instruments depuis le dernier concert. Les fleurs chantantes avaient éclot en milliers de nouvelles variétés, et leur chœur emplissait l'air d'une harmonie si pure que Nawfel sentait que les notes elles-mêmes étaient en train de guérir quelque chose en lui.\n\nMais ce qui attira le plus son attention, c'était le paysage au-delà du jardin. La porte entrouverte laissait entrevoir un monde d'une immensité à couper le souffle. Au loin, de gigantesques montagnes flottaient dans le ciel violet — oui, flottaient, comme des îles dans un océan de lumière. Elles étaient faites de cristal et d'obsidienne, et leurs sommets étaient couronnés de nuages dorés d'où cascadait, en chutes d'eau lumineuses, une rivière de lumière pure qui serpentait à travers le ciel avant de se jeter dans un lac immense dont Nawfel ne pouvait voir les rives.\n\nEt plus loin encore, à l'horizon, Nawfel distingua une cité. Une ville faite entièrement d'or et de lumière, avec des minarets qui s'élevaient vers le ciel comme des doigts de prière et des dômes qui brillaient comme des soleils miniatures. La Cité du Cœur, pensa Nawfel sans savoir comment il connaissait ce nom. C'était la destination — ce vers quoi la porte menait.\n\nMais entre lui et la porte entrouverte, le chemin n'était pas libre. Nawfel le sentit avant de le voir — une présence sombre, une énergie négative qui troublait la beauté du jardin. Les fleurs les plus proches de la porte s'étaient fanées, leurs pétales tombés au sol en une couche de soie morte. L'herbe, autrefois d'un vert émeraude éclatant, était devenue grise et craquante sous ses pieds. Et l'air lui-même semblait plus froid, plus lourd, comme avant un orage.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est encore plus beau que la dernière fois... ces montagnes flottantes... la ville dorée... mais quelque chose ne va pas. L'herbe est morte près de la porte. Il y a quelque chose qui bloque le chemin.",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s4',
          background: 'inner_world',
        },

        // --- t1c3s4: La voix sombre ---
        {
          id: 't1c3s4',
          chapterId: 't1c3',
          title: 'La voix sombre',
          narration: `Alors que Nawfel s'approchait de la porte, une voix se fit entendre. Mais cette voix n'avait rien de la douce mélodie qu'il avait entendue lors de sa première visite. C'était une voix sombre, rauque, chargée de mépris — une voix qui ressemblait étrangement à la sienne, mais déformée, comme un écho dans un puits profond.\n\n— Mais qu'est-ce que tu fais ici ? ricana la voix. Tu te prends pour un héros, maintenant ? Un gamin de huit ans qui croit qu'il peut sauver quoi que ce soit ? Tu n'es rien de spécial, Nawfel. Rien du tout. Tu es juste un gamin ordinaire dans un village ordinaire. Tu n'es même pas le premier de ta classe. Tu n'es même pas le plus fort de tes frères. Alors qu'est-ce qui te fait croire que tu mérites ce jardin ?\n\nNawfel s'arrêta net. Sa respiration devint courte et saccadée. Chaque mot de cette voix sombre frappait comme une pierre, et le plus terrifiant, c'est qu'une partie de lui — une petite voix au fond de lui — reconnaissait la vérité dans ces paroles. Il n'était pas spécial. Il n'était pas un héros. Qui était-il pour prétendre entreprendre un tel voyage ?\n\nLa voix sombre poursuivit, se faisant encore plus insidieuse :\n\n— Et ton père ? Il t'a emmené voir un vieux homme, et tu as cru que c'était un signe d'Allah ? C'est juste de la chance, Nawfel. Du hasard. Il n'y a pas de porte magique, pas de jardin mystérieux, pas de destinée extraordinaire. Tu es un gamin qui fait des rêves bizarres, et tu veux y donner un sens. Pathétique.\n\nNawfel sentit ses genoux trembler. Ses mains tremblaient. Son cœur, qui quelques instants auparavant était rempli de lumière, commençait à se refermer comme une fleur sous la pluie glaciale. C'était son propre ego — son Nafs Al-Ammara — qui lui parlait. Et il le reconnaissait, car ce dialogue, il l'avait déjà eu des centaines de fois dans sa tête, chaque fois qu'il doutait de lui-même.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Arrête ! Tu n'es pas moi ! Je... je sais que tu n'es pas moi !",
              emotion: 'angry',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s5',
          background: 'inner_world',
        },

        // --- t1c3s5: L'apparition d'Al-Ammara ---
        {
          id: 't1c3s5',
          chapterId: 't1c3',
          title: "L'apparition d'Al-Ammara",
          narration: `La voix sombre cessa de parler, et le silence qui suivit fut encore pire. Puis le sol trembla. Pas un tremblement de terre — quelque chose de plus profond, comme si le jardin lui-même avait eu peur. Les arbres dorés se mirent à gémissir, leurs feuilles produisant un son discordant, une dissonance dans la mélodie céleste. Les fleurs chantantes se turent une à une, comme si un silence avait été décrété depuis l'horizon.\n\nDe l'ombre qui recouvrait le sol devant la porte, une forme commença à émerger. D'abord une protubérance noire, comme de la fumée épaisse et visqueuse qui montait du sol. Puis une deuxième. Puis une troisième. La fumée s'accumulait, se condensait, prenait forme. Nawfel recula instinctivement, ses yeux écarquillés d'horreur.\n\nLa créature qui se dressa devant lui faisait au moins trois mètres de haut. Elle était composée entièrement de fumée noire et rouge — la noirceur de la colère froide et calculatrice, le rouge de la rage aveugle et brûlante. Ses yeux étaient deux braises incandescentes qui brûlaient d'une haine intense, et sa bouche, quand elle s'ouvrit, révélait des crocs faits de fumée durcie, noirs comme la nuit.\n\n— JE SUIS TOI, cria le monstre d'une voix qui était la voix sombre amplifiée au millionième. Je suis Al-Ammara. Je suis la partie de toi qui veut tout contrôler, tout dominer. Je suis ta colère quand Souhayl prend tes affaires. Je suis ta rage quand un camarade se moque de toi. Je suis le feu qui brûle en toi chaque fois que le monde ne va pas dans ton sens.\n\nLe monstre fit un pas en avant, et Nawfel sentit la température chuter autour de lui. L'herbe sous les pieds du monstre mourait instantanément, devenant noire et cendrée. Les fleurs les plus proches se flétrissaient, leurs pétales tombant comme des larmes.\n\n— Tu ne pourras jamais me dépasser, continua Al-Ammara avec un rire qui fit trembler les arbres dorés. Parce que je ne suis pas séparé de toi. JE SUIS TOI. Et tu ne peux pas fuir toi-même.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est... c'est Al-Ammara. Sidi Mu'adh m'en avait parlé. C'est mon propre Nafs...",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s6',
          background: 'battle',
        },

        // --- t1c3s6: Le premier choix du combat ---
        {
          id: 't1c3s6',
          chapterId: 't1c3',
          title: 'Le premier choix du combat',
          narration: `Al-Ammara se dressait devant Nawfel, immense et terrifiante, sa fumée noire et rouge tourbillonnant autour de lui comme une tornade de rage. Le monstre inclina sa tête massive, ses yeux de braises fixant le petit garçon avec une intensité qui aurait fait fuir n'importe quel adulte. Mais Nawfel, tremblant de tous ses membres, sentait quelque chose d'étrange — au milieu de la peur, il y avait une petite flamme. Faible, vacillante, mais présente. C'était peut-être le dhikr qu'il venait de réciter cent fois, ou peut-être les mots de Sidi Mu'adh qui résonnaient encore dans son esprit.\n\n— Alors, petit rien ? ricana le monstre. Que vas-tu faire ? Vas-tu pleurer ? Appeler ton papa ? Courir te cacher ? Tu n'as aucune arme. Tu n'as aucun pouvoir. Face à moi, tu n'es rien.\n\nNawfel regarda autour de lui. Le jardin merveilleux était en train de mourir sous l'influence du monstre. Les fleurs tombaient, les arbres se taisaient, la lumière s'éteignait. S'il ne faisait rien, tout serait détruit. Mais que pouvait-il faire, lui, un enfant de huit ans, contre une créature aussi terrifiante ? Les mots de Sidi Mu'adh lui revinrent : « Le dhikr est ta première arme. » Et aussi : « Le Sabr — la patience — est ta deuxième arme. » Et puis cette autre phrase : « La colère se combat par la patience. »\n\nLe moment du choix était arrivé.`,
          dialogues: [],
          choices: [
            {
              id: 't1c3s6_c1',
              text: "Réciter le dhikr avec toute la force de son cœur",
              nextSceneId: 't1c3s7a',
              isCorrect: true,
            },
            {
              id: 't1c3s6_c2',
              text: "Essayer de négocier avec le monstre",
              nextSceneId: 't1c3s7b',
            },
            {
              id: 't1c3s6_c3',
              text: "Fuir — chercher un autre chemin",
              nextSceneId: 't1c3s7c',
            },
          ],
          background: 'battle',
        },

        // --- t1c3s7a: Le dhikr contre la colère ---
        {
          id: 't1c3s7a',
          chapterId: 't1c3',
          title: 'Le dhikr contre la colère',
          narration: `Nawfel ferma les yeux, planta ses pieds dans le sol, et invoqua Allah. Pas à voix basse cette fois — à voix haute, de toutes ses forces, de tout son cœur, de toute son âme. « LA ILAHA ILLA ALLAH ! » cria-t-il, et le jardin tout entier trembla. Les arbres dorés se mirent à briller plus intensément, comme si ses mots avaient rallumé leur feu intérieur. Les fleurs fanées, miraculeusement, commencèrent à se redresser, leurs pétales retrouvant leurs couleurs.\n\nAl-Ammara recula d'un pas — un seul, mais un pas quand même. Le monstre poussa un cri de rage, et sa fumée noire commença à se dissiper légèrement, trouée par des rayons de lumière. Les mots du dhikr, quand ils sont prononcés avec sincérité, sont comme des flèches de lumière qui percent l'obscurité.\n\nNawfel continua, sa voix gagnant en force et en conviction à chaque répétition. « LA ILAHA ILLA ALLAH ! » Les larmes coulaient sur ses joues — non pas des larmes de peur, mais des larmes qui viennent quand le cœur est trop plein, quand la connexion avec le Divin est si forte qu'elle déborde. Chaque mot était une bataille, et chaque bataille était un pas de plus vers la lumière.\n\nLe monstre grognait, se tortillait, essayait de résister. Sa fumée rouge tourbillonnait avec frénésie, projetant des éclairs noirs dans toutes les directions. Mais le dhikr continuait, inlassable, et à chaque répétition, le monstre perdait un peu de sa substance, un peu de son pouvoir. Nawfel comprenait maintenant ce que Sidi Mu'adh voulait dire — le dhikr n'était pas juste des mots. C'était une arme forgée dans les feux de la foi, une lumière que l'obscurité ne pouvait pas supporter.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "LA ILAHA ILLA ALLAH ! Tu n'es pas plus fort que moi ! Car avec Allah, je suis plus fort que tout !",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s8',
          background: 'battle',
        },

        // --- t1c3s7b: L'impossible négociation ---
        {
          id: 't1c3s7b',
          chapterId: 't1c3',
          title: "L'impossible négociation",
          narration: `Nawfel leva les mains, paumes ouvertes, dans un geste de paix, et essaya de parler au monstre.\n\n— Attends... ne nous battons pas. Peut-être qu'on peut se mettre d'accord ? Qu'est-ce que tu veux ? De l'espace ? De l'attention ? Je peux essayer de comprendre ce que tu ressens...\n\nAl-Ammara éclata de rire — un rire terrifiant qui fit vibrer l'air comme les cordes d'une guitare géante. Le montre se pencha vers Nawfel, son visage de fumée à quelques centimètres du sien, et ses yeux de braises brillèrent d'une intensité qui força Nawfel à détourner le regard.\n\n— Négocier ? NÉGOCIER ? ricana le monstre, sa voix chargée d'un mépris infini. Tu ne négocies pas avec la colère, petit idiot. La colère ne raisonne pas. La colère ne fait pas de compromis. La colère NE CONNAÎT PAS LA PAIX. Tu ne peux pas lui dire « sois raisonnable » ou « calme-toi ». Elle fait ce qu'elle veut, quand elle veut, et elle détruit tout sur son passage. C'est pour ça qu'elle est si forte — parce qu'elle ne réfléchit pas. Elle agit. Et toi, avec tes petits discours de paix, tu n'es rien face à elle.\n\nLe monstre envoya une vague de fumée noire qui projeta Nawfel en arrière. Le garçon atterrit lourdement sur le sol, le souffle coupé. Autour de lui, le jardin continuait de mourir. Les fleurs tombaient comme la neige en plein été, les arbres perdaient leurs feuilles d'or, et la lumière s'éteignait lentement, inexorablement. Nawfel réalisa avec horreur que la négociation n'avait fait que donner plus de temps au monstre pour détruire. Il avait perdu un temps précieux, et le jardin en payait le prix.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "On peut se mettre d'accord, non ? Dis-moi ce que tu veux !",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s8',
          background: 'battle',
        },

        // --- t1c3s7c: La fuite ---
        {
          id: 't1c3s7c',
          chapterId: 't1c3',
          title: 'La fuite',
          narration: `Nawfel tourna les talons et courut. Il courut de toutes ses forces, ses pieds nus frappant le sol du jardin, son cœur battant à tout rompre, ses poumons brûlants. Il ne regarda pas en arrière — il n'osait pas. Le souffle chaud du monstre brûlait son cou, et le rire sinistre d'Al-Ammara résonnait dans tout le jardin comme un tonnerre.\n\nMais quelque chose de terrifiant se produisit. Nawfel courait depuis ce qui lui semblait être des heures, mais le jardin ne finissait jamais. Pire encore, il reconnaissait les arbres, les fleurs — il passait et repassait au même endroit. Le jardin était devenu un labyrinthe, et peu importe la direction qu'il prenait, il se retrouvait toujours face à la porte, face au monstre qui l'attendait avec un sourire cruel sculpté dans sa fumée.\n\n— Tu ne peux pas fuir, petit rien, dit Al-Ammara, sa voix venue de partout à la fois. JE SUIS TOI. Peux-tu fuir tes propres pieds ? Peux-tu fuir tes propres mains ? Peux-tu fuir ton propre cœur ? Partout où tu iras, je serai là. Parce que je ne suis pas à l'extérieur de toi — je suis EN toi. La fuite est impossible. La seule issue, c'est de me faire face.\n\nNawfel s'arrêta, haletant, les jambes tremblantes, le cœur en miettes. Il comprit alors avec une clarté douloureuse que le monstre avait raison — on ne peut pas fuir son propre Nafs. La colère, la peur, les défauts — ils font partie de vous. Où que vous alliez, ils vous accompagnent. La seule façon de les vaincre, c'est de les affronter, pas de les éviter. Nawfel se tourna lentement vers le monstre, les poings serrés, les larmes aux yeux, mais quelque chose de nouveau en lui — non plus la volonté de fuir, mais la volonté de comprendre.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu as raison... je ne peux pas fuir. Parce que tu es moi. Très bien. Alors je vais te faire face.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s8',
          background: 'battle',
        },

        // --- t1c3s8: Le lien fraternel ---
        {
          id: 't1c3s8',
          chapterId: 't1c3',
          title: 'Le lien fraternel',
          narration: `Alors que Nawfel faisait face au monstre, quelque chose d'inattendu se produisit. Du monde réel — de la chambre qu'il partageait avec ses frères — une lumière commença à filtrer à travers les brouillards du jardin magique. C'était une lumière douce, blanche, innocente, comme celle d'une étoile qui venait de naître. Nawfel se retourna, surpris, et il vit quelque chose qui lui coupa le souffle.\n\nDans la lumière, il y avait un visage — le visage de Wassim. Pas le vrai Wassim, pas physiquement, mais une projection de lui, un reflet de son âme pure. Wassim, dans la chambre, dormait paisiblement, mais dans son sommeil, il avait commencé à murmurer quelque chose. Et ce qu'il murmurait, c'était le dhikr.\n\n— La ilaha illa Allah... La ilaha illa Allah... venait la voix douce et endormie de Wassim, à travers les voiles entre les deux mondes.\n\nNawfel sentit une vague de chaleur envahir son cœur. Wassim ne savait pas ce qui se passait. Wassim dormait simplement, et pourtant, son cœur pur, son innocence, sa connexion naturelle avec le Divin — tout cela créait un pont de lumière entre les deux mondes. Les mots de Wassim, même murmurés dans le sommeil, étaient porteurs d'une puissance que Nawfel n'aurait jamais imaginée.\n\nLe dhikr de Wassim se joignit à celui de Nawfel, et ensemble, les deux voix formèrent une harmonie céleste qui fit trembler Al-Ammara. Le monstre poussa un hurlement de rage, sa fumée se désagrégeant encore plus, révélant un cœur de ténèbres qui palpitait au centre de sa forme massive. Nawfel comprit en cet instant que le lien entre les frères n'était pas seulement un lien de sang — c'était un lien spirituel, un fil de lumière tissé par Allah Lui-même. Quand un cœur pur invoque Allah, il renforce tous les cœurs qui l'entourent, même à travers les mondes.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "La ilaha illa Allah... La ilaha illa Allah...",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Wassim ! Tu m'entends ? Tu es là ? Ton dhikr me donne de la force ! Merci, mon petit frère !",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't1c3s9',
          background: 'inner_world',
        },

        // --- t1c3s9: La révélation ---
        {
          id: 't1c3s9',
          chapterId: 't1c3',
          title: 'La révélation',
          narration: `Soutenu par le dhikr de Wassim et par la lumière qui en émanait, Nawfel regarda Al-Ammara avec des yeux nouveaux. Le monstre n'était plus seulement terrifiant — il était pitoyable. Derrière la fumée noire et rouge, derrière les crocs et les yeux de braises, Nawfel distinguait quelque chose d'autre, quelque chose qu'il n'avait pas vu avant : une souffrance. Le monstre souffrait. Pas physiquement — spirituellement. Il était enchaîné à la colère, prisonnier de sa propre nature, incapable de changer par lui-même.\n\nEt c'est là que Nawfel eut sa révélation. Ce que Sidi Mu'adh avait dit : « Tu ne détruis pas une partie de toi-même. Tu la transformes. » Nawfel comprit que ce monstre n'était pas son ennemi — il était une partie de lui qui avait besoin d'aide. La colère n'était pas mauvaise en soi — c'était une énergie mal dirigée, un feu qui brûlait sans cheminée, une rivière qui débordait parce qu'on n'avait jamais creusé son lit.\n\n— Je ne vais pas te détruire, dit Nawfel d'une voix qui ne tremblait plus. Je ne vais pas te fuir non plus. Et je ne vais pas négocier avec toi. Je vais te transformer. Parce que tu es une partie de moi, et chaque partie de moi mérite d'être sauvée.\n\nAl-Ammara hésita. Pour la première fois, le monstre ne répondit pas immédiatement par la rage ou le mépris. Il y eut un instant — un seul instant — où ses yeux de braises brillèrent d'autre chose que de la haine. De la surprise. Peut-être de l'espoir. Nawfel savait que le combat qui l'attendait ne serait pas facile, mais il savait aussi qu'il avait trouvé la bonne voie. Pas la destruction, pas la fuite, pas la négociation — la transformation. Avec l'aide d'Allah, avec la patience de Sidi Mu'adh, avec la pureté de Wassim, et avec la force de son propre cœur, Nawfel était prêt pour le combat final.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu es une partie de moi, Al-Ammara. Et je ne détruis pas les parties de moi-même. Je vais te transformer. Pas maintenant — je ne suis pas encore assez fort. Mais je le ferai. Et quand ce moment viendra, tu ne seras plus un monstre. Tu seras de la lumière.",
              emotion: 'determined',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: 'La transformation, pas la destruction',
            content:
              "L'enseignement spirituel islamique nous apprend que les défauts de l'âme ne doivent pas être détruits par la force, mais transformés par la patience et la guidance divine. La colère est une énergie — quand elle est bien dirigée, elle devient justice et courage. Le cheminement spirituel ne cherche pas à anéantir le Nafs, mais à le purifier.",
            quote: 'إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم',
            source: 'Coran, Sourate Ar-Ra\'d (13:11)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Le Premier Combat (المعركة الأولى)
    // ============================================================
    {
      id: 't1c4',
      tomeId: 'tome1',
      number: 4,
      title: 'Le Premier Combat',
      titleAr: 'المعركة الأولى',
      scenes: [
        // --- t1c4s1: Le combat commence ---
        {
          id: 't1c4s1',
          chapterId: 't1c4',
          title: 'Le combat commence',
          narration: `Le jardin magique trembla de toutes ses racines quand Nawfel fit son premier pas vers Al-Ammara. Cette fois, il n'y eut pas de négociation, pas de fuite, pas d'hésitation. Nawfel avançait avec la détermination tranquille de celui qui a compris quelque chose de fondamental — un garçon de huit ans, debout face à un monstre de fumée de trois mètres de haut, et pourtant plus grand que lui par la conviction qui animait son cœur.\n\nAl-Ammara rugit. Le rugissement fut si puissant que les arbres dorés se plièrent comme des roseaux sous le vent, que les fleurs chantantes se couchèrent contre le sol, et que le ciel violet lui-même parut onduler comme la surface d'un lac troublée par une pierre. Le monstre gonfla, sa fumée noire et rouge s'étirant dans toutes les directions, ses yeux de braises devenant deux soleils noirs de rage pure.\n\n— FOOLISH CHILD ! hurla Al-Ammara dans une langue qui était et n'était pas l'arabe, une langue primordiale de colère et de destruction. Tu oses me défier ? MOI ? La colère qui a brûlé des nations ? La rage qui a détruit des empires ? Tu es MOINS QUE RIEN face à moi !\n\nMais Nawfel ne recula pas. Ses pieds étaient ancrés dans le sol comme des racines d'olivier, et autour de lui, un cercle de lumière blanche — le dhikr de Wassim, qui continuait de résonner à travers les mondes — formait un bouclier qui repoussait les ondes de noirceur du monstre. Nawfel leva ses mains, paumes ouvertes vers le ciel, et commença à réciter : « La ilaha illa Allah... » Sa voix était calme, mesurée, pleine d'une foi qui n'avait rien à voir avec le fanatisme — une foi simple, pure, enfantine, mais plus forte que n'importe quelle armure.\n\nLe combat avait commencé. Pas un combat de corps contre corps, d'épée contre bouclier, mais un combat d'âme contre âme — le premier et le plus important de tous les combats que Nawfel mènerait dans sa vie.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "La ilaha illa Allah... Je ne te crains pas. Tu es une partie de moi, et je vais te faire face avec le cœur. Pas avec la violence, pas avec la peur, mais avec la lumière.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s2',
          background: 'battle',
        },

        // --- t1c4s2: Les visions de colère ---
        {
          id: 't1c4s2',
          chapterId: 't1c4',
          title: 'Les visions de colère',
          narration: `Al-Ammara comprit que la force brute ne suffirait pas contre le dhikr. Le monstre changea de stratégie — il leva ses bras de fumée noire et projeta dans l'esprit de Nawfel des visions. Pas des images abstraites ou symboliques — des souvenirs. De vrais souvenirs. Extraits de la mémoire de Nawfel, remués et amplifiés par la magie du Nafs.\n\nLa première vision apparut : Nawfel, cinq ans, dans la cour de l'école. Souhayl avait pris son cahier de dessins sans lui demander et le montrait à ses amis en riant. Nawfel revit sa propre colère — une boule de feu dans le ventre, les poings serrés, l'envie de frapper, de crier, de détruire. Il revit le moment où il avait poussé Souhayl violemment et où Souhayl était tombé et s'était fait mal au coude. Et il revit la culpabilité ensuite — le visage de Souhayl, les larmes, et le sentiment horrible d'avoir blessé son propre frère.\n\nLa deuxième vision : Nawfel, sept ans, dans la classe. Un camarade — Karim — s'était moqué de lui devant tout le monde. « Nawfel le rêveur ! Nawfel qui voit des choses bizarres ! » Nawfel revit la honte qui montait à son visage, les rires des autres élèves, et surtout, la colère — cette colère noire et silencieuse qui l'avait rongé pendant des jours.\n\nChaque vision était un test. Chaque mémoire était un défi. Al-Ammara essayait de réveiller en Nawfel les émotions mêmes qui l'avaient nourri — la colère, la haine, la vengeance. Le monstre savait que si Nawfel cédait à la colère en ce moment même, dans ce monde spirituel, le dhikr serait brisé et le monstre triompherait.\n\n— Souviens-toi ! hurla Al-Ammara. Souviens-toi de la douleur ! Souviens-toi de la rage ! Laisse-la monter ! Laisse-la exploser ! Sois toi-même, Nawfel — sois COLÈRE !`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... ce ne sont que des souvenirs. Tu veux me faire réagir. Tu veux que je sois en colère pour te nourrir. Mais je ne vais pas tomber dans ton piège.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s3',
          background: 'battle',
        },

        // --- t1c4s3: La première tentation ---
        {
          id: 't1c4s3',
          chapterId: 't1c4',
          title: 'La première tentation',
          narration: `La vision de Karim — le camarade qui s'était moqué de lui — était la plus intense. Nawfel revoyait chaque détail avec une précision cruelle : le sourire moqueur de Karim, ses yeux rieurs, les rires de la classe entière, et surtout, cette sensation d'impuissance absolue qui s'était transformée en une colère brûlante. Al-Ammara amplifia l'image, la rendit plus vive, plus réelle, plus douloureuse.\n\nEt Nawfel sentit la colère monter. Réellement, physiquement, spirituellement. Son cœur battait plus vite, ses mains se serraient en poings, sa respiration devenait courte et saccadée. Le feu de la colère coulait dans ses veines comme du magma, cherchant une sortie, cherchant à exploser. Al-Ammara sourit — un sourire de triomphe — car il sentait que son plan fonctionnait.\n\nC'était le moment crucial. Le point de bascule. Tout dépendait de ce que Nawfel allait faire dans les prochaines secondes. S'il cédait à la colère, Al-Ammara absorberait cette énergie et deviendrait invincible. S'il trouvait la force de résister, le monstre s'affaiblirait.\n\nNawfel ferma les yeux. Il chercha dans sa mémoire les mots de Sidi Mu'adh : « On ne combat pas la colère par la colère, mais par la patience et le dhikr. » Et aussi : « Quand tu sens la colère monter, inspire profondément, et dis : « A'oudhou billahi min ash-shaytan ar-rajim » — je cherche refuge auprès d'Allah contre Satan le lapidé. »\n\nLe moment du choix était arrivé. La colère était là, brûlante, urgente, demanding. Que ferait Nawfel ?`,
          dialogues: [],
          choices: [
            {
              id: 't1c4s3_c1',
              text: "Céder à la colère — cette vision est trop douloureuse",
              nextSceneId: 't1c4s4a',
            },
            {
              id: 't1c4s3_c2',
              text: "Respirer profondément comme Sidi Mu'adh l'a enseigné",
              nextSceneId: 't1c4s4b',
              isCorrect: true,
            },
          ],
          background: 'battle',
        },

        // --- t1c4s4a: La colère nourrit le monstre ---
        {
          id: 't1c4s4a',
          chapterId: 't1c4',
          title: 'La colère nourrit le monstre',
          narration: `Nawfel laissa la colère monter. Il ne pouvait pas l'empêcher — c'était trop fort, trop intense, trop humain. Le souvenir de Karim et des rires de la classe était une blessure béante, et Al-Ammara y avait plongé ses griffes pour l'agrandir, l'infecter, la rendre insupportable.\n\n— OUI ! rugit Al-Ammara en triomphant. SOIS EN COLÈRE ! C'EST TOI ! C'EST TA NATURE !\n\nEt Nawfel hurla de rage. Pas un cri de douleur ou de peur — un cri de pure colère. Et à ce cri, quelque chose de terrible se produisit. L'énergie de sa colère, comme un courant invisible, quitta son corps et se dirigea vers le monstre. Al-Ammara l'absorba avidement, et le résultat fut immédiat — le monstre grandit. Sa fumée noire et rouge devint plus dense, plus épaisse, plus puissante. Il passa de trois mètres à quatre, puis cinq mètres de haut. Ses yeux de braises doublèrent de taille. Ses crocs s'allongèrent comme des lances.\n\nLe bouclier de lumière créé par le dhikr de Wassim vacilla, puis recula d'un mètre. Les fleurs qui avaient commencé à se relever se couchèrent à nouveau. Les arbres dorés gémissaient de douleur. Nawfel regarda, horrifié, le monstre qu'il avait nourri de sa propre colère. Il avait commis une erreur — l'erreur que Sidi Mu'adh l'avait averti de ne jamais commettre. On ne combat pas le feu par le feu. On ne vainc pas la colère par la colère.\n\n— Merci pour le repas, petit rien, ricana Al-Ammara, sa voix maintenant assez puissante pour faire trembler le ciel. Tu n'as rien appris, n'est-ce pas ? Tu es ton pire ennemi.\n\nNawfel sentit le désespoir l'envahir. Mais au fond de lui, la petite flamme du dhikr brillait encore, faible mais tenace. Il n'avait pas perdu — pas encore.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... non ! Ce n'est pas moi ! J'ai fait une erreur ! Sidi Mu'adh m'avait prévenu !",
              emotion: 'angry',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s5',
          background: 'battle',
        },

        // --- t1c4s4b: La patience affaiblit le monstre ---
        {
          id: 't1c4s4b',
          chapterId: 't1c4',
          title: 'La patience affaiblit le monstre',
          narration: `Nawfel ferma les yeux et inspira. Longuement. Profondément. L'air du jardin — parfumé, lumineux — remplit ses poumons, et il le retint. Un. Deux. Trois. Quatre. Puis il expira lentement, comme Sidi Mu'adh le lui avait appris. Et en expirant, il laissa partir un peu de la colère avec son souffle — comme si chaque expiration était un fil qui tirait la colère hors de lui, doucement, patiemment, sans violence.\n\n— A'oudhou billahi min ash-shaytan ar-rajim, murmura-t-il. Je cherche refuge auprès d'Allah contre Satan le lapidé.\n\nLes mots agirent comme une pluie froide sur un brasier. La colère qui brûlait en lui ne disparut pas immédiatement — elle résista, elle lutta, elle essaya de raviver ses flammes. Mais Nawfel continua à respirer, continuant à réciter, et peu à peu, le feu commença à s'éteindre.\n\nAl-Ammara poussa un cri de surprise — le monstre n'avait pas prévu cette réaction. Il s'attendait à la rage, à l'attaque, à la confrontation. Mais la patience ? Le calme ? C'étaient des armes qu'il ne comprenait pas, des armes contre lesquelles sa fumée noire était impuissante. Le monstre commença à rétrécir — de cinq mètres à quatre, de quatre à trois, de trois à deux. Sa fumée devenait moins dense, ses yeux de braises perdaient de leur éclat.\n\nNawfel comprit en cet instant une vérité profonde : la patience n'est pas de la faiblesse. C'est la plus grande des forces. La colère est bruyante et impressionnante, mais elle s'épuise vite. La patience, elle, est comme l'eau qui creuse la pierre — silencieuse, persistante, invincible.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "A'oudhou billahi min ash-shaytan ar-rajim... La ilaha illa Allah... Je respire... je suis calme... tu n'auras pas ma colère. Pas aujourd'hui.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s5',
          background: 'battle',
        },

        // --- t1c4s5: L'enseignement de Sidi Mu'adh ---
        {
          id: 't1c4s5',
          chapterId: 't1c4',
          title: "L'enseignement de Sidi Mu'adh",
          narration: `Alors que Nawfel luttait contre la colère, une lumière dorée apparut au-dessus du jardin — non pas une lumière naturelle, mais une lumière spirituelle, d'une pureté et d'une douceur que Nawfel reconnut immédiatement. C'était la lumière de la zawiyah, la lumière de Sidi Mu'adh, la lumière du savoir et de la sagesse qui transcende les mondes.\n\nEt puis la voix du shaykh se fit entendre — pas en écho, pas en souvenir, mais comme s'il était là, en chair et en esprit, debout à côté de Nawfel dans le jardin magique. La voix était claire, douce, pénétrante, et chaque mot résonnait dans le cœur de Nawfel comme un coup de cloche dans une vallée silencieuse.\n\n— On ne combat pas la colère par la colère, Nawfel. C'est la première règle du jihad intérieur. Quand tu réponds à la colère par la colère, tu ne fais que l'alimenter — c'est comme jeter de l'huile sur un feu. Le feu ne s'éteint pas, il grandit. Mais quand tu réponds à la colère par la patience, c'est comme verser de l'eau sur les flammes. Peut-être que l'eau ne les éteindra pas immédiatement, mais elle les affaiblira, lentement, sûrement, inévitablement.\n\nLa voix fit une pause, et Nawfel sentit que le shaykh était en train de sourire, même s'il ne pouvait pas le voir.\n\n— Le Prophète, paix et bénédiction sur lui, a dit à un homme qui venait lui demander conseil : « Ne te mets pas en colère. » L'homme demanda plusieurs fois, et le Prophète répéta : « Ne te mets pas en colère. » Ce n'est pas parce que la colère est mauvaise en elle-même — c'est parce que la colère, quand elle te contrôle, te fait perdre la meilleure partie de toi-même. Ta raison, ta compassion, ta connexion avec Allah.\n\n— Alors respire, Nawfel. Invoque Allah. Et rappelle-toi : même les plus grands saints ont eu des moments de colère. La différence, c'est qu'ils ont appris à ne pas la laisser les diriger. C'est ça, le vrai jihad — le jihad contre son propre Nafs.\n\nLa lumière dorée enveloppa Nawfel comme une couverture chaude, et il sentit sa détermination se renforcer, sa confiance grandir, et sa colère — la colère que le monstre avait essayé de réveiller — se dissoudre comme de la neige au soleil.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "On ne combat pas la colère par la colère, Nawfel. C'est la première règle du jihad intérieur. Quand tu réponds à la rage par la patience, tu affaiblis la bête. C'est comme verser de l'eau sur un feu — chaque goutte compte, même si le feu ne s'éteint pas tout de suite.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s6',
          background: 'inner_world',
        },

        // --- t1c4s6: La transformation ---
        {
          id: 't1c4s6',
          chapterId: 't1c4',
          title: 'La transformation',
          narration: `Nawfel ouvrit les yeux. Al-Ammara était toujours là, mais le monstre n'était plus l'être terrifiant de tout à l'heure. Réduit à la taille d'un enfant par le dhikr et la patience de Nawfel, il vacillait faiblement, sa fumée noire et rouge devenue grise et fine, ses yeux de braises réduits à deux lueurs mourantes. Le monstre semblait épuisé, vidé de son énergie, comme un feu qui a consumé tout son bois et qui meurt en crépitant.\n\nEt c'est là que Nawfel fit quelque chose que personne ne lui avait appris — quelque chose qui vint de son cœur, directement, sans réflexion, sans calcul. Il ne leva pas les poings. Il ne récita pas une invocation de combat. Il fit un pas vers le monstre, s'accroupit à sa hauteur, et posa sa main — sa petite main d'enfant de huit ans — sur ce qui ressemblait au front de la créature.\n\n— Je ne te déteste pas, dit Nawfel doucement. Tu es une partie de moi. Tu es ma colère, oui, mais tu es aussi mon énergie, ma passion, ma capacité à me défendre. Ce n'est pas toi que je veux détruire — c'est la façon dont tu te manifests. Tu n'as pas besoin de brûler pour être forte. Tu peux briller.\n\nLa fumée grise du monstre trembla. Puis, lentement, miraculeusement, elle commença à changer de couleur. Le gris devint du blanc — un blanc pur, lumineux, comme la neige au soleil ou la lumière de la lune sur l'eau calme. La fumée se condensa, se densifia, et prit une nouvelle forme. Plus de crocs, plus d'yeux de braises, plus de silhouette massive et terrifiante.\n\nÀ la place du monstre se tenait une petite créature — pas plus grande qu'un chat — faite entièrement de lumière blanche. Elle avait des ailes translucides comme celles d'une luciole, et elle émettait une douce lueur qui illuminait le sol autour d'elle. Elle regarda Nawfel avec de grands yeux lumineux, et Nawfel sentit que cette créature était heureuse. Non pas guérie — transformée. La colère n'avait pas disparu. Elle était devenue autre chose — une force pure, une énergie lumineuse, prête à servir au lieu de détruire.\n\nLes fleurs du jardin, autour de Nawfel, éclatèrent en un concert de pétales colorés. Les arbres dorés chantèrent avec une ferveur renouvelée. Le sol verdoyant retrouva son éclat émeraude. Et la porte avec « قلب » — la porte du cœur — s'ouvrit complètement, révélant un chemin de lumière dorée qui menait vers les montagnes flottantes et la cité lointaine.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu vois ? Tu n'as pas besoin d'être un monstre. Tu peux être de la lumière. Tu es une partie de moi, et je refuse de te laisser dans l'obscurité. Bienvenue dans la lumière.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s7',
          background: 'inner_world',
        },

        // --- t1c4s7: La sagesse du Shaykh ---
        {
          id: 't1c4s7',
          chapterId: 't1c4',
          title: 'La sagesse du Shaykh',
          narration: `La scène du jardin vacilla comme une image reflétée dans l'eau troublée, puis se stabilisa sous une nouvelle forme. Nawfel n'était plus dans le jardin magique — il était de retour dans la zawiyah, assis en face de Sidi Mu'adh. Mais ce n'était pas la zawiyah du monde réel — c'était une version spirituelle, plus lumineuse, plus profonde, où chaque objet irradiait d'une signification sacrée.\n\nSidi Mu'adh le regardait avec des yeux brillants d'une fierté qui Nawfel n'avait jamais vue chez personne. Le vieux shaykh leva ses mains ridées vers le ciel, puis les posa sur les épaules du garçon, et son sourire était si large et si lumineux qu'il illuminait toute la zawiyah.\n\n— Tu as réussi, Nawfel. Non pas parce que tu es le plus fort, ni le plus courageux, mais parce que tu as fait quelque chose que très peu de gens, même les adultes, sont capables de faire — tu n'as pas détesté ton ennemi. Tu as compris que ce monstre n'était pas ton ennemi, mais une partie de toi qui avait besoin d'amour et de patience.\n\nLe shaykh marqua une pause, laissant ses mots se déposer dans le cœur de Nawfel comme des graines dans un terreau fertile.\n\n— Ce monstre, continua Sidi Mu'adh, est une partie de toi. Ne le déteste pas. Sois patient avec lui, comme Allah est patient avec toi. Quand tu commets une erreur, Allah ne te détruit pas — Il te donne une chance de te repentir, de revenir, de changer. Fais la même chose avec les parties de toi qui te font souffrir. Ne les combats pas avec haine. Combats-les avec amour, avec patience, avec le rappel d'Allah.\n\n— Car c'est cela, le vrai sens du jihad intérieur, Nawfel. Ce n'est pas une guerre de destruction — c'est une guerre de transformation. Et tu viens de remporter ta première victoire. Non pas en détruisant ton ennemi, mais en le changeant. En lui donnant une nouvelle chance. Exactement comme Allah le fait avec nous, chaque jour, à chaque instant.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Ce monstre est une partie de toi, Nawfel. Ne le déteste pas. Sois patient avec lui, comme Allah est patient avec toi. Quand tu te trompes, Allah ne te détruit pas — Il te donne une nouvelle chance. Fais de même avec les parties de ton âme qui te font souffrir. C'est la plus grande des sagesse.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Alors... chaque fois que je serai en colère, je devrai être patient avec moi-même ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement. La patience envers soi-même est la base de la patience envers les autres. Celui qui est dur avec lui-même sera dur avec les autres. Mais celui qui est doux avec son propre cœur — celui-là connaîtra la miséricorde d'Allah.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't1c4s8',
          background: 'zawiyah',
        },

        // --- t1c4s8: La leçon finale ---
        {
          id: 't1c4s8',
          chapterId: 't1c4',
          title: 'La leçon finale',
          narration: `La zawiyah spirituelle s'illumina d'une lumière dorée et douce, comme si le soleil s'était invité à l'intérieur pour célébrer quelque chose de grand. Sidi Mu'adh se leva — son corps vieux et fatigué se dressant avec une grâce qui défiait son âge — et il marcha vers une alcôve que Nawfel n'avait pas remarquée auparavant. Il en sortit un petit objet, enveloppé dans un tissu de soie verte brodé de fils d'or.\n\n— Nawfel, dit le shaykh en s'agenouillant devant le garçon et en tenant l'objet entre ses mains comme on tient un trésor inestimable. Tu as appris aujourd'hui la première et la plus importante de toutes les leçons. Tu as appris que le cœur est le champ de bataille de la vie, et que chaque émotion — même la colère, même la peur — mérite d'être traitée avec compassion.\n\nIl dévoila l'objet. C'était un petit médaillon en argent, gravé d'une calligraphie délicate qui formait les mots « قلب نقي » — cœur pur. Le médaillon brillait d'une lumière douce, comme s'il contenait son propre soleil miniature.\n\nSidi Mu'adh le suspendit au cou de Nawfel, et le garçon sentit immédiatement une chaleur agréable se diffuser dans sa poitrine, comme un rayon de soleil en plein hiver.\n\n— Porte-le toujours, petit cœur. Et souviens-toi de cette leçon, la plus grande de toutes : « Le cœur est le miroir de l'âme, et quand il est purifié, il reflète la lumière d'Allah. » Ce sont les mots du grand maître Ibn Arabi, que Allah soit satisfait de lui. Si tu ne retiens qu'une seule chose de tout ce que je t'ai enseigné aujourd'hui, que ce soit celle-ci.\n\nNawfel regarda le médaillon, puis Sidi Mu'adh, puis la zawiyah illuminée autour de lui. Il sentait dans son cœur une paix qu'il n'avait jamais connue — une paix profonde, complète, qui ne dépendait de rien d'extérieur. C'était la première goutte de cette sagesse que Sidi Mu'adh avait appelée An-Nafs Al-Mutma'inna — l'âme en paix.\n\n— Merci, Sidi Mu'adh, murmura Nawfel. Merci de m'avoir appris que la plus grande des batailles se gagne non pas en détruisant, mais en aimant.\n\nSidi Mu'adh posa sa main sur la tête du garçon une dernière fois, et quand il la retira, la zawiyah commença à se dissoudre dans un halo de lumière dorée. Nawfel sentit qu'il remontait à la surface du sommeil, porté par la paix, emporté par la certitude qu'il avait changé — non pas radicalement, pas définitivement, mais suffisamment pour savoir que le chemin qui s'ouvrait devant lui était le bon.\n\nLe lendemain matin, quand Nawfel ouvrit les yeux dans sa chambre, le soleil de Chefchaouen entrait par la fenêtre et dessinait un rectangle doré sur son lit. Wassim dormait encore à côté de lui, un sourire aux lèvres. Souhayl était déjà levé. Et sur la poitrine de Nawfel, contre sa peau, le médaillon d'argent brillait doucement, comme une promesse, comme un premier pas sur le plus long et le plus beau des chemins.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Le cœur est le miroir de l'âme, et quand il est purifié, il reflète la lumière d'Allah. Ce sont les mots du grand maître Ibn Arabi. Si tu ne retiens qu'une seule chose de tout ce que je t'ai appris, que ce soit celle-ci, Nawfel.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... est-ce que les autres monstres seront plus difficiles que celui-ci ?",
              emotion: 'scared',
            },
            {
              characterId: 'sidimuadh',
              text: "Peut-être, petit cœur. Mais tu sais maintenant le secret : chaque monstre est une partie de toi qui attend d'être aimée et transformée. Rappelle-toi toujours — Allah ne charge une âme que selon sa capacité. Si ce combat t'a été donné, c'est que tu as la force de le mener.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Merci, Sidi Mu'adh. Pour tout.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'zawiyah',
          isEnding: true,
          earnedBadgeId: 'hikma',
          lesson: {
            title: 'La Hikma — La sagesse',
            content:
              "La sagesse suprême dans le cheminement spirituel est de comprendre que chaque épreuve intérieure est une opportunité de croissance. Nawfel a appris que le cœur, quand il est purifié, devient un miroir qui reflète la lumière divine. Cette sagesse — la Hikma — n'est pas acquise par l'étude seule, mais par l'expérience du jihad intérieur.",
            quote: 'القلب مرآة النفس، وإذا طهر انعكست فيه نور الله',
            source: 'Attribué à Ibn Arabi',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Ammara — La colère'],
  spiritualLesson:
    "Le premier tome enseigne les fondements du cheminement spirituel : Tawakkul (confiance en Allah), Sabr (patience), Ikhlas (sincérité), et Hikma (sagesse). Nawfel découvre que le plus grand des combats est celui que l'on mène contre soi-même, et que la victoire ne vient pas de la destruction de ses défauts, mais de leur transformation par la patience, le dhikr et la compassion.",
};
