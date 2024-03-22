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
        primary: {
          500: "#7094C2",
          600: "#2355A0",
          700: "#1E375F",
          900: "#142341",
        },
        secondary: {
          700: "#D0717B",
        },
        light: {
          400: "#F0F0F0",
        },
      },
      fontSize: {
        xsm: ["10px", { lineHeight: "15px" }],
      },
    },
  },
  plugins: [],
};
export default config;
