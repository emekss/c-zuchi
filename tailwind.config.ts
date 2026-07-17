import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0076FB",
        primary: {
          DEFAULT: "#1E6FEB",
          hover: "#1859C4",
        },
        navy: {
          DEFAULT: "#0B1330",
          light: "#121B3D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(11, 19, 48, 0.08)",
        navbar: "0 2px 16px rgba(11, 19, 48, 0.12)",
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
