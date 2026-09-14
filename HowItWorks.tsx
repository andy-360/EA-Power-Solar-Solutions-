import { useEffect, useRef, useState } from 'react'
import { PROCESS_STEPS } from '../data/content'

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl">How it works</h2>

        <div ref={ref} className="mt-14 grid sm:grid-cols-5 gap-8 sm:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.index}
              className="relative pl-5 sm:pl-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${
                  i * 0.1
                }s`,
              }}
            >
              <span className="absolute left-0 top-0.5 sm:hidden w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-mono text-sm text-wire tabular">{step.index}</span>
              <h3 className="mt-2 font-display font-semibold text-ink text-lg">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{step.description}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden sm:block mt-5 h-px bg-ink/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
