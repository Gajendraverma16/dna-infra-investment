import { site, stats } from '../data/content'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt="Modern luxury real estate by DNA Infra & Investment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
      </div>

      {/* Content */}
      <div className="container-page relative flex min-h-screen flex-col justify-center gap-8 py-28 sm:gap-10 sm:py-32">

        {/* Text */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Real Estate &amp; Investment
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Building landmarks.
            <span className="block text-gold-400">Growing investments.</span>
          </h1>

          {/* Sub-text — shorter on mobile */}
          <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-base">
            Premium real estate projects, plots and farm houses — backed by
            trusted project funding and smart investment solutions.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream/60 hover:bg-cream/10"
            >
              Talk to an advisor
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-4 divide-x divide-cream/10 overflow-hidden rounded-xl border border-cream/10 bg-ink/40 backdrop-blur-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 py-4 text-center sm:px-5 sm:py-5">
              <p className="font-serif text-lg font-bold text-gold-400 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] leading-tight text-cream/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
