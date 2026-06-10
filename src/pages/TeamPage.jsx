import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { team } from '../data/team'
import Badge from '../components/ui/Badge'

// ── Variants ─────────────────────────────────────────────────────────────────
const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const cardIn  = { hidden: { opacity: 0, y: 32, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } } }

const roleColors = {
  'Web Dev':  { bg: '#B8954A0D', border: '#B8954A28', text: '#8B6A2A' },
  'Backend':  { bg: '#6B8F710D', border: '#6B8F7128', text: '#4A7050' },
  'Android':  { bg: '#B8954A0D', border: '#B8954A28', text: '#8B6A2A' },
}

// journey — no year field
const journey = [
  {
    title: 'The Idea Sparks',
    desc: 'Three CSE students share a frustration — too much theory, not enough real building. Aarambha is born with one goal: build things that actually work.',
  },
  {
    title: 'First Projects Shipped',
    desc: 'The team ships their first full-stack web application and an Android app. Late nights, broken builds, and breakthrough moments define this chapter.',
  },
  {
    title: 'Stack Expands',
    desc: 'Backend systems, databases, and mobile development deepen. The team begins exploring AI and intelligent systems alongside core engineering.',
  },
  {
    title: 'Portfolio & Identity',
    desc: 'Aarambha becomes a recognized student engineering team. This portfolio documents the journey and showcases work to the world.',
  },
  {
    title: "What's Next",
    desc: 'Scaling up — more projects, deeper domains, and a drive to build production-grade systems that solve real problems.',
  },
]

// ── Social icons ──────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

