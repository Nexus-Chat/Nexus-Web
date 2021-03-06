/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#ff00ee",
    },
    extend: {
      fontFamily: ["Poppins", "Vazir"],
    },
  },
  plugins: [],
};
