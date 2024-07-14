/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#008248',
        secondary: '#1e3932',
        dark: '#000000',
        light: '#f1f8f6',
        semi: '#d4e9e2',
        pale: '#f3f1e7'
      },

      fontFamily: {
        sodo: ['SoDo Sans', 'Sans-serif']
      }
    }
  },
  plugins: []
}
