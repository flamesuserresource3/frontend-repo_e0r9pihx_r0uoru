import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[68vh] rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve text legibility without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#0B0F14]/20 to-[#0B0F14]" />

      <div className="relative z-10 px-6 md:px-10 lg:px-12 h-full flex flex-col justify-end pb-10">
        <div className="max-w-3xl text-white space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Realtime, collaborative, modern
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            A modern platform inspired by Linear, built for speed and focus
          </h1>
          <p className="text-white/80 text-sm sm:text-base">
            Organize work, track issues, and collaborate in a delightful experience. Clean design, keyboard-first, blazing fast.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-white text-black font-medium">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-white/20 text-white hover:bg-white/10">
              Explore Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
