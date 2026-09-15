const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-ink to-ink/90 text-paper py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold">
          EA Power & Solar Solutions
        </h1>
        <p className="text-xl md:text-2xl text-paper/80 mb-8">
          Reliable Power, Brighter Future
        </p>
        <p className="text-lg text-paper/70 mb-12 max-w-2xl mx-auto">
          Designs, installs and maintains solar, battery backup and electrical systems for homes, businesses and institutions in Kenya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary bg-gold text-ink px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
            Get a Quote
          </a>
          <a href="#how-it-works" className="btn-secondary border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-ink transition inline-block">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
