import { motion } from 'framer-motion'

const reveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionTitle({ children, subtitle, align = 'left' }) {
  const center = align === 'center'
  return (
    <motion.div
      variants={reveal}
      className={`flex flex-col gap-2.5 ${center ? 'items-center text-center' : 'items-start'}`}
    >
      {/* eyebrow */}
      <div className="flex items-center gap-2">
        {!center && <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]" />}
        <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#B8954A]">
          {children}
        </span>
      </div>
      {/* heading */}
      {subtitle && (
        <h2 className="font-display text-[1.85rem] sm:text-[2.25rem] font-700 leading-[1.15] text-[#1A1A2E] max-w-2xl">
          {subtitle}
        </h2>
      )}
    </motion.div>
  )
}
