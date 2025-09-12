import FeaturedSection from "@/components/Featured";
import HeroSlider from "@/components/Hero";
import UniqueSection from "@/components/UniqueSection";
import SuccessStories from "@/components/SuccessStories";
import ServicesSection from "@/components/Service";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Whychooseus from "@/components/Whychooseus";
import CollaborateSection from "@/components/Enquiryfrom";
// import HomeBlogSection from "@/components/BlogSection";
export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <HeroSlider />
      <FeaturedSection />
      <UniqueSection />
      <ServicesSection />
      <Process />
      <CaseStudies />
      <Whychooseus />

      <SuccessStories />
      {/* <HomeBlogSection /> */}
      <CollaborateSection />
    </main>
  );
}
