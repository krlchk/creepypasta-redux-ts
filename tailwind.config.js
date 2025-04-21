/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "1279.99px" },
      mobile: { max: "834.99px" },
      xs: { max: "478.99px" },
    },
    extend: {
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ['"Cormorant Garamond"', "serif"],
      },
    },
  },
  plugins: [],
};
