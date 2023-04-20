/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['vinyl', ...defaultTheme.fontFamily.sans],
        neutratext: ['NeutraText', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'caribou-dark': '#287E8F',
        'caribou-base': '#72b0bc',
        'caribou-light': '#c4e0e6',
        'caribou-brown': '#302317'
      },
    },
  },
  plugins: [],
}

// npx tailwindcss -i tailwind.base.css -o main.css --watch
