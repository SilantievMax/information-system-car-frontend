import classNames from "classnames";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface StatusProps {
  text: string;
  variant?: "success" | "warning" | "error";
}

const Status: FC<StatusProps> = ({ text, variant }) => {
  return (
    <div
      className={twMerge(
        classNames(
          "py-4 px-8 border-2 cursor-pointer border-white rounded-8",
          { "border-indianRed": variant === "error" },
          { "border-aquamarine": variant === "success" }
        )
      )}
    >
      {text}
    </div>
  );
};

export default Status;
