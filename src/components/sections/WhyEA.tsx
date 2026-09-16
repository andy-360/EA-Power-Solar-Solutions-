import { Shield, Eye, Cpu, ShieldCheck, LifeBuoy, Leaf } from 'lucide-react'
import { WHY_EA } from '@/data/content'

const ICONS = [Shield, Eye, Cpu, ShieldCheck, LifeBuoy, Leaf]

export default function WhyEA() {
  return (
    <section className="bg-navy-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-paper text-3xl sm:text-4xl">
          Why choose EA?
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 divide-y divide-navy-700 sm:divide-y-0 border-t border-navy-700 sm:border-t-0">
          {WHY_EA.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={card.title}
                className="py-6 sm:py-7 sm:px-6 sm:border-t sm:border-navy-700 lg:border-l lg:[&:nth-child(3n+1)]:border-l-0"
              >
                <Icon size={20} className="text-wire-light" strokeWidth={2} />
                <h3 className="mt-3 font-display font-semibold text-paper text-base">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm text-paper/55 leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
