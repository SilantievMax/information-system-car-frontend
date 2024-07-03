import CardCar from "@/components/CardCar/CardCar";
import { freeCarsData } from "@/data/data";
import React from "react";

const Page = () => {
  return (
    <>
      {freeCarsData.map((item, index) => {
        return <CardCar key={index} data={item} />;
      })}
    </>
  );
};

export default Page;
