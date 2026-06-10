import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import { staggerContainer } from '../../animations/stagger'

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const contactLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: 'Aarambha Mail',
    value: 'team.aarambh3@gmail.com',
    href: 'mailto:team.aarambh3@gmail.com',
  },
]

function InputField({ label, type = 'text', placeholder, rows }) {
  const [focused, setFocused] = useState(false)
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#5A4A2A] tracking-wide uppercase">{label}</label>
      <div
        className="rounded-xl transition-all duration-300"
        style={{
          boxShadow: focused ? '0 0 0 2px #C8A96A66' : '0 0 0 1px #C8A96A22',
        }}
      >
        <Tag
          type={type}
          placeholder={placeholder}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 text-sm
            text-[#1A1A2E] placeholder-[#B0A090] outline-none resize-none
            transition-colors duration-200"
        />
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F3EDE3 100%)' }}
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <SectionTitle
            align="center"
            subtitle="Let's build something meaningful together"
          >
            Contact
          </SectionTitle>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left — Contact Info */}
            <motion.div
              variants={slideLeft}
              className="flex flex-col justify-between gap-8 rounded-2xl p-8
                bg-white/60 backdrop-blur-md border border-white/70
                shadow-[0_4px_32px_0_rgba(200,169,106,0.10)]"
            >
              <div className="flex flex-col gap-5">
                {/* Accent bar */}
                <span className="w-10 h-[3px] rounded-full bg-gradient-to-r from-[#C8A96A] to-[#E8C07D]" />

                <h3 className="font-display text-2xl font-bold text-[#1A1A2E] leading-snug">
                  Get in touch
                </h3>
                <p className="text-sm text-[#5A5A6A] leading-relaxed max-w-sm">
                  Open to collaborations, internships, and innovative project opportunities.
                  Reach out and let's create something impactful.
                </p>

                {/* Links */}
                <div className="flex flex-col gap-4 mt-2">
                  {contactLinks.map(({ icon, label, value, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center gap-3 group"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl
                        bg-gradient-to-br from-[#C8A96A]/20 to-[#E8C07D]/10
                        text-[#C8A96A] border border-[#C8A96A]/20
                        group-hover:border-[#C8A96A]/50 transition-colors duration-200">
                        {icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#8A9A8C]">
                          {label}
                        </span>
                        <span className="text-sm text-[#3A3A4A] group-hover:text-[#B8954A] transition-colors duration-200">
                          {value}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="pt-6 border-t border-[#C8A96A]/15">
                <p className="text-xs text-[#8A9A8C]">
                  ✦ Based in India &nbsp;·&nbsp; Available for remote work
                </p>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              variants={slideRight}
              className="rounded-2xl p-8
                bg-white/60 backdrop-blur-md border border-white/70
                shadow-[0_4px_32px_0_rgba(200,169,106,0.10)]"
            >
              {/* Accent top bar */}
              <span className="block w-full h-[2px] rounded-full mb-7
                bg-gradient-to-r from-[#C8A96A] to-[#E8C07D] opacity-60" />

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <InputField label="Full Name" placeholder="Your full name" />
                <InputField label="Email Address" type="email" placeholder="you@example.com" />
                <InputField label="Message" placeholder="Tell us about your idea or opportunity..." rows={5} />

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(200,169,106,0.45)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="mt-1 w-full py-3 rounded-xl text-sm font-semibold text-white
                    bg-gradient-to-r from-[#C8A96A] via-[#E8C07D] to-[#C8A96A]
                    bg-[length:200%_100%] hover:bg-right
                    transition-[background-position] duration-500 cursor-pointer
                    shadow-[0_2px_12px_0_rgba(200,169,106,0.25)]"
                >
                  Send Message ✦
                </motion.button>
              </form>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  )
}
