import { Button } from "@/components/index";
import Image from "next/image";
import React from "react";

interface CategoryProps {
  cat: string;
  description?: string;
  imageUrl: string;
  className?: string;
}

export const CategoryCard: React.FC<CategoryProps> = ({ cat, imageUrl }) => {
  return (
    <div className=" relative group block overflow-hidden rounded">
      <div className="overflow-hidden  aspect-square ">
        <Image
          src={imageUrl}
          alt={cat || "Product"}
          width={300}
          height={200}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 rounded"
        />
      </div>
      <div className="absolute top-3 left-3">
        <Button size="sm" className="uppercase">
          {cat}
        </Button>
      </div>
    </div>
  );
};
