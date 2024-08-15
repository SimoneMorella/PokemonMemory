/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mayPoke': "url('/assets/gengar.gif')",
        'pokeCardBg': "url('/assets/backCard.webp')",
        'winGengar': "url('/assets/winGengar.webp')",
        'loseGengar': "url('/assets/loseGengar.webp')"
      },
      fontFamily: {
        'fredoka': ["Fredoka", "sans-serif"]
      }
    },
  },
  plugins: [],
}

