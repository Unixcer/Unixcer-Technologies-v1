import * as React from 'react';

export function HeroFallback() {
  return (
    <div
      className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center overflow-hidden rounded-3xl"
      aria-label="Interactive 3D Neural Lattice graphic"
    >
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Orbiting concentric rings with subtle CSS animations */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-[spin_60s_linear_infinite]" />

        {/* Middle Ring */}
        <div className="absolute inset-8 rounded-full border border-purple-500/25 animate-[spin_40s_linear_infinite_reverse]" />

        {/* Inner Ring */}
        <div className="absolute inset-16 rounded-full border border-cyan-500/30 border-dotted animate-[spin_25s_linear_infinite]" />

        {/* Center Node Hologram */}
        <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 backdrop-blur-md border border-blue-500/40 flex items-center justify-center shadow-2xl shadow-blue-500/30 rotate-12 hover:rotate-0 transition-transform duration-500">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-400 animate-ping" />
          </div>
        </div>

        {/* Orbiting Satellite Dots */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
        <div className="absolute -bottom-2 right-1/4 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
        <div className="absolute top-1/3 -left-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      </div>
    </div>
  );
}

