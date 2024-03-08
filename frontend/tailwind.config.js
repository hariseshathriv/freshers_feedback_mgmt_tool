/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      custom:{
        colors: {
          'hex-blue': '#19105B',
          'hex-lightgrey':'#F2F1F6',
          'hex-grey' : '#D1CFDE',
          'hex-darkgrey' : '#4A4A4A',
          'hex-pink' : '#FF6196'
        },
      },
      colors: {
        custom: {
          'hex-blue': '#19105B',
          'hex-lightgrey':'#F2F1F6',
          'hex-grey' : '#D1CFDE',
          'hex-darkgrey' : '#4A4A4A',
          'hex-pink' : '#FF6196'
        },
      },
    },
  },
  plugins: [],
}

