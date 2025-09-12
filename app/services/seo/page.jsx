import SeoElegantClient from "../components/SeoElegantClient"

export const metadata = {
  title: "SEO Services & AI-Powered SEO | Best SEO Agency in India",
  description:
    "Boost your rankings with expert SEO services. From AI-powered SEO to affordable packages, our agency delivers real results. Contact us today!",
  alternates: {
    canonical: "/services/graphic-designing", // metadataBase se full URL ban jayega
  },
};

export default function GraphicDesignElegantPage() {
  return <SeoElegantClient />; // pura UI client component me
}