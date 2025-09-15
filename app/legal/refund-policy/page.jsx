// app/refund-policy/page.tsx  (Next.js 13+)
// or pages/refund-policy.tsx (Next.js <=12)

import React from "react";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Refund Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Brands Light Digital</span>, we
          value your trust and investment in our services. To maintain
          transparency, please read our refund policy carefully:
        </p>

        <ul className="space-y-4 list-disc list-inside text-gray-700">
          <li>
            <span className="font-semibold">Advance Payment:</span> Once a
            project is confirmed and advance payment has been made, the advance
            amount is strictly <span className="text-red-600">non-refundable</span>.
          </li>
          <li>
            <span className="font-semibold">Project Cancellation by Client:</span>{" "}
            If the client decides to cancel the project after work has
            commenced, no refund will be provided for the advance payment
            already made.
          </li>
          <li>
            <span className="font-semibold">Project Delay or Non-Delivery by Us:</span>{" "}
            In the unlikely event that we fail to deliver the agreed-upon
            services due to our own fault, refunds may be considered on a
            case-by-case basis.
          </li>
          <li>
            <span className="font-semibold">Third-Party Services:</span> Payments
            made towards third-party tools, software, or advertising platforms
            (such as hosting, domains, or paid ads) are non-refundable under any
            circumstances.
          </li>
          <li>
            <span className="font-semibold">Acceptance of Policy:</span> By
            engaging with our services and making advance payments, you
            acknowledge and agree to this refund policy.
          </li>
        </ul>

        <p className="mt-6 text-gray-700">
          For any questions regarding this policy, please{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:underline font-medium"
          >
            contact us
          </a>
          .
        </p>
      </div>
    </main>
  );
}
