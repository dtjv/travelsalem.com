const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        display: ['Caveat'],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'first', 'last'],
      padding: ['responsive', 'first', 'last'],
      width: ['responsive', 'first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
