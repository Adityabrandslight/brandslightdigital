import GraphicDesignElegantClient from "../components/GraphicDesignElegentClient";

export const metadata = {
  title: "Graphic Design Agency in India | Video Editing & Creative Studio",
  description:
    "Hire a professional graphic designing company in India. From logos to video editing, our design studio delivers. Get in touch today! | BrandslightDigital",
  alternates: {
    canonical: "/services/graphic-designing", // metadataBase se full URL ban jayega
  },
};

export default function GraphicDesignElegantPage() {
  return <GraphicDesignElegantClient />; // pura UI client component me
}
