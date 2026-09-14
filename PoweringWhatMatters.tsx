import { Home, Building2, Landmark } from 'lucide-react'

const SEGMENTS = [
  {
    icon: Home,
    accent: '#E8A73B',
    title: 'Residential',
    description: 'Reliable energy solutions for homes, backup power and everyday electricity needs.',
  },
  {
    icon: Building2,
    accent: '#2E6F9E',
    title: 'Commercial',
    description: 'Energy solutions designed to improve reliability and reduce avoidable energy costs for businesses.',
  },
  {
    icon: Landmark,
    accent: '#4F9D69',
    title: 'Institutional',
    description: 'Scalable solutions for schools, offices, farms and other institutions.',
  },
]

export default function PoweringWhatMatters() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-prose">
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl">
            Powering what matters
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            We design energy solutions around a customer&apos;s actual energy needs rather than
            simply selling equipment. That starts with understanding who the system serves.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 sm:gap-6">
          {SEGMENTS.map(({ icon: Icon, accent, title, description }) => (
            <div key={title} className="pt-5" style={{ borderTop: `2px solid ${accent}` }}>
              <Icon size={22} style={{ color: accent }} strokeWidth={2} />
              <h3 className="mt-4 font-display font-semibold text-ink text-lg">{title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
