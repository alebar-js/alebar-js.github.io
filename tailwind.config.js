const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      gray: "#c3c3c3",
      blue: "#087EA4",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inconsolata)", ...fontFamily.sans],
      },
      boxShadow: {
        sidebar: "0 35px 60px -15px rgba(8, 126, 124, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
