// src/components/ContactSection.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E2E8F0] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>

              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#3B82F6]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>

                <div className="w-16 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#1D4ED8]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET&apos;S BUILD
                  </span>

                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DBEAFE] via-[#60A5FA] to-[#172554] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    SOMETHING GREAT.
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <p
                className="text-xs sm:text-[13px] font-light text-[#94A3B8] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have a project idea, development requirement, training
                opportunity, or collaboration in mind? Get in touch and
                let&apos;s turn your idea into a practical digital solution.
              </p>

              {/* Contact Information */}
              <div
                className="mt-8 space-y-4 text-xs text-[#BDB0A4]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>
                  <span className="text-[#3B82F6]">EMAIL //</span>{' '}
                  <a
                    href="mailto:vimalg454@gmail.com"
                    className="hover:text-[#DBEAFE] transition-colors"
                  >
                    vimalg454@gmail.com
                  </a>
                </p>

                <p>
                  <span className="text-[#3B82F6]">ROLE //</span>{' '}
                  Full Stack Developer &amp; Technical Trainer
                </p>

                <p>
                  <span className="text-[#3B82F6]">SPECIALIZATION //</span>{' '}
                  Web Development • AI • Software Projects
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#1D4ED8]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >

            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/70 to-transparent" />

            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#3B82F6]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#3B82F6]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#3B82F6]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#3B82F6]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">

                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#3B82F6] text-[#3B82F6] text-sm">
                  ✓
                </div>

                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  MESSAGE SENT
                </h3>

                <p
                  className="text-xs text-[#94A3B8] font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#1D4ED8] mb-2">
                      // NAME
                    </span>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                      className="w-full bg-[#080D18] border border-[#1D4ED8]/30 focus:border-[#3B82F6] text-xs text-white placeholder-[#1D4ED8]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#1D4ED8] mb-2">
                      // EMAIL
                    </span>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="w-full bg-[#080D18] border border-[#1D4ED8]/30 focus:border-[#3B82F6] text-xs text-white placeholder-[#1D4ED8]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#1D4ED8] mb-2">
                    // MESSAGE
                  </span>

                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#080D18] border border-[#1D4ED8]/30 focus:border-[#3B82F6] text-xs text-white placeholder-[#1D4ED8]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#1D4ED8]/50 bg-[#14100D] hover:border-[#3B82F6] hover:bg-[#1A1510] text-[#E2E8F0] hover:text-[#DBEAFE] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND MESSAGE ↗
                </button>

              </form>
            )}

          </motion.div>
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="mt-12 flex flex-wrap gap-6 text-[10px] font-mono tracking-[0.2em] uppercase">

          <a
            href="https://github.com/Vimal4hckr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D4ED8] hover:text-[#3B82F6] transition-colors"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/vimal-r-74b74325b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D4ED8] hover:text-[#3B82F6] transition-colors"
          >
            LINKEDIN ↗
          </a>

          <a
            href="mailto:vimalg454@gmail.com"
            className="text-[#1D4ED8] hover:text-[#3B82F6] transition-colors"
          >
            EMAIL ↗
          </a>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="pt-16 mt-12 border-t border-[#1D4ED8]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">

          <span className="text-[10px] font-mono tracking-widest text-[#1D4ED8] uppercase">
            VIMAL R. // FULL STACK DEVELOPER
          </span>

          <span className="text-[10px] font-mono text-[#1D4ED8]">
            © {new Date().getFullYear()} • BUILT WITH CREATIVITY &amp; DM FOR PROJECTS
          </span>

        </div>

      </div>
    </footer>
  );
};

export default ContactSection;