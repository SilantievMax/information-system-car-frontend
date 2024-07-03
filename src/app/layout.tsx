import type { Metadata } from "next";
import classNames from "classnames";
import { Inter } from "next/font/google";
import "./globals.sass";

const fonts = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Аренды легковых автомобилей",
  description: "Информационная система управления аренды легковых автомобилей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={classNames(fonts.className, "bg-night overflow-x-hidden")}>{children}</body>
    </html>
  );
}
