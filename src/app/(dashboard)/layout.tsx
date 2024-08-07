import Menu from "@/components/Menu/Menu";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-16 flex gap-6 flex-col">
      <Menu />
      <main className="flex flex-col gap-6">{children}</main>
    </div>
  );
};

export default layout;
