import type { Config } from "tailwindcss";

/**
 * Высота/Максимальная высота/Минимальная высота.
 */
const height = {
  3: "0.188rem",
  16: "1rem",
  120: "7.5rem",
  200: "12.5rem",
};

/**
 * Ширина/Максимальная Ширина/Минимальная Ширина.
 */
const width = {
  16: "1rem",
  120: "7.5rem",
  306: "19.125rem",
  500: "31.25rem",
  700: "43.75rem",
};

/**
 * Расстояние.
 */
const spacing = {
  0: "0rem",
  2: "0.125rem",
  4: "0.25rem",
  6: "0.375rem",
  8: "0.5rem",
  10: "0.625rem",
  16: "1rem",
  22: "1.375rem",
};

/**
 * Бордер радиус.
 */
const borderRadius = {
  8: "0.5rem",
  16: "1rem",
};

/**
 * Цвет.
 */
const colors = {
  transparent: "transparent",
  raisinBlack: "#1A1B20",
  blueViolet: "#8039EF",
  white14: "#FFFFFF14",
  white50: "#FFFFFF50",
  white80: "#FFFFFF80",
  night: "#111217",
  white: "#FFFFFF",
  jet: "#333439",
};

/**
 * z-index
 */
const zIndex = {
  "0": "0",
  "10": "10",
  "20": "20",
  "30": "30",
  "40": "40",
  "50": "50",
  auto: "auto",
};

const extend = {
  width,
  maxWidth: width,
  minWidth: width,
  height,
  maxHeight: height,
  minHeight: height,
  borderRadius,
  zIndex,
  fontFamily: {
    sans: ["var(--font-roboto)"],
  },
};

/**
 * Размер шрифтов
 */
const fontSize = {
  tiny: "0.625rem", // 10px
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "4rem", // 64px
  "7xl": "5rem", // 80px
};

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors,
    extend,
    spacing,
    fontSize,
  },
  plugins: [],
};

export default config;
