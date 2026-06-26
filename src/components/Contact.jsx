import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/content'
import Icon from './Icon'

const contactItems = [
  { icon: 'phone', label: 'Call us', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: 'mail', label: 'Email us', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Visit us', value: site.address, href: '#' },
]

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

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
    <section id="contact" className="bg-ink py-16 text-cream sm:py-24 lg:py-28">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            Get in touch
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Let&apos;s build your next investment
          </h2>
          <p className="mt-3 text-sm text-cream/75 sm:mt-4 sm:max-w-md sm:text-base">
            Looking to buy, sell or invest? Share your requirement and our team
            will reach out with the right opportunities for you.
          </p>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-white/5 p-4 transition hover:border-gold-500/60"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 sm:h-12 sm:w-12">
                  <Icon name={item.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-cream/60">
                    {item.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-cream sm:text-base">
                    {item.value}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-cream p-5 text-ink shadow-soft sm:rounded-3xl sm:p-7 lg:p-9"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className="font-serif text-lg font-semibold text-ink sm:text-xl">
            Request a callback
          </h3>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 rounded-xl bg-wine-100 px-4 py-3 text-sm font-medium text-wine-700"
            >
              <Icon name="check" className="h-5 w-5 flex-none" />
              Thank you! We&apos;ll get back to you shortly.
            </motion.p>
          )}

          <div className="mt-5 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name" value={form.name} onChange={update('name')} required />
              <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} required />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={update('email')} required />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink/70">
                Your requirement
              </span>
              <textarea
                rows="4"
                value={form.message}
                onChange={update('message')}
                required
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-wine-500 focus:ring-2 focus:ring-wine-200"
                placeholder="Tell us what you are looking for…"
              />
            </label>
            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send message
              <Icon name="arrow" className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.form>

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
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-wine-500 focus:ring-2 focus:ring-wine-200"
      />
    </label>
  )
}
