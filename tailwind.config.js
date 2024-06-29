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
      vi: '#1450EA',
      bgGray: '#424B59',
    }
  },
  plugins: [
    // require('@vueform/slider/tailwind'),
  ],
  }
