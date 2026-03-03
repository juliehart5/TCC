import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { WeAreTCC } from '@/sections/WeAreTCC';
import { GlobalReach } from '@/sections/GlobalReach';
import { MarketsChange } from '@/sections/MarketsChange';
import { Services } from '@/sections/Services';
import { Trust } from '@/sections/Trust';
import { Opportunity } from '@/sections/Opportunity';
import { Discipline } from '@/sections/Discipline';
import { ReadyCTA } from '@/sections/ReadyCTA';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: We Are TCC */}
        <WeAreTCC />

        {/* Section 3: Global Reach */}
        <GlobalReach />

        {/* Section 4: Markets Change */}
        <MarketsChange />

        {/* Section 5: Services */}
        <div id="services">
          <Services />
        </div>

        {/* Section 6: Trust */}
        <div id="approach">
          <Trust />
        </div>

        {/* Section 7: Opportunity */}
        <Opportunity />

        {/* Section 8: Discipline */}
        <Discipline />

        {/* Section 9: Ready CTA */}
        <ReadyCTA />

        {/* Section 10: Contact */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
