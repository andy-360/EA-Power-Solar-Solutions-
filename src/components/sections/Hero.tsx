import { PHOTOS } from '@/data/media'

export default function Hero() {
  return (
    <section id="home" className="bg-navy-900 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        <div>
          <h1 className="font-display font-semibold text-paper text-[2.6rem] sm:text-5xl lg:text-[3.4rem] leading-[1.06]">
            Reliable Power.
            <br />
            A Brighter Future.
          </h1>
          <p className="mt-6 max-w-prose text-paper/70 text-base sm:text-lg leading-relaxed">
            Smart solar and electrical solutions designed around the way you live, work and
            use energy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#planner"
              className="inline-flex items-center rounded-md bg-gold px-5 py-3 text-sm font-medium text-navy-950 hover:bg-gold-light transition-colors"
            >
              Get an Energy Assessment
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center rounded-md border border-paper/25 px-5 py-3 text-sm font-medium text-paper hover:bg-paper/5 transition-colors"
            >
              Explore Our Solutions
            </a>
          </div>

          <p className="mt-10 text-xs text-paper/45 tracking-wide">
            Solar • Electrical • Backup • Energy
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-navy-700 shadow-2xl">
          <img
            src={PHOTOS.heroSolarRooftop.url}
            alt={PHOTOS.heroSolarRooftop.alt}
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}
