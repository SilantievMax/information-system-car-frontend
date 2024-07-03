import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface WrapperProps {
  className?: string;
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={twMerge(classNames("border border-white14 rounded-16 p-10 text-white gap-6", className))}>{children}</div>;
};

export default Wrapper;
