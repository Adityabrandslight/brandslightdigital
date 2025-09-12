'use client';
import { useState } from "react";
import ElegantFormPopup from "./PopupForm";
const ServiceCta = () => {
const [showForm, setShowForm] = useState(false);
  return (
      <section className="relative overflow-hidden bg-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-12 text-slate-900 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Ready for a website that feels premium and performs?
              </h2>
              <p className="mt-3 text-slate-700 md:text-lg">
                Tell us your goals. We'll map a fast, realistic plan.
              </p>
            </div>
            <div className="flex md:justify-end">
              <button
                 onClick={() => setShowForm(true)}
                className="rounded-md bg-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-amber-600"
              >
                Book a Free Consultation
              </button>
              <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceCta
