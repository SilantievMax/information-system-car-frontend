import React, { FC } from "react";
import Status from "../Status/Status";
import Wrapper from "../Wrapper/Wrapper";
import Gallery from "../Gallery/Gallery";
import Yes from "../icons/Yes";
import No from "../icons/No";
import LineChart from "../LineChart/LineChart";
import { CarsType } from "@/data/data";

interface CardCarProps {
  data: CarsType;
}

const CardCar: FC<CardCarProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          {data.name} <span className="text-sm font-light ml-8">{data.carNumber}</span>
        </div>
        <Status variant={data.availability ? "success" : "error"} text={data.availability ? "Свободна" : "В аренде"} />
      </div>
      <div className="flex gap-16">
        <Gallery images={data.images} />
        <div className="flex gap-6 space-x-16">
          <ul className="space-y-4 border-r pr-10 border-white50 h-fit">
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.parkingCamera ? <Yes /> : <No />}
              Камера для парковки
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.heatedSeats ? <Yes /> : <No />}
              Наличие подогрева сидений
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.heatedSteeringWheel ? <Yes /> : <No />}
              Наличие подогрева руля
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.parkingSensors ? <Yes /> : <No />}
              Наличие парктроников
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.largeTrunk ? <Yes /> : <No />}
              Вместительный багажник
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {data.characteristics.touchscreen ? <Yes /> : <No />}
              Наличие сенсорного экрана
            </li>
          </ul>
          <ul>
            <li className="font-semibold flex gap-22 items-center justify-between">
              Класс <span className="text-sm font-light">{data.characteristics.class}</span>
            </li>
            <li className="font-semibold flex gap-22 items-center justify-between">
              АКПП <span className="text-sm font-light">{data.characteristics.transmission}</span>
            </li>
            <li className="font-semibold flex gap-22 items-center justify-between">
              Привод <span className="text-sm font-light">{data.characteristics.driveType}</span>
            </li>
            <li className="font-semibold flex gap-22 items-center justify-between">
              Объем двигателя <span className="text-sm font-light">{data.characteristics.engineVolume}</span>
            </li>
            <li className="font-semibold flex gap-22 items-center justify-between">
              Мощность <span className="text-sm font-light">{data.characteristics.power}</span>
            </li>
          </ul>
        </div>
        <LineChart data={data.LineChart} />
      </div>
    </Wrapper>
  );
};

export default CardCar;
