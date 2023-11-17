/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        xanthic: "#EEED09",
        sanddollar: "#EDE8BA",
      },
      color: {
        textcolor: "#49526A",
        nnpc: {
          100: "#F6F6C0",
          300: "#E7EE87",
          500: "#8BAF8F",
          800: "#00AF50",
        },
      },
    },
  },
  plugins: [],
};
