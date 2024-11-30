import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0 text-gray-600">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-zinc-600 text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};
