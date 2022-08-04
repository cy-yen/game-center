/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px'
      }
    }
  },
  plugins: []
}
