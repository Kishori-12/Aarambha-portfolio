import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight rounded-full transition-all duration-300 cursor-pointer select-none'

const variants = {
  solid:
    `${base} px-7 py-3 text-[0.875rem] bg-gradient-to-r from-[#B8954A] to-[#D4AE6A]
     text-white shadow-gold hover:shadow-gold-lg hover:-translate-y-[1px] active:translate-y-0`,
  outline:
    `${base} px-7 py-3 text-[0.875rem] border border-[#B8954A]/50 text-[#B8954A]
     hover:bg-[#B8954A]/8 hover:border-[#B8954A] hover:-translate-y-[1px]`,
  ghost:
    `${base} px-6 py-2.5 text-[0.8125rem] text-[#6B6B8A] hover:text-[#1A1A2E]
     hover:bg-[#1A1A2E]/6`,
}

export default function Button({ children, variant = 'solid', href, onClick, className = '' }) {
  const Tag = href ? motion.a : motion.button
  return (
    <Tag
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}
