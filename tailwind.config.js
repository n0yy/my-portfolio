/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        josefin: ["Josefin Sans", "Inter", "sans-serif"],
      },
      colors: {
        dark: "#1C1C1C",
        primary: "#66ADE1",
        secondary: "#01EC64",
      },
    },
  },
  plugins: [],
};
