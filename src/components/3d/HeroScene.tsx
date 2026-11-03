'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { NeuralLattice } from './NeuralLattice';
import { HeroFallback } from './HeroFallback';

export default function HeroScene() {
  const [shouldRender3D, setShouldRender3D] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    // Check if reduced motion is requested or screen is mobile
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;

    if (mediaQuery.matches || isMobile) {
      setShouldRender3D(false);
    } else {
      setShouldRender3D(true);
    }

    const handler = (e: MediaQueryListEvent) => {
      setShouldRender3D(!e.matches && window.innerWidth >= 768);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // During SSR or initial mount, render lightweight fallback
  if (shouldRender3D === null || shouldRender3D === false) {
    return <HeroFallback />;
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden">
      <React.Suspense fallback={<HeroFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ powerPreference: 'low-power', antialias: true, alpha: true }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <NeuralLattice />
        </Canvas>
      </React.Suspense>
    </div>
  );
}

