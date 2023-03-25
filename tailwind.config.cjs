const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.slate,
      amber: colors.amber,
      blue: colors.fuchsia,
      "dark-burgundy": {
        DEFAULT: "#6D071A",
        50: "#F1244A",
        100: "#F0133C",
        200: "#D20D32",
        300: "#B00B2A",
        400: "#8F0922",
        500: "#6D071A",
        600: "#5A0615",
        700: "#470511",
        800: "#33030C",
        900: "#200208",
      },
      "forest-green": {
        DEFAULT: "#1C731C",
        50: "#259825",
        100: "#249424",
        200: "#228B22",
        300: "#208320",
        400: "#1E7B1E",
        500: "#1C731C",
        600: "#175E17",
        700: "#124A12",
        800: "#0D350D",
        900: "#082108",
      },
      "cocoa-brown": {
        DEFAULT: "#261C1C",
        50: "#857362",
        100: "#7E6B5D",
        200: "#6F5D52",
        300: "#614F47",
        400: "#52413C",
        500: "#433432",
        600: "#352827",
        700: "#261C1C",
        800: "#140F0F",
        900: "#030202",
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
