import { Home, Building2, Landmark } from 'lucide-react'

const SEGMENTS = [
  {
    icon: Home,
    accentClass: 'border-gold text-gold',
    title: 'Residential',
    description: 'Reliable energy solutions for homes, backup power and everyday electricity needs.',
  },
  {
    icon: Building2,
    accentClass: 'border-wire text-wire',
    title: 'Commercial',
    description: 'Energy solutions designed to improve reliability and reduce avoidable energy costs for businesses.',
  },
  {
    icon: Landmark,
    accentClass: 'border-leaf text-leaf',
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
          {SEGMENTS.map(({ icon: Icon, accentClass, title, description }) => (
            <div key={title} className={`pt-5 border-t-2 ${accentClass.split(' ')[0]}`}>
              <Icon size={22} className={accentClass.split(' ')[1]} strokeWidth={2} />
              <h3 className="mt-4 font-display font-semibold text-ink text-lg">{title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
