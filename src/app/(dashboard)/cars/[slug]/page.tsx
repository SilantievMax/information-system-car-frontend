import CardCar from "@/components/CardCar/CardCar";
import { CarsType, comfortData, economyData, premiumData } from "@/data/data";
import React from "react";

const page = ({ params }: { params: { slug: "economy" | "comfort" | "premium" } }) => {
  const { slug } = params;

  let data: CarsType[] = [];

  switch (slug) {
    case "comfort":
      data = comfortData;
      break;
    case "economy":
      data = economyData;
      break;
    case "premium":
      data = premiumData;
      break;
  }

  return (
    <>
      {data.map((item, index) => {
        return <CardCar key={index} data={item} />;
      })}
    </>
  );
};

export default page;

// premium comfort economy
