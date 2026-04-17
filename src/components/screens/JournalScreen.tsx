'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Button } from '@/components/ui/button';
import { tomes } from '@/data/tomes';
import {
  ArrowLeft, Plus, BookHeart, Trash2, Quote,
  Calendar, ChevronDown, ChevronUp, PenLine,
} from 'lucide-react';

export function JournalScreen() {
  const { navigateTo, journalEntries, addJournalEntry, deleteJournalEntry, completedChapters } = useApp();
  const [isWriting, setIsWriting] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState('');
  const [text, setText] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  // Available chapters for new entries (only completed ones)
  const completedChaptersList = tomes.flatMap(tome =>
    tome.chapters
      .filter(c => completedChapters.includes(c.id))
      .map(c => ({
        id: c.id,
        title: `T${tome.number} — ${c.title}`,
        tomeNumber: tome.number,
      }))
  );

  const handleSave = () => {
    if (!selectedChapter || !text.trim()) return;
    const chapter = completedChaptersList.find(c => c.id === selectedChapter);
    addJournalEntry({
      chapterId: selectedChapter,
      chapterTitle: chapter?.title || '',
      text: text.trim(),
    });
    setText('');
    setSelectedChapter('');
    setIsWriting(false);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-rose-50/80 backdrop-blur-sm border-b border-amber-200/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-lg font-bold text-stone-800 flex items-center gap-2">
              <BookHeart className="w-5 h-5 text-rose-500" />
              Journal Spirituel
            </h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsWriting(!isWriting)}
            className="w-9 h-9 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-sm"
            aria-label="Nouvelle réflexion"
          >
            {isWriting ? <ChevronDown className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Write new entry */}
        <AnimatePresence>
          {isWriting && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="parchment-card rounded-xl p-4 space-y-3 islamic-border">
                <div className="flex items-center gap-2 mb-1">
                  <PenLine className="w-4 h-4 text-rose-500" />
                  <h3 className="text-sm font-semibold text-stone-700">Nouvelle réflexion</h3>
                </div>

                {/* Chapter selector */}
                <div>
                  <label className="text-xs text-stone-400 mb-1 block">Chapitre</label>
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 bg-white/70 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                  >
                    <option value="">Choisir un chapitre...</option>
                    {completedChaptersList.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>

                {/* Text area */}
                <div>
                  <label className="text-xs text-stone-400 mb-1 block">Ta réflexion</label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Qu'as-tu appris de ce chapitre ? Comment peux-tu appliquer cette leçon dans ta vie quotidienne ?"
                    className="w-full px-3 py-3 rounded-lg border border-stone-200 bg-white/70 text-sm text-stone-700 resize-none focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 min-h-[120px] custom-scrollbar"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">{text.length} caractères</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { setIsWriting(false); setText(''); setSelectedChapter(''); }}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSave}
                    disabled={!selectedChapter || !text.trim()}
                    className="flex-1 bg-rose-500 hover:bg-rose-600 disabled:opacity-40"
                  >
                    <BookHeart className="w-4 h-4 mr-1" />
                    Sauvegarder
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Entries list */}
        {journalEntries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
              <BookHeart className="w-10 h-10 text-rose-300" />
            </div>
            <h2 className="text-lg font-bold text-stone-700 mb-2">Ton journal est vide</h2>
            <p className="text-sm text-stone-500 max-w-xs mx-auto mb-4">
              Après avoir terminé un chapitre, écris tes réflexions spirituelles ici.
              C&apos;est ton espace personnel pour grandir.
            </p>
            <div className="parchment-card rounded-xl p-4 max-w-xs mx-auto text-left">
              <div className="flex items-start gap-2">
                <Quote className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-stone-500 italic leading-relaxed">
                  « Le savoir sans l&apos;action est comme un arbre sans fruits. »
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-stone-400 font-medium">
              {journalEntries.length} réflexion{journalEntries.length > 1 ? 's' : ''}
            </p>
            {journalEntries
              .slice()
              .reverse()
              .map((entry, idx) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="parchment-card rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                    className="w-full text-left p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-rose-600 mb-1">{entry.chapterTitle}</p>
                        <p className="text-sm text-stone-700 line-clamp-2">
                          {entry.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {expandedId === entry.id ? (
                          <ChevronUp className="w-4 h-4 text-stone-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      <span className="text-[10px] text-stone-400">{formatDate(entry.createdAt)}</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedId === entry.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-amber-200/30 pt-3">
                          <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-wrap mb-3">
                            {entry.text}
                          </p>
                          <div className="flex justify-end">
                            {showDeleteConfirm === entry.id ? (
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-stone-500">Supprimer ?</span>
                                <button
                                  onClick={() => { deleteJournalEntry(entry.id); setExpandedId(null); setShowDeleteConfirm(null); }}
                                  className="text-xs px-3 py-1 bg-red-500 text-white rounded-lg"
                                >
                                  Oui
                                </button>
                                <button
                                  onClick={() => setShowDeleteConfirm(null)}
                                  className="text-xs px-3 py-1 bg-stone-100 text-stone-600 rounded-lg"
                                >
                                  Non
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setShowDeleteConfirm(entry.id)}
                                className="flex items-center gap-1 text-xs text-stone-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                                Supprimer
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
