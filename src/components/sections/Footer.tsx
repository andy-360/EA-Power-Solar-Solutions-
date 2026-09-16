import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { NAV_LINKS } from '@/data/content'

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        <div>
          <p className="font-display font-semibold text-paper">EA Power &amp; Solar Solutions</p>
          <p className="text-paper/45 text-sm mt-1">Reliable Power, Brighter Future.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {NAV_LINKS.filter((l) => l.label !== 'Resources').map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-paper/55 hover:text-paper">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid place-items-center w-9 h-9 rounded-md border border-navy-700 text-paper/50 hover:text-paper hover:border-navy-600 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-10 pt-6 border-t border-navy-800">
        <p className="text-xs text-paper/35">
          © 2026 EA Power &amp; Solar Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
