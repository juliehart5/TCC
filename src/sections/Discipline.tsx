import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Discipline() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/gold_bullion_closeup.jpg"
          alt="Gold bullion"
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
          className={`font-display text-[clamp(42px,7vw,104px)] text-[#F7F7F5] uppercase tracking-[-0.03em] transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          Discipline Wins
        </h2>

        {/* Body */}
        <p 
          className={`mt-8 max-w-2xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          No hype. No shortcuts. Just consistent process, verified counterparties, 
          and a track record built over years.
        </p>

        {/* Principles */}
        <div 
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {['Process', 'Verification', 'Consistency', 'Results'].map((principle) => (
            <div key={principle} className="text-center">
              <span className="font-mono text-xs text-[#C9A227] tracking-widest uppercase">{principle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
