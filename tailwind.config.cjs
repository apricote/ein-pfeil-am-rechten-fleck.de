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
        DEFAULT: "#CB162A",
      },
      yellow: {
        DEFAULT: "#F7BF43",
        50: "#FDEECC",
        100: "#FCE7B8",
        200: "#FADA91",
        300: "#F9CC6A",
        400: "#F7BF43",
        500: "#F5AD0D",
        600: "#C28808",
        700: "#8C6206",
        800: "#563C04",
        900: "#201701",
      },
    },
    extend: {
      fontFamily: { vinque: "Vinque, serif" },
      animation: {
        "pulse-once": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
