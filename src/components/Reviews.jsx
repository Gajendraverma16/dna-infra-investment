import { reviews } from '../data/content'
import Icon from './Icon'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-wine-700" />
            Client reviews
            <span className="h-px w-8 bg-wine-700" />
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Trusted by investors &amp; families
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-soft"
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5" filled />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive-100 font-serif text-lg font-bold text-olive-700">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">
                    {review.name}
                  </span>
                  <span className="block text-sm text-ink/60">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
