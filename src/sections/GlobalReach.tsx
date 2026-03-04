import { useScrollReveal } from '@/hooks/useScrollReveal';

export function GlobalReach() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden py-14 lg:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/world_map_screens.jpg"
          alt="World map screens"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 dark-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] lg:min-h-screen px-6 text-center">
        {/* Headline */}
        <h2
          className={`font-display text-[clamp(42px,7vw,104px)] text-[#F7F7F5] uppercase tracking-[-0.03em] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
        >
          Global Reach
        </h2>

        {/* Body */}
        <p
          className={`mt-8 max-w-2xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          From London to Hong Kong, New York to Dubai our network turns local insight
          into global execution.
        </p>

        {/* Location indicators */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {['London', 'New York', 'Dubai', 'Hong Kong'].map((city) => (
            <div key={city} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="font-mono text-sm text-[#B9B5AD] tracking-wide">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
