/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        spotify:{
          lightgreen:"#62de8d",
          green: "#1DB954",
          gray: "#101010",
          lightgray: "#1d1d1d",
          hovergray: "#282828",
        }
      }
    },
  },
  plugins: [],
}
