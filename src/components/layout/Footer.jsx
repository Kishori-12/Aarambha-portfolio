export default function Footer() {
  return (
    <footer className="relative border-t border-[#C8A96A]/15"
      style={{ background: 'linear-gradient(160deg, #F3EDE3 0%, #FAF7F2 100%)' }}
    >
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px
        bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-display font-bold text-[1.05rem] tracking-tight
            bg-gradient-to-r from-[#B8954A] to-[#D4AE6A] bg-clip-text text-transparent">
            Aarambha
          </span>
          <span className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#8A9A8C] mt-0.5">
            Build · Innovate · Deploy
          </span>
        </div>

        <p className="font-body text-[0.75rem] text-[#1A1A2E]/35">
          © {new Date().getFullYear()} Aarambha. All rights reserved.
        </p>

        <a href="mailto:team.aarambh3@gmail.com"
          className="font-body text-[0.75rem] text-[#B8954A] hover:text-[#D4AE6A]
            transition-colors duration-200 underline underline-offset-2 decoration-[#C8A96A]/30">
          team.aarambh3@gmail.com
        </a>
      </div>
    </footer>
  )
}
