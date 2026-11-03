'use client';

import dynamic from 'next/dynamic';
import { HeroFallback } from './HeroFallback';

export const Hero3DContainer = dynamic(
  () => import('./HeroScene'),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

