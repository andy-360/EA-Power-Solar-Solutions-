const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-ink text-paper">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About EA Power & Solar</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold">Our Mission</h3>
            <p className="text-paper/80 mb-6">
              To provide reliable, affordable, and sustainable energy solutions that empower homes and businesses across Kenya.
            </p>
            <p className="text-paper/80">
              We believe energy access drives development. By combining professional installation with ongoing support, we help our clients transition to cleaner, more resilient power systems.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold">Why Choose Us</h3>
            <ul className="space-y-3 text-paper/80">
              <li className="flex items-start">
                <span className="text-gold mr-3">✓</span>
                <span>Certified, experienced technicians</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✓</span>
                <span>Custom-designed systems tailored to your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✓</span>
                <span>Professional installation and commissioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✓</span>
                <span>Comprehensive warranty and ongoing support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
