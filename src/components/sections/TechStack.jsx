import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import { techCategories } from '../../data/techStack'

// ── Variants ────────────────────────────────────────────────────────────────
const sectionIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}
const groupIn = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const itemIn = {
  hidden:  { opacity: 0, y: 18, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

// ── Single tech logo pill ────────────────────────────────────────────────────
function TechPill({ name, slug, color }) {
  const [imgOk, setImgOk] = useState(true)

  // Use a neutral dark for very-light brand colors so it reads on white bg
  const isLight = ['#F7DF1E', '#FFCA28', '#61DAFB'].includes(color)
  const iconBg  = isLight ? `${color}22` : `${color}12`
  const iconBorder = `${color}28`

  return (
    <motion.div
      variants={itemIn}
      whileHover={{ y: -4, scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      {/* logo circle */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center
                   transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]"
        style={{
          background: iconBg,
          border: `1.5px solid ${iconBorder}`,
        }}
      >
        {imgOk ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
            alt={name}
            onError={() => setImgOk(false)}
            className="w-7 h-7 object-contain"
            loading="lazy"
          />
        ) : (
          /* fallback: first 2 letters */
          <span
            className="font-display text-[0.75rem] font-800 leading-none"
            style={{ color }}
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* name */}
      <span className="font-body text-[0.72rem] font-medium text-[#1A1A2E]/60
                       group-hover:text-[#1A1A2E]/90 transition-colors duration-200
                       text-center leading-tight max-w-[72px]">
        {name}
      </span>
    </motion.div>
  )
}

// ── Category group ───────────────────────────────────────────────────────────
function CategoryGroup({ title, techs, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5"
    >
      {/* category label */}
      <div className="flex items-center gap-3">
        <span className="font-display text-[0.875rem] font-700 text-[#1A1A2E]">
          {title}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-[#1A1A2E]/10 to-transparent rounded-full" />
      </div>

      {/* logo grid */}
      <motion.div
        variants={groupIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-x-5 gap-y-6"
      >
        {techs.map(tech => (
          <TechPill key={`${tech.slug}-${tech.name}`} {...tech} />
        ))}
      </motion.div>
    </motion.div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-28 bg-[#F9F6F1] overflow-hidden">
      <div className="absolute top-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full
                      bg-[#B8954A]/7 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[280px] h-[280px] rounded-full
                      bg-[#6B8F71]/7 blur-[90px] pointer-events-none" />

      <Container>
        <motion.div
          variants={sectionIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-72px' }}
        >
          <SectionTitle subtitle="Technologies we use to build scalable and intelligent systems">
            Tech Stack
          </SectionTitle>

          {/* all category groups */}
          <div className="mt-12 flex flex-col gap-12">
            {techCategories.map((cat, i) => (
              <CategoryGroup
                key={cat.id}
                title={cat.title}
                techs={cat.techs}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
