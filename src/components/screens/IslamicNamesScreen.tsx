'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { Button } from '@/components/ui/button';
import { islamicNames, filterByName, type IslamicName } from '@/data/islamicNames';
import {
  ArrowLeft, Search, Sparkles, Star,
} from 'lucide-react';

type GenderFilter = 'tous' | 'garcon' | 'fille';

const genderLabels: Record<GenderFilter, string> = {
  tous: 'Tous',
  garcon: 'Garçons',
  fille: 'Filles',
};

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-2.5 h-2.5 ${
            i < value
              ? 'text-orange-500 dark:text-orange-400 fill-orange-500 dark:fill-orange-400'
              : 'text-stone-200 dark:text-stone-600'
          }`}
        />
      ))}
    </div>
  );
}

function NameCard({ name, index }: { name: IslamicName; index: number }) {
  const isBoy = name.gender === 'garcon';
  const genderEmoji = isBoy ? '👦' : '👧';
  const accentColor = isBoy
    ? 'border-orange-300/40 dark:border-orange-700/30'
    : 'border-rose-300/40 dark:border-rose-700/30';
  const iconBg = isBoy
    ? 'bg-orange-100 dark:bg-orange-900/30'
    : 'bg-rose-100 dark:bg-rose-900/30';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        type: 'spring',
        stiffness: 200,
        damping: 22,
      }}
      className={`glass-card rounded-xl border-t-2 ${accentColor} p-4 flex flex-col gap-3 h-full hover:shadow-md transition-all duration-200`}
    >
      {/* Top row: Arabic name + gender icon */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p
            className="text-2xl font-amiri text-stone-800 dark:text-orange-100 leading-relaxed truncate"
            dir="rtl"
          >
            {name.nameAr}
          </p>
        </div>
        <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center shrink-0 ml-2`}>
          <span className="text-sm">{genderEmoji}</span>
        </div>
      </div>

      {/* French name */}
      <div>
        <p className="text-base font-bold text-stone-800 dark:text-stone-100">{name.nameFr}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
            isBoy
              ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
              : 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300'
          }`}>
            {genderLabels[name.gender]}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
            {name.origin}
          </span>
        </div>
      </div>

      {/* Meaning */}
      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed flex-1 line-clamp-3">
        {name.meaning}
      </p>

      {/* Popularity */}
      <div className="flex items-center gap-1.5 pt-1">
        <span className="text-[9px] text-stone-400 dark:text-stone-500 font-medium">Popularité</span>
        <StarRating value={name.popularity} />
      </div>
    </motion.div>
  );
}

export function IslamicNamesScreen() {
  const { navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('tous');

  const filteredNames = useMemo(() => {
    let result = islamicNames;

    // Filter by gender
    if (genderFilter !== 'tous') {
      result = result.filter((n) => n.gender === genderFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      result = filterByName(searchQuery, result);
    }

    return result;
  }, [searchQuery, genderFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-violet-50/50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-orange-50/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-orange-200/30 dark:border-stone-700/30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigateTo('home')} className="shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-stone-800 dark:text-stone-100">Les Plus Beaux Noms</h1>
          </div>
          <Sparkles className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-stone-500 dark:text-stone-400 text-center"
        >
          Découvre la signification des prénoms musulmans ✨
        </motion.p>

        {/* Search input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un prénom..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 text-sm text-stone-700 dark:text-stone-300 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-600 focus:border-orange-300 dark:focus:border-orange-600 transition-all"
          />
        </motion.div>

        {/* Gender toggle tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-1 p-1 rounded-xl bg-stone-100 dark:bg-stone-800/70"
        >
          {(Object.keys(genderLabels) as GenderFilter[]).map((key) => {
            const isActive = genderFilter === key;
            const tabEmoji = key === 'tous' ? '🌟' : key === 'garcon' ? '👦' : '👧';
            return (
              <button
                key={key}
                onClick={() => setGenderFilter(key)}
                className={`
                  flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold
                  transition-all duration-200
                  ${isActive
                    ? 'bg-white dark:bg-stone-700 text-orange-700 dark:text-orange-300 shadow-sm'
                    : 'text-stone-400 dark:text-stone-500 hover:text-stone-500 dark:hover:text-stone-400'
                  }
                `}
              >
                <span className="text-sm">{tabEmoji}</span>
                {genderLabels[key]}
              </button>
            );
          })}
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-xs text-stone-400 dark:text-stone-500 font-medium text-center"
        >
          {filteredNames.length} prénom{filteredNames.length > 1 ? 's' : ''} trouvé{filteredNames.length > 1 ? 's' : ''}
        </motion.p>

        {/* Name cards grid */}
        {filteredNames.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredNames.map((name, index) => (
                <NameCard key={name.id} name={name} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
              <Search className="w-7 h-7 text-stone-300 dark:text-stone-600" />
            </div>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
              Aucun prénom trouvé
            </p>
            <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
              Essaie un autre mot de recherche
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
