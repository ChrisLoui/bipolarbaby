/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff007f",
        secondar: "#3d35cc"
      },
      fontFamily: {
        primary: "Poppins",
        'sacramento': ['Sacramento', 'cursive']
      }
    },
  },
  plugins: [],
}
