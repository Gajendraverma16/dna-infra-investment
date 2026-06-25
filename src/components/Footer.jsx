import { navLinks, services, site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-page grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-4">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-wine-700 font-serif text-lg font-bold text-gold-500">
              DNA
            </span>
            <span className="font-serif text-base font-semibold leading-tight text-cream">
              DNA Infra &amp; Investment
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Real estate development, plots, hi-rise buildings, farm houses and
            trusted investment &amp; project funding solutions.
          </p>
        </div>

        {/* Quick Links */}
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

        {/* Services */}
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

        {/* Contact */}
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
                className="break-all transition hover:text-gold-400"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-cream/50 sm:flex-row sm:gap-3 sm:py-6 sm:text-left">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Developed by{' '}
            <span className="text-gold-400">DNA Infra &amp; Investment</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
