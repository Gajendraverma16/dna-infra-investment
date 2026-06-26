import { motion } from 'framer-motion'
import { services } from '../data/content'
import Icon from './Icon'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="services" className="bg-ink py-16 text-cream sm:py-24 lg:py-28">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            What we do
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Complete real estate &amp; investment services
          </h2>
          <p className="mt-3 text-sm text-cream/70 sm:mt-4 sm:text-base">
            One partner for every property and investment need — from your first
            plot to large-scale developments.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-2xl border border-cream/10 bg-white/5 p-5 transition duration-300 hover:border-gold-500/60 hover:bg-white/10 sm:p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-ink sm:h-12 sm:w-12">
                <Icon name={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-4 font-serif text-base font-semibold text-cream sm:mt-5 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
