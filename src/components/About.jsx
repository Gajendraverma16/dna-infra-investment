import Icon from './Icon'

const highlights = [
  'Transparent deals & clear documentation',
  'Prime, high-growth locations',
  'Trusted project funding & investment support',
  'End-to-end service from land to handover',
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Image block */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-2xl shadow-soft sm:rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=80"
              alt="DNA Infra & Investment developments"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[520px]"
            />
          </div>
          {/* Years badge — hidden on xs, shown from sm */}
          <div className="absolute -bottom-5 right-3 rounded-xl bg-wine-700 px-5 py-4 text-cream shadow-soft sm:-bottom-6 sm:-right-2 sm:rounded-2xl sm:px-7 sm:py-6">
            <p className="font-serif text-2xl font-bold text-gold-400 sm:text-3xl">12+</p>
            <p className="text-[11px] uppercase tracking-wider text-cream/80 sm:text-xs">
              Years of trust
            </p>
          </div>
          <div className="absolute -left-3 -top-3 -z-10 h-20 w-20 rounded-xl bg-wine-100 sm:-left-4 sm:-top-4 sm:h-28 sm:w-28 sm:rounded-2xl" />
        </div>

        {/* Text block */}
        <div className="mt-8 lg:mt-0">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-wine-700" />
            About DNA Infra
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
            A trusted name in real estate &amp; investment.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:mt-5 sm:text-base">
            DNA Infra &amp; Investment, founded by{' '}
            <span className="font-semibold text-wine-700">Mr. Dharmendra Lodhi</span>{' '}
            and{' '}
            <span className="font-semibold text-wine-700">Mr. Vijay Malviya</span>
            , is a full-service real estate and investment company. From
            residential plots and hi-rise buildings to commercial spaces,
            agriculture land and farm houses — we craft properties that build
            lasting wealth.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base">
            Beyond development, we provide project funding, bulk purchasing and
            structured investment solutions, helping clients and partners grow
            with confidence.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-wine-100 text-wine-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm text-ink/80">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#services" className="btn-outline mt-7 w-full sm:mt-8 sm:w-auto">
            Explore our services
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
