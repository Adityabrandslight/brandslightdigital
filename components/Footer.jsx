// components/Footer.jsx
"use client";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 text-sm px-4 sm:px-10 py-12 border-t border-amber-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">
        {/* Company */}
        <div>
          <h4 className="font-semibold text-base mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-amber-700">Home</Link></li>
            <li><Link href="/about/company-overview" className="hover:text-amber-700">Company Overview</Link></li>
            <li><Link href="/about/our-teams" className="hover:text-amber-700">Teams</Link></li>
            <li><Link href="/talents/jobs" className="hover:text-amber-700">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-amber-700">Contact</Link></li>
          </ul>
        </div>

        {/* Website Development */}
        <div>
          <h4 className="font-semibold text-base mb-3">Website Development</h4>
          <ul className="space-y-2">
            <li><Link href="/services/custom-website-development" className="hover:text-amber-700">Custom Website Development</Link></li>
            <li><Link href="/services/ecommerce" className="hover:text-amber-700">E‑commerce Development</Link></li>
            <li><Link href="/services/wordpress" className="hover:text-amber-700">WordPress Development</Link></li>
            <li><Link href="/services/shopify" className="hover:text-amber-700">Shopify Development</Link></li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div>
          <h4 className="font-semibold text-base mb-3">Digital Marketing</h4>
          <ul className="space-y-2">
            <li><Link href="/services/graphic-designing" className="hover:text-amber-700">Graphic Designing</Link></li>
            <li><Link href="/services/seo" className="hover:text-amber-700">SEO Services</Link></li>
            <li><Link href="/services/smo" className="hover:text-amber-700">SMO Services</Link></li>
            <li><Link href="/services/ppc" className="hover:text-amber-700">Pay‑per‑Click (PPC)</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-base mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/blog" className="hover:text-amber-700">Blog</Link></li>
            <li><Link href="/case-studies" className="hover:text-amber-700">Case Studies</Link></li>
            <li><Link href="/press" className="hover:text-amber-700">Press</Link></li>
            <li><Link href="/ebooks" className="hover:text-amber-700">eBooks</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-base mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-amber-700">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-amber-700">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-amber-700">Refund Policy</Link></li>
            <li><Link href="/sitemap" className="hover:text-amber-700">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 border-t border-amber-100 pt-8">
        {/* Social + mini links */}
        <div>
          <p className="font-semibold mb-2">Follow us</p>
          <div className="flex items-center gap-4 mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] text-lg hover:opacity-80"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black text-lg hover:opacity-80"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] text-lg hover:opacity-80"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black text-lg hover:opacity-80"><FaInstagram /></a>
          </div>
          <Link href="/sitemap" className="text-amber-700 text-sm underline">SITEMAP</Link>
        </div>

        {/* Subscribe */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md"
          aria-label="Subscribe to newsletter"
        >
          <p className="font-semibold mb-2">Subscribe Newsletter</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="px-4 py-2 rounded-lg border border-amber-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-60"
            />
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-xs text-slate-500 mt-10">
        © {year} Brands Light Digital. All rights reserved.
      </div>
    </footer>
  );
}
