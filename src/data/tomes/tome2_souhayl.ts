import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome2_souhayl: Tome = {
  id: 'souhayl_tome2',
  number: 2,
  title: 'Les Gardiens du Savoir',
  titleAr: 'حراس المعرفة',
  subtitle: "L'épreuve de la Vérité et de la Confiance",
  description:
    "Devenu gardien de la bibliothèque cachée sous la Qarawiyyin, Souhayl est initié aux histoires des plus grands savants de l'Islam à travers des rencontres extraordinaires. Dans ce second tome, il fait face à l'épreuve de la vérité et de la confiance : quand Al-Ghazali lui montre que le savoir sans sincérité est une prison dorée, quand Ibn Sina lui enseigne le prix de l'honnêteté intellectuelle, et quand Fatima Al-Fihri lui révèle que le savoir le plus précieux est celui qu'on transmet avec amour. Souhayl devra prouver qu'il est digne de la confiance que Sidi Ibrahim lui a accordée.",
  theme: 'As-Sidq wa al-Amana — La Vérité et la Confiance',
  coverImage: '/images/souhayl-tome2-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — Le Fantôme d'Al-Ghazali (شبح الغزالي)
    // ============================================================
    {
      id: 'st2c1',
      tomeId: 'souhayl_tome2',
      number: 1,
      title: "Le Fantôme d'Al-Ghazali",
      titleAr: 'شبح الغزالي',
      scenes: [
        // --- st2c1s1: Le manuscrit lumineux ---
        {
          id: 'st2c1s1',
          chapterId: 'st2c1',
          title: 'Le manuscrit lumineux',
          narration: `Deux semaines s'étaient écoulées depuis que Souhayl avait reçu le pendentif en forme de lampe du gardien, et depuis ce jour, sa vie avait pris une tournure extraordinaire. Chaque matin, avant de partir pour la madrasa, il passait ses doigts sur le pendentif d'argent et murmurait la prière que Sidi Ibrahim lui avait apprise : « Allahoumma ij'alni min ahli 'ilmik — Ô Allah, fais de moi un des gens de Ton savoir. » Et chaque soir, avant de s'endormir, il ouvrait un livre — n'importe lequel — et lisait au moins une page, suivant le conseil du sage : « Même une gorgée d'eau chaque jour remplit une rivière au fil du temps. »\n\nMais ce matin-là, quelque chose d'inhabituel se produisit. Souhayl était assis dans la bibliothèque souterraine, devant Sidi Ibrahim, comme à l'accoutumée, quand il remarqua que l'une des étagères — la plus haute, celle qui touchait presque le plafond voûté — émettait une lueur bleutée, comme si un manuscrit particulier brillait de l'intérieur. La lumière était douce, presque imperceptible, mais dans la pénombre relative de la bibliothèque, elle attire l'œil comme un phare dans la nuit.\n\nSouhayl pointa du doigt l'étagère. Sidi Ibrahim suivit son regard et ses yeux verts s'agrandirent légèrement — une expression que Souhayl n'avait jamais vue sur le visage imperturbable du sage.\n\n— Ah, murmura Sidi Ibrahim. Il est temps. C'est le Manuscrit des Gardiens. Il ne s'illumine que quand un nouveau gardien est prêt à recevoir sa première grande leçon.\n\nLe sage se leva, marcha vers l'étagère et, avec une agilité surprenante pour son âge, grimpa sur une échelle en bois et en retira un manuscrit d'une taille inhabituelle — plus grand que les autres, relié en cuir indigo profond incrusté de fils d'argent et d'or. Le manuscrit pulsait d'une lumière bleue, comme un cœur qui bat, et quand Sidi Ibrahim le posa sur la table devant Souhayl, la lumière envahit la salle entière, teintant les colonnes de marbre et les mosaïques du plafond de reflets célestes.\n\n— Ce manuscrit, dit Sidi Ibrahim d'une voix solennelle, est spécial. Il ne contient pas de texte — il contient des mémoires. Les mémoires des plus grands savants de l'Islam. Quand tu l'ouvriras, Souhayl, tu ne liras pas des mots — tu vivras des moments. Des moments de la vie de ces géants du savoir. Et le premier qui t'attend... est l'un des plus extraordinaires qui aient jamais marché sur cette terre.\n\nSouhayl regarda le manuscrit avec un mélange d'excitation et de crainte. Le cuir indigo était chaud sous ses doigts, et les fils d'argent et d'or pulsaient comme des veines remplies de lumière liquide.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: 'Qui est le premier savant, Sidi ? De qui vais-je voir la mémoire ?',
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Abu Hamid Al-Ghazali. L'homme que le monde musulman appelle Hujjat al-Islam — la Preuve de l'Islam. Il était à la fois un savant, un philosophe, un mystique et un réformateur. Mais surtout, Souhayl, il était un homme de vérité. Un homme qui a eu le courage de dire : « Je ne sais pas » quand tout le monde pensait qu'il savait tout. Et c'est ce courage-là que tu vas apprendre aujourd'hui.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s2',
          background: 'inner_world',
        },

        // --- st2c1s2: La rencontre avec Al-Ghazali ---
        {
          id: 'st2c1s2',
          chapterId: 'st2c1',
          title: 'La rencontre avec Al-Ghazali',
          narration: `Souhayl ouvrit le manuscrit, et le monde autour de lui disparut. La bibliothèque souterraine, les colonnes de marbre, les lampes dorées, Sidi Ibrahim — tout s'effaça comme un tableau qu'on efface d'un coup d'éponge, et Souhayl se retrouva debout dans un lieu qu'il ne reconnaissait pas.\n\nIl était dans une grande salle voûtée aux murs blancs, ornée de fenêtres en ogive par lesquelles filtrait une lumière dorée d'un automne perpétuel. Des étagères immenses, remplies de livres en arabe, en persan et en grec, montaient jusqu'au plafond, et au centre de la salle, un homme était assis à un bureau en bois d'olivier, entouré de parchemins éparpillés et de livres ouverts.\n\nL'homme portait une djellaba grise et un turban blanc. Il avait la barbe taillée court, les yeux d'un noir profond et perçant, et un visage qui portait les marques de l'intelligence et de l'angoisse mêlées — comme un homme qui a vu trop loin et qui sait que voir trop loin est aussi dangereux que de ne pas voir du tout. Il était en train d'écrire, son calame courant sur le parchemin avec une vitesse et une précision qui témoignaient d'une maîtrise absolue.\n\nPuis il leva les yeux et regarda Souhayl. Et Souhayl, malgré sa jeunesse et son inexpérience, reconnut ce regard — un regard qui voyait tout, qui comprenait tout, et qui portait en lui le poids du monde entier.\n\n— Tu es le nouveau gardien, dit l'homme sans se lever. Assieds-toi. Je suis Abu Hamid. Les gens m'appellent Al-Ghazali. Je suis mort il y a plus de neuf cents ans, mais mes mots, eux, sont plus vivants que jamais.\n\nSouhayl obéit, s'asseyant sur un coussin posé à côté du bureau. Ses yeux allaient du visage d'Al-Ghazali aux livres qui l'entouraient — des centaines, peut-être des milliers de livres, couvrant tous les sujets imaginables.\n\n— Ne sois pas impressionné par les livres, dit Al-Ghazali avec un demi-sourire. J'ai écrit plus de quatre-vingts ouvrages dans ma vie, et le seul qui compte vraiment, c'est celui que j'ai écrit quand j'ai eu le courage d'admettre que je ne savais rien.\n\nSouhayl fronça les sourcils. Quatre-vingts ouvrages, et le seul qui compte est celui d'un homme qui ne savait rien ? Cela n'avait aucun sens.\n\n— Laisse-moi t'expliquer, dit Al-Ghazali en posant son calame. Écoute bien, car cette histoire est peut-être la plus importante que tu entendras jamais.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Al-Ghazali était le plus grand savant de son époque. Il enseignait à la prestigieuse Nizamiyya de Bagdad, où des milliers d'étudiants venaient l'écouter. Tout le monde le considérait comme le savant le plus brillant du monde musulman. Mais à l'intérieur de lui, quelque chose s'est brisé.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "S'est brisé ? Quoi donc ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "La certitude, Souhayl. La certitude qu'il avait tout compris. Al-Ghazali a réalisé que tout son savoir — tous ses livres, toutes ses leçons, tous ses élèves — n'étaient que des mots si son cœur n'était pas sincère. Il a fait quelque chose d'incroyable : il a tout quitté. Son poste, sa réputation, sa maison. Il est parti pendant onze ans pour chercher la vérité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s3',
          background: 'inner_world',
        },

        // --- st2c1s3: Le doute d'Al-Ghazali ---
        {
          id: 'st2c1s3',
          chapterId: 'st2c1',
          title: "Le doute d'Al-Ghazali",
          narration: `Al-Ghazali se leva de son bureau et marcha vers la fenêtre. La lumière dorée de l'automne éclairait son visage et, dans cette lumière, Souhayl put voir les rides profondes qui sillonnaient sa peau — des rides qui n'étaient pas seulement celles de l'âge, mais celles de l'angoisse, de la recherche, du questionnement perpétuel.\n\n— Écoute, Souhayl, dit-il en se tournant vers le garçon. Imagine que tu es le professeur le plus célèbre du monde. Tout le monde te vénère. Des centaines d'élèves assis à tes pieds, écrivant chaque mot que tu dis. Des rois qui te consultent. Des savants qui te citent. Tu as tout — la gloire, le respect, la richesse. Mais un soir, en rentrant chez toi, tu poses cette question : « Est-ce que je crois vraiment à ce que j'enseigne ? »\n\nSouhayl sentit un frisson le parcourir. La question était simple, mais sa portée était terrifiante.\n\n— C'est exactement ce qui m'est arrivé, continua Al-Ghazali. J'enseignais la théologie, la philosophie, le fiqh, la logique — j'étais considéré comme un maître dans tous ces domaines. Mais au fond de moi, je sentais un vide. Un trou noir qui engloutissait toute certitude. Mes paroles étaient parfaites, mais mon cœur était vide. Je parlais d'Allah avec l'éloquence d'un ange, mais quand je priais, je ne sentais rien. Quand je lisais le Coran, les mots glissaient sur mon esprit comme l'eau sur la pierre, sans le pénétrer.\n\nLe savant marqua une pause, et ses yeux s'assombrirent.\n\n— Pendant six mois, Souhayl, je suis resté paralysé. Physiquement, mentalement, spirituellement. Je ne pouvais plus parler, plus écrire, plus enseigner. J'étais comme un arbre dont on a coupé les racines — debout, mais mort de l'intérieur. Les médecins pensaient que c'était une maladie du corps. Mais c'était une maladie de l'âme. Le nom de cette maladie ? Le doute. Le doute sur la sincérité de ma propre foi.\n\nAl-Ghazali se tourna vers Souhayl avec une intensité qui força le garçon à se redresser.\n\n— Et voilà la leçon que je veux t'enseigner aujourd'hui, Souhayl. Le doute n'est pas un ennemi. Le doute est un ami déguisé. C'est le doute qui m'a poussé à chercher la vérité, et c'est en cherchant la vérité que j'ai trouvé la sincérité — le Sidq — la vérité du cœur. Sans le doute, je serais resté un savant vide. Avec le doute, je suis devenu un être humain complet.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Mais... douter de sa foi, ce n'est pas grave ? Les gens disent que le doute c'est mauvais...",
              emotion: 'scared',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Ce que les gens disent et ce que la sagesse enseigne sont souvent deux choses différentes, Souhayl. Le grand savant Ibn Al-Qayyim a dit : « Le doute est le début de la certitude. » L'enfant qui ne pose jamais de questions ne grandit jamais. Le savant qui ne doute jamais de ses certitudes ne progresse jamais. Le doute sincère est une prière — une prière que le cœur adresse à Allah en disant : « Seigneur, montre-moi la vérité. »",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s4',
          background: 'inner_world',
        },

        // --- st2c1s4: Le choix de la vérité ---
        {
          id: 'st2c1s4',
          chapterId: 'st2c1',
          title: 'Le choix de la vérité',
          narration: `Al-Ghazali reprit son récit, et Souhayl sentit que l'histoire approchait de son point culminant — ce moment précis où un homme doit choisir entre le confort du mensonge et la difficulté de la vérité.\n\n— Après six mois de paralysie, dit Al-Ghazali, j'ai pris une décision. J'ai tout quitté. J'ai quitté Bagdad, mon poste à la Nizamiyya, ma maison, mes élèves, ma réputation — tout. J'ai distribué mes biens aux pauvres et je suis parti en voyage. Pendant onze ans, j'ai voyagé à travers le monde musulman — Damas, Jérusalem, La Mecque, Médine, Le Caire — à la recherche de la certitude. J'ai rencontré des soufis, des philosophes, des savants de toutes écoles. J'ai prié, médité, jeûné, pleuré. Et au bout de ces onze années, j'ai compris quelque chose de fondamental.\n\nIl se tourna vers Souhayl, et ses yeux noirs brillaient d'une lumière qui n'avait rien de terrestre.\n\n— J'ai compris que la certitude ne se trouve pas dans les livres, Souhayl. Elle se trouve dans le cœur. On peut lire mille livres sur l'amour sans jamais savoir ce qu'est aimer. On peut étudier mille traités de théologie sans jamais sentir la présence d'Allah. Le savoir de la tête et le savoir du cœur sont deux choses différentes. Et la plus importante, c'est le savoir du cœur — la certitude spirituelle qu'on appelle Yaqin.\n\nAl-Ghazali posa sa main sur l'épaule de Souhayl avec une tendresse qui contrastait avec la sévérité de son visage.\n\n— Voilà ce que je veux que tu retiennes, Souhayl. Le savoir sans sincérité est comme un bel habit porté sur un cadavre — il donne l'illusion de la vie, mais il n'y a rien dessous. La sincérité — le Sidq — est le souffle qui donne vie au savoir. Sans elle, les plus beaux mots ne sont que du vent. Avec elle, les mots les plus simples deviennent des lanternes qui éclairent le monde.\n\nMais Al-Ghazali n'avait pas encore fini. Il fixa Souhayl avec une gravité qui compressa l'air dans la salle.\n\n— Cependant, Souhayl, il y a un danger plus grand encore que le savoir sans sincérité. C'est le savoir utilisé pour tromper. La connaissance, entre les mains de quelqu'un qui ment, est une arme plus dangereuse qu'une épée. Celui qui sait et qui ment est pire que celui qui ignore et qui se trompe, car le premier ment avec la pleine connaissance de son mensonge.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Celui qui sait et qui ment... Sidi, c'est arrivé ? Des savants qui ont menti ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Hélas oui, Souhayl. Tout au long de l'histoire, certains savants ont utilisé leur connaissance pour tromper, pour manipuler, pour servir des intérêts mondains. C'est pour cela que le Prophète ﷺ a dit : « Quiconque ment sur moi délibérément, qu'il prépare sa place en Enfer. » Le mensonge dans le savoir est le péché le plus grave, car il corrompt la source même de la guidance.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st2c1s4_c1',
              text: "Promettre de toujours dire la vérité, même quand c'est difficile",
              nextSceneId: 'st2c1s5a',
              badgeId: 'sidq',
              isCorrect: true,
            },
            {
              id: 'st2c1s4_c2',
              text: "Demander à Al-Ghazali comment distinguer la vérité du mensonge",
              nextSceneId: 'st2c1s5b',
            },
          ],
          background: 'inner_world',
        },

        // --- st2c1s5a: La promesse de Sidq ---
        {
          id: 'st2c1s5a',
          chapterId: 'st2c1',
          title: 'La promesse de Sidq',
          narration: `Souhayl se leva, le cœur battant, et regarda Al-Ghazali droit dans les yeux — un geste d'une audace que même lui ne s'attendait pas à avoir. Mais les mots d'Al-Ghazali l'avaient touché au plus profond de son être, comme une flèche qui traverse les couches de l'ego pour atteindre l'âme.\n\n— Je promets, dit-il d'une voix tremblante mais ferme. Je promets de toujours dire la vérité dans le savoir. De ne jamais utiliser ce que j'apprends pour tromper ou mentir. De vérifier avant de parler, de reconnaître quand je ne sais pas, et de ne jamais laisser mon ego utiliser le savoir comme un outil de pouvoir.\n\nAl-Ghazali sourit — un sourire triste et beau, le sourire d'un homme qui a traversé les ténèbres et qui sait combien la lumière est précieuse.\n\n— C'est une belle promesse, Souhayl. Mais les promesses sont faciles à faire et difficiles à tenir. Le vrai test de la vérité ne vient pas quand il est facile d'être honnête — il vient quand il est difficile, quand être honnête coûte quelque chose : de la fierté, de l'amitié, de la sécurité, de l'amour. C'est dans ces moments-là que tu sauras si ta promesse est sincère.\n\nL'image d'Al-Ghazali commença à s'effacer, comme un portrait peint à l'eau sous la pluie. Les murs de la salle se fondirent, les étagères de livres disparurent, et Souhayl se retrouva de retour dans la bibliothèque souterraine, assis devant Sidi Ibrahim, le manuscrit indigo ouvert sur ses genoux.\n\nLa lumière bleue du manuscrit s'était intensifiée, et sur la page ouverte, une nouvelle inscription brillait en lettres d'argent :\n\n« الصدق منجاة — La vérité est le salut. »\n\nSidi Ibrahim posa sa main sur celle de Souhayl.\n\n— Tu viens de recevoir la première des trois leçons des Gardiens du Savoir, Souhayl. La leçon d'Al-Ghazali : le Sidq — la véracité. La prochaine fois, tu rencontreras un autre géant, et tu apprendras la deuxième leçon : l'Amana — la confiance.\n\nSouhayl serra le pendentif en argent contre sa poitrine. Il sentait la lampe briller plus fort qu'avant, comme si elle approuvait la promesse qu'il venait de faire. Les paroles d'Al-Ghazali résonnaient encore dans son esprit comme un écho dans une caverne de cristal : « Le savoir sans sincérité est comme un bel habit porté sur un cadavre. » Il ne l'oublierait jamais.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Al-Ghazali a écrit : « La sincérité est d'être le même à l'intérieur et à l'extérieur. » C'est-à-dire que ce que tu montres au monde correspond à ce que tu ressens dans ton cœur. Si tu ressens de la gratitude, montre-la. Si tu ressens du doute, avoue-le. Si tu ne sais pas, dis « je ne sais pas. » C'est cela, le Sidq — la vérité totale, sans masque, sans faux-semblant.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s6',
          background: 'inner_world',
          earnedBadgeId: 'sidq',
          lesson: {
            title: 'As-Sidq — La véracité et la sincérité',
            content:
              "Al-Ghazali, le plus grand savant de son temps, a tout quitté — sa position, sa réputation, ses biens — pour chercher la sincérité dans sa foi. Il a enseigné que le savoir sans sincérité est comme un bel habit porté sur un cadavre. Le Sidq (الصدق) est la véracité totale : être le même à l'intérieur et à l'extérieur. Le Prophète ﷺ a dit : « Soyez sincères, car la sincérité mène à la bienfaisance, et la bienfaisance mène au Paradis. »",
            quote: 'عليكم بالصدق فإن الصدق يهدي إلى البر',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st2c1s5b: La recherche de la vérité ---
        {
          id: 'st2c1s5b',
          chapterId: 'st2c1',
          title: 'La recherche de la vérité',
          narration: `Souhayl posa sa question avec l'honnêteté d'un enfant qui ne comprend pas encore que certaines questions sont embarrassantes : « Mais Sidi, comment fait-on pour savoir si ce qu'on dit est vrai ou faux ? Parfois, je crois dire la vérité, mais je me trompe. C'est quand même un mensonge ? »\n\nAl-Ghazali éclata de rire — un rire franc, chaleureux, qui fit trembler les parchemins sur le bureau et danser la poussière dans les rayons du soleil.\n\n— Ah ! Quelle question ! s'exclama-t-il en tapotant le genou de Souhayl avec affection. C'est LA question, Souhayl ! La question que tous les savants devraient se poser chaque jour de leur vie. Et voici la réponse que onze années de voyage m'ont apprise : il y a trois niveaux de vérité.\n\nAl-Ghazali leva trois doigts.\n\n— Premier niveau : la vérité des faits. Ce que tu dis correspond-il à la réalité ? Si tu dis « il pleut », est-ce qu'il pleut vraiment ? C'est le niveau le plus bas de la vérité — il est nécessaire, mais insuffisant.\n\nDeuxième doigt.\n\n— Deuxième niveau : la vérité de l'intention. Pourquoi dis-tu ce que tu dis ? Si tu dis la vérité pour impressionner, pour manipuler, pour blesser, ce n'est pas le Sidq — c'est l'utilisation de la vérité comme arme.\n\nTroisième doigt.\n\n— Troisième niveau : la vérité du cœur. Est-ce que tu crois vraiment à ce que tu dis ? Si tu enseignes quelque chose que tu as vérifié avec ta tête mais pas avec ton cœur, il te manque l'essentiel. La vraie vérité, Souhayl, est celle qui unit la tête et le cœur, l'intelligence et la foi, le savoir et la sagesse.\n\nSouhayl écoutait, fasciné. Chaque mot d'Al-Ghazali était comme une brique supplémentaire dans l'édifice de sa compréhension, et il sentait que cette construction, même si elle était encore fragile, avait des fondations solides.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Donc la vérité, ce n'est pas juste dire les choses comme elles sont ? C'est aussi les dire avec le bon cœur ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Exactement, Souhayl. Le Prophète ﷺ a dit : « Voulez-vous que je vous indique la porte du bien ? Le jeûne est un bouclier, et la sincérité est la clé. » La sincérité — le Sidq — est la clé de tout bien. Elle ouvre les portes du savoir, de la prière, de l'amitié, de toutes les bonnes choses. Sans elle, même la vérité factuelle peut devenir un mensonge spirituel.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s6',
          background: 'inner_world',
        },

        // --- st2c1s6: Le premier mensonge ---
        {
          id: 'st2c1s6',
          chapterId: 'st2c1',
          title: 'Le premier mensonge',
          narration: `Le lendemain, à la madrasa, Souhayl fut confronté à la première véritable épreuve de sa promesse. L'enseignant de calligraphie, M. Hadj, avait organisé un concours : chaque élève devait calligraphier le même verset du Coran — la sourate Al-Ikhlas — et les trois meilleurs travaux seraient affichés au mur de la classe pour tout le mois.\n\nSouhayl adorait la calligraphie. C'était son domaine de prédilection, son jardin secret, l'endroit où son âme trouvait son expression la plus pure. Il avait pratiqué pendant des heures à la maison, sous la direction patiente de son père, et son travail était, il le savait, remarquable.\n\nMais le jour du concours, un événement inattendu se produisit. Au moment de tendre sa feuille à M. Hadj, Souhayl remarqua qu'il avait fait une erreur — minuscule, presque invisible — dans le mot « Al-Ahad ». Le « dal » (د) était légèrement trop court, et sa hampe ne s'arrondissait pas avec la grâce habituelle de son trait. Personne d'autre ne remarquerait cette erreur — pas M. Hadj, pas ses camarades, personne. Mais Souhayl la voyait, et elle lui brûlait les yeux comme un grain de sable sous une paupière.\n\nIl devait prendre une décision rapide. S'il tendait la feuille telle quelle, il gagnerait probablement le concours — l'erreur était invisible à l'œil nu. S'il demandait une nouvelle feuille et recommençait, il perdrait du temps et peut-être sa chance.\n\nEt puis, les mots d'Al-Ghazali résonnèrent dans sa tête : « La sincérité est d'être le même à l'intérieur et à l'extérieur. »\n\nSouhayl regarda sa feuille, puis regarda M. Hadj, puis regarda ses camarades qui terminaient leurs travaux les uns après les autres. Son cœur battait si fort qu'il l'entendait dans ses tempes. L'erreur minuscule le fixait, comme un œil invisible qui ne clignait jamais.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Si je tends cette feuille, personne ne verra l'erreur. Mais moi, je la vois. Et si je la vois, Allah la voit aussi. Le Sidq commence par moi-même.",
              emotion: 'determined',
            },
          ],
          choices: [
            {
              id: 'st2c1s6_c1',
              text: "Sincérité : demander une nouvelle feuille et recommencer",
              nextSceneId: 'st2c1s7a',
              badgeId: 'amana',
              isCorrect: true,
            },
            {
              id: 'st2c1s6_c2',
              text: "Tendre la feuille — personne ne verra l'erreur",
              nextSceneId: 'st2c1s7b',
            },
          ],
          background: 'classroom',
        },

        // --- st2c1s7a: La calligraphie de la vérité ---
        {
          id: 'st2c1s7a',
          chapterId: 'st2c1',
          title: 'La calligraphie de la vérité',
          narration: `Souhayl leva la main.\n\n— Monsieur Hadj, dit-il d'une voix que les autres élèves entendirent à peine, j'ai fait une erreur dans mon travail. Est-ce que je peux avoir une nouvelle feuille ?\n\nUn murmure traversa la classe. Karim, le meilleur élève en mathématiques, regarda Souhayl comme s'il était fou. Laila, la fille du boulanger du quartier, écarquilla ses yeux. M. Hadj, lui, arrêta de ramasser les feuilles et regarda Souhayl avec une attention soudaine et pénétrante.\n\n— Une erreur, Souhayl ? Où ça ? Laisse-moi voir.\n\nSouhayl tendit sa feuille. M. Hadj la regarda attentivement, inclinant la tête, plissant les yeux, cherchant l'erreur que Souhayl avait mentionnée. Après plusieurs secondes, il la trouva — le « dal » légèrement trop court.\n\n— Tu es le seul à avoir vu ça, dit M. Hadj avec un sourire qui en disait long. Personne d'autre n'aurait remarqué. Mais toi, tu as vu, et tu as dit la vérité. Souhayl, tu viens de gagner quelque chose de plus précieux que le premier prix du concours.\n\nM. Hadj lui donna une nouvelle feuille. Souhayl la prit, s'assit, et avec une concentration absolue — une concentration que seul le cœur sincère peut produire — il calligraphia la sourate Al-Ikhlas une deuxième fois. Et cette fois-ci, chaque lettre était parfaite, chaque trait était pur, chaque mot respirait la beauté de la sincérité.\n\nQuand les résultats furent proclamés, Souhayl n'eut pas le premier prix — il eut le deuxième. Mais quand M. Hadj afficha les travaux au mur, il épingla une petite note sous celui de Souhayl : « Ce travail est le deuxième du concours, mais le premier de la sincérité. »\n\nEn rentrant chez lui, Souhayl pressa le pendentif contre sa poitrine et sentit la lampe briller — plus forte qu'elle n'avait jamais brillé auparavant. Chaque promesse tenue, chaque vérité dite, chaque moment de sincérité alimentait sa lumière. Et Souhayl comprit que le vrai prix du savoir n'était pas un diplôme, ni une médaille, ni la reconnaissance des autres — c'était la paix du cœur qui vient de savoir qu'on a fait ce qui est juste, même quand personne ne regardait.`,
          dialogues: [
            {
              characterId: 'youssef',
              text: "Ton professeur m'a raconté ce qui s'est passé, Souhayl. Je suis fier de toi. Non pas parce que tu as bien calligraphié — ça je le savais déjà — mais parce que tu as eu le courage de dire la vérité quand c'était difficile. C'est cela, le vrai savoir : savoir quand admettre ses erreurs. Ton grand-père disait toujours : « L'erreur est humaine. La reconnaître est divin. »",
              emotion: 'wise',
            },
            {
              characterId: 'ines',
              text: "Souhayl, moi aussi j'ai fait un dessin à l'école aujourd'hui ! Je l'ai montré à la maîtresse ! Elle a dit que c'était le plus beau !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "C'est génial, Ines ! Montre-moi ce soir. Et devine quoi ? Je vais t'apprendre à écrire ton prénom en calligraphie arabe. إنيس — Ines. C'est un très joli nom, tu sais.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          earnedBadgeId: 'amana',
          lesson: {
            title: 'As-Sidq fi al-Amal — La sincérité dans les actes',
            content:
              "Souhayl a prouvé sa sincérité en admettant son erreur de calligraphie, même quand personne d'autre ne la voyait. C'est cela, le vrai test du Sidq : être honnête quand personne ne regarde. Le Prophète ﷺ a dit : « Adore Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit. » La sincérité dans les petits actes est le fondement de la sincérité dans les grandes œuvres.",
            quote: 'اعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك',
            source: 'Hadith — Sahih Muslim',
          },
        },

        // --- st2c1s7b: Le poids du mensonge ---
        {
          id: 'st2c1s7b',
          chapterId: 'st2c1',
          title: 'Le poids du mensonge',
          narration: `Souhayl tendit sa feuille à M. Hadj. L'enseignant la regarda, sourit, et la classa parmi les meilleures. Souhayl gagna le premier prix — son travail fut affiché au mur avec une grande étoile dorée, et ses camarades le félicitèrent avec des applaudissements sincères.\n\nMais le soir, seul dans sa chambre, Souhayl regarda la feuille affichée dans son imagination et sentit quelque chose de désagréable dans sa poitrine — un poids, une lourdeur, comme s'il avait avalé une pierre. L'erreur était là, invisible aux autres mais flagrante à ses yeux, et chaque fois qu'il pensait à ce « dal » trop court, la pierre dans sa poitrine semblait grandir.\n\nIl se leva, marcha vers la bibliothèque et en retira un Coran. Il l'ouvrit au hasard et ses yeux tombèrent sur ce verset :\n\n« ويل للمصلين الذين هم عن صلاتهم ساهون — Malheur à ceux qui prient avec négligence. »\n\nSouhayl ferma le Coran et le rouvrit. Cette fois, un autre verset apparut :\n\n« إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم — Allah ne change pas l'état d'un peuple tant que ce peuple ne change pas ce qu'il y a en lui-même. »\n\nSouhayl comprit. Le mensonge n'était pas dans le « dal » trop court — le mensonge était dans sa décision de le cacher. Le mensonge était dans le silence qui suivit l'erreur. Et ce silence, ce mensonge par omission, était un poison lent qui corrodaient sa certitude.\n\nLe lendemain matin, avant les cours, Souhayl alla voir M. Hadj et lui dit la vérité. L'enseignant le regarda longuement, sans dire un mot, puis sourit.\n\n— Souhayl, tu aurais pu garder le premier prix et personne n'aurait su. Mais tu es venu me voir. Tu sais ce que ça prouve ? Que la conscience ne dort jamais. Et que celui qui l'écoute est plus fort que celui qui l'ignore.\n\nLe pendentif de Souhayl pulsa doucement contre sa poitrine. La lampe brillait à nouveau, timidement, comme une flamme qui se rallume après avoir failli s'éteindre. Souhayl avait compris : le Sidq n'est pas une destination — c'est un chemin. Et sur ce chemin, il y a des chutes, des erreurs, des moments de faiblesse. Mais ce qui compte, c'est de se relever.`,
          dialogues: [
            {
              characterId: 'youssef',
              text: "L'Imam Ali a dit : « La valeur de chaque homme est dans ce qu'il sait bien faire. » Et j'ajouterai : la valeur de chaque homme est aussi dans sa capacité à reconnaître ses erreurs. Tu as eu tort de cacher l'erreur hier, Souhayl. Mais tu as eu raison de la révéler aujourd'hui. Et le fait de corriger une erreur est plus méritoire que de ne pas en faire du tout.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c1s7a',
          background: 'home',
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 2 — Le Jardin d'Ibn Sina (حديقة ابن سينا)
    // ============================================================
    {
      id: 'st2c2',
      tomeId: 'souhayl_tome2',
      number: 2,
      title: "Le Jardin d'Ibn Sina",
      titleAr: 'حديقة ابن سينا',
      scenes: [
        // --- st2c2s1: Le deuxième manuscrit ---
        {
          id: 'st2c2s1',
          chapterId: 'st2c2',
          title: 'Le deuxième manuscrit',
          narration: `Le Manuscrit des Gardiens pulsait de nouveau entre les mains de Souhayl, sa lumière bleue plus intense que la dernière fois, comme si le livre lui-même avait hâte de livrer son prochain secret. Sidi Ibrahim était assis en face de lui, sa djellaba blanche impeccable, ses yeux verts posés sur le manuscrit avec une attention qui, pour la première fois depuis que Souhayl le connaissait, portait une ombre de mélancolie.\n\n— Aujourd'hui, dit le sage en caressant la couverture du manuscrit, tu vas rencontrer un homme dont le génie a ébloui le monde entier. Un homme qui a écrit plus de deux cent cinquante ouvrages sur la médecine, la philosophie, les mathématiques, l'astronomie, la musique et la théologie. Un homme que l'Occident appelle Avicenne et que le monde musulman connaît sous le nom d'Ibn Sina — le prince des savants.\n\nSouhayl ouvrit le manuscrit, et le monde se transforma autour de lui. La bibliothèque souterraine s'effaça, remplacée par un paysage d'une beauté surnaturelle — un immense jardin bordé d'arbres fruitiers en fleurs, traversé par un canal d'eau claire qui murmurait un chant ancien, et baigné d'une lumière d'or et de jade qui ressemblait au premier matin du monde.\n\nAu centre du jardin, sous un noyer majestueux dont les branches formaient un dôme de feuilles vertes et dorées, un homme était assis sur une pierre, un livre ouvert sur ses genoux, un calame à la main. Il était jeune — trente ans tout au plus — avec un visage anguleux, des yeux noirs immenses et profonds, et une barbe naissante qui lui donnait un air à la fois juvénile et sérieux. Il portait un turban jaune et une djellaba de lin blanc, et ses mains — des mains de chirurgien, fines et précises — tenaient le calame avec une élégance naturelle.\n\nIl leva les yeux et regarda Souhayl avec un sourire curieux, comme un chat qui observe un oiseau nouveau dans son jardin.\n\n— Alors, c'est toi, le nouveau gardien, dit-il. Je suis Abu Ali Al-Hussein Ibn Abdallah Ibn Sina. Mais tu peux m'appeler Ibn Sina. Tout le monde le fait. Assieds-toi, je t'en prie. L'herbe est douce sous ce noyer. C'est ici que j'ai écrit mes meilleures œuvres — sous cet arbre, au son de l'eau, dans la lumière du matin. Le savoir, tu sais, ne naît pas dans les bibliothèques. Il naît dans les jardins, dans les conversations, dans les questions.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ibn Sina ! Vous avez écrit le Canon de la médecine ! Mon père m'en a parlé ! Il dit que c'est le livre médical le plus important de toute l'histoire !",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Le Canon a été le manuel de référence de la médecine en Europe et dans le monde musulmand pendant plus de six cents ans, Souhayl. Des générations de médecins ont appris leur métier dans ses pages. Mais ce que Sidi Ibrahim veut que tu retires de ta rencontre avec Ibn Sina n'est pas son génie médical — c'est sa conception de la confiance, l'Amana.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c2s2',
          background: 'garden',
        },

        // --- st2c2s2: Le prix de la confiance ---
        {
          id: 'st2c2s2',
          chapterId: 'st2c2',
          title: 'Le prix de la confiance',
          narration: `Ibn Sina ferma son livre et le posa sur l'herbe avec précaution, comme on pose un enfant endormi dans son lit. Puis il se tourna vers Souhayl et son visage devint soudainement sérieux — une transition si rapide que Souhayl sentit le poids de ce qui allait suivre.\n\n— Souhayl, dit Ibn Sina, je vais te raconter une histoire que très peu de gens connaissent. Tout le monde parle de mes livres, de mes découvertes médicales, de ma philosophie. Mais personne ne parle de l'épreuve qui a été la plus difficile de toute ma vie — l'épreuve de la confiance.\n\nIbn Sina cueillit une feuille du noyer et la fit tournoyer entre ses doigts.\n\n— Quand j'avais ton âge, Souhayl — ou à peu près — j'ai guéri le sultan de Boukhara d'une maladie que tous les médecins avaient déclarée incurable. Le sultan, reconnaissant, m'a ouvert les portes de sa bibliothèque royale — la plus grande du monde, avec des centaines de milliers de manuscrits que personne n'avait consultés depuis des générations. J'ai passé des années dans cette bibliothèque, lisant tout — absolument tout — la philosophie grecque, la médecine perse, les mathématiques indiennes, la théologie arabe. J'ai absorbé le savoir du monde entier comme une éponge.\n\nIbn Sina marqua une pause et laissa le silence du jardin amplifier ses paroles.\n\n— Mais un jour, le sultan m'a demandé quelque chose que je ne m'attendais pas. Il m'a demandé de fabriquer un poison. Un poison indétectable, qui ne laisse aucune trace dans le corps. Il voulait s'en servir contre un rival politique. Et il m'a dit : « Si tu refuses, tu n'auras plus accès à la bibliothèque. Et si tu parles de cette conversation à qui que ce soit, tu seras exécuté. »\n\nSouhayl sentit le froid parcourir son échine malgré la chaleur du jardin. Le noyer au-dessus d'eux semblait frémir, et le canal d'eau murmura un peu plus fort, comme s'il commentait le récit d'Ibn Sina.\n\n— Imagine la situation, dit Ibn Sina en regardant Souhayl droit dans les yeux. D'un côté, la bibliothèque — le savoir du monde entier, ton rêve, ta passion, ta vie. De l'autre, la conscience — la certitude que fabriquer ce poison serait un acte de trahison non seulement contre l'homme visé, mais contre le savoir lui-même, contre la confiance que les gens placent en ceux qui savent.\n\n— Qu'as-tu fait ? demanda Souhayl, la voix étranglée.\n\n— J'ai refusé, dit Ibn Sina simplement. Et j'ai fui Boukhara dans la nuit, laissant derrière moi tous mes livres, toutes mes notes, tout mon travail de recherche. J'ai marché pendant des semaines à travers le désert, sans argent, sans protection, avec seulement le savoir que je portais dans ma tête. Et pendant ces semaines, Souhayl, j'ai compris quelque chose de fondamental : le savoir n'a de valeur que s'il est gardé par des gens de confiance. Un médecin qui utilise son savoir pour tuer n'est pas un médecin — c'est un assassin avec un diplôme. Un savant qui utilise sa connaissance pour tromper n'est pas un savant — c'est un menteur avec une bibliothèque.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Tu as tout laissé tomber ? Ta bibliothèque, tes recherches, tout ? Juste parce que tu ne voulais pas fabriquer un poison ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Ibn Sina a compris ce que beaucoup de savants ne comprennent jamais : le savoir est une Amana — un dépôt sacré. Il ne t'appartient pas. Il t'est confié par Allah, et tu es responsable de la manière dont tu l'utilises. Si tu l'utilises pour le bien, tu en es le gardien. Si tu l'utilises pour le mal, tu en es le voleur.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c2s3',
          background: 'garden',
          lesson: {
            title: "Al-Amana — Le dépôt sacré du savoir",
            content:
              "Ibn Sina a refusé de fabriquer un poison pour le sultan, sacrifiant son accès à la plus grande bibliothèque du monde. Cette histoire illustre le concept d'Amana (الأمانة) — le dépôt sacré. Le savoir est une responsabilité confiée par Allah, et celui qui l'utilise pour nuire en est le voleur. Le Prophète ﷺ a dit : « Ne trompez pas, et ne soyez pas trompés. »",
            quote: 'إن الله يأمركم أن تؤدوا الأمانات إلى أهلها',
            source: 'Coran, Sourate An-Nisa (4:58)',
          },
        },

        // --- st2c2s3: Ines et le secret ---
        {
          id: 'st2c2s3',
          chapterId: 'st2c2',
          title: 'Ines et le secret',
          narration: `Souhayl remonta de la bibliothèque avec la tête pleine des mots d'Ibn Sina. Le concept d'Amana résonnait en lui comme un gong dans une caverne — le savoir est un dépôt sacré, le savoir est une confiance, le savoir est une responsabilité. Mais ce sont les événements de l'après-midi, à la maison, qui allaient transformer cette leçon abstraite en une épreuve concrète.\n\nEn rentrant chez lui, Souhayl trouva Ines assise sur le seuil de la porte, les genoux serrés contre sa poitrine, le visage enfoui dans ses bras. La petite fille de six ans pleurait — pas les sanglots bruyants des enfants qui veulent attirer l'attention, mais des larmes silencieuses, contenues, qui coulaient le long de ses joues potelées comme des ruisseaux tranquilles.\n\nSouhayl s'agenouilla devant elle et posa doucement sa main sur son épaule.\n\n— Ines, qu'est-ce qui se passe ? Pourquoi tu pleures ?\n\nInes leva des yeux rougis et gonflés, et dans son regard, Souhayl lut une détresse qu'il n'avait jamais vue chez sa petite sœur — une détresse mêlée de peur et de honte.\n\n— Souhayl, chuchota-t-elle, j'ai fait quelque chose de mal. J'ai cassé le vase en cristal de maman. Le cadeau de mariage de Tante Khadija. Il est tombé et il s'est cassé en morceaux. J'ai ramassé les morceaux et je les ai cachés sous mon lit. Maman ne le sait pas encore.\n\nLe vase en cristal. Souhayl le connaissait — c'était un objet magnifique, un cadeau précieux que Fatima chérissait plus que n'importe quelle autre possession matérielle. Ines l'avait cassé, et elle avait peur. Peur de la colère de sa mère, peur de la punition, peur d'être grondée.\n\nEt là, Souhayl se trouva face à un dilemme. Ines lui avait confié son secret — un secret qui la faisait souffrir. Le secret était aussi une Amana — un dépôt confié par sa sœur. Si Souhayl le révélait à sa mère, il trahirait la confiance d'Ines. S'il gardait le silence, il participait indirectement au mensonge de sa sœur.\n\nLes mots d'Ibn Sina résonnèrent dans son esprit : « Le savoir est une Amana — un dépôt sacré. » Et Souhayl comprit que la confiance ne se limitait pas au savoir — elle s'appliquait à chaque secret, chaque promesse, chaque relation humaine.`,
          dialogues: [
            {
              characterId: 'ines',
              text: "Tu ne vas pas le dire à maman, hein ? Promets-moi, Souhayl... Promets-moi que tu ne diras rien. S'il te plaît...",
              emotion: 'sad',
            },
          ],
          choices: [
            {
              id: 'st2c2s3_c1',
              text: "Aider Ines à dire la vérité à maman — avec douceur et soutien",
              nextSceneId: 'st2c2s4a',
              badgeId: 'rahma',
              isCorrect: true,
            },
            {
              id: 'st2c2s3_c2',
              text: "Garder le secret pour protéger Ines",
              nextSceneId: 'st2c2s4b',
            },
            {
              id: 'st2c2s3_c3',
              text: "Dire la vérité à maman directement — c'est un bien fait",
              nextSceneId: 'st2c2s4c',
            },
          ],
          background: 'home',
        },

        // --- st2c2s4a: La miséricorde du grand frère ---
        {
          id: 'st2c2s4a',
          chapterId: 'st2c2',
          title: 'La miséricorde du grand frère',
          narration: `Souhayl prit la main de sa petite sœur dans la sienne et la serra doucement. Les mains d'Ines étaient froides et tremblantes, comme les pattes d'un oiseau blessé. Souhayl sentit son cœur se serrer — non pas de colère, mais de compassion. Il se souvint des mots de Sidi Ibrahim : « La vraie sagesse, c'est de savoir comment appliquer la vérité avec douceur. La vérité sans douceur est une épée nue. La vérité avec douceur est une médecine. »\n\n— Ines, dit-il doucement, je ne vais pas le dire à maman à ta place. Mais je vais t'aider à le dire toi-même. Tu veux bien ?\n\nInes le regarda avec des yeux écarquillés, partagée entre le soulagement et la terreur.\n\n— Me... moi-même ? Mais maman va être en colère ! Elle va me gronder !\n\n— Peut-être, dit Souhayl. Mais tu sais quoi ? Maman est la personne la plus gentille du monde quand on lui dit la vérité. Elle sera peut-être triste, mais elle sera surtout fière de toi d'avoir eu le courage d'avouer. Écoute, je vais être à côté de toi. On y va ensemble. Et après, peu importe ce qui arrive, je serai là.\n\nInes hésita. Puis elle essuya ses larmes du dos de sa main, renifla bruyamment, et hocha la tête. Souhayl l'aida à se lever, ramassa les morceaux de cristal cachés sous le lit de la petite fille, et ensemble, ils descendirent à la cuisine où Fatima préparait le dîner.\n\n— Maman, commença Ines d'une voix si petite qu'on l'entendait à peine, j'ai quelque chose à te dire. J'ai cassé le vase de Tante Khadija. Je suis désolée. Je suis vraiment désolée.\n\nFatima posa sa cuillère en bois et se tourna vers sa fille. Un instant de silence — un instant qui sembla durer une éternité à Ines et à Souhayl. Puis Fatima s'agenouilla, ouvrit les bras, et serra Ines contre elle dans une étreinte chaude et tendre.\n\n— Mon petit trésor, murmura-t-elle dans les cheveux de sa fille, le vase n'est qu'un objet. Ce que j'aime le plus au monde, c'est toi. Et le fait que tu aies eu le courage de me dire la vérité me rend plus fière que n'importe quel vase en cristal. Alhamdulillah. Mon Ines est une fille sincère.\n\nSouhayl, debout dans l'encadrement de la porte, sentit des larmes monter à ses propres yeux. Il pressa le pendentif contre sa poitrine et sentit la lampe briller — non pas d'une lumière éclatante, mais d'une lumière douce, chaude, comme un foyer en hiver. La lumière de la compassion. La lumière de la Rahma.`,
          dialogues: [
            {
              characterId: 'fatima',
              text: "Le Prophète ﷺ a dit : « Celui qui n'est pas miséricordieux envers les jeunes ne mérite pas de miséricorde. » Ines, ma petite, tu as eu peur, mais tu as choisi la vérité. Et Souhayl, mon grand, tu as aidé ta sœur avec sagesse et douceur. Allah est satisfait de vous deux aujourd'hui.",
              emotion: 'wise',
            },
            {
              characterId: 'ines',
              text: "Maman... tu n'es pas en colère ? Vraiment ?",
              emotion: 'happy',
            },
            {
              characterId: 'fatima',
              text: "Comment pourrais-je être en colère contre un cœur aussi sincère ? Le vase est cassé, c'est vrai. Mais un cœur sincère vaut mille vases. Allons, mes chéris, aidons-moi à préparer le dîner. Et Souhayl... merci d'être le frère dont Ines a besoin.",
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'st2c2s5',
          background: 'home',
          earnedBadgeId: 'rahma',
          lesson: {
            title: 'Ar-Rahma — La miséricorde dans la vérité',
            content:
              "Souhayl a appris que la vérité (Sidq) doit toujours être accompagnée de miséricorde (Rahma). Il n'a pas trahi le secret d'Ines en allant dire à sa mère — il l'a aidée à trouver le courage de dire la vérité elle-même. Le Prophète ﷺ a dit : « Celui qui n'est pas miséricordieux envers les jeunes ne mérite pas de miséricorde. » La sagesse du grand frère n'est pas seulement dans le savoir, mais dans la capacité d'appliquer ce savoir avec douceur et compassion.",
            quote: 'من لا يرحم لا يرحم',
            source: 'Hadith — Sahih al-Bukhari et Muslim',
          },
        },

        // --- st2c2s4b: Le silence complice ---
        {
          id: 'st2c2s4b',
          chapterId: 'st2c2',
          title: 'Le silence complice',
          narration: `Souhayl promit à Ines de garder le secret. Le soir même, à table, Fatima remarqua l'absence du vase en cristal de la cheminée du salon. Ses yeux allèrent du mur vide aux visages de ses enfants, posant une question silencieuse que personne n'osa répondre.\n\n— Quelqu'un a vu mon vase ? demanda-t-elle avec une douceur qui, Souhayl le savait, masquait une inquiétude réelle.\n\nSouhayl baissa les yeux. Ines, à côté de lui, enfouit son visage dans son assiette de couscous. Le silence à table était lourd, oppressant, comme un couvercle posé sur une marmite bouillante.\n\n— Il est tombé, dit Souhayl d'une voix qu'il voulut neutre. Je ne sais pas comment. Je l'ai trouvé en morceaux ce matin.\n\nC'était un mensonge. Pas un mensonge total — le vase était bien tombé et il était bien en morceaux — mais un mensonge par omission, un mensonge qui protégeait Ines au prix de l'honnêteté de Souhayl. Et ce mensonge, Souhayl le sentit immédiatement, avait un goût amer, comme du lait tourné.\n\nFatima regarda son fils longuement, et Souhayl sut, avec la certitude douloureuse que seuls les enfants peuvent ressentir face à leur mère, qu'elle voyait au-delà de ses mots. Elle ne dit rien ce soir-là, mais dans ses yeux, Souhayl lut une déception silencieuse qui le poursuivit jusqu'au moment où il ferma les yeux.\n\nPendant la nuit, les mots d'Ibn Sina résonnèrent dans ses rêves : « Le savoir est une Amana — un dépôt sacré. Si tu l'utilises pour le bien, tu en es le gardien. Si tu l'utilises pour le mal, tu en es le voleur. » Et Souhayl comprit que la confiance ne se limitait pas au savoir — qu'elle s'appliquait aussi aux secrets qu'on garde, aux mensonges qu'on dit pour « protéger » les autres, aux silences qui participent à la tromperie. Protéger quelqu'un en mentant n'est pas le protéger — c'est le maintenir dans la peur.\n\nLe lendemain matin, Souhayl prit Ines par la main et, ensemble, ils allèrent trouver leur mère.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Ines, je dois te dire quelque chose. Hier soir, j'ai menti à maman pour te protéger. Mais j'ai compris que ce n'était pas la bonne chose à faire. Ibn Sina m'a enseigné que la confiance est sacrée, et en mentant pour toi, j'ai trahi la confiance de maman. Nous devons lui dire la vérité. Ensemble.",
              emotion: 'determined',
            },
          ],
          choices: [],
          nextSceneId: 'st2c2s5',
          background: 'home',
        },

        // --- st2c2s4c: La vérité brutale ---
        {
          id: 'st2c2s4c',
          chapterId: 'st2c2',
          title: 'La vérité brutale',
          narration: `Souhayl monta directement au salon où Fatima était en train de ranger les coussins.\n\n— Maman, dit-il sans préambule, c'est Ines qui a cassé ton vase. Les morceaux sont sous son lit.\n\nInes, qui le suivait dans l'escalier, se figea sur la dernière marche. Son visage passa de la surprise à la peur, puis à la détresse la plus absolue. Ses yeux se remplirent de larmes, et elle s'effondra sur le marche en sanglotant.\n\nFatima se tourna vers Ines, puis vers Souhayl, et son visage exprima une complexité d'émotions que les mots ne pouvaient pas décrire — surprise, chagrin, mais aussi, et c'est ce qui frappa le plus Souhayl, une déception qui n'était pas dirigée vers Ines.\n\n— Souhayl, dit Fatima doucement mais fermement, tu aurais dû aider ta sœur à me le dire elle-même, pas la dénoncer ainsi. La vérité est une obligation, mais la manière de la dire est aussi importante que la vérité elle-même. Le Prophète ﷺ a dit : « Dites la bonne chose ou taisez-vous. » Dire la vérité sans douceur n'est pas le Sidq — c'est la dureté. Et la dureté, mon fils, n'est pas une vertu.\n\nFatima s'agenouilla devant Ines et la prit dans ses bras. Puis, regardant Souhayl par-dessus l'épaule de sa petite sœur, elle ajouta :\n\n— Souhayl, tu as dit la vérité et c'est bien. Mais la prochaine fois, souviens-toi que la vérité est une médecine — elle guérit, mais elle doit être administrée avec soin. Une médecine trop forte peut tuer le patient.\n\nSouhayl sentit le pendentif contre sa poitrine. La lampe ne brillait pas — elle était éteinte, froide, et dans son obscurité, Souhayl lut un avertissement : la vérité sans compassion est stérile.`,
          dialogues: [
            {
              characterId: 'fatima',
              text: "La vérité est une médecine, Souhayl. Elle guérit, mais elle doit être administrée avec douceur et sagesse. Le Prophète ﷺ a dit : « Dites la bonne chose ou taisez-vous. » Dire la vérité en blessant n'est pas mieux que mentir. Apprends à doser ta parole, mon fils.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c2s5',
          background: 'home',
        },

        // --- st2c2s5: Le serment du savant ---
        {
          id: 'st2c2s5',
          chapterId: 'st2c2',
          title: 'Le serment du savant',
          narration: `Le soir, Souhayl retourna à la bibliothèque souterraine. Sidi Ibrahim l'attendait, assis sur son tapis de prière, les yeux fermés, les lèvres remuant dans le dhikr. Quand Souhayl entra, le sage ouvrit les yeux et lui fit signe de s'asseoir.\n\n— Tu as vécu une épreuve importante aujourd'hui, dit-il sans que Souhayl ait rien dit. L'épreuve de la confiance double — la confiance qu'on reçoit et la confiance qu'on doit mériter. Ines t'a confié son secret, et tu as dû choisir entre deux devoirs contradictoires : protéger ta sœur ou dire la vérité à ta mère.\n\nSouhayl hocha la tête, les yeux baissés.\n\n— Ce que tu as fait — aider Ines à dire la vérité elle-même — c'était la réponse du sage, dit Sidi Ibrahim avec un sourire approbateur. Tu n'as ni trahi le secret de ta sœur ni menti à ta mère. Tu as trouvé la troisième voie : celle de la miséricorde dans la vérité. C'est la voie du Prophète ﷺ, qui a dit : « Cherchez la facilité, ne cherchez pas la difficulté. »\n\nSidi Ibrahim se leva et marcha vers le Livre de la Sagesse, qu'il tira de son armoire de cèdre. Il l'ouvrit et le posa devant Souhayl.\n\n— Il est temps de prononcer le serment du gardien du savoir, Souhayl. Ce serment existe depuis la fondation de cette bibliothèque, depuis les premiers jours de la Qarawiyyin. Chaque gardien, au fil des siècles, l'a prononcé. Lis-le.\n\nSouhayl regarda la page. Les caractères arabes brillaient d'une lumière dorée, et les mots qu'il lut le firent trembler de la tête aux pieds :\n\n« أنا حارس العلم، ألا أوفى بالأمانة وأصدق القول وأرحم الخلق — Je suis le gardien du savoir. Je m'engage à respecter le dépôt sacré de la connaissance, à dire la vérité avec sincérité, et à faire preuve de miséricorde envers toute la création. Je ne utiliserai le savoir ni pour tromper, ni pour blesser, ni pour dominer. Je recherche le savoir uniquement pour la face d'Allah, et je le partage avec générosité et humilité. Qu'Allah soit mon témoin. »\n\nSouhayl prit une profonde inspiration, pressa le pendentif contre sa poitrine, et lut le serment à voix haute. Chaque mot résonna dans la bibliothèque comme une note de musique dans une cathédrale, et quand il prononça le dernier mot — « Qu'Allah soit mon témoin » — la lampe de son pendentif s'illumina d'une lumière si intense que toute la salle en fut baignée, et les manuscrits sur les étagères tremblèrent doucement, comme des feuilles dans un vent sacré.\n\nSidi Ibrahim ferma les yeux et un sourire de béatitude illumina son visage.\n\n— Bienvenue, gardien Souhayl. Bienvenue dans la lignée des gardiens du savoir. La troisième et dernière leçon t'attend. Elle viendra de celle sans qui rien de tout cela n'existerait.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "De qui, Sidi ? Qui est la troisième ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "De la femme qui a fondé l'université au-dessus de laquelle nous nous trouvons. De celle qui a sacrifié toute sa fortune pour que des milliers d'enfants comme toi puissent apprendre, grandir et briller. Fatima Al-Fihri. La mère de tous les gardiens.",
              emotion: 'wise',
            },
          ],
          choices: [],
          background: 'inner_world',
          isEnding: true,
          lesson: {
            title: "Amanat al-'Ilm — Le dépôt du savoir",
            content:
              "Souhayl a prononcé le serment du gardien du savoir, s'engageant à respecter trois principes fondamentaux : la véracité (Sidq), la confiance (Amana) et la miséricorde (Rahma). L'Islam enseigne que le savoir est un dépôt sacré confié par Allah, et que celui qui reçoit ce dépôt doit le protéger, le partager et l'utiliser avec responsabilité. Le serment du gardien rappelle que le savoir ne doit jamais servir l'ego, mais toujours la vérité.",
            quote: 'إنا عرضنا الأمانة على السماوات والأرض والجبال فأبين أن يحملنها وأشفقن منها وحملها الإنسان',
            source: 'Coran, Sourate Al-Ahzab (33:72)',
          },
        },
      ],
      lessons: [],
    },

    // ============================================================
    // CHAPTER 3 — L'Héritage de la Lumière (إرث النور)
    // ============================================================
    {
      id: 'st2c3',
      tomeId: 'souhayl_tome2',
      number: 3,
      title: "L'Héritage de la Lumière",
      titleAr: 'إرث النور',
      scenes: [
        // --- st2c3s1: La vision de Fatima Al-Fihri ---
        {
          id: 'st2c3s1',
          chapterId: 'st2c3',
          title: 'La vision de Fatima Al-Fihri',
          narration: `Quand Souhayl ouvrit le Manuscrit des Gardiens pour la troisième fois, la lumière qui en émanait n'était plus bleue — elle était dorée, chaude, comme la lumière du soleil filtrant à travers les vitraux d'une mosquée. Et cette fois, la transformation ne le transporta pas dans un jardin ou une salle d'étude — elle le déposa au milieu d'un chantier de construction, sous le ciel de Fès du neuvième siècle.\n\nLa médina qu'il voyait n'était pas celle qu'il connaissait. C'était une Fès en plein essor, vibrante de vie et d'énergie, où des artisans en pleins travaux taillaient la pierre et assemblaient les briques avec une ferveur qui ressemblait à de la prière. Des échafaudages en bois entouraient une structure colossale — les murs d'une mosquée dont les proportions défiaient l'imagination. Des arcs en fer à cheval s'élevaient vers le ciel, supportés par des colonnes de marbre importé de Carthage, et des ouvriers en djellaba brune montaient et descendaient les échelles avec des seaux de plâtre et des paniers de pierres.\n\nEt au milieu de ce chaos ordonné, sous un dais de soie blanche, une femme observait les travaux. Elle était âgée d'une quarantaine d'années, avec un visage ovale, des yeux d'un noir profond et pénétrant, et un port majestueux qui, sans être imposant, commandait naturellement le respect de tous ceux qui l'entouraient. Elle portait un haïk blanc et un foulard soie, et ses mains — des mains qui avaient jadis compté des pièces d'or et d'argent — étaient posées à plat sur ses genoux avec une quiétude qui contrastait avec l'agitation du chantier.\n\n— Approche, enfant, dit-elle sans détourner le regard des travaux. Je suis Fatima bint Muhammad Al-Fihri. Et si tu es ici, c'est que la bibliothèque t'a jugé digne de me rencontrer.\n\nSouhayl s'avança, ses pieds sur la terre battue du chantier, ses yeux fascinés par la mosque en construction. Des centaines d'ouvriers travaillaient en silence — un silence anormal pour un chantier de cette envergure, comme si chaque geste était une prière et chaque coup de marteau un dhikr.\n\n— Tout ce que tu vois autour de toi, dit Fatima en désignant la mosquée de la main, est construit avec mon argent — chaque brique, chaque colonne, chaque arc. Mon père m'a laissé une grande fortune, et j'ai choisi de la dépenser entièrement pour cela : créer un lieu où le savoir sera libre, accessible et éternel. Un lieu où un enfant pauvre de Fès pourra apprendre les mêmes choses qu'un prince de Bagdad.\n\nSouhayl regarda la femme avec des yeux brillants d'admiration. Il l'avait déjà rencontrée dans les récits de Sidi Ibrahim, mais la voir en chair et en os — ou du moins, en vision — était une expérience radicalement différente. Fatima Al-Fihri n'était pas un personnage de légende. C'était une vraie femme, avec des yeux fatigués mais déterminés, des mains usées par le travail de la supervision, et un cœur immense qui battait sous son haïk blanc.`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Vous avez donné TOUT votre argent ? Même pas un petit peu pour vous ? Et votre famille ? Vos enfants ?",
              emotion: 'surprised',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Souhayl, regarde cette mosquée. Regarde ses murs, ses colonnes, ses arcs. Tout cela est le fruit du sacrifice d'une femme qui a compris la leçon la plus difficile : le vrai trésor ne se garde pas — il se donne. Fatima Al-Fihri n'avait pas d'enfants biologiques, mais cette mosquée, cette université, a enfanté des millions de savants pendant plus de mille deux cents ans. C'est le plus bel héritage qu'une mère puisse laisser.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s2',
          background: 'inner_world',
        },

        // --- st2c3s2: La responsabilité du savoir ---
        {
          id: 'st2c3s2',
          chapterId: 'st2c3',
          title: 'La responsabilité du savoir',
          narration: `Fatima se leva de son siège et marcha lentement vers un mur en construction, ses doigts effleurant les briques fraîches avec la tendresse d'une mère qui caresse le visage de son enfant nouveau-né. Souhayl la suivit, fasciné par la grâce avec laquelle elle se déplaçait au milieu du chantier — pas comme une patronne qui donne des ordres, mais comme une mère qui veille sur sa famille.\n\n— Souhayl, dit-elle en se tournant vers lui, Sidi Ibrahim m'a parlé de toi. Il m'a dit que tu avais appris le Sidq d'Al-Ghazali, l'Amana d'Ibn Sina, et la Rahma du Prophète ﷺ. C'est bien. Ces trois piliers sont les fondations du savant véritable. Mais il y a un quatrième pilier — le plus important de tous — et c'est celui que je veux t'enseigner aujourd'hui.\n\nElle marqua une pause, et ses yeux devinrent plus sérieux, plus profonds, comme des puits sans fond.\n\n— Le quatrième pilier est la responsabilité du savoir. Écoute bien, Souhayl, car c'est peut-être la leçon la plus lourde que tu auras jamais à porter. Le savoir n'est pas neutre. Il n'est pas innocent. Il n'est pas un simple divertissement ou un ornement de l'esprit. Le savoir est une arme — une arme qui peut construire ou détruire, guérir ou blesser, élever ou écraser. Et celui qui porte cette arme est responsable de la manière dont il s'en sert.\n\nFatima désigna la mosquée qui s'élevait autour d'eux.\n\n— Pourquoi, à ton avis, ai-je construit cette université ? Pas seulement pour qu'on y lise des livres. Un livre sans enseignement n'est qu'un objet. J'ai construit cette université pour qu'on y enseigne la responsabilité. Pour que chaque savant qui en sorte comprenne que ses connaissances ne sont pas à lui — elles sont un Amana, un dépôt confié par Allah, et qu'il devra en répondre le Jour du Jugement.\n\nSouhayl sentit chaque mot se déposer dans son cœur comme une pierre dans l'eau, créant des cercles concentriques d'émotion et de compréhension. La responsabilité du savoir — pas seulement la responsabilité de l'avoir, mais la responsabilité de l'utiliser, de le partager, de le protéger.\n\n— Souhayl, continua Fatima, je vais te confier un défi. Pas une épreuve avec un bon ou un mauvais choix — un défi réel, qui nécessitera toute ta sagesse, toute ta sincérité et tout ton courage. Es-tu prêt ?`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "Je suis prêt, Fatima. Quoi qu'il arrive, je ferai de mon mieux. C'est ce que Sidi Ibrahim m'a appris — le meilleur n'est pas de ne jamais se tromper, c'est de ne jamais cesser d'essayer.",
              emotion: 'determined',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Le Prophète ﷺ a dit : « Chacun de vous est un berger, et chacun de vous est responsable de son troupeau. » Le savant est le berger du savoir, Souhayl. Il est responsable de la manière dont il le garde, de la manière dont il le partage, et de la manière dont il le transmet. C'est le plus lourd des fardeaux, et aussi le plus noble.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s3',
          background: 'inner_world',
        },

        // --- st2c3s3: L'épreuve finale ---
        {
          id: 'st2c3s3',
          chapterId: 'st2c3',
          title: "L'épreuve finale",
          narration: `Fatima Al-Fihri leva la main, et le chantier de construction se figea. Les ouvriers s'immobilisèrent en plein geste, les seaux de plâtre restèrent suspendus en l'air, et les marteaux s'arrêtèrent au milieu de leur arc. Le temps lui-même semblait avoir retenu son souffle.\n\n— Souhayl, dit Fatima d'une voix qui résonnait dans le silence comme un écho dans une cathédrale vide, voici ton défi : je vais te confier un savoir — un seul savoir, une seule information — et tu devras décider à qui le transmettre, comment le transmettre, et pourquoi. Il n'y a pas de bonne ou de mauvaise réponse. Il y a seulement ta réponse — et c'est ta réponse qui définira le genre de gardien que tu seras.\n\nFatima tendit la main et, dans sa paume ouverte, une lumière dorée apparut — petite, délicate, comme la flamme d'une bougie. Elle pulsat doucement, vivante, et Souhayl sentait qu'elle contenait une énergie immense, une énergie qui n'était pas matérielle mais spirituelle.\n\n— Cette lumière, dit Fatima, représente un savoir puissant — un savoir qui peut guérir un cœur brisé, mais qui peut aussi blesser un cœur innocent si on l'utilise mal. Tu as trois personnes à qui tu pourrais la confier.\n\nFatima fit un geste, et trois silhouettes apparurent devant Souhayl.\n\nLa première était un homme âgé, assis seul dans une pièce sombre, le visage baigné de larmes. Son cœur était lourd d'un chagrin qu'il ne pouvait pas nommer, et ses yeux cherchaient désespérément une lumière qui lui donnerait le courage de continuer.\n\nLa deuxième était un jeune homme arrogant, debout sur une chaire, entouré d'admirateurs qui l'applaudissaient. Ses yeux brillaient d'orgueil, et il cherchait avidement un savoir qui augmenterait encore son pouvoir et sa renommée.\n\nLa troisième était une petite fille — et Souhayl reconnut Ines — assise dans le jardin de la maison familiale, les yeux levés vers le ciel avec une curiosité pure et innocente. Elle ne cherchait rien — elle était simplement ouverte, disponible, réceptive.\n\n— À qui vas-tu confier cette lumière, Souhayl ? demanda Fatima. L'homme triste qui en a besoin ? Le jeune homme ambitieux qui la veut ? Ou la petite fille qui ne sait même pas qu'elle en a besoin ?`,
          dialogues: [
            {
              characterId: 'souhayl',
              text: "L'homme triste en a besoin, le jeune homme ambitieux la veut, et Ines ne sait pas qu'elle en a besoin... Comment choisir ?",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "Souhayl, souviens-toi : le savoir est une Amana — un dépôt sacré. La question n'est pas seulement à qui tu donnes, mais comment tu donnes, et avec quelle intention. Pes bien chaque option.",
              emotion: 'wise',
            },
          ],
          choices: [
            {
              id: 'st2c3s3_c1',
              text: "Donner la lumière aux trois — chacun selon sa capacité de la recevoir",
              nextSceneId: 'st2c3s4a',
              badgeId: 'hikma',
              isCorrect: true,
            },
            {
              id: 'st2c3s3_c2',
              text: "Donner la lumière à l'homme triste — il en a le plus besoin",
              nextSceneId: 'st2c3s4b',
            },
            {
              id: 'st2c3s3_c3',
              text: "Ne donner la lumière à personne — elle est trop dangereuse",
              nextSceneId: 'st2c3s4c',
            },
          ],
          background: 'inner_world',
        },

        // --- st2c3s4a: La sagesse du partage ---
        {
          id: 'st2c3s4a',
          chapterId: 'st2c3',
          title: 'La sagesse du partage',
          narration: `Souhayl réfléchit longuement. Les trois silhouettes se tenaient devant lui, immobiles, attendant sa décision. L'homme triste pleurait. Le jeune homme arrogant souriait. La petite fille regardait le ciel.\n\nPuis Souhayl prit une décision qui vint non pas de son intellect, mais de son cœur — de ce cœur que Sidi Ibrahim avait façonné pendant des semaines, alimenté par les leçons d'Al-Ghazali, d'Ibn Sina et de Fatima Al-Fihri elle-même.\n\n— Je vais la donner aux trois, dit-il. Mais pas de la même manière.\n\nFatima leva un sourcil. Son visage s'illumina d'un intérêt soudain.\n\n— Continue.\n\n— À l'homme triste, dit Souhayl, je donnerai la lumière en entier. Il a besoin d'être guéri, et le savoir peut le guérir. Je m'assoirai à côté de lui, je lui parlerai avec douceur, et je partagerai avec lui ce que j'ai appris sur la patience et la confiance en Allah. Comme Sidi Ibrahim l'a fait pour moi.\n\nAu jeune homme arrogant, je donnerai la lumière, mais différemment. Pas pour qu'il la montre aux autres, mais pour qu'il l'utilise pour se remettre en question. Je ne lui donnerai pas le savoir lui-même — je lui donnerai les questions. Les mêmes questions qu'Al-Ghazali s'est posées : « Suis-je sincère ? Est-ce que je crois vraiment à ce que j'enseigne ? » Car parfois, la meilleure façon de partager le savoir est de poser les bonnes questions.\n\nEt à Ines, à ma petite sœur, je ne donnerai pas la lumière maintenant. Elle est trop jeune, trop innocente. Mais je lui donnerai quelque chose de plus précieux : un environnement où la lumière pourra grandir naturellement. Je l'emmènerai avec moi à la bibliothèque, un jour, quand elle sera prête. Et là, elle découvrira le savoir par elle-même, à son rythme, comme un arbre qui grandit à sa propre vitesse.\n\nLe silence qui suivit dura une éternité. Puis Fatima Al-Fihri sourit — un sourire si large, si lumineux, que Souhayl sentit tout son être s'illuminer en réponse.\n\n— Tu as compris, dit-elle d'une voix émue. Tu as compris la plus grande leçon de toutes : le savoir ne se donne pas de la même manière à tout le monde. Il faut adapter le message au cœur de celui qui le reçoit. C'est cela, la vraie sagesse — la Hikma. L'Imam Ali a dit : « Parle aux gens selon leur niveau de compréhension. » Et toi, Souhayl, tu viens de faire exactement cela.\n\nLa lumière dorée dans la main de Fatima se divisa en trois flammes — une pour chaque personne — et les trois flammes s'envolèrent, chacune vers sa destination, comme des lucioles dans la nuit. L'homme triste leva les yeux et ses larmes se transformèrent en un sourire. Le jeune arrogant recula d'un pas, troublé, mais ses yeux changèrent — l'orgueil fit place à la réflexion. Et Ines, dans le jardin, regarda une étoile filante traverser le ciel et murmura : « Masha'Allah... »\n\nSouhayl sentit le pendentif contre sa poitrine briller d'une lumière si intense qu'elle illuminait tout son corps. Il était, pour la première fois, un véritable gardien du savoir.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le Prophète ﷺ a dit : « Transmettez de moi, même un seul verset. » Souhayl, tu as compris que la transmission du savoir n'est pas une simple répétition — c'est un acte d'amour. Adapter le message au cœur du récepteur, c'est la plus haute forme de sagesse. Fatima Al-Fihri elle-même a compris cela quand elle a ouvert les portes de la Qarawiyyin à tous — riches et pauvres, hommes et femmes, musulmans et non-musulmans. Car le savoir, comme la lumière, ne doit jamais être réservé à quelques-uns.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s5',
          background: 'inner_world',
          earnedBadgeId: 'hikma',
          lesson: {
            title: "Al-Hikma — La sagesse du partage",
            content:
              "Souhayl a appris la leçon la plus importante du gardien du savoir : la Hikma (الحكمة) — la sagesse de partager le savoir selon la capacité du récepteur. L'Imam Ali a dit : « Parle aux gens selon leur niveau de compréhension. » Le savoir ne se transmet pas de manière uniforme — il faut l'adapter au cœur, à l'esprit et à la maturité de celui qui le reçoit. C'est la plus haute forme de sagesse et la plus grande des responsabilités.",
            quote: 'حدثوا الناس بما يعرفون أتحبون أن يكذب الله ورسوله',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },

        // --- st2c3s4b: La compassion sélective ---
        {
          id: 'st2c3s4b',
          chapterId: 'st2c3',
          title: 'La compassion sélective',
          narration: `Souhayl fit son choix : l'homme triste. C'était le choix le plus évident, le plus naturel, le plus compatissant. L'homme avait besoin d'aide, et Souhayl avait quelque chose à offrir. Il s'avança et tendit la lumière vers l'homme en larmes.\n\nLa lumière quitta sa main et alla se loger dans la poitrine de l'homme. Pour un instant, Souhayl vit le visage du vieillard s'illuminer d'un espoir fragile, comme une bougie qui s'allume dans une pièce sombre. Mais aussitôt, quelque chose d'inattendu se produisit.\n\nLe jeune homme arrogant, qui n'avait rien reçu, regarda la scène avec des yeux flamboyants de jalousie. Son visage se durcit, et dans ses yeux, Souhayl vit naître un sentiment terrible — non pas seulement la jalousie, mais le ressentiment, la certitude que le savoir était réservé à quelques-uns, que la lumière ne brillait que pour ceux qui étaient « dignes » selon des critères qu'il définissait lui-même.\n\nQuant à Ines, la petite fille dans le jardin, elle ne comprit même pas ce qui s'était passé. Elle regarda le ciel avec ses yeux innocents, vit une étoile filante, et murmura « Masha'Allah » sans savoir qu'une lumière avait brillé et s'était éteinte sans qu'elle puisse la voir.\n\nFatima Al-Fihri posa sa main sur l'épaule de Souhayl.\n\n— Tu as été compatissant, Souhayl, et la compassion est une grande vertu. Mais la compassion sélective n'est pas la vraie sagesse. Le savoir est comme la lumière du soleil — il ne choisit pas sur qui il brille. Il brille sur tout le monde, sur les bons et sur les moins bons, sur les riches et sur les pauvres, sur les savants et sur les enfants. La vraie sagesse, Souhayl, est de trouver un moyen de partager avec chacun — pas la même chose, mais la bonne chose. Refais ton choix.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le Prophète ﷺ a dit : « L'exemple du savant qui enseigne le bien et ne l'applique pas est comme la pluie qui tombe sur le sol sans y faire pousser de l'herbe. » Mais aussi : « Celui qui cache un savoir qu'on lui a demandé, on lui mettra un frein de feu le Jour de la Résurrection. » Le savoir doit être partagé, Souhayl, mais avec discernement.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s4a',
          background: 'inner_world',
        },

        // --- st2c3s4c: Le savoir jalousement gardé ---
        {
          id: 'st2c3s4c',
          chapterId: 'st2c3',
          title: 'Le savoir jalousement gardé',
          narration: `Souhayl serra la lumière dans ses mains et recula d'un pas. La lumière dorée pulsa entre ses doigts, chaude et vibrante, comme un cœur qui bat.\n\n— Non, dit-il. Je ne la donne à personne. C'est trop dangereux. L'homme triste pourrait mal l'utiliser. Le jeune arrogant la transformerait en arme. Et Ines est trop jeune. Mieux vaut la garder. La protéger.\n\nLa lumière dans ses mains commença à faiblir. Pas soudainement, pas violemment — doucement, progressivement, comme une bougie qui meurt quand on la couvre d'un verre. La chaleur diminua, la brillance s'atténua, et Souhayl sentit quelque chose d'horrible se produire : la lumière qu'il essayait de protéger s'éteignait précisément parce qu'il la protégeait.\n\nFatima Al-Fihri secoua la tête avec une tristesse infinie.\n\n— Souhayl, le savoir qui n'est pas partagé est un savoir qui meurt. C'est la loi la plus fondamentale de la connaissance. Un livre fermé ne sert à personne. Une lampe cachée sous un lit n'éclaire personne. Le savoir n'est pas comme l'or ou l'argent — il ne perd pas de valeur quand on le donne. Il gagne de la valeur. Chaque fois que tu partages un savoir, il se multiplie. Chaque fois que tu le gardes pour toi, il diminue.\n\nLa lumière dans les mains de Souhayl s'éteignit complètement, et ses mains se refermèrent sur le vide. L'obscurité enveloppa le chantier, et Souhayl sentit le froid de la solitude envahir son être.\n\n— Refais ton choix, murmura Fatima. Et cette fois, souviens-toi : le savoir est fait pour être partagé, pas pour être jalousement gardé.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le Prophète ﷺ a dit : « Quiconque cache un savoir qu'on lui a demandé sera bridé avec un frein de feu le Jour de la Résurrection. » Le savoir qui n'est pas partagé est une lumière éteinte, un arbre stérile, une rivière tarie. Protéger le savoir ne signifie pas le cacher — cela signifie le transmettre avec sagesse et responsabilité.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s4a',
          background: 'inner_world',
        },

        // --- st2c3s5: La transmission ---
        {
          id: 'st2c3s5',
          chapterId: 'st2c3',
          title: 'La transmission',
          narration: `Le monde de Fatima Al-Fihri commença à s'effacer doucement, comme un tableau impressionniste que la pluie lave. La mosquée en construction, le chantier animé, les ouvriers figés dans leur geste — tout reprit sa couleur, puis sa forme, puis sa substance, jusqu'à ce que Souhayl se retrouve de nouveau dans la bibliothèque souterraine de la Qarawiyyin, assis face à Sidi Ibrahim, le Manuscrit des Gardiens ouvert sur ses genoux.\n\nMais quelque chose avait changé. Souhayl sentait que ses yeux voyaient différemment, que ses oreilles entendaient différemment, que son cœur ressentait différemment. Les leçons d'Al-Ghazali sur la sincérité, d'Ibn Sina sur la confiance, de Fatima Al-Fihri sur la responsabilité — toutes ces leçons n'étaient plus des concepts abstraits. Elles avaient pris racine en lui, comme des graines dans une terre fertile, et elles poussaient, lentement mais sûrement, transformant non seulement ce qu'il savait, mais ce qu'il était.\n\nSidi Ibrahim le regardait avec des yeux qui brillaient d'une fierté immense. Le vieux sage prit le Manuscrit des Gardiens, le referma délicatement, et le remit sur l'étagère d'où il l'avait tiré. Puis il se tourna vers Souhayl et, avec une solennité que le garçon n'avait jamais vue chez lui, il parla :\n\n— Souhayl El Amrani, tu as accompli les trois épreuves des Gardiens du Savoir. La première épreuve, celle d'Al-Ghazali, t'a enseigné le Sidq — la véracité, la sincérité sans laquelle le savoir est un mensonge. La deuxième épreuve, celle d'Ibn Sina, t'a enseigné l'Amana — la confiance, la responsabilité sans laquelle le savoir est un danger. La troisième épreuve, celle de Fatima Al-Fihri, t'a enseigné la Hikma — la sagesse, la capacité de partager le savoir selon les besoins de chacun.\n\nSidi Ibrahim se leva, et Souhayl vit que le vieillard tremblait légèrement — non pas de faiblesse, mais d'émotion.\n\n— Souhayl, je suis vieux. Très vieux. J'ai été le gardien de cette bibliothèque pendant plus de quarante ans. Avant moi, il y eut d'autres gardiens, et avant eux, d'autres encore, jusqu'au jour où Fatima Al-Fihri elle-même, par un acte de volonté et de générosité sans précédent, a fondé cette institution et lui a donné une âme. Aujourd'hui, Souhayl, c'est toi qui portes la lumière. Ce n'est pas un fardeau que je t'impose — c'est un honneur que tu as mérité.\n\nSouhayl sentit ses yeux se mouiller. Il pressa le pendentif contre sa poitrine — le pendentif en forme de lampe qui brillait désormais d'une lumière constante, chaude et inébranlable — et leva les yeux vers Sidi Ibrahim.\n\n— Je serai un bon gardien, dit-il d'une voix émue mais déterminée. Je partagerai le savoir avec sincérité, je le protégerai avec confiance, et je le transmettrai avec sagesse. C'est ma promesse. À Allah, à vous, Sidi Ibrahim, et à tous les gardiens qui sont venus avant moi.`,
          dialogues: [
            {
              characterId: 'sidi_ibrahim',
              text: "Le Prophète ﷺ a dit : « Si la fin du monde approche pendant que l'un de vous tient une palme dans sa main, qu'il la plante. » Souhayl, plante ta palme. Enseigne ce que tu sais. Partage ce que tu as reçu. Et souviens-toi toujours : le gardien du savoir n'est pas celui qui accumule — c'est celui qui transmet.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Sidi Ibrahim... est-ce que je pourrai revenir ? Souvent ? Il y a encore tellement à apprendre...",
              emotion: 'neutral',
            },
            {
              characterId: 'sidi_ibrahim',
              text: "La bibliothèque sera toujours là pour toi, Souhayl. Chaque fois que tu auras soif de savoir, chaque fois que tu auras besoin de sagesse, chaque fois que tu douteras — la porte sera ouverte. C'est la promesse de Fatima Al-Fihri à tous les gardiens : « Ma porte est ouverte à quiconque cherche avec sincérité. » Maintenant va, Souhayl. Va et illumine le monde avec ce que tu as appris. Bismillah.",
              emotion: 'wise',
            },
          ],
          choices: [],
          nextSceneId: 'st2c3s6',
          background: 'inner_world',
        },

        // --- st2c3s6: Le nouveau gardien ---
        {
          id: 'st2c3s6',
          chapterId: 'st2c3',
          title: 'Le nouveau gardien',
          narration: `Souhayl remonta les marches de la bibliothèque pour la dernière fois de ce voyage, le Manuscrit des Gardiens encore ouvert dans son esprit, les paroles de Sidi Ibrahim encore résonnant dans son cœur comme le dernier écho d'un chant merveilleux.\n\nQuand il déboucha dans la ruelle de la Qarawiyyin, Fès l'accueillit avec ses couleurs du crépuscule — or, rose, violet, indigo — et les minarets de la vieille ville lancèrent l'appel à la prière du Maghrib, leurs voix se superposant dans une harmonie céleste qui faisait vibrer l'air comme les cordes d'un oud géant joué par des anges.\n\nSouhayl s'arrêta au milieu de la ruelle, ferma les yeux, et écouta. Il écouta non seulement l'adhan, mais aussi la ville — le bruit des marchands qui fermaient leurs boutiques, le chant des enfants qui jouaient dans les ruelles, le murmure de la fontaine publique, le cliquetis des babouches sur les pavés, et au-delà de tout cela, le silence profond et ancien des pierres de Fès, qui avaient vu passer des siècles de savoir, de prière et de sagesse.\n\nEt Souhayl comprit, avec une clarté qui illuminait chaque coin de son être, que la bibliothèque n'était pas seulement sous la Qarawiyyin — elle était partout. Dans chaque livre ouvert, dans chaque mot sincère, dans chaque geste de générosité, dans chaque question posée avec humilité, dans chaque vérité dite avec douceur, dans chaque secret gardé avec confiance, dans chaque savoir partagé avec sagesse.\n\nLa bibliothèque, c'était le monde lui-même. Et chaque être humain en était un gardien.\n\nIl pressa le pendentif contre sa poitrine et sentit la lampe briller — non pas avec l'éclat d'un feu nouveau, mais avec la douceur constante d'une étoile qui ne s'éteint jamais. Et dans cette lumière, Souhayl vit, projetée sur le mur ocre de la ruelle, une ombre délicate — l'ombre de Fatima Al-Fihri, debout près de la porte de la Qarawiyyin, le sourire aux lèvres, observant le nouveau gardien avec la fierté d'une mère qui regarde son enfant prendre son premier pas.\n\nSouhayl sourit à son tour, leva les yeux vers les étoiles, et murmura, les lèvres tremblantes d'émotion :\n\n— Alhamdulillah. Louange à Allah. Pour le savoir. Pour les enseignants. Pour les gardiens. Pour Sidi Ibrahim. Pour Ines. Pour maman et papa. Pour tous ceux qui partagent la lumière. Et pour cette ville, Fès, qui porte dans ses pierres la mémoire du monde.\n\nIl tourna les talons et marcha vers la maison, ses babouches claquant sur les pavés de la ruelle, le pendentif brillant contre sa poitrine, et dans son sillage, la lumière dorée de la bibliothèque effleurait les murs anciens comme une caresse silencieuse.\n\nUn nouveau gardien marchait dans les ruelles de Fès. Et avec lui, le savoir continuait de vivre.`,
          dialogues: [
            {
              characterId: 'youssef',
              text: "Souhayl, mon fils. Assieds-toi. Ta mère et moi voulions te dire quelque chose. Nous avons vu le changement en toi — pas seulement dans tes études, mais dans ta manière d'être, de parler, de regarder le monde. Ton cœur a grandi, mon fils. Et quand le cœur d'un enfant grandit, c'est le signe qu'Allah l'aime.",
              emotion: 'wise',
            },
            {
              characterId: 'fatima',
              text: "Ton grand-père maternel me disait toujours : « Le meilleur héritage qu'on puisse laisser à ses enfants n'est ni l'or ni l'argent — c'est le savoir et la bonne éducation. » Souhayl, tu es cet héritage. Tu es la lumière que nos ancêtres ont allumée et que tu portes maintenant dans ton cœur. Ne laisse jamais cette lumière s'éteindre, mon grand.",
              emotion: 'wise',
            },
            {
              characterId: 'souhayl',
              text: "Je ne l'éteindrai jamais, maman. Je promets de la protéger, de la nourrir et de la partager. C'est ma mission de gardien. Et le premier à qui je veux la partager... c'est Ines. Elle mérite de connaître ce monde aussi. À sa manière, à son rythme, comme m'a appris Fatima Al-Fihri.",
              emotion: 'determined',
            },
            {
              characterId: 'ines',
              text: "Quoi ? Un secret ? Encore ? Souhayl ! Tu me le promets, hein ? Tu me promets que tu vas me le dire !",
              emotion: 'happy',
            },
            {
              characterId: 'souhayl',
              text: "Pas un secret, Ines. Une promesse. Un jour, je vais t'emmener dans le plus beau lieu du monde. Un lieu plein de livres, de lumière et de sagesse. Et là, tu découvriras que le savoir est la plus grande aventure de toutes. Attends-moi, petite sœur. Le meilleur est à venir.",
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'home',
          isEnding: true,
          lesson: {
            title: 'Risalat al-Hafiz — La mission du gardien',
            content:
              "Souhayl a complété sa formation de gardien du savoir en intégrant les trois piliers fondamentaux : le Sidq (la véracité d'Al-Ghazali), l'Amana (la confiance d'Ibn Sina), et la Hikma (la sagesse de Fatima Al-Fihri). Le gardien du savoir n'est pas celui qui accumule — c'est celui qui transmet. Comme l'a dit le Prophète ﷺ : « Transmettez de moi, même un seul verset. » Le savoir est un héritage vivant qui ne meurt que quand on cesse de le partager.",
            quote: 'بلغوا عني ولو آية',
            source: 'Hadith — Sahih al-Bukhari',
          },
        },
      ],
      lessons: [],
    },
  ],
  monsters: ['Al-Kadhib — الكاذب (Le Menteur)', 'Al-Khiyana — الخيانة (La Trahison)'],
  spiritualLesson:
    "Le deuxième tome de Souhayl enseigne que le savoir sans sincérité (Sidq) est une prison dorée, que la connaissance sans confiance (Amana) est une arme dangereuse, et que le savoir sans sagesse (Hikma) est un arbre stérile. À travers les histoires d'Al-Ghazali — qui a eu le courage de douter de ses propres certitudes —, d'Ibn Sina — qui a sacrifié sa carrière plutôt que de trahir sa conscience —, et de Fatima Al-Fihri — qui a donné toute sa fortune pour que le savoir soit accessible à tous —, Souhayl apprend que la véritable responsabilité du gardien n'est pas d'accumuler le savoir, mais de le transmettre avec sincérité, confiance et sagesse. Le pendentif qui brille dans la poitrine de Souhayl rappelle que la lumière du savoir ne diminue jamais quand on la partage — elle grandit.",
};
