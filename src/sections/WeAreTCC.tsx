import { useScrollReveal } from '@/hooks/useScrollReveal';

export function WeAreTCC() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden py-14 lg:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_city_skyline.jpg"
          alt="City skyline"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 dark-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[60vh] lg:min-h-screen px-6 sm:px-12 lg:px-[6vw]">
        {/* Headline */}
        <h2
          className={`font-display text-[clamp(42px,7vw,104px)] text-[#F7F7F5] uppercase tracking-[-0.03em] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
        >
          We Are TCC
        </h2>

        {/* Body */}
        <p
          className={`mt-8 max-w-xl text-[clamp(14px,1.2vw,16px)] text-[#B9B5AD] leading-relaxed transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
        >
          A partnership built on execution. We move between markets, time zones, and
          opportunities—always with the same standard: precision, discretion, and
          long-term thinking.
        </p>

        {/* Partners */}
        <div
          className={`mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">Partner</p>
            <p className="text-[clamp(16px,1.5vw,20px)] text-[#F7F7F5] font-medium">George Hurst</p>
          </div>
          <div>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">Partner</p>
            <p className="text-[clamp(16px,1.5vw,20px)] text-[#F7F7F5] font-medium">Julie Hart-Thompson</p>
          </div>
        </div>

        {/* Consultants */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 transition-all duration-1000 delay-600 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">Consultant</p>
            <p className="text-[clamp(16px,1.5vw,20px)] text-[#F7F7F5] font-medium">Amy Dowd</p>
          </div>
          <div>
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">Consultant</p>
            <p className="text-[clamp(16px,1.5vw,20px)] text-[#F7F7F5] font-medium">Claudio Cadalco</p>
          </div>
        </div>
      </div>
    </section>
  );
}
