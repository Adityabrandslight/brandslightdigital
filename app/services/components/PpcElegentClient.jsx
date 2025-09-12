"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ServiceCta from "@/components/ServiceCta";
export default function PpcElegantClient() {
  const [selected, setSelected] = useState(null);
  const results = [
    { src: "/ppc/project 1.jpeg" },
    { src: "/ppc/project 2.jpeg" },
    { src: "/ppc/project 3.jpeg" },
    { src: "/ppc/project 4.jpeg" },
  ];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <main className="text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-6 md:grid-cols-2 md:py-12 lg:px-8">
          <div className="order-2 space-y-6 md:order-1 md:space-y-8">
            {/* BADGE */}
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-700 shadow-sm">
              Brands Light Digital
            </span>

            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Pay-Per-Click Advertising
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Targeted ad campaigns that deliver immediate traffic and
              measurable conversions. We optimize every click for maximum ROI
              across Google Ads, Meta, and LinkedIn.
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
                Get Started
              </Link>
              <a
                href="#results"
                className="rounded-md border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold transition hover:border-amber-300 hover:text-amber-600"
              >
                See Results
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 text-sm">
              <div>
                <p className="font-semibold">Immediate</p>
                <p className="mt-1 text-slate-600">Traffic from day one</p>
              </div>
              <div>
                <p className="font-semibold">Measurable</p>
                <p className="mt-1 text-slate-600">Clear ROI tracking</p>
              </div>
              <div>
                <p className="font-semibold">Optimized</p>
                <p className="mt-1 text-slate-600">Continuous improvements</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                alt="Digital marketing dashboard showing PPC metrics"
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
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop"
                alt="Marketer analyzing PPC campaign data"
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
                  Google Ads, Meta, LinkedIn, and programmatic display - we know
                  each platform's unique advantages and how to leverage them.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Conversion Focused
                </h3>
                <p className="mt-3 text-slate-600">
                  From landing page optimization to pixel implementation, we
                  engineer campaigns for maximum conversions, not just clicks.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">Data-Driven</h3>
                <p className="mt-3 text-slate-600">
                  Real-time monitoring and weekly optimizations based on
                  performance data to improve your cost-per-acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#fffdfa]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Our PPC Services
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              End-to-end management of high-performing paid campaigns.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Search Ads", "Text ads targeting high-intent search queries."],
              [
                "Display Network",
                "Visual ads across millions of websites and apps.",
              ],
              ["Shopping Ads", "Product listings for eCommerce stores."],
              ["Social Ads", "Facebook, Instagram, and LinkedIn campaigns."],
              ["Remarketing", "Re-engage past visitors across platforms."],
              ["Analytics", "Conversion tracking and performance reporting."],
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

      {/* RESULTS SHOWCASE */}
      <section id="results" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Campaign Results
              </h2>
              <p className="mt-2 text-slate-600 md:text-lg">
                Real PPC performance from our client campaigns.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 font-medium transition hover:border-amber-300 hover:text-amber-600 md:mt-0"
            >
              Start Your Campaign
            </a>
          </div>

          {/* Auto-fit grid */}
          <div className="mt-10 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {results.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item.src)}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none"
              >
                <div className="overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100">
                  <img
                    src={item.src}
                    alt={`Campaign result ${index + 1}`}
                    className="aspect-[16/10] w-full object-contain p-1 md:p-2 transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold"
              >
                &times;
              </button>
              <img
                src={selected}
                alt="Enlarged campaign result"
                className="w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>

      {/* PROCESS */}
      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Our PPC Process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Strategic campaign management for consistent performance.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Strategy",
                description:
                  "Audience research, platform selection, and KPI setting.",
              },
              {
                step: "02",
                title: "Launch",
                description:
                  "Campaign setup, ad creation, and conversion tracking.",
              },
              {
                step: "03",
                title: "Optimize",
                description:
                  "Bid adjustments, A/B testing, and performance tuning.",
              },
              {
                step: "04",
                title: "Scale",
                description:
                  "Expanding winning strategies to maximize returns.",
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
                  "Our cost-per-lead dropped by 58% while lead volume increased.
                  The team's optimization strategy delivered real results within
                  the first month."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Priya Sharma, Marketing Director
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
