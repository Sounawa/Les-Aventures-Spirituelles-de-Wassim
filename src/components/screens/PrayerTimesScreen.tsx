'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/components/AppContext';
import { getCityById, CITIES, getNextPrayer, getTimeRemaining, getPrayerStatus, type PrayerTime, type PrayerStatus, type CityPrayerTimes } from '@/data/prayerTimes';
import { ChevronLeft, Clock, MapPin, Check, ArrowLeft } from 'lucide-react';

function formatTime(hour: number, minute: number): string {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

// Live clock component
function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wider">
      {hours}
      <span className="animate-pulse">:</span>
      {minutes}
      <span className="text-2xl md:text-3xl font-normal opacity-70 ml-1">{seconds}</span>
    </div>
  );
}

// Prayer card component
function PrayerCard({
  prayer,
  status,
  index,
}: {
  prayer: PrayerTime;
  status: PrayerStatus;
  index: number;
}) {
  const isNext = status === 'next';
  const isCurrent = status === 'current';
  const isPast = status === 'past';

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className={`relative glass-card rounded-2xl p-4 transition-all duration-300 ${
        isNext
          ? 'border-2 border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-200/40 dark:shadow-amber-900/30'
          : isCurrent
            ? 'border-2 border-emerald-400 dark:border-emerald-500 shadow-lg shadow-emerald-200/40 dark:shadow-emerald-900/30'
            : isPast
              ? 'border border-stone-200/40 dark:border-stone-700/30 opacity-70'
              : 'border border-stone-200/40 dark:border-stone-700/30'
      }`}
    >
      {/* Glow effect for next prayer */}
      {isNext && (
        <motion.div
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 dark:from-amber-600 dark:via-orange-600 dark:to-amber-600 opacity-20 blur-sm"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Current prayer pulse */}
      {isCurrent && (
        <motion.div
          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-600 opacity-20 blur-sm"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <div className="relative flex items-center gap-4">
        {/* Prayer icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
          isNext
            ? 'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40'
            : isCurrent
              ? 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40'
              : isPast
                ? 'bg-stone-100 dark:bg-stone-800/40'
                : 'bg-stone-50 dark:bg-stone-800/30'
        }`}>
          <motion.span
            animate={isNext ? { scale: [1, 1.15, 1] } : isCurrent ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {prayer.icon}
          </motion.span>
        </div>

        {/* Prayer info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-bold text-stone-800 dark:text-stone-100 text-base">{prayer.name}</h3>
            <span className="text-sm text-stone-500 dark:text-stone-400 font-amiri" dir="rtl">{prayer.nameAr}</span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">{prayer.description}</p>
        </div>

        {/* Time and status */}
        <div className="text-right shrink-0">
          <p className={`text-lg font-bold tabular-nums ${
            isNext ? 'text-amber-600 dark:text-amber-400' :
            isCurrent ? 'text-emerald-600 dark:text-emerald-400' :
            isPast ? 'text-stone-400 dark:text-stone-500' :
            'text-stone-700 dark:text-stone-200'
          }`}>
            {formatTime(prayer.hour, prayer.minute)}
          </p>
          {isPast && (
            <div className="flex items-center justify-end gap-1 mt-0.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Terminée</span>
            </div>
          )}
          {isCurrent && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-end gap-1 mt-0.5"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">En cours</span>
            </motion.div>
          )}
          {isNext && (
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Prochaine</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Progress timeline showing all 5 prayers
function PrayerTimeline({
  prayers,
  nowHours,
  nowMinutes,
}: {
  prayers: PrayerTime[];
  nowHours: number;
  nowMinutes: number;
}) {
  const nowTotal = nowHours * 60 + nowMinutes;

  // Determine status for each prayer
  const statuses = prayers.map((prayer, index) => {
    const prayerTotal = prayer.hour * 60 + prayer.minute;
    const nextPrayer = prayers.findIndex(p => (p.hour * 60 + p.minute) > nowTotal);
    const isAllPast = nextPrayer === -1;

    if (isAllPast) {
      return index === 0 ? 'next' : 'past';
    }

    if (index < nextPrayer) return 'past';
    if (index === nextPrayer) {
      // Check if within 30 min of start
      if (nowTotal >= prayerTotal && nowTotal < prayerTotal + 30) return 'current';
      return 'next';
    }
    return 'upcoming';
  });

  return (
    <div className="flex items-center justify-between px-2 py-4">
      {prayers.map((prayer, index) => {
        const status = statuses[index];
        const isActive = status === 'next' || status === 'current';
        const isPast = status === 'past';

        return (
          <div key={prayer.id} className="flex flex-col items-center gap-1.5 flex-1">
            {/* Connector line (except first) */}
            {index > 0 && (
              <div className={`absolute left-0 right-0 top-[14px] -z-10 ${
                statuses[index - 1] === 'past' ? 'bg-emerald-400 dark:bg-emerald-500' : 'bg-stone-200 dark:bg-stone-700'
              }`}
                style={{
                  position: 'relative',
                  height: '2px',
                  marginTop: '-20px',
                  marginBottom: '4px',
                  marginLeft: '-50%',
                  marginRight: '-50%',
                }}
              />
            )}

            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index + 0.5 }}
              className="relative"
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-amber-400 dark:bg-amber-500"
                  animate={{ scale: [1.4, 1.8, 1.4], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '28px', height: '28px', top: '-4px', left: '-4px' }}
                />
              )}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  isPast
                    ? 'bg-emerald-500'
                    : isActive
                      ? 'bg-amber-500 dark:bg-amber-400'
                      : 'bg-stone-200 dark:bg-stone-700'
                }`}
              >
                {isPast ? (
                  <Check className="w-3 h-3 text-white" />
                ) : (
                  <span className="text-[10px]">{prayer.icon}</span>
                )}
              </div>
            </motion.div>

            {/* Label */}
            <span className={`text-[9px] font-medium ${
              isActive ? 'text-amber-600 dark:text-amber-400' :
              isPast ? 'text-emerald-600 dark:text-emerald-400' :
              'text-stone-400 dark:text-stone-500'
            }`}>
              {prayer.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// City selector
function CitySelector({
  selectedCity,
  onSelectCity,
}: {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 glass-card rounded-xl border border-amber-200/30 dark:border-amber-700/30 shadow-sm text-white"
      >
        <MapPin className="w-4 h-4 text-amber-300" />
        <span className="text-sm font-medium">
          {getCityById(selectedCity).flag} {getCityById(selectedCity).name}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 w-56 glass-card rounded-xl border border-amber-200/30 dark:border-amber-700/30 shadow-xl overflow-hidden"
            >
              <div className="p-1">
                {CITIES.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => {
                      onSelectCity(city.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      city.id === selectedCity
                        ? 'bg-amber-100 dark:bg-amber-900/30'
                        : 'hover:bg-stone-100 dark:hover:bg-stone-800/40'
                    }`}
                  >
                    <span className="text-lg">{city.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-stone-800 dark:text-stone-100">{city.name}</p>
                      <p className="text-[10px] text-stone-400 dark:text-stone-500">{city.country}</p>
                    </div>
                    {city.id === selectedCity && (
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PrayerTimesScreen() {
  const { navigateTo, prayerTimesCity, setPrayerTimesCity } = useApp();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const city = useMemo(() => getCityById(prayerTimesCity), [prayerTimesCity]);
  const nowHours = currentTime.getHours();
  const nowMinutes = currentTime.getMinutes();
  const nowTotal = nowHours * 60 + nowMinutes;

  const nextPrayerResult = useMemo(() => getNextPrayer(prayerTimesCity), [prayerTimesCity, nowTotal]);
  const timeRemaining = useMemo(() => getTimeRemaining(prayerTimesCity), [prayerTimesCity, nowTotal]);

  const prayerStatuses = useMemo(() => {
    return city.prayers.map(prayer => getPrayerStatus(prayer, city.prayers, nowHours, nowMinutes));
  }, [city, nowHours, nowMinutes]);

  const handleSelectCity = useCallback((cityId: string) => {
    setPrayerTimesCity(cityId);
  }, [setPrayerTimesCity]);

  // Greeting based on time of day
  const greeting = useMemo(() => {
    if (nowHours < 6) return 'Bonsoir, Nawfel ! 🌙';
    if (nowHours < 12) return 'Bonjour, Nawfel ! ☀️';
    if (nowHours < 17) return 'Bon après-midi, Nawfel ! 🌤️';
    if (nowHours < 20) return 'Bonsoir, Nawfel ! 🌅';
    return 'Bonne nuit, Nawfel ! 🌙';
  }, [nowHours]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 dark:from-amber-800 dark:via-orange-900 dark:to-amber-900 px-4 pt-12 pb-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 text-6xl">🕌</div>
          <div className="absolute bottom-4 right-8 text-5xl">✦</div>
          <div className="absolute top-8 right-24 text-3xl">✦</div>
        </div>

        {/* Top bar */}
        <div className="relative flex items-center justify-between mb-6">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('home')}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-sm"
            aria-label="Retour à l'accueil"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          <CitySelector
            selectedCity={prayerTimesCity}
            onSelectCity={handleSelectCity}
          />
        </div>

        {/* Title and clock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative text-center"
        >
          <p className="text-amber-100 text-sm font-medium mb-2">{greeting}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">Horaires de Prière</h1>
          <p className="text-amber-100/80 text-sm font-amiri mb-4" dir="rtl">مواقيت الصلاة</p>
          <LiveClock />
        </motion.div>
      </div>

      {/* Next prayer countdown */}
      {nextPrayerResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative -mt-4 mx-4 z-10"
        >
          <div className="glass-card rounded-2xl border border-amber-200/40 dark:border-amber-700/30 p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 flex items-center justify-center">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    {nextPrayerResult.prayer.icon}
                  </motion.span>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">Prochaine prière</p>
                  <p className="text-base font-bold text-stone-800 dark:text-stone-100">
                    {nextPrayerResult.prayer.name}
                    <span className="text-sm font-normal text-stone-400 dark:text-stone-500 ml-1.5 font-amiri" dir="rtl">{nextPrayerResult.prayer.nameAr}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                  {formatTime(nextPrayerResult.prayer.hour, nextPrayerResult.prayer.minute)}
                </p>
                <div className="flex items-center gap-1 justify-end">
                  <Clock className="w-3 h-3 text-amber-500" />
                  <motion.p
                    key={timeRemaining}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-amber-600 dark:text-amber-400 font-medium"
                  >
                    {timeRemaining}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Progress timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 mx-4 mt-4"
      >
        <div className="glass-card rounded-2xl border border-stone-200/40 dark:border-stone-700/30 p-4 shadow-sm">
          <PrayerTimeline
            prayers={city.prayers}
            nowHours={nowHours}
            nowMinutes={nowMinutes}
          />
        </div>
      </motion.div>

      {/* Prayer cards list */}
      <div className="relative z-10 flex-1 px-4 py-4 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between mb-1"
        >
          <h2 className="text-sm font-semibold text-stone-600 dark:text-stone-200 uppercase tracking-wider">
            Prières du jour
          </h2>
          <span className="text-[10px] text-stone-400 dark:text-stone-500">{city.flag} {city.name}</span>
        </motion.div>

        {city.prayers.map((prayer, index) => (
          <PrayerCard
            key={prayer.id}
            prayer={prayer}
            status={prayerStatuses[index]}
            index={index}
          />
        ))}
      </div>

      {/* Bottom motivational section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 px-4 pb-6"
      >
        <div className="glass-card rounded-2xl border border-amber-200/30 dark:border-amber-700/20 p-4 text-center">
          <p className="text-2xl mb-2">🕌</p>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-1 font-amiri" dir="rtl">
            إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 italic leading-relaxed">
            &laquo; La prière empêche de commettre les actes indignes et répréhensibles &raquo;
          </p>
          <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-1">
            — Sourate Al-Ankabout (29:45)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
