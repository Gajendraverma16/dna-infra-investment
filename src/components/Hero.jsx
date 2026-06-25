import { site, stats } from '../data/content'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="Modern luxury real estate by DNA Infra & Investment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-wine-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="container-page relative flex min-h-screen flex-col justify-center pt-28 pb-16">
        <div className="max-w-3xl animate-fade-up">
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            Real Estate &amp; Investment Partners
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
            Building landmarks.
            <span className="block text-gold-400">Growing investments.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {site.name} delivers premium real estate projects, plots, hi-rise
            buildings and farm houses — backed by trusted project funding and
            smart investment solutions for every client.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-ink"
            >
              Talk to an advisor
            </a>
          </div>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 backdrop-blur-sm sm:grid-cols-4 animate-fade-up">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink/30 px-5 py-5 text-center">
              <p className="font-serif text-2xl font-bold text-gold-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
