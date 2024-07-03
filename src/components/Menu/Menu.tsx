"use client";
import React from "react";
import ButtonOrLink from "../ButtonOrLink/ButtonOrLink";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/cars/rent", value: "Машины в аренде" },
  { href: "/cars", value: "Свободные машины" },
  { href: "/cars/economy", value: "Эконом" },
  { href: "/cars/comfort", value: "Комфорт" },
  { href: "/cars/premium", value: "Бизнес" },
  { href: "/cars/add", value: "Добавить машину" },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <menu className="flex items-center gap-8 px-16 py-6 border rounded-16 border-white14 text-white">
      <h3 className="font-bold mr-16">Аренда автомобилей</h3>
      {routes.map(({ href, value }, index) => {
        return (
          <ButtonOrLink key={index} href={href} isActive={pathname === href}>
            {value}
          </ButtonOrLink>
        );
      })}
    </menu>
  );
};

export default Menu;
