import { team } from '../data/content'

export default function Team() {
  return (
    <section id="team" className="relative bg-wine-900 py-20 text-cream sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-gold-400">
            <span className="h-px w-8 bg-gold-400" />
            About us
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            Meet the visionaries behind DNA
          </h2>
          <p className="mt-4 text-cream/75">
            Driven by experience, integrity and a passion for building, our
            founders lead every project with a long-term commitment to clients
            and investors.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-3xl bg-wine-800/60 ring-1 ring-cream/10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-cream">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-400">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
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
