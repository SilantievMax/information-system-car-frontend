
import React from "react";
import Status from "../Status/Status";
import Wrapper from "../Wrapper/Wrapper";
import Gallery from "../Gallery/Gallery";
import Yes from "../icons/Yes";
import No from "../icons/No";

const images = ["/images/cars/photo_5201734965379849987_y.jpg", "/images/cars/photo_5201734965379849988_y.jpg", "/images/cars/photo_5201734965379849986_y.jpg"];

const CardCar = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          VW Polo VI <span className="text-sm font-light ml-8">В 357 BY 797</span>
        </div>
        <Status text="shsgc" />
      </div>
      <div className="flex gap-16">
        <Gallery images={images} />

        <div className="flex gap-6 space-x-16">
          <ul className="space-y-4 border-r pr-10 border-white50 h-fit">
            <li className="font-semibold flex gap-4 items-center">
              {<Yes />}
              Камера для парковки
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {<Yes />}
              Наличие подогрева сидений
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {<Yes />}
              Наличие подогрева руля
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {<Yes />}
              Наличие парктроников
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {<No />}
              Вместительный багажник
            </li>
            <li className="font-semibold flex gap-4 items-center">
              {<No />}
              Наличие сенсорного экрана
            </li>
          </ul>
          <ul className="">
            <li className="font-semibold flex gap-22 items-center justify-between">Класс <span className="text-sm font-light">Эконом</span></li>
            <li className="font-semibold flex gap-22 items-center justify-between">АКПП <span className="text-sm font-light">Автоматическая</span></li>
            <li className="font-semibold flex gap-22 items-center justify-between">Привод <span className="text-sm font-light">Передний</span></li>
            <li className="font-semibold flex gap-22 items-center justify-between">Объем двигателя <span className="text-sm font-light">1,4 л</span></li>
            <li className="font-semibold flex gap-22 items-center justify-between">Мощность <span className="text-sm font-light">100 л.с.</span></li>
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

export default CardCar;
