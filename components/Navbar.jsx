"use client";
import Link from "next/link";
import { useState } from "react";
import ElegantFormPopup from "./PopupForm";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="bg-white shadow-sm z-50 relative hidden md:block">
      <div className="px-2 py-2 flex justify-between items-center max-w-[1420px] m-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          <img src="/logo/blacklogo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <Link href="/" className="hover:text-blue-600 nav_bar">
            Home
          </Link>

          {/* For Talents */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("about")}
            onMouseLeave={() => setDropdown("")}
          >
            <div className="cursor-pointer nav_bar">About us ▾</div>
            <div
              className={`absolute top-full mt-2 w-52 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-150 ${
                dropdown === "about"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/about/company-overview"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Company Overview
              </Link>
              <Link
                href="/about/our-teams"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Teams
              </Link>
              <Link
                href="/talents/jobs"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Portfolio
              </Link>
            </div>
          </div>
          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("Development")}
            onMouseLeave={() => setDropdown("")}
          >
            <div className="cursor-pointer nav_bar">Website Development ▾</div>
            <div
              className={`absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-150 ${
                dropdown === "Development"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/services/custom-website-development"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Custom Website Development
              </Link>
              <Link
                href="/services/ecommerce"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                E-commerce Development
              </Link>
              <Link
                href="/services/wordpress"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                WordPress Development
              </Link>
              {/* <Link
                href="/services/shopify"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Shopify Development
              </Link> */}
            </div>
          </div>
          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("marketing")}
            onMouseLeave={() => setDropdown("")}
          >
            <div className="cursor-pointer nav_bar">Digital Marketing ▾</div>
            <div
              className={`absolute top-full mt-2 w-52 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-150 ${
                dropdown === "marketing"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/services/graphic-designing"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Graphic Designing
              </Link>
              <Link
                href="/services/seo"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                SEO Services
              </Link>
              <Link
                href="/services/smo"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                SMO Services
              </Link>
              <Link
                href="/services/ppc"
                className="block px-4 py-2 hover:bg-gray-100 nav_bar"
              >
                Pay-per-Click(PPC)
              </Link>
            </div>
          </div>
          {/* Blogs */}
          <Link href="/blog" className="hover:text-blue-600 nav_bar">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 nav_bar">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            onClick={() => setShowForm(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-medium nav_bar"
          >
            Get in Touch
          </button>
           <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
