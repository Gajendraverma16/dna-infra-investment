import { projects } from '../data/content'
import Icon from './Icon'

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        {/* Section header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-wine-700" />
              Our portfolio
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Projects
            </h2>
            <p className="mt-3 text-sm text-ink/70 sm:mt-4 sm:text-base">
              A showcase of the spaces we have developed and delivered across
              residential, commercial, hospitality and farm segments.
            </p>
          </div>
          <a href="#contact" className="btn-outline w-full flex-none sm:w-auto">
            Start your project
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl shadow-soft"
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
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <span className="inline-block rounded-full bg-gold-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-cream sm:mt-3 sm:text-xl">
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
