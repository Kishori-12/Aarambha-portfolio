import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Container from '../layout/Container'
import SectionTitle from '../ui/SectionTitle'
import { team } from '../../data/team'
import { staggerContainer, staggerItem } from '../../animations/stagger'

const cardIn = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
}

function TeamCard({ member }) {
  return (
    <motion.div
      variants={cardIn}
      className="group relative flex flex-col items-center text-center gap-2 rounded-2xl p-6
        bg-white/60 backdrop-blur-md border border-white/70 cursor-default
        shadow-[0_4px_24px_0_rgba(200,169,106,0.08)]
        transition-all duration-300
        hover:shadow-[0_16px_48px_0_rgba(200,169,106,0.18)]
        hover:-translate-y-1.5"
    >
      {/* Gradient top accent bar */}
      <span className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full
        bg-gradient-to-r from-[#C8A96A] to-[#E8C07D] opacity-0
        group-hover:opacity-100 transition-opacity duration-300" />

      {/* Initials avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center
          font-display text-[1.1rem] font-800 shrink-0"
        style={{
          background: member.accent === '#B8954A'
            ? 'linear-gradient(135deg, #EAE2D6, #D8C8A8)'
            : 'linear-gradient(135deg, #DDE8DE, #BFCEBD)',
          color: member.accent,
          border: `2px solid ${member.accent}30`,
        }}
      >
        {member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
      </div>

      <h3 className="font-display text-[1rem] font-700 text-[#1A1A2E]">{member.name}</h3>
      <p className="font-body text-[0.78rem] text-[#8A9A8C] font-medium">{member.role}</p>
    </motion.div>
  )
}

export default function Team() {
  const navigate = useNavigate()

  return (
    <section
      id="team"
      className="relative py-24 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F3EDE3 0%, #FAF7F2 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-[-60px] right-[-60px] w-[360px] h-[360px] rounded-full bg-[#B8954A]/7 blur-[100px] pointer-events-none blob blob-d2" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#6B8F71]/7 blur-[100px] pointer-events-none blob blob-d4" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-12"
        >
          <SectionTitle align="center" subtitle="The people behind Aarambha">
            Our Team
          </SectionTitle>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto w-full">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center gap-4"
          >
            <p className="font-body text-[0.875rem] text-[#1A1A2E]/45 text-center">
              Curious about who we are and how Aarambha started?
            </p>
            <motion.button
              onClick={() => navigate('/team')}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(184,149,74,0.40)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                font-display text-[0.9rem] font-600 text-white
                bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]
                shadow-[0_2px_16px_rgba(184,149,74,0.32)]
                transition-shadow duration-300 cursor-pointer"
            >
              Meet the Team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
