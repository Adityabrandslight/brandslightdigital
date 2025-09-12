import ServiceCta from "@/components/ServiceCta";
import Link from "next/link";
export const metadata = {
  title: {
    default: "Social Media Agency | SMO & Influencer Marketing Services",
  },
  description: "Grow your brand with the best social media marketing agency. From SMO to influencer campaigns, our packages deliver results. Get started today!",
};
export default function SocialMediaOptimization() {
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
              Social Media Optimization
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Strategic social media management that builds authentic
              engagement, grows your audience, and converts followers into
              customers. Data-driven approaches for measurable results.
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
                View Results
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 text-sm">
              <div>
                <p className="font-semibold">Engagement</p>
                <p className="mt-1 text-slate-600">Authentic conversations</p>
              </div>
              <div>
                <p className="font-semibold">Growth</p>
                <p className="mt-1 text-slate-600">
                  Targeted audience building
                </p>
              </div>
              <div>
                <p className="font-semibold">ROI</p>
                <p className="mt-1 text-slate-600">Performance tracking</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop"
                alt="Social media analytics dashboard on laptop and phone"
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
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600&auto=format&fit=crop"
                alt="Team collaborating on social media strategy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Text blocks */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Platform Expertise
                </h3>
                <p className="mt-3 text-slate-600">
                  Tailored strategies for each platform - Instagram's visual
                  appeal, LinkedIn's professional network, Twitter's
                  conversations, and Facebook's community building.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Content Strategy
                </h3>
                <p className="mt-3 text-slate-600">
                  Mix of educational, entertaining, and promotional content
                  designed to stop the scroll and engage your ideal audience.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Community Building
                </h3>
                <p className="mt-3 text-slate-600">
                  Genuine engagement strategies that turn followers into brand
                  advocates through conversations and value-driven interactions.
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
              Our SMO Services
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Comprehensive social media solutions tailored to your business
              goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Profile Optimization",
                "Complete setup with SEO-friendly bios and links.",
              ],
              [
                "Content Calendar",
                "Strategic posting schedule with varied content types.",
              ],
              [
                "Community Management",
                "Daily engagement and conversation management.",
              ],
              [
                "Performance Analytics",
                "Monthly reports with actionable insights.",
              ],
              [
                "Paid Social Strategy",
                "Targeted ad campaigns for maximum ROI.",
              ],
              [
                "Influencer Collabs",
                "Authentic partnerships with niche influencers.",
              ],
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
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Client Results
              </h2>
              <p className="mt-2 text-slate-600 md:text-lg">
                Measurable growth and engagement improvements.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 font-medium transition hover:border-amber-300 hover:text-amber-600 md:mt-0"
            >
              Discuss your goals
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                src: "/project/smo1.jpg",
                title: "HealthFit Supplements",
                description: "320% engagement increase in 6 months",
                url: "#",
              },
              {
                src: "/project/smo2.jpg",
                title: "Urban Cafe Chain",
                description: "12K new followers with 28% conversion rate",
                url: "#",
              },
            ].map((project, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-6 py-5">
                  <div>
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-slate-600">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-amber-700 hover:underline"
                  >
                    View case study
                  </a>
                </figcaption>
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
              Our SMO Process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              A structured approach to building your social media presence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit",
                description:
                  "Current performance review and competitor benchmarking.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Custom plan with content pillars and posting schedule.",
              },
              {
                step: "03",
                title: "Optimize",
                description:
                  "Profile enhancements and content library creation.",
              },
              {
                step: "04",
                title: "Engage",
                description:
                  "Daily management with performance tracking and adjustments.",
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
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="Client portrait"
                className="mx-auto h-24 w-24 rounded-full object-cover md:mx-0"
              />
              <blockquote className="mt-8 md:mt-0">
                <p className="font-serif text-2xl leading-relaxed md:text-3xl md:leading-relaxed">
                  "Our engagement rates tripled within three months. They
                  understood our brand voice perfectly and helped us build
                  genuine connections with our ideal customers."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Neha Kapoor, Marketing Director at HealthFit
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