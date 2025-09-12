"use client";
import { motion } from "framer-motion";
import { FiSearch, FiBarChart2, FiTarget, FiTrendingUp } from "react-icons/fi";

const Process = () => {
  const steps = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Discovery Audit",
      desc: "We analyze your current digital footprint with 50+ SEO & PPC metrics.",
      color: "text-yellow-500",
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Data-Driven Strategy",
      desc: "Custom plan targeting high-ROI opportunities in your niche.",
      color: "text-orange-500",
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Precision Execution",
      desc: "Our specialists implement campaigns with weekly optimizations.",
      color: "text-black",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      desc: "Continuous testing to double down on what works for you.",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-4 px-4 w-full bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-bold text-sm mb-2">
            HOW WE WORK
          </span>
          <h2 className="text-4xl font-bold text-black mb-2">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              4-Step
            </span>{" "}
            Growth System
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transparent process that delivers measurable results every quarter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className={`${step.color} mb-6`}>{step.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
