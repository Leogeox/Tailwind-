/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontSize: {
        texttiny: '0.73rem',
      },
      colors: {
        black: '#000000ff',
        lightgrey: '#EEF1FF',
        grey: '#81828C',
        white:' #ffffffff',
        blue: '#463ADD',
        darkblue: '#342c9eff',
        violet: '#FF00FB',
        border: '#E0E1E6',
        tag_bg: '#F9F9FB',
        tag_bg_hover: '#df50ddff',
        tag_border: '#CDCED6',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        semi_bold: ['"Inter-SemiBold"', 'sans-serif'], 
        public_sans: ['"Public Sans"', 'sans-serif'],
        regular: ['"Inter-Regular"', 'sans-serif'],
        medium: ['"Inter-Medium"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}