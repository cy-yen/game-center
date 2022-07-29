/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        vip: "url('./src/assets/images/vip.png')",
        vip1: "url('./src/assets/images/vip1.png')",
        shouye: "url('./src/assets/images/shouye.png')",
        shouye1: "url('./src/assets/images/shouye1.png')",
        game: "url('./src/assets/images/game.png')",
        game1: "url('./src/assets/images/game1.png')",
        control: "url('./src/assets/images/controls.png')",
        control1: "url('./src/assets/images/controls1.png')",
        table: "url('./src/assets/images/table.png')",
        table1: "url('./src/assets/images/table1.png')"
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px'
      }
    }
  },
  plugins: []
}
