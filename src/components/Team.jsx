import { team } from '../data/content'

export default function Team() {
  return (
    <section id="team" className="relative bg-wine-900 py-16 text-cream sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            About us
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Meet the visionaries behind DNA
          </h2>
          <p className="mt-3 text-sm text-cream/75 sm:mt-4 sm:text-base">
            Driven by experience, integrity and a passion for building, our
            founders lead every project with a long-term commitment to clients
            and investors.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl bg-wine-800/60 ring-1 ring-cream/10 sm:rounded-3xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-lg font-semibold text-cream sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-400 sm:text-sm">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/75 sm:mt-3">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
