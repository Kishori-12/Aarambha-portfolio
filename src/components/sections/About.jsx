import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'

const reveal   = { hidden: {}, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const fromLeft = { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const fromRight= { hidden: { opacity: 0, x: 32  }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const up       = { hidden: { opacity: 0, y: 18   }, visible: { opacity: 1, y: 0, transition: { duration: 0.5,  ease: [0.22, 1, 0.36, 1] } } }
const cardGrid = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const cardIn   = { hidden: { opacity: 0, y: 22, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

const Icons = {
  Mission: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3" />
      <path d="M10 3V1M10 19v-2M3 10H1M19 10h-2" />
    </svg>
  ),
  Vision: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M1 10s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" />
      <circle cx="10" cy="10" r="2.5" />
    </svg>
  ),
  Approach: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 10h12M13 7l3 3-3 3" />
      <path d="M4 5v10" strokeDasharray="2 2" />
    </svg>
  ),
  Focus: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1.5" />
    </svg>
  ),
}

const cards = [
  { key: 'Mission',  title: 'Mission',  body: 'Build practical, real-world software that solves meaningful problems at scale.',  accent: '#B8954A' },
  { key: 'Vision',   title: 'Vision',   body: 'Become a product + AI engineering team known for quality, speed, and impact.',    accent: '#6B8F71' },
  { key: 'Approach', title: 'Approach', body: 'Learn → Build → Improve → Deploy. Every iteration makes us sharper.',            accent: '#B8954A' },
  { key: 'Focus',    title: 'Focus',    body: 'Full Stack, AI / ML systems, and scalable backend infrastructure.',               accent: '#6B8F71' },
]

const steps = [
  { n: '01', label: 'Problem Understanding', desc: 'Deep-dive into the real need before writing a line of code.' },
  { n: '02', label: 'System Design',         desc: 'Architecture-first thinking for scalable, maintainable solutions.' },
  { n: '03', label: 'Rapid Prototyping',     desc: 'Ship fast, iterate faster. Validate ideas in days, not weeks.' },
  { n: '04', label: 'Deployment Mindset',    desc: 'Production-ready from day one — CI/CD, monitoring, reliability.' },
]

function Card({ keyName, title, body, accent }) {
  return (
    <motion.div variants={cardIn}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex items-start gap-4 rounded-2xl bg-white/75
                 border border-[#1A1A2E]/5 shadow-card p-5 cursor-default overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 pointer-events-none"
        style={{ background: `${accent}07`, boxShadow: `inset 0 0 0 1px ${accent}22` }} />
      <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}
      >
        {Icons[keyName]}
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="font-display text-[0.9rem] font-700 text-[#1A1A2E]">{title}</h3>
        <p className="font-body text-[0.8rem] text-[#1A1A2E]/50 leading-[1.6]">{body}</p>
      </div>
      <div className="absolute left-0 top-4 bottom-4 w-[2.5px] rounded-full opacity-0
                      group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}00)` }} />
    </motion.div>
  )
}

function Step({ n, label, desc, last }) {
  return (
    <motion.div variants={up} className="flex gap-3.5 items-start">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B8954A] to-[#D4AE6A]
                        flex items-center justify-center shadow-[0_2px_10px_rgba(184,149,74,0.28)]">
          <span className="font-display text-[0.6rem] font-800 text-white">{n}</span>
        </div>
        {!last && <div className="w-px h-7 mt-1 bg-gradient-to-b from-[#B8954A]/25 to-transparent" />}
      </div>
      <div className="pb-1">
        <p className="font-display text-[0.875rem] font-600 text-[#1A1A2E] mb-0.5">{label}</p>
        <p className="font-body text-[0.8rem] text-[#1A1A2E]/48 leading-[1.62]">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#F2EDE5] overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#6B8F71]/7 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full bg-[#B8954A]/7 blur-[100px] pointer-events-none" />

      <Container>
        <motion.div variants={reveal} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-72px' }} className="flex flex-col gap-14"
        >
          <SectionTitle subtitle="A team built on curiosity, consistency, and execution">
            About Aarambha
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">

            {/* Left: story + steps */}
            <motion.div variants={fromLeft} className="flex flex-col gap-8">
              {[
                {
                  label: 'Who We Are',
                  text: <>Aarambha — meaning <em className="not-italic font-semibold text-[#B8954A]">"the beginning"</em> — is a multidisciplinary student engineering team bridging academic depth with real-world engineering discipline.</>,
                },
                {
                  label: 'What We Build',
                  text: 'From full-stack web apps to AI-powered systems and scalable backend infrastructure — we design, build, and ship production-ready software with a focus on performance and architecture.',
                },
              ].map(({ label, text }) => (
                <div key={label} className="flex flex-col gap-2.5">
                  <h3 className="font-display text-[1rem] font-700 text-[#1A1A2E] flex items-center gap-2">
                    <span className="w-3.5 h-px rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />
                    {label}
                  </h3>
                  <p className="font-body text-[0.9rem] text-[#1A1A2E]/55 leading-[1.72]">{text}</p>
                </div>
              ))}

              <div>
                <h3 className="font-display text-[1rem] font-700 text-[#1A1A2E] flex items-center gap-2 mb-4">
                  <span className="w-3.5 h-px rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />
                  How We Work
                </h3>
                <div className="flex flex-col gap-0.5">
                  {steps.map((s, i) => <Step key={s.n} {...s} last={i === steps.length - 1} />)}
                </div>
              </div>
            </motion.div>

            {/* Right: cards + quote */}
            <motion.div variants={fromRight} className="flex flex-col gap-4">
              <motion.div variants={cardGrid} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-50px' }} className="flex flex-col gap-3"
              >
                {cards.map(c => <Card key={c.key} keyName={c.key} title={c.title} body={c.body} accent={c.accent} />)}
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.52, delay: 0.18 }}
                className="rounded-2xl bg-gradient-to-br from-[#B8954A]/7 to-[#6B8F71]/5
                           border border-[#B8954A]/14 p-5"
              >
                <div className="flex gap-3 items-start">
                  <span className="font-display text-[2.2rem] leading-none text-[#B8954A]/25 mt-[-6px] select-none">"</span>
                  <p className="font-body text-[0.875rem] italic text-[#1A1A2E]/52 leading-[1.68]">
                    We don't just learn to pass exams — we build to create impact.
                    Every project is a chance to engineer something real.
                  </p>
                </div>
                <p className="font-body text-[0.67rem] font-semibold text-[#B8954A] mt-3 ml-10 uppercase tracking-[0.16em]">
                  — The Aarambha Team
                </p>
              </motion.blockquote>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  )
}
