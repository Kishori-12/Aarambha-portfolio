import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const up = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
}
const fade = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
}

function Blob({ className }) {
  return <div className={`absolute rounded-full pointer-events-none ${className}`} />
}

// ── Floating stat chip ──────────────────────────────────────────────────────
function StatChip({ value, label, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute flex flex-col items-center justify-center
                  bg-white/80 backdrop-blur-md border border-white
                  shadow-[0_4px_20px_rgba(26,26,46,0.08)]
                  rounded-2xl px-5 py-3 pointer-events-none ${className}`}
    >
      <span className="font-display text-[1.4rem] font-800 leading-none
                       bg-gradient-to-r from-[#B8954A] to-[#D4AE6A] bg-clip-text text-transparent">
        {value}
      </span>
      <span className="font-body text-[0.65rem] text-[#1A1A2E]/45 uppercase tracking-[0.14em] mt-0.5">
        {label}
      </span>
    </motion.div>
  )
}

// ── Domain tag row ──────────────────────────────────────────────────────────
const domains = [
  { icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="16" height="11" rx="2"/>
        <path d="M6 17h8M10 14v3" strokeLinecap="round"/>
      </svg>
    ), label: 'Full Stack' },
  { icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="3"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" strokeLinecap="round"/>
      </svg>
    ), label: 'AI / ML' },
  { icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 5l4 4-4 4M9 13h8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), label: 'Backend' },
  { icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="2" width="10" height="16" rx="2"/>
        <path d="M8 15h4" strokeLinecap="round"/>
      </svg>
    ), label: 'Mobile' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const blobY    = useTransform(scrollYProgress, [0, 1], [0, -65])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 32])

  return (
    <section ref={ref} id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F3EDE3 60%, #F7F2EA 100%)' }}
    >
      {/* ── Blobs ── */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <Blob className="w-[500px] h-[500px] bg-[#B8954A]/12 blur-[110px] top-[-120px] left-[-100px] blob" />
        <Blob className="w-[380px] h-[380px] bg-[#6B8F71]/10 blur-[100px] top-[5%]  right-[-80px]  blob blob-d2" />
        <Blob className="w-[300px] h-[300px] bg-[#D4AE6A]/10 blur-[90px]  bottom-[-60px] left-[40%]   blob blob-d4" />
      </motion.div>

      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #1A1A2E09 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />

      {/* ── Floating stat chips (hidden on mobile) ── */}
      <div className="hidden lg:block">
        <StatChip value="8+"  label="Projects"   delay={1.1} className="top-[22%] left-[4%]" />
        <StatChip value="4+"  label="Domains"    delay={1.3} className="top-[38%] left-[2%]" />
        <StatChip value="∞"   label="Ideas"      delay={1.5} className="top-[30%] right-[3%]" />
        <StatChip value="100%" label="Student-led" delay={1.7} className="top-[46%] right-[2%]" />
      </div>

      {/* ── Content ── */}
      <motion.div style={{ y: contentY }}
        className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col items-center text-center"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-5"
        >
          {/* eyebrow */}
          <motion.div variants={fade} className="flex items-center gap-2.5">
            <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />
            <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#B8954A]">
              Student Engineering Team
            </span>
            <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-l from-[#B8954A] to-[#D4AE6A]" />
          </motion.div>

          {/* heading */}
          <motion.h1 variants={up}
            className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem]
                       font-800 leading-[0.92] tracking-[-0.045em] text-[#1A1A2E]"
          >
            Aarambha
          </motion.h1>

          {/* gradient subtitle */}
          <motion.p variants={up}
            className="font-display text-[1.1rem] sm:text-[1.3rem] font-600 leading-[1.4] max-w-lg"
            style={{
              background: 'linear-gradient(110deg, #B8954A 0%, #D4AE6A 45%, #6B8F71 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Engineering Ideas Into Real-World Intelligent Systems
          </motion.p>

          {/* body */}
          <motion.p variants={up}
            className="font-body text-[0.9375rem] text-[#1A1A2E]/50 leading-[1.72] max-w-[500px]"
          >
            A multidisciplinary student engineering team building scalable software,
            AI-powered systems, and production-ready applications.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={up} className="flex flex-wrap justify-center items-center gap-3 pt-1">
            <Button href="#projects" variant="solid" className="btn-glow-pulse">
              View Projects
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="#team" variant="outline">Meet the Team</Button>
          </motion.div>

          {/* domain tags */}
          <motion.div variants={fade} className="flex flex-wrap justify-center gap-2 pt-2">
            {domains.map(({ icon, label }) => (
              <span key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                           font-body text-[0.72rem] font-medium
                           bg-white/70 border border-[#1A1A2E]/8
                           text-[#1A1A2E]/55 shadow-[0_1px_6px_rgba(26,26,46,0.06)]"
              >
                <span className="text-[#B8954A]">{icon}</span>
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col items-center gap-1.5 mt-16"
        >
          <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-[#1A1A2E]/28">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[17px] h-[28px] rounded-full border border-[#B8954A]/28
                       flex items-start justify-center pt-1.5"
          >
            <div className="w-[3px] h-[6px] rounded-full bg-[#B8954A]/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
