export default function WhyChoose({ brand = 'Brands Light Digital' }) {
  const items = [
    {
      title: 'All‑in‑One Digital Partner',
      body:
        `${brand} provides a complete range of services from branding and social to SEO, ads, and web design — all under one roof to simplify your digital journey.`,
    },
    {
      title: 'Trusted Marketing Experts',
      body:
        'Forward‑thinking specialists trusted by startups, SMBs, and enterprises to ship strategies that drive visibility, engagement, and growth.',
    },
    {
      title: 'Creative & Quality Driven',
      body:
        'We blend creativity with performance. From eye‑catching visuals to high‑converting strategies, every campaign is designed to impress and deliver results.',
    },
    {
      title: 'Quick Launch, Fast Results',
      body:
        'Kick off in 5 days or less so your brand goes live faster and starts seeing outcomes without unnecessary delays.',
    },
    {
      title: 'Expertise Across Industries',
      body:
        'Experience across diverse categories lets us tailor solutions to your unique needs and help you stand out in competitive markets.',
    },
    {
      title: 'On‑Time & Result‑Oriented',
      body:
        'We deliver on time, every time — with innovative strategies, measurable ROI, and campaigns that exceed expectations.',
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-2">
      <div className="py-8 max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
            Why Choose {brand}?
          </h2>
          <p className="my-4 text-lg text-neutral-600">
            With creativity, innovation, and data‑driven insights, {brand} is your trusted partner for building impactful digital success stories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <article
              key={i}
              className="relative bg-neutral-50 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow p-6 md:p-7"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
              
                <div>
                  <h3 className="text-lg font-extrabold text-neutral-900">{it.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">{it.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
