import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Package, Box, Bitcoin, DollarSign, History, FileText } from 'lucide-react';

const services = [
  { icon: Package, title: 'Bullion & Dore Sourcing & Delivery' },
  { icon: Shield, title: 'Silver Sourcing & Delivery' },
  { icon: Box, title: 'Copper Cathode Sourcing & Delivery' },
  { icon: Bitcoin, title: 'BTC Private Sales & Purchase' },
  { icon: DollarSign, title: 'USDT Private Sales & Purchase' },
  { icon: History, title: 'Historical Asset Sourcing' },
  { icon: FileText, title: 'Private Placement Programmes' },
];

export function Services() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const { ref: cardRef, isRevealed: cardRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 lg:py-32"
      style={{ backgroundColor: '#F2F0EA' }}
    >
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 px-6 sm:px-12 lg:px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            {/* Headline */}
            <h2
              className={`font-display text-[clamp(36px,5vw,72px)] text-[#0B0C0E] uppercase tracking-[-0.03em] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              What We Do
            </h2>

            {/* Intro */}
            <p
              className={`mt-8 max-w-md text-[clamp(14px,1.1vw,16px)] text-[#0B0C0E]/70 leading-relaxed transition-all duration-1000 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              We specialise in precious metals and commodities advisory, execution,
              and structuring tailored to institutional and private clients.
            </p>
          </div>

          {/* Right Column - Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex items-center gap-4 p-4 border-b border-[#0B0C0E]/10 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <service.icon className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />
                <span className="text-[clamp(14px,1.1vw,16px)] text-[#0B0C0E] font-medium">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div
          ref={cardRef}
          className={`mt-24 lg:mt-32 max-w-4xl mx-auto p-8 lg:p-12 border border-[#0B0C0E]/10 transition-all duration-1000 ${cardRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
            }`}
        >
          <h3 className="font-display text-[clamp(24px,3vw,36px)] text-[#0B0C0E] uppercase tracking-[-0.02em]">
            Start with a conversation.
          </h3>
          <p className="mt-4 text-[clamp(14px,1.1vw,16px)] text-[#0B0C0E]/70">
            Tell us what you're building. We'll respond within one business day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@thetccltd.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0B0C0E] text-[#F7F7F5] font-semibold text-sm tracking-wide uppercase hover:bg-[#1a1c20] transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
