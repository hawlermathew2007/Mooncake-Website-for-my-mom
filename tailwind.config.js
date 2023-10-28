/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#7D5BA6',
        'cyan-green': '#30D5C8',
        'lavender-shadow': '#DFD9E2'
      }
    },
  },
  plugins: [],
}