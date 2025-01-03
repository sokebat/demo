import React from "react";

interface SectionHeadingProps {
  heading: string;
}

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return <h2 className="text-2xl  text-gray-900 sm:text-3xl">{heading}</h2>;
};
