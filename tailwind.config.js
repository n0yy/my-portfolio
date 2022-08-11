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
        josefin: ["Josefin Sans", "Inter"],
      },
      colors: {
        primary: "#3664A2",
        secondary: "#91CCF2",
      },
    },
  },
  plugins: [],
};
