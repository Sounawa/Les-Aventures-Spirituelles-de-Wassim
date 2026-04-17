import type { Tome } from '@/types/story';

export const tome4_souhayl: Tome = {
  id: 'souhayl_tome4',
  number: 4,
  title: 'Le Pont de Lumière',
  titleAr: 'جسر النور',
  subtitle: "L'épreuve de la Patience et de l'Effort",
  description:
    "Le quatrième tome met Souhayl à l'épreuve. Quand il échoue un examen important à la madrasa, il doit apprendre la patience (Sabr) d'Ibn Al-Qayyim, la persévérance de la mère de Moïse (Hajar), et le courage de Bilal ibn Rabah. Souhayl découvre que les plus grandes victoires se remportent non pas par la force, mais par la constance.",
  theme: "As-Sabr wa al-Jihad — La Patience et l'Effort",
  coverImage: '/images/souhayl-tome4-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Défaite (الهزيمة)
    // ============================================================
    {
      id: 'st4c1',
      tomeId: 'souhayl_tome4',
      number: 1,
      title: 'La Défaite',
      titleAr: 'الهزيمة',
      scenes: [
        // --- st4c1s1: L'examen de la honte ---
        {
          id: 'st4c1s1',
          chapterId: 'st4c1',
          title: "L'examen de la honte",
          narration: `La salle de classe de la madrasa Bou Inania baignait dans une lumière blanche et crue qui tombait des fenêtres en claustra disposées haut sur les murs. Les murs étaient ornés de carreaux de zellige bleu et blanc formant des motifs géométriques complexes, et le sol, en marbre poli, reflétait les silhouettes des élèves assis en rangées serrées sur des tapis de prière repliés. L'odeur familière du bois de cèdre, de l'encens et du papier vieux se mélangeait à celle de la craie et de la nervosité des enfants.\n\nC'était le jour de l'examen de grammaire arabe — le plus important de l'année. Le professeur, un homme sévère au visage osseux et à la barbe grise taillée court, distribuait les feuilles d'examen une à une, dans un silence absolu que seule la respiration saccadée des élèves troublait. Chaque feuille qui se posait sur un pupitre sonnait comme un verdict.\n\nSouhayl prit la feuille entre ses doigts tremblants et lut la première question. Son cœur se serra. Les mots n'avaient aucun sens pour lui — ou plutôt, ils en avaient trop, et tous ces sens se brouillaient dans sa tête comme des lettres jetées dans un vent violent. Les règles de l'i'rab — l'analyse grammaticale — qu'il avait étudiées si patiemment pendant des semaines avec son père, s'étaient envolées, effacées par la peur qui lui gelait les pensées. Il regarda les autres élèves : certains griffonnaient déjà fiévreusement, leurs calames dansant sur le papier. Lui restait immobile, comme un oiseau paralysé devant un serpent.\n\nLes minutes passèrent, lentes et cruelles, comme du miel qui coulerait à l'envers. Souhayl essaya de se concentrer, de se rappeler les leçons de son père — « Le maf'oul bihi répond à la question "quoi" ou "qui", Souhayl, retiens bien cela » — mais les mots glissaient sur son esprit comme l'eau sur une pierre polie. Quand le professeur annonça la fin de l'épreuve en tapant trois coups secs sur son bureau, Souhayl regarda sa copie. Elle était presque vide. À peine quelques lignes griffonnées d'une écriture tremblante, des phrases incomplètes, des conclusions fausses. Une catastrophe.\n\nLe silence qui suivit fut pire que n'importe quel cri. Les élèves se levèrent en murmurant, comparant leurs réponses, souriant de soulagement ou soupirant de soulagement. Souhayl, lui, ne bougeait pas. Il fixait sa copie, sentant le rouge lui monter aux joues, puis au cou, puis aux oreilles, comme une marée de honte qui l'engloutissait tout entier. Autour de lui, il sentait les regards — pas toujours méchants, parfois curieux, souvent indifférents — mais chacun de ces regards était comme une aiguille dans sa peau. Il rangea sa copie dans son cartable sans un mot et sortit de la salle d'un pas mécanique, les jambes qui tremblaient sous lui.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Non... non, pas maintenant. Je les avais apprises, ces règles. Je les connaissais par cœur. Pourquoi mon esprit s'est-il arrêté ? Pourquoi ?",
              emotion: 'sad',
            },
            {
              characterId: 'nawfel',
              text: "Souhayl ! Attends-moi ! Comment ça s'est passé ? Moi, j'ai trouvé ça dur mais j'ai tout fini. Et toi ?",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "...Bien. Ça s'est passé... bien.",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s2',
          background: 'classroom',
        },

        // --- st4c1s2: Le chemin du retour ---
        {
          id: 'st4c1s2',
          chapterId: 'st4c1',
          title: 'Le chemin du retour',
          narration: `Souhayl marchait dans les ruelles de la médina comme un fantôme. Les bruits habituels de Fès — les cris des marchands, le bêlement des chèvres, le claquement des babouches sur les pavés, le chant du muezzin — lui parvenaient comme à travers un mur d'eau, lointains et déformés, comme si le monde entier s'était séparé de lui et continuait de tourner sans qu'il en fasse partie. Il marchait sans but, les yeux fixés sur le sol, ses pieds suivant machinalement les lignes des galets noirs et blancs sans les voir vraiment.\n\nLa honte était un animal vorace qui dévorait son cœur de l'intérieur. Chaque pensée revenait à la même image — sa copie presque vide, les mots qu'il n'arrivait pas à écrire, le regard du professeur quand il ramassa sa feuille, ce regard à la fois déçu et surpris, car Souhayl était toujours l'un des meilleurs élèves de la classe. « Le fils du professeur Mehdi, et il n'a même pas réussi à terminer sa copie » — Souhayl imaginait les murmures, et chaque murmure imaginaire était un coup de poignard.\n\nIl s'arrêta au bord de la place Seffarine, là où les dinandiers frappaient le cuivre depuis des générations. Le son familier — « clang, clang, clang » — ne le réconforta pas cette fois. Au contraire, chaque coup de marteau lui rappelait les coups de la chance qui s'abattait sur lui : raté, raté, raté. Il s'assit sur le rebord d'une fontaine en pierre, ses mains tremblantes dans son giron, et pour la première fois depuis longtemps, il sentit les larmes venir. Pas les petites larmes discrètes qu'on essuie du revers de la main, mais des larmes chaudes et abondantes qui coulaient le long de ses joues et tombaient sur la pierre usée de la fontaine.\n\n« Pourquoi essayer ? » murmura-t-il entre ses dents. « Pourquoi étudier si dur si tout peut s'effondrer en une heure ? À quoi bon se lever tôt, apprendre par cœur, sacrifier ses jeux et ses moments de repos, si au final tout disparaît le jour de l'examen ? »\n\nUne voix douce et grave interrompit ses pensées sombres.\n\n— Parce que le savoir, Souhayl, n'est pas un bâtiment qu'on construit en un jour. C'est un arbre. Et les arbres les plus robustes sont ceux qui ont survécu aux tempêtes les plus violentes.\n\nSouhayl leva les yeux. Son père, Mehdi, se tenait debout devant lui, sa djellaba beige baignée dans la lumière dorée du soleil couchant. Il n'avait pas l'air en colère. Il n'avait pas l'air déçu. Il avait l'air... compréhensif. Compréhensif d'une manière qui fit pleurer Souhayl encore plus fort, car il sentit que son père comprenait exactement ce qu'il ressentait.`,
          dialogues: [
            {
              characterId: 'mehdi',
              text: "Mon fils, je sais ce qui s'est passé aujourd'hui. Le professeur Yusuf m'en a parlé. Mais écoute-moi bien : un examen n'est qu'un moment. Un instant dans une vie entière. Ce qui compte, ce n'est pas de tomber — tout le monde tombe — mais de se relever.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Mais Baba... j'ai tout oublié. Tout. Les règles de l'i'rab, les terminaisons, les cas... J'ai étudié pendant des semaines et au moment de l'examen, mon esprit était vide. Vide comme le désert. C'est comme si tout ce que j'avais appris n'existait plus.",
              emotion: 'sad',
            },
            {
              characterId: 'mehdi',
              text: "Ce que tu décris n'est pas l'oubli, Souhayl. C'est la peur. La peur a la capacité de verrouiller les portes de l'esprit. Mais les portes ne sont pas détruites — elles sont simplement fermées. Et il existe des clés pour les ouvrir. Viens, ce soir tu as besoin de rendre visite à un vieil ami.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s3',
          background: 'street',
        },

        // --- st4c1s3: Les paroles d'Ibn Al-Qayyim ---
        {
          id: 'st4c1s3',
          chapterId: 'st4c1',
          title: "Les paroles d'Ibn Al-Qayyim",
          narration: `La bibliothèque souterraine l'accueillit comme une mère accueille un enfant blessé — avec silence, douceur et lumière. Les lampes dorées brillaient d'une intensité plus chaude que d'habitude, comme si elles avaient senti la tristesse de Souhayl et voulaient le réconforter. Le murmure sacré — « اقرأ — Lis... » — résonnait doucement, non pas comme un ordre cette fois, mais comme une berceuse apaisante.\n\nSidi Mu'adh était assis à sa place habituelle, son tapis de prière impeccable, sa djellaba blanche immaculée, son livre ouvert sur ses genoux. Mais quelque chose avait changé dans son visage — les rides autour de ses yeux verts semblaient plus profondes, comme si une préoccupation ancienne l'avait visité pendant la nuit. Quand Souhayl entra, le vieillard leva les yeux et, au lieu de son sourire habituel, lui fit un signe de la main pour qu'il s'approche.\n\n— Assieds-toi, mon enfant, dit-il d'une voix dont la douceur même était un remède. Je sais pourquoi tu es triste. Les murs de cette bibliothèque ont entendu tes pleurs avant même que tu ne descends l'escalier. Ne sois pas honteux — les larmes sont un langage que Allah comprend mieux que n'importe quelle prière.\n\nSouhayl s'assit en tailleur devant le sage, les yeux baissés, ses mains serrées l'une contre l'autre dans son giron. Il ne voulait pas parler. Il voulait disparaître, fondre dans le sol de marbre, devenir invisible. Mais Sidi Mu'adh avait cette capacité extraordinaire de rendre le silence confortable, de le transformer en un espace où les cœurs pouvaient respirer.\n\n— Souhayl, dit le sage après un long moment, je vais te raconter l'histoire d'un homme qui a connu la souffrance comme tu n'imagines même pas. Un homme dont la vie entière fut une épreuve, et qui pourtant a écrit les plus beaux mots sur la patience que le monde islamique ait jamais connus. Son nom est Muhammad Ibn Abi Bakr, mais le monde le connaît sous le nom d'Ibn Al-Qayyim Al-Jawziyya. Il vivait à Damas, en Syrie, il y a sept siècles, et il était l'élève du plus grand savant de son époque, le Cheikh Ibn Taymiyyah.\n\nSidi Mu'adh se leva et marcha lentement vers l'une des étagères les plus élevées. Ses doigts effleurèrent les dos de plusieurs manuscrits avant de s'arrêter sur un volume relié en cuir brun, épais et lourd, dont les pages étaient jaunies par le temps mais intactes, comme si sept cents ans n'avaient pas réussi à les altérer. Il le posa devant Souhayl avec le respect qu'on accorde à un trésor inestimable.\n\n— Ce livre s'appelle « Madarij As-Salikin » — « Les degrés des voyageurs ». Ibn Al-Qayyim l'a écrit après avoir passé des années en prison avec son maître Ibn Taymiyyah. En prison, Souhayl. Dans une cellule froide, sombre, sans livres, sans élèves, sans rien. Et c'est là, dans l'obscurité la plus totale, qu'il a écrit les mots les plus lumineux sur la patience.\n\nSidi Mu'adh ouvrit le livre et lut d'une voix qui faisait vibrer l'air comme une corde de oud :\n\n— « La patience est de trois sortes : la patience dans l'obéissance à Allah, la patience contre la désobéissance à Allah, et la patience face au décret d'Allah. » — الصبر ثلاثة : صبر على الطاعة، وصبر عن المعصية، وصبر على البلاء. Et il a écrit aussi ceci : « Ne maudis jamais la douleur, car elle est le creuset dans lequel Allah forge les âmes les plus nobles. » — لا تلعن الألم فإنه ينقي النفوس.\n\nSouhayl leva les yeux vers Sidi Mu'adh. Les larmes s'étaient arrêtées. Quelque chose dans les mots d'Ibn Al-Qayyim avait touché une corde profonde dans son cœur — pas la corde de la tristesse, mais une corde plus forte, plus ancienne, une corde qu'il n'avait jamais entendue résonner auparavant.\n\n— Ibn Al-Qayyim a passé des années en prison, continua le sage, et il n'a jamais maudit ses geôliers. Il n'a jamais demandé pourquoi Allah lui faisait cela. Il a simplement continué à écrire, à enseigner à ceux qui partageaient sa cellule, et à patienter. Il disait : « Allah ne prive pas Son serviteur d'une chose sans lui donner en échange quelque chose de meilleur. » — ما منع الله عبداً شيئاً إلا أعطاه خيراً منه.\n\n— Mais moi, murmura Souhayl, ce n'est qu'un examen... Ce n'est rien comparé à la prison...\n\n— Et c'est pour cela même que tu dois apprendre la patience maintenant, dit Sidi Mu'adh en posant sa main ridée sur l'épaule du garçon. La patience ne s'apprend pas dans les grandes épreuves — elle se cultive dans les petites. Si tu apprends à patienter face à un examen raté, tu sauras patienter face aux tempêtes plus grandes que la vie te réserve. Le sabr — la patience — n'est pas de ne pas souffrir. C'est de continuer à avancer malgré la souffrance, en sachant qu'Allah ne teste que ceux qu'Il aime.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Souhayl, les larmes sont un langage qu'Allah comprend mieux que n'importe quelle prière. Mais sache ceci : la patience n'est pas de ne pas souffrir — c'est de continuer à avancer malgré la souffrance, en sachant qu'Allah ne teste que ceux qu'Il aime.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Ibn Al-Qayyim... en prison... et il écrivait quand même ? Il trouvait la force d'écrire des mots si beaux dans un endroit si sombre ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Parce qu'il avait compris quelque chose de fondamental, mon enfant. L'épreuve n'est pas une punition — c'est une invitation à grandir. Le diamant le plus pur est celui qui a supporté la plus grande pression. Et toi, Souhayl, tu es un diamant en devenir.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s4',
          background: 'inner_world',
        },

        // --- st4c1s4: Affronter ou se cacher ---
        {
          id: 'st4c1s4',
          chapterId: 'st4c1',
          title: 'Affronter ou se cacher',
          narration: `Souhayl remonta l'escalier de la bibliothèque avec un cœur différent de celui qu'il avait en descendant. La tristesse n'avait pas disparu — elle était encore là, lourde et présente, comme un nuage d'orage au-dessus de sa tête. Mais quelque chose d'autre avait germé à côté d'elle, quelque chose de fin et de fragile comme une pousse de menthe qui sort de terre après la pluie : une détermination encore floue, un courage encore hésitant, mais une volonté de ne pas se laisser abattre.\n\nLes ruelles de la médina, baignées par la lumière douce du crépuscule, lui semblaient différentes ce soir. Les mêmes murs ocre, les mêmes portes en bois de cèdre, les mêmes fenêtres en claustra — mais Souhayl les regardait avec des yeux qui venaient de pleurer, et les larmes, dit-on, lavent le regard de ses impuretés. Il remarqua des détails qu'il n'avait jamais vus : un chat gris assis sur un mur, ses yeux jaunes brillant dans la pénombre ; une vieille femme qui arrosait des géraniums rouges sur son balcon, ses lèvres remuant dans une prière silencieuse ; un enfant plus petit que lui, assis sur le seuil d'une boutique fermée, qui récitait le Coran à voix haute dans la soirée tranquille.\n\nLe monde continuait. Les gens continuaient. Et si eux pouvaient continuer, pourquoi pas lui ?\n\nEn arrivant chez lui, Souhayl entendit les voix de sa famille à travers la porte. Wassim jouait avec ses petites voitures sur le carrelage du couloir — « vroum, vroum, crash ! » — et Nawfel discutait avec sa mère dans la cuisine. Les arômes d'un tajine de légumes aux pruneaux et amandes montaient dans l'escalier, réconfortants et familiers.\n\nC'est là, la main posée sur la poignée de la porte, que Souhayl se retrouva face à un choix qui lui brûlait les doigts. Il pouvait entrer, s'asseoir à table comme si de rien n'était, mentir sur son examen et cacher sa défaite — comme il l'avait déjà fait avec Nawfel dans la rue. Ou il pouvait ouvrir cette porte en étant honnête, dire la vérité à ses parents, affronter leur regard et son propre échec, et accepter que la vulnérabilité n'est pas une faiblesse.\n\nLes mots de Sidi Mu'adh résonnaient dans sa mémoire : « La patience commence par l'honnêteté envers soi-même. Celui qui fuit la vérité ne peut pas affronter l'épreuve, car il ne sait même pas quelle est son épreuve. »\n\nSouhayl serra la poignée de la porte. Sa main tremblait encore un peu. Il prit une grande inspiration, sentit l'air tiède du soir emplir ses poumons, et poussa la porte.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Je peux mentir... Personne ne le saurait, à part le professeur. Mais Sidi Mu'adh a dit que la patience commence par l'honnêteté. Si je mens, je ne ferai que fuir. Et je ne veux plus fuir.",
              emotion: 'determined',
            },
            {
              characterId: 'aziza',
              text: "Souhayl ! Tu es là enfin ! Viens, le dîner est prêt. Wassim a failli manger ton pain en croyant que c'était le sien.",
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'st4c1s4_c1',
              text: "Avouer la vérité à sa famille — affronter sa défaite avec courage",
              nextSceneId: 'st4c1s5a',
              badgeId: 'sabr_ilm',
              isCorrect: true,
            },
            {
              id: 'st4c1s4_c2',
              text: "Garder le silence et se réfugier dans sa chambre sans rien dire",
              nextSceneId: 'st4c1s5b',
            },
          ],
          background: 'home',
        },

        // --- st4c1s5a: La force de la vérité ---
        {
          id: 'st4c1s5a',
          chapterId: 'st4c1',
          title: 'La force de la vérité',
          narration: `Souhayl s'assit à la table familiale, entre Nawfel et Wassim, face à ses parents. Le tajine fumait au centre de la table, dans ce grand plat en terre cuite émaillée de bleu et de blanc que sa mère avait reçu en dot de sa propre mère, et les pains ronds et dorés étaient disposés sur une planche en bois. Tout était parfait, chaleureux, lumineux — et Souhayl sentait que cette perfection même rendait sa confession plus difficile.\n\nIl prit son pain, en détacha un morceau, et le trempa dans la sauce du tajine sans y goûter. Son estomac était trop noué pour manger. Nawfel, à sa gauche, parlait de son match de football avec les enfants du quartier, et Wassim, à sa droite, essayait de construire une tour avec ses morceaux de pain — ce que leur mère interrompit avec un regard.\n\n— Baba, dit Souhayl d'une voix qu'il força d'être calme. Maman. J'ai quelque chose à vous dire.\n\nLe silence tomba sur la table comme un voile. Nawfel arrêta de parler. Wassim abandonna sa tour de pain. Aziza posa sa cuillère. Mehdi leva les yeux de son assiette et regarda son fils avec cette attention totale qu'il réservait aux moments importants.\n\n— J'ai raté mon examen de grammaire arabe, dit Souhayl. Pas un peu raté. Complètement raté. Ma copie était presque vide. J'ai oublié tout ce que vous m'aviez appris, Baba. Tout. Les règles de l'i'rab, les terminaisons, les cas grammaticaux... J'ai regardé la feuille et mon esprit était blanc. Comme une page vierge. Comme un désert.\n\nUn silence s'installa. Souhayl baissa les yeux, attendant la réprimande, la déception, les mots durs. Il méritait cela, se disait-il. Il avait échoué. Il avait déçu son père qui était professeur, déçu sa mère qui comptait sur lui, déçu ses frères qui le regardaient comme un exemple.\n\nMais ce qui vint n'était ni une réprimande ni une déception. Ce fut un rire doux — le rire de Mehdi, un rire qui sonnait comme de l'eau claire sur des cailloux.\n\n— Mon fils, dit Mehdi en se penchant vers lui, sais-tu ce que je vois en ce moment ? Je ne vois pas un garçon qui a échoué. Je vois un garçon qui a le courage de dire la vérité. Et crois-moi, Souhayl, le courage de dire « j'ai échoué » est bien plus rare — et bien plus précieux — que le talent de réussir du premier coup. Le Prophète ﷺ a dit : « Le croyant n'est pas mordu deux fois par le même serpent. » Tu as appris quelque chose aujourd'hui. Ce n'est pas un échec — c'est une leçon.\n\nAziza posa sa main sur la joue de Souhayl, et ses yeux — les mêmes yeux bruns et profonds que les siens — brillaient de fierté.\n\n— Je suis fière de toi, mon grand. Pas de tes notes — de ton honnêteté. Un cœur sincère vaut mieux qu'une copie parfaite.\n\nWassim, qui n'avait pas tout compris, leva son petit visage rond et déclara avec la logique irréfutable des enfants de six ans :\n\n— Moi non plus je n'aime pas les examens. Est-ce que ça veut dire que je suis courageux aussi ?\n\nTout le monde rit — et pour la première fois depuis l'examen, Souhayl rit aussi. Un vrai rire, qui venait du cœur, qui libérait quelque chose qui était resté coincé dans sa poitrine depuis le matin. Et dans ce rire, il sentit la honte s'envoler, comme la poussière que le vent emporte d'un vieux tapis qu'on secoue.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "J'ai raté mon examen, Baba. Complètement. Mon esprit était vide pendant toute l'épreuve. Je suis désolé. Je vous ai déçus.",
              emotion: 'sad',
            },
            {
              characterId: 'mehdi',
              text: "Tu ne nous as pas déçus, Souhayl. Le courage de dire la vérité vaut plus que mille examens réussis. Le Prophète ﷺ a dit : « Le croyant n'est pas mordu deux fois par le même serpent. » Tu as appris ta leçon. Maintenant, tu vas te relever.",
              emotion: 'wise',
            },
            {
              characterId: 'aziza',
              text: "Je suis fière de ton honnêteté, mon grand. Un cœur sincère vaut mieux qu'une copie parfaite. Allah voit ta sincérité, et Il te récompensera.",
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: "Moi aussi je suis fier de toi, Souhayl ! Même si je ne comprends pas trop ce qui s'est passé. Tu veux qu'on joue aux petites voitures pour fêter ?",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'sabr_ilm',
          lesson: {
            title: "As-Sabr fi al-'Ilm — La patience dans l'apprentissage",
            content:
              "Souhayl a appris que l'échec n'est pas la fin du chemin — c'est un virage. Ibn Al-Qayyim, l'un des plus grands savants de l'Islam, a écrit ses œuvres les plus profondes alors qu'il était emprisonné. Il enseignait que la patience (Sabr) est de trois sortes : la patience dans l'obéissance à Allah, la patience contre la désobéissance, et la patience face aux épreuves d'Allah. Souhayl a choisi d'affronter sa défaite avec honnêteté et courage, découvrant que le sabr ne signifie pas ne pas souffrir, mais continuer à avancer malgré la souffrance, en faisant confiance à Allah.",
            quote: 'إنما الصبر عند الصدمة الأولى',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st4c1s5b: Le poids du silence ---
        {
          id: 'st4c1s5b',
          chapterId: 'st4c1',
          title: 'Le poids du silence',
          narration: `Souhayl traversa le salon sans un mot et monta l'escalier jusqu'à sa chambre. Aziza leva les yeux de son tajine, un regard interrogateur dans les yeux, mais Souhayl ne lui laissa pas le temps de parler. Il ferma sa porte derrière lui et s'assit sur son lit, le dos contre le mur, les genoux ramenés contre sa poitrine.\n\nSa chambre était petite mais ordonnée — une bibliothèque en bois d'olivier remplie de livres, un tapis de prière dans le coin près de la fenêtre, un bureau sur lequel étaient posés ses cahiers et ses calames. La lumière de la lampe de poche qu'il avait allumée projetait des ombres longues sur les murs, et Souhayl sentit que ces ombres ressemblaient à ses pensées — sombres, étirées, déformées.\n\nIl avait choisi de se taire. Et immédiatement, il le regretta. Le silence ne le soulageait pas — il l'étouffait. Chaque seconde passée sans parler de son échec était une seconde de plus où le mensonge pesait sur lui, l'alourdissait, l'enfermait dans une prison invisible. « Baba va le savoir de toute façon, pensa-t-il. Le professeur lui dira. Et quand il le saura, il sera encore plus déçu — non pas de ma note, mais de mon silence. »\n\nNawfel frappa doucement à sa porte.\n\n— Souhayl ? Tu veux dîner ? Maman a fait le tajine aux pruneaux, ton préféré.\n\nSouhayl ouvrit la bouche pour dire « non merci » et referma sa porte. Mais quelque chose — un instinct, une mémoire, les paroles de Sidi Mu'adh — l'arrêta. « La patience commence par l'honnêteté envers soi-même. »\n\nIl ouvrit la porte. Nawfel était là, son visage d'enfant de sept ans illuminé par la lumière dorée du couloir.\n\n— Nawfel, dit Souhayl d'une voix rauque, j'ai raté mon examen aujourd'hui. L'examen de grammaire arabe. Je n'ai presque rien écrit sur ma copie.\n\nNawfel le regarda un long moment, sans dire un mot. Puis il fit quelque chose que Souhayl n'attendait pas — il lui fit un câlin. Un câlin simple, silencieux, chaleureux, comme seuls les enfants savent les faire.\n\n— Ce n'est pas grave, frérot, murmura Nawfel. Moi, au foot, j'ai raté trois buts hier. Trois ! Et aujourd'hui, j'en ai marqué deux. Tu vois ? On rate, et après on réussit. C'est comme ça, la vie.\n\nLes mots de son petit frère — si simples, si directs, si dénués de toute complexité — touchèrent Souhayl plus profondément que n'importe quel discours savant. Parce que Nawfel ne parlait pas de patience, de sabr, de philosophie islamique. Il parlait de foot. Et dans ce football imaginaire, les règles étaient les mêmes : on rate, on tombe, on se relève, on recommence. Toujours.\n\nSouhayl descendit l'escalier avec Nawfel et s'assit à la table. Il regarda son père droit dans les yeux et dit :\n\n— Baba, j'ai raté mon examen. Je veux que tu me réexpliques les règles de l'i'rab. Ce soir, si tu veux. Je ne veux plus fuir.`,
          dialogues: [
            {
              characterId: 'nawfel',
              text: "Frérot, ce n'est pas grave. Au foot, j'ai raté trois buts hier. Et aujourd'hui, j'en ai marqué deux. On rate, et après on réussit. C'est comme ça, la vie.",
              emotion: 'neutral',
            },
            {
              characterId: 'souhayl',
              text: "Merci, Nawfel... Tu sais, tu es plus sage que tu ne le crois. Baba, j'ai raté mon examen. Je veux que tu m'aides à me préparer pour le rattrapage. Ce soir, s'il te plaît.",
              emotion: 'determined',
            },
            {
              characterId: 'mehdi',
              text: "Bien sûr, mon fils. Après la prière d'Isha, nous nous installerons dans le salon et nous travaillerons ensemble. Tu as eu le courage de parler — le reste, nous le ferons ensemble.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c1s5a',
          background: 'home',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Désert de Hajar (صحراء هاجر)
    // ============================================================
    {
      id: 'st4c2',
      tomeId: 'souhayl_tome4',
      number: 2,
      title: 'Le Désert de Hajar',
      titleAr: 'صحراء هاجر',
      scenes: [
        // --- st4c2s1: Le manuscrit qui brille ---
        {
          id: 'st4c2s1',
          chapterId: 'st4c2',
          title: 'Le manuscrit qui brille',
          narration: `Trois jours s'étaient écoulés depuis la soirée où Souhayl avait avoué son échec à sa famille. Trois jours pendant lesquels il s'était réveillé avant l'aube chaque matin, avait prié le Fajr avec une concentration renouvelée, puis s'était assis avec son père pour étudier les règles de l'i'rab jusqu'à ce que chaque terminaison, chaque cas, chaque règle soit gravée dans sa mémoire comme une inscription dans la pierre. Mehdi était un professeur patient — il ne se fâchait jamais quand Souhayl se trompait, ne le pressait jamais d'aller plus vite, et expliquait chaque concept avec des exemples tirés du Coran et de la poésie arabe classique.\n\nMais la fatigue commençait à peser. Le quatrième matin, quand le réveil sonna avant l'aube, Souhayl sentit son corps crier de refus. Ses yeux brûlaient de manque de sommeil, ses épaules étaient lourdes, et son esprit — pourtant habituellement vif et curieux — semblait engourdi, comme si la fatigue y avait versé une couche de cire épaisse. Il resta immobile dans son lit, les yeux mi-clos, regardant les premiers rayons de soleil peindre le mur de sa chambre en rose et or, et il sentit l'envie de tout abandonner monter en lui comme une marée noire.\n\n— « Pourquoi continuer ? » chuchota-t-il dans l'obscurité de sa chambre. « Je suis fatigué. Je suis seulement un enfant. Peut-être que je ne suis pas fait pour les études. Peut-être que je suis fait pour autre chose — pour jouer, pour courir, pour être comme les autres enfants qui ne se couchent pas à dix heures du soir pour apprendre des règles de grammaire. »\n\nMais au même moment, un souvenir traversa son esprit comme un éclair — les yeux verts de Sidi Mu'adh, et ses mots : « La patience ne s'apprend pas dans les grandes épreuves — elle se cultive dans les petites. » Souhayl se leva avec un grognement, fit ses ablutions à l'eau froide, pria le Fajr, et après la prière, au lieu de retourner au lit comme chaque fibre de son corps le suppliait de faire, il enfila ses babouches et prit le chemin de la bibliothèque.\n\nLa porte de fer s'ouvrit comme toujours, l'escalier s'illumina sous ses pieds, et le murmure sacré l'accueillit. Mais quelque chose était différent ce matin. En entrant dans la salle circulaire, Souhayl remarqua qu'un des manuscrits sur l'étagère la plus proche brillait. Pas d'une lumière ordinaire — d'une lumière chaude, dorée, qui pulsait doucement comme un cœur qui bat, et qui illuminait les murs de reflets ambrés. Le manuscrit était relié en cuir brun, et sur sa couverture, des lettres arabes dorées formaient un mot que Souhayl lut avec émerveillement : « الصبر — As-Sabr — La Patience. »\n\nSidi Mu'adh était déjà là, assis sur son tapis, son regard posé sur le manuscrit lumineux avec une expression que Souhayl n'avait jamais vue sur le visage du sage — une expression de tendresse profonde, presque maternelle, comme si le livre contenait un souvenir infiniment précieux.\n\n— Souhayl, dit le sage d'une voix plus douce que d'habitude, ce matin, le manuscrit t'appelle. Ouvre-le. Ce qu'il contient va te montrer ce que signifie vraiment la patience — non pas dans les livres, mais dans la vie d'une femme qui a traversé le pire désert du monde avec un bébé dans les bras et la foi dans le cœur.\n\nSouhayl posa ses mains sur le manuscrit. Le cuir était chaud sous ses doigts, presque brûlant, comme si le livre contenait un feu ancien. Il l'ouvrit avec précaution, et les pages se mirent à tourner toutes seules, rapidement, comme si un vent invisible les feuilletait. Les lettres arabes se détachèrent des pages et commencèrent à tournoyer dans l'air, formant des spirales dorées qui s'élargirent, grandirent, et engloutirent la salle entière dans leur lumière.\n\nQuand la lumière se dissipa, Souhayl n'était plus dans la bibliothèque. Il se tenait debout au milieu d'un désert immense.`,
          dialogues: [
            {
              characterId: 'sidimuadh',
              text: "Ce manuscrit va te transporter dans le passé, Souhayl. Tu vas rencontrer une femme dont la patience a changé le cours de l'histoire. Souviens-toi : observe, écoute, et laisse ton cœur comprendre ce que tes yeux ne peuvent pas voir.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Le désert... mais où suis-je ? Il fait si chaud, et il n'y a rien... rien que du sable à perte de vue. Sidi Mu'adh, qu'est-ce que je dois faire ?",
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 'st4c2s2',
          background: 'desert',
        },

        // --- st4c2s2: Entre Safa et Marwa ---
        {
          id: 'st4c2s2',
          chapterId: 'st4c2',
          title: 'Entre Safa et Marwa',
          narration: `Le désert s'étendait dans toutes les directions comme une mer de sable dorée, immense, silencieuse, écrasante. Le soleil de plomb pendait au zénith dans un ciel d'un bleu si pur qu'il semblait peint, et la chaleur qui montait du sol déformait l'horizon en mirages tremblants où des oasis fantômes apparaissaient et disparaissaient comme des souvenirs. Le sable brûlait sous les pieds de Souhayl à travers ses babouches, et l'air qu'il respirait était si chaud et si sec qu'il lui semblait boire du feu à chaque inspiration.\n\nAu loin, Souhayl aperçut deux petites collines rocheuses, distantes l'une de l'autre de quelques centaines de mètres, qui se dressaient au-dessus de la plaine de sable comme deux dents anciennes. Sur l'une d'elles — la plus proche — il vit une silhouette humaine. Une femme. Elle se tenait au sommet de la colline, les yeux scrutant l'horizon avec une intensité désespérée, et Souhayl sentit que cette femme cherchait quelque chose — ou quelqu'un — avec toute l'urgence que donne l'amour.\n\nIl s'approcha et reconnut, avec un frisson qui n'avait rien à voir avec la chaleur, la femme décrite dans le Coran. C'était Hajar — Hajar la femme d'Ibrahim, la mère d'Isma'il. Elle portait un vêtement simple en laine brune, ses cheveux noirs étaient partiellement couverts d'un tissu usé par le soleil, et son visage — un visage que Souhayl trouva à la fois douloureux et lumineux — était celui d'une femme dont la beauté n'avait rien à voir avec l'apparence mais tout à voir avec la force de l'âme.\n\nÀ ses pieds, dans un berceau fait de branchages et de tissus, un bébé pleurait. Isma'il — le bébé qui deviendrait le père d'une nation — avait soif. Sa voix faible et aiguë se perdait dans l'immensité du désert, et chaque pleur était comme un couteau qui transperçait le cœur de Souhayl.\n\nHajar regardait dans toutes les directions, tournant son visage épuisé vers le nord, le sud, l'est, l'ouest, cherchant de l'eau — une goutte, une seule goutte — dans ce désert qui n'en avait pas. Ibrahim l'avait laissée ici, sur l'ordre d'Allah, avec seulement un sac de dattes et une outre d'eau. L'eau était finie. Les dattes étaient finies. Il ne restait rien.\n\nEt pourtant, Hajar ne pleurait pas. Souhayl le remarqua immédiatement — elle ne pleurait pas. Son visage était tendu, ses yeux rougis par le soleil et le chagrin, ses lèvres gercées par la soif, mais pas une larme ne coulait sur ses joues. Au lieu de pleurer, elle courait.\n\nElle descendit de la colline de Safa et courut à travers le sable brûlant jusqu'à la colline de Marwa, située de l'autre côté de la vallée. Souhayl la suivit, ses pieds brûlant dans le sable, et sur le sommet de Marwa, il la vit se tenir à nouveau sur la pointe des pieds, scrutant l'horizon, cherchant un voyageur, un chameau, une ombre, n'importe quoi qui puisse signifier la présence d'eau. Rien. Le désert était vide.\n\nAlors elle redescendit et courut vers Safa. Et de nouveau, elle monta au sommet et regarda. Rien. Et elle redescendit et courut vers Marwa. Et encore. Et encore. Sept fois, elle courut entre Safa et Marwa, ses pieds nus brûlant sur les pierres et le sable, son souffle court, son cœur battant, et à chaque fois qu'elle arrivait au sommet d'une colline et ne voyait rien, elle serrait les poings et repartait sans hésitation.\n\nSouhayl, épuisé après seulement deux allers-retours, s'arrêta et regarda Hajar avec des yeux emplis d'une admiration qui dépassait tout ce qu'il avait ressenti auparavant.\n\n— Comment... murmura-t-il, comment peut-elle continuer ? Elle n'a pas d'eau, pas de nourriture, un bébé qui pleure, un désert infini autour d'elle... Et elle court. Elle continue à courir. Pourquoi ne s'arrête-t-elle pas ?`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Hajar... elle court entre Safa et Marwa, encore et encore, sans s'arrêter. Son bébé pleure de soif et elle n'a rien à lui donner. Mais elle ne pleure pas, elle ne se donne pas vaincue. Comment est-ce possible ?",
              emotion: 'sad',
            },
          ],
          choices: [],
          nextSceneId: 'st4c2s3',
          background: 'desert',
        },

        // --- st4c2s3: Le miracle de Zamzam ---
        {
          id: 'st4c2s3',
          chapterId: 'st4c2',
          title: 'Le miracle de Zamzam',
          narration: `Souhayl s'approcha de Hajar pendant qu'elle se tenait au sommet de Safa, scrutant l'horizon pour la septième fois. De près, il pouvait voir les détails que la distance cachait — la sueur qui perlait sur son front, les sillons de fatigue creusés autour de ses yeux, les pierres et les épines qui s'étaient enfoncées dans ses pieds nus pendant ses courses épuisantes entre les deux collines. Et pourtant, malgré tout cela, il y avait dans son regard quelque chose d'extraordinaire — une lumière, une certitude, un calme qui n'avait rien à voir avec le désespoir.\n\nC'était la foi. Souhayl le comprit avec une clarté qui lui coupa le souffle. Ce n'était pas de la résignation — Hajar n'acceptait pas passivement son sort. Ce n'était pas de l'ignorance — elle savait parfaitement que la situation était désespérée. C'était quelque chose de bien plus profond, de bien plus puissant. C'était la certitude absolue qu'Allah ne l'abandonnerait pas. Cette certitude qui transforme le désespoir en action, la peur en courage, l'épuisement en force. Les Arabes ont un mot pour cela — Tawakkul — la confiance totale en Allah.\n\n— Ya Ibrahim ! cria Hajar vers le ciel, sa voix rauque mais ferme. Tu nous as laissés dans ce désert sur l'ordre d'Allah. Je sais que Allah ne nous abandonnera jamais. Je sais que Sa sagesse est plus grande que ma compréhension. Mais mon bébé a soif, ya Rabbi — Ô mon Seigneur — accorde-nous de l'eau, même une seule goutte, même la plus petite des gouttes !\n\nAu même instant, Souhayl entendit un bruit. Un bruit impossible, inattendu, miraculeux — le son de l'eau. Pas le murmure d'un fleuve lointain ou le clapotis d'une pluie imaginée, mais le bruit clair, net, distinct d'un jaillissement d'eau pure qui sourdait du sol aride. Hajar se retourna et vit — là, sous les pieds d'Isma'il, à l'endroit même où l'ange Jibril avait frappé le sol de son aile — une source d'eau cristalline qui jaillissait du sable avec une force joyeuse, comme si la terre elle-même avait attendu ce moment depuis la création du monde.\n\n— Zamzam ! murmura Souhayl, les yeux écarquillés. Zamzam ! La source sacrée !\n\nHajar cria de joie — un cri qui n'était pas un cri de soulagement seulement, mais un cri de gratitude, de reconnaissance, de louange à Allah qui avait exaucé sa patience. Elle courut vers la source et, avec ses mains tremblantes, creusa un bassin dans le sable pour retenir l'eau, l'empêchant de se perdre dans le désert. Puis elle prit Isma'il dans ses bras, le porta jusqu'à l'eau, et lui donna à boire. Le bébé but avidement, ses petites lèvres s'agrippant aux mains de sa mère comme à la vie elle-même.\n\nSouhayl s'agenouilla près de la source, immergea ses mains dans l'eau, et la but. Elle était fraîche — incroyablement fraîche, comme si elle venait d'un glacier invisible — et douce, avec un goût qu'il n'avait jamais trouvé dans aucune autre eau, un goût qui ressemblait à la paix. En la buvant, il sentit toute sa fatigue s'évaporer, toutes ses doutes se dissiper, et une énergie nouvelle envahir son corps comme une marée de lumière.\n\nLa voix de Sidi Mu'adh résonna autour de lui, comme si elle venait de partout à la fois — du ciel, de la terre, de l'eau elle-même :\n\n— Souhayl, vois-tu ce que la patience a accompli ? Hajar ne savait pas qu'Allah enverrait un ange. Elle ne savait pas qu'une source jaillirait du désert. Elle ne savait pas que son fils deviendrait le père d'une grande nation. Tout ce qu'elle savait, c'était qu'Allah est Ar-Razzaq — le Pourvoyeur — et que Sa promesse ne faillit jamais. Et cette certitude, Souhayl, cette confiance absolue — c'est cela, le Tawakkul. Ce n'est pas l'inaction. Ce n'est pas attendre sans rien faire. C'est faire de son mieux tout en se confiant totalement au résultat qu'Allah a choisi.\n\nSouhayl regarda Hajar, qui berçait Isma'il en lui chantant une berceuse douce dans une langue ancienne, et il comprit quelque chose de fondamental : la patience n'est pas passive. Hajar n'avait pas attendu que l'eau vienne à elle — elle avait couru sept fois entre deux collines sous un soleil de plomb, les pieds ensanglantés, le cœur brisé, mais elle n'avait pas arrêté de chercher, de courir, d'espérer. La patience, la vraie patience, est une action. C'est le courage de continuer quand tout te dit d'abandonner.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Tawakkul... La confiance en Allah... Hajar ne savait pas ce qui allait se passer, mais elle a continué à courir, à chercher, à espérer. Elle n'a pas attendu — elle a agi. C'est ça, la vraie patience ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "Exactement, Souhayl. Le Tawakkul n'est pas de croire qu'Allah fera le travail à ta place. C'est de faire de ton mieux avec les moyens qu'Il t'a donnés, puis de Lui faire confiance pour le reste. Hajar a couru entre Safa et Marwa — elle a fait sa part. Et Allah a fait la Sienne. C'est le pacte éternel entre le croyant et son Créateur.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c2s4',
          background: 'desert',
        },

        // --- st4c2s4: La leçon du désert ---
        {
          id: 'st4c2s4',
          chapterId: 'st4c2',
          title: 'La leçon du désert',
          narration: `Le monde autour de Souhayl commença à se transformer. Le désert de sable doré devint translucide, les collines de Safa et Marwa s'estompèrent comme des aquarelles sous la pluie, et la source de Zamzam — cette source miraculeuse qui jaillissait du cœur de la terre depuis des millénaires — réduisit, rétrécit, se transforma en un point lumineux qui pulsait doucement au milieu d'une brume dorée. Hajar et Isma'il disparurent dans la lumière, et Souhayl se retrouva de nouveau dans la bibliothèque souterraine, assis en tailleur sur son tapis de prière, le manuscrit ouvert sur ses genoux.\n\nMais quelque chose avait changé en lui — quelque chose de profond, de fondamental, de permanent. C'était comme si une graine avait été plantée dans son cœur et qu'elle avait déjà commencé à pousser, envoyant des racines solides dans les profondeurs de son être. Il sentait cette racine — cette certitude tranquille que, quoi qu'il arrive, Allah est là, qu'Il ne l'abandonnera jamais, et que chaque épreuve est un pont vers quelque chose de meilleur.\n\nSidi Mu'adh le regardait avec ce sourire qui éclairait les cœurs, et ses yeux verts brillaient d'une lueur qui ressemblait à la fierté d'un maître voyant son élève franchir un cap important.\n\n— Tu as compris, dit le sage simplement. Hajar n'a pas su ce qui l'attendait. Elle ne savait pas que son épreuve deviendrait l'un des piliers du Hajj — le pèlerinage que des millions de musulmans accomplissent chaque année en courant entre Safa et Marwa, exactement comme elle l'a fait. Elle ne savait pas que la source de Zamzam continuerait à couler pendant des milliers d'années, désaltérant les pèlerins du monde entier. Tout ce qu'elle savait, c'est qu'Allah est Al-Hayy — le Vivant — et que Sa miséricorde ne s'épuise jamais.\n\nSouhayl ferma le manuscrit. Les lettres dorées sur la couverture — « الصبر — As-Sabr » — brillèrent une dernière fois, puis s'éteignirent doucement, comme une étoile qui se couche. Le livre redevenait un livre ordinaire — ou du moins, aussi ordinaire qu'un livre puisse l'être dans cette bibliothèque extraordinaire.\n\n— Sidi Mu'adh, dit Souhayl lentement, en pesant chaque mot, je crois que je comprends maintenant. Quand j'ai raté mon examen, j'ai voulu abandonner parce que je pensais que l'échec était la fin. Mais Hajar... Hajar était dans une situation infiniment pire — un désert, un bébé affamé, pas d'eau, pas d'espoir humain — et elle n'a pas abandonné. Elle a couru. Encore et encore. Parce qu'elle savait qu'Allah ne la laisserait pas tomber.\n\n— Et toi, Souhayl ? demanda Sidi Mu'adh avec un regard perçant. Est-ce que tu sais qu'Allah ne te laissera pas tomber ?\n\nSouhayl réfléchit longuement. Puis il hocha la tête, et ce hochement n'était pas un geste automatique — c'était une décision, un choix conscient, un acte de foi.\n\n— Je ne le savais pas avant. Mais maintenant, je le sais. Ou du moins, je commence à le savoir. Et si Hajar a pu courir entre Safa et Marwa avec des pieds ensanglantés et un cœur brisé, alors moi, je peux étudier mes règles de grammaire. Je peux me lever tôt. Je peux essayer encore. Parce que Allah est avec ceux qui patientent — إِنَّ اللَّهَ مَعَ الصَّابِرِينَ.\n\nSidi Mu'adh ferma les yeux et un sourire profond se dessina sur ses lèvres, un sourire qui semblait contenir des milliers d'années de sagesse et d'amour.\n\n— Ce verset, Souhayl — « Certes, Allah est avec les patients » — est l'un des plus répétés dans le Coran. Il apparaît plus de douze fois, à chaque fois dans un contexte différent, comme si Allah voulait s'assurer que Ses serviteurs ne l'oublient jamais. Parce que la patience, mon enfant, est le ciment qui tient ensemble tout l'édifice de la foi. Sans patience, il n'y a pas de prière persistante, pas de jeûne accompli, pas de savoir acquis, pas de justice rendue, pas d'amour durable. La patience est le souffle de l'âme croyante.\n\nSouhayl se leva, et quand il remonta l'escalier de la bibliothèque, il sentit quelque chose dans sa poitrine qu'il n'avait jamais ressenti auparavant — une force tranquille, une certitude paisible, comme un pont invisible entre son cœur et le ciel, un pont fait non pas de pierre ou de bois, mais de confiance. Un pont de lumière.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Si Hajar a pu courir entre Safa et Marwa avec des pieds ensanglantés et un cœur brisé, alors moi, je peux étudier mes règles de grammaire. Je peux essayer encore. Parce qu'Allah est avec ceux qui patientent.",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "La patience est le souffle de l'âme croyante, Souhayl. Sans elle, rien de grand ne se construit. Tu as aujourd'hui compris quelque chose que beaucoup d'adultes n'ont jamais compris : l'épreuve n'est pas la fin du chemin — elle est le chemin lui-même. Et sur ce chemin, tu n'es jamais seul.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'At-Tawakkul — La confiance en Allah',
            content:
              "Hajar, la mère d'Isma'il, a été laissée seule dans le désert de La Mecque avec son bébé, sans eau ni nourriture. Mais au lieu de désespérer, elle a couru entre Safa et Marwa, cherchant de l'eau avec une patience et une confiance totales en Allah. En récompense de sa patience et de son Tawakkul, Allah a fait jaillir la source de Zamzam sous les pieds de son bébé — une source qui coule encore aujourd'hui et désaltère des millions de pèlerins. Le Tawakkul ne signifie pas attendre sans rien faire — il signifie faire de son mieux tout en se confiant au résultat qu'Allah a choisi. Comme l'a dit le Prophète ﷺ : « Si vous vous en remettez à Allah comme Il mérite de l'être, Il vous pourvoira comme Il pourvoit les oiseaux qui partent le matin le ventre vide et reviennent le soir le ventre rempli. »",
            quote: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — La Voix de Bilal (صوت بلال)
    // ============================================================
    {
      id: 'st4c3',
      tomeId: 'souhayl_tome4',
      number: 3,
      title: 'La Voix de Bilal',
      titleAr: 'صوت بلال',
      scenes: [
        // --- st4c3s1: Le manuscrit de la voix ---
        {
          id: 'st4c3s1',
          chapterId: 'st4c3',
          title: 'Le manuscrit de la voix',
          narration: `Une semaine s'était écoulée depuis le voyage dans le désert avec Hajar, et pendant ces sept jours, Souhayl avait travaillé avec une ardeur qu'il ne s'était jamais connue. Chaque matin, il se levait avant le Fajr, priait, puis ouvrait ses cahiers et révisait les règles de grammaire arabe que son père lui avait enseignées. Chaque soir, après le dîner, il s'asseyait avec Mehdi dans le salon et ils travaillaient ensemble pendant deux heures — analysant des versets du Coran, décomposant des phrases en sujets, verbes et compléments, apprenant à reconnaître chaque cas grammatical comme un médecin reconnaît les symptômes d'une maladie.\n\nEt pourtant, malgré tous ses efforts, malgré la leçon de Hajar et la sagesse d'Ibn Al-Qayyim, Souhayl sentait encore une ombre dans son cœur — une peur sourde, tenace, insidieuse, qui revenait chaque fois qu'il pensait à l'examen de rattrapage qui approchait. La peur de retomber. La peur de revivre la même humiliation. La peur que tout son travail ne serve à rien et que, le jour J, son esprit se verrouille à nouveau comme une porte rouillée.\n\nLe soir du huitième jour, Souhayl descendit une fois de plus à la bibliothèque. La porte de fer s'ouvrit, l'escalier l'accueillit, et le murmure sacré — « اقرأ — Lis... » — résonna dans la pénombre. Mais cette fois, le murmure était différent. Au lieu du mot « Lis », Souhayl entendait autre chose — un son grave, puissant, mélodieux, qui montait et descendait comme les vagues d'un océan invisible. C'était une voix — une voix humaine d'une beauté surnaturelle — qui récitait les paroles de l'adhan, l'appel à la prière : « Allahu Akbar — Allah est le plus Grand... Allahu Akbar... Ach-hadu an la ilaha illa Allah — J'atteste qu'il n'y a de divinité qu'Allah... »\n\nLa voix emplissait la bibliothèque comme l'eau emplit un verre, et chaque syllabe faisait vibrer les murs, les colonnes, les manuscrits sur les étagères. Souhayl sentit des frissons lui parcourir le corps — pas de peur cette fois, mais d'admiration, de respect, comme si son âme reconnaissait quelque chose de sacré dans cette voix qui dépassait l'entendement.\n\nSidi Mu'adh l'attendait, assis sur son tapis, mais cette fois le sage n'avait pas de livre ouvert sur ses genoux. Il écoutait la voix, les yeux fermés, son visage baigné d'une sérénité si profonde qu'il ressemblait à la surface d'un lac au petit matin.\n\n— Tu l'entends, dit-il quand Souhayl s'assit. C'est la voix qui a changé l'histoire de l'Islam. La voix d'un homme qui était un esclave, qui a été torturé pour sa foi, qui a été traîné dans les rues de La Mecque sous le soleil brûlant avec une pierre énorme sur sa poitrine, et qui, malgré tout cela, n'a jamais prononcé un seul mot de renoncement. Cette voix, Souhayl, est la voix de Bilal ibn Rabah — le premier muezzin de l'Islam.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Quelle voix... C'est la plus belle voix que j'aie jamais entendue. Elle me donne des frissons partout dans le corps. Qui est Bilal, Sidi Mu'adh ? Et comment un esclave a-t-il pu devenir le premier muezzin ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est justement parce qu'il était esclave que sa voix est si puissante, Souhayl. Parce que cette voix n'a pas été forgée par le confort ou la facilité — elle a été forgée par la souffrance, la persévérance et une foi inébranlable. Viens, je vais te montrer comment.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c3s2',
          background: 'inner_world',
        },

        // --- st4c3s2: Les chaînes de Bilal ---
        {
          id: 'st4c3s2',
          chapterId: 'st4c3',
          title: 'Les chaînes de Bilal',
          narration: `Sidi Mu'adh se leva et marcha vers une étagère que Souhayl n'avait jamais remarquée auparavant — elle était située dans l'ombre la plus profonde de la bibliothèque, derrière une colonne de marbre, et ses livres étaient reliés en cuir noir, sans inscription, sans décoration, comme si leur contenu était trop précieux — ou trop douloureux — pour être exhibé. Le sage en retira un manuscrit dont les pages étaient épaisses et rugueuses, comme si elles avaient été fabriquées non pas à partir de papier, mais à partir de quelque chose de plus ancien, de plus brut.\n\n— Ce manuscrit, dit Sidi Mu'adh en le posant devant Souhayl, contient l'histoire de Bilal ibn Rabah telle qu'elle a été racontée par ceux qui l'ont connue. Lis.\n\nSouhayl ouvrit le livre et, comme avec le manuscrit de Hajar, les lettres se détachèrent des pages et commencèrent à tournoyer dans l'air. Mais cette fois, la lumière n'était pas dorée — elle était rouge, cuivrée, comme la couleur du soleil couchant sur les montagnes de l'Atlas. Et le monde qui se forma autour de Souhayl n'était pas un désert paisible — c'était La Mecque, au temps où l'Islam naissait dans la persécution.\n\nLa ville surgit autour de lui avec une brutalité qui le fit reculer d'un pas. Des ruelles étroites et poussiéreuses, des maisons en pierre sèche, des marchés bruyants où des hommes en burnous blancs criaient des prix en agitant les bras, et au milieu de tout cela, une chaleur oppressante qui collait la poussière à la peau et asséchait la gorge. Mais ce n'était pas la chaleur qui troubla Souhayl — c'était l'atmosphère. L'air lui-même semblait chargé de haine, de peur, de cruauté. Les passants ne souriaient pas. Les enfants ne jouaient pas. Tout le monde semblait pressé, nerveux, comme si une menace invisible planait au-dessus de la ville.\n\nEt puis Souhayl le vit. Au centre d'une place, sous un soleil qui frappait la terre comme un marteau sur de l'enclume, un homme était allongé sur le sable brûlant, les bras écartés, les chevilles attachées par des cordes épaisses à des piquets plantés dans le sol. Sur sa poitrine, une pierre énorme — si lourde que Souhayl, en la regardant, sentit son propre souffle se couper — le maintenait cloué au sol. Autour de lui, trois hommes se tenaient debout, le visage tordu par la méchanceté, et l'un d'eux tenait un fouet de cuir qu'il faisait tournoyer au-dessus de sa tête.\n\nL'homme au sol était noir — sa peau était d'un brun si profond qu'elle semblait absorber la lumière — et son corps était couvert de cicatrices, de bleus, de marques de fouet qui dessinaient sur sa peau une carte de la souffrance. Ses lèvres étaient fendues et sèches, ses yeux à moitié clos par l'épuisement, mais même dans cet état de faiblesse extrême, il y avait dans son regard quelque chose d'indomptable — une flamme que ni la douleur ni la peur ni les années d'esclavage n'avaient réussi à éteindre.\n\n— C'est Bilal, murmura une voix près de l'oreille de Souhayl — la voix de Sidi Mu'adh, qui semblait être à côté de lui bien qu'il ne puisse pas le voir. Regarde bien, Souhayl. Regarde ce que la persécution a fait de son corps. Et regarde ce qu'elle n'a pas pu faire de son âme.\n\nL'un des bourreaux se pencha sur Bilal et cracha ses mots comme du venin :\n\n— Prononce le nom d'Al-Lat ! Prononce le nom d'Al-Uzza ! Renonce à cette religion de Muhammad, et tu seras libre ! Tu sera riche ! Tu auras une maison, des esclaves, tout ce que tu veux ! Il suffit d'un mot — UN SEUL MOT — et tout cela s'arrête !\n\nUn silence lourd tomba sur la place. Souhayl retint son souffle. Son cœur battait si fort qu'il l'entendait dans ses tempes, dans ses poignets, dans tout son corps. Et dans ce silence, Bilal ouvrit la bouche. Ses lèvres, si sèches, si fendues, si douloureuses, se mouillèrent d'un sang invisible — le sang de la voix, le sang du courage — et il prononça, d'une voix à peine audible mais qui porta plus loin que n'importe quel cri :\n\n— Ahad... Ahadun... Ahad... Un... Un seul... Un seul... ALLAH EST UN. IL N'Y A DE DIVINITÉ QUE LUI. TUEZ-MOI SI VOUS VOULEZ. JE NE DIRAI PAS AUTRE CHOSE. — أحد أحد أحد\n\nLa voix monta dans l'air chaud de La Mecque comme un oiseau blessé qui refuse de tomber. Elle traversa les ruelles, monta sur les toits, et se répandit dans le ciel. Et Souhayl comprit, avec une certitude qui lui fendit le cœur, qu'il assistait à l'un des moments les plus sacrés de toute l'histoire de l'humanité — le moment où un homme, nu, blessé, enchaîné, écrasé par une pierre, avait choisi de mourir plutôt que de renoncer à sa foi.\n\nLes larmes coulaient sur les joues de Souhayl. Il ne cherchait pas à les retenir. Elles tombaient sur le sable brûlant de La Mecque — le sable de quatorze siècles en arrière — et il sentait que chaque larme était une prière, un hommage, un acte de respect envers cet homme prodigieux dont le corps était brisé mais dont l'âme était plus grande que le ciel.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ahad... Ahad... Un seul Dieu... Même avec cette pierre sur sa poitrine, même avec ces chaînes, même avec la mort devant lui, il n'a pas cédé. Il n'a pas prononcé un seul mot de renoncement. Comment est-ce possible ? Comment un être humain peut-il être aussi fort ?",
              emotion: 'sad',
            },
            {
              characterId: 'sidimuadh',
              text: "Ce n'est pas sa force, Souhayl. C'est sa foi. Bilal n'était pas plus fort que les autres hommes — il croyait plus. Sa certitude en Allah était plus grande que la pierre sur sa poitrine, plus grande que les chaînes à ses pieds, plus grande que la mort elle-même. Et cette certitude, mon enfant, est disponible pour chaque croyant — pour toi, pour moi, pour n'importe qui qui place sa confiance en Allah.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c3s3',
          background: 'desert',
        },

        // --- st4c3s3: Le premier adhan ---
        {
          id: 'st4c3s3',
          chapterId: 'st4c3',
          title: 'Le premier adhan',
          narration: `La scène changea autour de Souhayl comme les pages d'un livre qu'on tourne. La La Mecque de la persécution s'effaça, les bourreaux, la place, la pierre, les chaînes — tout disparut dans un tourbillon de lumière cuivrée. Et quand la lumière se dissipa, Souhayl se retrouva dans un lieu qu'il reconnaissait immédiatement : Médine, la ville illuminée — Al-Madinah An-Nabi — la Cité du Prophète ﷺ.\n\nC'était le matin. Le ciel de Médine était d'un bleu si pur qu'on aurait dit qu'il venait d'être créé, et la lumière du soleil levant dorait les toits des maisons et les dômes des mosquées d'une teinte chaude et généreuse. Des palmiers dattiers se balançaient doucement dans une brise légère qui sentait le jasmin et la terre mouillée, et des oiseaux chantaient dans les branches avec une joie qui semblait saluer le jour qui naissait.\n\nSouhayl se tenait devant une construction simple — les premiers murs de ce qui allait devenir la mosquée du Prophète ﷺ. Les murs étaient en briques crues et en troncs de palmiers, le toit était fait de feuilles de palmier tressées, et le sol était simplement de la terre battue. Mais malgré sa simplicité, ce lieu irradiait une lumière qui n'avait rien à voir avec le soleil — une lumière spirituelle, une présence sacrée, comme si chaque pierre, chaque grain de sable, chaque brin d'herbe autour de cette mosquée était béni.\n\nEt là, devant la porte de la mosquée, Souhayl vit un homme qui se tenait debout, les pieds nus sur la terre tiède, les bras le long du corps, le visage levé vers le ciel. C'était Bilal — mais pas le Bilal brisé et enchaîné qu'il avait vu à La Mecque. C'était un Bilal libéré, transfiguré, dont le corps portait encore les marques de la torture mais dont les yeux brillaient d'une joie si intense, si pure, si irradiante qu'elle illuminait tout son visage comme une lampe intérieure.\n\nAbu Bakr As-Siddiq, le meilleur ami du Prophète ﷺ, l'homme qui avait payé la liberté de Bilal de ses propres deniers, se tenait à proximité, et le Prophète ﷺ lui-même — Muhammad ﷺ — était assis à l'intérieur de la mosquée, ses compagnons autour de lui. L'attente était palpable — quelque chose d'extraordinaire allait se produire.\n\nEt Bilal ouvrit la bouche. Sa voix monta dans le ciel de Médine comme un minaret invisible, comme une colonne de lumière sonore qui perça les nuages et atteignit le Trône divin. Chaque mot de l'adhan était une merveille — « Allahu Akbar — Allah est le plus Grand » — la voix de Bilal était grave et puissante, ample et mélodieuse, comme si les montagnes elles-mêmes avaient appris à parler. « Ach-hadu an la ilaha illa Allah — J'atteste qu'il n'y a de divinité qu'Allah » — et Souhayl sentit chaque syllabe résonner dans sa poitrine comme un écho de l'éternité. « Ach-hadu anna Muhammadan Rasulullah — J'atteste que Muhammad est le Messager d'Allah » — et les larmes de Souhayl coulèrent à nouveau, mais cette fois ce n'étaient pas des larmes de tristesse — c'étaient des larmes de gratitude, de reconnaissance, d'émerveillement devant la beauté de ce moment.\n\n« Hayya 'ala as-Salah — Venez à la prière ! Hayya 'ala al-Falah — Venez à la réussite ! » — et Souhayl comprit, avec une clarté aveuglante, que ces mots n'étaient pas seulement un appel à la prière — c'était un appel à la vie, un appel au courage, un appel à la persévérance. « Venez à la réussite » — la réussite dont parlait Bilal n'était pas la réussite d'un examen ou d'un concours. C'était la réussite de l'âme qui ne cède pas, qui ne se rend pas, qui continue à avancer même quand le monde entier lui dit d'abandonner.\n\nQuand l'adhan fut terminé, le silence qui suivit fut d'une profondeur sacrée. Le Prophète ﷺ regarda Bilal avec un sourire qui contenait tout l'amour du monde, et dit : « Ô Bilal, j'ai entendu tes empreintes de pas au Paradis, devant moi, dans le Jardin. » — يا بلال إني سمعت دف نعليك بين يدي في الجنة.\n\nSouhayl essuya ses larmes et murmura : « Les empreintes de pas de Bilal... au Paradis... Un ancien esclave, torturé, humilié, et ses pas sont devant ceux du Prophète au Paradis... C'est ça, la vraie grandeur. C'est ça, la vraie réussite. »`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Les pas de Bilal au Paradis... devant ceux du Prophète ! Un esclave, un homme torturé, et c'est lui qui a cet honneur. Pas les riches, pas les puissants, pas ceux qui n'ont jamais souffert. Bilal. Parce qu'il n'a jamais abandonné.",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "C'est la leçon la plus importante de toutes, Souhayl. Allah ne regarde pas ton passé, ni ton apparence, ni tes richesses. Il regarde ton cœur et ta constance. Bilal a prouvé que la véritable grandeur ne se mesure pas à ce qu'on possède, mais à ce qu'on est prêt à endurer pour sa foi. Le mot « Hilm » en arabe signifie la retenue, la maîtrise de soi, le sang-froid face à l'adversité. C'est la plus noble des vertus, et Bilal en est le plus bel exemple.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st4c3s4',
          background: 'mosque',
        },

        // --- st4c3s4: Le pont de lumière ---
        {
          id: 'st4c3s4',
          chapterId: 'st4c3',
          title: 'Le pont de lumière',
          narration: `Souhayl se retrouva de nouveau dans la bibliothèque, le manuscrit noir refermé sur ses genoux, la voix de Bilal résonnant encore dans ses oreilles comme un écho lointain mais tenace. La lumière de la bibliothèque lui sembla différente ce soir — plus chaude, plus dorée, plus vivante, comme si les lampes sacrées elles-mêmes célébraient ce que Souhayl venait de comprendre.\n\nIl resta assis en silence pendant un long moment, les yeux fermés, laissant les images, les sons, les émotions de son voyage se déposer dans son cœur comme des couches de sédiment au fond d'un fleuve. Les images de Bilal sous la pierre — son regard indomptable, ses lèvres fissurées murmurant « Ahad, Ahad ». Les images de Hajar courant entre Safa et Marwa — ses pieds nus, son bébé affamé, sa confiance absolue. Les mots d'Ibn Al-Qayyim dans sa prison froide — « Ne maudis jamais la douleur, car elle est le creuset dans lequel Allah forge les âmes les plus nobles. »\n\nTrois êtres. Trois épreuves. Trois formes de patience. Et une seule leçon : ne jamais abandonner.\n\n— Sidi Mu'adh, dit Souhayl en ouvrant les yeux, je suis prêt.\n\n— Prêt pour quoi ? demanda le sage avec un sourire malicieux.\n\n— Prêt pour mon examen de rattrapage. Prêt à tout donner. Prêt à ne pas abandonner, quoi qu'il arrive. Bilal a enduré la torture sans céder. Hajar a couru dans le désert sans eau. Ibn Al-Qayyim a écrit ses plus belles œuvres dans une cellule de prison. Et moi ? Qu'est-ce que j'ai à craindre ? Un examen ? Une feuille de papier et des questions de grammaire ? Non, Sidi Mu'adh. Je n'ai plus peur. Pas parce que je suis sûr de réussir, mais parce que je sais maintenant que l'échec n'est pas une défaite — c'est une étape. Et chaque étape me rapproche de la réussite.\n\nSidi Mu'adh leva les yeux au plafond voûté de la bibliothèque, et ses yeux verts brillèrent d'une lueur que Souhayl n'avait jamais vue — une lueur qui ressemblait à la fierté, à la joie, à l'accomplissement, comme si un maître voyait son élève franchir le seuil qui sépare l'enfance de la sagesse.\n\n— Souhayl, dit-il lentement, chaque mot pesé comme de l'or, tu as aujourd'hui appris la leçon la plus difficile et la plus importante de toutes. Plus difficile que la mémorisation du Coran. Plus importante que la maîtrise de la grammaire arabe. Plus profonde que n'importe quel savoir que cette bibliothèque contient. Tu as appris que la vie est un pont — un pont fait de patience, de confiance et de courage — et que ce pont mène quelque part. Il mène vers Allah.\n\nLe vieillard se leva, marcha lentement vers l'une des étagères les plus reculées, et en retira un dernier manuscrit — celui-ci était relié en cuir blanc, pur et immaculé comme la neige du Haut Atlas, et sur sa couverture, des lettres dorées formaient le mot : « النور — An-Nur — La Lumière. »\n\n— Ce manuscrit, dit Sidi Mu'adh, est le pont. Le pont entre la patience et la réussite, entre l'effort et la récompense, entre la terre et le ciel. Il s'appelle « Le Pont de Lumière » — جسر النور — parce que c'est exactement ce qu'il est. Chaque pas que tu fais sur ce pont est un pas vers Allah, et chaque pas est éclairé par la lumière de ta patience.\n\nSouhayl prit le manuscrit. Il était chaud entre ses mains, d'une chaleur vivante et réconfortante, comme la main d'un parent sur l'épaule de son enfant. Il ne l'ouvrit pas — il n'en avait pas besoin. Il sentait que les mots à l'intérieur n'étaient pas faits pour être lus, mais pour être vécus.\n\nQuand il remonta l'escalier de la bibliothèque et poussa la porte de fer, la nuit de Fès l'accueillit avec un ciel étoilé d'une beauté extraordinaire. Les étoiles semblaient plus brillantes que d'habitude, plus proches, comme si elles s'étaient penchées pour regarder Souhayl sortir de son voyage. Les ruelles de la médina étaient silencieieuses, baignées d'une lumière argentée, et les seuls bruits étaient le chant lointain d'un muezzin et le doux clapotis d'une fontaine cachée quelque part dans le dédale des rues.\n\nSouhayl leva les yeux vers les étoiles et murmura les mots que Bilal avait prononcé sous la torture, les mots que Hajar avait portés dans son cœur au désert, les mots qu'Ibn Al-Qayyim avait écrits dans sa cellule :\n\n— Hasbunallahu wa ni'mal wakil — Allah nous suffit, et quel excellent protecteur ! — حسبنا الله ونعم الوكيل\n\nEt dans la nuit silencieuse de Fès, Souhayl Benali sentit quelque chose changer en lui — un pont invisible se construisait dans son cœur, un pont de lumière qui reliait sa peur à son courage, son échec à sa réussite, sa faiblesse à sa force. Et sur ce pont, il avançais pas à pas, avec la patience d'Hajar, la confiance de celle qui sait qu'Allah ne déçoit jamais, et le courage de Bilal — le premier muezzin, l'homme qui avait prouvé au monde entier que la voix la plus puissante n'est pas celle qui crie le plus fort, mais celle qui ne cède jamais.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Sidi Mu'adh, je suis prêt. Bilal a enduré la torture. Hajar a traversé le désert. Ibn Al-Qayyim a écrit dans sa prison. Et moi, je vais passer mon examen avec courage. L'échec n'est pas une défaite — c'est une étape. Et chaque étape me rapproche d'Allah.",
              emotion: 'determined',
            },
            {
              characterId: 'sidimuadh',
              text: "Tu as appris la leçon la plus difficile de toutes, Souhayl. La vie est un pont fait de patience, de confiance et de courage. Chaque pas sur ce pont est éclairé par la lumière de ta constance. Souviens-toi toujours : Allah est avec ceux qui patientent. Et toi, mon enfant, tu es désormais l'un d'entre eux.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          earnedBadgeId: 'hilm',
          lesson: {
            title: 'Al-Hilm — La maîtrise de soi et la constance',
            content:
              "Bilal ibn Rabah était un esclave abyssinien qui a subi les pires tortures pour sa foi en l'Islam. Ses bourreaux ont posé une pierre énorme sur sa poitrine sous le soleil brûlant de La Mecque, le pressant de renoncer à sa religion. Mais Bilal n'a prononcé qu'un mot — « Ahad, Ahad, Ahad — Un, Un, Un seul Dieu » — et n'a jamais cédé. Plus tard, le Prophète ﷺ l'a choisi comme premier muezzin de l'Islam, et lui a dit : « J'ai entendu tes empreintes de pas au Paradis, devant moi. » Le Hilm — la maîtrise de soi, la constance face à l'adversité, le sang-froid dans l'épreuve — est l'une des plus nobles vertus de l'Islam. Comme l'a dit le Prophète ﷺ : « Le fort n'est pas celui qui vainc les gens par la force physique, mais le fort est celui qui se maîtrise dans la colère. » Souhayl a appris de Bilal, de Hajar et d'Ibn Al-Qayyim que les plus grandes victoires ne se remportent pas par la force brute, mais par la constance du cœur et la patience de l'âme.",
            quote: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['doute', 'peur', 'abandon'],
  spiritualLesson:
    "As-Sabr — la patience — est l'une des plus grandes vertus de l'Islam. Ce n'est pas l'absence de souffrance, mais la capacité à continuer malgré la souffrance. Ibn Al-Qayyim a enseigné que la douleur est le creuset où Allah forge les âmes nobles. Hajar a montré que la confiance en Allah (Tawakkul) transforme le désespoir en action. Et Bilal a prouvé que la constance (Hilm) face à l'épreuve est plus puissante que n'importe quelle force humaine. Les plus grandes victoires se remportent non pas par la force, mais par la constance.",
};
