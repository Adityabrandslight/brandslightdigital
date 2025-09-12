"use client";
import Link from "next/link";
import { useState } from "react";
import ElegantFormPopup from "./PopupForm";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState("");
  const [showForm, setShowForm] = useState(false);

  const toggleDropdown = (dropdown) => {
    setExpandedDropdown(expandedDropdown === dropdown ? "" : dropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedDropdown("");
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo/blacklogo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
        ></div>

        {/* Panel */}
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <img
                src="/logo/blacklogo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-800 hover:bg-gray-50 border-b"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="border-b">
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full flex justify-between items-center px-6 py-4 text-gray-800 hover:bg-gray-50"
              >
                <span>About us</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    expandedDropdown === "about" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedDropdown === "about" && (
                <div className="bg-gray-50">
                  <Link
                    href="/about/company-overview"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Company Overview
                  </Link>
                  <Link
                    href="/about/our-teams"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Teams
                  </Link>
                  <Link
                    href="/talents/jobs"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Portfolio
                  </Link>
                </div>
              )}
            </div>

            {/* Website Development Dropdown */}
            <div className="border-b">
              <button
                onClick={() => toggleDropdown("development")}
                className="w-full flex justify-between items-center px-6 py-4 text-gray-800 hover:bg-gray-50"
              >
                <span>Website Development</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    expandedDropdown === "development" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedDropdown === "development" && (
                <div className="bg-gray-50">
                  <Link
                    href="/services/custom-website-development"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Custom Website Development
                  </Link>
                  <Link
                    href="/services/ecommerce"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    E-commerce Development
                  </Link>
                  <Link
                    href="/services/wordpress"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    WordPress Development
                  </Link>
                </div>
              )}
            </div>

            {/* Digital Marketing Dropdown */}
            <div className="border-b">
              <button
                onClick={() => toggleDropdown("marketing")}
                className="w-full flex justify-between items-center px-6 py-4 text-gray-800 hover:bg-gray-50"
              >
                <span>Digital Marketing</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    expandedDropdown === "marketing" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedDropdown === "marketing" && (
                <div className="bg-gray-50">
                  <Link
                    href="/services/graphic-designing"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Graphic Designing
                  </Link>
                  <Link
                    href="/services/seo"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    SEO Services
                  </Link>
                  <Link
                    href="/services/smo"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    SMO Services
                  </Link>
                  <Link
                    href="/services/ppc"
                    onClick={closeMenu}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Pay-per-Click (PPC)
                  </Link>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-800 hover:bg-gray-50 border-b"
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-6 py-4 text-gray-800 hover:bg-gray-50 border-b"
            >
              Contact
            </Link>
          </div>

          {/* Footer Button */}
          <div className="p-4 border-t bg-white">
            <button
              onClick={() => {
                setShowForm(true);
                closeMenu();
              }}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default MobileMenu;
