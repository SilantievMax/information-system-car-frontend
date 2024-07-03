"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-306 h-200 relative overflow-hidden rounded-8">
      {images.map((src, index) => (
        <Image
          key={src}
          className={`absolute inset-0 transition-opacity w-306 h-200 duration-300 object-cover ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
          width={300}
          height={300}
          src={src}
          alt=""
        />
      ))}

      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-6 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-22 h-6 rounded-8 cursor-pointer transition-colors duration-300 ${activeIndex === index ? "bg-white" : "bg-white50"}`}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
