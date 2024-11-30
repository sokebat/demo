import { ServiceData } from "@/data/service-data";
import React from "react";
import { SectionHeading, ServiceCard } from "@/components/index";

 export const ServiceTemplate = () => {
  return (
    <div className="  mt-20">
      <SectionHeading heading="Our Services" />
      <div className="grid gap-8 sm:gap-12 md:grid-cols-2 py-10">
        {ServiceData.map((data) => (
          <ServiceCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

 
