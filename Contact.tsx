import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display font-semibold text-paper text-3xl sm:text-4xl">
            EA Power &amp; Solar Solutions
          </h2>
          <p className="mt-2 text-paper/55">Reliable Power, Brighter Future.</p>

          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 rounded-md border border-leaf/40 text-leaf px-4 py-2.5 text-sm font-medium hover:bg-leaf/5 transition-colors"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
            <span className="text-leaf/50 text-xs">(placeholder)</span>
          </button>
        </div>

        <dl className="space-y-5">
          <div className="flex items-start gap-3">
            <Phone size={18} className="text-wire-light mt-0.5" />
            <div>
              <dt className="text-xs text-paper/45">Phone</dt>
              <dd className="text-paper/85 text-sm mt-0.5">+254 XXX XXX XXX</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-wire-light mt-0.5" />
            <div>
              <dt className="text-xs text-paper/45">Email</dt>
              <dd className="text-paper/85 text-sm mt-0.5">info@eapowersolar.co.ke</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-wire-light mt-0.5" />
            <div>
              <dt className="text-xs text-paper/45">Location</dt>
              <dd className="text-paper/85 text-sm mt-0.5">Kenya</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  )
}
