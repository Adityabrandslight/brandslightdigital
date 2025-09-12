"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ServiceCta from "@/components/ServiceCta";

export default function SearchEngineOptimization() {
  const [selected, setSelected] = useState(null);
  const results = [
    { src: "/seo/project 1.jpeg" },
    { src: "/seo/project 2.jpeg" },
    { src: "/seo/project 3.jpeg" },
    { src: "/seo/project 4.jpeg" },
    { src: "/seo/project 5.jpeg" },
    { src: "/seo/project 6.jpeg" },
    { src: "/seo/project 7.jpeg" },
    { src: "/seo/project 8.jpeg" },
    { src: "/seo/project 9.jpeg" },
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
              Search Engine Optimization
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Data-driven SEO strategies that increase organic visibility, drive
              qualified traffic, and convert visitors into customers.
              Sustainable results through technical excellence and content
              optimization.
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
                Request Audit
              </Link>
              <a
                href="#results"
                className="rounded-md border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold transition hover:border-amber-300 hover:text-amber-600"
              >
                See Case Studies
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 text-sm">
              <div>
                <p className="font-semibold">Visibility</p>
                <p className="mt-1 text-slate-600">Higher search rankings</p>
              </div>
              <div>
                <p className="font-semibold">Traffic</p>
                <p className="mt-1 text-slate-600">Quality organic visitors</p>
              </div>
              <div>
                <p className="font-semibold">ROI</p>
                <p className="mt-1 text-slate-600">Measurable conversions</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                alt="SEO analytics dashboard showing growth metrics"
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
                alt="SEO specialist analyzing website data"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Text blocks */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Technical SEO
                </h3>
                <p className="mt-3 text-slate-600">
                  Site architecture, indexing, Core Web Vitals, and structured
                  data to help search engines understand and rank your content.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Content Strategy
                </h3>
                <p className="mt-3 text-slate-600">
                  Keyword research and content optimization that answers user
                  intent while driving qualified traffic to your business.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Sustainable Growth
                </h3>
                <p className="mt-3 text-slate-600">
                  White-hat techniques that build lasting authority without
                  risky shortcuts or algorithm vulnerabilities.
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
              Our SEO Services
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Comprehensive optimization from technical foundation to content
              excellence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Technical Audit",
                "Comprehensive site health analysis and fixes.",
              ],
              [
                "Keyword Strategy",
                "Targeted research for commercial intent keywords.",
              ],
              [
                "On-Page Optimization",
                "Content, metadata, and structure enhancements.",
              ],
              ["Content Creation", "SEO-optimized articles and landing pages."],
              [
                "Local SEO",
                "Google Business optimization and local citations.",
              ],
              [
                "Analytics & Reporting",
                "Monthly performance tracking and insights.",
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
              Our SEO Process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Methodical approach to sustainable search visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Research",
                description:
                  "Competitor analysis, keyword mapping, and technical audit.",
              },
              {
                step: "02",
                title: "Optimize",
                description:
                  "On-page improvements, content strategy, and technical fixes.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Authority through quality content and ethical link building.",
              },
              {
                step: "04",
                title: "Scale",
                description:
                  "Ongoing optimization based on performance data and trends.",
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                alt="Client portrait"
                className="mx-auto h-24 w-24 rounded-full object-cover md:mx-0"
              />
              <blockquote className="mt-8 md:mt-0">
                <p className="font-serif text-2xl leading-relaxed md:text-3xl md:leading-relaxed">
                  "We went from barely ranking to first page for all our target
                  keywords within 6 months. The systematic approach delivered
                  consistent month-over-month growth in qualified traffic."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Arjun Patel, CEO of TechSolutions
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
<ServiceCta/>
    </main>
  );
}
