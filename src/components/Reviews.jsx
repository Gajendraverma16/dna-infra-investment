import { motion } from 'framer-motion'
import { reviews } from '../data/content'
import Icon from './Icon'

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-wine-700" />
            Client reviews
            <span className="h-px w-8 bg-wine-700" />
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Trusted by investors &amp; families
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 shadow-soft sm:p-7"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Icon key={idx} name="star" className="h-4 w-4 sm:h-5 sm:w-5" filled />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/80 sm:mt-4 sm:text-base">
                "{review.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4 sm:mt-6 sm:pt-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-wine-100 font-serif text-base font-bold text-wine-700 sm:h-11 sm:w-11 sm:text-lg">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {review.name}
                  </span>
                  <span className="block text-xs text-ink/60 sm:text-sm">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
