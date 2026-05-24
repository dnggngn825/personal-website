import { certifications } from '../../data/certifications'
import { AnimatedSection }  from '../ui/AnimatedSection'

export function Certifications() {
  return (
    <section id="certifications" className="py-32 max-w-70xl mx-auto px-6">
      <AnimatedSection>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-gradient font-mono text-sm">05.</span>
          <h2 className="text-on-surface text-3xl font-bold tracking-tight">Licenses &amp; Certifications</h2>
          <div className="h-px section-divider flex-grow" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.name} delay={i * 100}>
            <div className="bg-surface-low p-6 rounded-xl flex gap-4 items-start h-full">
              <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
              <div className="space-y-1">
                <p className="text-on-surface font-semibold leading-snug">{cert.name}</p>
                <p className="text-secondary text-sm">{cert.issuer}</p>
                <p className="text-secondary text-xs font-mono">{cert.date}{cert.expires ? ` · Expires ${cert.expires}` : ''}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
