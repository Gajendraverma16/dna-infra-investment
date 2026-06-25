import Icon from './Icon'

const highlights = [
  'Transparent deals & clear documentation',
  'Prime, high-growth locations',
  'Trusted project funding & investment support',
  'End-to-end service from land to handover',
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=80"
              alt="DNA Infra & Investment developments"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-wine-700 px-7 py-6 text-cream shadow-soft sm:block">
            <p className="font-serif text-3xl font-bold text-gold-400">12+</p>
            <p className="text-xs uppercase tracking-wider text-cream/80">
              Years of trust
            </p>
          </div>
          <div className="absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-2xl bg-olive-100" />
        </div>

        <div>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-wine-700" />
            About DNA Infra
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            A trusted name in real estate &amp; investment.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            DNA Infra &amp; Investment, founded by{' '}
            <span className="font-semibold text-olive-700">
              Mr. Dharmendra Lodhi
            </span>{' '}
            and{' '}
            <span className="font-semibold text-olive-700">
              Mr. Vijay Malviya
            </span>
            , is a full-service real estate and investment company. From
            residential plots and hi-rise buildings to commercial spaces,
            agriculture land and farm houses — we craft properties that build
            lasting wealth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Beyond development, we provide project funding, bulk purchasing and
            structured investment solutions, helping clients and partners grow
            with confidence.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-olive-100 text-olive-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm text-ink/80">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#services" className="btn-outline mt-8">
            Explore our services
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
