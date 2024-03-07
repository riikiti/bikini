const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [animate]
}
