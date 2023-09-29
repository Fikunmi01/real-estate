/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        serif: `'Lora', serif`,
        sans: `'Montserrat', sans-serif`
      },
      colors: {
        darkGray: 'rgba(67, 67, 67, 1)',
        offWhite: '#F9F9F9',
        lightBlue: '#12B7B6',
        black: '#1F1F1F',
        white: '#F3F3F3',
        lightGray: '#B0B0B0',
        deepBlack: '#545454'
      }

    },
  },
  plugins: [],
}
