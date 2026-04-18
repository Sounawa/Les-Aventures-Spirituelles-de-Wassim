'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { tomes } from '@/data/tomes';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Lock, ChevronRight, MapPin } from 'lucide-react';

const tomeGradients = [
  { from: '#D97706', to: '#EA580C' },
  { from: '#E11D48', to: '#DB2777' },
  { from: '#CA8A04', to: '#D97706' },
  { from: '#0D9488', to: '#0891B2' },
  { from: '#7C3AED', to: '#6D28D9' },
];

const tomeIcons = ['🌙', '🔥', '🌊', '💫', '👑'];

const chapterThemeIcons: Record<string, string> = {
  'Le Rêve du Jardin Secret': '🌿',
  'La Zawiyah du Village': '🕌',
  'Le Premier Monstre': '⚔️',
  'La Transformation': '✨',
  'Le Désert du Savoir': '🏜️',
  'La Montagne des Épreuves': '⛰️',
  'La Forêt des Épreuves': '🌲',
  'Le Lac de la Patience': '🌊',
  'La Vallée des Mirages': '🪞',
  'Le Sommet de la Sagesse': '🏔️',
  'L\'Océan de la Gratitude': '🫧',
  'La Grotte des Secrets': '🕳️',
  'Le Pont de la Confiance': '🌉',
  'La Cité Dorée': '🏰',
  'Le Jardin des Vertus': '🌷',
  'Le Palais de la Lumière': '🔆',
  'La Porte de la Paix': '🚪',
  'Le Trône de la Miséricorde': '👑',
  'Le Jardin Éternel': '🌟',
  'Le Cœur du Monde': '💖',
  'La Dernière Épreuve': '🔥',
};

function getChapterIcon(title: string): string {
  return chapterThemeIcons[title] || '📖';
}

