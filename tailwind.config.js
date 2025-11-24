/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#ff00ff',
          cyan: '#00ffff',
          purple: '#bc13fe',
          green: '#00ff00',
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff',
        'neon-purple': '0 0 5px #bc13fe, 0 0 10px #bc13fe, 0 0 20px #bc13fe',
      },
    },
  },
  plugins: [],
}
