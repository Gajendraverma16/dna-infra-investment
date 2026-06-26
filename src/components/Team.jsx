import { motion } from 'framer-motion'
import { team } from '../data/content'
import Icon from './Icon'

const highlights = [
  ['Property Development', 'Project Finance', 'Investment Planning'],
  ['Strategic Planning', 'Business Development', 'Client Leadership'],
]

export default function Team() {
  return (
    <section id="team" className="bg-wine-900 text-cream">

      {/* Header */}
      <div className="container-page py-16 pb-0 sm:py-24 sm:pb-0 lg:py-28 lg:pb-0">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            Our team
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Meet the visionaries behind DNA
          </h2>
          <p className="mt-3 text-sm text-cream/70 sm:mt-4 sm:text-base">
            Driven by experience, integrity and a passion for building, our
            founders lead every project with a long-term commitment to clients.
          </p>
        </motion.div>
      </div>

      {/* Split sections — one per founder */}
      {team.map((member, i) => {
        const imageLeft = i % 2 === 0
        return (
          <div key={member.name} className="mt-16 sm:mt-20 lg:mt-24">
            <div className={`flex flex-col lg:flex-row ${imageLeft ? '' : 'lg:flex-row-reverse'}`}>

              {/* Photo side */}
              <motion.div
                className="relative w-full lg:w-1/2"
                initial={{ opacity: 0, x: imageLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[640px]">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  {/* Overlay gradient toward text side */}
                  <div
                    className={`absolute inset-0 ${
                      imageLeft
                        ? 'bg-gradient-to-r from-transparent via-transparent to-wine-900/60'
                        : 'bg-gradient-to-l from-transparent via-transparent to-wine-900/60'
                    } hidden lg:block`}
                  />
                  {/* Bottom gradient on mobile */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-wine-900 to-transparent lg:hidden" />
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div
                className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:w-1/2 lg:px-16 lg:py-20"
                initial={{ opacity: 0, x: imageLeft ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Role */}
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">
                  {member.role}
                </p>

                {/* Name */}
                <h3 className="mt-2 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
                  {member.name}
                </h3>

                {/* Divider */}
                <span className="mt-5 block h-px w-12 bg-gold-400/60" />

                {/* Bio */}
                <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
                  {member.bio}
                </p>

                {/* Tag pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {highlights[i].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gold-400/30 px-3 py-1 text-xs font-medium text-gold-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-max items-center gap-2 text-sm font-semibold text-cream/60 transition hover:text-gold-400"
                >
                  Get in touch
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </motion.div>

            </div>

            {/* Divider between members */}
            {i < team.length - 1 && (
              <div className="container-page">
                <div className="h-px bg-cream/8" />
              </div>
            )}
          </div>
        )
      })}

      {/* Bottom padding */}
      <div className="pb-16 sm:pb-24 lg:pb-28" />
    </section>
  )
}
