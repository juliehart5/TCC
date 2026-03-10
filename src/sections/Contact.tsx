import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function Contact() {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const { ref: form, isRevealed: formRevealed } = useScrollReveal<HTMLFormElement>({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_114vcyr",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_f5kv4pp",
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "wBwGwyT0F6dJiBQxY"
    );

    toast.promise(promise, {
      loading: 'Sending your message...',
      success: () => {
        setIsSending(false);
        setFormData({ name: '', email: '', company: '', message: '' });
        return 'Message sent successfully!';
      },
      error: (err) => {
        setIsSending(false);
        console.error("Failed to send message", err);
        return 'Failed to send message. Please try again.';
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            ref={form}
            onSubmit={sendEmail}
            className={`space-y-6 transition-all duration-1000 delay-200 ${formRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            {/* Hidden fields for EmailJS Template */}
            <input type="hidden" name="title" value="New Inquiry from Website" />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-[#B9B5AD] tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                name="company"
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
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[120px] resize-none"
                placeholder="How can we help?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className={`w-4 h-4 mr-2 ${isSending ? 'animate-pulse' : ''}`} />
              {isSending ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-8 border-t border-[#F7F7F5]/10 transition-all duration-1000 delay-400 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 w-full">
            <p className="font-mono text-xs text-[#B9B5AD] tracking-widest">
              © 2026 The TCC Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/the-tcc-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#C9A227] hover:text-[#F7F7F5] transition-all duration-300 bg-[#C9A227]/5 px-4 py-2 rounded-full border border-[#C9A227]/20"
                aria-label="Visit The TCC Ltd on LinkedIn"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium">LinkedIn</span>
                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
