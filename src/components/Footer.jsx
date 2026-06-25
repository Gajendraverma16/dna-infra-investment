import { navLinks, services, site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-700 font-serif text-lg font-bold text-gold-500">
              DNA
            </span>
            <span className="font-serif text-base font-semibold text-cream">
              DNA Infra &amp; Investment
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Real estate development, plots, hi-rise buildings, farm houses and
            trusted investment &amp; project funding solutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/60 transition hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.title} className="text-cream/60">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>{site.address}</li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="transition hover:text-gold-400"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-gold-400"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Developed by{' '}
            <span className="text-gold-400">DNA Infra &amp; Investment</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
