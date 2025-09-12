'use client';

import { useRef } from 'react';

/**
 * ContactSection
 * Pixel-matched to the screenshot you shared.
 * - Responsive 2-column inputs
 * - Clean focus ring (#ff6900) and hover states
 * - Accessible labels for screen readers
 * - Vanilla submit handler (replace with your API route)
 */
export default function ContactSection() {
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const payload = Object.fromEntries(fd.entries());
    // TODO: hit your API route here
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
    console.log('Form payload', payload);
    formRef.current?.reset();
  };

  const inputCls =
    'w-full px-4 py-4 bg-gray-100 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all';

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {"Let's Collaborate & Co-Create our Success Story!"}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            We believe in solving complex business challenges of the converging world, by using
            cutting-edge technologies.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" className={inputCls} required />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="Phone" className={inputCls} required />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className={inputCls} required />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Company</label>
              <input id="company" name="company" type="text" placeholder="Company" className={inputCls} />
            </div>
          </div>

          <div>
            <label htmlFor="project" className="sr-only">Project</label>
            <textarea
              id="project"
              name="project"
              placeholder="Tell us about your project"
              rows={6}
              className={`${inputCls} resize-none`}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ff6900] border hover:text-[#ff6900] hover:bg-transparent hover:border-[#ff6900] text-white font-semibold px-8 py-4 transition-colors duration-200 text-lg"
            >
              Start a Conversation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
