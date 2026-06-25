import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/content'
import Icon from './Icon'

function Logo({ dark = false }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl font-serif text-lg font-bold ${
          dark ? 'bg-olive-700 text-gold-500' : 'bg-cream text-olive-700'
        }`}
      >
        DNA
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-base font-semibold ${
            dark ? 'text-ink' : 'text-cream'
          }`}
        >
          DNA Infra
        </span>
        <span
          className={`block text-[11px] uppercase tracking-[0.28em] ${
            dark ? 'text-wine-700' : 'text-gold-400'
          }`}
        >
          & Investment
        </span>
      </span>
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/95 shadow-soft backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Logo dark={scrolled || open} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2.5">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden ${
            scrolled || open
              ? 'border-ink/15 text-ink'
              : 'border-cream/40 text-cream'
          }`}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-cream transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink transition hover:bg-olive-50 hover:text-olive-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Get in touch
          </a>
          <p className="px-3 pt-3 text-sm text-ink/60">{site.phone}</p>
        </nav>
      </div>
    </header>
  )
}
