import CardCar from "@/components/CardCar/CardCar";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <CardCar />
      <CardCar />
      <CardCar />
      {params.slug}
    </>
  );
};

export default page;

// premium comfort economy
