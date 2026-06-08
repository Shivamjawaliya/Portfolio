import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#06B6D4",
          50: "#f0fdff",
          100: "#ccfbff",
          200: "#99f6ff",
          300: "#4de8f9",
          400: "#06d4ee",
          500: "#06B6D4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        dark: {
          DEFAULT: "#0a0a0f",
          100: "#0f0f1a",
          200: "#14141f",
          300: "#1a1a2e",
          400: "#16213e",
          500: "#0f3460",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #06B6D4, 0 0 10px #06B6D4, 0 0 15px #06B6D4" },
          "100%": { boxShadow: "0 0 10px #06B6D4, 0 0 30px #06B6D4, 0 0 60px #06B6D4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
