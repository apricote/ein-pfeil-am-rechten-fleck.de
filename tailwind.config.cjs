const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "cocoa-brown": {
        DEFAULT: "#261C1C",
      },
      red: {
        DEFAULT: "#BC2B1F",
        50: "#F0A9A3",
        100: "#ED9891",
        200: "#E7786E",
        300: "#E1574B",
        400: "#DC3628",
        500: "#BC2B1F",
        600: "#8C2017",
        700: "#5C150F",
        800: "#2C0A07",
        900: "#000000",
      },
      yellow: {
        DEFAULT: "#DDB679",
        50: "#FAF4EB",
        100: "#F6EBDB",
        200: "#EED9BA",
        300: "#E5C89A",
        400: "#DDB679",
        500: "#D29E4C",
        600: "#B7822F",
        700: "#8B6223",
        800: "#5E4318",
        900: "#31230C",
      },
    },
    extend: {
      fontFamily: { vinque: "Vinque, serif" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
