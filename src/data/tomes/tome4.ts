import type { Tome } from '@/types/story';

export const tome4: Tome = {
  id: 'tome4',
  number: 4,
  title: 'Le Voile et la Lumière',
  titleAr: 'الحجاب والنور',
  subtitle: 'Les obstacles subtils de l\'âme',
  description:
    "Après avoir vaincu les monstres de la colère et de la cupidité, Nawfel croit avoir atteint un niveau spirituel élevé. Mais les pièges les plus dangereux sont ceux qu'on ne voit pas. L'ostentation (Riya) et la confusion spirituelle s'infiltrent dans son cœur comme un voile invisible, lui faisant perdre de vue la véritable lumière. guidé par Sidi Mu'adh, Nawfel découvrira que la sagesse véritable et la miséricorde sont les clés qui dissolvent les illusions les plus subtiles.",
  theme: 'Hikma & Rahma — Sagesse et Miséricorde',
  coverImage: '/images/tome4-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Masque de la Piété (قناع التقوى)
    // ============================================================
    {
      id: 't4c1',
      tomeId: 'tome4',
      number: 1,
      title: 'Le Masque de la Piété',
      titleAr: 'قناع التقوى',
      scenes: [
        // --- t4c1s1: Les louanges du village ---
        {
          id: 't4c1s1',
          chapterId: 't4c1',
          title: 'Les louanges du village',
          narration: `Les ruelles de Chefchaouen bruissaient d'une excitation inhabituelle ce matin-là. Depuis que Nawfel avait commencé son cheminement spirituel sous la guidance de Sidi Mu'adh, tout le village semblait le regarder différemment. Les anciens s'arrêtaient pour lui sourire quand il passait, les femmes du quartier murmuraient des dou'as — des invocations — en le voyant prier à la mosquée, et même les enfants de son école le traitaient avec un respect nouveau.\n\nCe matin, alors que Nawfel marchait vers la zawiyah pour sa leçon habituelle, un groupe de voisins s'était attroupé devant la maison de son père. La vieille Fatima, celle qui vendait les herbes au marché, parlait avec animation à quiconque voulait l'écouter.\n\n— Vous savez, disait-elle en agitant la main comme pour ponctuer chaque mot, ce petit Nawfel, il n'est pas comme les autres enfants. L'autre jour, je l'ai vu réciter le Coran dans le jardin, et sa voix... Allahu Akbar, sa voix faisait pleurer les oiseaux ! C'est un wali, un saint, je vous le dis !\n\nNawfel s'arrêta net derrière le coin du mur, son cœur battant à tout rompre. Il n'avait pas entendu tout ce qu'elle avait dit, mais les mots « saint » et « wali » lui firent l'effet d'une douce chaleur qui se répandit dans sa poitrine. Il sentit un sourire fier étirer ses lèvres malgré lui. C'était agréable, cette sensation. Trop agréable.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: 'Un wali... moi ? C\'est vrai que je prie beaucoup, et que j\'ai vaincu des monstres intérieurs...',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s2',
          background: 'street',
        },

        // --- t4c1s2: Le sourire de l'orgueil ---
        {
          id: 't4c1s2',
          chapterId: 't4c1',
          title: 'Le sourire de l\'orgueil',
          narration: `À la zawiyah, Nawfel s'assit devant Sidi Mu'adh avec une assurance qu'il n'avait jamais eue auparavant. Ses épaules étaient relevées, son regard direct, et il y avait dans son sourire quelque chose de nouveau — un éclat qui n'avait rien à voir avec la lumière spirituelle qu'il avait appris à cultiver. C'était autre chose. Quelque chose de plus terne, de plus superficiel, comme une couche de vernis brillant sur du bois pourri.\n\nSidi Mu'adh le regarda longuement, sans dire un mot. Son visage impassible ne trahissait rien, mais ses yeux — ces yeux qui voyaient au-delà des apparences — brillaient d'une lueur que Nawfel ne savait pas encore interpréter. Le silence dura si longtemps que Nawfel finit par se sentir mal à l'aise.\n\n— Alors, petit cœur, dit enfin le shaykh d'une voix douce mais chargée d'une gravité inhabituelle. Raconte-moi ce que tu as accompli depuis notre dernière rencontre.\n\nNawfel se lança avec enthousiasme. Il parla de ses prières, de ses récitations du Coran, des dhikrs qu'il pratiquait chaque soir. Il décrivit comment il avait aidé un vieux monsieur à traverser la rue, comment il avait partagé son goûter avec un enfant pauvre, comment il avait pardonné à un camarade qui l'avait insulté. Chaque anecdote était embellie, chaque geste amplifié, chaque mot choisi pour montrer à quel point Nawfel avait progressé.\n\nSidi Mu'adh écoutait en silence, ses mains posées sur ses genoux, ses yeux mi-clos. Quand Nawfel eut terminé, un long silence s'installa de nouveau dans la zawiyah.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Et j'ai même récité la sourate Al-Mulk en entier hier soir sans me tromper une seule fois ! Wassim disait que j'avais une voix d'ange !",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "Je vois... tu as beaucoup accompli, petit cœur. Mais permets-moi de te poser une question : quand tu priais la sourate Al-Mulk hier soir, pour qui priais-tu ?",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't4c1s2_c1',
              text: "Pour Allah, bien sûr. C'est évident.",
              nextSceneId: 't4c1s3a',
            },
            {
              id: 't4c1s2_c2',
              text: "Euh... pour Allah. Et aussi parce que Wassim m'écoutait.",
              nextSceneId: 't4c1s3b',
              isCorrect: true,
            },
          ],
          background: 'zawiyah',
        },

        // --- t4c1s3a: Le voile se tend ---
        {
          id: 't4c1s3a',
          chapterId: 't4c1',
          title: 'Le voile se tend',
          narration: `Nawfel répondit sans hésiter, avec une certitude qui sonnait presque comme de l'arrogance. Bien sûr qu'il priait pour Allah ! Pour qui d'autre aurait-il pu prier ? Mais au moment même où il prononça ces mots, quelque chose d'étrange se produisit dans la zawiyah. La lumière dorée qui filtrait par la petite fenêtre en hauteur sembla vaciller, comme si un nuage invisible était passé devant le soleil.\n\nSidi Mu'adh ne sourit pas. Il inclina légèrement la tête, et Nawfel vit, pour la première fois depuis qu'il connaissait le shaykh, une ombre de tristesse dans ses yeux.\n\n— Tu es sûr, petit cœur ? demanda doucement Sidi Mu'adh. Parce que quand tu m'as raconté tes exploits, tu ne m'as pas parlé d'Allah une seule fois. Tu m'as parlé de toi. De tes prières. De ta voix. De tes bonnes actions. Toi, toi, toi.\n\nLes mots tombèrent comme des pierres dans l'eau calme de la zawiyah. Nawfel ouvrit la bouche, puis la referma. Il voulut protester, mais les mots ne venaient pas. Parce que Sidi Mu'adh avait raison, et Nawfel le savait au plus profond de son cœur — ce cœur-là, le vrai, pas celui qu'il exhibait fièrement.\n\n— Quand la prière te fait te sentir supérieur aux autres, petit cœur, continua le shaykh, ce n'est plus une prière. C'est un masque. Et le plus dangereux des masques est celui que l'on porte sans savoir qu'on le porte.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Mais... j'ai quand même fait des bonnes actions ! Ce n'est pas rien, non ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Les bonnes actions sont précieuses, Nawfel. Mais l'intention qui les accompagne est encore plus précieuse. Une action faite pour être vue par les gens ne monte pas vers le ciel — elle reste sur terre, comme une pierre jetée dans la boue.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s4',
          background: 'zawiyah',
        },

        // --- t4c1s3b: L'honnêteté douloureuse ---
        {
          id: 't4c1s3b',
          chapterId: 't4c1',
          title: "L'honnêteté douloureuse",
          narration: `Nawfel baissa les yeux. La vérité, quand elle est dite à voix haute, a un poids écrasant. Il avait prié pour Allah, oui, mais en même temps, il avait été conscient que Wassim l'écoutait depuis le seuil de la porte. Il n'avait pas cherché à réduire sa voix. Au contraire, il l'avait embellie, l'avait rendue plus belle qu'elle ne l'était naturellement. Et quand Wassim avait murmuré « tu as une voix d'ange », Nawfel s'était senti envahi par une joie qui n'avait rien à voir avec la proximité d'Allah.\n\nSidi Mu'adh sourit, et cette fois, son sourire était different — c'était un sourire qui contenait de la tendresse mais aussi de la gravité, comme celui d'un père qui doit corriger son enfant par amour.\n\n— Tu as dit la vérité, petit cœur, et c'est la chose la plus difficile à faire. La plupart des adultes passent toute leur vie sans jamais admettre ce que tu viens de reconnaître en un instant. Tu viens de remporter ta première victoire contre un ennemi que très peu de gens voient.\n\nNawfel leva les yeux, confus.\n\n— Quel ennemi ?\n\n— Al-Riya, dit Sidi Mu'adh. L'ostentation. Le désir d'être vu, d'être admiré, d'être loué pour ses actes d'adoration. C'est un monstre d'une subtilité redoutable. Il ne te pousse pas à faire le mal — il se cache à l'intérieur du bien que tu fais. Il prend la forme de ton propre zèle, de ta propre piété, et il la transforme lentement en poison.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Al-Riya... je ne savais pas que c'était un monstre. Je pensais que les monstres étaient comme la colère ou l'avidité — des choses évidentes.",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Les monstres les plus puissants sont ceux que tu ne reconnais pas, Nawfel. Riya est un maître du déguisement. Il porte les vêtements de la piété, il parle le langage de la dévotion, et il sourit comme un saint. Mais sous ce masque, il est le destructeur silencieux des bonnes actions.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s4',
          background: 'zawiyah',
        },

        // --- t4c1s4: L'apparition d'Al-Riya ---
        {
          id: 't4c1s4',
          chapterId: 't4c1',
          title: "L'apparition d'Al-Riya",
          narration: `Cette nuit-là, Nawfel fit un rêve très différent de ceux qu'il avait coutume de faire. Il ne se retrouva pas dans le jardin lumineux qu'il aimait tant, ni sur le chemin de lumière qui menait à la porte de son cœur. Il se retrouva dans une salle immense, richement décorée de miroirs dorés qui couvraient chaque mur, chaque surface, chaque angle.\n\nAu centre de cette salle, une créature se tenait debout, immobile. Elle était magnifique — d'une beauté presque insoutenable. Elle ressemblait à un ange de lumière, avec des ailes blanches et irisées qui jetaient des reflets arc-en-ciel dans toutes les directions. Son visage était doux, souriant, ses yeux brillants de bonté. Elle portait des vêtements d'une blancheur éclatante, ornés de versets du Coran brodés en fil d'or.\n\nMais quand Nawfel regarda plus attentivement, il vit quelque chose qui lui glaça le sang. Chaque miroir ne reflétait pas Nawfel tel qu'il était — ils le reflétait comme une version idéalisée, embellie, irréelle. Dans un miroir, il était plus grand. Dans un autre, plus sage. Dans un troisième, plus saint. Et la créature au centre de la salle souriait, comme un artiste satisfait de son œuvre.\n\n— Bienvenue, Nawfel, dit la créature d'une voix suave comme du miel. Ne suis-je pas magnifique ? Ne suis-je pas la preuve que tu es special ? Viens, regarde-toi dans mes miroirs. Admire ce que tu es devenu. Tu es le meilleur de tous les enfants du village. Le plus pieux. Le plus pur. Tu le mérites, n'est-ce pas ?`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu es... magnifique. Mais quelque chose ne va pas. Ces miroirs... ce ne sont pas des reflets vrais.",
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't4c1s4_c1',
              text: "Détourner le regard des miroirs et regarder la créature en face",
              nextSceneId: 't4c1s5a',
              isCorrect: true,
            },
            {
              id: 't4c1s4_c2',
              text: "Approcher d'un miroir pour mieux admirer son reflet",
              nextSceneId: 't4c1s5b',
            },
          ],
          background: 'inner_world',
        },

        // --- t4c1s5a: Le visage sous le masque ---
        {
          id: 't4c1s5a',
          chapterId: 't4c1',
          title: 'Le visage sous le masque',
          narration: `Nawfel détourna les yeux des miroirs et fixa directement la créature. C'était l'une des choses les plus difficiles qu'il ait jamais faites, car les miroirs l'appelaient, le sollicitaient, murmuraient son nom avec des voix prometteuses de gloire et d'admiration. Mais Nawfel résista. Il regarda la créature en face, et lentement, très lentement, la beauté commença à se fissurer.\n\nLe sourire de la créature se crispa. Les ailes blanches tremblèrent, et sous la lumière éblouissante, Nawfel commença à voir ce qui se cachait en dessous. La blancheur des vêtements n'était pas celle de la pureté — c'était celle du vide. Les versets du Coran brodés en or n'étaient pas des versets du tout — c'étaient des mots vides, des coquilles creuses qui ressemblaient à des lettres arabes sans en avoir le sens. Et les yeux brillants de la créature n'étaient pas des yeux de bonté — c'étaient des miroirs encore plus petits, des miroirs qui ne reflétaient qu'une seule chose : la créature elle-même.\n\n— Tu oses me regarder en face ? siffla la créature, et sa voix suave se transforma en un murmure grinçant. Tu oses détourner les yeux de ta propre grandeur ? Moi, Al-Riya (الرياء), je suis celui qui te rend digne d'amour et de respect ! Sans moi, tu n'es rien ! Un enfant ordinaire, pas mieux que les autres !\n\nNawfel sentit les mots comme des coups, car ils touchaient exactement l'endroit où il avait peur — la peur d'être ordinaire, la peur de ne pas être special. Mais cette fois, au lieu de se laisser emporter, Nawfel prit une grande inspiration et murmura :\n\n— Allah ne regarde pas l'apparence. Allah regarde le cœur. Et mon cœur... mon cœur est à Lui, pas à toi.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu me montres une image embellie de moi-même. Mais ce n'est pas moi. C'est un mensonge. Allah connaît le vrai Nawfel, et c'est Lui seul qui juge.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s6',
          background: 'inner_world',
          lesson: {
            title: 'Le Riya — L\'ostentation',
            content:
              "Le Riya (الرياء) est l'ostentation, le fait d'accomplir des actes d'adoration pour être vu et loué par les gens plutôt que par sincérité envers Allah. Le Prophète ﷺ a dit que c'était le « shirk mineur » (l'association mineure), car il consiste à placer l'opinion des gens au même niveau que celle d'Allah.",
            quote: 'إِنِّي أَخْوَفُ عَلَيْكُمُ الشِّرْكَ الأَصْغَرَ. قَالُوا: وَمَا الشِّرْكُ الأَصْغَرُ؟ قَالَ: الرِّيَاءُ',
            source: 'Hadith — Ahmad',
          },
        },

        // --- t4c1s5b: Le piège du miroir ---
        {
          id: 't4c1s5b',
          chapterId: 't4c1',
          title: 'Le piège du miroir',
          narration: `Nawfel s'approcha du miroir le plus proche, attiré par son reflet comme un papillon par une flamme. Dans le miroir, il se voyait plus grand, plus sage, plus beau. Son sourire était parfait, ses yeux brillaient d'une lumière surnaturelle, et autour de lui, une aura dorée l'entourait comme celle des saints dans les livres d'histoires.\n\n— Regarde comme tu es beau, murmura la créature derrière lui. Regarde comme tu es special. Personne d'autre n'est comme toi, Nawfel. Tu es le choix d'Allah. Son préféré.\n\nEt Nawfel resta là, immobile, hypnotisé par sa propre image. Les secondes devinrent des minutes, les minutes devinrent des heures — ou peut-être était-ce l'inverse, car le temps dans ce monde n'obéissait pas aux mêmes règles. Plus il regardait, plus le refait devenait réel à ses yeux, et plus la créature derrière lui grandissait, se nourrissant de son admiration de lui-même.\n\nCe fut la voix de Sidi Mu'adh, résonnant comme un écho lointain dans le rêve, qui le tira de sa torpeur.\n\n— Nawfel ! Petit cœur ! Celui qui aime son image plus que la vérité est prisonnier de ses propres yeux ! Tourne-toi ! Regarde au-delà de la surface !\n\nD'un effort surhumain, Nawfel détourna les yeux du miroir. La salle trembla. Les miroirs se fissurèrent. Et Nawfel, tremblant, comprit à quel point il avait failli se perdre dans l'illusion de sa propre grandeur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je... j'ai failli me perdre. Le miroir me montrait ce que je voulais voir, pas ce que je suis vraiment.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s6',
          background: 'inner_world',
        },

        // --- t4c1s6: La fissure dans le masque ---
        {
          id: 't4c1s6',
          chapterId: 't4c1',
          title: 'La fissure dans le masque',
          narration: `Nawfel se réveilla en sursaut, le cœur battant, les mains moites. La première lumière de l'aube filtrait à travers les volets, dessinant des rectangles pâles sur le sol de la chambre. À côté de lui, Souhayl dormait paisiblement, et Wassim murmurait quelque chose dans son sommeil, son doudou serré contre sa joue.\n\nNawfel resta immobile un long moment, fixant le plafond. Les paroles d'Al-Riya résonnaient encore dans son esprit — « Sans moi, tu n'es rien ! Un enfant ordinaire ! » — et malgré toute sa volonté, il sentait que ces mots avaient laissé une trace, une blessure profonde dans une partie de lui qu'il ne pouvait pas nommer.\n\nMais il y avait autre chose aussi. La leçon de Sidi Mu'adh. La vérité cruelle mais libératrice que le shaykh lui avait fait voir : quand les bonnes actions deviennent un moyen de se mettre en avant, elles perdent leur lumière. Nawfel ferma les yeux et murmura une prière qu'il n'avait jamais prononcée auparavant :\n\n— Allahoumma inni a'oudhou bika min an ushrika bika shay'an wa ana a'lam, wa astaghfiruka lima la a'lam.\n\n« Ô Allah, je cherche refuge auprès de Toi contre le fait de T'associer quoi que ce soit alors que je sais, et je Te demande pardon pour ce que je ne sais pas. » Les mots du Prophète ﷺ, que Sidi Mu'adh lui avait enseignés des semaines plus tôt, prirent soudain tout leur sens. Et Nawfel comprit que la véritable spiritualité n'était pas une scène de théâtre où l'on joue le rôle du saint, mais un dialogue intime et silencieux entre le serviteur et son Seigneur.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Allahoumma inni a'oudhou bika min an ushrika bika shay'an... Ô Allah, purifie mon intention. Que tout ce que je fasse soit pour Toi seul.",
              emotion: 'determined',
            },
            {
              characterId: 'souhayl',
              text: "Nawfel ? Tu parles dans ton sommeil encore ? Tout va bien ?",
              emotion: 'surprised',
            },
          ],
          choices: [],
          nextSceneId: 't4c1s7',
          background: 'bedroom',
        },

        // --- t4c1s7: L'épreuve du matin ---
        {
          id: 't4c1s7',
          chapterId: 't4c1',
          title: "L'épreuve du matin",
          narration: `Au petit-déjeuner, Nawfel fut mis à l'épreuve d'une manière qu'il n'avait pas anticipée. Sa mère Aziza, qui avait une façon de deviner les choses que personne ne lui disait, posa sa main sur l'épaule de son fils et lui demanda doucement comment s'était passée sa leçon avec Sidi Mu'adh.\n\nNawfel hésita. L'instinct — l'ancien instinct, celui qu'Al-Riya avait nourri — lui murmurait d'embellir l'histoire, de se présenter sous son meilleur jour, de dire que Sidi Mu'adh l'avait félicité, qu'il était sur le point d'atteindre un niveau spirituel extraordinaire. Mais cette fois, Nawfel reconnut cette voix pour ce qu'elle était — le murmure du masque.\n\nIl prit une grande inspiration et raconta la vérité. Il parla de son orgueil, de la façon dont il s'était vanté de ses prières, de la leçon douloureuse que Sidi Mu'adh lui avait apprise. Il parla du rêve avec les miroirs dorés et de la créature magnifique qui se cachait sous les apparences de la piété.\n\nAziza l'écouta sans l'interrompre, ses yeux brillants de fierté — non pas la fausse fierté que Al-Riya manipulait, mais une fierté profonde, maternelle, spirituelle. Quand Nawfel eut terminé, elle le serra contre elle et murmura :\n\n— Mon fils, ce que tu viens de faire est plus difficile que de combattre cent monstres. Admettre sa faiblesse, c'est le début de la véritable force. Sidi Mu'adh a raison : la sincérité est le plus beau des joyaux, et tu viens de le trouver.\n\nMehdi, qui avait écouté en silence, posa sa main sur la tête de Nawfel et ajouta, avec sa voix calme et profonde :\n\n— « Certes, les actions ne valent que par les intentions. » Ce hadith est le fondement de tout, Nawfel. Souviens-t'en toujours.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon fils, admettre son orgueil devant les autres demande plus de courage que n'importe quelle bataille. Je suis fière de toi — non pas pour tes exploits, mais pour ton honnêteté.",
              emotion: 'happy',
            },
            {
              characterId: 'mehdi',
              text: "Certes, les actions ne valent que par les intentions. Chaque acte que tu fais, Nawfel, garde ton intention pure. C'est ton bouclier contre Riya.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: 'L\'intention sincère (Al-Ikhlas)',
            content:
              "L'Ikhlas (الإخلاص) est la sincérité dans l'adoration — faire chaque action uniquement pour Allah, sans chercher l'approbation des gens. Le Prophète ﷺ a dit : « Certes, les actions ne valent que par les intentions. » Nawfel a appris que reconnaître son orgueil est la première étape pour le dépasser.",
            quote: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Brouillard des Illusions (ضباب الأوهام)
    // ============================================================
    {
      id: 't4c2',
      tomeId: 'tome4',
      number: 2,
      title: 'Le Brouillard des Illusions',
      titleAr: 'ضباب الأوهام',
      scenes: [
        // --- t4c2s1: Un monde qui tremble ---
        {
          id: 't4c2s1',
          chapterId: 't4c2',
          title: 'Un monde qui tremble',
          narration: `Les jours qui suivirent la leçon sur Al-Riya furent parmi les plus difficiles de la vie de Nawfel. Plus il essayait d'être sincère dans ses prières, plus il devenait obsédé par son intention. Chaque fois qu'il levait les mains pour invoquer Allah, une voix intérieure lui murmurait : « Est-ce que tu le fais vraiment pour Allah ? Ou est-ce que tu penses déjà à ce que tu vas raconter à Sidi Mu'adh ? »\n\nC'était un cercle vicieux, un labyrinthe sans sortie. Nawfel ne savait plus où était la sincérité et où était l'ostentation. Tout se mélangeait dans son esprit comme les couleurs d'une peinture abandonnée sous la pluie. Même ses bonnes actions les plus simples — sourire à un voisin, aider sa mère à cuisiner, consoler Wassim quand il pleurait — étaient devenues des sources de doute et d'anxiété.\n\nUn soir, alors qu'il était assis dans le jardin familial après la prière d'Isha, Nawfel sentit quelque chose d'étrange se produire autour de lui. L'air devint plus dense, comme si le jardin tout entier était enveloppé dans un brouillard invisible. Les étoiles au-dessus de sa tête commencèrent à trembler, à vaciller, à se multiplier jusqu'à ce que le ciel ressemble à un kaléidoscope vertigineux.\n\nLe sol sous ses pieds devint mou, incertain, comme s'il marchait sur un tapis d'eau. Nawfel sentit le monde familier glisser loin de lui, et une peur sourde — différente de toutes les peurs qu'il avait connues — s'installa dans sa poitrine. Ce n'était pas la peur d'un monstre visible. C'était la peur de ne plus savoir distinguer le vrai du faux, le bien du mal, la lumière des ténèbres.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Non... pas encore... Qu'est-ce qui m'arrive ? Pourquoi tout est flou ?",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't4c2s2',
          background: 'garden',
        },

        // --- t4c2s2: Al-Mulhama ---
        {
          id: 't4c2s2',
          chapterId: 't4c2',
          title: 'Al-Mulhama',
          narration: `Le brouillard se condensa et prit forme. Devant Nawfel apparut une créature qui n'était pas faite de chair ni d'os, mais de brume et de confusion. Elle n'avait pas de visage fixe — son visage changeait constamment, passant d'un sourire à une grimace, d'un regard bienveillant à un œil méchant, d'une expression de paix à un rictus de moquerie. Ses contours étaient flous, comme un dessin à l'aquarelle dont l'eau n'a pas encore séché.\n\n— Bonsoir, Nawfel, dit la créature, et sa voix changeait elle aussi — parfois grave, parfois aiguë, parfois masculine, parfois féminine. Je suis Al-Mulhama (الملهَمة) — la Confuseuse. Je suis celle qui brouille les frontières, celle qui mélange les couleurs, celle qui rend le blanc noir et le noir blanc. Tu cherches la sincérité ? Je vais te montrer tant de sincérités différentes que tu ne sauras plus laquelle est la vraie.\n\nAutour de Nawfel, le jardin se transforma. Des portes apparurent — des dizaines de portes, toutes identiques, toutes menant apparemment au même endroit. Chacune portait un mot inscrit en lettres d'or : « Vérité », « Sincérité », « Piété », « Justice ». Mais quand Nawfel s'approcha de l'une d'elles, le mot changea et devint « Illusion ». Il s'approcha d'une autre : « Égo ». Une troisième : « Doute ».\n\n— Tu vois, Nawfel, continua Al-Mulhama en tournoyant autour de lui comme une volute de fumée vivante. Plus tu cherches, plus tu te perds. Plus tu doutes de tes intentions, plus tu es piégé. Car le doute infini n'est pas la sincérité — c'est mon royaume. Et dans mon royaume, rien n'est certain, rien n'est clair, rien n'est vrai.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Tu es... Al-Mulhama. Tu me fais douter de tout, même de mes doutes !",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 't4c2s3',
          background: 'inner_world',
        },

        // --- t4c2s3: Le labyrinthe des questions ---
        {
          id: 't4c2s3',
          chapterId: 't4c2',
          title: 'Le labyrinthe des questions',
          narration: `Al-Mulhama plongea Nawfel dans un labyrinthe de questions sans réponses. Le garçon se retrouva dans un corridor infini dont les murs étaient tapissés de miroirs déformants. Chaque miroir lui posait une question :\n\n— Est-ce que tu aimes Allah parce qu'Il est digne d'être aimé, ou parce que tu as peur de Lui ?\n— Est-ce que tu pries pour être pur ou pour te sentir pur ?\n— Est-ce que tu pardonnes parce que c'est bien ou parce que ça te rend supérieur ?\n— Est-ce que tu es sincère en ce moment même, ou est-ce que tu joues à être sincère ?\n\nChaque question était plus vertigineuse que la précédente, et Nawfel sentait sa raison vaciller sous leur poids. Il s'arrêta au milieu du corridor, les mains sur la tête, le souffle court. Les miroirs autour de lui se multipliaient à l'infini, chacun reflétant un Nawfel différent — un Nawfel pieux, un Nawfel hypocrite, un Nawfel confus, un Nawfel arrogant, un Nawfel humble, et tous ces Nawfel se regardaient les uns les autres avec des expressions de méfiance et de mépris.\n\nAl-Mulhama riait — un rire qui n'était pas méchant, mais qui était pire que la méchanceté car il était amusé, léger, comme si la souffrance de Nawfel n'était pour elle qu'un jeu sans conséquence.\n\n— Continue à chercher, petit Nawfel, dit-elle. Plus tu cherches, plus tu te perds. Car tu cherches avec ton intellect, et l'intellect ne peut pas saisir les vérités du cœur. Tu essaies de comprendre la lumière avec des mots d'ombre. C'est impossible. Abandonne.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Je ne peux pas abandonner ! Mais je ne sais plus où est la vérité ! Chaque réponse en amène une autre question !",
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't4c2s3_c1',
              text: "Arrêter de réfléchir et écouter son cœur en silence",
              nextSceneId: 't4c2s4a',
              isCorrect: true,
              badgeId: 'hikma',
            },
            {
              id: 't4c2s3_c2',
              text: "Essayer de répondre à toutes les questions logiquement",
              nextSceneId: 't4c2s4b',
            },
          ],
          background: 'inner_world',
        },

        // --- t4c2s4a: Le silence qui libère ---
        {
          id: 't4c2s4a',
          chapterId: 't4c2',
          title: 'Le silence qui libère',
          narration: `Nawfel s'arrêta. Juste comme ça. Il arrêta de penser, arrêta de chercher, arrêta de questionner. Il ferma les yeux, posa ses mains sur son cœur — ce cœur qu'il connaissait si bien maintenant, ce cœur qui avait traversé tant d'épreuves — et il écouta.\n\nPas avec ses oreilles. Pas avec son intellect. Avec son cœur.\n\nEt dans ce silence, quelque chose d'extraordinaire se produisit. Les miroirs cessèrent de poser des questions. Les voix se turent une à une, comme des bougies soufflées par un vent invisible. Le labyrinthe lui-même sembla se dissoudre, non pas parce qu'il avait trouvé une sortie, mais parce qu'il avait cessé de chercher une sortie. Il était resté immobile au centre de la confusion, et la confusion, privée de son carburant — le doute actif — s'était évaporée d'elle-même.\n\nUne lumière douce, chaude, familière apparut devant lui. Nawfel la reconnut immédiatement — c'était la même lumière que celle de la porte de son cœur, la lumière « قلب » qu'il avait vue dans son tout premier rêve. Elle pulsait doucement, comme un battement de cœur, et elle ne lui posait aucune question. Elle se contentait d'être là, présente, silencieuse, confiante.\n\nAl-Mulhama recula, sa brume se rétractant comme un animal surpris. Sa voix perdit son assurance.\n\n— Non... tu ne peux pas faire ça ! Tu ne peux pas juste... arrêter de penser ! Personne n'échappe à mes questions !\n\n— Je n'ai pas échappé, murmura Nawfel en ouvrant les yeux. J'ai simplement arrêté de courir. Et quand tu arrêtes de courir dans un labyrinthe, tu découvres que tu n'étais pas du tout dans un labyrinthe. Tu étais dans ta propre tête.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "La vérité n'est pas dans les réponses. Elle est dans le silence entre les questions. Mon cœur sait, même quand ma tête ne comprend pas.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't4c2s5',
          background: 'inner_world',
          earnedBadgeId: 'hikma',
          lesson: {
            title: 'La Hikma — La Sagesse du cœur',
            content:
              "La Hikma (الحكمة) est la sagesse — non pas le savoir intellectuel, mais la compréhension profonde qui vient du cœur. La vraie sagesse ne consiste pas à avoir toutes les réponses, mais à savoir quand les questions elles-mêmes sont un piège. Nawfel a découvert que le silence du cœur est plus puissant que le bruit de l'intellect.",
            quote: 'وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
            source: 'Coran, Sourate Al-Baqarah (2:269)',
          },
        },

        // --- t4c2s4b: La spirale du doute ---
        {
          id: 't4c2s4b',
          chapterId: 't4c2',
          title: 'La spirale du doute',
          narration: `Nawfel essaya de répondre aux questions une par une, avec la logique et la raison qu'il avait apprises à l'école. Mais chaque réponse qu'il donnait en engendrait trois nouvelles, et bientôt, il se retrouva enroulé dans une spirale de doutes si dense qu'il ne pouvait plus bouger. Les miroirs autour de lui se rapprochaient, se multipliaient, le prisonnant dans un cercle de reflets déformants.\n\nAl-Mulhama riait de plus belle, sa brume s'épaississant autour de Nawfel comme un cocon étouffant.\n\n— Tu vois ? La logique ne suffit pas, petit Nawfel. L'intellect est un outil merveilleux pour comprendre le monde matériel, mais il est impuissant face aux vérités spirituelles. Tu ne peux pas peser l'amour d'Allah sur une balance, ni mesurer la sincérité avec une règle. Plus tu utilises ton intellect pour comprendre ce qui dépasse l'entendement, plus tu t'enfonces dans la confusion.\n\nNawfel tomba à genoux, épuisé. Son cœur battait si fort qu'il l'entendait dans tout son corps. Et puis, au milieu du chaos, un souvenir remonta à la surface — les mots de Sidi Mu'adh, prononcés lors d'une leçon qu'il croyait oubliée :\n\n« Le cœur a une intelligence que l'intellect ne connaît pas. Quand tu es perdu, petit cœur, arrête de penser et commence à sentir. La vérité n'est pas une idée — c'est une lumière. »\n\nNawfel ferma les yeux. Il cessa de répondre. Il cessa de questionner. Et dans le silence qui suivit, la brume commença à se dissiper.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "J'arrête... j'arrête d'essayer de comprendre avec ma tête. Je dois... écouter autre chose.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't4c2s5',
          background: 'inner_world',
        },

        // --- t4c2s5: Le réveil dans le jardin ---
        {
          id: 't4c2s5',
          chapterId: 't4c2',
          title: 'Le réveil dans le jardin',
          narration: `Nawfel ouvrit les yeux. Il était toujours dans le jardin familial, assis sur le petit banc de pierre où il venait souvent méditer après la prière d'Isha. La brume avait disparu, les étoiles avaient retrouvé leur place dans le ciel, et le monde autour de lui était redevenu stable, solide, réel.\n\nMais Nawfel avait changé. Quelque chose en lui s'était calmé — non pas la agitation de l'esprit, qui était toujours là, mais un point plus profond, un centre de gravité qu'il n'avait jamais remarqué auparavant. C'était comme si son cœur avait trouvé un ancrage, un point fixe autour duquel le chaos pouvait tourbillonner sans l'emporter.\n\nIl leva les yeux vers le ciel et murmura les mots que Sidi Mu'adh lui avait enseignés pour les moments de confusion : « Rabbi zidni 'ilma » — « Ô mon Seigneur, augmente ma connaissance. » Et pour la première fois depuis des jours, cette simple invocation lui suffit. Il n'avait pas besoin de comprendre tout, de résoudre tout, de tout analyser. Il avait seulement besoin de demander, et de faire confiance.\n\nUne chouette hulula depuis le toit de la maison, et Nawfel sourit. Même les oiseaux de nuit semblaient lui murmurer que tout allait bien. Il rentra lentement à l'intérieur, le cœur plus léger, portant en lui une compréhension nouvelle qu'il n'aurait pas pu formuler avec des mots, mais qui brillait dans sa poitrine comme une petite lampe allumée dans une pièce sombre.`,
          dialogues: [
            {
              characterId: 'wassim',
              text: "Nawfel ? Tu étais dehors ? Il est tard ! J'ai eu peur que les monstres te prennent !",
              emotion: 'scared',
            },
            {
              characterId: 'nawfel',
              text: "Il n'y a pas de monstres ce soir, petit frère. Il n'y avait qu'un brouillard, et le brouillard... le brouillard se dissipe toujours quand on arrête de le poursuivre.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'garden',
          isEnding: true,
          lesson: {
            title: 'La confusion spirituelle (Wahm)',
            content:
              "Le Wahm (الوهم) est l'illusion, la confusion de l'esprit qui mélange le vrai et le faux. Dans le cheminement spirituel, il est courant de traverser des périodes de doute où l'on ne sait plus distinguer la sincérité de l'ostentation. La solution n'est pas de raisonner davantage, mais de se reconnecter au cœur et de faire confiance à la miséricorde d'Allah.",
            quote: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى',
            source: 'Coran, Sourate Ad-Duha (93:5)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Lumière de la Sagesse (نور الحكمة)
    // ============================================================
    {
      id: 't4c3',
      tomeId: 'tome4',
      number: 3,
      title: 'La Lumière de la Sagesse',
      titleAr: 'نور الحكمة',
      scenes: [
        // --- t4c3s1: La leçon des deux savants ---
        {
          id: 't4c3s1',
          chapterId: 't4c3',
          title: 'La leçon des deux savants',
          narration: `Trois jours après son affrontement avec Al-Mulhama, Nawfel se rendit à la zawiyah pour sa leçon hebdomadaire. Mais quand il arriva, il trouva quelque chose d'inhabituel : un autre visiteur était assis en face de Sidi Mu'adh. C'était un homme jeune, à la barbe soignée, aux vêtements impeccables. Il tenait un livre épais relié en cuir et portait sur son visage l'expression studieuse d'un chercheur de connaissance.\n\nL'homme parlait avec animation, citant des versets du Coran, des hadiths, des paroles de savants anciens. Sa mémoire était prodigieuse — il semblait capable de réciter des pages entières de textes sans hésitation. Nawfel fut impressionné. Cet homme incarnait ce que tout le monde dans le village admirait : le savoir, la connaissance, l'érudition.\n\nMais Sidi Mu'adh l'écoutait avec un regard que Nawfel avait du mal à interpréter. Ce n'était pas de l'admiration, ni de l'ennui, mais quelque chose de plus nuancé — comme un médecin qui examine un patient et voit au-delà des symptômes apparents.\n\nQuand le jeune homme eut terminé, Sidi Mu'adh se tourna vers Nawfel avec un sourire.\n\n— Nawfel, dit-il. Cet homme possède un savoir immense. Il a mémorisé des milliers de pages de textes sacrés. Mais dis-moi : est-ce que le savoir, à lui seul, suffit pour être sage ?`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Euh... je ne sais pas, Sidi Mu'adh. Il en sait beaucoup, ça c'est sûr...",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Le savoir est comme une lampe, petit cœur. Une lampe puissante peut éclairer une grande salle. Mais si celui qui tient la lampe est aveugle, la lumière ne lui sert à rien. La différence entre le savoir et la sagesse, c'est la différence entre voir la lumière et être transformé par elle.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c3s2',
          background: 'zawiyah',
        },

        // --- t4c3s2: La histoire de l'arbre ---
        {
          id: 't4c3s2',
          chapterId: 't4c3',
          title: "L'histoire de l'arbre",
          narration: `Sidi Mu'adh prit une feuille de papier et un stylo, et dessina deux arbres. Le premier était immense, majestueux, ses branches chargées de feuilles d'un vert éclatant. Le deuxième était plus petit, plus modeste, mais ses racines dessinaient un réseau profond et complexe qui descendait loin sous la terre.\n\n— Regarde ces deux arbres, petit cœur, dit Sidi Mu'adh en posant le dessin devant Nawfel. Le premier arbre a beaucoup de feuilles — c'est le savoir. Chaque feuille est un fait, une information, un verset mémorisé, une date, un nom. L'arbre est impressionnant, n'est-ce pas ? Mais regarde ses racines — elles sont courtes, superficielles. Le premier vent fort pourrait le déraciner.\n\nNawfel regarda le dessin, puis le deuxième arbre.\n\n— Le deuxième arbre, continua Sidi Mu'adh, a moins de feuilles, mais ses racines descendent profondément dans la terre. C'est la Hikma — la sagesse. La sagesse, ce n'est pas accumuler beaucoup de connaissances. C'est laisser chaque connaissance que tu acquiers descendre profondément dans ton cœur, y prendre racine, et transformer qui tu es. Un verset du Coran que tu comprends et que tu vis vaut mieux que mille versets que tu as simplement mémorisés.\n\nNawfel regarda le jeune homme assis en face de lui, avec son livre épais et sa mémoire prodigieuse, et il comprit ce que Sidi Mu'adh essayait de lui dire. Le savoir sans la sagesse était comme un arbre sans racines — beau de l'extérieur, mais fragile au moindre vent.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La vraie sagesse, Nawfel, se reconnaît à ses fruits. L'arbre sage ne produit pas des feuilles éclatantes — il produit des fruits que les autres peuvent manger. La sagesse se mesure à ce que tu donnes, pas à ce que tu accumules.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Alors... Al-Mulhama, la Confuseuse, elle m'a attaqué avec le savoir ? Elle a utilisé mes propres connaissances contre moi ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement. Plus tu accumules sans enraciner, plus tu deviens vulnérable à la confusion. Le savoir sans la sagesse est la matière première de l'illusion. C'est pour cela que le Prophète ﷺ priait : « Ô Allah, demande-moi la sagesse. » Pas la connaissance — la sagesse.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c3s3',
          background: 'zawiyah',
          lesson: {
            title: 'La différence entre le savoir et la sagesse',
            content:
              "Le savoir ('Ilm) et la sagesse (Hikma) sont deux choses différentes. Le savoir est l'accumulation d'informations, tandis que la sagesse est la capacité de les comprendre, de les vivre et de les appliquer avec justesse. Le Prophète ﷺ disait : « Celui à qui Allah veut du bien, Il lui accorde la compréhension de la religion. »",
            quote: 'قُل رَّبِّ زِدْنِي عِلْمًا',
            source: 'Coran, Sourate Ta-Ha (20:114)',
          },
        },

        // --- t4c3s3: L'exercice du cœur ---
        {
          id: 't4c3s3',
          chapterId: 't4c3',
          title: "L'exercice du cœur",
          narration: `Sidi Mu'adh invita Nawfel à s'asseoir au centre de la zawiyah, sur le tapis de prière le plus ancien, celui qui avait été utilisé par des générations de chercheurs spirituels. Le vieil homme alluma une petite bougie et la plaça devant Nawfel.\n\n— Regarde cette flamme, petit cœur. Ne la décris pas avec des mots. Ne l'analyse pas. Ne te demande pas pourquoi elle brille ou de quoi elle est faite. Regarde-la simplement, avec ton cœur.\n\nNawfel fixa la flamme. Au début, son esprit vagabondait — il pensait à la leçon qu'il venait d'apprendre, au jeune savant avec son livre, à Al-Mulhama et à ses miroirs déformants. Mais lentement, à mesure qu'il continuait à regarder, les pensées se calmèrent. Non pas parce qu'il les repoussait, mais parce qu'elles perdaient leur importance naturelle, comme des feuilles mortes qui tombent d'un arbre en automne.\n\nEt alors, Nawfel vit quelque chose qu'il n'avait jamais vu. La flamme n'était pas simplement jaune et orange — elle contenait des couches de couleurs invisibles à l'œil nu, des mouvements si subtils qu'ils ressemblaient à une danse cosmique. Nawfel sentit que cette flamme vivait, qu'elle respirait, qu'elle communiquait quelque chose que les mots ne pouvaient pas capturer.\n\n— Tu vois ? murmura Sidi Mu'adh. Voilà la sagesse, petit cœur. Ce n'est pas quelque chose que tu peux apprendre dans un livre. C'est quelque chose que ton cœur découvre quand il arrête de chercher et commence à recevoir. La flamme ne t'enseigne rien — et pourtant, en la regardant, tu comprends plus que ce que mille livres pourraient t'apprendre.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "C'est comme... la flamme me parle sans utiliser de mots. Je la comprends avec mon cœur, pas avec ma tête.",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est cela, la Hikma. La sagesse est un langage silencieux entre ton cœur et la création d'Allah. Plus tu apprends à écouter ce silence, plus tu deviens sage. Et plus tu deviens sage, moins Al-Mulhama peut te confondre.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c3s4',
          background: 'zawiyah',
        },

        // --- t4c3s4: Al-Riya et Al-Mulhama réunis ---
        {
          id: 't4c3s4',
          chapterId: 't4c3',
          title: 'Al-Riya et Al-Mulhama réunis',
          narration: `Cette nuit-là, Nawfel fit un rêve qui allait changer sa compréhension de façon permanente. Il se retrouva dans un paysage qu'il n'avait jamais vu — un désert immense sous un ciel d'un noir absolu. Pas une étoile, pas un souffle de vent. Juste le sable froid sous ses pieds et le silence d'un monde suspendu entre deux respirations.\n\nAu centre de ce désert, deux silhouettes se dressaient. La première était Al-Riya — la créature aux ailes blanches qu'il avait déjà affrontée. Mais elle avait changé. Sa beauté éclatante s'était fanée, et sous les vêtements dorés, Nawfel pouvait voir ce qu'elle était vraiment : une forme mince, fragile, presque transparente, comme une feuille d'automne qui tient à un fil. Al-Riya le regardait avec des yeux qui n'étaient plus arrogants mais... suppliants.\n\nLa deuxième silhouette était Al-Mulhama — la Confuseuse. Sa brume s'était condensée en une forme presque humaine, une femme voilée dont les traits étaient flous mais dont les yeux — grands, brillants, tristes — brillaient d'une lueur qui ressemblait étrangement à de la peur.\n\nLes deux créatures se tenaient côte à côte, et Nawfel remarqua quelque chose de surprenant : elles ne se battaient pas. Elles ne l'attaquaient pas. Elles se tenaient là, immobiles, comme deux prisonnières qui attendent leur sentence.\n\n— Nous ne sommes pas tes ennemis, Nawfel, dit Al-Riya d'une voix faible, dépouillée de sa grandeur. Nous n'avons jamais été tes ennemis.\n\n— Nous sommes les parties de toi que tu n'as pas encore comprises, ajouta Al-Mulhama. Nous ne sommes pas venues te détruire. Nous sommes venues pour t'apprendre quelque chose.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Vous... vous n'êtes pas mes ennemies ? Mais vous m'avez piégé ! Vous m'avez fait douter de tout ! Vous m'avez enfermé dans des miroirs et des labyrinthes !",
              emotion: 'angry',
            },
            {
              characterId: 'sidimuadh',
              text: "Nawfel ! Écoute-les. Dans le cheminement spirituel, rien n'est tout noir ou tout blanc. Même les monstres de ton Nafs portent en eux une vérité que tu dois entendre.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 't4c3s4_c1',
              text: "Écouter ce que les deux créatures ont à dire",
              nextSceneId: 't4c3s5',
              isCorrect: true,
            },
            {
              id: 't4c3s4_c2',
              text: "Les repousser — ce sont des monstres, on ne les écoute pas",
              nextSceneId: 't4c3s5b',
            },
          ],
          background: 'inner_world',
        },

        // --- t4c3s5: La vérité des monstres ---
        {
          id: 't4c3s5',
          chapterId: 't4c3',
          title: 'La vérité des monstres',
          narration: `Nawfel s'approcha lentement, son cœur battant, mais sa curiosité plus forte que sa peur. Al-Riya parla la première.\n\n— Je suis le désir d'être vu, dit-elle. Et pourquoi ce désir existe-t-il, Nawfel ? Parce que deep dans ton cœur, tu as besoin d'amour, de reconnaissance, de validation. Ce n'est pas mal en soi — Allah Lui-même a placé ce besoin dans le cœur de chaque être humain. Mais je l'ai déformé. J'ai pris ce besoin légitime et je l'ai tourné vers les créatures au lieu du Créateur. Si tu avais compris cela plus tôt, tu aurais pu me transformer au lieu de me combattre.\n\nAl-Mulhama prit le relais.\n\n— Et moi, je suis le doute. Mais le doute, Nawfel, n'est pas le mal absolu. Le doute est le signe que tu cherches la vérité avec sincérité. Seul celui qui ne cherche pas ne doute jamais. J'ai pris ton doute légitime — ta quête honnête de la sincérité — et je l'ai transformé en spirale infernale. Mais à l'origine, Nawfel, ton doute était une prière. Une prière que tu ne savais pas nommer.\n\nNawfel sentit quelque chose se briser en lui — non pas de manière douloureuse, mais libératrice. Comme une coquille qui se fissure pour laisser éclore ce qu'elle contient. Il comprit que les monstres de son Nafs n'étaient pas des ennemis extérieurs à vaincre, mais des parties de lui-même à comprendre, à accepter, et finalement à transformer.\n\nSidi Mu'adh apparut à côté de lui, sa lumière blanche illuminant le désert.\n\n— Voilà la plus grande leçon, petit cœur. La Hikma ne consiste pas à détruire ses démons, mais à les comprendre. Car celui qui comprend son ennemi n'a plus besoin de le combattre — il n'a plus qu'à l'aimer. Et l'amour, Nawfel, est la plus puissante des transmutations.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La sagesse suprême, Nawfel, c'est de voir que rien dans ton cœur n'est fondamentalement mauvais. Tout peut être transformé par la lumière de la compréhension. Même Riya. Même la confusion. Même la colère. Tout est une énergie qui attend d'être dirigée vers la vérité.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Je... je ne savais pas. Je pensais que je devais vous détruire. Mais vous étiez des parties de moi qui souffraient parce que je ne vous comprenais pas.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't4c3s6',
          background: 'inner_world',
        },

        // --- t4c3s5b: Le refus d'écouter ---
        {
          id: 't4c3s5b',
          chapterId: 't4c3',
          title: "Le refus d'écouter",
          narration: `Nawfel recula d'un pas, les poings serrés. Ces créatures l'avaient piégé, trompé, torturé avec leurs miroirs et leurs labyrinthes. Pourquoi devrait-il les écouter maintenant ? Elles disaient n'être pas ses ennemies, mais c'était exactement ce qu'un ennemi dirait pour le désarmer !\n\n— Non ! s'écria Nawfel. Vous êtes des monstres ! Vous m'avez fait souffrir ! Je ne vais pas vous écouter !\n\nLe désert trembla. Le sable sous ses pieds se mit à vibrer, et Nawfel sentit la terre s'ouvrir sous lui. Al-Riya et Al-Mulhama reculèrent, leurs visages marqués d'une tristesse que Nawfel ne comprit pas encore.\n\nLa voix de Sidi Mu'adh résonna depuis loin, portée par un vent qui n'existait pas.\n\n— Nawfel ! Le refus d'écouter est la forme la plus subtile de l'orgueil ! Ce n'est pas parce que quelque chose te fait souffrir que tu dois le rejeter ! La douleur est un messager — elle t'apporte une vérité que le confort ne peut pas t'enseigner ! Ouvre ton cœur, petit cœur !\n\nNawfel hésita. Son instinct de combat le poussait à fuir, mais les mots de Sidi Mu'adh — toujours ces mots, toujours cette sagesse qui perçait ses armures les plus épaisses — le firent stopper. Il ferma les yeux, prit une grande inspiration, et fit le seul chose qu'il pouvait faire : il écoute.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "D'accord... d'accord, j'écoute. Mais si vous me mentez encore...",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 't4c3s6',
          background: 'inner_world',
        },

        // --- t4c3s6: La lumière grandit ---
        {
          id: 't4c3s6',
          chapterId: 't4c3',
          title: 'La lumière grandit',
          narration: `Au matin, Nawfel se réveilla avec une sensation de clarté qu'il n'avait jamais ressentie. C'était comme si quelqu'un avait nettoyé une fenêtre sale à l'intérieur de lui, laissant entrer une lumière qu'il ne soupçonnait même pas. Le monde avait la même couleur, les mêmes formes, les mêmes bruits — mais Nawfel le voyait différemment. Plus profondément. Plus vraiment.\n\nIl descendit à la cuisine où sa mère préparait le petit-déjeuner. Habituellement, il l'aidait par habitude, presque machinalement. Mais ce matin, quand il la regarda — vraiment la regarda — il vit quelque chose qu'il n'avait jamais remarqué : la façon dont ses mains bougeaient avec grâce et précision, la façon dont ses yeux brillaient d'une lueur silencieuse quand elle priait en travaillant, la façon dont chaque geste était une forme de dhikr, de rappel d'Allah, même sans mots.\n\n— Maman, dit Nawfel en s'approchant d'elle. Est-ce que tu sais que tu es en train de prier en ce moment même ?\n\nAziza se retourna, surprise.\n\n— Prier ? Non, mon chéri, je suis en train de préparer le petit-déjeuner.\n\n— Non, dit Nawfel doucement. Quand tu coupent les légumes comme ça, avec cette expression paisible, et que tu murmures doucement... c'est une prière. Tu pries avec tes mains, maman. Sidi Mu'adh dirait que c'est la meilleure forme de prière — celle qui ne se voit pas.\n\nAziza sourit — un sourire immense, illuminé — et elle serra Nawfel contre elle avec une tendresse qui contenait des larmes.`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Mon bébé... tu commences à voir avec les yeux du cœur. C'est le plus beau cadeau qu'Allah puisse faire à un être humain. Continue à regarder, Nawfel. Le monde est rempli de prières silencieuses que les gens ordinaires ne voient pas.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'kitchen',
          isEnding: true,
          lesson: {
            title: 'La vision du cœur (Basira)',
            content:
              "La Basira (البصيرة) est la perspicacité spirituelle — la capacité de voir au-delà des apparences et de percevoir la lumière divine dans les actes ordinaires. Quand le cœur est purifié, le monde entier devient un signe (ayat) d'Allah. Nawfel découvre que la sagesse ne se trouve pas seulement dans les livres, mais dans chaque geste de la vie quotidienne.",
            quote: 'أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَا',
            source: 'Coran, Sourate Al-Hajj (22:46)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 4 — Le Cœur Compatissant (القلب الرحيم)
    // ============================================================
    {
      id: 't4c4',
      tomeId: 'tome4',
      number: 4,
      title: 'Le Cœur Compatissant',
      titleAr: 'القلب الرحيم',
      scenes: [
        // --- t4c4s1: L'enfant du village ---
        {
          id: 't4c4s1',
          chapterId: 't4c4',
          title: "L'enfant du village",
          narration: `C'était un mardi matin, le jour du marché hebdomadaire de Chefchaouen. Les ruelles étaient plus animées que d'habitude, remplies de paysans venus des montagnes environnantes avec leurs ânes chargés de fruits, de légumes et de tissus colorés. Nawfel marchait avec Souhayl, comme ils le faisaient chaque semaine, quand il vit quelque chose qui lui noua le cœur.\n\nAu coin de la place du marché, un garçon de son âge était assis par terre, le dos contre un mur, ses genoux ramenés contre sa poitrine. Il ne mendiait pas — il était simplement là, les yeux fixés sur le sol, son visage maigre et sale encadré par des cheveux en désordre. Ses vêtements étaient usés jusqu'à la corde, et ses pieds nus portaient les cicatrices de kilomètres de marche sur des chemins de montagne.\n\nNawfel le reconnut. C'était Karim — le garçon du hameau voisin, celui que tout le village connaissait pour la mauvaise raison. Karim avait un problème : il volait. Pas grand-chose — un fruit ici, un morceau de pain là — mais suffisamment pour que tous les marchands du village le chassent à vue. Nawfel se souvenait que Karim lui avait volé sa gourde d'eau à l'école, il y a quelques mois, et que Souhayl avait dû intervenir pour la récupérer.\n\nMais ce que Nawfel vit ce matin n'était pas le petit voleur du souvenir. C'était un enfant épuisé, seul, et affamé. Et dans ses yeux, même de loin, Nawfel lut quelque chose qu'il n'avait jamais remarqué avant : non pas la malice, non pas la culpabilité, mais la honte. Une honte si profonde qu'elle semblait avoir consumed tout ce qu'il restait de fierté en ce petit garçon.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "C'est Karim. Ne t'approche pas, Nawfel. Il va te voler quelque chose. Viens, on a des courses à faire.",
              emotion: 'neutral',
            },
            {
              characterId: 'nawfel',
              text: "Souhayl... il a l'air malade. Il n'a même pas de chaussures. Est-ce qu'on ne pourrait pas...",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 't4c4s2',
          background: 'street',
        },

        // --- t4c4s2: Le dilemme ---
        {
          id: 't4c4s2',
          chapterId: 't4c4',
          title: 'Le dilemme',
          narration: `Souhayl tira Nawfel par le bras, mais Nawfel résista. Son cœur — ce cœur qui avait appris à écouter au-delà des apparences — battait d'une urgente compassion qu'il ne pouvait pas ignorer. D'un côté, il avait raison : Karim lui avait fait du mal. Il lui avait volé sa gourde, et la rumeur disait qu'il avait aussi volé le porte-monnaie de la vieille Fatima.\n\nMais de l'autre côté, Nawfel voyait quelque chose que ses yeux n'avaient jamais vu auparavant. Il voyait la souffrance derrière le comportement. Et il se rappela les mots de Sidi Mu'adh : « La Rahma — la miséricorde — ne consiste pas à excuser le mal, mais à voir la blessure qui se cache derrière. »\n\nNawfel dégagea doucement son bras de la main de Souhayl.\n\n— Je sais qu'il m'a fait du mal, grand frère. Mais regarde-le. Il a peut-être volé parce qu'il n'avait rien à manger. Ce n'est pas une excuse, mais c'est une raison. Et si quelqu'un ne lui tend pas la main, qui le fera ?\n\nSouhayl le regarda, partagé entre la prudence de l'aîné et le respect qu'il commençait à porter au discernement grandissant de son petit frère. Il soupira, puis hocha la tête.\n\n— D'accord. Mais reste prudent. Je serai juste derrière toi.\n\nNawfel s'approcha de Karim lentement, comme on s'approche d'un animal blessé. Le garçon leva les yeux — des yeux immenses, bruns, cernés de fatigue — et Nawfel vit clairement la peur dans son regard. Karim s'attendait à être chassé, insulté, peut-être battu. C'était ce que le monde lui avait appris à attendre des autres.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Salam Karim. Comment tu vas ? Tu as faim ?",
              emotion: 'neutral',
            },
            {
              characterId: 'karim',
              text: "Tu... tu me parles ? Personne ne me parle. Les gens me crient dessus ou me chassent. Pourquoi tu es gentil avec moi ?",
              emotion: 'scared',
            },
          ],
          choices: [
            {
              id: 't4c4s2_c1',
              text: "Partager son goûter avec Karim et lui parler avec douceur",
              nextSceneId: 't4c4s3a',
              isCorrect: true,
              badgeId: 'rahma',
            },
            {
              id: 't4c4s2_c2',
              text: "Lui donner de la nourriture mais rester distant — il a quand même volé",
              nextSceneId: 't4c4s3b',
            },
          ],
          background: 'street',
        },

        // --- t4c4s3a: Le pain partagé ---
        {
          id: 't4c4s3a',
          chapterId: 't4c4',
          title: 'Le pain partagé',
          narration: `Nawfel s'assit à côté de Karim sur le sol froid de la place du marché. Souhayl, prudent, resta debout quelques pas en arrière, observant la scène avec l'attention protectrice qui était la sienne. Nawfel sortit de son sac le msemen que sa mère avait préparé pour le goûter et le tendit à Karim.\n\nLe garçon le regarda avec des yeux incrédules, comme si Nawfel venait de lui offrir la lune. Ses mains tremblèrent quand il prit le pain — pas de faim, mais d'émotion. Et puis, d'un coup, les larmes coulèrent sur ses joues sales, laissant des sillons propres dans la poussière.\n\n— Personne... murmura Karim entre deux bouchées. Personne ne m'a jamais rien donné comme ça. Juste... comme ça. Sans me demander quelque chose en retour.\n\nNawfel sentit son propre cœur se serrer. Ce n'était pas de la pitié — la pitié est condescendante, elle regarde de haut en bas. Ce que Nawfel ressentait était différent, plus profond. C'était la reconnaissance que ce garçon assis à côté de lui n'était pas fondamentalement différent de lui. Ils étaient tous les deux des enfants du même Allah, nés sous le même ciel, marchant sur la même terre. La seule différence, c'était la chance — Karim était né dans la pauvreté, sans parents pour veiller sur lui, sans personne pour lui enseigner que voler était mal.\n\n— Tu sais, Karim, dit Nawfel doucement, je ne te juge pas. Mais je veux que tu saches quelque chose : tu es meilleur que ce que tu crois. Ce que tu fais, tu le fais parce que tu souffres. Et la souffrance, ce n'est pas qui tu es — c'est ce que tu traverses. Un jour, tu ne voleras plus. Et quand ce jour viendra, tu seras plus fort que n'importe qui, parce que tu auras survécu à quelque chose que la plupart des gens ne connaissent même pas.`,
          dialogues: [
            {
              characterId: 'karim',
              text: "Tu... tu crois que je peux changer ? Tout le monde dit que je suis un voleur, que je suis mauvais, que je ne changerai jamais.",
              emotion: 'sad',
            },
            {
              characterId: 'nawfel',
              text: "Je ne dis pas que ce que tu fais est bien. Je dis que tu n'es pas tes actes. Tu es une âme créée par Allah, et Allah ne crée rien de mauvais. Ta bonté est là, quelque part à l'intérieur de toi. Il suffit de la retrouver.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c4s4',
          background: 'street',
          earnedBadgeId: 'rahma',
          lesson: {
            title: 'La Rahma — La Miséricorde',
            content:
              "La Rahma (الرحمة) est la miséricorde — le cœur qui compatit à la souffrance des autres et qui répond avec bienveillance plutôt qu'avec jugement. Le Prophète ﷺ a dit : « Celui qui ne fait pas preuve de miséricorde envers les gens, Allah ne sera pas miséricordieux envers lui. » Nawfel découvre que la vraie miséricorde ne consiste pas à excuser le mal, mais à voir la blessure qui s'y cache.",
            quote: 'لَنْ تُؤْمِنُوا حَتَّى تَحَابُّوا',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- t4c4s3b: La distance prudente ---
        {
          id: 't4c4s3b',
          chapterId: 't4c4',
          title: 'La distance prudente',
          narration: `Nawfel tendit son msemen à Karim à bout de bras, sans s'approcher trop près. Il ne s'assit pas à côté de lui, et il ne regarda pas Karim dans les yeux. Son geste était généreux, mais son cœur était encore fermé — il nourrissait le corps de Karim, mais pas son âme.\n\nKarim prit le pain en silence. Il ne pleura pas, ne sourit pas. Il mangea mécaniquement, les yeux baissés, comme un animal qui a appris à ne jamais faire confiance. Quand il eut fini, il murmura un « Choukran » à voix basse et détourna la tête.\n\nNawfel resta là, debout, avec un sentiment étrange dans la poitrine. Il avait fait une bonne action — il avait donné à manger à quelqu'un qui avait faim — mais quelque chose manquait. Son geste était correct, mais il n'était pas transformant. Il avait nourri un estomac, mais pas un cœur.\n\nSouhayl, qui avait observé la scène, posa sa main sur l'épaule de Nawfel.\n\n— Tu as fait ce qu'il fallait, dit-il. Mais Nawfel... est-ce que tu sais pourquoi tu es resté debout ? Pourquoi tu ne t'es pas assis à côté de lui ?\n\nNawfel ouvrit la bouche pour répondre, puis se tut. Il savait pourquoi. Il avait eu peur — peur que les gens du marché le voient assis à côté du « voleur ». Peur de ce qu'ils penseraient de lui. Al-Riya, murmura une voix intérieure, toujours là, toujours vigilante, toujours prête à exploiter la moindre faille.\n\nNawfel ferma les yeux et murmura : « Allahoumma inni a'oudhou bika... » — la même prière qu'il avait apprise des semaines plus tôt, le refuge contre l'ostentation. Et cette fois, il la sentit résonner dans tout son être.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Nawfel, donner à manger c'est bien. Mais le faire avec le cœur, en regardant la personne dans les yeux, c'est mieux. La vraie générosité ne nourrit pas que le corps — elle nourrit la dignité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c4s4',
          background: 'street',
        },

        // --- t4c4s4: Le test de la miséricorde ---
        {
          id: 't4c4s4',
          chapterId: 't4c4',
          title: 'Le test de la miséricorde',
          narration: `Le lendemain, Nawfel retourné à la zawiyah et raconta sa rencontre avec Karim à Sidi Mu'adh. Le vieil homme l'écouta avec une attention particulière, et quand Nawfel eut terminé, il resta silencieux pendant un long moment, ses yeux brillants d'une lueur que Nawfel ne pouvait pas identifier — était-ce de la joie ? De la fierté ? De la reconnaissance ?\n\n— Nawfel, dit finalement Sidi Mu'adh, ce que tu as fait pour Karim est plus important que tu ne le crois. Mais je vais te poser une question difficile, et je veux que tu répondes avec la sincérité que tu as apprise à cultiver.\n\n— Si Karim avait volé ta gourde aujourd'hui, au lieu de dans le passé, aurais-tu été aussi miséricordieux envers lui ?\n\nLa question frappa Nawfel comme un coup de tonnerre dans un ciel serein. Il voulut répondre « oui » immédiatement, mais quelque chose en lui — la nouvelle voix de la sincérité qu'il avait apprise à écouter — l'en empêcha. Il réfléchit longuement, honnêtement, et la réponse qui vint fut douloureuse :\n\n— Non, dit-il. Je ne suis pas sûr. Si Karim m'avait fait du mal aujourd'hui, je ne serais peut-être pas allé vers lui avec le même cœur. Et ça... ça me fait mal de le dire, mais c'est la vérité.\n\nSidi Mu'adh sourit — un sourire immense, lumineux, comme celui d'un père qui voit son enfant faire le pas le plus important de sa vie.\n\n— Voilà, petit cœur. Voilà la plus grande victoire que tu aies jamais remportée. Dire la vérité sur ses propres limites, c'est le début de la véritable Rahma. Car on ne peut être miséricordieux envers les autres que dans la mesure où l'on est honnête envers soi-même. Le Prophète ﷺ a dit que la miséricorde a cent parts, et qu'Allah en a gardé quatre-vingt-dix-neuf pour Lui et n'en a laissé qu'une seule sur terre. Cette part unique se partage entre toutes les créatures — et toi, Nawfel, tu viens d'y participer.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... est-ce que je pourrai un jour être vraiment miséricordieux ? Même envers ceux qui me font du mal ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est un voyage, petit cœur. Pas une destination. Chaque acte de miséricorde que tu fais te rapproche d'Allah, car Allah est Ar-Rahman — le Tout Miséricordieux. Et le Prophète ﷺ a dit : « Soyez miséricordieux envers ceux qui sont sur terre, Celui qui est dans les cieux sera miséricordieux envers vous. »",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 't4c4s5',
          background: 'zawiyah',
          lesson: {
            title: 'La miséricorde envers autrui',
            content:
              "La Rahma (الرحمة) est l'un des plus grands attributs d'Allah, dont le nom Ar-Rahman est dérivé. Être miséricordieux envers les autres — y compris ceux qui nous font du mal — est le signe d'un cœur qui se rapproche d'Allah. La vraie miséricorde ne faiblit pas face à la difficulté — elle se renforce.",
            quote: 'ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
            source: 'Hadith — At-Tirmidhi',
          },
        },

        // --- t4c4s5: Le voile se déchire ---
        {
          id: 't4c4s5',
          chapterId: 't4c4',
          title: 'Le voile se déchire',
          narration: `Cette nuit-là, Nawfel fit son dernier rêve de ce tome. Il se retrouva dans le jardin magique qu'il aimait tant, mais ce jardin était différent de ceux de ses rêves précédents. Il était plus grand, plus profond, plus lumineux. Les arbres dorés s'élevaient jusqu'à un ciel d'un bleu infini, et les fleurs chantantes émettaient une mélodie si pure qu'elle semblait faire vibrer chaque particule de l'air.\n\nAu centre du jardin, là où se dressait habituellement la porte avec « قلب » gravé dessus, Nawfel vit quelque chose de nouveau. Deux voiles — deux rideaux de lumière fine — étaient tendus devant la porte. Le premier était tissé de fils dorés et brillants, et Nawfel le reconnut immédiatement : c'était le voile de Riya, l'ostentation, le désir d'être vu. Le deuxième était fait d'une brume translucide, tourbillonnante, instable — le voile de la confusion, le domaine d'Al-Mulhama.\n\nMais les voiles ne bloquaient plus la porte. Ils étaient là, oui, mais ils étaient translucides, et à travers eux, Nawfel pouvait voir la porte « قلب » briller d'une lumière plus intense que jamais. Il pouvait voir les voiles, les reconnaître, les nommer — et dans ce simple acte de reconnaissance, ils perdaient leur pouvoir.\n\nAl-Riya et Al-Mulhama apparurent de chaque côté des voiles. Elles avaient changé — leur apparence menaçante s'était adoucie, et Nawfel put voir ce qu'elles étaient vraiment : deux aspects de son Nafs qui, une fois compris et acceptés, n'étaient plus des ennemis mais des alliés.\n\n— Merci, murmura Nawfel. Merci de m'avoir appris ce que vous êtes. Désormais, je sais vous reconnaître, et quand vous reviendrez — car vous reviendrez toujours, vous faites partie de moi — je ne vous chasserai pas. Je vous regarderai avec les yeux de la sagesse, et ensemble, nous trouverons la lumière.\n\nLes deux créatures inclinèrent la tête, et les voiles se dissipèrent doucement, révélant la porte du cœur dans toute sa splendeur. Nawfel sentit quelque chose s'ouvrir en lui — non pas la porte elle-même, mais quelque chose d'encore plus intime, comme si son cœur avait grandi d'une taille et qu'il pouvait maintenant contenir plus de lumière, plus d'amour, plus de miséricorde qu'avant.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Tu as appris la plus difficile des leçons, Nawfel : que la sagesse n'est pas la destruction de l'ego, mais sa compréhension. Que la miséricorde n'est pas la faiblesse, mais la plus grande des forces. Et que la lumière, quand elle est véritable, ne détruit pas les ombres — elle les transforme.",
              emotion: 'wise',
            },
            {
              characterId: 'nawfel',
              text: "Sidi Mu'adh... qu'est-ce qui m'attend maintenant ? Qu'est-ce qu'il y a derrière cette porte ?",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce qui t'attend, petit cœur, est le voyage final. Le plus beau et le plus difficile de tous. Mais tu n'es pas encore prêt. Il te reste une dernière épreuve — la plus grande de toutes. Repose-toi maintenant. Prépare ton cœur. Car bientôt, tu entendras l'appel.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: 'Hikma et Rahma — Les deux piliers',
            content:
              "La Hikma (la sagesse) et la Rahma (la miséricorde) sont les deux piliers qui soutiennent le cœur du croyant. La sagesse sans miséricorde est froide et arrogante. La miséricorde sans sagesse est naïve et inefficace. Ensemble, elles forment l'équilibre parfait du cœur spiritualisé — un cœur qui comprend et qui aime, qui voit la vérité et qui la partage avec compassion.",
            quote: 'وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
            source: 'Coran, Sourate Al-Asr (103:3)',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Riya (الرياء)', 'Al-Mulhama (الملهَمة)'],
  spiritualLesson: 'Hikma & Rahma — La sagesse du cœur et la miséricorde envers autrui',
};
