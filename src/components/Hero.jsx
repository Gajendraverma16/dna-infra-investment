import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stats } from '../data/content'
import Icon from './Icon'

const slides = [
   {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    eyebrow: 'Luxury Villas',
    headline: 'Spaces crafted',
    highlight: 'For the finest.',
    sub: 'Exclusive villas designed with architectural brilliance — where premium finishes, privacy and elegance converge.',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80',
  //   eyebrow: 'Real Estate & Investment',
  //   headline: 'Building landmarks.',
  //   highlight: 'Growing investments.',
  //   sub: 'Premium real estate projects, plots and farm houses — backed by trusted project funding and smart investment solutions.',
  // },
  {
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80',
    eyebrow: 'Farms & Farm Houses',
    headline: 'Nature meets',
    highlight: 'Modern living.',
    sub: 'Premium farm houses and weekend retreats blending the tranquility of nature with every modern comfort you deserve.',
  },
 
  {
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
    eyebrow: 'DNA Cafe & Hospitality',
    headline: 'A place to',
    highlight: 'Connect & unwind.',
    sub: 'Our DNA Cafe and hospitality ventures create vibrant community destinations blending lifestyle, leisure and modern comfort.',
  },
    {
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80',
    eyebrow: 'Residential Hi-Rise',
    headline: 'Luxury living,',
    highlight: 'Crafted for you.',
    sub: 'From aspirational apartments to premium hi-rise towers — spaces designed for comfort and long-term value.',
  },
]

const INTERVAL = 5500

export default function Hero() {
  const [[current, direction], setSlide] = useState([0, 0])

  const next = () =>
    setSlide(([cur]) => [(cur + 1) % slides.length, 1])

  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* ── Background — crossfade + Ken Burns ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Slow zoom on the image while slide is active */}
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: INTERVAL / 1000 + 1.5, ease: 'linear' }}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/88" />
        </motion.div>
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="container-page relative z-10 flex min-h-screen flex-col justify-center gap-6 py-24 sm:gap-8 sm:py-32">

        {/* Text — fades in fresh every slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-gold-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400 sm:text-[11px] sm:tracking-[0.2em]">
                {slide.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              className="mt-2.5 font-serif text-3xl font-bold leading-[1.1] text-cream sm:mt-3 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease: 'easeOut' }}
            >
              {slide.headline}
              <span className="block text-gold-400">{slide.highlight}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="mt-3 text-sm leading-relaxed text-cream/75 sm:mt-4 sm:max-w-lg sm:text-base"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6, ease: 'easeOut' }}
            >
              {slide.sub}
            </motion.p>

            {/* CTAs — always side by side, both fit on one row */}
            <motion.div
              className="mt-5 flex items-center gap-3 sm:mt-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55, ease: 'easeOut' }}
            >
              <a href="#projects" className="btn-primary shrink-0 py-2.5 px-5 text-sm sm:px-6 sm:py-3 sm:text-sm">
                View Projects
                <Icon name="arrow" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2.5 text-sm font-semibold text-cream transition hover:border-cream/60 hover:bg-cream/10 sm:px-6 sm:py-3"
              >
                Talk to an advisor
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Stats strip — single row on mobile, smaller text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-4 divide-x divide-cream/10 overflow-hidden rounded-xl border border-cream/10 bg-ink/50 backdrop-blur-sm"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-3 text-center sm:px-5 sm:py-5">
              <p className="font-serif text-base font-bold text-gold-400 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[9px] leading-tight text-cream/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Dot progress indicators ── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSlide([i, i > current ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-[3px] overflow-hidden rounded-full bg-cream/25 transition-all duration-500"
            style={{ width: i === current ? 48 : 14 }}
          >
            {i === current && (
              <motion.span
                key={`prog-${current}`}
                className="absolute inset-y-0 left-0 rounded-full bg-gold-400"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
        <span className="ml-1 text-[11px] font-semibold tracking-widest text-cream/35">
          {String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
