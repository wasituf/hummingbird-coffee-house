module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
    },
    extend: {
      colors: {
        darkBrown: '#290F00',
        lightBrown: '#634535',
      },
      fontFamily: {
        'monts': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'sans-serif'],
      },
      borderWidth: {
        '10': '10px',
      },
      spacing: {
        '81': '20.25rem',
        '84': '21rem',
        '88': '22rem',
        'md': '454px',
        'lg': '585px',
      },
      lineClamp: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
