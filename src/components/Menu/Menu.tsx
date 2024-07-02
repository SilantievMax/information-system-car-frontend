import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <menu className="flex items-center gap-8 px-16 py-6 border rounded-16 border-white14 text-white">
      <h3 className="font-bold mr-16">Аренда автомобилей</h3>
      <Link className="border border-white14 rounded-16 px-8 py-6" href={"/"}>
        Машины в аренде
      </Link>
      <Link className="border border-white14 rounded-16 px-8 py-6" href={"/"}>
        Свободные машины
      </Link>
      <Link className="border border-white14 rounded-16 px-8 py-6" href={"/"}>
        Эконом
      </Link>
      <Link className="border border-white14 rounded-16 px-8 py-6" href={"/"}>
        Комфорт
      </Link>
      <Link className="border border-white14 rounded-16 px-8 py-6" href={"/"}>
        Премиум
      </Link>
    </menu>
  );
};

export default Menu;
