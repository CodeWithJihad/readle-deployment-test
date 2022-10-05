/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        League: ["League Spartan", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        sans : ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],

      },
      width: {
        '128': '1280px',
        '129': '1024px',
      },
    },
  },
  plugins: [],
};
