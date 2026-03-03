import { useEffect, useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <img
          src="/hero_city_skyline.jpg"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 dark-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Headline */}
        <h1 
          className={`mt-8 font-display text-[clamp(24px,4vw,56px)] text-center text-[#F7F7F5] uppercase tracking-[-0.02em] leading-[1.2] transition-all duration-700 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block">Built on Structure.</span>
          <span className="block mt-1">Driven by Discipline.</span>
          <span className="block mt-1">Defined by Integrity.</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`mt-6 text-[clamp(14px,1.5vw,18px)] text-[#B9B5AD] text-center tracking-wide transition-all duration-700 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Global precious metals & commodities
        </p>

        {/* CTA Row */}
        <div 
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all duration-700 delay-800 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a href="#contact" className="btn-primary">
            Request a call
          </a>
        </div>
      </div>

      {/* Footer */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-800 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase">
          © 2026 The TCC Ltd
        </p>
      </div>
    </section>
  );
}
