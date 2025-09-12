"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ServiceCta from "@/components/ServiceCta";

export default function GraphicDesignElegant() {
  const [selected, setSelected] = useState(null);
  const results = [
    { src: "/graphic-design/project 1.png" },
    { src: "/graphic-design/project 2.png" },
    { src: "/graphic-design/project 3.png" },
    { src: "/graphic-design/project 4.png" },
    { src: "/graphic-design/project 5.png" },
    { src: "/graphic-design/project 6.png" },
    { src: "/graphic-design/project 7.png" },
    { src: "/graphic-design/project 8.png" },
    { src: "/graphic-design/project 9.png" },
    { src: "/graphic-design/project 10.png" },
    { src: "/graphic-design/project 11.png" },
    { src: "/graphic-design/project 12.png" },
    { src: "/graphic-design/project 13.png" },
  ];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
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
              Strategic Graphic Design
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 md:max-w-lg md:text-xl">
              Visually compelling designs that communicate your brand essence.
              From logos to marketing collateral, we create assets that resonate
              with your audience and drive engagement.
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
                <p className="font-semibold">Brand Identity</p>
                <p className="mt-1 text-slate-600">Cohesive visual systems</p>
              </div>
              <div>
                <p className="font-semibold">Print & Digital</p>
                <p className="mt-1 text-slate-600">Optimized for all formats</p>
              </div>
              <div>
                <p className="font-semibold">Strategy</p>
                <p className="mt-1 text-slate-600">Design with purpose</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop"
                alt="Design workspace with sketches and laptop"
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
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1600&auto=format&fit=crop"
                alt="Designer working on brand identity"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {/* Text blocks */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Brand-first approach
                </h3>
                <p className="mt-3 text-slate-600">
                  Every design element serves your brand strategy. We create
                  visuals that communicate your values and differentiate you in
                  the market.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Versatile assets
                </h3>
                <p className="mt-3 text-slate-600">
                  Designs that work across print and digital formats, with
                  proper file formats and specifications for each use case.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-8">
                <h3 className="font-serif text-2xl font-medium">
                  Marketing-ready
                </h3>
                <p className="mt-3 text-slate-600">
                  Designs created with conversion in mind—clear messaging
                  hierarchy, strategic CTAs, and visual storytelling that
                  engages.
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
              Our design services
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Comprehensive design solutions for brands that want to stand out.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Brand Identity", "Logos, color palettes, typography systems."],
              [
                "Print Collateral",
                "Business cards, brochures, packaging, signage.",
              ],
              ["Digital Graphics", "Social media assets, banners, ads."],
              ["Presentation Design", "Investor decks, pitch books."],
              ["Marketing Materials", "Flyers, posters, email templates."],
              ["Brand Guidelines", "Usage rules for consistent application."],
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
          <div className="mt-10 grid gap-1 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {results.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item.src)}
                className="group rounded-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={`Campaign result ${index + 1}`}
                    className=" w-auto object-contain p-1 md:p-2 transition duration-300 group-hover:scale-[1.02]"
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
            <div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-black/0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-2xl font-bold text-white hover:bg-black/80"
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={selected}
                alt="Enlarged campaign result"
                className="max-h-[90vh] w-auto mx-auto rounded-lg object-contain shadow-2xl"
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
              Our design process
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Collaborative phases that ensure your vision comes to life exactly
              as intended.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "Brand audit, competitor analysis, and creative brief to align on objectives.",
              },
              {
                step: "02",
                title: "Concept",
                description:
                  "Moodboards, sketches, and initial concepts that explore creative directions.",
              },
              {
                step: "03",
                title: "Refine",
                description:
                  "Iterative design with your feedback incorporated at each stage.",
              },
              {
                step: "04",
                title: "Deliver",
                description:
                  "Final files in all required formats with usage guidelines.",
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
                  "They translated our vague ideas into a stunning visual
                  identity that perfectly captures our brand personality. The
                  logo system is versatile and the guidelines make it easy for
                  our team to maintain consistency."
                </p>
                <footer className="mt-4 text-base text-slate-600">
                  Rahul Mehta, Founder of Terra Firma
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
