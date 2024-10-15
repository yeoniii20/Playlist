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
        black: {
          primary: "#121212",
          darker: "#0D0D0D",
        },
        gray: {
          primary: "#1C1C1C",
          lighter: "#2F2F2F",
          darker: "#181818",
        },
        // Orange
        orange: {
          primary: "#FF8C00",
          lighter: "#FFA500",
          darker: "#CC7000",
        },

        // Skyblue
        skyblue: {
          primary: "#00BFFF",
          lighter: "#87CEEB",
          darker: "#008CBA",
        },

        // Purple
        purple: {
          primary: "#8A2BE2",
          lighter: "#9B30FF",
          darker: "#4B0082",
        },

        // Gold
        gold: {
          primary: "#FFD700",
          lighter: "#FFEA70",
          darker: "#C5A300",
        },

        // Silver
        silver: {
          primary: "#C0C0C0",
          lighter: "#D8D8D8",
          darker: "#A9A9A9",
        },

        // Crimson Red
        crimson: {
          primary: "#DC143C",
          lighter: "#FF4F70",
          darker: "#A1122C",
        },

        // Neon Green
        neonGreen: {
          primary: "#39FF14",
          lighter: "#76FF55",
          darker: "#2EBF10",
        },

        // Turquoise
        turquoise: {
          primary: "#40E0D0",
          lighter: "#7FEFE8",
          darker: "#20B2AA",
        },

        // Hot Pink
        hotPink: {
          primary: "#FF69B4",
          lighter: "#FF85C2",
          darker: "#FF1493",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
