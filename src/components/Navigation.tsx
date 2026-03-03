import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-md py-4 sm:py-6'
          : 'bg-transparent py-4 sm:py-8'
          }`}
      >
        <div className="px-6 sm:px-12 lg:px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/Logo.png"
              alt="The TCC Ltd"
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </a>

          {/* Nav Links */}
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="#services"
              className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
            >
              Work
            </a>
            <a
              href="#approach"
              className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
            >
              Approach
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-[#B9B5AD] hover:text-[#C9A227] transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B0C0E]/95 backdrop-blur-lg z-40 transition-all duration-300 sm:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <a
          href="#services"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-mono text-lg text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
        >
          Work
        </a>
        <a
          href="#approach"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-mono text-lg text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
        >
          Approach
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-mono text-lg text-[#B9B5AD] tracking-widest uppercase hover:text-[#C9A227] transition-colors"
        >
          Contact
        </a>
      </div>
    </>
  );
}
