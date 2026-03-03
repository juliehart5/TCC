import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Trust() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden py-14 lg:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/handshake_closeup.jpg"
          alt="Business handshake"
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
          Trust Is Built
        </h2>

        {/* Body */}
        <p
          className={`mt-8 max-w-2xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Relationships matter. We show up, follow through, and treat every engagement
          with the weight it deserves.
        </p>

        {/* Values */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {['Discretion', 'Integrity', 'Execution'].map((value) => (
            <div key={value} className="text-center">
              <span className="font-mono text-xs text-[#C9A227] tracking-widest uppercase">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
