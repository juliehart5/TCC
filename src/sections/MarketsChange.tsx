import { useScrollReveal } from '@/hooks/useScrollReveal';

export function MarketsChange() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/trading_floor.jpg"
          alt="Trading floor"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 dark-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Headline */}
        <h2 
          className={`font-display text-[clamp(36px,6vw,90px)] text-[#F7F7F5] uppercase tracking-[-0.03em] leading-[0.95] transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          <span className="block">Markets Change.</span>
          <span className="block mt-2">We Don't.</span>
        </h2>

        {/* Body */}
        <p 
          className={`mt-10 max-w-xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Discipline beats noise. Our process is designed to protect capital and 
          capture asymmetric opportunities—across cycles.
        </p>

        {/* Stats */}
        <div 
          className={`mt-16 grid grid-cols-3 gap-8 sm:gap-16 transition-all duration-1000 delay-400 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <p className="font-display text-[clamp(24px,3vw,40px)] text-[#C9A227]">15+</p>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mt-1">Years</p>
          </div>
          <div className="text-center">
            <p className="font-display text-[clamp(24px,3vw,40px)] text-[#C9A227]">4</p>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mt-1">Continents</p>
          </div>
          <div className="text-center">
            <p className="font-display text-[clamp(24px,3vw,40px)] text-[#C9A227]">24/7</p>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mt-1">Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
