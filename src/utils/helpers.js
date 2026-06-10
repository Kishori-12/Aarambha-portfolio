export const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

export const clsx = (...classes) => classes.filter(Boolean).join(' ')
