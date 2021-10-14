module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      'smartphone': '600px',
      'pc': '1280px',
      'desktop': '1920px',
    },
    extend: {
      colors: {
        midBlue: '#0A81AB',
        cream: '#F9F3DF',
        greenC7D1BD: '#C7D1BD',
        orangeF2954B: '#F2954B',
        gray: '#DFE0DF'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
