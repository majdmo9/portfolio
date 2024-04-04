/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        normal: ["avenir-normal"],
        thin: ["avenir-thin"],
        heavy: ["avenir-heavy"],
        bold: ["avenir-bold"],
        demi: ["avenir-demi"],
        light: ["avenir-light"],
        medium: ["avenir-medium"],
        ultrathin: ["avenir-ultrathin"],
      },
      textStroke: {
        color: "#000",
        width: "2px",
      },
    },
  },
  variants: {
    textStroke: ["responsive"],
  },
  plugins: [],
};
