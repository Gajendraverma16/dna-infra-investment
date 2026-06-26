import { motion } from 'framer-motion'
import Icon from './Icon'

const highlights = [
  'Transparent deals & clear documentation',
  'Prime, high-growth locations across M.P.',
  'Trusted project funding & investment support',
  'End-to-end service from land to handover',
  'Verified agriculture & farm land parcels',
  'GST, taxation & startup consultancy support',
]

const milestones = [
  { year: '2010', title: 'Started Our Journey', desc: 'Began with residential plots and land advisory in Indore.' },
  { year: '2015', title: 'Expanded Services', desc: 'Added hi-rise projects, farm houses and investment funding.' },
  { year: '2020', title: 'DNA Cafe & More', desc: 'Launched hospitality ventures and commercial developments.' },
  { year: 'Today', title: 'Trusted Growth Partner', desc: '2500+ happy clients. Complete real estate solutions under one roof.' },
]

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container-page">

        {/* ── Top grid: image + text ── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-soft sm:rounded-3xl">
              <motion.img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=80"
                alt="DNA Infra & Investment Indore"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[540px]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            {/* Badge */}
            <motion.div
              className="absolute -bottom-5 right-3 rounded-xl bg-wine-700 px-5 py-4 text-cream shadow-soft sm:-bottom-6 sm:-right-3 sm:rounded-2xl sm:px-7 sm:py-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-serif text-2xl font-bold text-gold-400 sm:text-3xl">12+</p>
              <p className="text-[11px] uppercase tracking-wider text-cream/80 sm:text-xs">Years of trust</p>
            </motion.div>

            {/* Decorative block */}
            <div className="absolute -left-3 -top-3 -z-10 h-20 w-20 rounded-xl bg-wine-100 sm:-left-4 sm:-top-4 sm:h-28 sm:w-28 sm:rounded-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="mt-8 lg:mt-0"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-wine-700" />
              About DNA Infra
            </span>

            <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
              More than real estate —<br className="hidden sm:block" />
              <span className="text-wine-700"> we are your growth partner.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:mt-5 sm:text-base">
              DNA Infra &amp; Investment is a full-service real estate and investment company
              headquartered in <span className="font-semibold text-wine-700">Indore, Madhya Pradesh</span>.
              Founded by <span className="font-semibold text-wine-700">Dhamendra Holkar</span> and{' '}
              <span className="font-semibold text-wine-700">Vijay Malviya</span>, we operate across
              residential, commercial, agricultural and hospitality segments — helping clients build
              lasting wealth through trusted, transparent property solutions.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base">
              Beyond development, we provide project funding, bulk purchasing, taxation support and
              startup consultancy — making us a single window for every real estate and investment need.
            </p>

            {/* Highlights */}
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2.5"
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-wine-100 text-wine-700">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-ink/75">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#services"
              className="btn-outline mt-7 w-full sm:mt-8 sm:w-auto"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Explore our services
              <Icon name="arrow" className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Journey timeline ── */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center sm:mb-10">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-8 bg-wine-700" />
              Our journey
              <span className="h-px w-8 bg-wine-700" />
            </span>
            <h3 className="mt-3 font-serif text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
              Built on trust, grown through results
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
              >
                {/* Year pill */}
                <span className="inline-block rounded-full bg-wine-700 px-3 py-1 text-xs font-bold text-gold-400 tracking-wider">
                  {m.year}
                </span>
                <h4 className="mt-3 font-serif text-base font-semibold text-ink sm:text-lg">
                  {m.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{m.desc}</p>

                {/* connector line on lg */}
                {i < milestones.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-ink/15 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
