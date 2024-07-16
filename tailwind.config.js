/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); //bonus colors

let color;
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.stories.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      maxWidth: {
        custom: '150px',
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      },
      animation: {
        'flip': 'flip 0.5s ease forwards',
        'bounce': 'bounce 0.3s ease forwards'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0)'},
          '45%': { transform: 'rotateX(90deg)'},
          '55%': { transform: 'rotateX(90deg)'},
          '100%': { transform: 'rotateX(0)'},
        },
        bounce: {
          '0%': { transform: 'scale(1)'},
          '50%': {transform: 'scale(1.2)'},
          '100%': {transform: 'scale(1)'},
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

