import React from 'react';
import { ArrowRight } from 'lucide-react';

const data = [
  {
    tag: 'SEO',
    title: 'E-Commerce SEO Revolution',
    desc: 'Tripled organic traffic from 300K to 1.2M monthly visits through aggressive technical SEO optimizations.',
    statLabel: 'Achieved',
    statValue: '1.2M Monthly Visits',
    statSub: 'Up from 300K',
    image: '/images/seo.jpg',
    tagColor: 'bg-yellow-400',
  },
  {
    tag: 'Paid Advertising',
    title: 'SaaS Advertising Breakthrough',
    desc: 'Slashed CPA by 40% while scaling revenue 5x through hyper-targeted ad campaigns.',
    statLabel: 'Achieved',
    statValue: '₹500K Monthly Revenue',
    statSub: 'Up from ₹120K',
    image: '/images/saas.jpg',
    tagColor: 'bg-orange-300',
  },
  {
    tag: 'Content Marketing',
    title: 'Health Brand Content Empire',
    desc: 'Built an email empire of 50K+ subscribers through viral content and strategic nurturing.',
    statLabel: 'Achieved',
    statValue: '50K+ Quality Leads',
    statSub: 'Up from 5K',
    image: '/images/skincare.jpg',
    tagColor: 'bg-black text-white',
  },
];

const ImpactSection = () => {
  return (
    <section className="py-8 px-4 md:px-2 bg-white w-full">
      <div className='max-w-[1400px] mx-auto'>
        <div className="text-center mb-10 ">
        <p className="bg-yellow-200 text-yellow-700 font-medium px-4 py-1 inline-block rounded-full mb-4 text-sm">
          CLIENT SUCCESS
        </p>
        <h2 className="text-4xl font-bold text-black">
          Our <span className="text-yellow-500">Impact</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Real results that demonstrate our data-driven approach to digital growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            {/* Image & Tag */}
            <div
              className="h-56 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${card.tagColor}`}
              >
                {card.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>

              {/* Stats Footer */}
              
                <div>
                  <p className="text-sm text-gray-500">{card.statLabel}</p>
                  <p className="font-bold text-black">{card.statValue}</p>
                  <p className="text-xs text-gray-400">{card.statSub}</p>
                </div>
                <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="text-yellow-600" />
                </div>
             
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ImpactSection;
