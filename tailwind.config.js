/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      blue_background: "#353E5D",
      gold: "#B29988",

    },
    animation: {
      blink: 'blink 1s infinite',
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)' },
        '50%': { opacity: 0.7, boxShadow: '0 0 30px rgba(255, 255, 255, 1)' },
      },
    },
  },
  plugins: [],
}

