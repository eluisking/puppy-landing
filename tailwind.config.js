/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      'p-orange': '#fff0d9',
      's-orange': '#e58608',
      'p-blue': '#f6f9fe',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      'poppins-r': ["Poppins", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

