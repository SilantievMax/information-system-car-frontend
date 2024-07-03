import React, { FC, ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface ButtonOrLinkProps {
  children: ReactNode;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

const ButtonOrLink: FC<ButtonOrLinkProps> = ({ href, children, onClick, isActive }) => {
  if (href) {
    return (
      <Link className={twMerge(classNames("border border-white14 rounded-16 px-8 py-6 h-fit", { "border-white50": isActive }))} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={twMerge(classNames("border border-white14 rounded-16 px-8 py-6 h-fit", { "border-white50": isActive }))}>
      {children}
    </button>
  );
};

export default ButtonOrLink;
