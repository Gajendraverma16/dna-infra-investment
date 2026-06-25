import { projects } from '../data/content'
import Icon from './Icon'

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-wine-700" />
              Our portfolio
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 text-ink/70">
              A showcase of the spaces we have developed and delivered across
              residential, commercial, hospitality and farm segments.
            </p>
          </div>
          <a href="#contact" className="btn-outline">
            Start your project
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                index % 3 === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-300 group-hover:translate-y-0">
                <span className="inline-block rounded-full bg-gold-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-olive-900">
                  {project.category}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-cream">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