export function WorldMapScreen() {
  const { navigateTo, selectTome, selectChapter, setCurrentScene, completedChapters, completedScenes } = useApp();

  const handleChapterClick = (tomeId: string, chapterId: string) => {
    const tome = tomes.find(t => t.id === tomeId);
    if (!tome) return;
    selectTome(tomeId);
    selectChapter(chapterId);
    const chapter = tome.chapters.find(c => c.id === chapterId);
    if (chapter) {
      const firstUncompleted = chapter.scenes.find(s => !completedScenes.includes(s.id));
      setCurrentScene(firstUncompleted ? firstUncompleted.id : chapter.scenes[0].id);
      navigateTo('story');
    }
  };

  const totalChapters = tomes.reduce((s, t) => s + t.chapters.length, 0);
  const completedCount = completedChapters.length;
  const overallProgress = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-indigo-50 to-sky-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-sky-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-sky-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Carte du Monde</h1>
          </div>
          <div className="ml-auto">
            <span className="text-xs font-semibold text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30 px-2.5 py-1 rounded-full">
              {completedCount}/{totalChapters}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Legend & Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-4 mb-6 islamic-border"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              Progression du voyage
            </h2>
            <span className="text-xs font-bold text-sky-700 dark:text-sky-400">{Math.round(overallProgress)}%</span>
          </div>
          <div className="w-full h-3 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full story-progress-bar rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="flex items-center gap-4 text-[10px] text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm shadow-indigo-200" />
              <span>Terminé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-sky-500 shadow-sm shadow-sky-200" />
              <span>En cours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600" />
              <span>Verrouillé</span>
            </div>
          </div>
        </motion.div>

        {/* Map path - vertical scrolling */}
        <div className="relative">
          {/* Central vertical path line - enhanced */}
          <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-300/50 via-stone-300/30 to-transparent dark:from-sky-600/30 dark:via-stone-600/15 rounded-full" />

          <div className="space-y-8">
            {tomes.map((tome, tomeIdx) => {
              const colors = tomeGradients[tomeIdx] || tomeGradients[0];
              const icon = tomeIcons[tomeIdx] || '📖';
              const completedInTome = completedChapters.filter(id =>
                tome.chapters.some(c => c.id === id)
              ).length;
              const isTomeComplete = completedInTome === tome.chapters.length;
              const isFirstTome = tomeIdx === 0;
              const isTomeUnlocked = isFirstTome || isTomeComplete ||
                completedChapters.includes(tomes[tomeIdx - 1].chapters[tomes[tomeIdx - 1].chapters.length - 1].id);

              return (
                <motion.section
                  key={tome.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: tomeIdx * 0.15 }}
                >
                  {/* Tome header */}
                  <div className="relative pl-16 mb-3">
                    {/* Tome node on path */}
                    <div
                      className="absolute left-2 top-0 w-7 h-7 rounded-full flex items-center justify-center z-10 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        boxShadow: isTomeComplete ? `0 0 16px ${colors.from}60, 0 4px 12px ${colors.from}30` : '0 4px 12px rgba(0,0,0,0.15)',
                      }}
                    >
                      {isTomeComplete ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : isTomeUnlocked ? (
                        <span className="text-sm">{icon}</span>
                      ) : (
                        <Lock className="w-3 h-3 text-white/60" />
                      )}
                    </div>

                    <div
                      className="rounded-xl p-3.5 text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        opacity: isTomeUnlocked ? 1 : 0.45,
                        boxShadow: isTomeUnlocked ? `0 8px 24px ${colors.from}25` : 'none',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-sm">Tome {tome.number} — {tome.title}</h3>
                          <p className="text-xs opacity-80 font-amiri mt-0.5" dir="rtl">{tome.titleAr}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-xs bg-white/25 px-2 py-0.5 rounded-full font-medium">
                            {completedInTome}/{tome.chapters.length}
                          </span>
                          {isTomeUnlocked && (
                            <button
                              onClick={() => {
                                selectTome(tome.id);
                                navigateTo('chapter_select');
                              }}
                              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] opacity-70 mt-1 italic">{tome.subtitle}</p>
                    </div>
                  </div>

                  {/* Chapter nodes */}
                  <div className="pl-16 space-y-2">
                    {tome.chapters.map((chapter, chIdx) => {
                      const isCompleted = completedChapters.includes(chapter.id);
                      const isChapterFirst = chIdx === 0;
                      const isChapterUnlocked = isChapterFirst ||
                        completedChapters.includes(tome.chapters[chIdx - 1]?.id);
                      const scenesInChapter = chapter.scenes.length;
                      const scenesDone = chapter.scenes.filter(s => completedScenes.includes(s.id)).length;
                      const chapterIcon = getChapterIcon(chapter.title);

                      return (
                        <motion.div
                          key={chapter.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: tomeIdx * 0.15 + chIdx * 0.05 }}
                          className="relative"
                        >
                          {/* Connector dot - enhanced */}
                          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10 transition-all"
                            style={{
                              backgroundColor: isCompleted ? '#059669' : isChapterUnlocked ? colors.from : '#a8a29e',
                              boxShadow: isCompleted ? '0 0 8px #05966960' : isChapterUnlocked ? `0 0 4px ${colors.from}30` : 'none',
                            }}
                          />

                          <button
                            onClick={() => isChapterUnlocked && handleChapterClick(tome.id, chapter.id)}
                            disabled={!isChapterUnlocked}
                            className={`w-full text-left rounded-xl p-3.5 transition-all flex items-center gap-3 ${
                              isChapterUnlocked
                                ? 'glass-card hover:shadow-md cursor-pointer group border border-transparent hover:border-sky-200/40 dark:hover:border-sky-700/30'
                                : 'bg-white/20 dark:bg-stone-800/20 border border-stone-200/30 dark:border-stone-700/30 opacity-40 cursor-not-allowed'
                            }`}
                          >
                            {/* Chapter icon */}
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all ${
                                isCompleted ? 'bg-indigo-100 dark:bg-indigo-900/30 shadow-sm' :
                                isChapterUnlocked ? 'bg-sky-100 dark:bg-sky-900/30 shadow-sm' :
                                'bg-stone-100 dark:bg-stone-800'
                              }`}
                              style={isCompleted ? { boxShadow: '0 0 8px #05966920' } : {}}
                            >
                              {isCompleted ? '✅' : isChapterUnlocked ? chapterIcon : '🔒'}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-stone-400 dark:text-stone-500 font-medium uppercase">
                                  Ch.{chapter.number}
                                </span>
                                {isCompleted && (
                                  <span className="text-[9px] text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded-full font-medium">
                                    Terminé
                                  </span>
                                )}
                              </div>
                              <p className={`text-xs font-semibold truncate mt-0.5 ${
                                isCompleted ? 'text-indigo-700 dark:text-indigo-400' :
                                isChapterUnlocked ? 'text-stone-800 dark:text-stone-100 group-hover:text-sky-700 dark:group-hover:text-sky-400' :
                                'text-stone-400'
                              }`}>
                                {chapter.title}
                              </p>
                              {/* Mini scene progress - enhanced */}
                              {isChapterUnlocked && scenesInChapter > 0 && (
                                <div className="flex items-center gap-2 mt-1.5">
                                  <div className="flex-1 h-1.5 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full transition-all duration-500"
                                      style={{
                                        width: `${(scenesDone / scenesInChapter) * 100}%`,
                                        backgroundColor: isCompleted ? '#059669' : colors.from,
                                      }}
                                    />
                                  </div>
                                  <span className="text-[9px] text-stone-400 dark:text-stone-500 shrink-0 font-medium">
                                    {scenesDone}/{scenesInChapter}
                                  </span>
                                </div>
                              )}
                            </div>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Spacer between tomes */}
                  {tomeIdx < tomes.length - 1 && (
                    <div className="pl-16 flex items-center gap-2 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-stone-300/50 to-transparent dark:from-stone-600/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                      <div className="h-px flex-1 bg-gradient-to-l from-stone-300/50 to-transparent dark:from-stone-600/50" />
                    </div>
                  )}
                </motion.section>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 glass-card rounded-xl p-4 text-center islamic-border"
        >
          <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed">
            « La connaissance est une lumière qu&apos;Allah dépose dans le cœur. »
          </p>
          <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-1">— Ibn al-Qayyim</p>
        </motion.div>
      </div>
    </div>
  );
}
