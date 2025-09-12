"use client";
import { useState } from "react";
import ElegantFormPopup from "../../components/PopupForm";
// import { Link } from "lucide-react";
const CtaSection = () => {
      const [showForm, setShowForm] = useState(false);
  return (
    <div className="max-w-7xl mt-12 mx-auto px-6 py-8 bg-[#fffdfa] border border-[#e2e8f0] rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-700 font-semibold">
          Want a tailored 360° strategy for your brand?
        </p>
        <button
           onClick={() => setShowForm(true)}
          className="cursor-pointer px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Talk to us
        </button>
        <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
      </div>
    </div>
  );
};

export default CtaSection;
