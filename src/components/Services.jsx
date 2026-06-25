import { services } from '../data/content'
import Icon from './Icon'

export default function Services() {
  return (
    <section id="services" className="bg-olive-900 py-20 text-cream sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            What we do
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Complete real estate &amp; investment services
          </h2>
          <p className="mt-4 text-cream/70">
            One partner for every property and investment need — from your first
            plot to large-scale developments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-cream/10 bg-olive-800/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:bg-olive-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-olive-900">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-cream">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
