import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const { ref: formRef, isRevealed: formRevealed } = useScrollReveal<HTMLFormElement>({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message. We will respond within one business day.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 lg:py-32"
      style={{ backgroundColor: '#0B0C0E' }}
    >
      <div className="relative z-10 px-6 sm:px-12 lg:px-[6vw]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F7F7F5] uppercase tracking-[-0.03em]">
              Contact
            </h2>
            <p className="mt-6 max-w-md text-[clamp(14px,1.1vw,16px)] text-[#B9B5AD] leading-relaxed">
              For inquiries, mandates, or a confidential discussion reach us directly.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />
                <a
                  href="mailto:info@thetccltd.com"
                  className="text-[#F7F7F5] hover:text-[#C9A227] transition-colors"
                >
                  info@thetccltd.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />
                <span className="text-[#B9B5AD]">London • New York • Dubai</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-200 ${formRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[120px] resize-none"
                placeholder="How can we help?"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              Send message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-8 border-t border-[#F7F7F5]/10 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <p className="font-mono text-xs text-[#B9B5AD] tracking-widest">
            © 2026 The TCC Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