// ── Member card ───────────────────────────────────────────────────────────────
function MemberCard({ member }) {
  const [imgError, setImgError] = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const rs = roleColors[member.roleTag] ?? roleColors['Web Dev']

  return (
    <motion.article
      variants={cardIn}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className="relative flex flex-col items-center text-center rounded-3xl
                 bg-white/80 border border-[#1A1A2E]/5 shadow-card-lg p-8 gap-5 overflow-hidden"
    >
      {/* hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: `${member.accent}07`, boxShadow: `inset 0 0 0 1px ${member.accent}22, 0 20px 60px ${member.accent}18` }}
          />
        )}
      </AnimatePresence>

      {/* top accent line */}
      <div className="absolute top-0 left-[15%] right-[15%] h-[2.5px] rounded-full transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      {/* ── Photo ── */}
      <div className="relative">
        <div
          className="w-[120px] h-[120px] rounded-full p-[3px] transition-all duration-400"
          style={{
            background: hovered
              ? `linear-gradient(135deg, ${member.accent}, ${member.accent === '#B8954A' ? '#E8C87D' : '#8EBF94'}, ${member.accent}60)`
              : `linear-gradient(135deg, ${member.accent}50, ${member.accent}18)`,
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#EAE2D6]">
            {!imgError ? (
              <motion.img
                src={member.image}
                alt={member.name}
                onError={() => setImgError(true)}
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover"
                style={{ objectPosition: member.imagePosition ?? 'center 12%', transform: `scale(${member.imageScale ?? 1})`, transformOrigin: 'center top' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center"
                style={{ background: member.accent === '#B8954A' ? 'linear-gradient(135deg,#EAE2D6,#D8C8A8)' : 'linear-gradient(135deg,#DDE8DE,#BFCEBD)' }}
              >
                <span className="font-display text-[2.2rem] font-800" style={{ color: member.accent }}>
                  {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* name + role */}
      <div className="mt-2">
        <h3 className="font-display text-[1.15rem] font-700 text-[#1A1A2E]">{member.name}</h3>
        <p className="font-body text-[0.82rem] text-[#1A1A2E]/50 mt-0.5">{member.role}</p>
      </div>

      {/* bio */}
      <p className="font-body text-[0.855rem] text-[#1A1A2E]/52 leading-[1.68]">{member.bio}</p>

      {/* skills */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {member.skills.map(s => <Badge key={s} accent={member.accent}>{s}</Badge>)}
      </div>

      {/* social */}
      <div className="flex gap-2.5 pt-1 mt-auto">
        {member.github && (
          <motion.a href={member.github} target="_blank" rel="noreferrer"
            whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.92 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: `${member.accent}0D`, border: `1px solid ${member.accent}22`, color: member.accent }}
            aria-label="GitHub"
          >
            <GithubIcon />
          </motion.a>
        )}
        {member.linkedin && (
          <motion.a href={member.linkedin} target="_blank" rel="noreferrer"
            whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.92 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: `${member.accent}0D`, border: `1px solid ${member.accent}22`, color: member.accent }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </motion.a>
        )}
      </div>
    </motion.article>
  )
}

// ── Journey item — no year ────────────────────────────────────────────────────
function JourneyItem({ title, desc, index, total }) {
  return (
    <motion.div variants={fadeUp} className="flex gap-5 items-start">
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0
                        bg-gradient-to-br from-[#B8954A] to-[#D4AE6A]
                        shadow-[0_2px_12px_rgba(184,149,74,0.30)]">
          <span className="font-display text-[0.6rem] font-800 text-white leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        {index < total - 1 && (
          <div className="w-px flex-1 min-h-[36px] mt-1 bg-gradient-to-b from-[#B8954A]/25 to-transparent" />
        )}
      </div>

      <div className="pb-7">
        <h3 className="font-display text-[1rem] font-700 text-[#1A1A2E] mb-1.5">{title}</h3>
        <p className="font-body text-[0.875rem] text-[#1A1A2E]/52 leading-[1.7]">{desc}</p>
      </div>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F9F6F1]">

      {/* top bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#1A1A2E]/6">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-body text-[0.82rem]
                       font-medium text-[#1A1A2E]/55 hover:text-[#1A1A2E] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <span className="font-display text-[1rem] font-700 text-[#1A1A2E]">Aarambha</span>
          <span className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[#B8954A]">
            Our Story
          </span>
        </div>
      </div>

      {/* hero banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full
                        bg-[#B8954A]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[340px] h-[340px] rounded-full
                        bg-[#6B8F71]/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #1A1A2E08 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />
              <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#B8954A]">
                3 CSE Engineering Students
              </span>
              <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-l from-[#B8954A] to-[#D4AE6A]" />
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-display text-[3rem] sm:text-[4rem] font-800
                         tracking-[-0.04em] text-[#1A1A2E] leading-[1.05]"
            >
              Meet the Team
            </motion.h1>

            <motion.p variants={fadeUp}
              className="font-body text-[0.9375rem] text-[#1A1A2E]/50 leading-[1.72] max-w-lg"
            >
              We are Aarambha — three CSE engineering students building real things
              from the ground up. This is who we are and how we got here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* team cards */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map(member => <MemberCard key={member.name} member={member} />)}
          </motion.div>
        </div>
      </section>

      {/* journey */}
      <section className="py-24 bg-[#F2EDE5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full
                        bg-[#B8954A]/7 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full
                        bg-[#6B8F71]/7 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* left — story */}
            <motion.div
              initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />
                  <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#B8954A]">
                    Our Journey
                  </span>
                </div>
                <h2 className="font-display text-[2rem] sm:text-[2.4rem] font-700
                               text-[#1A1A2E] leading-[1.15] tracking-[-0.025em]">
                  How Aarambha<br />came to life
                </h2>
              </div>

              <p className="font-body text-[0.9rem] text-[#1A1A2E]/55 leading-[1.75]">
                Aarambha means <em className="not-italic font-semibold text-[#B8954A]">"the beginning"</em>.
                It started as a simple question between friends —{' '}
                <em className="not-italic text-[#1A1A2E]/70">"why aren't we building more?"</em>{' '}
                — and turned into a commitment to learn by doing.
              </p>

              <p className="font-body text-[0.9rem] text-[#1A1A2E]/55 leading-[1.75]">
                We are three CSE engineering students who refused to wait until graduation
                to start creating. Every project we ship teaches us something that no
                classroom ever could. We design, build, break, and rebuild — until it works.
              </p>
            </motion.div>

            {/* right — timeline */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col"
            >
              {journey.map((item, i) => (
                <JourneyItem key={item.title} {...item} index={i} total={journey.length} />
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* footer strip */}
      <div className="bg-[#F2EDE5] border-t border-[#1A1A2E]/8 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display font-700 text-[#1A1A2E]">Aarambha</span>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 font-body text-[0.8rem]
                       font-medium text-[#B8954A] hover:text-[#8B6A2A] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
