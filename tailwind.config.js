/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "4rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        minColor: "#00CAC5",
        headerColor: "#1D1D1D",
        bgSection: "#2a6373",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
