import React from "react";

export default function HeroImage({ ...hero }) {
  const { image, title, text } = hero;
  return (
    <div
      className="bg-gray-500 h-screen hero-image-custom flex flex-wrap content-end animate-custom"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="text-white container mx-auto mb-20">
        <h1 className="text-5xl font-medium">{title}</h1>
        <p className="text-lg mt-10 w-1/2">{text}</p>
      </div>
    </div>
  );
}
