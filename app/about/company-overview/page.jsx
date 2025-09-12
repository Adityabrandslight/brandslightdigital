'use client';
import ElegantFormPopup from "../../../components/PopupForm";
import React,{ useState }  from "react";
import {
  Palette,
  BarChart3,
  Globe2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const page = () => {
  const [showForm, setShowForm] = useState(false);
  const items = [
    { value: "3+", labelTop: "Years in Experience" },
    { value: "25+", labelTop: "Dedicated Experts" },
    { value: "96%", labelTop: "On-Time Project Delivery" },
    { value: "120+", labelTop: "Successful Projects" },
    { value: "90%", labelTop: "Repeat Clients" },
    { value: "4.8/5", labelTop: "Average Client Rating" },
    { value: "10+", labelTop: "Industries Served" },
    { value: "4.9", labelTop: "Clutch Rating" },
  ];

  const values = [
    {
      icon: <Palette className="h-6 w-6 text-orange-500" />,
      title: "Creative Excellence",
      desc: "We believe in delivering designs, strategies, and campaigns that spark engagement and inspire action. Every project is approached with fresh ideas and a creative mindset.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: "Client-Centric Approach",
      desc: "Your success is our success. We prioritize understanding your vision, aligning with your goals, and crafting solutions that deliver measurable results.",
    },
    {
      icon: <Globe2 className="h-6 w-6 text-orange-500" />,
      title: "Continuous Growth",
      desc: "We embrace learning, innovation, and industry trends to stay ahead. Our team evolves constantly to provide you with cutting-edge digital marketing strategies.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-orange-500" />,
      title: "Transparency & Accountability",
      desc: "We operate with honesty and clear communication, ensuring you’re informed every step of the way. We take responsibility for results and work tirelessly to exceed expectations.",
    },
  ];

  const team = [
    {
      name: "Priyanka",
      role: "Co-Founders",
      bio: "Visionary leader with 15+ years in digital transformation.",
      image: "/images/priyanka.jpg",
    },
    {
      name: "Lakshy Anand",
      role: "Co-Founders",
      bio: "Expert in market positioning and growth strategies.",
      image: "/images/lakshy.jpg",
    },
  ];

  return (
    <>
      {/* who we are  */}                      
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left copy */}
            <div className="max-w-xl">
              <p className="text-orange-500 uppercase tracking-widest text-sm">
                We are
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                Brands Light Digital
              </h1>

              <p className="mt-3 text-xl font-semibold text-slate-600">
                Your Partner in Innovative Digital Solutions
              </p>

              <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Founded in 2023, Brands Light Digital is a forward-thinking
                  digital marketing and creative solutions company dedicated to
                  helping brands shine in the digital space. We work with
                  startups, small businesses, and enterprises to craft powerful
                  strategies that drive visibility, engagement, and growth.
                </p>
                <p>
                  Our expertise spans across branding, social media marketing,
                  content creation, SEO, advertising, and web design. We believe
                  in blending creativity with data-driven insights to deliver
                  campaigns that not only look good but also perform
                  exceptionally.
                </p>
                <p>
                  With a team of passionate strategists, designers, and digital
                  marketers, we stay ahead of trends to ensure your brand stands
                  out in an ever-evolving online world. Our mission is simple:
                  to light up your brand’s presence and make it unforgettable.
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="relative mx-auto w-full max-w-2xl">
              <img
                src="/images/About-Image.png"
                alt="Devices and digital icons illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our achivements */}
      <section className="py-4 md:py-8">
        <div className="mx-auto max-w-7xl  px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-2 text-gray-600">
              Quantifying our commitment to excellence and client satisfaction
            </p>
          </div>

          {/* Outer card with internal dividers */}
          <div className=" border border-gray-200 bg-white">
            <div className="py-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 text-center flex items-center justify-center"
                >
                  <div>
                    <div className="text-4xl font-semibold text-[#f18822]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {item.labelTop}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Our Core Values
            </h2>
            <p className="mt-3 text-slate-600">
              These principles guide every decision we make and every solution
              we deliver.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="mb-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <span className="text-xl">{v.icon}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {v.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Leadership Team
            </h2>
            <p className="mt-3 text-slate-600">
              Meet the experienced professionals guiding our company&apos;s
              vision and strategy.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {team.map((person, i) => (
              <div
                key={i}
                className="w-full sm:w-3/10 flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <div className="h-72 w-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {person.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-medium">
                    {person.role}
                  </p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="bg-[#f18822] py-6">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          {/* Left text */}
          <h3 className="text-white font-semibold text-lg">
            Want to speak with our solution experts?
          </h3>

          {/* Right button */}
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2 text-sm font-semibold text-orange-500 shadow-sm hover:bg-gray-50 transition"
          >
            Book A Meeting
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
         <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
      </section>
    </>
  );
};

export default page;
