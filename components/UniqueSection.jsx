
'use client'
import React from 'react';
import CountUp from 'react-countup';

const UniqueSection = () => {
  return (
    <section className="bg-white py-8 px-4 lg:px-4">
      <div className="flex flex-col lg:flex-row items-center gap-2 max-w-[1400px] mx-auto">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <img
            src="/images/unique.png"
            alt="Person on phone"
            className="z-10 relative"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 ">
          <p className="text-orange-500 font-semibold mb-2">What Makes Us Unique?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our offbeat Marketing solutions drive dollars to your bank accounts.
          </h2>
          <p className="text-gray-700 mb-6">
            At Brands Light Digital, we believe marketing shouldn’t just look clever on paper—it should
            actually move the needle. Our offbeat, creative strategies aren’t just about getting attention;
            they’re about driving real growth and putting more money in your bank account.
            <span className="text-blue-600 font-semibold"> Best digital marketing agency in Delhi.</span> In
            today’s fast-moving digital world, first impressions matter more than ever. That’s why we focus
            on building campaigns that stand out and actually connect with your audience. Based right here
            in Delhi, we understand the local market, its quirks, and what it takes to help businesses thrive
            in this space.
            <span className="text-blue-700 font-semibold"> best SMO company in the US</span>, our commitment
            to assisting your brand goes beyond mere words; it's a steadfast pledge. To bring your dreams of
            success to fruition, we have:
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-red-500 text-white font-bold text-lg p-4 rounded-full">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </div>
              <p className="font-semibold mt-2 text-black">Industry <br /> Experience</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-500 text-white font-bold text-lg p-4 rounded-full">
                <CountUp start={0} end={25} duration={2} suffix="+" />
              </div>
              <p className="font-semibold mt-2 text-black">Experts</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 text-white font-bold text-lg py-4 px-3 rounded-full">
                <CountUp start={0} end={120} duration={2.5} suffix="+" />
              </div>
              <p className="font-semibold mt-2 text-black">Successful <br /> Project</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-white font-bold text-lg py-4 px-5 rounded-full">
                <CountUp start={0} end={3} duration={1.5} suffix="+" />
              </div>
              <p className="font-semibold mt-2 text-black">year in <br /> Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
