import ServiceCta from "@/components/ServiceCta";
import Link from "next/link";
export const metadata = {
  title: {
    default: "Affordable Custom Website Development Services | Web Design",
  },
  description: "Get professional custom website development services. From design to coding, our expert team builds websites tailored to your business. Contact us today!",
};

export default function CustomWebsiteDevelopmentElegant() {
  return (
    <>
    <main className="text-slate-900">
      <section className="relative overflow-hidden bg-[#faf7f2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-6 md:grid-cols-2 md:py-12 lg:px-8">
          <div className="order-2 space-y-6 md:order-1 md:space-y-8">
            {/* BADGE */}
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-700 shadow-sm">
              Brands Light Digital
            </span>

            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Custom Website Development
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Bespoke websites with timeless design, modern performance, and
              measurable business outcomes. Built for clarity, speed, and SEO.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md px-6 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(245 158 11) 0%, rgb(251 191 36) 100%)",
                }}
              >
                Request Proposal
              </Link>
              <a
                href="#portfolio"
                className="rounded-md border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold transition hover:border-amber-300 hover:text-amber-600"
              >
                View Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 text-sm">
              <div>
                <p className="font-semibold">Performance</p>
                <p className="mt-1 text-slate-600">Core Web Vitals focused</p>
              </div>
              <div>
                <p className="font-semibold">SEO</p>
                <p className="mt-1 text-slate-600">Schema + clean IA</p>
              </div>
              <div>
                <p className="font-semibold">Ownership</p>
                <p className="mt-1 text-slate-600">CMS you control</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                alt="Elegant workspace with laptop and notebook"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-6">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="Developer workspace with code on screen"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Text blocks */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Timeless design
                </h3>
                <p className="mt-3 text-slate-600">
                  Clear hierarchy, generous spacing, and typography that ages
                  well. Your site should look trustworthy today and strong in
                  two years.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Modern performance
                </h3>
                <p className="mt-3 text-slate-600">
                  Image optimization, code-splitting, caching and Core Web
                  Vitals targets as part of the build, not afterthoughts.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  SEO & analytics
                </h3>
                <p className="mt-3 text-slate-600">
                  Semantic HTML, schema, redirects, GA4 and event tracking so
                  your marketing doesn’t fly blind.
                </p>
              </div>
            </div>

            {/* Proper, relevant imagery */}
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-[#fffdfa]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              What we deliver
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Strategy to launch, wrapped in straightforward communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Strategy workshop", "Goals, sitemap, and success metrics."],
              [
                "Custom UI design",
                "Wireframes to hi-fi with brand consistency.",
              ],
              ["Responsive build", "Looks sharp on mobile, tablet, desktop."],
              ["CMS setup", "Headless or WordPress. Your call."],
              ["On-page SEO", "Schema, metadata, redirects and clean IA."],
              ["Performance", "Image/CDN, caching and CWV optimization."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-8 transition hover:border-amber-300"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  ✦
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section id="portfolio" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Recent work
              </h2>
              <p className="mt-2 text-slate-600 md:text-lg">
                A few clean, conversion-ready builds.
              </p>
            </div>
          </div>

          {/* Auto-fit grid -> adapts to 2, 3, 5, whatever */}
          <div className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {[
              {
                src: "/project/petalpure.png",
                title: "Petal Pure",
                description: "E-Commerce",
                url: "https://petalpureoasis.com/",
              },
              {
                src: "/project/matrikamobility.png",
                title: "Matrika Mobilities",
                description: "Car Rental Services",
                url: "https://matrikamobilities.com/",
              },
              // add more items freely; grid will auto-balance
            ].map((project, index) => (
              <figure
                key={index}
                className="group relative rounded-2xl bg-white p-4 "
              >
                {/* Browser/desktop frame */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} – Visit website`}
                  className="block"
                >
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    {/* Top bar like a browser window */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <div className="ml-auto h-2 w-24 rounded bg-slate-200/70" />
                    </div>

                    {/* Screen area */}
                    <div className="overflow-hidden rounded-lg bg-white ring-1 ring-slate-100">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="aspect-[16/10] w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </a>

                <figcaption className="flex items-center justify-between px-1 pt-4">
                  <div>
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-amber-700 hover:underline"
                    >
                      Visit website
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">Coming soon</span>
                  )}
                </figcaption>

                {/* subtle focus ring for keyboard users */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-amber-500/0 group-focus-within:ring-2 group-focus-within:ring-amber-500/30" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Our process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Clear phases with measurable milestones and regular check-ins.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "Brief, goals, audience, and a competitive audit to set the foundation.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Wireframes, moodboards, and polished UI design with collaborative reviews.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Accessible, performant code with staging previews for feedback and QA.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Analytics, redirects, final QA, and training to make handoff smooth.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <span className="text-amber-600 font-semibold">
                  {phase.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-[#fffdfa] p-10 md:p-12">
            <div className="md:flex md:items-center md:gap-10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Client portrait"
                className="mx-auto h-24 w-24 rounded-full object-cover md:mx-0"
              />
              <blockquote className="mt-8 md:mt-0">
                <p className="font-serif text-2xl leading-relaxed md:text-3xl md:leading-relaxed">
                  "Clean, quick, and on-brand. Traffic and leads improved in the
                  first month. The build quality shows."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Priya Gupta, Marketing Lead
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      <ServiceCta/>

    </main>
    </>
  );
}
