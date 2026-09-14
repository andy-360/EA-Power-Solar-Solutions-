import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-sm shadow-panel' : 'bg-navy-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center w-8 h-8 rounded-md bg-gold/10 text-gold">
            <Zap size={18} strokeWidth={2.25} />
          </span>
          <span className="font-display font-semibold text-paper text-[15px] leading-tight">
            EA Power<span className="text-gold">.</span>
            <span className="block text-[10px] font-body font-normal tracking-normal text-paper/50 -mt-0.5">
              Solar &amp; Electrical Solutions
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper/75 hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#quote"
            className="inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-navy-950 hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-paper p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy-700 bg-navy-900">
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 text-paper/85 text-sm border-b border-navy-800 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={handleLinkClick}
              className="mt-3 mb-2 inline-flex justify-center items-center rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-navy-950"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
