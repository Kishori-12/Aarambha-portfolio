import { motion } from 'framer-motion'
import { hoverLift } from '../../animations/hoverEffects'

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      {...hoverLift}
      className={`rounded-xl border border-white/10 bg-white/5 p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
