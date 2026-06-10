import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_NAME, SITE_TAGLINE, NAV_LINKS } from '../../utils/constants'

const navIn = {
  hidden:  { y: -56, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const drawer = {
  hidden:  { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit:    { height: 0, opacity: 0, transition: { duration: 0.22, ease: 'easeIn' } },
}

function Burger({ open }) {
  return (
    <div className="flex flex-col justify-center items-center w-5 h-5 gap-[4px] cursor-pointer">
      {[
        open ? { rotate: 45, y: 6 }  : { rotate: 0, y: 0 },
        open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
        open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 },
      ].map((anim, i) => (
        <motion.span
          key={i}
          animate={anim}
          transition={{ duration: 0.22 }}
          className="block h-[1.5px] w-5 bg-[#1A1A2E] rounded-full origin-center"
        />
      ))}
    </div>
  )
}

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative group font-body text-[0.8125rem] font-medium text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors duration-200"
    >
      {label}
      <span className={`absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-gradient-to-r from-[#B8954A] to-[#D4AE6A] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </a>
  )
}

function CTA({ onClick }) {
  return (
    <motion.a
      href="#contact"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center px-5 py-2 rounded-full font-display text-[0.8125rem] font-semibold
                 bg-gradient-to-r from-[#B8954A] to-[#D4AE6A] text-white btn-glow-pulse
                 transition-shadow duration-300"
    >
      Get in Touch
    </motion.a>
  )
}

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('#hero')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const obs = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.4 }
      )
      o.observe(el)
      return o
    }).filter(Boolean)
    return () => obs.forEach(o => o.disconnect())
  }, [])

  const close = () => setOpen(false)
  const nav   = (e, href) => { e.preventDefault(); close(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <>
      <motion.nav
        variants={navIn}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
      >
        <div className={`mx-auto px-5 transition-all duration-300 ${
          scrolled
            ? 'max-w-5xl mx-4 md:mx-auto rounded-2xl bg-white/80 backdrop-blur-xl border border-[#1A1A2E]/8 shadow-[0_4px_32px_rgba(26,26,46,0.10)]'
            : 'max-w-6xl bg-[#F9F6F1]/70 backdrop-blur-sm border-b border-[#1A1A2E]/6'
        }`}>
          <div className="flex items-center justify-between h-13 py-2">

            {/* Logo */}
            <a href="#hero" onClick={e => nav(e,'#hero')} className="flex flex-col leading-none select-none">
              <span className="font-display text-[1.05rem] font-800 tracking-[-0.03em] text-[#1A1A2E]">
                {SITE_NAME}
              </span>
              <span className="font-body text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[#B8954A] hidden sm:block">
                {SITE_TAGLINE}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <NavLink href={href} label={label} active={active === href} onClick={e => nav(e, href)} />
                </li>
              ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block"><CTA /></div>
              <button className="md:hidden focus:outline-none" onClick={() => setOpen(o => !o)} aria-label="Menu">
                <Burger open={open} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div variants={drawer} initial="hidden" animate="visible" exit="exit"
              className="md:hidden overflow-hidden mx-4 mt-1 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#1A1A2E]/8 shadow-card-lg"
            >
              <ul className="flex flex-col px-5 py-3 gap-0.5">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li key={href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.055 }}
                  >
                    <a href={href} onClick={e => nav(e, href)}
                      className={`flex items-center gap-2.5 py-2.5 font-body text-[0.875rem] font-medium transition-colors ${active === href ? 'text-[#B8954A]' : 'text-[#1A1A2E]/60 hover:text-[#1A1A2E]'}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${active === href ? 'bg-[#B8954A]' : 'bg-[#1A1A2E]/15'}`} />
                      {label}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-2.5 pb-1"><CTA onClick={close} /></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close} className="fixed inset-0 z-40 md:hidden" />
        )}
      </AnimatePresence>
    </>
  )
}
