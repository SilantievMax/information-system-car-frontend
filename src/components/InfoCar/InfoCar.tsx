import { CarsType } from "@/data/data";
import classNames from "classnames";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface InfoProps {
  label: string;
  value: string;
}

const Info: FC<InfoProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-light">{label}</div>
      <div className="text-base">{value}</div>
    </div>
  );
};

interface InfoCarProps {
  isActive?: boolean;
  data: CarsType;
  onClick: () => void;
}

const InfoCar: FC<InfoCarProps> = ({ isActive, data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        classNames("bg-jet p-10 rounded-16 text-white max-w-306 min-w-306 flex flex-col gap-22 cursor-pointer select-none", { "bg-blueViolet": isActive })
      )}
    >
      <div>
        <div className=""></div>
        <div className="w-fit">
          <div className="font-bold text-xl leading-none">{data.name}</div>
          <div className="text-xs text-end">{data.carNumber}</div>
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute h-3 w-full bg-white50 rounded-8"></div>
          <div style={{ width: `${data.percentageTime}%` }} className="absolute h-3 w-1/2  bg-white rounded-8"></div>
        </div>
      </div>

      <div className="flex justify-between">
        <Info label={"Время брони"} value={data.bookingTime} />
        <Info label={"Топливо"} value={`${data.fuelAmount} км`} />
        <Info label={"Время брони"} value={"3:20"} />
      </div>
    </div>
  );
};

export default InfoCar;
