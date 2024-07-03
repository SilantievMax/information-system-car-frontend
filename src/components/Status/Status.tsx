import classNames from "classnames";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface StatusProps {
  text: string;
  variant?: "success" | "warning" | "error";
}

const Status: FC<StatusProps> = ({ text }) => {
  return <div className={twMerge(classNames("p-4 border border-white rounded-8 "))}>{text}</div>;
};

export default Status;
