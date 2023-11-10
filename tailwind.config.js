/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        xanthic: '#EEED09',
        sanddollar: '#EDE8BA'
      },
      color: {
        textcolor: '#49526A'
      }
    },
  },
  plugins: [],
}

