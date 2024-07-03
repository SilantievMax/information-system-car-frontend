"use client";
import React, { useRef, WheelEvent, WheelEventHandler } from "react";
import InfoCar from "@/components/InfoCar/InfoCar";

const InfoCars = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div ref={scrollContainerRef} onWheel={handleWheel} className="flex gap-6 scroll-container">
      <InfoCar isActive />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
    </div>
  );
};

export default InfoCars;
