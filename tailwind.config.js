/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      primary: ['Inter', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
      secondary: ['Aeonik', 'Aeonik Fallback', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0A0812',
      white: '#FFFFFF',
      primary: {
        blue: '#243BB9',
        green: '#4DB29A',
        pink: '#BE6AA7',
        orange: '#D8A87C',
      },
      secondary: {
        blue: '#3F57DA',
      },
      grey: {
        100: '#EFF1F6',
        200: '#BDC4D1',
      },
      blue: {
        100: '#3D79F5',
        200: '#0054FF',
        400: '#172136',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '413px' },
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-208deg, rgba(109, 156, 246, 0.7) 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
