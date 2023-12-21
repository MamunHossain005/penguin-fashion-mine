/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js}",
  "./node_modules/flowbite/**/*.js",
  "./*.html"
],
  theme: {
    extend: {
      colors: {
        'price': '#FABE4C',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

