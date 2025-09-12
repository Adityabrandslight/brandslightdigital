import ServiceCta from "@/components/ServiceCta";
import Link from "next/link";
export const metadata = {
  title: {
    default: "Custom WordPress Website Development Services in India",
  },
  description: "Build powerful WordPress website with expert developers. From custom design to reliable support, we create sites that grow your business. Start your project!",
};
export default function WordPressDevelopmentService() {
  return (
    <main className="text-slate-900">
      {/* HERO — classic editorial layout */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-6 md:grid-cols-2 md:py-12 lg:px-8">
          <div className="order-2 space-y-6 md:order-1 md:space-y-8">
            {/* BADGE */}
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-700 shadow-sm">
              Brands Light Digital
            </span>

            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              WordPress Development
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Custom WordPress websites with pixel-perfect design, optimized performance,
              and intuitive content management. Built for your business needs.
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
                <p className="font-semibold">Customization</p>
                <p className="mt-1 text-slate-600">Tailored to your brand</p>
              </div>
              <div>
                <p className="font-semibold">Performance</p>
                <p className="mt-1 text-slate-600">Optimized speed & SEO</p>
              </div>
              <div>
                <p className="font-semibold">Control</p>
                <p className="mt-1 text-slate-600">Easy content management</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop"
                alt="WordPress dashboard on laptop"
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop"
                alt="WordPress theme customization"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Text blocks */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Custom Themes
                </h3>
                <p className="mt-3 text-slate-600">
                  Bespoke WordPress themes built from scratch to match your brand,
                  with no unnecessary bloat slowing down your site.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Performance Optimized
                </h3>
                <p className="mt-3 text-slate-600">
                  Fast-loading WordPress sites with optimized code, caching,
                  and image handling to ensure great Core Web Vitals scores.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Easy Management
                </h3>
                <p className="mt-3 text-slate-600">
                  Intuitive admin interfaces and custom post types so you can
                  manage content without developer help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-[#fffdfa]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Our WordPress Services
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Comprehensive solutions from theme development to ongoing maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Custom Theme Development", "Tailored WordPress themes built to your specifications."],
              ["WooCommerce Integration", "Full e-commerce solutions with WordPress."],
              ["Headless WordPress", "Modern front-end with WordPress as a CMS backend."],
              ["Performance Optimization", "Speed improvements and Core Web Vitals fixes."],
              ["Plugin Development", "Custom functionality without bloat."],
              ["Maintenance & Security", "Updates, backups, and security hardening."],
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
                WordPress Projects
              </h2>
              <p className="mt-2 text-slate-600 md:text-lg">
                Custom WordPress solutions we've built.
              </p>
            </div>
          </div>

          {/* Auto-fit grid -> adapts to 2, 3, 5, whatever */}
          <div className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {[
              {
                src: "/project/liport.png",
                title: "Liport",
                description: "Medical",
                url: "https://liport.in/",
              },
              {
                src: "/project/doublerasoia.png",
                title: "Double Rasoiya",
                description: "Food",
                url: "https://doublerasoiya.com/",
              },
              {
                src: "/project/scythian.png",
                title: "Scythian Health Care",
                description: "Medical",
                url: "https://scythianhealthcare.com/",
              },
              {
                src: "/project/yashvalve.png",
                title: "Yash Valve Fittings",
                description: "Hardware Products",
                url: "https://yashvalve.com/",
              },
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
              Our WordPress Process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Structured approach to building exceptional WordPress sites.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Planning",
                description:
                  "Requirements gathering, site architecture, and technical planning.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Custom UI/UX design tailored for WordPress implementation.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Custom theme/plugin development and content structure setup.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Performance optimization, training, and ongoing support.",
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
                  "Our WordPress site loads in under 2 seconds globally while giving us
                  complete control over content. The perfect balance of speed and flexibility."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Rajesh Kumar, Marketing Director
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCta />
    </main>
  );
}