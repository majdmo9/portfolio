/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
