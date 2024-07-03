import React, { FC } from "react";

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = ({ label }) => {
  return (
    <label className="space-y-3 text-white">
      {label}
      <input type="text" className="py-4 px-6 block w-full border border-white50 rounded-8 text-sm bg-transparent" />
    </label>
  );
};

export default Input;
