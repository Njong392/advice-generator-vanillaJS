/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body :'hsl(218, 23%, 16%)',
        textColor: 'hsl(193, 38%, 86%)',
        cardColor: 'hsl(217, 19%, 24%)',
        tipColor: 'hsl(150, 100%, 66%)',
        lineColor: 'hsl(217, 19%, 38%)',


      }
    },
  },
  plugins: [],
}
