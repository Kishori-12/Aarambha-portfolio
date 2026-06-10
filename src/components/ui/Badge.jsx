import { motion } from 'framer-motion'

export default function Badge({ children, accent = '#B8954A' }) {
  const isGold = accent === '#B8954A'
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -1 }}
      transition={{ type: 'spring', stiffness: 340, damping: 20 }}
      className="inline-flex items-center px-3 py-[5px] rounded-full font-body
                 text-[0.72rem] font-medium cursor-default select-none"
      style={{
        background: `${accent}0F`,
        border: `1px solid ${accent}28`,
        color: isGold ? '#8B6A2A' : '#4A7050',
      }}
    >
      {children}
    </motion.span>
  )
}
