import {
  HeroSection,
  CategoryTemplate,
  ServiceTemplate,
  InstagramSection,
} from "@/components/index";

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
