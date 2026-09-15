const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Consultation', description: 'We assess your energy needs and discuss solutions.' },
    { number: 2, title: 'Design', description: 'Custom system design tailored to your requirements.' },
    { number: 3, title: 'Installation', description: 'Professional installation by certified technicians.' },
    { number: 4, title: 'Support', description: 'Ongoing maintenance and technical support.' },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-gold text-ink rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-paper/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
