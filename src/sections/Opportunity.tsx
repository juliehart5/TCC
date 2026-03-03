import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Opportunity() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden py-24"
    >
      {/* Background Image - slightly different composition */}
      <div className="absolute inset-0">
        <img
          src="/handshake_closeup.jpg"
          alt="Business handshake"
          className="w-full h-full object-cover scale-105 -translate-x-4"
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
          className={`font-display text-[clamp(32px,5.5vw,84px)] text-[#F7F7F5] uppercase tracking-[-0.03em] leading-[0.95] transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          <span className="block">Opportunity Favours</span>
          <span className="block mt-2">The Ready</span>
        </h2>

        {/* Body */}
        <p 
          className={`mt-10 max-w-xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          When the moment arrives, we move—clear terms, fast execution, no surprises.
        </p>

        {/* CTA */}
        <div 
          className={`mt-12 transition-all duration-1000 delay-400 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="#contact" className="btn-primary">
            Request a call
          </a>
        </div>
      </div>
    </section>
  );
}
