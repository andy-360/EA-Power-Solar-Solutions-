import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', projectType: 'residential', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-paper">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-ink">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-semibold text-ink mb-2">Phone</p>
            <p className="text-ink/70">+254 XXX XXX XXX</p>
          </div>
          <div className="text-center">
            <Mail className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-semibold text-ink mb-2">Email</p>
            <p className="text-ink/70">info@eapowersolar.co.ke</p>
          </div>
          <div className="text-center">
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-semibold text-ink mb-2">Location</p>
            <p className="text-ink/70">Nairobi, Kenya</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-ink/5 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-gold"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-gold"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="institutional">Institutional</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-gold mb-4"
          />
          <button type="submit" className="w-full btn-primary bg-gold text-ink px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
