'use client';

import { AppProvider } from '@/components/AppContext';
import { HomeScreen } from '@/components/screens/HomeScreen';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}
