const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bg.jpg')",


        'nlw-gradient': 'linear-gradient(89.86deg, #62EDCC 23.08%, #2680D3 69.94%)',
        'game-gradiente': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
      margin: {
        top: '-6rem',
      },
    },
  },
  plugins: [],
}
