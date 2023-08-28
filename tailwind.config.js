/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      "main":"#020617", //black
      "red": "#F34348",
      "white": "#f8fafc"
    },
    extend: {
      maxWidth: {
        '2/3': '75%',
      }
    },

  },
  plugins: [],
}
