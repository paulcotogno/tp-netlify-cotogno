module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      'display': ['Oswald', 'Open Sans'],
    },
    extend: {
      screens:{
        'portrait': {'raw': '(orientation: portrait)'},
      },
      colors:{
        'taupe' : '#E6833E',
      },
    },
  },
  variants: {},
  plugins: [],
}