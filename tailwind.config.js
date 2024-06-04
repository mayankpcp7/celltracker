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
        lightskyBlue: "#B2D7EB",
        offGrey: "#E5E5E5",
        lightSky: "#E5F8FB",
      },
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "150%",
        lg: "166%",
      },
      backgroundImage: {
        'linear-blue': 'linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)',
        'landing-hero': "url('assets/images/landing/webp/landing-hero-bg.webp')",
      },
  
    },
  },
  plugins: [],
};
