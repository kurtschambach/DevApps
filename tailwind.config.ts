import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        plex: ["'IBM Plex'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        highlight: "#4b4f4e",
        primary: "#f0a17f",
        light: "#4b423f",
        dark: "#312e34",
      },
    },
  },
  plugins: [],
};
export default config;
