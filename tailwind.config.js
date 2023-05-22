/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      "main": "#169991",
      "gold" : "#D7AE5E",
      "pink" : "#e12a8e",
      "white": "#f8fafc"
    },
    extend: {},
  },
  plugins: [],
}
