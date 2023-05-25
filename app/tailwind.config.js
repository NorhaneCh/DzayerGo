/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "393px",
      md: "768px",
      lg: "1280px",
      "xl": "1920px",
    },
    colors: {
      "dzayergo-white": "#FFFFFF",
      "dzayergo-black": "#000000",
      "dzayergo-pink": "#FF5F51",
      "dzayergo-purple": "#461A3E",
      "dzayergo-red": "#C12838",
      "dzayergo-green": "#28DB0B",

    },
    extend: {},
  },
  plugins: [],
};
