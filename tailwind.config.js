/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
      fontSize: {
        "3xxl": "32px",
        "4xxl": "40px",
        "6xxl": "64px",
      },
      colors: {
        darkBlue: "#03045E",
        lightBlack: "#4D4D4D",
        lightBlue: "#DDF9FF",
        skyBlue: "#00B5D8",
        lightskyBlue: "#B2D7EB",
        offGrey: "#E5E5E5",
        lightSky: "#E5F8FB",
        borderGrey: "#EBEBF1",
        iconGrey: "#EDEDED",
        errorGrey: "#959595",
        bgGrey: "#FAFAFA",
      },
      lineHeight: {
        full: "100%",
        sm: "120%",
        md: "150%",
        lg: "166%",
      },
      backgroundImage: {
        "light-sky-gradient":
          "linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(7.95deg, rgba(0, 181, 216, 0.05) -3.4%, rgba(0, 0, 128, 0.05) 114.66%);",

        "linear-blue":
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
        "landing-hero":
          "url('assets/images/landing/webp/landing-hero-bg.webp')",
        "blue-gradient": "url('assets/images/home/webp/find-phone-bg.webp')",
      },
      boxShadow: {
        "find-shadow": "0px 0px 9.5px 0px #00000014",
        "viewall": "0px 0px 9.5px 0px #00000014",
        "find-shadow": "0px 0px 9.5px 0px #00000014",
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
};
