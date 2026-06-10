// Fade up — primary scroll reveal
export const fadeInUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
}

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

// Stagger item (alias of fadeInUp for named-variant usage)
export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
}

// Slide from left
export const slideInLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Slide from right
export const slideInRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Hover lift — for cards
export const hoverLift = {
  rest:  { y: 0,  scale: 1,     boxShadow: '0 4px 24px 0 rgba(200,169,106,0.08)' },
  hover: { y: -6, scale: 1.025, boxShadow: '0 16px 48px 0 rgba(200,169,106,0.20)' },
}
