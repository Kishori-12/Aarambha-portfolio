/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette
        ivory:   { DEFAULT: '#F9F6F1', soft: '#F2EDE5', deep: '#EAE2D6' },
        slate:   { DEFAULT: '#1A1A2E', mid: '#2E2E4A', muted: '#6B6B8A' },
        // Accent
        gold:    { DEFAULT: '#B8954A', light: '#D4AE6A', glow: '#E8C97D' },
        sage:    { DEFAULT: '#6B8F71', light: '#8EAF94', soft: '#C8DBC9' },
        // Neutrals
        ink:     '#1A1A2E',
        mist:    '#F0EBE3',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':    '0 2px 20px rgba(26,26,46,0.06)',
        'card-lg': '0 8px 40px rgba(26,26,46,0.10)',
        'gold':    '0 4px 24px rgba(184,149,74,0.30)',
        'gold-lg': '0 8px 36px rgba(184,149,74,0.45)',
      },
    },
  },
  plugins: [],
}
