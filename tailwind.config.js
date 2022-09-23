/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const  defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        "Cormorant":["Cormorant Garamond",...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        darkBrown:"#523521",
        lightBrown:'#DBA97C',
        lightYellow:'#F7DD64',
        lighterYellow:'#D3AD21',
        headerBrown:'#6F4120',
        darkerHeaderBrown:'#130B06',
        coolYellow:'#ac9a76',
        coolYellowFocus:'#846b3c'
      },

      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },

      backgroundImage: theme =>({
       "menu-background":"url('https://cdn.discordapp.com/attachments/817048198022430761/1021350098501898310/pexels-abhishek-hajare-5511227.jpg')",
       "smallMenuBackground":"url('https://cdn.discordapp.com/attachments/817048198022430761/1022481055686611055/Screen_Shot_2022-09-22_at_2.12.59_PM.png')",
       "aboutBackground":"url('https://cdn.discordapp.com/attachments/817048198022430761/1021347820357296128/pexels-eiliv-aceron-6895958.jpg')"
      }),
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
