const Projects = () => {
  const projects = [
    {
      title: 'Residential Solar System',
      location: 'Nairobi',
      capacity: '5kW',
      description: 'Complete solar + battery system for residential property.',
    },
    {
      title: 'Commercial Installation',
      location: 'Mombasa',
      capacity: '15kW',
      description: 'Large-scale commercial solar setup for business operations.',
    },
    {
      title: 'Institutional Project',
      location: 'Kisumu',
      capacity: '20kW',
      description: 'Educational institution solar and electrical infrastructure.',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-paper">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-ink">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-ink/10 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-ink">{project.title}</h3>
              <p className="text-sm text-ink/60 mb-4">{project.location} • {project.capacity}</p>
              <p className="text-ink/70">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
