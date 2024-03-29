/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
          'kindablue' : '#2083C5',
          'blueish' : '#2282C6',
          'grayish' : '#515456',
          'kindagray' : '#252323',

      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

