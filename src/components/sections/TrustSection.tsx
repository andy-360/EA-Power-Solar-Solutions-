import { Check } from 'lucide-react'
import { STANDARDS } from '@/data/content'

export default function TrustSection() {
  return (
    <section id="trust" className="bg-navy-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-paper text-3xl sm:text-4xl">
          Built on professional standards
        </h2>

        <ul className="mt-10 grid sm:grid-cols-2 gap-3.5 max-w-2xl">
          {STANDARDS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-paper/75 text-sm">
              <Check size={16} className="text-leaf mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-prose text-sm text-paper/45 leading-relaxed border-l-2 border-navy-700 pl-4">
          EA Power &amp; Solar Solutions will maintain all applicable licenses, certifications
          and regulatory requirements as the business operates and expands.
        </p>
      </div>
    </section>
  )
}
