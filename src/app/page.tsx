import InstagramSection from "@/components/molecule/instagram-section";
import HeroSection from "@/components/organisms/hero-section";
import CategoryTemplate from "@/components/templates/category-template";
import ServiceTemplate from "@/components/templates/service-template";

const Page = () => {
  return (
    <div className="px-6 md:px-12 lg:px-6 mx-auto  bg- 2xl:px-0">
      <HeroSection />
      <CategoryTemplate />
      <ServiceTemplate />
      <InstagramSection />

    </div>
  );
};

export default Page;
