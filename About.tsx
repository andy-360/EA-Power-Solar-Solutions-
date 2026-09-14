import { User } from 'lucide-react'

const ROLES = ['Founder / Director', 'Founder / Technical Lead']

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl">
            Building better energy solutions for Kenya
          </h2>
          <p className="mt-5 text-ink/65 leading-relaxed max-w-prose">
            EA Power &amp; Solar Solutions is an emerging Kenyan company founded with the goal
            of making dependable electrical and renewable-energy solutions more accessible —
            to homes, businesses, farms and institutions across the country.
          </p>
          <p className="mt-4 text-ink/65 leading-relaxed max-w-prose">
            Rather than selling standard equipment packages, we work from a customer&apos;s
            actual energy use, site conditions and goals, then design, install and support a
            system built around that.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          {ROLES.map((role) => (
            <div
              key={role}
              className="flex-1 rounded-lg border border-ink/10 p-5 flex items-center gap-4"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-navy-900/[0.06] text-navy-800 shrink-0">
                <User size={20} />
              </span>
              <div>
                <p className="font-display font-semibold text-ink text-sm">{role}</p>
                <p className="text-xs text-ink/45 mt-0.5">Profile details to follow</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
