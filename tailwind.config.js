  module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './vueform.config.js',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      vi: '#A44A3F',
      bgGray: '#424B59',
      viWhite: '#FCFCFC',
      viBlack: '#02020A',
      viOrange: '#FF9153',
    },
    rotate: {
      '270': '270deg',
    },
    backgroundImage: {
      'texture': "url('@/assets/texture.png')",
      'stem': "url('@/assets/stemplayer.png')",
      '1': "url('@/assets/imgs/1.png')",
      '2': "url('@/assets/imgs/2.png')",
      '3': "url('@/assets/imgs/3.png')",
    },
    
  },
  plugins: [
  ],
  }
