/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#FEBC0AB2", // Primary Lighter Yellow background
          darker: "#FEC00A", // Primary Darker Yellow background
          default: "#FDCA09", // Primary Yellow background
        },
        black: "#101010", // Black background
      },
      fontFamily: {
        main: ["Open Sans", "sans-serif"], // Main font
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
