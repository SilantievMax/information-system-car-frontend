"use client";
import React, { useRef, useState, WheelEvent, WheelEventHandler } from "react";
import InfoCar from "@/components/InfoCar/InfoCar";
import { allCarsData, rentCarsData } from "@/data/data";
import CardCar from "@/components/CardCar/CardCar";

const InfoCars = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isActiveCar, setIsActiveCar] = useState(rentCarsData[0].carNumber);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <>
      <div ref={scrollContainerRef} onWheel={handleWheel} className="flex gap-6 scroll-container">
        {rentCarsData.map((item, index) => {
          return <InfoCar key={index} isActive={isActiveCar === item.carNumber} onClick={() => setIsActiveCar(item.carNumber)} data={item} />;
        })}
      </div>
      <CardCar data={allCarsData.filter((item) => item.carNumber === isActiveCar)[0]} />
    </>
  );
};

export default InfoCars;
