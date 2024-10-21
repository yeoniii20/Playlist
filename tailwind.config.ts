import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "102": "1.02",
      },
      colors: {
        black: {
          0: "#f5f5f5",
          1: "#e0e0e0",
          2: "#b3b3b3",
          3: "#808080",
          4: "#4d4d4d",
          5: "#333333",
          6: "#262626",
          7: "#1F1F1F",
          8: "#0d0d0d",
        },
        gray: {
          0: "#F4F4F4",
          1: "#E3E6EA",
          2: "#D2D2D2",
          3: "#999999",
          4: "#7F7F7F",
          5: "#4E4E4E",
          6: "#3E3E3E",
        },
        // pink: {
        //   0: "#FFE0F0",
        //   1: "#FFB3D9",
        //   2: "#FF80C2",
        //   3: "#FF4DAA",
        //   4: "#FF1A93",
        //   5: "#E6007F",
        //   6: "#D90073",
        //   7: "#B30066",
        // },
        pink: {
          0: "#FFEAF4",
          1: "#FFC2DD",
          2: "#FF9BC5",
          3: "#FF75AE",
          4: "#FF4E96",
          5: "#E64586",
          6: "#CC3E77",
          7: "#A93464",
        },
        red: {
          0: "#ffeef080",
          1: "#f6d4d6",
          2: "#f7b8bb",
          3: "#f99ca1",
          4: "#fb8087",
          5: "#fd646d",
          6: "#FF4853",
        },
        yellow: {
          0: "#fffcea80",
          1: "#f6e3d1",
          2: "#f7d5b5",
          3: "#f9c89a",
          4: "#fbba7e",
          5: "#fdad63",
          6: "#FFA048",
        },
        green: {
          0: "#eafffb80",
          1: "#E0F7E9",
          2: "#C8EFD8",
          3: "#A0E3BB",
          4: "#7AD69E",
          5: "#5BCF87",
          6: "#4CAF50",
        },
        blue: {
          0: "#E0F2FF",
          1: "#B3E0FF",
          2: "#80CCFF",
          3: "#4DB8FF",
          4: "#1AA3FF",
          5: "#008AE6",
          6: "#006699",
        },
        purple: {
          0: "#F3E8FF",
          1: "#E3CFFF",
          2: "#C99EFF",
          3: "#B080FF",
          4: "#9966FF",
          5: "#7D33FF",
          6: "#661ACC",
        },
        navy: {
          0: "#d8deeb",
          1: "#b0bdd6",
          2: "#6678ae",
          3: "#3b4c7f",
          4: "#223366",
          5: "#19274d",
          6: "#101a33",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
