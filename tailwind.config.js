/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        darkBlue: "#03045E",
        lightBlack: "#4D4D4D",
        lightBlue: "#DDF9FF",
        skyBlue: "#00B5D8",
        offGrey: "#E5E5E5",
        lightSky: "#E5F8FB",
      },
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "150%",
        lg: "166%",
      },
    },
  },
  plugins: [],
};
