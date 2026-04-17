import type { Tome } from '@/types/story';

export const tome3_souhayl: Tome = {
  id: 'souhayl_tome3',
  number: 3,
  title: "Les Étoiles de la Sagesse",
  titleAr: 'نجوم الحكمة',
  subtitle: 'Le voyage du Bon Caractère',
  description: "Dans ce troisième tome, Souhayl apprend les qualités du bon caractère (Akhlaq) à travers des rencontres extraordinaires. Quand Umar ibn Al-Khattab lui enseigne la justice absolue, quand Rabia Al-Adawiyya lui montre l'amour désintéressé d'Allah, et quand Salahuddin Al-Ayyubi lui révèle que la plus grande force est la miséricorde, Souhayl comprend que le savoir sans bon caractère est comme un arbre sans fruits.",
  theme: 'Al-Akhlaq — Le Bon Caractère et la Compassion',
  coverImage: '/images/souhayl-tome3-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Balance d'Umar (ميزان عمر)
    // ============================================================
    {
      id: 'st3c1',
      tomeId: 'souhayl_tome3',
      number: 1,
      title: 'La Balance d\'Umar',
      titleAr: 'ميزان عمر',
      scenes: [
        // --- st3c1s1: Le livre de la justice ---
        {
          id: 'st3c1s1',
          chapterId: 'st3c1',
          title: 'Le livre de la justice',
          narration: `L'odeur de l'encens flottait dans la bibliothèque souterraine comme un voile invisible, mêlée à celle du parchemin vieilli et du bois de cèdre. Souhayl descendit l'escalier de marbre blanc veiné de bleu, ses babouches ne faisant aucun bruit sur les marches — comme si les pierres elles-mêmes absorbaient le son pour préserver le silence sacré de ce lieu. Les lampes dorées s'allumèrent l'une après l'autre à son passage, et le murmure familier reprit, doux et constant : « اقرأ — Lis... اقرأ — Lis... »\n\nCela faisait plusieurs semaines que Souhayl venait régulièrement dans la bibliothèque cachée sous la Qarawiyyin. Chaque visite était une nouvelle aventure, chaque manuscrit un portail vers un monde oublié. Mais aujourd'hui, quelque chose était différent. Sidi Mu'adh n'était pas assis à sa place habituelle au centre de la salle circulaire. Il se tenait debout devant l'une des étagères les plus hautes, celle que Souhayl n'avait jamais osé approcher, et il tenait dans ses mains un livre d'une taille inhabituelle — grand, épais, relié en cuir brun foncé avec des fermoirs en argent oxydé.\n\nLe vieillard se retourna quand il entendit les pas de Souhayl. Ses yeux verts brillaient d'une lueur que le garçon n'avait pas vue auparavant — une lueur grave, comme celle d'une étoile qui brille plus fort avant l'aube. Son visage, normalement souriant et paisible, portait une expression de solennité qui fit ralentir Souhayl.\n\n— Souhayl, dit Sidi Mu'adh d'une voix plus basse que d'habitude, approche-toi. Aujourd'hui, nous allons parler de quelque chose de plus important que le savoir lui-même. Nous allons parler de ce qui donne au savoir sa valeur — le bon caractère. Al-Akhlaq.\n\nIl posa le grand livre sur la table basse en bois d'olivier et en ouvrit les fermoirs avec un cliquetis métallique qui résonna dans la salle comme un gong. Les pages s'ouvrirent lentement, révélant une calligraphie d'une beauté saisissante — des lettres arabes tracées à l'encre noire et dorée, ornées d'enluminures représentant une balance à plateaux, un symbole que Souhayl reconnut immédiatement.\n\n— La balance, murmura Souhayl. C'est le symbole de...\n\n— De la justice, compléta Sidi Mu'adh. De l'Adl — العدل. La justice est la colonne vertébrale du bon caractère, Souhayl. Sans justice, le savoir devient une arme au lieu d'être une lumière. Sans justice, la puissance devient oppression et la richesse devient cupidité. Le Prophète ﷺ a dit : « Les justes seront auprès d'Allah sur des pupitres de lumière, à la droite du Tout Miséricordieux — et Ses deux mains sont droites — ceux qui sont justes dans leurs jugements, dans leurs familles, et dans ce dont ils sont responsables. »\n\nSouhayl regarda les enluminures de la balance avec une fascination grandissante. Les deux plateaux étaient parfaitement équilibrés, et au centre, une petite flamme dorée vacillait, comme si le livre lui-même respirait.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "La recherche du savoir a une condition, Souhayl : le bon caractère. Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui a le meilleur caractère. » Aujourd'hui, tu vas rencontrer un homme dont la justice était si célèbre que même les montagnes tremblaient quand il parlait. Umar ibn Al-Khattab.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Umar ibn Al-Khattab ? Le deuxième calife ? Celui dont Baba nous raconte les histoires à la maison ? Celui qui avait tellement peur d'Allah qu'il pleurait pendant ses sermons ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Le même. L'homme que le Prophète ﷺ appelait « Al-Faruq » — celui qui distingue le vrai du faux. Prépare ton cœur, Souhayl, car le manuscrit va t'emmener dans le temps, à Médine, il y a plus de quatorze siècles. Tu vas le voir de tes propres yeux.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s2',
          background: 'inner_world',
        },

        // --- st3c1s2: La ville d'Umar ---
        {
          id: 'st3c1s2',
          chapterId: 'st3c1',
          title: 'La ville d\'Umar',
          narration: `Les pages du manuscrit tournèrent toutes seules, comme poussées par un vent invisible, et la lumière dorée de la bibliothèque se transforma. Les murs de pierre disparurent, remplacés par un ciel d'un bleu intense, sans la moindre nuage, sous lequel s'étendait une ville que Souhayl ne reconnaissait pas. Des maisons en briques crues, basses et blanchies à la chaux, s'alignaient le long de ruelles poussiéreuses bordées de palmiers dattiers dont les feuilles claquaient doucement dans la brise chaude. L'air sentait le santal, la figue mûre et la terre sèche après la pluie.\n\nSouhayl se trouvait dans une ruelle étroite de Médine, à l'époque du califat d'Umar ibn Al-Khattab. Il le savait sans que personne ne le lui dise — c'était écrit dans la lumière elle-même, dans la couleur du ciel, dans le son lointain de l'adhan qui montait depuis la Mosquée du Prophète ﷺ au bout de la rue. Les voix qui l'entouraient parlaient un arabe ancien, plus chantant que celui de Fès, et les vêtements des passants — djellaba simples, turbans blancs ou rayés, sandales en cuir — appartenaient à une époque révolue.\n\nEt puis il le vit.\n\nUn homme grand, imposant, marchait seul au milieu de la ruelle. Sa silhouette était celle d'un chêne centenaire — large d'épaules, droit comme un minaret, avec une barbe épaisse qui descendait sur sa poitrine et des yeux perçants qui semblaient voir à travers les murs. Il portait une tunique simple, rapiécée à plusieurs endroits, et ses pieds étaient nus dans la poussière — oui, nus, le calife de tous les musulmans marchait pieds nus dans les rues de sa propre ville. Souhayl sentit son cœur se serrer en le regardant. Cet homme portait le poids d'un empire sur ses épaules, et pourtant il n'avait pas de chaussures.\n\nL'homme s'arrêta devant une petite maison en ruine, au toit effondré. Il regarda les murs fissurés, la porte tombante, le sol jonché de pierres, et ses yeux — des yeux d'une dureté légendaire, des yeux qui avaient fait trembler des armées — se remplirent de larmes. Des larmes silencieuses qui coulèrent sur ses joues et tombèrent dans la poussière sans un bruit.\n\n— « Ô Umar, murmura l'homme à lui-même, tu as gouverné avec justice, mais as-tu bien pris soin de chaque brebis de ton troupeau ? Cette maison est en ruine, et son occupant dort peut-être sous les étoiles ce soir. Comment pourrais-tu rencontrer Allah le jour du Jugement alors qu'une seule de Ses créatures souffre sous ta responsabilité ? »\n\nSouhayl sentit chaque mot comme une flèche qui transperçait sa poitrine. Il fit un pas en avant, et l'homme tourna la tête vers lui. Ses yeux perçants se posèrent sur le garçon de neuf ans, et au lieu de surprise ou de colère, ils exprimèrent une douceur que Souhayl n'aurait jamais imaginée chez un homme d'une telle stature.\n\n— Qui es-tu, petit garçon, demanda Umar d'une voix grave mais chaleureuse, et comment es-tu arrivé ici ?\n\nSouhayl s'inclina respectueusement, comme son père lui avait appris de le faire devant les savants et les personnes âgées.\n\n— Je m'appelle Souhayl, dit-il. Je viens de Fès... du futur. Je suis ici pour apprendre de vous, Ô Commandeur des Croyants.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ô Commandeur des Croyants, on m'a dit que vous étiez le plus juste des hommes. Est-ce vrai ? Comment peut-on être juste tout le temps ?",
              emotion: 'neutral',
            },
            {
              characterId: 'umar',
              text: "Juste ? Moi, juste ? Souhayl, la justice appartient à Allah seul. Je ne suis qu'un serviteur qui essaie de ne pas être injuste. Tu veux savoir ce qu'est la justice ? Écoute bien. La justice, c'est de traiter les autres comme tu aimerais être traité — et cela vaut pour le plus puissant comme pour le plus faible. Je te le dis avec les mots du Prophète ﷺ : « Traitez vos serviteurs avec ce dont vous aimez être traités. »",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Mais c'est difficile, non ? Parfois, les autres sont méchants avec nous. Comment rester juste quand on a envie de crier ou de se venger ?",
              emotion: 'neutral',
            },
            {
              characterId: 'umar',
              text: "Difficile ? C'est la chose la plus difficile du monde, Souhayl. Plus difficile que de gouverner un empire. Plus difficile que de vaincre une armée. Car la vraie justice commence là où personne ne regarde — dans ton cœur, quand personne ne te juge. Le Prophète ﷺ disait : « adore Allah comme si tu Le voyais, et si tu ne Le vois pas, Lui te voit. » C'est vrai aussi pour la justice : sois juste comme si Allah te regardait. Parce qu'Il te regarde.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s3',
          background: 'inner_world',
          lesson: {
            title: "Al-'Adl — La justice absolue",
            content:
              "Umar ibn Al-Khattab, le deuxième calife de l'Islam, était surnommé « Al-Faruq » (celui qui distingue le vrai du faux) par le Prophète ﷺ. Il gouvernait un empire immense mais vivait dans la pauvreté, portant des vêtements rapiécés et marchant pieds nus. Sa justice était si célèbre qu'un jour, un vieillard juif comparaît devant lui avec un différend contre le calife lui-même — et Umar jugea en faveur du vieillard. En Islam, la justice (Al-'Adl) est un devoir absolu, même envers ses ennemis, même quand cela nous coûte.",
            quote: 'إن الله يأمركم أن تؤدوا الأمانات إلى أهلها وإذا حكمتم بين الناس أن تحكموا بالعدل',
            source: 'Coran, Sourate An-Nisa (4:58)',
          },
        },

        // --- st3c1s3: L'injustice à la madrasa ---
        {
          id: 'st3c1s3',
          chapterId: 'st3c1',
          title: "L'injustice à la madrasa",
          narration: `La lumière de Médine s'effaça comme une bougie soufflée par le vent, et Souhayl se retrouva assis sur son coussin dans la bibliothèque souterraine, le manuscrit ouvert sur ses genoux. Les lampes dorées brillaient de nouveau, le silence sacré régnait, et Sidi Mu'adh le regardait avec ses yeux verts, un sourire grave aux lèvres.\n\n— Tu as vu, dit le sage doucement. Tu as vu l'homme qui tremblait de peur devant Allah malgré tout son pouvoir. Souhayl, la justice n'est pas une théorie que l'on étudie dans un livre. C'est une pratique que l'on vit chaque jour, dans chaque situation, même les plus petites. Même à la madrasa. Même dans la cour de récréation.\n\nCes derniers mots frappèrent Souhayl comme un avertissement. Il remercia Sidi Mu'adh et remonta l'escalier vers la surface, la porte de fer se refermant derrière lui avec son clic familier.\n\nLe lendemain matin, Souhayl arriva à la madrasa Bou Inania avec le cœur lourd de ce qu'il avait appris. Les cours du matin se passèrent normalement — grammaire arabe, mémorisation du Coran, calcul. Mais c'est pendant la pause de midi que tout changea.\n\nSouhayl était assis dans la cour intérieure de la madrasa, un carreau de zellige bleu sous ses pieds, un sandwich au fromage à la main, quand il entendit un bruit désagréable venant du coin nord de la cour. Il leva les yeux et vit une scène qui lui noua l'estomac.\n\nKarim, un garçon de onze ans, le plus grand et le plus fort de la classe, se tenait debout devant un petit garçon de sept ans du nom de Yassine. Yassine était nouveau à la madrasa — un enfant timide aux cheveux roux et aux yeux brillants, qui venait d'un village de l'Atlas et qui portait encore des vêtements de montagne qui le faisaient se démarquer des autres. Karim avait arraché le sac de Yassine et en vidait le contenu par terre — des cahiers, des crayons, une gourde en métal, un petit Coran relié en cuir vert.\n\n— Regarde ça ! s'exclama Karim en tenant le petit Coran de Yassine au-dessus de sa tête, hors de portée. Le montagnard a apporté son Coran à l'école ! Tu sais lire, montagnard ? Tu sais même pas parler correctement !\n\nLes autres élèves riaient. Certains par vraie méchanceté, d'autres par lâcheté — cette lâcheté silencieuse de ceux qui rient avec le fort pour ne pas devenir la prochaine cible. Yassine se tenait debout, les yeux baissés, les épaules tremblantes, et ses lèvres bougeaient silencieusement — il récitait quelque chose, peut-être une dou'a, une prière, pour lui demander de la patience.\n\nSouhayl sentit la colère monter en lui comme de l'eau chaude dans une théière. Mais il sentit autre chose aussi — la peur. Karim était grand, fort, et ses amis le soutenaient. Si Souhayl intervenait, il risquait de devenir lui-même une cible. Sidi Mu'adh avait parlé de justice. Les mots d'Umar résonnaient encore dans sa tête : « La vraie justice commence là où personne ne regarde — dans ton cœur. » Mais c'est facile à dire quand on est le calife d'un empire. C'est moins facile quand on est un garçon de neuf ans face à un garçon de onze ans qui tient en l'air le Coran d'un enfant de sept ans.\n\nYassine leva les yeux vers Souhayl. Ses yeux brillants, pleins de larmes qu'il s'efforçait de retenir, le suppliaient silencieusement. Et dans ces yeux, Souhayl vit quelque chose qu'il n'oublierait jamais — la même expression que celle du vieillard juif devant Umar, celle de celui qui espère que la justice existe encore dans ce monde.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Allahoumma, guide-moi... Qu'est-ce que je dois faire ? Sidi Mu'adh m'a dit que la justice est le pilier du bon caractère...",
              emotion: 'neutral',
            },
          ],
          choices: [
            {
              id: 'st3c1s3_c1',
              text: "Intervenir et défendre Yassine — la justice ne peut pas attendre",
              nextSceneId: 'st3c1s4a',
              badgeId: 'adl',
              isCorrect: true,
            },
            {
              id: 'st3c1s3_c2',
              text: "Appeler un professeur au lieu de s'interposer directement",
              nextSceneId: 'st3c1s4b',
            },
          ],
          background: 'classroom',
        },

        // --- st3c1s4a: La balance du courage ---
        {
          id: 'st3c1s4a',
          chapterId: 'st3c1',
          title: 'La balance du courage',
          narration: `Souhayl se leva. Ses jambes tremblaient un peu — il ne pouvait pas le cacher — mais ses pieds se mouvirent malgré la peur, portés par quelque chose de plus fort que la lâcheté, quelque chose qu'Umar ibn Al-Khattab aurait reconnu immédiatement : la certitude intime que rester assis face à l'injustice est un péché plus grand que de se faire gronder.\n\nIl traversa la cour à grandes enjambées, son cœur battant si fort qu'il l'entendait dans ses oreilles comme le tambour d'un tambourin berbère. Karim le vit arriver et fronça les sourcils.\n\n— Qu'est-ce que tu veux, Souhayl ? C'est pas ton problème.\n\nSouhayl s'arrêta devant Karim et leva les yeux vers lui — il était plus petit, il le savait, mais les paroles de Sidi Mu'adh lui donnaient une force qui ne mesurait pas en centimètres.\n\n— Si tu ne rends pas son Coran à Yassine tout de suite, dit Souhayl d'une voix qu'il força d'être stable, je vais prévenir mon père. Et si tu ne sais pas qui est mon père, il s'appelle Mehdi Benali et il est professeur ici. Il ne tolère pas qu'on maltraite les élèves.\n\nLes mots sortirent de sa bouche avec une netteté qui surprit Souhayl lui-même. Il n'avait pas crié, il n'avait pas insulté — il avait simplement énoncé les faits avec la clarté d'une sentence. Karim hésita. Il regarda Souhayl, puis les amis de Souhayl qui commençaient à se lever, puis son propre groupe qui commençait à se disperser, et il comprit que la dynamique avait changé.\n\n— Tiens, grommela-t-il en jetant le Coran de Yassine à terre. Prends ton livre, montagnard. Et la prochaine fois, reste dans ton village.\n\nKarim s'éloigna avec ses amis, et Souhayl s'agenouilla pour ramasser le Coran de Yassine. Il le dépoussière délicatement, le porta à sa poitrine un instant — le Coran mérite le respect, même quand il tombe — et le tendit à Yassine.\n\nLe petit garçon le prit avec des mains qui tremblaient encore, et il leva ses yeux brillants vers Souhayl.\n\n— Choukran, murmura-t-il d'une voix à peine audible. Choukran bzaf.\n\nSouhayl posa sa main sur l'épaule de Yassine et lui sourit.\n\n— Tu es le bienvenu ici, Yassine. Si quelqu'un te dérange encore, viens me voir. On n'est pas nombreux à s'asseoir seuls pendant la pause — on pourrait s'asseoir ensemble.\n\nCe soir-là, en rentrant chez lui, Souhayl monta à la bibliothèque et trouva Sidi Mu'adh qui l'attendait. Le sage avait un sourire que Souhayl n'avait encore jamais vu — un sourire qui ressemblait à celui d'un père voyant son fils accomplir son premier acte de bravoure.\n\n— Tu as été juste aujourd'hui, Souhayl, dit Sidi Mu'adh. Umar aurait été fier de toi. Mais souviens-toi : la justice, ce n'est pas seulement défendre les faibles. C'est aussi être juste envers ceux qui font le mal — les corriger avec sagesse, pas avec colère. Tu n'as pas insulté Karim, tu n'as pas crié. Tu as utilisé la raison et le calme. C'est cela, la vraie justice — ferme mais douce, courageuse mais sage.\n\nSouhayl sentit une chaleur se répandre dans sa poitrine, comme si une petite étoile venait de s'allumer dans son cœur. Et sur la page ouverte du manuscrit posé devant lui, l'enluminure de la balance commença à briller d'une lumière dorée, si intense que Souhayl dut fermer les yeux un instant. Quand il les rouvrit, une petite broche en forme de balance avait apparu sur la page — fine, délicate, forgée dans un métal qui ressemblait à de l'or et de l'argent mêlés.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "J'avais peur, Sidi Mu'adh. J'avais vraiment peur de Karim. Mais quand j'ai vu les yeux de Yassine, j'ai compris que je ne pouvais pas rester assis. Les mots d'Umar me sont revenus : « La justice commence là où personne ne regarde. »",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu as compris la leçon la plus difficile de toutes, Souhayl. Le Prophète ﷺ a dit : « Quiconque voit une injustice, qu'il la corrige par sa main. S'il n'y arrive pas, que ce soit par sa langue. S'il n'y arrive pas, que ce soit par son cœur — et c'est là le degré le plus faible de la foi. » Tu as agi par ta main et ta langue aujourd'hui. Allah est satisfait de toi.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Et Karim ? Je ne veux pas qu'il soit puni cruellement. Il a fait du mal, mais... il est quand même un enfant comme moi.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Voilà la justice dans toute sa noblesse, Souhayl. Tu défends la victime ET tu penses au coupable avec équité. Umar disait : « Ne hais pas la punition, mais hais le crime. » C'est cela, Al-'Adl — pondérer chaque chose avec la balance de la sagesse.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'adl',
          lesson: {
            title: "Al-'Adl — La justice dans la vie quotidienne",
            content:
              "Souhayl a appris que la justice (Al-'Adl — العدل) n'est pas seulement une affaire de tribunaux et de lois — c'est un devoir quotidien, même pour les enfants. Le Prophète ﷺ a enseigné : « Quiconque voit une injustice, qu'il la corrige par sa main. S'il n'y arrive pas, que ce soit par sa langue. S'il n'y arrive pas, que ce soit par son cœur. » Souhayl a choisi d'intervenir pour défendre un camarade plus faible, avec courage mais sans violence, prouvant que la vraie justice est ferme et douce à la fois.",
            quote: 'من رأى منكم منكرا فليغيره بيده فإن لم يستطع فبلسانه فإن لم يستطع فبقلبه وذلك أضعف الإيمان',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- st3c1s4b: Le silence qui pèse ---
        {
          id: 'st3c1s4b',
          chapterId: 'st3c1',
          title: 'Le silence qui pèse',
          narration: `Souhayl resta assis sur son carreau de zellige, le sandwich au fromage à moitié mangé dans sa main, et il ne bougea pas. Il regarda la scène avec des yeux grands ouverts et un cœur qui cognait contre ses côtes comme un oiseau dans une cage trop étroite. Tout son être voulait se lever, traverser la cour, arracher le Coran des mains de Karim et le rendre à Yassine. Mais ses jambes ne bougeaient pas.\n\nLa peur, cette peur sourde et paralysante, le tenait cloué au sol. Et puis, se dit-il, ce n'est pas mon problème. Yassine n'est pas mon frère, pas mon ami — je le connais à peine. Si j'interviens, Karim va s'en prendre à moi aussi. Peut-être que je devrais aller chercher un professeur, oui, c'est plus raisonnable...\n\nIl se leva, posa son sandwich, et marcha vers la porte du bâtiment des professeurs. Mais avant qu'il ne l'atteigne, il s'arrêta. Les mots d'Umar résonnèrent dans sa tête comme un écho : « La vraie justice commence là où personne ne regarde — dans ton cœur, quand personne ne te juge. »\n\nEt là, tout de suite, personne ne le jugeait. Personne ne le regardait. C'était le moment de vérité. Et Souhayl comprit, avec une clarté soudaine et douloureuse, que chercher un professeur n'était pas un acte de justice — c'était un acte de lâcheté déguisée en prudence. Il ne cherchait pas de l'aide pour Yassine. Il cherchait une excuse pour ne pas agir lui-même.\n\nIl se retourna. Yassine était accroupi par terre, ramassant ses affaires éparses, ses petites mains tremblantes. Karim et ses amis s'étaient déjà éloignés, riant entre eux. Les autres élèves avaient détourné le regard, occupant leurs esprits avec des choses sans importance pour ne pas voir la souffrance de leur camarade.\n\nSouhayl sentit une honte brûlante lui monter aux joues. Cette honte, il la reconnaissait — c'était la même honte qu'il avait ressentie dans la bibliothèque quand Sidi Mu'adh lui avait dit que le savoir sans bon caractère est comme un arbre sans fruits. Il venait de voir un arbre sans fruits, et cet arbre, c'était lui.\n\nNon. Pas encore. Pas tant qu'il pouvait agir.\n\nSouhayl traversa la cour à grandes enjambées et s'agenouilla à côté de Yassine. Il commença à ramasser les affaires du petit garçon — les cahiers, les crayons, la gourde — avec des gestes rapides et précis. Yassine le regarda avec des yeux écarquillés de surprise.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Pardon, Yassine. J'aurais dû intervenir plus tôt. Ça ne se reproduira plus. Viens, on va ranger tes affaires ensemble.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'st3c1s4a',
          background: 'classroom',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — L'Amour de Rabia (حب رابعة)
    // ============================================================
    {
      id: 'st3c2',
      tomeId: 'souhayl_tome3',
      number: 2,
      title: "L'Amour de Rabia",
      titleAr: 'حب رابعة',
      scenes: [
        // --- st3c2s1: La lampe solitaire ---
        {
          id: 'st3c2s1',
          chapterId: 'st3c2',
          title: 'La lampe solitaire',
          narration: `Trois jours s'étaient écoulés depuis l'incident à la madrasa, et Souhayl portait en lui une fierté qu'il n'arrivait pas tout à fait à maîtriser. Il avait défendu Yassine — ça, c'était bien. Mais depuis, chaque fois que quelqu'un à la madrasa mentionnait son geste, une petite flamme de satisfaction s'allumait dans sa poitrine et il ne faisait rien pour l'éteindre. Au contraire, il la nourrissait. Il se tenait un peu plus droit quand les professeurs le regardaient. Il souriait avec un air de modestie qui n'était pas vraiment de la modestie. Et quand son père lui avait dit, au dîner, « J'ai entendu dire que tu avais été courageux à la madrasa, mon fils », Souhayl avait répondu avec un léger haussement d'épaules qui voulait dire : « Ce n'est rien, vraiment » — mais qui, en réalité, espérait que son père insiste, qu'il dise encore combien il était fier de lui.\n\nQuand Souhayl descendit dans la bibliothèque ce jour-là, il trouva Sidi Mu'adh dans un état inhabituel. Le vieillard ne lisait pas. Il ne priait pas. Il était assis au centre de la salle circulaire, les yeux fermés, les mains posées ouvertes sur ses genoux, et il écoutait. Autour de lui, les lampes dorées brillaient d'une lumière plus douce que d'habitude, presque rosée, comme si la bibliothèque elle-même respirait d'une émotion que Souhayl ne comprenait pas encore.\n\nSouhayl s'assit en tailleur devant lui et attendit. Le silence dura longtemps — si longtemps que le garçon commença à entendre les sons invisibles de la bibliothèque : le souffle du vent dans des couloirs souterrains qu'il n'avait jamais explorés, le goutte-à-goutte lointain d'une source d'eau, le frémissement imperceptible des pages que l'air faisait tourner délicatement sur les étagères les plus hautes.\n\nQuand Sidi Mu'adh ouvrit les yeux, ses prunelles vertes étaient humides.\n\n— Souhayl, dit-il d'une voix douce comme du soie, je dois te parler de quelque chose de très important. Plus important peut-être que tout ce que je t'ai enseigné jusqu'ici. Il y a un piège, mon enfant, un piège redoutable qui guette tous ceux qui font le bien. C'est le piège de l'orgueil caché sous les dehors de la vertu.\n\nSouhayl sentit quelque chose se serrer dans sa poitrine, comme si Sidi Mu'adh avait lu dans ses pensées les plus secrètes.\n\n— Quand tu as défendu Yassine, dit le sage, tu as fait une chose admirable. Mais dis-moi, Souhayl — quand tu y repenses, qu'est-ce qui te rend le plus heureux ? Le fait que Yassine ait récupéré son Coran ? Ou le fait que les autres t'aient vu le défendre ?\n\nLa question traversa Souhayl comme une flèche de glace. Il ouvrit la bouche pour répondre, puis la referma. Il voulait dire « le fait que Yassine ait récupéré son Coran », mais le goût amer du mensonge lui brûla les lèvres avant même qu'il ne prononce un mot. Il baissa les yeux, et un silence de vérité s'installa entre lui et Sidi Mu'adh.\n\n— Ne te juge pas trop durement, dit le sage en posant sa main ridée sur l'épaule de Souhayl. Ce piège est le plus ancien et le plus subtil de tous. Même les plus grands savants y sont tombés. C'est pour cela qu'Allah a envoyé dans notre tradition une femme dont toute la vie a été une leçon sur ce piège — et sur la manière de le désamorcer. Elle s'appelait Rabia Al-Adawiyya. Et aujourd'hui, tu vas la rencontrer.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Rabia Al-Adawiyya ? C'est une femme ? Une savante ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Bien plus qu'une savante, Souhayl. Une sainte. Une femme qui a consacré sa vie entière à aimer Allah avec une pureté que le monde n'avait jamais vue. Elle est née à Bassora, en Irak, il y a plus de douze siècles, et elle a vécu dans une pauvreté si totale qu'elle ne possédait rien — littéralement rien — et pourtant, elle était la personne la plus riche du monde, car son cœur était rempli d'un trésor que ni les rois ni les armées ne peuvent conquérir : l'amour sincère d'Allah. L'Ikhlas — الإخلاص.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "L'Ikhlas... c'est la sincérité, non ? Baba m'a appris ce mot. Mais je ne comprends pas comment on peut aimer uniquement pour Allah. Quand je fais une bonne action, je suis content que les gens le voient... Est-ce mal ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce n'est pas « mal » dans le sens de méchant, Souhayl. C'est humain. Mais l'Islam nous demande d'aller plus loin que l'humain — de tendre vers le divin. Le Prophète ﷺ a dit : « Certes, Allah ne regarde ni vos corps ni vos apparences, mais Il regarde vos cœurs et vos actions. » Le cœur, Souhayl, c'est le vrai lieu du jugement. Ouvre le manuscrit. Va voir Rabia. Et écoute avec ton cœur, pas seulement avec tes oreilles.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c2s2',
          background: 'inner_world',
        },

        // --- st3c2s2: La femme au désert ---
        {
          id: 'st3c2s2',
          chapterId: 'st3c2',
          title: 'La femme au désert',
          narration: `Les pages du manuscrit tournèrent, et cette fois, la lumière de la bibliothèque ne se transforma pas en une ville — elle se transforma en un désert. Un désert immense, infini, une mer de sable doré qui s'étendait dans toutes les directions jusqu'à l'horizon, sous un ciel d'un bleu si pur qu'il semblait peint à la main. Le soleil n'était pas cruel — il était doux, comme une lampe géante suspendue au-dessus du monde, et sa lumière donnait au sable une teinte ambrée qui faisait penser à du miel fondu.\n\nSouhayl se tenait au sommet d'une petite dune, et devant lui, à quelques mètres, une femme était assise sur le sable, seule. Elle portait une robe blanche simple et un voile qui couvrait ses cheveux mais laissait son visage découvert — un visage fin, osseux, brûlé par le soleil mais illuminé par une paix que Souhayl n'avait jamais vue sur aucun visage humain. Ses yeux, d'un noir profond comme l'encre de Chine, brillaient d'une lumière intérieure qui n'avait rien à voir avec le soleil — c'était la lumière de quelqu'un qui prie sans cesse, dont chaque respiration est une invocation, dont chaque battement de cœur est un acte d'adoration.\n\nAutour d'elle, quatre choses seulement : une cruche en terre cuite cassée, un tapis de prière en lambeaux, un tas de cailloux et... une lampe à huile. Une lampe à huile vide, sans mèche, sans flamme, qui semblait n'avoir jamais servi.\n\nSouhayl descendit la dune avec précaution, le sable chaud s'enfonçant sous ses babouches à chaque pas. La femme leva les yeux vers lui, et son regard — doux, pénétrant, immensément tendre — lui coupa le souffle. C'était un regard qui voyait tout, qui comprenait tout, qui pardonnait tout. Un regard de mère, de grand-mère, de sage, de sainte — tout cela à la fois.\n\n— Tu es Souhayl, dit-elle d'une voix claire comme l'eau d'un oued après la pluie. Je t'attendais. Assieds-toi avec moi. Le désert a beaucoup à t'apprendre.\n\nSouhayl s'assit sur le sable chaud, en face de la femme, et il la regarda. Il regarda la cruche cassée, le tapis en lambeaux, les cailloux, la lampe vide. Et il comprit que cette femme vivait dans un dénuement absolu — plus pauvre que le plus pauvre des mendiants de la médina de Fès.\n\n— Rabia... murmura-t-il. Pourquoi avez-vous une lampe vide ?\n\nLa femme sourit, et son sourire ressembla à un lever de soleil sur le désert.\n\n— Cette lampe, Souhayl, je l'ai allumée un jour pour qu'elle brûle dans la nuit. Mais ce n'est pas pour moi. C'est pour éteindre le feu de l'enfer, afin qu'il ne fasse jamais de mal aux créatures d'Allah. Et cette cruche cassée, je l'ai brisée moi-même, parce que je ne veux boire l'eau du Paradis que pour Allah, pas pour apaiser ma soif. Tu comprends ?\n\nSouhayl fronça les sourcils, essayant de comprendre.\n\n— Vous n'avez pas soif ? Vous ne voulez pas aller au Paradis ?\n\n— Bien sûr que j'ai soif, dit Rabia en riant doucement. Bien sûr que je veux le Paradis. Mais je ne veux pas aimer le Paradis pour ses rivières et ses jardins, Souhayl. Je veux aimer le Paradis parce qu'Allah y est. Et je ne veux pas craindre l'enfer pour ses flammes, mais parce que l'enfer est l'endroit où Allah n'est pas satisfait de moi. La question n'est pas : « Qu'est-ce que je peux obtenir d'Allah ? » La question est : « Qu'est-ce qu'Allah mérite de ma part ? »\n\nLes mots de Rabia tombèrent dans le cœur de Souhayl comme des pierres dans un puits profond, et ils résonnèrent longtemps après qu'elle eut fini de parler. Il pensa à sa fierté quand il avait défendu Yassine. Il pensa au sourire satisfait qu'il n'avait pas pu cacher quand son père l'avait complimenté. Il pensa au petit plaisir secret qu'il ressentait chaque fois que quelqu'un disait « Souhayl est courageux » ou « Souhayl est un bon garçon ».\n\nEt il comprit, avec une douleur qui était aussi une libération, que toutes ces choses — la fierté, le plaisir d'être vu, le désir de reconnaissance — étaient comme du sable mélangé à de l'or pur. Elles gâchaient la beauté de ses bonnes actions en y ajoutant une intention impure. L'Ikhlas — la sincérité — c'était le tamis qui séparait l'or du sable.`,
          dialogues: [
            {
              characterId: 'rabia',
              text: "Souhayl, je vais te raconter une histoire. Un jour, on m'a offert un sac rempli de dinars d'or. Une fortune. Je l'ai posé à côté de moi et j'ai continué à prier. On m'a demandé : « Rabia, ne veux-tu pas prendre cet or ? » J'ai répondu : « Celui qui possède Allah ne manque de rien. Et celui à qui Allah manque, que peut lui donner l'or ? »",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Vous n'avez pas pris l'or ? Même pas pour manger, pour vous loger ?",
              emotion: 'surprised',
            },
            {
              characterId: 'rabia',
              text: "Mon enfant, le Prophète ﷺ a dit : « La richesse n'est pas dans l'abondance des biens, mais la richesse véritable est celle du cœur. » J'ai choisi la richesse du cœur, Souhayl. C'est la seule qui ne se perd jamais. Et toi, quel type de richesse cherches-tu ?",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Je... je ne sais pas. Parfois, quand je fais une bonne action, je suis content que les gens le voient. Est-ce que c'est mal ?",
              emotion: 'sad',
            },
            {
              characterId: 'rabia',
              text: "Ce n'est pas mal, c'est humain. Mais l'Ikhlas, la sincérité pure, c'est quand tu fais une bonne action et que tu es le seul à le savoir — et que tu en es content uniquement parce qu'Allah le sait. Rabia Al-Adawiyya ne priait pas pour que les gens disent : « Qu'elle est pieuse ! » Rabia priait parce qu'elle aimait Allah comme on aime l'air qu'on respire — parce qu'on ne peut pas vivre sans Lui. C'est cela, Souhayl, aimer pour Lui seul.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c2s3',
          background: 'inner_world',
          lesson: {
            title: "Al-Ikhlas — L'amour désintéressé d'Allah",
            content:
              "Rabia Al-Adawiyya (717-801) est l'une des plus grandes figures spirituelles de l'Islam. Née à Bassora, elle vécut dans une pauvreté absolue mais possédait la richesse la plus précieuse qui soit : un cœur rempli de l'amour sincère d'Allah. L'Ikhlas (الإخلاص) signifie faire chaque action uniquement pour la face d'Allah, sans chercher la reconnaissance des gens. Rabia enseignait qu'on ne doit pas aimer le Paradis pour ses délices, ni craindre l'Enfer pour ses tourments — on doit aimer Allah parce qu'Il est digne d'être aimé.",
            quote: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st3c2s3: Le miroir du cœur ---
        {
          id: 'st3c2s3',
          chapterId: 'st3c2',
          title: 'Le miroir du cœur',
          narration: `Souhayl remonta à la surface avec le cœur lourd et l'esprit troublé. Les paroles de Rabia résonnaient en lui comme le chant du muezzin dans une vallée — elles rebondissaient sur les parois de sa conscience et revenaient à lui, transformées, amplifiées, plus claires et plus douloureuses à chaque écho.\n\nIl rentra chez lui dans l'après-midi. Sa mère, Aziza, était dans le salon, assise sur un coussin brodé, en train de réciter le Coran. Le son de sa voix, douce et mélodieuse, emplissait la maison comme de l'encens invisible. Wassim jouait avec ses petites voitures sur le tapis, faisant des bruits de moteur avec sa bouche, et Nawfel dessinait dans un cahier, concentré, la langue coincée entre ses lèvres.\n\nSouhayl s'assit dans un coin du salon et prit un livre — n'importe quel livre, juste pour avoir quelque chose entre les mains. Mais au lieu de lire, il réfléchissait. Il pensait à toutes les fois où il avait fait de bonnes choses avec la mauvaise intention.\n\nIl se souvint de la fois où il avait aidé un vieillard à traverser la rue — mais il l'avait fait parce que son père le regardait depuis l'autre côté de la rue. Il se souvint de la fois où il avait donné un de ses sandwichs à un enfant pauvre — mais il avait regardé autour de lui pour s'assurer que quelqu'un avait vu son geste. Il se souvint de ses prières — parfois précipitées, parfois faites avec attention, mais toujours avec, au fond de lui, un petit calcul : « Si je prie bien, Baba sera content. Si je prie bien, Sidi Mu'adh sera fier. Si je prie bien, les anges écriront mon nom dans le livre des bons. »\n\nEt soudain, il vit la vérité avec une clarté aveuglante. Chaque bonne action qu'il avait faite depuis des mois était contaminée par le même poison : le désir d'être vu, d'être reconnu, d'être aimé par les créatures au lieu d'être aimé par le Créateur. Même son geste pour Yassine — même ça — portait la tache invisible de l'orgueil.\n\nAziza finit sa récitation et leva les yeux vers son fils. Elle le connaissait trop bien pour ne pas voir le trouble sur son visage.\n\n— Souhayl, qu'est-ce qui ne va pas, mon cœur ? Tu as l'air de porter un poids trop lourd pour tes épaules.\n\nSouhayl hésita. Puis il parla. Il parla de tout — de sa fierté, de ses calculs, du plaisir qu'il ressentait quand on le complimentait, et du malaise profond que les paroles de Rabia avaient éveillé en lui. Il parla avec une honnêteté qu'il ne s'était jamais connue, une honnêteté brute et douloureuse qui lui arrachait les mots de la gorge comme on arrache des épines d'une blessure.\n\nAziza l'écouta sans l'interrompre. Quand il eut fini, elle sourit — un sourire qui n'avait rien de la satisfaction ou du soulagement, mais qui était fait entièrement de tendresse.\n\n— Mon enfant, dit-elle, le fait même que tu ressentes ce malaise est la preuve qu'Allah t'aime. Celui qui est aveuglé par l'orgueil ne se pose jamais cette question. C'est en réalisant son imperfection qu'on commence le chemin de la sincérité.\n\nSouhayl regarda sa mère et sentit quelque chose changer en lui. Il avait le choix — continuer à nourrir sa fierté, ou commencer le long et patient travail de la purification du cœur. Les mots de Rabia flottaient dans son esprit comme des étoiles : « Celui qui possède Allah ne manque de rien. »`,
          dialogues: [
            {
              characterId: 'aziza',
              text: "Souhayl, le Prophète ﷺ a dit : « Quiconque montre ses bonnes actions, Allah le montrera à qui il veut, et quiconque les cache, Allah les lui cachera. » La sincérité, c'est un jardin secret entre toi et Allah. Personne d'autre n'a besoin de le voir.",
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: "Maman ! Maman ! Regarde ma tour de Legos ! Elle est la plus haute de toutes ! Personne ne fait des tours aussi hautes que moi !",
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: "Masha'Allah, mon petit Wassim. Ta tour est très belle. Mais tu sais ce qui est encore plus beau que la tour la plus haute ? Le cœur le plus humble. N'oublie jamais ça.",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Maman... comment tu fais pour être sincère ? Toi, quand tu pries ou quand tu fais le bien, est-ce que tu penses aussi à ce que les autres pensent de toi ?",
              emotion: 'neutral',
            },
            {
              characterId: 'aziza',
              text: "Bien sûr que j'y pense, Souhayl. Je suis humaine comme toi. Mais quand ce sentiment vient, je fais une dou'a, une prière secrète : « Ô Allah, purifie mon cœur. Rends mes intentions pures, uniquement pour Toi. » Et je continue. Car la sincérité n'est pas un état qu'on atteint une fois pour toutes — c'est une bataille quotidienne, un combat de chaque instant, et Allah récompense celui qui se bat, même s'il trébule.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st3c2s3_c1',
              text: "Faire une prière secrète pour purifier son intention — commencer le chemin de l'Ikhlas",
              nextSceneId: 'st3c2s4a',
              badgeId: 'ikhlas',
              isCorrect: true,
            },
            {
              id: 'st3c2s3_c2',
              text: "Se dire que ce n'est pas si grave et qu'on ne peut pas être parfait",
              nextSceneId: 'st3c2s4b',
            },
          ],
          background: 'home',
        },

        // --- st3c2s4a: Le cœur purifié ---
        {
          id: 'st3c2s4a',
          chapterId: 'st3c2',
          title: 'Le cœur purifié',
          narration: `Souhayl se leva, quitta le salon, et monta à sa chambre. La petite pièce était baignée de la lumière dorée du soleil couchant qui entrait par la fenêtre en bois sculpté, dessinant des ombres arabesques sur le mur en tadelakt ocre. Son lit, recouvert d'un couvre-lit brodé de motifs géométriques, était contre le mur est, et sa table de travail, encombrée de cahiers, de crayons et de livres, était contre le mur nord.\n\nIl ferma la porte. Ensuite, il fit quelque chose qu'il n'avait jamais fait de sa propre initiative — il déroula son tapis de prière, l'orienta soigneusement vers la qibla, et s'agenouilla. Pas pour la prière obligatoire — celle-là, il l'avait déjà faite. Non, il s'agenouilla pour une prière secrète, une prière que personne d'autre que lui et Allah ne connaîtrait jamais.\n\nIl posa son front sur le tapis, sentant la trame rugueuse sous sa peau, et il murmura, d'une voix tremblante mais sincère :\n\n— Allahoumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lam, wa astaghfiruka lima la a'lam — Ô Allah, je me réfugie auprès de Toi contre l'association à Toi de quelque chose que je sais, et je Te demande pardon pour ce que je ne sais pas.\n\nLes mots de cette dou'a, que son père lui avait apprise des années plus tôt et qu'il n'avait jamais vraiment comprise, prirent soudain tout leur sens. L'association — le Shirk — ce n'était pas seulement adorer des idoles en pierre. C'était aussi associer les créatures au Créateur dans son cœur. C'était chercher l'approbation des hommes au lieu de l'approbation d'Allah. C'était mettre la créature à la place du Créateur.\n\nIl resta longtemps dans cette position, le front contre le tapis, les yeux fermés, et peu à peu, quelque chose de merveilleux se produisit. Le nœud d'angoisse dans sa poitrine commença à se desserrer. La honte de s'être rendu compte de son orgueil se transforma en gratitude — gratitude envers Allah de l'avoir éclairé, gratitude envers Rabia de lui avoir montré le chemin, gratitude envers sa mère de l'avoir écouté sans jugement.\n\nQuand il releva la tête, ses joues étaient mouillées de larmes qu'il n'avait pas cherché à retenir. Et dans son cœur, là où la fierté s'était installée comme un rocher froid, il sentit quelque chose de nouveau — une douceur légère, aérienne, comme le parfum d'une fleur qu'on ne peut pas nommer. C'était l'Ikhlas — ou plutôt, c'en était le premier frémissement, la première lueur, la première graine plantée dans la terre de son cœur.\n\nPlus tard, dans la bibliothèque, Sidi Mu'adh lui tendit le manuscrit ouvert. Sur la page, là où se trouvait l'enluminure de la lampe vide de Rabia, une lumière dorée pulsait doucement, comme un cœur qui bat. Et à côté de la lampe, une petite broche avait apparu — une broche en forme de cœur ouvert, forgée dans un métal d'un blanc nacré qui changeait de teinte selon l'angle sous lequel on la regardait.\n\n— L'Ikhlas, dit Sidi Mu'adh, est le joyau le plus rare de tous, Souhayl. Il ne se trouve pas dans les montagnes ou les rivières. Il se trouve dans le secret entre toi et ton Seigneur. Protège-le. Nourris-le. Et souviens-toi des mots de Rabia : « Ô Allah, si je T'adore par crainte de l'Enfer, brûle-moi dedans. Et si je T'adore dans l'espoir du Paradis, exclus-moi d'y entrer. Mais si je T'adore pour Toi seul, alors ne me prive pas de Ta contemplation éternelle. »`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, je comprends maintenant. Ce n'est pas une chose qu'on obtient une fois pour toutes. C'est un travail de chaque jour, comme arroser une plante. Si j'arrête d'arroser, la plante se fane.",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu as compris la plus grande leçon de Rabia, Souhayl. L'Imam Al-Ghazali disait : « L'Ikhlas est la chose la plus rare et la plus précieuse, et le diable ne cesse d'y attaquer le croyant. » Mais maintenant que tu connais l'ennemi, tu sais comment te battre. Chaque fois que tu fais une bonne action, pose-toi cette question : « Pour qui est-ce que je fais cela ? » Et si la réponse est « pour les gens », recommence. Recommence jusqu'à ce que la réponse soit « pour Allah seul. »",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, une dernière chose. Quand j'ai prié tout à l'heure, dans ma chambre, tout seul... j'ai pleuré. Pas de tristesse, mais de... de soulagement ? C'est normal ?",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est plus que normal, Souhayl. C'est un signe. Le Prophète ﷺ a dit : « L'œil ne pleure pas si le cœur ne brûle pas. » Tes larmes étaient les premières gouttes d'eau sur la graine de l'Ikhlas. Qu'Allah fasse pousser cet arbre jusqu'aux cieux.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'ikhlas',
          lesson: {
            title: "Al-Ikhlas — La sincérité dans les actes",
            content:
              "L'Ikhlas (الإخلاص) est la sincérité absolue — faire chaque action uniquement pour la face d'Allah, sans chercher la reconnaissance des gens. Souhayl a appris que même les bonnes actions peuvent être gâchées par l'orgueil caché. Rabia Al-Adawiyya lui a enseigné qu'on ne doit pas aimer le Paradis pour ses délices ni craindre l'Enfer pour ses tourments — on doit aimer et servir Allah parce qu'Il est digne d'être aimé. Le Prophète ﷺ a dit : « Certes, Allah ne regarde ni vos corps ni vos apparences, mais Il regarde vos cœurs et vos actions. »",
            quote: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st3c2s4b: Le sommeil de l'insouciance ---
        {
          id: 'st3c2s4b',
          chapterId: 'st3c2',
          title: 'Le sommeil de l\'insouciance',
          narration: `Souhayl resta assis sur le canapé du salon, les bras croisés, et il essaya de se convaincre que sa mère avait raison — qu'il ne devait pas être trop dur avec lui-même, qu'il n'avait que neuf ans après tout, qu'on ne pouvait pas être parfait. Mais même pendant qu'il se répétait ces pensées apaisantes, quelque chose au fond de lui protestait. Une petite voix, fine mais persistante, qui disait : « Tu sais que tu mens, Souhayl. Tu sais que tu te trouves des excuses. »\n\nLa soirée se passa. Son père rentra de la madrasa, son frère Nawfel finit son dessin — un château fort avec des drapeaux marocains — et Wassim, après avoir renversé sa tour de Legos par accident, pleura pendant cinq minutes avant de se calmer et d'en construire une nouvelle, encore plus haute. Le dîner fut bon — un tajine de légumes aux pruneaux et amandes, la spécialité de sa mère — et Souhayl rit aux blagues de Wassim, participa à la conversation, fit tout ce qu'un fils de neuf ans est censé faire.\n\nMais la petite voix ne se taisait pas.\n\nCe soir-là, dans son lit, sous la couverture en laine, Souhayl regardait le plafond. La lumière de la lune entrait par la fenêtre et dessinait un rectangle pâle sur le mur opposé. On n'entendait que le chant lointain des grillons dans le jardin et, de temps en temps, le son d'une voiture qui passait dans la rue en contrebas.\n\nEt soudain, il vit les yeux de Yassine. Les yeux brillants, pleins de larmes, du petit garçon à qui il avait rendu son Coran. Et il se demanda : quand il avait défendu Yassine, combien de pour cent de son action étaient vraiment pour Allah, et combien de pour cent étaient pour que les autres disent « Souhayl est courageux » ?\n\nLa question le fit s'asseoir dans son lit. Il alluma la petite lampe de chevet et fixa ses mains — les mains d'un garçon de neuf ans, encore fines, encore enfantines, qui avaient posé le Coran de Yassine sur sa poitrine avec un respect qui était sincère, oui, mais qui avait aussi été... spectacle.\n\nSouhayl enfila ses babouches, descendit l'escalier sans bruit, se dirigea vers la porte d'entrée, l'ouvrit, et sortit dans la cour intérieure de la maison. Le ciel de Fès était une voûte étoilée d'une beauté vertigineuse, et l'air nocturne sentait le jasmin et le bois brûlé. Il s'agenouilla sur les carreaux de zellige frais et leva les mains vers le ciel.\n\n— Allahoumma, murmura-t-il, pardonne-moi. Purifie mon cœur. Je ne veux pas être celui qui fait le bien pour être vu. Je veux être celui qui fait le bien parce que c'est bien. Aide-moi, Ya Allah. Aide-moi à être sincère.\n\nLes étoiles semblaient briller un peu plus fort, là-haut, comme si le ciel lui-même l'avait entendu. Et Souhayl comprit qu'on ne peut pas endormir la conscience avec des excuses — tôt ou tard, elle se réveille, et plus on attend, plus le réveil est difficile.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Je ne peux pas tromper mon propre cœur. Les mots de Rabia ne me quittent pas : « Celui qui possède Allah ne manque de rien. » C'est vrai. Tout le reste, c'est du sable dans la main — ça glisse, ça tombe, ça disparaît. Seul Allah reste.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st3c2s4a',
          background: 'home',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — Le Bouclier de Saladin (درع صلاح الدين)
    // ============================================================
    {
      id: 'st3c3',
      tomeId: 'souhayl_tome3',
      number: 3,
      title: 'Le Bouclier de Saladin',
      titleAr: 'درع صلاح الدين',
      scenes: [
        // --- st3c1s1: Le dernier enseignement ---
        {
          id: 'st3c3s1',
          chapterId: 'st3c3',
          title: 'Le dernier enseignement',
          narration: `Une semaine s'était écoulée depuis la leçon de Rabia, et Souhayl se sentait différent. Pas meilleur — il était trop sincère avec lui-même pour croire qu'une seule leçon pouvait transformer un cœur de neuf ans — mais plus attentif. Plus vigilant. Il faisait maintenant une habitude de se poser la question de Rabia avant chaque action : « Pour qui est-ce que je fais cela ? » Et la plupart du temps, la réponse le gênait. Mais il ne fuyait plus la gêne — il l'accueillait, comme on accueille un médecin qui vient soigner une blessure douloureuse.\n\nQuand il descendit dans la bibliothèque ce jour-là, il trouva Sidi Mu'adh dans un état qu'il n'avait encore jamais vu. Le vieillard était debout devant la porte de la bibliothèque, ses mains croisées dans le dos, son visage tourné vers le mur circulaire où étaient gravées des inscriptions en calligraphie coufique. Ses yeux verts brillaient d'une intensité solennelle, et autour de lui, les lampes dorées avaient pris une couleur ambrée — une couleur qui rappelait le soleil couchant sur un champ de bataille après la fin des combats.\n\n— Souhayl, dit Sidi Mu'adh sans se retourner, tu as appris la justice avec Umar. Tu as appris la sincérité avec Rabia. Il te reste une dernière leçon — la plus difficile, la plus contre-intuitive, et peut-être la plus importante de toutes trois.\n\nSouhayl s'approcha, ses babouches silencieuses sur le marbre blanc de la salle circulaire.\n\n— Quelle leçon, Sidi ?\n\nSidi Mu'adh se retourna. Son visage portait une expression que Souhayl n'avait vue qu'une seule fois — quand le sage avait parlé du Calife Umar et que ses yeux s'étaient remplis de larmes. C'était l'expression de quelqu'un qui porte un souvenir trop lourd pour les épaules d'un seul homme.\n\n— La miséricorde, dit-il. Ar-Rahma — الرحمة. La miséricorde envers ceux qui te font du mal. Le pardon envers ceux qui te blessent. La compassion envers ceux qui te haïssent.\n\nSouhayl fronça les sourcils. C'était nouveau pour lui. La justice, il comprenait. La sincérité, il commençait à comprendre. Mais la miséricorde envers ceux qui te font du mal ? C'était contre-nature. Quand quelqu'un te blesse, ton premier instinct est de te défendre, non pas de pardonner.\n\n— Sidi, dit Souhayl avec hésitation, c'est impossible, non ? Pardonner à quelqu'un qui vous a fait du mal ? Notre nature nous pousse à nous venger, à répondre à la violence par la violence...\n\nSidi Mu'adh posa sa main sur l'épaule du garçon, et sa voix prit une chaleur que Souhayl sentit jusqu'au bout de ses orteils.\n\n— C'est précisément pour cela, Souhayl, que c'est la plus grande des vertus. La justice est difficile. La sincérité est plus difficile encore. Mais la miséricorde envers ceux qui te font du mal ? C'est le sommet de la montagne — le point le plus haut, le plus expose, le plus vertigineux. Et c'est là, à ce sommet, que tu vas rencontrer un homme dont toute la vie a été un monument à la miséricorde : Salahuddin Al-Ayyubi — Saladin. Le libérateur de Jérusalem. Le sultan qui a pardonné à ses ennemis le jour même de sa plus grande victoire.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Saladin ? Le sultan qui a repris Jérusalem aux Croisés ? Le héros dont Baba nous parle pendant les leçons d'histoire ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Le même. Mais ce que ton père te raconte dans ses leçons d'histoire, Souhayl, ce sont les batailles, les stratégies, les dates. Ce que je vais te raconter, c'est ce que les livres d'histoire oublient souvent : le cœur de Saladin. Un cœur si vaste que même ses ennemis les plus acharnés le pleuraient quand il mourut. Un cœur si rempli de miséricorde que, le jour où il entra dans Jérusalem en conquérant, il ne versa pas une seule goutte de sang. Pas une seule, Souhayl. Après des décennies de guerre.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Pas une seule goutte de sang ? Mais... les guerres, c'est fait pour tuer, non ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Les guerres des hommes, oui. Pas les guerres des croyants. Le Prophète ﷺ a dit : « La miséricorde n'est pas enlevée qu'à celui qui est malheureux. » Et ailleurs : « Soyez miséricordieux envers ceux qui sont sur la terre, Celui qui est dans les cieux sera miséricordieux envers vous. » Saladin a pris ces mots au pied de la lettre. Ouvre le manuscrit, Souhayl. Va le voir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c3s2',
          background: 'inner_world',
        },

        // --- st3c3s2: Le lion miséricordieux ---
        {
          id: 'st3c3s2',
          chapterId: 'st3c3',
          title: 'Le lion miséricordieux',
          narration: `Les pages du manuscrit tournèrent, et cette fois, Souhayl ne se retrouva ni dans un désert ni dans une ville ancienne — il se retrouva sur un champ de bataille. Non pas au milieu des combats, mais après — bien après. Le soleil se couchait sur Jérusalem, peignant les murailles de la Ville Sainte d'un orange flamboyant qui ressemblait au feu et à l'or mêlés, et les tours des églises et des mosquées projetaient des ombres immenses sur les rues pavées de pierre blanche.\n\nL'air sentait la poussière, le cuir, le métal chaud et quelque chose d'autre — une odeur âcre et douce à la fois, que Souhayl ne put identifier immédiatement. Puis il comprit : c'était l'odeur de la paix après la guerre. L'odeur de milliers de soldats qui posent leurs armes en même temps, qui relâchent leur poigne sur leurs épées, qui ferment leurs yeux et respirent pour la première fois depuis des mois sans la peur dans la gorge.\n\nEt au milieu de cette immensité pacifiée, assis sur un rocher face aux murailles de Jérusalem, un homme attendait. Il était grand, large d'épaules, avec une barbe rousse et des yeux d'un noir profond qui brillaient d'une lueur si intense qu'on aurait dit qu'ils contenaient le feu d'un millier de soleils. Il portait une armure simple — pas les broderies dorées des rois vaniteux, mais une armure fonctionnelle, sale, éraflée par des dizaines de batailles. Autour de son cou, un turban blanc, en partie dénoué par le vent du soir.\n\nSalahuddin Al-Ayyubi. Saladin.\n\nSouhayl s'approcha lentement, ses pieds nus sur la pierre chaude de Jérusalem — ses babouches avaient disparu pendant le voyage, comme elles faisaient toujours dans le monde du manuscrit. Saladin leva les yeux et regarda le garçon avec une attention qui aurait intimidé un adulte, mais qui, dirigée vers un enfant de neuf ans, se transforma immédiatement en douceur.\n\n— Tu es Souhayl, dit Saladin d'une voix grave comme le tonnerre lointain, mais adoucie par une tendresse inattendue. Sidi Mu'adh m'a parlé de toi. Approche-toi. Assieds-toi.\n\nSouhayl s'assit sur le rocher à côté du sultan, et pendant un long moment, ils regardèrent ensemble le soleil couchant sur Jérusalem. Le silence entre eux n'était pas un silence vide — c'était un silence plein, un silence de deux personnes qui n'ont pas besoin de parler pour se comprendre.\n\n— Saladin, dit finalement Souhayl, Sidi Mu'adh m'a dit que vous n'avez pas versé une seule goutte de sang quand vous êtes entré dans Jérusalem. Est-ce vrai ? Même après tout ce que les Croisés avaient fait ?\n\nSaladin acquiesça lentement, ses yeux fixés sur l'horizon.\n\n— C'est vrai. Je ne suis pas entré dans Jérusalem comme un conquérant, Souhayl. Je suis entré comme un serviteur d'Allah. Et le serviteur d'Allah ne fait pas aux autres ce qu'il n'aime pas qu'on lui fasse. Le Prophète ﷺ a dit : « Ne souhaitez pas la rencontre de l'ennemi, mais si vous le rencontrez, soyez patients. » J'ai été patient pendant des années. Des années de guerres, de sièges, de pertes. Et quand Jérusalem s'est rendue, j'ai choisi le pardon, parce que le pardon est plus fort que l'épée.\n\n— Mais pourquoi ? demanda Souhayl. Ils étaient vos ennemis. Ils avaient tué des milliers de musulmans. Ils avaient détruit des mosquées. Pourquoi les pardonner ?\n\nSaladin se tourna vers Souhayl, et ses yeux noirs reflétèrent le soleil couchant avec une intensité qui fit trembler le cœur du garçon.\n\n— Parce qu'Allah est Ar-Rahman, Ar-Rahim — le Tout Miséricordieux, le Très Miséricordieux. Si Allah, le Maître de l'univers, le Créateur de toutes choses, le Juge du Jour Dernier, peut pardonner à Ses créatures, qui suis-je, moi, un simple serviteur, pour refuser le pardon ? Souhayl, le jour où j'ai pris Jérusalem, j'ai libéré tous les prisonniers — chrétiens, juifs, musulmans — sans condition. J'ai payé la rançon de ceux qui ne pouvaient pas payer. J'ai protégé les églises, les synagogues et les mosquées. Pourquoi ? Parce que dans le Coran, Allah dit : « Et si tu punis, punis comme tu as été puni. Et si tu es patient, c'est mieux pour les patients. » Le mieux, Souhayl, c'est la patience. Et au-dessus de la patience, il y a le pardon.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Mais c'est tellement difficile ! Quand quelqu'un nous fait du mal, notre cœur veut se venger. C'est naturel, non ?",
              emotion: 'neutral',
            },
            {
              characterId: 'salahuddin',
              text: "Naturel ? Oui. Mais en Islam, nous sommes appelés à dépasser notre nature pour atteindre notre noblesse. Le Prophète ﷺ a dit : « Ne soyez pas comme celui qui dit : « Si on me fait du bien, je fais le bien, et si on me fait du mal, je fais le mal. » Mais soyez plutôt comme celui qui dit : « Si on me fait du bien, je fais le bien, et si on me fait du mal, je pardonne. » Le pardon, Souhayl, n'est pas de la faiblesse. C'est la plus grande force qui existe. Il faut plus de courage pour pardonner que pour se venger.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Plus de courage pour pardonner ? Vraiment ?",
              emotion: 'surprised',
            },
            {
              characterId: 'salahuddin',
              text: "L'épée coupe ce qu'elle touche. Tout le monde peut lever une épée. Mais se lever et dire à son ennemi : « Je te pardonne » — cela, personne ne peut le faire sans une force que seul Allah peut donner. Le jour où j'ai pardonné aux Croisés, mes propres généraux pleuraient de frustration. Ils voulaient la vengeance. Mais je leur ai dit : « Aujourd'hui, nous avons gagné une bataille. Demain, Allah nous demandera si nous avons gagné la bataille de notre cœur. »",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st3c3s3',
          background: 'inner_world',
          lesson: {
            title: "Ar-Rahma — La miséricorde au-dessus de tout",
            content:
              "Salahuddin Al-Ayyubi (1137-1193), connu en Occident sous le nom de Saladin, est l'un des plus grands héros de l'histoire islamique. En 1187, il reprit Jérusalem aux Croisés après 88 ans d'occupation. Contrairement aux Croisés qui avaient massacré les habitants de Jérusalem lors de leur prise de la ville en 1099, Saladin ordonna que pas un seul civil ne soit tué. Il libéra les prisonniers, paya les rançons des plus pauvres, et protégea tous les lieux de culte. Sa miséricorde était si célèbre que ses ennemis eux-mêmes le considéraient comme le chevalier le plus noble de son époque.",
            quote: 'وَلَمَن صَبَرَ وَغَفَرَ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ',
            source: 'Coran, Sourate Achoura (42:43)',
          },
        },

        // --- st3c3s3: Le défi du pardon ---
        {
          id: 'st3c3s3',
          chapterId: 'st3c3',
          title: 'Le défi du pardon',
          narration: `La lumière de Jérusalem s'effaça, et Souhayl se retrouva de nouveau dans la bibliothèque, assis sur son coussin, le manuscrit ouvert sur ses genoux. Les paroles de Saladin résonnaient encore dans son esprit — « Il faut plus de courage pour pardonner que pour se venger » — et il sentait qu'il était sur le point de comprendre quelque chose d'essentiel. Mais le manuscrit n'avait pas encore fini de lui apprendre.\n\nSidi Mu'adh ferma le livre et le posa sur l'étagère avec le soin d'un homme qui range un trésor inestimable.\n\n— Souhayl, dit-il, les leçons que tu as apprises dans ce tome — la justice, la sincérité, la miséricorde — sont les trois piliers du bon caractère en Islam. Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui a le meilleur caractère. » Tu as appris la justice avec Umar, la sincérité avec Rabia, la miséricorde avec Saladin. Mais il reste une chose : tu dois les vivre, ces leçons. Pas seulement les connaître — les vivre. Et la vie, Souhayl, a une façon de tester ce que nous avons appris.\n\nSouhayl remercia le sage et remonta à la surface. La porte de fer se referma, le murmure « Iqra » s'éloigna, et Souhayl se retrouva dans la ruelle derrière la Qarawiyyin, sous un ciel de fin d'après-midi criblé de nuages cotonneux.\n\nLe lendemain était le jour de la visite au jardin de la famille. Chaque samedi, les Benali se rendaient au petit jardin que possédait la famille de la mère de Aziza, dans le quartier des jardins au nord de la médina — un carré de verdure murmureux, planté d'orangers, de grenadiers et de rosiers, où coulait un petit canal d'irrigation et où les enfants de la famille jouaient depuis des générations.\n\nSouhayl aimait ce jardin. Il y avait appris à grimper aux grenadiers avec Nawfel quand ils étaient plus petits, il y avait fait ses premières prières en plein air avec son père, et il y avait, un jour, attrapé son premier papillon — un papillon citron aux ailes délicates qu'il avait relâché immédiatement parce que sa mère lui avait dit que les créatures d'Allah ne sont pas des jouets.\n\nMais ce samedi, quelque chose allait se passer qui allait mettre à l'épreuve tout ce que Souhayl avait appris.\n\nSouhayl était assis sous l'oranger, un livre ouvert sur les genoux — un recueil de poésie arabe que son père lui avait prêté — quand il entendit une voix derrière lui. Une voix qu'il reconnaissait immédiatement et qui fit grimacer ses lèvres.\n\n— Eh, Souhayl ! Le petit savant ! Tu lis encore des livres au lieu de jouer comme un garçon normal ?\n\nC'était Samir, le fils d'un voisin. Samir avait dix ans — un an de plus que Souhayl — et depuis des mois, il ne manquait pas une occasion de le taquiner, de se moquer de lui, de le rabaisser devant les autres enfants. Aujourd'hui, il était accompagné de deux amis, et les trois garçons se tenaient devant Souhayl avec des sourires narquois.\n\nSamir arracha le livre des mains de Souhayl et le brandit au-dessus de sa tête.\n\n— De la poésie ! s'exclama-t-il d'une voix faussement admirative. Souhayl le poète ! Attendez, je vais lire quelque chose... « Ô mon bien-aimé, ton absence est comme... » C'est nul ! C'est pour les filles ! Les vrais garçons jouent au football !\n\nLes amis de Samir éclatèrent de rire. Souhayl sentit la colère monter en lui comme de la lave dans un volcan — chaude, brûlante, impossible à contenir. Ses poings se serrèrent. Ses mâchoires se crispèrent. Et dans sa poitrine, deux voix se livraient une bataille féroce : la voix de la colère qui criait « Reprends ton livre ! Crie ! Frappe ! » et la voix de Saladin qui murmuraient doucement : « Le pardon est plus fort que l'épée. Il faut plus de courage pour pardonner que pour se venger. »\n\nSamir referma le livre brutalement — un geste qui fit mal à Souhayl même si le livre n'était pas à lui — et le jeta dans le canal d'irrigation. Les pages se gorgea d'eau immédiatement, et le livre commença à couler lentement vers le bas du jardin.\n\n— Oh, dit Samir avec un haussement d'épaules sarcastique. Désolé. Accidents arrivent.\n\nLes amis de Samir rirent encore plus fort. Souhayl regarda le livre qui flottait dans l'eau — le livre de poésie de son père — et il sentit quelque chose se briser en lui. Pas le livre. Quelque chose de plus fragile. Sa patience. Sa tolérance. Et la voix de Saladin devint presque inaudible sous le fracas de la colère.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Samir... pourquoi tu fais ça ? Qu'est-ce que je t'ai fait ?",
              emotion: 'angry',
            },
            {
              characterId: 'salahuddin',
              text: "Souhayl, rappelle-toi : le Prophète ﷺ a dit : « Le fort n'est pas celui qui vainc les gens par la force physique, mais le fort est celui qui se maîtrise dans la colère. » C'est maintenant, dans ce jardin, que ta force va se mesurer.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st3c3s3_c1',
              text: "Pardonner à Samir et récupérer le livre avec calme — la miséricorde est plus forte que la colère",
              nextSceneId: 'st3c3s4a',
              badgeId: 'rahma',
              isCorrect: true,
            },
            {
              id: 'st3c3s3_c2',
              text: "Se lever et crier après Samir — il mérite qu'on lui réponde !",
              nextSceneId: 'st3c3s4b',
            },
          ],
          background: 'garden',
        },

        // --- st3c3s4a: Le bouclier du cœur ---
        {
          id: 'st3c3s4a',
          chapterId: 'st3c3',
          title: 'Le bouclier du cœur',
          narration: `Souhayl ferma les yeux. Il respira profondément — une seule inspiration, longue et lente, comme lui avait appris à le faire son père quand la colère menaçait de le submerger. L'air du jardin entra dans ses poumons, portant avec lui le parfum des orangers en fleurs et la fraîcheur du canal d'irrigation, et cette odeur, mêlée à la mémoire des paroles de Saladin, agit comme de l'eau sur un brasier.\n\nIl rouvrit les yeux. Samir se tenait toujours devant lui, un sourire de défi aux lèvres, attendant la réaction qu'il avait provoquée des dizaines de fois — la colère, les insultes, peut-être les coups, la scène classique que les enfants reproduisent depuis la nuit des temps quand on les blesse.\n\nMais Souhayl ne donna pas à Samir la réaction qu'il attendait.\n\nIl se leva, calmement, sans précipitation, sans cris, sans poings serrés. Il marchant vers le canal d'irrigation, se pencha, et sortit le livre de l'eau. Les pages étaient détrempées, l'encre coulait, le cuir de la couverture gonflait comme une éponge. C'était le livre de poésie de son père — un livre précieux, un héritage. Et il était ruiné.\n\nSouhayl tint le livre contre sa poitrine, comme on tient un enfant blessé, et se tourna vers Samir. Ses yeux n'étaient pas pleins de colère — ils étaient remplis de quelque chose de plus complexe, de plus profond, de plus déroutant pour Samir que la rage aurait pu l'être. Ils étaient remplis de tristesse, oui, et de déception, mais aussi — et c'est cela qui fit reculer Samir d'un pas — de pitié. De la pitié pour un garçon de dix ans qui ne savait pas que le bonheur ne se trouve pas dans la souffrance des autres.\n\n— Samir, dit Souhayl d'une voix douce mais claire, ce livre appartenait à mon père. Il était précieux pour lui, et pour moi. Mais tu sais quoi ? Mon père me pardonne quand je fais une erreur. Et je pardonne aussi. Je te pardonne, Samir.\n\nLe sourire de Samir s'éteignit comme une bougie soufflée par le vent. Ses deux amis cessèrent de rire. Un silence pesant tomba sur le jardin, et dans ce silence, Souhayl vit quelque chose qu'il n'attendait pas : les yeux de Samir s'emplir de larmes. Pas de larmes de tristesse — des larmes de honte.\n\n— Je... je suis désolé, murmura Samir d'une voix étranglée. Je ne sais pas pourquoi je fais ça. Je... je ne voulais pas vraiment... Souhayl, pardon. Pardon.\n\nSamir s'enfuit en courant, ses deux amis sur ses talons, et Souhayl resta seul dans le jardin, le livre trempé contre sa poitrine, les pétales d'orangers qui tombaient doucement autour de lui comme une pluie silencieuse de confettis parfumés.\n\nCe soir-là, dans la bibliothèque, Sidi Mu'adh posa devant Souhayl le manuscrit ouvert. Sur la page, l'enluminure représente un bouclier — un bouclier simple, en forme d'écu, orné d'un motif de calligraphie qui formait le mot « Rahma » — miséricorde — en lettres dorées. Et au centre du bouclier, une petite broche avait apparu — forgée dans un métal qui ressemblait à de l'argent liquide, avec un éclat doux et apaisant qui illuminait tout ce qui l'entourait.\n\n— Souhayl, dit Sidi Mu'adh d'une voix que l'émotion rendait à peine audible, tu as accompli quelque chose aujourd'hui que beaucoup d'adultes ne parviennent pas à faire en toute une vie. Tu as pardonné à quelqu'un qui t'a fait du mal, non pas parce que tu étais faible, mais parce que tu étais fort. Le Prophète ﷺ a dit : « Le fort n'est pas celui qui vainc les gens par la force physique, mais le fort est celui qui se maîtrise dans la colère. » Aujourd'hui, Souhayl, tu as été fort.\n\nSouhayl regarda la broche d'argent, puis Sidi Mu'adh, puis le manuscrit ouvert dont les pages brillaient d'une lumière qui n'avait pas besoin de flamme — la lumière de la miséricorde, la lumière de Rahma.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, j'ai vu les yeux de Samir. Il avait honte. Et... et je ne me suis pas senti faible, en le pardonnant. Je me suis senti libre. Comme si un poids m'avait été enlevé des épaules. C'est ça, la miséricorde ?",
              emotion: 'happy',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est exactement ça, Souhayl. La vengeance est une chaîne qui t'attache à ton ennemi. Plus tu te venges, plus la chaîne est lourde. Mais le pardon ? Le pardon est la clé qui ouvre les chaînes. Quand tu as dit « Je te pardonne » à Samir, tu ne lui as pas fait un cadeau — tu t'en as fait un, à toi-même. Tu t'es libéré de la colère, de la rancoeur, de la douleur. Le Prophète ﷺ a dit : « Soyez miséricordieux envers ceux qui sont sur la terre, Celui qui est dans les cieux sera miséricordieux envers vous. »",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Trois leçons, Sidi. La justice avec Umar. La sincérité avec Rabia. La miséricorde avec Saladin. Est-ce que c'est tout ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidimuadh',
              text: "Trois piliers, Souhayl. Mais le bon caractère, Al-Akhlaq, est un édifice sans fin. Chaque jour de ta vie t'apportera de nouvelles leçons, de nouveaux défis, de nouvelles occasions d'être juste, sincère et miséricordieux. Ce que tu as appris ici est le fondement. Maintenant, c'est à toi de construire. Et souviens-toi toujours : le savoir sans bon caractère est comme un arbre sans fruits — il est beau à regarder, mais il ne nourrit personne.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'rahma',
          lesson: {
            title: "Ar-Rahma — La miséricorde, la plus grande des forces",
            content:
              "Salahuddin Al-Ayyubi a enseigné à Souhayl que la miséricorde (Ar-Rahma — الرحمة) n'est pas une faiblesse — c'est la plus grande des forces. Le Prophète ﷺ a dit : « Le fort n'est pas celui qui vainc les gens par la force physique, mais le fort est celui qui se maîtrise dans la colère. » En pardonnant à Samir, Souhayl n'a pas seulement libéré son cœur de la rancoeur — il a libéré Samir de sa propre honte. La miséricorde est un bouclier qui protège le pardonateur autant que le pardonné. Le Coran dit : « Et celui qui est patient et pardonne, certes, cela fait partie des qualités déterminantes. »",
            quote: 'وَلَمَن صَبَرَ وَغَفَرَ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ',
            source: 'Coran, Sourate Achoura (42:43)',
          },
        },

        // --- st3c3s4b: La braise de la colère ---
        {
          id: 'st3c3s4b',
          chapterId: 'st3c3',
          title: 'La braise de la colère',
          narration: `Souhayl se leva d'un bond. La colère, jusque-là contenue comme un animal dans une cage, explosa hors de lui avec une violence qu'il ne se connaissait pas. Il attrapa le bras de Samir et le secoua.\n\n— Tu es méchant, Samir ! Tu es vraiment méchant ! Ce livre appartenait à mon père ! Tu n'as pas de respect pour rien ni personne ! Tu détestes les livres parce que tu n'en as jamais lu un !\n\nSamir recula, surpris par la réaction. Ses amis s'arrêtèrent de rire. Les enfants du quartier qui jouaient plus loin dans le jardin cessèrent leurs jeux et regardèrent la scène. Et Souhayl, debout au milieu du jardin, les poings serrés, le cœur battant, se sentit envahi par une sensation amère — la sensation de celui qui a cédé à la colère et qui, au lieu de se sentir soulagé, se sent sali.\n\nCar la colère, quand elle sort, ne libère pas — elle emprisonne. Elle emprisonne celui qui crie autant que celui qui est crié dessus. Et Souhayl le sentit immédiatement : la chaîne de la vengeance s'était refermée autour de son poignet comme un bracelet invisible et brûlant.\n\nSamir, au lieu de s'excuser, regarda Souhayl avec un sourire triomphant.\n\n— Tu vois, dit-il. Tu es comme tout le monde. Tu te mets en colère, tu cries, tu insultes. Tu n'es pas si différent de moi, Souhayl le sage.\n\nLes mots de Samir frappèrent Souhayl comme un coup de fouet. « Tu n'es pas si différent de moi. » Et Souhayl comprit, avec une horreur glacée, que Samir avait raison. En cédant à la colère, il n'avait pas été différent de lui — il avait été exactement comme lui. La voix de Saladin, si présente quelques instants plus tôt, était maintenant réduite à un murmure à peine audible.\n\nSouhayl lâcha le bras de Samir et recula. Il regarda le canal d'irrigation, le livre de son père qui flottait encore dans l'eau, les pétales d'orangers qui tombaient autour de la scène comme des témoins silencieux, et il sentit les larmes monter à ses yeux — non pas de tristesse, mais de frustration. Frustration d'avoir eu la force de pardonner et de ne pas l'avoir utilisée.\n\nLes enfants du jardin regardaient. Son frère Nawfel, accroupi derrière un grenadier, regardait aussi. Et Souhayl savait que dans les yeux de Nawfel, il ne voyait pas l'admiration qu'il avait espérée — il voyait de la déception. La déception d'un petit frère qui pensait que son grand frère était plus fort que ça.\n\nSouhayl s'assit sur l'herbe, les jambes repliées contre sa poitrine, et il ferma les yeux. Les mots du Prophète ﷺ résonnèrent dans son esprit, comme une prière qu'il avait oubliée : « Le fort n'est pas celui qui vainc les gens par la force physique, mais le fort est celui qui se maîtrise dans la colère. »\n\nIl inspira profondément. Puis il regarda Samir, qui se tenait encore là, incertain, comme quelqu'un qui s'attendait à une réaction et qui ne savait plus quoi faire quand la réaction changeait.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Samir... attends. Ce que j'ai dit, c'était la colère qui parlait, pas moi. Je... je suis désolé de t'avoir crié dessus. Tu as fait quelque chose de mal, oui. Mais je n'ai pas le droit de te répondre par la colère. Pardonne-moi.",
              emotion: 'sad',
            },
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh avait raison. La colère est une braise. Si tu la souffles, elle devient un incendie. Si tu la laisses s'éteindre, elle meurt. Je ne veux plus être celui qui souffle la braise.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st3c3s4a',
          background: 'garden',
        },
      ],
      lessons: [],
    },
  ],
  monsters: [],
  spiritualLesson:
    'Le savoir sans bon caractère est comme un arbre sans fruits — il est beau à regarder, mais il ne nourrit personne. Le Prophète ﷺ a dit : « Le meilleur d\'entre vous est celui qui a le meilleur caractère. » Les trois piliers du bon caractère en Islam sont la justice (Al-\'Adl), la sincérité (Al-Ikhlas) et la miséricorde (Ar-Rahma). Avec la justice, on protège les autres. Avec la sincérité, on protège son cœur. Et avec la miséricorde, on protège le monde entier.',
};
