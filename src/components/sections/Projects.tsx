import { MapPin } from 'lucide-react'
import { PROJECTS } from '@/data/content'
import { PHOTOS } from '@/data/media'

const PROJECT_PHOTOS: Record<string, { url: string; alt: string }> = {
  residential: PHOTOS.technicianInstallingPanel,
  'small-business': PHOTOS.electricalFusebox,
  'hybrid-system': PHOTOS.solarFieldInstallation,
}

export default function Projects() {
  return (
    <section id="projects" className="bg-paper py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl">Projects</h2>
          <p className="text-ink/55 text-sm max-w-sm">
            EA is an emerging company — these are concept case studies illustrating how a
            project is scoped, not a record of completed installations.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {PROJECTS.map((p) => {
            const photo = PROJECT_PHOTOS[p.id]
            return (
              <div key={p.id} className="rounded-lg border border-ink/10 overflow-hidden">
                <div className="h-32 bg-navy-800 relative">
                  <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy-950/25" />
                  <span className="absolute bottom-3 left-4 text-[11px] font-medium text-gold bg-navy-950/70 rounded px-2 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-ink text-base">{p.title}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/50">
                    <MapPin size={13} /> {p.location}
                  </p>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">{p.summary}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
