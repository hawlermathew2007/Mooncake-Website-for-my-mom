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
        'lavender-shadow': '#C9A8F1'
      }
    },
  },
  plugins: [],
}