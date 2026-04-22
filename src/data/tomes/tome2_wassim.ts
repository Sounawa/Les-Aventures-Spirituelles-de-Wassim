import type { Tome, Scene, Dialogue, Choice, Lesson } from '@/types/story';

export const tome2_wassim: Tome = {
  id: 'wassim_tome2',
  number: 2,
  title: 'Les Étoiles Parlantes',
  titleAr: 'النجوم المتكلمة',
  subtitle: 'La prière et la beauté de la nuit',
  description:
    'Wassim est au lit mais il n\'arrive pas à dormir. Il a peur du noir ! 😟 Mais maman Aziza vient le réconforter et lui montre les étoiles. Wassim découvre que Allah veille sur lui. Et la nuit, il fait un rêve magique où les étoiles lui parlent ! ✨🌟',
  theme: 'Salah — La prière et la confiance en Allah',
  coverImage: '/images/wassim-tome2-cover.png',
  chapters: [
    // ============================================================
    // CHAPTER 1 — La Nuit où Wassim n'arrivait pas à dormir 🌙
    // ============================================================
    {
      id: 'wt2c1',
      tomeId: 'wassim_tome2',
      number: 1,
      title: 'La Nuit où Wassim n\'arrivait pas à dormir',
      titleAr: 'الليلة التي لم يستطع وسيم فيها النوم',
      scenes: [
        // --- wt2c1s1: Il fait tout noir 😟 ---
        {
          id: 'wt2c1s1',
          chapterId: 'wt2c1',
          title: 'Il fait tout noir 😟',
          narration:
            'Il est tard dans la nuit à Fès. 🌙\n\nTout le monde dort doucement. Wassim est dans son petit lit. Son doudou est à côté de lui. 🧸\n\nMais Wassim ne dort pas. Il a peur du noir ! 😟 Il tourne et retourne dans ses couvertures. Ses yeux sont grands ouverts.\n\nLa chambre est très sombre. Wassim ne voit rien du tout. Son petit cœur bat vite. Boum boum boum ! 💓',
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Je n\'ose pas fermer les yeux... 😟 Il fait trop noir...',
              emotion: 'scared',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s2',
          background: 'bedroom',
        },

        // --- wt2c1s2: Maman Aziza arrive 💕 ---
        {
          id: 'wt2c1s2',
          chapterId: 'wt2c1',
          title: 'Maman Aziza arrive 💕',
          narration:
            'La porte de la chambre s\'ouvre doucement. 🚪\n\nMaman Aziza entre avec le sourire. Elle porte une lampe qui fait une jolie lumière. 💡\n\nElle s\'assoit sur le lit de Wassim. Elle lui prend la main. Ses mains sont chaudes et douces. 🤲\n\nWassim sent son cœur se calmer un peu. Maman est là. Il n\'est plus tout seul. 🥰',
          dialogues: [
            {
              characterId: 'aziza',
              text: 'Mon petit Wassim, qu\'est-ce qu\'il y a ? 💕',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Maman, j\'ai peur du noir... 😟 Je n\'arrive pas à dormir.',
              emotion: 'scared',
            },
            {
              characterId: 'aziza',
              text: 'Tu sais, mon chéri ? Allah est toujours avec toi ! 🤲 Même dans le noir, Il te voit et Il te protège.',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s3',
          background: 'bedroom',
        },

        // --- wt2c1s3: Les étoiles sont si belles ⭐ ---
        {
          id: 'wt2c1s3',
          chapterId: 'wt2c1',
          title: 'Les étoiles sont si belles ⭐',
          narration:
            'Maman porte Wassim vers la fenêtre. 🪟\n\nEt là... Waouh ! 🤩 Le ciel est rempli d\'étoiles ! Des milliers de petites lumières qui brillent. C\'est magnifique ! ✨⭐\n\nLes étoiles dansent doucement dans la nuit. Wassim ouvre grand ses yeux. Il n\'a plus peur maintenant !\n\nMaman pointe le doigt vers le ciel. Elle dit un mot très beau.',
          dialogues: [
            {
              characterId: 'aziza',
              text: 'Regarde, Wassim ! 🌟 Toutes ces étoiles... Allah les a créées rien que pour toi !',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'Waouh ! Elles sont si jolies ! 😍 Y en a beaucoup beaucoup !',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'Oui ! Et tu sais quoi ? On dit « SubhanAllah » quand on voit quelque chose de beau. Ça veut dire : « Allah est parfait ! »',
              emotion: 'wise',
            },
            {
              characterId: 'wassim',
              text: 'Su...bhan...Allah ! 🌟 SubhanAllah !',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s4',
          background: 'bedroom',
          lesson: {
            title: 'SubhanAllah — Gloire à Allah ✨',
            content:
              'Quand on voit quelque chose de beau, on dit « SubhanAllah ! » Cela signifie « Gloire à Allah ». Les étoiles, la lune, le soleil... tout est créé par Allah. Même dans la nuit noire, Allah prend soin de nous. Il ne dort jamais ! 🌙',
            quote: 'سبحان الله',
            source: 'Dikhr — Louange à Allah',
          },
        },

        // --- wt2c1s4: Que fait Wassim ? 🤔 ---
        {
          id: 'wt2c1s4',
          chapterId: 'wt2c1',
          title: 'Que fait Wassim ? 🤔',
          narration:
            'Maman regarde Wassim avec son beau sourire. 😊\n\n« Mon chéri, il est temps de dormir. Veux-tu fermer les yeux et faire confiance à Allah ? 🤲 Ou préfères-tu te cacher sous la couverture ? 🛏️ »\n\nWassim regarde les étoiles une dernière fois. Elles brillent comme des petits sourires dans le ciel. 🌟\n\nQue va-t-il choisir ? À toi de l\'aider ! 🎮',
          dialogues: [
            {
              characterId: 'aziza',
              text: 'Qu\'est-ce que tu choisis, mon petit cœur ? 💕',
              emotion: 'happy',
            },
          ],
          choices: [
            {
              id: 'wt2c1s4_c1',
              text: '🌙 Fermer les yeux et faire confiance à Allah !',
              nextSceneId: 'wt2c1s5a',
              badgeId: 'tawakkul',
              isCorrect: true,
            },
            {
              id: 'wt2c1s4_c2',
              text: '🛏️ Se cacher sous la couverture...',
              nextSceneId: 'wt2c1s5b',
            },
          ],
          background: 'bedroom',
        },

        // --- wt2c1s5a: Wassim a confiance en Allah 🤲 ---
        {
          id: 'wt2c1s5a',
          chapterId: 'wt2c1',
          title: 'Wassim a confiance en Allah 🤲',
          narration:
            'Wassim ferme ses petits yeux. 🙏\n\nIl met ses mains ensemble. Il dit dans son cœur : « Allah, je sais que Tu es là. Merci pour les étoiles. Merci pour maman. 🌟 »\n\nMaman lui chante une douce berceuse. Sa voix est comme un câlin pour les oreilles. 🎵\n\nWassim sourit. Il a très sommeil maintenant. Les étoiles veillent sur lui. Et Allah veille sur lui aussi. 🌙✨\n\nBonne nuit, Wassim ! 💤 Zzz...',
          dialogues: [
            {
              characterId: 'wassim',
              text: 'Allah, merci pour tout... 💕 Bonne nuit... 💤',
              emotion: 'happy',
            },
            {
              characterId: 'aziza',
              text: 'Bravo mon chéri ! 🌟 Tu es courageux ! Allah est fier de toi. Dors bien, mon petit trésor. 💕',
              emotion: 'happy',
            },
          ],
          choices: [],
          background: 'bedroom',
          isEnding: true,
          earnedBadgeId: 'tawakkul',
          lesson: {
            title: 'Al-Tawakkul — La confiance en Allah 🤲',
            content:
              'Bravo Wassim ! 🌟 Tu as fait confiance à Allah ! En Islam, on dit « Tawakkul » : c\'est faire confiance à Allah en tout temps. Même quand il fait noir, Allah est là. Il ne dort jamais et Il veille sur nous. Le Prophète ﷺ a dit : « Si vous aviez confiance en Allah comme les oiseaux, Il vous nourrirait comme eux. » 🐦',
            quote: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            source: 'Coran, Sourate At-Talaq (65:3)',
          },
        },

        // --- wt2c1s5b: Sous la couverture... 🛏️ ---
        {
          id: 'wt2c1s5b',
          chapterId: 'wt2c1',
          title: 'Sous la couverture... 🛏️',
          narration:
            'Wassim se cache sous sa couverture. 🛏️\n\nC\'est tout chaud et tout doux. Mais il entend encore la voix de maman. 💕\n\n« Mon chéri, même sous la couverture, Allah te voit ! Il est partout. Tu n\'as pas besoin de te cacher. 🤲 »\n\nWassim sort doucement sa tête de la couverture. Il regarde maman. Elle sourit. Il regarde les étoiles. Elles brillent.\n\nEt là, Wassim sourit aussi. Il n\'a plus peur ! 💪',
          dialogues: [
            {
              characterId: 'wassim',
              text: 'C\'est vrai maman ? Allah me voit même là ? 🛏️',
              emotion: 'neutral',
            },
            {
              characterId: 'aziza',
              text: 'Oui mon cœur ! Allah voit tout. Il t\'aime très fort. 🤲 Viens, ferme les yeux maintenant. 💕',
              emotion: 'happy',
            },
            {
              characterId: 'wassim',
              text: 'D\'accord maman... 💤 Bonne nuit... 🌙',
              emotion: 'happy',
            },
          ],
          choices: [],
          nextSceneId: 'wt2c1s5a',
          background: 'bedroom',
        },
      ],
      lessons: [],
    },
  ],
  monsters: [],
  spiritualLesson: 'Allah veille toujours sur nous, jour et nuit. Même dans l\'obscurité, nous ne sommes jamais seuls. La prière est notre lien avec Allah — un câlin du cœur ! 🤲💕',
};
