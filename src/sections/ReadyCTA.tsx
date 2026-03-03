import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ReadyCTA() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden py-14 lg:py-24"
    >
      {/* Background Image - slightly different composition */}
      <div className="absolute inset-0">
        <img
          src="/gold_bullion_closeup.jpg"
          alt="Gold bullion"
          className="w-full h-full object-cover scale-105 translate-x-4"
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
          className={`font-display text-[clamp(36px,6vw,96px)] text-[#F7F7F5] uppercase tracking-[-0.03em] leading-[0.95] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
        >
          <span className="block">Ready When</span>
          <span className="block mt-2">You Are</span>
        </h2>

        {/* Body */}
        <p
          className={`mt-10 max-w-xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          If you're looking for a partner who values discretion, speed, and
          long-term thinking—let's talk.
        </p>

        {/* CTAs */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <a href="mailto:info@thetccltd.com" className="btn-primary">
            Request a call
          </a>
        </div>
      </div>
    </section>
  );
}
