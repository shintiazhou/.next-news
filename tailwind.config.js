/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 0px 25px rgba(45, 58, 33, 0.2)',
      },
      colors: {
        primary: "#2D3A21",
        secondary: "#FFA23B",
        tertiary: "#F6F5EC"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
