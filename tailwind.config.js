const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/layouts/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
