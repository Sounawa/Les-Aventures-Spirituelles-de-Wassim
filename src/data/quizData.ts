export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {

  // ================================================================
  // TOME 1 — Al-'Ilm (العِلم) — La Connaissance
  // ================================================================

  t1c1: [
    { question: "Où Souhayl découvre-t-il la bibliothèque magique ?", options: ["Sous sa maison à Fès", "Sous la mosquée Qarawiyyin", "Dans le palais royal", "Au sommet du mont Zerhoun"], correctIndex: 1, explanation: "Souhayl découvre une bibliothèque secrète cachée sous la mosquée Qarawiyyin, la plus ancienne université du monde fondée à Fès. C'est Sidi Mu'adh qui le guide jusqu'à ce lieu magique." },
    { question: "Comment s'appelle le vieux sage aux yeux verts qui guide Souhayl ?", options: ["Sidi Ahmad", "Sidi Mu'adh", "Sidi Ali", "Sidi Omar"], correctIndex: 1, explanation: "Sidi Mu'adh est un vieil homme sage aux yeux verts qui devient le guide spirituel de Souhayl. Il connaît les secrets de la bibliothèque et initie Souhayl au savoir des anciens savants musulmans." },
    { question: "Quel est le métier du père de Souhayl ?", options: ["Boulanger", "Marchand de tapis", "Enseignant à la madrasa", "Architecte"], correctIndex: 2, explanation: "Mehdi, le père de Souhayl, enseigne à la madrasa de Fès. Il transmet le savoir islamique aux enfants, ce qui inspire Souhayl dans sa quête de connaissance." },
    { question: "Combien de frères a Souhayl et comment s'appellent-ils ?", options: ["Un frère : Nawfel", "Deux frères : Nawfel et Wassim", "Aucun frère", "Trois frères"], correctIndex: 1, explanation: "Souhayl a deux frères : Nawfel (8 ans) et Wassim (6 ans). Ils forment une famille aimante à Fès avec leurs parents Mehdi et Aziza." },
  ],

  t1c2: [
    { question: "Qui a fondé la mosquée-université Qarawiyyin ?", options: ["Imam Malik", "Fatima Al-Fihri (فاطمة الفهرية)", "Ibn Sina", "Salahuddin"], correctIndex: 1, explanation: "Fatima Al-Fihri, une femme extraordinaire de Fès, a fondé la Qarawiyyin en 859. Souhayl apprend que le savoir n'est pas réservé aux hommes — les femmes ont été des piliers de la civilisation islamique." },
    { question: "Quel savant Souhayl rencontre-t-il dans le premier tome à travers le manuscrit magique ?", options: ["Al-Ghazali", "Imam Malik (إمام مالك)", "Ibn Al-Qayyim", "Rabia Al-Adawiyya"], correctIndex: 1, explanation: "Imam Malik, l'un des plus grands savants de l'islam, apparaît dans le manuscrit magique. Il enseigne à Souhayl que la connaissance commence par le respect et l'écoute attentive." },
    { question: "Que signifie Al-'Ilm (العِلم) ?", options: ["La patience", "La vérité", "La connaissance / le savoir", "La sagesse"], correctIndex: 2, explanation: "Al-'Ilm signifie la connaissance, le savoir. C'est le premier pilier que Souhayl explore dans la bibliothèque magique. Le Prophète ﷺ a dit : « La quête du savoir est une obligation pour chaque musulman. »" },
    { question: "Quel verset coranique Sidi Mu'adh cite-t-il sur la lecture et le savoir ?", options: ["Al-Fatiha (1:1)", "Iqra' — « Lis ! Au nom de ton Seigneur » (96:1)", "Al-Ikhlas (112:1)", "Al-Kawthar (108:1)"], correctIndex: 1, explanation: "Le premier verset révélé au Prophète ﷺ est « Iqra' — Lis ! » (Sourate Al-'Alaq 96:1). Sidi Mu'adh rappelle à Souhayl que l'islam commence par une invitation à lire et à apprendre." },
  ],

  // ================================================================
  // TOME 2 — As-Sidq (الصِّدق) — La Vérité / La Sincérité
  // ================================================================

  t2c1: [
    { question: "Que signifie As-Sidq (الصِّدق) ?", options: ["La patience", "La vérité / la sincérité", "La justice", "La sagesse"], correctIndex: 1, explanation: "As-Sidq signifie la vérité, la sincérité et l'honnêteté. Dans le deuxième tome, Souhayl apprend qu'être sincère dans ses paroles et ses actes est la base de tout rapport avec Allah et avec les gens." },
    { question: "Quel grand savant enseigne à Souhayl la sincérité dans le deuxième tome ?", options: ["Imam Malik", "Al-Ghazali (الغزالي)", "Ibn Sina", "Umar ibn Al-Khattab"], correctIndex: 1, explanation: "Al-Ghazali, le grand savant perse, apparaît dans le manuscrit et enseigne à Souhayl que l'Ikhlas (الإخلاص) — la sincérité pure — est le trésor le plus précieux du cœur. Faire les choses uniquement pour Allah, sans chercher la louange des gens." },
    { question: "Que signifie l'Amana (الأمانة) — la confiance ?", options: ["Le courage au combat", "Le dépôt sacré qu'on doit préserver et rendre", "La prière du soir", "Le pèlerinage à La Mecque"], correctIndex: 1, explanation: "L'Amana est le dépôt sacré, la confiance. Ibn Sina enseigne à Souhayl qu'une promesse tenue est comme une lumière dans le cœur. Quand on garde une confiance, on renforce son lien avec Allah." },
    { question: "Que dit Al-Ghazali à Souhayl sur les intentions ?", options: ["« Les actes importent plus que les intentions »", "« Certes, les actions ne valent que par les intentions » (إنما الأعمال بالنيات)", "« Seules les grandes actions comptent »", "« L'intention n'a pas d'importance »"], correctIndex: 1, explanation: "Al-Ghazali rappelle le hadith fondamental : « إنما الأعمال بالنيات » — les actes ne valent que par les intentions. Sourire à son frère avec sincérité vaut plus qu'une grande action faite pour se montrer." },
  ],

  t2c2: [
    { question: "Quel rôle Fatima Al-Fihri joue-t-elle dans le deuxième tome ?", options: ["Elle montre à Souhayl comment construire une mosquée", "Elle lui enseigne la sagesse de la transmission du savoir", "Elle lui apprend la calligraphie", "Elle raconte des histoires de Fès"], correctIndex: 1, explanation: "Fatima Al-Fihri apparaît dans le manuscrit pour enseigner à Souhayl que le vrai savoir se transmet avec sagesse et sincérité. Elle a donné toute sa fortune pour fonder la Qarawiyyin, un acte de générosité désintéressée." },
    { question: "Quelle épreuve Souhayl vit-il concernant la vérité à la madrasa ?", options: ["Un examen de mathématiques très difficile", "Il doit avouer une erreur qu'il a cachée par fierté", "Un concours de calligraphie", "Un match de football"], correctIndex: 1, explanation: "Souhayl est confronté à un choix difficile : admettre une erreur qu'il a commise ou la cacher par fierté. Il choisit la vérité, apprenant qu'As-Sidq demande du courage et de l'humilité." },
    { question: "Que dit Nawfel à Souhayl quand celui-ci avoue son erreur ?", options: ["« Tu aurais dû te taire »", "« Je suis fier de toi, c'est courageux de dire la vérité »", "« Ce n'est pas grave »", "« Je le savais déjà »"], correctIndex: 1, explanation: "Nawfel, le frère de Souhayl, le soutient en reconnaissant le courage qu'il a fallu pour dire la vérité. La famille de Souhayl est un pilier de soutien dans son cheminement." },
    { question: "Quel hadith Sidi Mu'adh cite-t-il sur la vérité ?", options: ["« La vérité est une lumière dans le cœur »", "« Dites la vérité, même si elle est amère » (attribué au Prophète ﷺ)", "« Le mensonge est parfois permis »", "« Seuls les savants doivent dire la vérité »"], correctIndex: 1, explanation: "Sidi Mu'adh enseigne à Souhayl que la vérité est une lumière. Le Prophète ﷺ a dit de toujours dire la vérité, même quand c'est difficile. As-Sidq purifie le cœur et rapproche d'Allah." },
  ],

  // ================================================================
  // TOME 3 — Al-Akhlaq (الأخلاق) — Le Bon Caractère
  // ================================================================

  t3c1: [
    { question: "Que signifie Al-Akhlaq (الأخلاق) ?", options: ["La prière", "Le bon caractère / les bonnes manières", "Le jeûne", "Le pèlerinage"], correctIndex: 1, explanation: "Al-Akhlaq signifie le bon caractère, les bonnes manières, la moralité. Le Prophète ﷺ a dit : « J'ai été envoyé pour parfaire les nobles caractères. » C'est le cœur de l'enseignement du troisième tome." },
    { question: "Quel compagnon du Prophète ﷺ enseigne la justice à Souhayl ?", options: ["Abu Bakr As-Siddiq", "Umar ibn Al-Khattab (عمر بن الخطاب)", "Ali ibn Abi Talib", "Bilal ibn Rabah"], correctIndex: 1, explanation: "Umar ibn Al-Khattab, le deuxième calife, apparaît dans le manuscrit. Connu pour sa justice impeccable, il enseigne à Souhayl que Adl (العدل) — la justice — est le fondement de toute société." },
    { question: "Que signifie Adl (العدل) ?", options: ["La patience", "La justice / l'équité", "Le courage", "La générosité"], correctIndex: 1, explanation: "Adl signifie la justice, l'équité. Umar ibn Al-Khattab enseigne à Souhayl que la justice consiste à traiter chacun avec équité, même quand c'est difficile — surtout quand c'est difficile." },
    { question: "Qui est Rabia Al-Adawiyya (ربيعة العدوية) ?", options: ["Une reine de l'Andalousie", "Une grande sainte connue pour son amour d'Allah", "La mère de Souhayl", "Une savante de médecine"], correctIndex: 1, explanation: "Rabia Al-Adawiyya est une grande sainte de l'islam, célèbre pour son amour pur d'Allah. Elle enseigne à Souhayl que la plus belle prière est celle qui naît de l'amour sincère, pas de la peur ou de l'habitude." },
  ],

  t3c2: [
    { question: "Quelle leçon Salahuddin (صلاح الدين) enseigne-t-il à Souhayl ?", options: ["Comment diriger une armée", "La Rahma (الرحمة) — la miséricorde même envers ses ennemis", "Comment construire des châteaux", "L'art de la stratégie"], correctIndex: 1, explanation: "Salahuddin Al-Ayyubi, le grand champion de l'islam, est connu pour sa miséricorde extraordinaire. Il a pardonné à ses ennemis vaincus, enseignant à Souhayl que la vraie force est dans la miséricorde, pas dans la vengeance." },
    { question: "Que signifie Rahma (الرحمة) ?", options: ["La colère", "La miséricorde / la compassion", "La patience", "La prière"], correctIndex: 1, explanation: "Rahma signifie la miséricorde, la compassion. C'est l'un des plus beaux noms d'Allah (Ar-Rahman, Ar-Rahim). Salahuddin montre à Souhayl que la miséricorde est le signe des plus forts." },
    { question: "Comment Souhayl applique-t-il la justice dans sa vie quotidienne ?", options: ["Il devient juge à la madrasa", "Il partage équitablement ses affaires avec Nawfel et Wassim", "Il rend des verdicts", "Il écrit un livre de lois"], correctIndex: 1, explanation: "Souhayl apprend à partager avec justice entre ses frères Nawfel et Wassim. La justice commence à la maison — c'est la leçon d'Umar ibn Al-Khattab appliquée dans la vie de tous les jours." },
    { question: "Que dit le Prophète ﷺ sur le bon caractère ?", options: ["« Le meilleur d'entre vous est celui qui a le meilleur caractère »", "« Le savant est meilleur que le croyant »", "« Seules les prières comptent »", "« Le riche est le meilleur »"], correctIndex: 0, explanation: "Le Prophète ﷺ a dit : « Le meilleur d'entre vous est celui qui a le meilleur caractère. » (Bukhari & Muslim). Al-Akhlaq est la mesure la plus importante aux yeux d'Allah." },
  ],

  // ================================================================
  // TOME 4 — As-Sabr (الصبر) — La Patience
  // ================================================================

  t4c1: [
    { question: "Que signifie As-Sabr (الصبر) ?", options: ["La prière", "La patience / la persévérance", "Le courage", "La vérité"], correctIndex: 1, explanation: "As-Sabr signifie la patience, la persévérance, l'endurance. C'est la qualité que Souhayl doit développer dans le quatrième tome quand il traverse des moments difficiles dans sa quête de savoir." },
    { question: "Quel savant enseigne à Souhayl la patience dans l'apprentissage ?", options: ["Al-Ghazali", "Ibn Al-Qayyim (ابن القيم)", "Imam Malik", "Fatima Al-Fihri"], correctIndex: 1, explanation: "Ibn Al-Qayyim, le grand savant et élève d'Ibn Taymiyya, apparaît dans le manuscrit pour enseigner à Souhayl que le savoir demande de la patience. Un livre compris vaut mieux que dix livres survolés." },
    { question: "Qui est Hajar (هاجر) et quelle leçon enseigne-t-elle ?", options: ["Une reine d'Égypte", "L'épouse d'Ibrahim — elle a montré une confiance totale en Allah dans le désert", "Une savante de Fès", "La mère de Fatima Al-Fihri"], correctIndex: 1, explanation: "Hajar, l'épouse d'Ibrahim, a été laissée seule dans le désert de La Mecque avec son bébé Isma'il. Elle a couru entre Safa et Marwa avec une confiance totale en Allah. Elle enseigne à Souhayl que la patience est un acte de foi." },
    { question: "Quelle sourate coranique parle de la patience ?", options: ["Al-Fatiha", "Al-Asr — « Par le Temps ! L'homme est en perpétuelle perte, sauf ceux qui croient, font le bien, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement la patience »", "Al-Ikhlas", "An-Nas"], correctIndex: 1, explanation: "La sourate Al-Asr est l'une des plus courtes mais des plus profondes. Elle mentionne quatre conditions pour ne pas être en perte, dont la patience. Sidi Mu'adh la cite souvent à Souhayl." },
  ],

  t4c2: [
    { question: "Qui est Bilal ibn Rabah (بلال بن رباح) ?", options: ["Un roi de Perse", "Le premier muezzin de l'islam, ancien esclave libéré", "Un architecte de Fès", "Un compagnon de Souhayl"], correctIndex: 1, explanation: "Bilal ibn Rabah était un esclave abyssin (éthiopien) qui a enduré la torture avec une patience extraordinaire. Le Prophète ﷺ l'a libéré et il est devenu le premier muezzin de l'islam. Il enseigne à Souhayl la persévérance face aux épreuves." },
    { question: "Comment Souhayl montre-t-il sa patience face à une épreuve difficile ?", options: ["Il abandonne ses études", "Il continue à apprendre malgré ses difficultés en calligraphie", "Il se dispute avec Sidi Mu'adh", "Il fuit la bibliothèque"], correctIndex: 1, explanation: "Souhayl doit faire face à des difficultés dans ses études et sa calligraphie. Au lieu d'abandonner, il persévère, inspiré par Bilal et Ibn Al-Qayyim. La patience dans l'apprentissage est une forme d'adoration." },
    { question: "Que dit Wassim à Souhayl quand il est découragé ?", options: ["« C'est trop difficile, arrête »", "« Tu es le plus fort, continue ! »", "« Souhayl, même les grands savants ont commencé comme toi »", "« Je vais le faire à ta place »"], correctIndex: 2, explanation: "Wassim, malgré son jeune âge, réconforte Souhayl avec des mots simples mais profonds. Il lui rappelle que même les plus grands savants ont été des élèves un jour. La famille est une source de soutien." },
    { question: "Quel hadith Sidi Mu'adh cite-t-il sur la patience ?", options: ["« La patience est facile »", "« Celui qui patiente — Allah lui donne la patience »", "« Seuls les prophètes sont patients »", "« La patience n'est pas récompensée »"], correctIndex: 1, explanation: "Sidi Mu'adh rappelle à Souhayl : « Celui qui fait preuve de patience, Allah lui donne la patience. » (Muslim). La patience n'est pas passive — c'est une force active que Allah renforce chez celui qui la pratique." },
  ],

  // ================================================================
  // TOME 5 — Al-Hikma (الحكمة) — La Sagesse
  // ================================================================

  t5c1: [
    { question: "Que signifie Al-Hikma (الحكمة) ?", options: ["La patience", "La sagesse / la compréhension profonde", "La vérité", "Le courage"], correctIndex: 1, explanation: "Al-Hikma est la sagesse — non pas le savoir intellectuel, mais la compréhension profonde du cœur. Le Coran dit : « Celui à qui Allah accorde la sagesse a reçu un bien immense. » (Al-Baqarah 2:269)" },
    { question: "Quel secret Grand-mère Aïcha révèle-t-elle à Souhayl ?", options: ["Une recette de cuisine secrète", "Le secret de la bibliothèque et sa mission de gardien", "Un trésor caché sous Fès", "Une formule magique"], correctIndex: 1, explanation: "Grand-mère Aïcha révèle à Souhayl le secret de famille : la bibliothèque magique a besoin d'un gardien et il est celui qui a été choisi. Ce secret va transformer le destin de Souhayl." },
    { question: "Qui Souhayl rencontre-t-il dans le dernier tome à travers le manuscrit ?", options: ["Un roi", "Le Prophète Muhammad ﷺ", "Un autre garçon", "Un djinn"], correctIndex: 1, explanation: "Dans le tome 5, Souhayl vit l'expérience la plus extraordinaire : à travers le manuscrit magique, il rencontre le Prophète Muhammad ﷺ dans une vision spirituelle. Cette rencontre illumine son cœur." },
    { question: "Que signifie « من يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا » ?", options: ["Celui qui est riche est chanceux", "Celui à qui Allah accorde la sagesse a reçu un bien immense", "La connaissance est la seule chose importante", "Les savants sont les meilleurs"], correctIndex: 1, explanation: "Ce verset de la sourate Al-Baqarah (2:269) est le fondement du tome 5. Sidi Mu'adh l'enseigne à Souhayl : la sagesse est le plus grand des cadeaux d'Allah, plus précieuse que l'or et les diamants." },
  ],

  t5c2: [
    { question: "Quel rôle Souhayl accepte-t-il à la fin du tome 5 ?", options: ["Enseignant à la madrasa", "Le nouveau gardien de la bibliothèque magique", "Imam de la Qarawiyyin", "Architecte de Fès"], correctIndex: 1, explanation: "Souhayl accepte de devenir le nouveau gardien de la bibliothèque secrète sous la Qarawiyyin. C'est une mission sacrée de protéger le savoir et de le transmettre aux futures générations, comme Fatima Al-Fihri l'a fait avant lui." },
    { question: "Que dit Aziza (la mère de Souhayl) quand il lui raconte sa mission ?", options: ["« C'est trop dangereux »", "« Je suis fière de toi. Ta grand-mère aurait été heureuse »", "« Reste à la maison »", "« Demande à ton père d'abord »"], correctIndex: 1, explanation: "Aziza soutient Souhayl avec amour et fierté. Elle reconnaît que sa mission honore l'héritage de Grand-mère Aïcha. La famille est le premier cercle de soutien dans le cheminement spirituel." },
    { question: "Quel verset Mehdi récite-t-il pour Souhayl au début du tome 5 ?", options: ["Al-Fatiha", "« Rabbi zidni 'ilma — Ô mon Seigneur, augmente-moi en savoir » (Ta-Ha 20:114)", "Al-Ikhlas", "Al-Kawthar"], correctIndex: 1, explanation: "Mehdi, en bon enseignant, enseigne à Souhayl cette invocation tirée du Coran : « Rabbi zidni 'ilma » — « Ô mon Seigneur, accrois mes connaissances. » C'est la prière de celui qui cherche la sagesse avec humilité." },
    { question: "Comment Sidi Mu'adh décrit-il la sagesse à Souhayl ?", options: ["« La sagesse, c'est tout savoir »", "« La sagesse, c'est comme un arbre : elle a besoin de racines profondes et de temps pour grandir »", "« La sagesse se trouve dans les livres »", "« La sagesse est réservée aux vieillards »"], correctIndex: 1, explanation: "Sidi Mu'adh utilise une belle métaphore : la sagesse est comme un arbre dont les racines sont la patience et les branches sont les bonnes actions. Elle ne pousse pas en un jour — elle grandit avec le temps, l'expérience et la sincérité." },
  ],
};
