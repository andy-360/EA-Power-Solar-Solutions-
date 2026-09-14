import { useState } from 'react'
import { Sun, BatteryCharging, Workflow, Plug, Droplets, Wrench, ChevronDown } from 'lucide-react'
import { SOLUTIONS } from '../data/content'
import CircuitDivider from './graphics/CircuitDivider'

const ICONS: Record<string, typeof Sun> = {
  'solar-pv': Sun,
  battery: BatteryCharging,
  hybrid: Workflow,
  electrical: Plug,
  'water-heating': Droplets,
  maintenance: Wrench,
}

export default function Solutions() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="solutions" className="bg-navy-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-semibold text-paper text-3xl sm:text-4xl">
            Our solutions
          </h2>
          <p className="text-paper/55 text-sm max-w-xs">
            Six service areas, one integrated approach to power reliability.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => {
            const Icon = ICONS[s.id]
            const isOpen = expanded === s.id
            return (
              <div
                key={s.id}
                className="rounded-lg border border-navy-700 bg-navy-800/60 p-6 flex flex-col"
              >
                <span className="grid place-items-center w-10 h-10 rounded-md bg-wire/15 text-wire-light">
                  <Icon size={19} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display font-semibold text-paper text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed">{s.description}</p>

                {isOpen && (
                  <p className="mt-3 text-sm text-paper/50 leading-relaxed border-t border-navy-700 pt-3">
                    {s.detail}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light transition-colors self-start"
                >
                  {isOpen ? 'Show less' : 'Learn more'}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-16">
        <CircuitDivider />
      </div>
    </section>
  )
}
