'use client'; // Note: Corrected from 'use clients'

import Image from 'next/image'; // Add this import

const FeaturedSection = () => {
  const featuredLogos = [
    { name: 'Clutch', image: '/featured_image/1.png' },
    { name: 'Google', image: '/featured_image/2.png' },
    { name: 'MicroSoft', image: '/featured_image/3.png' },
    { name: 'SEMRUSH', image: '/featured_image/4.png' },
    { name: 'NASSCOM', image: '/featured_image/5.png' },
  ];

  const badges = [
    'FIRMS THAT DELIVER',
    'WAGazine',
    'MEMBER'
  ];

  return (
    <section className="py-4 bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Title */}
        <h3 className="text-center text-lg font-medium mb-4 tracking-widest text-[#f08622]">
          WE ARE FEATURED IN
        </h3>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-8">
          {featuredLogos.map((logo, index) => (
            <div key={index} className="px-4 flex items-center justify-center border-1 border-gray-400 rounded-xl">
              <Image
                src={logo.image}
                alt={logo.name}
                width={100}
                height={40}
                className="p-4 object-contain h-full w-full grayscale hover:grayscale-0 transition-all duration-300 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
