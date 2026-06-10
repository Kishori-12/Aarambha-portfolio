import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

const topProjects = projects
import { staggerContainer, staggerItem } from '../animations/stagger'

const cardVariants = {
  rest:  { scale: 1, y: 0, boxShadow: '0 4px 24px 0 rgba(200,169,106,0.08)' },
  hover: { scale: 1.025, y: -6, boxShadow: '0 16px 48px 0 rgba(200,169,106,0.22)' },
}

function TechBadge({ label }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-wide border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#9A7A3A]">
      {label}
    </span>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-lg max-h-[88vh] overflow-y-auto
              rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80
              shadow-[0_24px_64px_0_rgba(200,169,106,0.18)] p-8 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#1A1A2E] leading-tight">{project.title}</h3>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#C8A96A] mt-1">{project.tagline}</p>
                </div>
                <button onClick={onClose}
                  className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    bg-[#C8A96A]/10 hover:bg-[#C8A96A]/20 text-[#9A7A3A] transition-colors duration-200">
                  ✕
                </button>
              </div>
              <span className="block h-[1.5px] rounded-full bg-gradient-to-r from-[#C8A96A] to-[#E8C07D] opacity-40" />
              <div className="flex flex-col gap-1.5">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8A9B8C]">Problem</p>
                <p className="text-sm text-[#3A3A4A] leading-relaxed">{project.problem}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8A9B8C]">Solution</p>
                <p className="text-sm text-[#3A3A4A] leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8A9B8C]">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => <TechBadge key={tag} label={tag} />)}
                </div>
              </div>
              {project.highlight && (
                <div className="flex items-start gap-2 rounded-xl bg-[#C8A96A]/10 border border-[#C8A96A]/20 px-3 py-2.5">
                  <span className="text-[#C8A96A]">🏆</span>
                  <p className="text-xs text-[#7A6030] leading-relaxed">{project.highlight}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div variants={staggerItem} className="flex flex-col h-full">
      <motion.div
        variants={cardVariants} initial="rest" whileHover="hover" animate="rest"
        className="relative flex flex-col h-full rounded-2xl p-6 overflow-hidden
          bg-white/60 backdrop-blur-md border border-white/70
          transition-colors duration-300 group"
        style={{ backdropFilter: 'blur(16px)' }}
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent
          group-hover:border-[#C8A96A]/40 transition-all duration-300" />
        <span className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full
          bg-gradient-to-r from-[#C8A96A] to-[#E8C07D] opacity-70" />
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <h3 className="font-display text-xl font-bold text-[#1A1A2E] leading-tight">{project.title}</h3>
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#C8A96A] mt-0.5">{project.tagline}</p>
          </div>
          <p className="text-sm text-[#5A5A6A] leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <motion.button
          onClick={() => onOpen(project)}
          whileHover={{ scale: 1.03, boxShadow: '0 0 16px rgba(200,169,106,0.4)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          className="mt-5 self-start px-5 py-2 rounded-xl text-xs font-semibold text-white
            bg-gradient-to-r from-[#C8A96A] via-[#E8C07D] to-[#C8A96A]
            cursor-pointer shadow-[0_2px_10px_0_rgba(200,169,106,0.2)]"
        >
          More Details ↗
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F3EDE3 100%)' }}>

      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[#C8A96A]/15">
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
          <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
            Top Projects
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-r from-[#C8A96A] to-[#E8C07D]" />
            <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Our Work
            </span>
            <span className="w-5 h-[1.5px] rounded-full bg-gradient-to-l from-[#C8A96A] to-[#E8C07D]" />
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] font-800 tracking-[-0.04em] text-[#1A1A2E] leading-tight">
            Top Projects
          </h1>
          <p className="font-body text-[0.9rem] text-[#1A1A2E]/50 max-w-md leading-relaxed">
            Our most impactful real-world solutions.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topProjects.map(project => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
