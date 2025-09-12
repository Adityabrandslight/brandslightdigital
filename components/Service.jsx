'use client';
import React, { useState } from 'react';
import { Code, Palette, Smartphone, Globe, Zap, Share2 } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "We create responsive, modern websites using cutting-edge technologies like React, Next.js, and Node.js. Our custom web solutions are designed to enhance your online presence and drive business growth with optimal performance and user experience."
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Designing",
      description: "Our creative design team specializes in branding, logo design, marketing materials, and digital graphics. We transform your ideas into visually compelling designs that communicate your brand message effectively and leave a lasting impression on your audience."
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies. From SEO and content marketing to social media management and email campaigns, we help you reach your target audience and achieve measurable results."
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8" />,
      title: "CGI Development",
      description: "We create stunning 3D animations, visual effects, and computer-generated imagery for films, games, and marketing content. Our CGI services bring your imagination to life with photorealistic renders and immersive visual experiences."
    },
    {
      id: 5,
      icon: <Zap className="w-8 h-8" />,
      title: "Pay-Per-Click(PPC)",
      description: "Maximize your ROI with our targeted PPC campaigns across Google Ads, Facebook, and other platforms. Our data-driven approach ensures optimal ad spend, higher conversion rates, and immediate visibility for your business."
    },
    {
      id: 6,
      icon: <Share2 className="w-8 h-8" />,
      title: "SMO Services",
      description: "Enhance your social media presence with our Social Media Optimization services. We create engaging content, manage your social profiles, and implement strategies to increase followers, engagement, and brand awareness across all platforms."
    }
  ];

  return (
    <section className="py-10 px-4 md:px-2 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Offerings
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto ">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredCard === service.id ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={` p-8 h-full border-2 transition-all duration-300 ${
                hoveredCard === service.id 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-transparent' 
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'
              }`}>
                {/* Icon */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed text-sm ${
                  hoveredCard === service.id 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;