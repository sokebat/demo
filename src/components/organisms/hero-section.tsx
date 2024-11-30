import React from "react";
import { Button } from "@/components/index";

export const HeroSection = () => {
  return (
    <section className="mt-4">
      <div
        className="bg-[#C38C9F] rounded-2xl p-6 md:p-12 overflow-hidden text-white flex flex-col relative justify-end"
        style={{ minHeight: "300px" }}
      >
        <div className="w-2/3 mt-auto h-full relative ">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-medium  bg-opacity-20">
            Grab Upto 50% Off On Selected Clothes
          </h2>
          <a href="#">
            <Button size={"lg"}>Shop Now</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

 
