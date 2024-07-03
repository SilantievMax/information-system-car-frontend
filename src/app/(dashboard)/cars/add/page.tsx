import Input from "@/components/Input/Input";
import React from "react";

const Page = () => {
  return (
    <form className="flex flex-col gap-6 w-500 ml-auto mr-auto mt-22">
      <div className="text-center text-white font-bold text-3xl">Добавить машину</div>
      <Input label="название машины" />
      <Input label="номер машины" />
      <Input label="количество топлива" />
      <Input label="стоимость аренды в час" />
      <Input label="тип коробки передач" />
      <Input label="цвет машины" />
      <Input label="пробег машины" />
      <Input label="класс машины" />
      <Input label="тип привода" />
      <Input label="объем двигателя" />
    </form>
  );
};

export default Page;
