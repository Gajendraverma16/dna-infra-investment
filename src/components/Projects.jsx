import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content'
import Icon from './Icon'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: 'easeOut' },
  }),
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-soft"
    >
      {/* Image with zoom on hover */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Base dark gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

      {/* Hover overlay — extra darkening */}
      <motion.div
        className="absolute inset-0 bg-ink/30"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        {/* Category pill */}
        <motion.span
          className="inline-block rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {project.category}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="mt-2 font-serif text-lg font-semibold text-cream sm:mt-3 sm:text-xl"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.35, delay: 0.03, ease: 'easeOut' }}
        >
          {project.title}
        </motion.h3>

        {/* "View project" — slides up only on hover */}
        <motion.div
          className="mt-2 flex items-center gap-1.5 text-sm font-medium text-gold-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          View project
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>

      {/* Gold border flash on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-gold-400"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="container-page">

        {/* Section header */}
        <motion.div
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-wine-700" />
              Our portfolio
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Projects
            </h2>
            <p className="mt-3 text-sm text-ink/70 sm:mt-4 sm:text-base">
              A showcase of the spaces we have developed and delivered across
              residential, commercial, hospitality and farm segments.
            </p>
          </div>
          <a href="#contact" className="btn-outline w-full flex-none sm:w-auto">
            Start your project
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
