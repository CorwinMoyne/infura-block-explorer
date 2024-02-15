import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#534994",
        "primary-light": "#6C62AB",
        "primary-dark": "#433A7E",
        kimberly: {
          "50": "#f3f5fa",
          "100": "#eaebf5",
          "200": "#d8dbed",
          "300": "#c0c4e1",
          "400": "#a6a7d3",
          "500": "#908fc5",
          "600": "#7e78b3",
          "700": "#746da1",
          "800": "#5a547f",
          "900": "#4b4867",
          "950": "#2c2a3c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
