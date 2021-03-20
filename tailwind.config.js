const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      amber: colors.amber,
      blue: colors.fuchsia,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
