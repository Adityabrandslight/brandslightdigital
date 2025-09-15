'use client';
import Image from 'next/image';

const SuccessStories = () => {
  // Converted from your "stories" into review objects
  const reviews = [
    {
      name: 'Sarah Johnson',
      title: 'CMO, TechStart Inc.',
      avatar: '/logo/favicon.ico',
      rating: 5,
      date: '2025-05-28',
      text:
        'Working with this team transformed our marketing. In just 6 months, we went from struggling to get noticed to being featured in top tech publications.',
    },
    {
      name: 'Michael Chen',
      title: 'CEO, UrbanEats',
      avatar: '/logo/favicon.ico',
      rating: 5,
      date: '2025-03-10',
      text:
        'Their data-driven approach helped us dominate the Miami market. We\'re now expanding to 3 new cities thanks to their growth strategies.',
    },
    {
      name: 'David Rodriguez',
      title: 'Managing Partner, LuxeRealty',
      avatar: '/logo/favicon.ico',
      rating: 5,
      date: '2025-02-02',
      text:
        'The team’s innovative property marketing solutions helped us sell high-end listings faster than ever before. Truly exceptional work.',
    },
    {
      name: 'David Rodriguez',
      title: 'Managing Partner, LuxeRealty',
      avatar: '/logo/favicon.ico',
      rating: 5,
      date: '2025-02-02',
      text:
        'The team’s innovative property marketing solutions helped us sell high-end listings faster than ever before. Truly exceptional work.',
    },
  ];

  const avg =
    Math.round(
      (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10
    ) / 10;

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* Header: Google rating summary */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Success Stories
            </h2>
            <p className="mt-1 text-gray-600">
              Real reviews from real clients. Straight from Google vibes, minus the chaos.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            {/* “Google” badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white">
              <span className="sr-only">Source:</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path fill="#4285F4" d="M12 12v3.6h5.1c-.2 1.3-1.5 3.8-5.1 3.8-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.8 5.5 14.6 4.5 12 4.5 7.3 4.5 3.5 8.3 3.5 13S7.3 21.5 12 21.5c6.2 0 8.6-4.3 8.6-7.2 0-.5 0-.9-.1-1.3H12z" />
              </svg>
              <span className="text-sm font-medium text-gray-800">Google</span>
            </span>

            {/* Stars */}
            <Stars rating={avg} />
            <span className="text-sm text-gray-700">
              {avg} · {reviews.length} reviews
            </span>
          </div>
        </div>

        {/* Reviews rail */}
        <div
          className="gap-6 sm:grid-cols-2 lg:grid-cols-4 hidden md:grid"
          /* Fallback grid for larger screens */
        >
          {reviews.map((r, i) => (
            <article
              key={i}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Header: avatar, name, date, Google badge on the right */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200">
                    <img
                      src={r.avatar}
                      alt={`${r.name} avatar`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900" itemProp="author">
                      {r.name}
                    </p>
                    <p className="text-sm text-gray-500">{r.title}</p>
                  </div>
                </div>
                <span
                  className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                  aria-label="Source Google"
                >
                  Google
                </span>
              </div>

              {/* Stars + date */}
              <div className="mb-3 flex items-center gap-2">
                <Stars rating={r.rating} />
                <time
                  className="text-xs text-gray-500"
                  dateTime={r.date}
                  itemProp="datePublished"
                >
                  {new Date(r.date).toLocaleDateString()}
                </time>
              </div>

              {/* Text */}
              <p className="text-gray-800" itemProp="reviewBody">
                “{r.text}”
              </p>
            </article>
          ))}
        </div>

        {/* Mobile horizontal scroll (optional enhancement) */}
        <div className="mt-8 md:hidden">
          <div className="snap-x snap-mandatory overflow-x-auto">
            <div className="flex gap-4">
              {reviews.map((r, i) => (
                <article
                  key={`m-${i}`}
                  className="snap-start min-w-[85%] rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200">
                        <img
                          src={r.avatar}
                          alt={`${r.name} avatar`}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{r.name}</p>
                        <p className="text-sm text-gray-500">{r.title}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
                      Google
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <Stars rating={r.rating} />
                    <time className="text-xs text-gray-500" dateTime={r.date}>
                      {new Date(r.date).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="text-gray-800">“{r.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* SEO JSON‑LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product', // or 'Organization'
              name: 'Brands Light Digital',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: avg,
                reviewCount: reviews.length,
              },
              review: reviews.map((r) => ({
                '@type': 'Review',
                reviewRating: { '@type': 'Rating', ratingValue: r.rating },
                author: { '@type': 'Person', name: r.name },
                reviewBody: r.text,
                datePublished: r.date,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

function Stars({ rating = 5 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;
  return (
    <div className="inline-flex items-center" aria-label={`${rating} out of 5 stars`}>
      {[...Array(total)].map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && half && i === full;
        return (
          <svg
            key={i}
            className="h-4 w-4"
            viewBox="0 0 20 20"
            aria-hidden="true"
            fill={isFull ? '#F59E0B' : isHalf ? 'url(#halfGrad)' : '#E5E7EB'}
          >
            {isHalf && (
              <defs>
                <linearGradient id="halfGrad">
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
            )}
            <path d="M10 15.27l-5.18 3.05 1.64-5.64L2 7.97l5.9-.51L10 2l2.1 5.46 5.9.51-4.46 4.71 1.64 5.64z" />
          </svg>
        );
      })}
    </div>
  );
}

export default SuccessStories;
