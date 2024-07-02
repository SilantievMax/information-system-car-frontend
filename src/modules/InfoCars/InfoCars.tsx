import InfoCar from '@/components/InfoCar/InfoCar';
import React from 'react'

const InfoCars = () => {
  return (
    <div className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide select-none">
      <InfoCar isActive />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
      <InfoCar />
    </div>
  );
}

export default InfoCars