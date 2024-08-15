/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mayPoke': "url('./src/assets/gengar.gif')",
        'pokeCardBg': "url('./src/assets/backCard.webp')",
        'winGengar': "url('./src/assets/winGengar.webp')",
        'loseGengar': "url('./src/assets/loseGengar.webp')"
      },
      fontFamily: {
        'fredoka': ["Fredoka", "sans-serif"]
      }
    },
  },
  plugins: [],
}

