const defaultTheme = require('tailwindcss/defaultTheme')
/* -------------------------------------------------------------------------- */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.+(js|jsx|ts|tsx)', './pages/**/*.+(js|jsx|ts|tsx)', './layouts/**/*.+(js|jsx|ts|tsx)'],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        yellow: 'var(--color-yellow)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Parisienne', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
