import { useState } from 'react'
import { site } from '../data/content'
import Icon from './Icon'

const contactItems = [
  { icon: 'phone', label: 'Call us', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: 'mail', label: 'Email us', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Visit us', value: site.address, href: '#' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="bg-olive-900 py-20 text-cream sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            Get in touch
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Let&apos;s build your next investment
          </h2>
          <p className="mt-4 max-w-md text-cream/75">
            Looking to buy, sell or invest? Share your requirement and our team
            will reach out with the right opportunities for you.
          </p>

          <div className="mt-10 space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-olive-800/50 p-4 transition hover:border-gold-500/60"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-cream/60">
                    {item.label}
                  </span>
                  <span className="block font-medium text-cream">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-cream p-7 text-ink shadow-soft sm:p-9"
        >
          <h3 className="font-serif text-xl font-semibold text-ink">
            Request a callback
          </h3>

          {sent && (
            <p className="mt-4 flex items-center gap-2 rounded-xl bg-olive-100 px-4 py-3 text-sm font-medium text-olive-700">
              <Icon name="check" className="h-5 w-5" />
              Thank you! We&apos;ll get back to you shortly.
            </p>
          )}

          <div className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                value={form.name}
                onChange={update('name')}
                required
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                required
              />
            </div>
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={update('email')}
              required
            />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink/70">
                Your requirement
              </span>
              <textarea
                rows="4"
                value={form.message}
                onChange={update('message')}
                required
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-200"
                placeholder="Tell us what you are looking for…"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              Send message
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink/70">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500 focus:ring-2 focus:ring-olive-200"
      />
    </label>
  )
}
