import { motion } from 'framer-motion'
import { team } from '../data/content' 
import Icon from './Icon'

export default function Team() {
  return (
    <section id="team" className="bg-[#5D2335] text-white">
      
      {/* Header */}
      <div className="container-page pt-16 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Meet the visionaries behind DNA
          </h2>

          <p className="mt-3 text-base text-white/80 sm:mt-4">
            Driven by experience, integrity and a passion for building, our
            founders lead every project with a long-term commitment to clients.
          </p>
        </motion.div>
      </div>

      {/* Team Cards Container */}
      <div className="container-page pt-0 pb-16 sm:pb-24 lg:pb-28">
        {/* Changed back to flex, centered, with a controlled gap and max-width so they don't drift too far apart */}
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8 lg:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              // Reduced max-width to 290px and padding to p-5 for a tighter, cleaner card
              className="group flex w-full max-w-[290px] flex-col items-center rounded-2xl bg-[#712A42] p-5 text-center transition-all hover:bg-[#80314C]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image Container - reduced bottom margin */}
              <div className="relative mb-4 w-full overflow-hidden rounded-xl aspect-[4/3]">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: member.objectPosition }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Role */}
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A75E]">
                {member.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-[22px] font-bold text-white">
                {member.name}
              </h3>

              {/* Bio */}
              <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-white/70">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-full border border-[#D6A75E] px-2.5 py-0.5 text-[10px] font-medium text-[#D6A75E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/70 transition-colors hover:text-[#D6A75E]"
              >
                Get in touch
                <Icon name="arrow" className="h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}