"use client";
import { useState } from 'react';

export default function CollaborateSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    project: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Collaborate & Co-Create our Success Story!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in solving complex business challenges of the converging world, by using cutting-edge technologies.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          {/* First Row - Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-100 border-0  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-100 border-0  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          {/* Second Row - Email and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-100 border-0  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-100 border-0  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Project Description */}
          <div> 
            <textarea
              name="project"
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-4 bg-gray-100 border-0  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white transition-all resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#ff6900] border hover:text-[#ff6900] hover:bg-transparent hover:border-[#ff6900] text-white font-semibold px-8 py-4  transition-colors duration-200 text-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}