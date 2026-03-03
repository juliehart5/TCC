import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  {
    name: 'Julie',
    image: '/Julie.jpeg',
    bio: [
      'International lending and trade finance background',
      'Research and Innovation at top European Universities',
      'Experienced in gold and silver sourcing and delivering',
      'Global network'
    ]
  },
  {
    name: 'George',
    image: '/George.jpeg',
    bio: [
      'Financial markets background',
      'Trade execution',
      '9 years experience in sourcing and delivering gold bullion and dore',
      'Diverse network'
    ]
  }
];

export function Partners() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative w-full py-20 lg:py-32 bg-[#0B0C0E]"
    >
      <div className="relative z-10 px-6 sm:px-12 lg:px-[6vw]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <h2
              className={`font-display text-[clamp(36px,5vw,72px)] text-[#F7F7F5] uppercase tracking-[-0.03em] transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
              Our Partners
            </h2>
            <div
              className={`h-px bg-[#C9A227]/30 mt-8 transition-all duration-1000 delay-300 ${isRevealed ? 'w-full' : 'w-0'
                }`}
            />
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-3xl text-[#F7F7F5] uppercase tracking-wider mb-6">
                    {partner.name}
                  </h3>
                  <ul className="space-y-4">
                    {partner.bio.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 shrink-0" />
                        <p className="text-[#B9B5AD] text-sm lg:text-base leading-relaxed font-mono tracking-tight group-hover:text-[#F7F7F5] transition-colors duration-300">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
