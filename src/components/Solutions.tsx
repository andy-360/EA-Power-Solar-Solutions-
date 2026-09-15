import { Sun, Zap, Battery } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: Sun,
      title: 'Solar Installation',
      description: 'Custom-designed solar photovoltaic systems for residential and commercial properties.',
    },
    {
      icon: Battery,
      title: 'Battery Storage',
      description: 'High-capacity lithium and lead-acid battery backup systems for uninterrupted power.',
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Professional electrical installation, maintenance, and upgrades for safety and efficiency.',
    },
  ]

  return (
    <section id="solutions" className="py-20 px-4 bg-paper">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-ink">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const IconComponent = solution.icon
            return (
              <div key={idx} className="bg-ink/5 p-8 rounded-lg hover:shadow-lg transition">
                <IconComponent className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-bold mb-4 text-ink">{solution.title}</h3>
                <p className="text-ink/70">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
