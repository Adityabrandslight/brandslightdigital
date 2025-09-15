'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function ElegantFormPopup({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('Form submitted:', formData);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-2xl ring-1 ring-amber-200">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-amber-50 p-2 text-amber-600 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex max-h-[90vh] flex-col overflow-hidden md:flex-row">
          {/* Image side */}
          <div className="relative hidden w-full md:block md:w-5/12">
            <img
              src="/form image.jpg"
              alt="Contact Illustration"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-200/60 via-amber-100/30 to-white/90" />
            <div className="absolute left-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700 ring-1 ring-amber-300">
              Brands Light Digital
            </div>
          </div>

          {/* Form side */}
          <div className="w-full md:w-7/12">
            <div className="max-h-[90vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <header className="mb-6">
                <p className="text-xs uppercase tracking-wider text-amber-600">
                  Get in touch
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Let’s build something future-proof
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Tell us about your project. We’ll get back within one business day.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name*"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email Address*"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Company Name"
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In*</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-slate-800 placeholder-slate-400 shadow-inner outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40"
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="application-modernization">Application Modernization</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message*</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 shadow-inner outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40"
                    placeholder="Briefly describe your goals, timeline, and budget range."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    I agree to the{' '}
                    <a
                      href="/privacy"
                      className="font-medium text-amber-600 hover:text-amber-700"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-500/60 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {loading ? 'Submitting…' : 'Submit Request'}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0" />
                </button>

                <div className="mt-2 flex items-center justify-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    50+ happy clients
                  </span>
                  <span className="text-slate-400">•</span>
                  <span>Avg. rating 4.9</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Label(props) {
  return <label {...props} className="mb-1 block text-sm font-medium text-slate-700" />;
}

function FormField({ label, id, type, value, onChange }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={label.endsWith('*')}
        className="w-full rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-slate-800 placeholder-slate-400 shadow-inner outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40"
        placeholder={label.replace('*', '')}
      />
    </div>
  );
}